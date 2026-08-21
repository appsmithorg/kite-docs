---
title: Connecting a Domain & Keeping Your Email
description: How connecting a domain to Kite affects your registrar and your domain-linked email, which records Kite adds, and what stays exactly the same.
---

# Connecting a Domain & Keeping Your Email

A common worry when connecting a domain is "Will I lose my email?" or "Do I have to move my whole domain to Kite?" The short answer: you keep your domain where it is, and your email keeps working. This article explains exactly what changes and what does not.

## Kite does not take over your domain

Kite does not take over registration or management of your domain from your registrar. Your domain stays registered where it is today (GoDaddy, Squarespace, Namecheap, and so on). To connect it to your site, you point its DNS at Kite. You do not transfer ownership.

## Your existing email is not affected

Your domain-linked email (for example, `you@yourcompany.com`) keeps working. Email is controlled by **MX records**, and Kite does not change the MX records for your domain's root.

## Which records Kite adds

The DNS setup shows more than the two website records:

- **A and CNAME records** point your domain at your Kite site.
- **MX and TXT records on their own labels** let Kite send email on your domain's behalf (for example, outreach and campaigns from your team's address). Because they live on separate labels, they sit alongside your existing mail records without interfering.
- **A TXT record for Google Search Console**, on paid plans, so Kite can verify your domain and submit your sitemap.

:::caution Add records; do not delete the ones you have
The mistake that causes email problems is deleting your existing MX records, not adding Kite's. Add what Entri shows and leave everything else in place.
:::

## Answering the common worries

**Do I have to stop paying my current registrar?**
No. Your domain registration stays with them, so you keep renewing it there as usual.

**Does connecting cost extra on top of my domain?**
Custom domains are included in Growth and Business. You still pay your registrar separately for the domain itself. See [Plans & Pricing](/pricing-credits/plans-and-trial).

**Will my email go down during the change?**
No. Your mail records are left alone, so your inbox keeps receiving mail throughout.

**I use Google Workspace or Microsoft 365.**
That is fine. Those services rely on your existing MX records, which you are not changing.

## Troubleshooting

- **Worried email stopped after connecting.** Check that your original `MX` records are still present at your DNS provider. If they were removed, re-add them from your mail provider's instructions.
- **Not sure where your DNS is managed.** See [Connect a domain from your registrar](/custom-domains/registrar-guides), including the note about Cloudflare nameservers.
- **Website connected but not loading.** See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
