---
title: Custom Domains & DNS
description: Learn how to connect your own domain name to your published Kite site, set up DNS, and troubleshoot common domain issues.
---

# Custom Domains & DNS

A custom domain is your own web address (like `yourbusiness.com`) instead of the free Kite address that ends in `.kite.space`. Connecting one makes your site look professional and easy to remember. This section walks you through everything from your first connection to fixing a domain that isn't behaving.

## What is a custom domain?

When you build a site with Kite, it's published to a free address such as `your-site.kite.space`. A custom domain lets visitors reach that same site at a name you own, such as `www.yourbusiness.com`. You buy or already own the domain from a registrar (the company you bought it from, like GoDaddy or Squarespace), and then you point it at Kite using DNS settings.

:::note What is DNS?
DNS (Domain Name System) is like the internet's phone book. It tells browsers which server to load when someone types your domain. Connecting a domain to Kite means adding a couple of DNS records so your domain points to Kite's servers.
:::

## Before you start

A few things need to be true before you can connect a custom domain:

1. **You must publish your site first.** A custom domain points to a published site, so there has to be something live to point at. See [How to publish](/publishing/how-to-publish).
2. **Connecting a custom domain may depend on your plan.** <!-- TODO: verify whether custom domains are available on the Free plan under the current Free / Growth / Business plans --> See [Plans & Pricing](/pricing-credits/plans-and-trial).
3. **You need access to your domain's DNS settings**: either through the one-click flow or by logging in to your registrar.

:::tip You don't have to buy your domain from Kite
It doesn't matter where you bought your domain. What matters is that its DNS points to Kite. See [Connect a domain from your registrar](/custom-domains/registrar-guides).
:::

## Articles in this section

- [Connect a Custom Domain](/custom-domains/connect-a-custom-domain): the core how-to, covering both the one-click Entri flow and manual DNS setup.
- [Connect a Domain from Your Registrar](/custom-domains/registrar-guides): where to find DNS settings at Squarespace, GoDaddy, Namecheap, OVH, Google Domains, Cloudflare, and more.
- [www vs. Root Domain (and SSL)](/custom-domains/www-vs-root): choosing a primary address and avoiding "Connection Not Private" warnings.
- [Transferring a Domain & Keeping Your Email](/custom-domains/transfer-and-email): what happens to your registrar and your email when you connect to Kite.
- [Move, Switch, or Reuse a Domain Across Sites](/custom-domains/switch-or-reuse-domain): changing which site a domain points to.
- [Troubleshoot a Connected Domain](/custom-domains/troubleshooting): fixes for 404s, old sites showing, SSL errors, and more.
