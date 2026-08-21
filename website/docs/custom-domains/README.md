---
title: Custom Domains & DNS
description: Learn how to connect your own domain name to your published Kite site on the Growth or Business plan, set up DNS, and troubleshoot common domain issues.
---

# Custom Domains & DNS

A custom domain is your own web address (like `yourcompany.com`) instead of the free Kite address that ends in `.kite.space`. Connecting one makes your site look professional and easy to remember. This section walks you through everything from your first connection to fixing a domain that is not behaving.

## What is a custom domain?

When you build a site with Kite, it is published to a free address such as `your-site.kite.space`. A custom domain lets visitors reach that same site at a name you own, such as `www.yourcompany.com`. You buy or already own the domain from a registrar (the company you bought it from, like GoDaddy or Squarespace), and then you point it at Kite using DNS settings.

:::note What is DNS?
DNS (Domain Name System) is like the internet's phone book. It tells browsers which server to load when someone types your domain. Connecting a domain to Kite means adding a few DNS records so your domain points to Kite's servers.
:::

## Before you start

1. **Publish your site first.** A custom domain points to a published site. See [How to publish](/publishing/how-to-publish).
2. **Be on Growth or Business, or in the 5-day trial.** Custom domains require an active subscription. Moving to Free disconnects them. See [Plans & Pricing](/pricing-credits/plans-and-trial).
3. **You need access to your domain's DNS settings,** either through the one-click flow or by logging in to your registrar.
4. **One custom domain per site.** To change it, disconnect the current one first.

:::tip You do not have to buy your domain from Kite
It does not matter where you bought your domain. What matters is that its DNS points to Kite. See [Connect a domain from your registrar](/custom-domains/registrar-guides).
:::

## Articles in this section

- [Connect a Custom Domain](/custom-domains/connect-a-custom-domain): the core how-to, covering both the one-click Entri flow and manual DNS setup.
- [Connect a Domain from Your Registrar](/custom-domains/registrar-guides): where to find DNS settings at Squarespace, GoDaddy, Namecheap, OVH, Cloudflare, and more.
- [www and Root Domain (and SSL)](/custom-domains/www-vs-root): how Kite handles both addresses and avoids "Connection Not Private" warnings.
- [Connecting a Domain & Keeping Your Email](/custom-domains/transfer-and-email): what happens to your registrar and your email when you connect to Kite.
- [Move, Switch, or Reuse a Domain Across Sites](/custom-domains/switch-or-reuse-domain): changing which site a domain points to.
- [Troubleshoot a Connected Domain](/custom-domains/troubleshooting): fixes for 404s, verification needed, SSL errors, and more.
