---
title: Integrations
description: Connect your Kite site or app to outside tools like GitHub, and learn what's available today versus coming soon.
---

# Integrations

Integrations let your Kite site or app work together with other tools you use. Some are available today, and others are rolling out — this page explains what to expect and how to ask for what you need.

:::info Availability changes often
The list of integrations is growing. Some connections are fully available, some are limited, and others are coming soon. If you don't see what you need, it's worth asking Kite directly. <!-- TODO: verify the current, authoritative list of supported integrations and their availability/limits -->
:::

## GitHub

You can connect your Kite project to **GitHub** to work with your project's code in a repository — useful if you (or a developer you work with) want a copy of the code outside Kite.

1. In your Kite project, look for the **GitHub** or **integrations** option.
2. Authorize Kite to connect to your GitHub account when prompted.
3. Choose or create the repository to connect.

<!-- TODO: verify exact GitHub connection flow, what syncs (one-way export vs. two-way), and any plan/permission requirements -->

:::tip You don't need to be a developer
Connecting GitHub is optional. If you're not working with code or a developer, you can safely ignore it.
:::

## Other tools

Beyond GitHub, you can often connect to outside services in one of two ways:

- **Embed scripts** — many tools (chat, analytics, marketing pixels, booking widgets) connect by pasting a snippet. See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts) and [Site Analytics](/forms-integrations/analytics).
- **Built-in integrations** — direct connections offered inside Kite. The available set is expanding. <!-- TODO: verify which built-in integrations exist today beyond GitHub (e.g., databases, auth, payments, email) and their availability -->

If a tool you rely on isn't listed, ask Kite — for example, "Can I connect [tool] to my site?" Kite can tell you whether it's supported today, can be added as a script, or is on the way. <!-- TODO: verify the ask/support flow for requesting an integration -->

## What you can connect to

Depending on what you're building, you might connect:

- **A code repository** (GitHub) for an exportable copy of your project.
- **Marketing and chat tools** via embed scripts.
- **Analytics tools** to track visitors.

<!-- TODO: verify whether Kite supports app-style integrations (databases, authentication, payments) and at what availability — keep this honest until confirmed -->

## Troubleshooting

**I connected an integration but nothing happens.**
Confirm any setup steps in the other tool are complete, and that you [published](/publishing/how-to-publish) your site if the integration affects the live site.

**The integration I want isn't listed.**
It may be coming soon, limited, or addable as a custom script. Ask Kite directly to confirm its current status.

**A connected script won't load.**
It may be blocked by your site's Content Security Policy. See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).

## Related

- [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts)
- [Site Analytics](/forms-integrations/analytics)
- [Export your site](/account/export-your-site)
