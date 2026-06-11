---
title: Chat Widgets & Custom Scripts
description: Add a live chat widget like Tawk.to, embed third-party scripts like HubSpot, and remove a chat widget if it won't go away.
---

# Chat Widgets & Custom Scripts

Want a live chat bubble in the corner of your site, or a marketing tool's tracking snippet? You can add third-party widgets and scripts to your Kite site. Here's how — and how to clean them up if one sticks around.

## Add a chat widget (for example, Tawk.to)

Most chat tools give you a small snippet of code to paste into your website.

1. Create an account with your chat provider (for example, [Tawk.to](https://www.tawk.to/)) and set up your chat widget there.
2. Copy the **embed code** (a `<script>` snippet) the provider gives you.
3. In the Kite editor, ask Kite to add it — for example, "Add this Tawk.to chat widget script to my site," and paste the snippet.
4. [Publish your site](/publishing/how-to-publish).
5. Open your live site and confirm the chat bubble appears.

:::tip Site-wide vs. one page
A chat widget usually belongs on every page. When you ask Kite to add it, mention that you want it across the whole site, not just one page. <!-- TODO: verify how site-wide scripts vs. per-page scripts are handled -->
:::

## Add other embed scripts (for example, HubSpot)

The same approach works for other third-party tools — HubSpot tracking, a booking widget, a marketing pixel, and so on.

1. Get the embed or tracking snippet from the tool's dashboard.
2. In the Kite editor, ask Kite to add the script, and paste the snippet.
3. Tell Kite where it should go if it matters (for example, "in the page header on every page" versus "inside this section").
4. Publish and verify on your live site.

:::note Some scripts only run live
Third-party scripts frequently do nothing in the editor preview. Always check on your published site.
:::

## If a script is blocked (Content Security Policy)

For security, your site may use a **Content Security Policy (CSP)** — a rule that only allows scripts from approved sources to run. If a widget you added doesn't appear, a CSP rule may be blocking it.

How to tell:

1. Open your live site and try to use the widget.
2. If it's missing, open your browser's developer console (often **F12**, then the **Console** tab) and look for an error mentioning "Content Security Policy" or a blocked script source.

What to do:

- Ask Kite to allow the script's source — for example, "Please allow scripts from `embed.tawk.to` so my chat widget can load." Provide the exact domain shown in the console error.

<!-- TODO: verify how CSP/script allowlisting is exposed to users — confirm whether users self-serve this or must ask Kite, and the exact phrasing/flow -->

:::warning Only add scripts you trust
Custom scripts run on your visitors' browsers. Only add embed code from services you trust, and never paste a snippet you don't recognize.
:::

## Remove a chat widget completely

Sometimes you remove a widget but it still shows up on the live site. To remove it for good:

1. In the editor, ask Kite to **remove the chat widget and its script** by name — for example, "Remove the Tawk.to chat widget and any related script from my entire site."
2. [Publish your site](/publishing/how-to-publish) so the removal goes live.
3. Open your live site in a **private/incognito window** (or do a hard refresh) and confirm the widget is gone.

:::tip Why it seems to "come back"
If a widget reappears, it's almost always one of two things: the change wasn't published yet, or your browser cached the old version. Publish, then check in a fresh private window. See [Changes not showing](/publishing/changes-not-showing).
:::

## Troubleshooting

**My chat widget doesn't appear on the live site.**

1. Confirm you [published](/publishing/how-to-publish) after adding the script.
2. Check the browser console for a CSP/blocked-script error (see above) and ask Kite to allow the source.
3. Make sure your chat account is active and the widget is enabled in the provider's dashboard.
4. Hard-refresh or try a private window to rule out caching.

**I removed the widget but it's still there.**
Publish again, then re-check in a private/incognito window. If it still persists, ask Kite to confirm the script has been fully removed from every page. <!-- TODO: verify how to confirm complete removal -->

**The script loads but doesn't track / behave correctly.**
Double-check you pasted the complete, correct snippet from the provider, and that any account ID or key inside it is right.

## Related

- [Contact Forms & Lead Capture](/forms-integrations/contact-forms)
- [Site Analytics](/forms-integrations/analytics)
- [Changes not showing](/publishing/changes-not-showing)
