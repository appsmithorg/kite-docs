---
title: Connect a Domain from Your Registrar (Squarespace, GoDaddy, OVH, Cloudflare, etc.)
description: Find your DNS settings at popular domain registrars so you can point any domain to your Kite site.
---

# Connect a Domain from Your Registrar (Squarespace, GoDaddy, OVH, Cloudflare, etc.)

It doesn't matter where you bought your domain. What matters is that its DNS points to Kite. This article shows you where the DNS settings live at the most common registrars so you can add the records Kite needs.

:::note Registrar vs. DNS
Your **registrar** is the company you bought the domain from. **DNS** is the set of records that tell browsers where to send visitors. You don't move the domain anywhere. You just edit its DNS records to point at Kite.
:::

## The general process

No matter which registrar you use, the steps are the same:

1. Connect your domain in Kite first. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
2. If the one-click **Entri** flow supports your provider, sign in and let it do the work.
3. If you're doing it manually, log in to your registrar, open its DNS settings, and add the records Entri shows you.
4. Save. Kite republishes your site for you once the connection succeeds.

:::tip Use Entri's one-click flow when you can
Most of the registrars below are supported in Entri, which adds the records for you. Only dig into the menus below if your provider isn't listed or someone else manages your DNS.
:::

## Where DNS settings live, by registrar

The exact menu names change over time, so treat these as pointers. <!-- TODO: verify current UI labels per registrar -->

### Squarespace (and former Google Domains)

Google Domains was migrated to **Squarespace**, so if you bought a domain through Google, you now manage it in Squarespace.

1. Sign in at Squarespace and open **Domains**.
2. Select your domain.
3. Open **DNS** / **DNS Settings**.
4. Add the records from Entri under the custom records section.

### GoDaddy

1. Sign in and go to **My Products** → your domain.
2. Click **DNS** or **Manage DNS**.
3. Add or edit records under **Records**.

### Namecheap

1. Sign in and open **Domain List**.
2. Click **Manage** next to your domain.
3. Open the **Advanced DNS** tab.
4. Add records under **Host Records**.

### OVH

1. Sign in to the OVH control panel.
2. Open **Web Cloud** → **Domain names** → your domain.
3. Open the **DNS zone** tab.
4. Add or edit the records there.

### Cloudflare

1. Sign in and select your domain (site).
2. Open the **DNS** → **Records** section.
3. Add the records from Entri.

:::caution Common mistake: editing the wrong place when Cloudflare is in the middle
If your domain's **nameservers** are pointed (delegated) to Cloudflare, then Cloudflare is in charge of your DNS, not the registrar you originally bought the domain from. In that case you must edit the records **inside Cloudflare**, not at the original registrar. Records added at the old registrar will be ignored.

A **nameserver** is the server that answers DNS questions for your domain. Whichever service your nameservers point to is the one you edit.
:::

:::tip How to tell who controls your DNS
If you're not sure, look at your domain's nameservers at your registrar. If they read something like `something.ns.cloudflare.com`, your DNS is managed in Cloudflare and that's where you make changes.
:::

## My registrar isn't listed

You can still connect manually. Log in to your registrar, find its DNS or "DNS zone" settings, and add the records that Entri shows you. The record types are standard (`A`, `CNAME`, `MX`, and `TXT`), so any registrar can host them. See the record reference in [Connect a custom domain](/custom-domains/connect-a-custom-domain#the-records-you-will-see).

## Troubleshooting

- **Edited DNS but nothing changed.** Make sure you edited DNS where your nameservers actually point (see the Cloudflare caution above), then allow time for propagation. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **Not sure which records to add.** Use the exact records Entri displays for your domain rather than guessing. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
