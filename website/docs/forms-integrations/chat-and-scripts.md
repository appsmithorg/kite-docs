---
title: Chat Widgets & Custom Scripts
description: Add a live chat widget like Tawk.to or an embed script like a HubSpot tracker to your Kite site, and remove one cleanly.
---

# Chat Widgets & Custom Scripts

Want a live chat bubble in the corner of your site, or a marketing service's tracking snippet? You can add third-party widgets and scripts to your Kite site. Here is how to add them, and how to remove one.

## Add a chat widget (for example, Tawk.to)

1. Create an account with your chat provider (for example, [Tawk.to](https://www.tawk.to/)) and set up your chat widget there.
2. Copy the **embed code** (a `<script>` snippet) the provider gives you.
3. Ask Kite to add it, for example, "Add this Tawk.to chat widget script to every page of the site," and paste the snippet.
4. Publish your site.
5. Open your live site and confirm the chat bubble appears.

:::tip Site-wide versus one page
A chat widget usually belongs on every page. Say so when you ask.
:::

## Add other embed scripts (for example, HubSpot)

The same approach works for other scripts: HubSpot tracking, a booking widget, a marketing pixel, and so on.

1. Get the embed or tracking snippet from the service's dashboard.
2. Ask Kite to add the script, paste the snippet, and say where it should go ("in the head on every page" or "inside this section").
3. Publish and verify on your live site.

:::warning Only add scripts you trust
Custom scripts run in your visitors' browsers. Only add embed code from services you trust, and never paste a snippet you do not recognise.
:::

## Remove a widget completely

1. Ask Kite to **remove the widget and its script** by name, for example, "Remove the Tawk.to chat widget and any related script from the entire site."
2. Publish your site.
3. Open your live site in a private window and confirm the widget is gone.

## Troubleshooting

**The widget does not appear on the live site.**
1. Confirm you published after adding the script.
2. Make sure your account with the provider is active and the widget is enabled in its dashboard.
3. Hard-refresh or try a private window to rule out caching.
4. Ask Kite to confirm the script is on every page.

**I removed the widget but it is still there.**
Publish again, then re-check in a private window. If it persists, ask Kite to confirm the script has been removed from every page.

**The script loads but does not track correctly.**
Double-check you pasted the complete snippet and that any account ID or key inside it is right.

## Related

- [Contact Forms & Lead Capture](/forms-integrations/contact-forms)
- [Site Analytics](/forms-integrations/analytics)
