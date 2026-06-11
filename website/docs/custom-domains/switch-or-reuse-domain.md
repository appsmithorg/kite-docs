---
title: Move, Switch, or Reuse a Domain Across Sites
description: Change which Kite site a domain points to, reconnect a domain after deleting an app, and fix a domain that's blocked as "already connected."
---

# Move, Switch, or Reuse a Domain Across Sites

Sometimes you need to move a domain you already connected — maybe you rebuilt your site as a new app, or you want one domain to point at a different site. This article covers changing a domain, reconnecting it after deleting the original app, and what to do when Kite says the domain is "already connected to another website."

## Change the domain on a site

If you want a site to use a different domain than the one it currently has:

1. Open the site in Kite.
2. Click **Publish** in the top-right corner.
3. Go to the custom domain settings (where you originally connected the domain).
4. Disconnect or remove the old domain, then add the new one with **Add Custom Domain** → type the domain → **Connect Domain**. <!-- TODO: verify exact UI for removing/replacing -->
5. **Republish** if prompted.

See [Connect a custom domain](/custom-domains/connect-a-custom-domain) for the full connection flow.

## Reuse a domain on a different (or rebuilt) site

A domain can only be actively connected to **one** Kite site at a time. If you want to point it at a different site, you first have to free it from the old one.

1. Open the **old** site/app that currently holds the domain.
2. Disconnect the domain there.
3. Open the **new** site and connect the domain following [Connect a custom domain](/custom-domains/connect-a-custom-domain).
4. **Republish** the new site.

## "Domain already connected to another website"

This is the most common blocker when reusing a domain. It usually happens when:

- You deleted the original app **without disconnecting the domain first**, so Kite still has the domain tied to that old (now-gone) app.
- The domain is still attached to another site you own.

What to do:

1. If the old app still exists, open it and **disconnect the domain** there, then connect it on the new site.
2. If you already **deleted** the old app and can no longer disconnect it, the domain may stay flagged as in use. In that case, **contact support** to have it released. <!-- TODO: verify support path -->

:::tip Disconnect before you delete
To avoid this entirely, always disconnect a custom domain from a site **before** you delete that app. It saves you from a stuck "already connected" state later.
:::

## Forwarding still shows the `.kite.space` URL in the browser

If you connected your domain but the browser address bar still shows the `your-site.kite.space` URL (instead of your custom domain), that's a sign your domain is **forwarding/redirecting** to the Kite URL rather than being served directly on your domain.

What to check:

1. Make sure you used Kite's DNS records (`A` / `CNAME`) rather than a **URL forwarding / redirect** option at your registrar. URL forwarding sends visitors to the `.kite.space` address and shows it in the bar.
2. Remove any registrar-side forwarding rule for the domain.
3. Re-add the proper DNS records from Entri. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
4. **Republish** and allow time for DNS to propagate.

:::note Forwarding vs. pointing
**Forwarding** bounces visitors to another address (and shows that address). **Pointing** (with DNS records) serves your site directly on your own domain, so the address bar keeps showing your domain. You want pointing.
:::

## Troubleshooting

- **Domain shows a 404 or an old site after switching.** The domain may still be attached to the old deployment. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **Stuck on "already connected."** Disconnect from the old app, or contact support if the app was deleted.
- **Changes not appearing after switching.** Usually DNS propagation or a needed republish. See [Changes not showing](/publishing/changes-not-showing).
