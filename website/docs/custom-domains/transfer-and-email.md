---
title: Transferring a Domain & Keeping Your Email
description: How connecting a domain to Kite affects your registrar and your domain-linked email, and what stays exactly the same.
---

# Transferring a Domain & Keeping Your Email

A common worry when connecting a domain is "Will I lose my email?" or "Do I have to move my whole domain to Kite?" The short answer: you keep your domain where it is, and your email keeps working. This article explains exactly what changes and what doesn't.

## Kite doesn't take over your domain

Kite does **not** take over full registration or management of your domain from your registrar. <!-- TODO: verify -->  Your domain stays registered exactly where it is today (GoDaddy, Squarespace, Namecheap, and so on). To connect it to your site, you only **point its DNS** at Kite. You don't transfer ownership.

:::note What this means in plain terms
You're not handing your domain to Kite. You're leaving it where you bought it and just changing a couple of DNS records so your website loads from Kite.
:::

## Your email is not affected

Your domain-linked email (for example, `you@yourbusiness.com`) keeps working. Here's why: email is controlled by different DNS records (called **MX records**) than your website. When you connect to Kite, only the **website** records change, and your **mail** records stay exactly as they are.

:::note What is an MX record?
An **MX record** tells the internet which server handles email for your domain. Your website uses `A` and `CNAME` records; your email uses `MX` records. They live side by side and don't interfere with each other.
:::

:::caution Don't delete records you don't recognize
When you add the Kite website records, **leave your existing MX records (and any other mail-related records) in place**. The mistake that causes email problems is deleting mail records, not connecting a website. If you only add the `A` and `CNAME` records Kite asks for, your email is untouched.
:::

## Answering the common worries

**Do I have to stop paying my current registrar?**
No. Your domain registration stays with them, so you keep renewing it there as usual. Connecting to Kite doesn't cancel or move that.

**Does connecting cost extra on top of my domain?**
Whether connecting a custom domain depends on your Kite plan is being confirmed. <!-- TODO: verify whether custom domains are available on the Free plan --> You still pay your registrar separately for the domain itself, just like before. See [Plans & Pricing](/pricing-credits/plans-and-trial).

**Will my email go down during the change?**
It shouldn't. Because you're only changing website records and leaving mail records alone, your inbox keeps receiving mail throughout. The only thing that "switches over" is which site loads when someone visits your domain.

**What if I'm using a separate email provider (like Google Workspace or Microsoft 365)?**
That's fine. Those services rely on your MX records, which you're not changing. Keep them as they are and only add the website records Kite asks for.

## Troubleshooting

- **Worried email stopped after connecting.** Check that your `MX` records are still present at your DNS provider. If they were removed, re-add them from your mail provider's instructions. See also [Email sending issues](/troubleshooting/email-sending).
- **Not sure where your DNS is managed.** See [Connect a domain from your registrar](/custom-domains/registrar-guides), including the note about Cloudflare nameservers.
- **Website connected but not loading.** That's a website issue, not an email one. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
