---
title: Connect a Custom Domain
description: Step-by-step guide to connecting your own domain to your Kite site using the one-click Entri flow or manual DNS setup.
---

# Connect a Custom Domain

This article shows you how to point your own domain (like `yourbusiness.com`) at your published Kite site. There are two ways to do it: a fast one-click flow called **Entri** that does the setup for you, and a manual option where you add DNS records yourself.

## Before you start

- **Publish your site first.** You can only connect a domain to a live site. See [How to publish](/publishing/how-to-publish).
- **A paid plan is required** to connect a custom domain. <!-- TODO: verify -->  See [Plans & trial](/pricing-credits/plans-and-trial).
- Have your domain handy. It's fine if you bought it anywhere — see [Connect a domain from your registrar](/custom-domains/registrar-guides).

## Start connecting your domain

These first steps are the same for both methods.

1. Open your site in Kite.
2. Click **Publish** in the top-right corner.
3. Click **Add Custom Domain**.
4. Type your domain (for example, `yourbusiness.com`) and click **Connect Domain**.
5. The **Entri** modal opens. This is the tool Kite uses to set up your DNS. Continue with one of the two methods below.

:::note What is Entri?
**Entri** is a service that connects to your domain provider and adds the right DNS records automatically, so you usually don't have to touch any technical settings yourself.
:::

## Method A: One-click setup with Entri (recommended)

This is the easiest path and works with most popular domain providers.

1. In the **Entri** modal, find and select your domain provider from the list (for example, GoDaddy, Namecheap, or Cloudflare).
2. Sign in to your provider when prompted. This lets Entri add the DNS records for you.
3. Confirm the changes Entri shows you and let it apply them.
4. Close the modal when it reports success.
5. Back in Kite, you may need to **republish** your site for the domain to go fully live. See [How to publish](/publishing/how-to-publish).

:::tip
If your provider is in the list, always try this method first — it avoids typing DNS records by hand and reduces mistakes.
:::

## Method B: Manual DNS setup

Use this if your provider isn't listed in Entri, or if someone else manages your DNS.

1. In the **Entri** modal, scroll to the **end of the providers list**.
2. Click **Go to our manual setup**.
3. Entri shows you all the DNS records you need to add. Keep this screen open.
4. Add those records in your domain provider's DNS settings (see [Connect a domain from your registrar](/custom-domains/registrar-guides) for where to find them).
5. Save the records at your provider.
6. Back in Kite, **republish** your site if prompted.

### Handing the records to someone else

If a colleague, web person, or IT contact manages your DNS, you don't have to do it yourself:

1. On the manual setup screen, click **Forward instructions to a colleague**.
2. This generates a link that contains all the DNS records.
3. Send that link to whoever manages your DNS, and they can add the records for you.

### DNS records you'll typically add

If you're adding records by hand, these are the values seen in real setups: <!-- TODO: verify current values -->

| Type | Host / Name | Value / Points to |
|------|-------------|-------------------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

:::note What these mean
- An **A record** points a domain to a server's numeric address (an IP address). The host `@` means the root of your domain (for example, `yourbusiness.com` with no `www`).
- A **CNAME record** points one name at another name. Here it points `www.yourbusiness.com` at Kite's hosting.
:::

:::caution Always confirm the exact values in Entri
Use the records that **Entri shows you** for your specific domain rather than copying these from memory — values can change. The table above is a reference for what they tend to look like.
:::

## After you connect

- **Republish if prompted.** After connecting, your site may need a fresh publish for the domain to serve the latest version.
- **DNS changes take time to spread.** This is called propagation. It can be just a few minutes, but it can take up to about 48 hours for the change to reach everyone on the internet. If your domain isn't working right away, give it some time before assuming something is wrong.

:::info
Want to set up `www` and the root domain correctly, and avoid security warnings? See [www vs. Root Domain (and SSL)](/custom-domains/www-vs-root).
:::

## Troubleshooting

- **Domain still shows the old `.kite.space` address or a 404.** Try republishing, then wait for DNS to propagate. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **"Domain already connected to another website."** The domain is attached to a different Kite app. Disconnect it there first, or contact support. See [Move, switch, or reuse a domain](/custom-domains/switch-or-reuse-domain).
- **"Connection Not Private" / SSL warning.** This often clears on its own as the security certificate is issued, especially once both `www` and root are set. See [www vs. Root Domain (and SSL)](/custom-domains/www-vs-root).
- **Changes aren't showing up.** This is usually DNS propagation or a needed republish. See [Changes not showing](/publishing/changes-not-showing).
