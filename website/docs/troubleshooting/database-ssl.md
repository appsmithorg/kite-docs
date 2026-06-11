---
title: Database Connection Errors (SSL Required)
description: Fix a Kite site or app that can't reach its database because the connection needs to be encrypted (SSL).
---

# Database Connection Errors (SSL Required)

If your Kite site or app connects to a database and that connection keeps getting rejected, the most common reason is that the database requires an **encrypted (SSL) connection**. This page explains the symptom and how to fix it.

:::info Only for sites that use a database
This applies if your project connects to a database (for example, to store or read records). If your site is just pages, forms, and content, this likely isn't your issue.
:::

## Symptom

- The connection is **rejected** when your site or app tries to reach the database.
- You see an error mentioning **"no encryption"**, **"SSL required"**, or similar.
- The connection is **refused** or **times out**.

## Cause

Many database providers require all connections to be **encrypted with SSL** for security. If the connection isn't set up to use SSL, the database refuses it. The same kind of error can also appear if the database isn't set to accept connections from Kite at all.

## Fix

1. **Enable SSL on the database connection.** In your connection settings, turn on SSL. For many databases this means setting the SSL mode to **require** — for example, adding `sslmode=require` to the connection. <!-- TODO: verify how users configure DB connections in Kite -->
2. **Allow connections from Kite.** Make sure your database (and any firewall or allowlist it uses) permits connections from Kite's servers. If your provider restricts access by IP address, you may need to add Kite to its allowlist. <!-- TODO: verify with product -->
3. **Double-check your connection details.** Confirm the host, port, database name, username, and password are all correct. A timeout or refused connection can also come from a wrong host or port.
4. **Test the connection again** after saving your changes.

:::tip What `sslmode=require` means
SSL is just encryption for the connection between your site and its database — like the padlock you see on secure websites. Setting the mode to `require` tells the connection it must always be encrypted.
:::

## Still failing?

If the connection still won't go through after enabling SSL and confirming your details, [contact support](/troubleshooting/) with your **app URL**, the exact error message (a screenshot is ideal), and the name of your database provider.
