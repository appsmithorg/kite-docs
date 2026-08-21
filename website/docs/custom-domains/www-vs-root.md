---
title: www vs. Root Domain (and SSL)
description: Understand the difference between your root domain and www, pick a primary address, and avoid SSL "Connection Not Private" warnings.
---

# www vs. Root Domain (and SSL)

Your domain can work with or without `www` at the front, and how you set this up affects both search ranking and the little padlock (SSL) in the browser. This article explains the difference and helps you pick a primary address so visitors always land in the right place, securely.

## Root vs. www: what's the difference?

- **Root domain** (also called the **apex** or **naked** domain): your bare domain with nothing in front, like `yourbusiness.com`.
- **www subdomain**: the same domain with `www.` in front, like `www.yourbusiness.com`.

These are technically two different addresses. A visitor could type either one, so you want both to work and to lead to the same site.

:::note Why "apex"?
The root/apex domain is the top level of your name (`yourbusiness.com`). `www` is a subdomain that sits underneath it. Both can point to your Kite site.
:::

## Pick a primary, redirect the other

Best practice is to choose one as your **primary** address and have the other **redirect** to it. For example, choose `www.yourbusiness.com` as primary and have `yourbusiness.com` redirect to it (or the other way around).

Doing this matters for two reasons:

1. **SEO / duplicate content.** If `www` and the root both serve your site as separate addresses, search engines can see them as two copies of the same content, which can dilute your ranking. A redirect keeps everything pointing at one canonical address.
2. **SSL certificate coverage.** SSL is what gives you `https://` and the padlock. If only one of the two addresses is configured, visitors who reach the other one may see a **"Connection Not Private"** warning because the security certificate doesn't cover that exact address.

:::caution The classic "www shows Connection Not Private" problem
A very common symptom is that the root domain works fine but `www` shows a security warning (or vice versa). This usually means only one of the two was set up. Make sure **both** the root and the `www` records are connected so the certificate covers both. <!-- TODO: verify exact behavior -->
:::

## How to set both up in Kite

1. Connect your domain following [Connect a custom domain](/custom-domains/connect-a-custom-domain).
2. Make sure both records are in place, typically an `A` record for the root (`@`) and a `CNAME` for `www`. The one-click **Entri** flow normally adds both for you.
3. **Republish** your site if prompted.
4. Give SSL a little time. The certificate is issued automatically after the domain connects, and the padlock may take a short while to appear.

:::tip
If you're adding records by hand, use the exact values Entri shows you. See the record reference in [Connect a custom domain](/custom-domains/connect-a-custom-domain#dns-records-youll-typically-add).
:::

## Troubleshooting

- **`www` works but root doesn't (or the reverse).** One of the two records is missing. Add both the root (`@`) and `www` records.
- **"Connection Not Private" / SSL warning.** Often clears on its own once the certificate is issued and both addresses are configured. Give it time. See [Troubleshoot a connected domain](/custom-domains/troubleshooting).
- **Still seeing the wrong page after redirect.** This can be DNS propagation or a stale record. See [Changes not showing](/publishing/changes-not-showing).
