import AppKit
import Foundation

let inputPath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]

guard let image = NSImage(contentsOfFile: inputPath),
      let input = NSBitmapImageRep(data: image.tiffRepresentation ?? Data()) else {
  fatalError("Unable to read image")
}

let width = input.pixelsWide
let height = input.pixelsHigh

guard let output = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: width,
  pixelsHigh: height,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: width * 4,
  bitsPerPixel: 32
) else {
  fatalError("Unable to create output")
}

func clamp(_ value: Double) -> UInt8 {
  UInt8(max(0, min(255, round(value))))
}

for y in 0..<height {
  for x in 0..<width {
    guard let color = input.colorAt(x: x, y: y) else { continue }
    var r = color.redComponent * 255
    var g = color.greenComponent * 255
    var b = color.blueComponent * 255
    let a = color.alphaComponent

    let xProgress = Double(x) / Double(width)
    let lift = max(0, 1 - xProgress / 0.62)
    if lift > 0 {
      let strength = lift * lift
      let brightness = 70.0 * strength
      r += brightness
      g += brightness
      b += brightness * 0.72

      // Counter the baked-in blue wash on the left without making the image flat.
      b -= 22.0 * strength
      r += 12.0 * strength
      g += 6.0 * strength
    }

    output.setColor(
      NSColor(
        calibratedRed: CGFloat(clamp(r)) / 255,
        green: CGFloat(clamp(g)) / 255,
        blue: CGFloat(clamp(b)) / 255,
        alpha: a
      ),
      atX: x,
      y: y
    )
  }
}

let outputURL = URL(fileURLWithPath: outputPath)
try FileManager.default.createDirectory(at: outputURL.deletingLastPathComponent(), withIntermediateDirectories: true)
guard let png = output.representation(using: .png, properties: [:]) else {
  fatalError("Unable to encode PNG")
}
try png.write(to: outputURL)
