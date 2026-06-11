---
title: Connect a Custom Domain
description: Step-by-step guide to connecting your own domain to your Kite site using the one-click Entri flow or manual DNS setup.
---

# Connect a Custom Domain

This article shows you how to point your own domain (like `yourbusiness.com`) at your published Kite site. You can connect a domain you already own or buy one directly through Kite.

## Before you start

- **Publish your site first.** You can only connect a domain to a live site. The **Add custom domain** button stays disabled until you publish. See [How to publish](/publishing/how-to-publish).
- **Custom domains require a paid Kite plan.** See [Plans & trial](/pricing-credits/plans-and-trial) or [kite.ai](https://kite.ai/) for current plan options.
- Have your domain handy if you already own one. It does not matter where you bought it. See [Connect a domain from your registrar](/custom-domains/registrar-guides).

## Open the publish panel

1. Open your site in Kite.
2. Click **Publish** in the top-right corner.
3. Click **Add custom domain**.

If the button is grayed out, publish your site first. You will see the hint: *"Publish your website to add a custom domain"*.

If Kite asks you to upgrade, follow the on-screen steps to choose a plan that includes custom domains.

![Add custom domain button after publish](/img/docs/add-custom-domain-enabled.png)

## Choose how to add your domain

Kite gives you two options:

- **Connect a domain you own** for domains from GoDaddy, Cloudflare, or any DNS provider.
- **Buy a new domain** to search for and purchase a domain directly in Kite.

![Add custom domain options screen](/img/docs/add-custom-domain-options.png)

## Connect a domain you own

### Enter your domain

1. Click **Connect a domain you own**.
2. Type your domain name (for example, `example.com`).
3. Optional: check **I want to use a subdomain** if you want an address like `www.example.com` or `shop.example.com`.
4. Click **Connect domain**.

![Connect your domain form](/img/docs/connect-your-domain.png)

:::tip You do not need to move your domain to Kite
You only add a few settings at the company where you bought your domain. Kite walks you through this step by step.
:::

### Set up DNS with Entri

After you click **Connect domain**, the **Entri** modal opens. This is the tool Kite uses to set up your DNS.

:::note What is Entri?
**Entri** is a service that connects to your domain provider and adds the right DNS records automatically, so you usually don't have to touch any technical settings yourself.
:::

![DNS setup guide](/img/docs/dns-setup-modal.png)

You can finish setup in one of two ways:

#### Method A: One-click setup with Entri (recommended)

This is the easiest path and works with most popular domain providers.

1. In the **Entri** modal, find and select your domain provider from the list (for example, GoDaddy, Namecheap, or Cloudflare).
2. Sign in to your provider when prompted. This lets Entri add the DNS records for you.
3. Confirm the changes Entri shows you and let it apply them.
4. Close the modal when it reports success.
5. Back in Kite, you may need to **republish** your site for the domain to go fully live. See [How to publish](/publishing/how-to-publish).

:::tip
If your provider is in the list, always try this method first. It avoids typing DNS records by hand and reduces mistakes.
:::

#### Method B: Manual DNS setup

Use this if your provider isn't listed in Entri, or if someone else manages your DNS.

1. In the **Entri** modal, scroll to the **end of the providers list**.
2. Click **Go to our manual setup**.
3. Entri shows you all the DNS records you need to add. Keep this screen open.
4. Add those records in your domain provider's DNS settings (see [Connect a domain from your registrar](/custom-domains/registrar-guides) for where to find them).
5. Save the records at your provider.
6. When you have finished at your provider, confirm in Kite.
7. Back in Kite, **republish** your site if prompted.

##### Handing the records to someone else

If a colleague, web person, or IT contact manages your DNS, you don't have to do it yourself:

1. On the manual setup screen, click **Forward instructions to a colleague**.
2. This generates a link that contains all the DNS records.
3. Send that link to whoever manages your DNS, and they can add the records for you.

##### DNS records you'll typically add

If you're adding records by hand, these are the values seen in real setups:

| Type | Host / Name | Value / Points to |
|------|-------------|-------------------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

:::note What these mean
- An **A record** points a domain to a server's numeric address (an IP address). The host `@` means the root of your domain (for example, `yourbusiness.com` with no `www`).
- A **CNAME record** points one name at another name. Here it points `www.yourbusiness.com` at Kite's hosting.
:::

:::caution Always confirm the exact values in Entri
Use the records that **Entri shows you** for your specific domain rather than copying these from memory. Values can change. The table above is a reference for what they tend to look like.
:::

## Buy a domain through Kite

If you do not own a domain yet, you can buy one directly in Kite:

1. Under **Buy a new domain**, search for the name you want.
2. Pick an option marked **Available** and review the price and renewal cost.
3. Click **Confirm purchase**.

![Confirm domain purchase](/img/docs/buy-domain-confirm.png)

:::warning Domain purchases
Domain purchases are non-refundable. You are charged right away for the registration price and each year for renewal. Your domain is usually ready to use immediately after purchase.
:::

## After you connect

After you connect or buy a domain, Kite shows a **Setting up** status while your new address spreads across the internet.

![Domain setting up status](/img/docs/domain-setting-up.png)

- This usually takes a few minutes.
- In some cases it can take up to 24 hours.
- Try opening your domain in a browser to see if it is live.

> This domain is being set up across the internet. It usually takes a few minutes, but can take up to 24 hours. You can try opening the domain to see if it's live.

When setup is complete, the status changes to **Connected** and your custom domain becomes your site's main address.

- **Republish if prompted.** After connecting, your site may need a fresh publish for the domain to serve the latest version.

:::info
Want to set up `www` and the root domain correctly, and avoid security warnings? See [www vs. Root Domain (and SSL)](/custom-domains/www-vs-root).
:::

## Disconnect a custom domain

To remove a custom domain from your site, go to your site's **Settings** and click **Disconnect custom domain**. Your site will go back to using its `yoursite.kite.space` address.

To move a domain to a different site, see [Move, switch, or reuse a domain](/custom-domains/switch-or-reuse-domain).

## Troubleshooting

| Issue | What to do |
| --- | --- |
| **Add custom domain** is disabled | Publish your site first |
| Upgrade prompt appears | Follow the upgrade steps shown in Kite, or see [Plans & trial](/pricing-credits/plans-and-trial) |
| Setup was cancelled | Click **Connect domain** and start again |
| Domain not loading after 24 hours | Double-check that the settings at your domain provider match what Kite showed |

- **Domain still shows the old `.kite.space` address or a 404.** Try republishing, then wait for DNS to propagate. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **"Domain already connected to another website."** The domain is attached to a different Kite app. Disconnect it there first, or contact support. See [Move, switch, or reuse a domain](/custom-domains/switch-or-reuse-domain).
- **"Connection Not Private" / SSL warning.** This often clears on its own as the security certificate is issued, especially once both `www` and root are set. See [www vs. Root Domain (and SSL)](/custom-domains/www-vs-root).
- **Changes aren't showing up.** This is usually DNS propagation or a needed republish. See [Changes not showing](/publishing/changes-not-showing).
