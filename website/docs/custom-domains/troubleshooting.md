---
title: Troubleshoot a Connected Domain
description: Fix common custom-domain problems on Kite, including 404 errors, verification needed, an old site showing, SSL warnings, and "already connected."
---

# Troubleshoot a Connected Domain

If your domain is connected but something is not right, this article maps the symptom you are seeing to a fix. Most domain issues come down to one of three things: the domain needs verifying, an old DNS record is still in place, or DNS has not finished propagating.

:::note DNS takes time
**Propagation** is how long DNS changes take to spread across the internet: usually a few minutes, sometimes up to 24 hours. Before assuming something is broken, give a recent change time to settle.
:::

## Symptom and fix

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Verification needed** in the panel | The domain was used on another hosting account | Add the TXT record shown, for both root and `www` |
| **404 / DEPLOYMENT_NOT_FOUND** | DNS points at Kite but the domain is not attached to a live deployment | Make an edit and publish; if it persists, disconnect and reconnect the domain |
| **Shows an old or different site** | A DNS record (often `CNAME`) still points somewhere else | Update the records to Kite's values and remove old ones |
| **"Connection Not Private" / SSL error** | Certificate not issued yet, or one of the www/root records is missing | Give it time; check both records |
| **"Domain already connected to another website"** | Domain is attached to another site you still have | Disconnect it in that site's Settings |
| **Changes not appearing** | DNS propagation or browser cache | Wait; hard-refresh |

## Verification needed

If your domain was previously connected to another hosting account, Kite cannot attach it until you prove you control it. The panel shows **Verification needed** and a TXT record. Add it at your DNS provider (for a root domain, both the bare domain and `www` need it), wait a few minutes, and the notice clears.

## 404 or DEPLOYMENT_NOT_FOUND

Your domain reaches Kite, but you get a 404 page or an error mentioning **DEPLOYMENT_NOT_FOUND**.

1. Make a small edit in the editor and click **Publish**.
2. If it persists, open your site's **Settings**, click **Disconnect custom domain**, then reconnect it from the publish panel.
3. Allow a few minutes, then reload.

## Domain shows an old or different site

A DNS record is still pointing at the old host.

1. Open your DNS settings at your registrar (see [Connect a domain from your registrar](/custom-domains/registrar-guides)).
2. Check your `A` and `CNAME` records. A leftover `CNAME` pointing at an old host is the usual culprit.
3. Replace them with the exact values Entri showed you, and delete any stale records.
4. Wait for propagation.

:::caution Cloudflare in the middle
If your nameservers point to Cloudflare, edit the records **in Cloudflare**, not at the original registrar. See the note in [Connect a domain from your registrar](/custom-domains/registrar-guides).
:::

## SSL "Connection Not Private"

1. **Give it time.** Certificates are issued automatically after the domain connects and can take a little while.
2. **Check both records.** If only the root or only `www` is set up, the other may throw a warning. See [www and Root Domain (and SSL)](/custom-domains/www-vs-root).
3. If it still fails after the records are correct and you have waited, open **Chat with us**.

## "Domain already connected to another website"

The domain is attached to a different site that still exists in your account. Open that site, go to **Settings**, click **Disconnect custom domain**, then reconnect on your current site. Deleting a site releases its domain automatically. See [Move, switch, or reuse a domain](/custom-domains/switch-or-reuse-domain).

## Changes not appearing

1. Make an edit and **Publish** so the latest version is live.
2. Wait for DNS propagation (up to 24 hours).
3. Hard-refresh or use a private window to rule out browser caching.

## Still stuck?

- Re-read the connection steps in [Connect a custom domain](/custom-domains/connect-a-custom-domain).
- Confirm you are editing DNS in the right place in [Connect a domain from your registrar](/custom-domains/registrar-guides).
- For anything that will not clear after correct setup plus propagation time, open **Chat with us** in Kite.
