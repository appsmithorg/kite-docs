---
title: Integrations
description: Connect Kite to the services your team uses, including GitHub for launch monitoring, Resend for email campaigns, and more than 3,000 integrations, plus embed scripts for your site.
---

# Integrations

Integrations let Kite work with the services your team already uses. Kite's pricing page states that every plan, including Free, can connect with more than 3,000 integrations. This page covers the integrations that matter most for Kite's work and how to add others.

:::info Availability changes often
The set of integrations is growing. If you do not see what you need, ask Kite directly in Slack. <!-- TODO: verify the current, authoritative list of supported integrations and where it is published -->
:::

## GitHub

Connecting GitHub lets Kite watch your commits, pull requests, and merges so it can prepare launch marketing while code is still in review. See [Product marketing and launches](/capabilities/product-marketing). GitHub also gives you a copy of your website project's code outside Kite, which is useful if you or a developer you work with want it.

1. In your Kite project, look for the **GitHub** or **integrations** option. <!-- TODO: verify whether GitHub is connected from the browser workspace, from Slack, or both -->
2. Authorize Kite to connect to your GitHub account when prompted.
3. Choose or create the repository to connect.

<!-- TODO: verify exact GitHub connection flow, what syncs (one-way export vs. two-way), and any plan requirements -->

:::tip You do not need to be a developer
Connecting GitHub is optional. If your team does not ship code changes you want marketed, you can skip it.
:::

## Resend

Kite sends broadcast email campaigns, such as launch announcements, through [Resend](https://resend.com). Connect your Resend account so that approved campaigns go out from your own sending domain. <!-- TODO: verify the Resend connection steps and whether Kite can provide sending without a customer Resend account -->

## Other services

Beyond GitHub and Resend, you can connect services in one of two ways:

- **Built-in integrations.** Direct connections Kite offers. Ask Kite in Slack whether the service you need is supported, for example, "Can you connect to our HubSpot account?" <!-- TODO: verify how the 3,000+ integrations are browsed or enabled -->
- **Embed scripts on your website.** Many services (chat widgets, analytics, marketing pixels, booking widgets) are added to your site by pasting a snippet. See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts) and [Site Analytics](/forms-integrations/analytics).

## Troubleshooting

**I connected an integration but nothing happens.**
Confirm any setup steps in the other service are complete, and that you [published](/publishing/how-to-publish) your site if the integration affects the live site.

**The integration I want is not listed.**
Ask Kite directly in Slack to confirm its current status. It may be available, addable as a script, or on the way.

**A connected script will not load.**
It may be blocked by your site's Content Security Policy. See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).

## Related

- [Product marketing and launches](/capabilities/product-marketing)
- [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts)
- [Site Analytics](/forms-integrations/analytics)
- [Export your site](/account/export-your-site)
