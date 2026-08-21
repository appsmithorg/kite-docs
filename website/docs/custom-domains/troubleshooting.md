---
title: Troubleshoot a Connected Domain
description: Fix common custom-domain problems on Kite, 404 errors, an old site showing, SSL warnings, "already connected," and changes not appearing.
---

# Troubleshoot a Connected Domain

If your domain is connected but something isn't right, this article maps the symptom you're seeing to a fix. Most domain issues come down to one of three things: the domain needs reattaching to the current deployment, an old DNS record is still in place, or DNS just hasn't finished propagating.

:::note DNS takes time
**Propagation** is how long DNS changes take to spread across the internet, usually minutes, but sometimes up to about 48 hours. Before assuming something is broken, give a recent change time to settle.
:::

## Symptom → fix

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **404 / DEPLOYMENT_NOT_FOUND** | Domain isn't attached to your current live deployment | Republish, then reattach the domain to the current deployment |
| **Shows an old or different site** | A DNS record (often `CNAME`) still points somewhere else | Update the records to Kite's values and remove old ones |
| **"Connection Not Private" / SSL error** | Certificate not issued yet, or only one of www/root set | Give it time; make sure both `www` and root are configured |
| **"Domain already connected to another website"** | Domain still tied to a different/deleted Kite app | Disconnect from the old app, or contact support |
| **Changes not appearing** | DNS propagation or a missing republish | Wait for propagation; republish |

## 404 or DEPLOYMENT_NOT_FOUND

Your domain reaches Kite, but you get a 404 page or an error mentioning **DEPLOYMENT_NOT_FOUND**. This means the domain isn't pointing at a current, live version of your site.

1. Open your site in Kite and click **Publish** to republish.
2. If it persists, reattach the domain to the current deployment: go to the custom domain settings, disconnect the domain, then reconnect it with **Add Custom Domain** → **Connect Domain**. <!-- TODO: verify exact reattach UI -->
3. Allow a little time, then reload.

See [Connect a custom domain](/custom-domains/connect-a-custom-domain).

## Domain shows an old or different site

If your domain loads a previous site (or someone else's), a DNS record is still pointing at the old host.

1. Open your DNS settings at your registrar (see [Connect a domain from your registrar](/custom-domains/registrar-guides)).
2. Check your `A` and `CNAME` records. A leftover `CNAME` pointing at an old host is the usual culprit.
3. Replace them with the exact values Entri shows you, and delete any stale records.
4. **Republish** and wait for propagation.

:::caution Cloudflare in the middle
If your nameservers point to Cloudflare, edit the records **in Cloudflare**, not at the original registrar. See the note in [Connect a domain from your registrar](/custom-domains/registrar-guides).
:::

## SSL "Connection Not Private" / broken certificate

The padlock is missing or the browser warns the connection isn't private.

1. **Give it time.** SSL certificates are issued automatically after the domain connects and can take a little while to appear.
2. **Make sure both `www` and the root are configured.** If only one is set up, the other may throw a certificate warning. See [www vs. Root Domain (and SSL)](/custom-domains/www-vs-root).
3. If it still fails after the records are correct and you've waited, contact support. <!-- TODO: verify support path -->

## "Domain already connected to another website"

The domain is still attached to a different Kite app, often one you deleted without disconnecting the domain first.

1. If the old app still exists, open it and disconnect the domain there.
2. If you deleted the old app, contact support to release the domain.
3. Then reconnect on your current site.

Full details: [Move, switch, or reuse a domain](/custom-domains/switch-or-reuse-domain).

## Changes not appearing

You updated your site or DNS but nothing changed in the browser.

1. **Republish** your site so the latest version is live.
2. Wait for DNS propagation (up to ~48 hours for DNS changes).
3. Try a hard refresh or a private/incognito window to rule out browser caching.

See [Changes not showing](/publishing/changes-not-showing).

## Still stuck?

- Re-read the connection steps in [Connect a custom domain](/custom-domains/connect-a-custom-domain).
- Confirm you're editing DNS in the right place in [Connect a domain from your registrar](/custom-domains/registrar-guides).
- For anything that won't clear after correct setup plus propagation time, contact support. <!-- TODO: verify support path -->
