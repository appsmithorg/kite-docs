---
title: Move, Switch, or Reuse a Domain Across Sites
description: Change which Kite site a domain points to, reuse a domain after deleting a site, and fix the "already connected to another website" message.
---

# Move, Switch, or Reuse a Domain Across Sites

Sometimes you need to move a domain you already connected. Maybe you rebuilt your site as a new project, or you want one domain to point at a different site. This article covers each case.

## The one rule

A domain can be connected to **one** Kite site at a time, and a site can have **one** custom domain. To move a domain, disconnect it from the old site first, then connect it on the new one.

## Change the domain on a site

1. Open the site in Kite and go to **Settings**.
2. Click **Disconnect custom domain**. The site returns to its `kite.space` address.
3. Click **Publish** in the top-right corner, then **Add custom domain**, and connect the new domain. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).

## Move a domain to a different site

1. Open the **old** site, go to **Settings**, and click **Disconnect custom domain**.
2. Open the **new** site and connect the domain from its publish panel.
3. Kite republishes the new site once the connection succeeds.

## Reuse a domain after deleting a site

Deleting a website releases its domain automatically, so you can connect the domain to another site straight away. You do not need to disconnect first or ask support.

## "Domain already connected to another website"

This message means the domain is attached to a different site that still exists in your account. Open that site, go to **Settings**, click **Disconnect custom domain**, and try again.

## The browser still shows the `.kite.space` URL

If you connected your domain but the address bar still shows `your-site.kite.space`, your registrar is **forwarding** the domain to the Kite URL instead of **pointing** it with DNS records.

1. Remove any URL forwarding or redirect rule for the domain at your registrar.
2. Add the DNS records from Entri. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
3. Allow time for DNS to propagate.

:::note Forwarding versus pointing
**Forwarding** bounces visitors to another address (and shows that address). **Pointing** with DNS records serves your site directly on your own domain. You want pointing.
:::

## Troubleshooting

- **Domain shows a 404 or an old site after switching.** Propagation may still be in progress, or a stale record is in place. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **Changes not appearing after switching.** Usually DNS propagation. See [Changes not showing](/publishing/changes-not-showing).
