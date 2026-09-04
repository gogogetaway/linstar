# Sales Prospect Registry

`prospects-master.csv` is the single source of truth for researched sales leads.
Do not create separate country or date-based lead files. Add new prospects to the
master file and update existing rows when better contact information is found.

## Duplicate Check

Before adding a prospect, check these keys in order:

1. Website domain: lowercase, remove `https://`, paths, query strings and `www.`.
2. Public email domain and exact public email address.
3. Normalized company name plus country when no website is available.

If any key matches, update the existing row instead of adding another row. A
branch, alternate trading name or additional contact for the same legal business
belongs on the existing row unless it has a genuinely separate purchasing team.

Example checks:

```sh
rg -i 'allwoodtrading\.com|supply@allwoodtrading\.com|Allwood Trading' sales/prospects-master.csv
```

## Research Standard

- Prefer a company's official website and public business contact details.
- Record only companies with a clear product or buyer-type match.
- A directory listing is a discovery source, not proof of active purchasing.
- Never label a company as a confirmed importer or active buyer without evidence.
- Keep the `Checked` date current when details are reverified.
- Keep `Do Not Contact` records in the master file so they are not researched or
  contacted again.

## Current Market Order

1. UAE: film faced plywood, PP plywood, commercial plywood, LVL and H20 buyers.
2. Saudi Arabia: construction plywood, formwork and H20 buyers.
3. Philippines: phenolic and commercial plywood buyers.
4. Kenya and Tanzania: plywood importers and building-material distributors.
5. Ghana and Nigeria: plywood and construction-material importers.

For each research batch, use one country, one product group and one buyer type.
Check the master registry before research and again before saving each prospect.

