---
title: www and Root Domain (and SSL)
description: How Kite serves both your root domain and www, why connecting the root is the right choice, and how to avoid "Connection Not Private" warnings.
---

# www and Root Domain (and SSL)

Your domain can be typed with or without `www` at the front. This article explains how Kite handles both and how to keep the padlock (SSL) working.

## Root versus www

- **Root domain** (also called the **apex** or **naked** domain): your bare domain, like `yourcompany.com`.
- **www subdomain**: the same domain with `www.` in front, like `www.yourcompany.com`.

These are technically two different addresses, so you want both to work and to lead to the same site.

## Connect the root and Kite covers both

When you connect your root domain, Kite sets up both records (an `A` record for the root and a `CNAME` for `www`) and attaches both addresses to your site. Visitors who type either one reach your site, and the address you typed when connecting is treated as the canonical one for search engines. There is no separate "primary" setting to choose.

If you connect `www.yourcompany.com` as a subdomain instead, only `www` is set up, and the bare `yourcompany.com` will not work. Connect the root unless you have a specific reason not to.

## SSL

SSL is what gives you `https://` and the padlock. Kite issues the certificate automatically after the domain connects. It can take a little while to appear.

:::caution "www shows Connection Not Private"
If the root works but `www` shows a security warning (or the reverse), one of the two records is missing at your DNS provider. Check that both the root (`@`) record and the `www` record match what Entri showed, then give the certificate a few minutes.
:::

## Troubleshooting

- **`www` works but root does not (or the reverse).** Add the missing record. See [Connect a custom domain](/custom-domains/connect-a-custom-domain#the-records-you-will-see).
- **"Connection Not Private" / SSL warning.** Usually clears on its own once the certificate is issued and both records are in place. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **You connected www as a subdomain and the bare domain does not work.** Disconnect it in your site's **Settings** and connect the root domain instead.
