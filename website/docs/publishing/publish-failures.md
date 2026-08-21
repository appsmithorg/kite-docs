---
title: Why Did Publishing Fail?
description: Publishing didn't go through? Here are the common causes and how to get your Kite site live.
---

# Why Did Publishing Fail?

Most of the time publishing just works, but occasionally a publish doesn't complete. Here are the causes our support team sees most often and what to do about each.

## Common causes

### A build error

Behind the scenes, Kite builds your site before it goes live. If that build hits an error, publishing stops. In support cases this often shows up as a step like `pnpm install` or the build exiting with a non-zero status (for example, exit code `1`). <!-- TODO: verify which build messages are surfaced to users -->

**What to do:** Ask Kite to retry or fix the build, and describe what you changed just before the failure, since recent edits are the usual trigger.

### An invalid redirects file

If your site uses redirect rules, an invalid rule can block a publish. A common mistake is giving a redirect a **200** status instead of a **301** or **302**:

- **301**: permanent redirect
- **302**: temporary redirect
- **200**: not a redirect status; using it here is usually invalid <!-- TODO: verify Kite's exact redirect format and accepted statuses -->

**What to do:** Remove or correct any redirect rows that use a `200` status, then publish again.

### A missing or invalid config

A missing or malformed site configuration can also stop a publish. <!-- TODO: verify which config file/format Kite uses -->

**What to do:** Ask Kite to check and regenerate the configuration, then retry publishing.

## How to recover

1. Ask Kite to **retry the publish**. Some failures are transient.
2. If it fails again, ask Kite to **fix the build** and describe your most recent changes.
3. Check for and remove any **invalid redirect rules** (especially `200` statuses).
4. Publish again.

:::tip
If you publish, see a failure, make a fix, and publish again, give the new deploy a moment to complete before judging whether it worked. See [My Changes Aren't Showing on the Live Site](/publishing/changes-not-showing).
:::

## If it keeps failing, contact support

If publishing still fails after the steps above, reach out to support and include:

- Your project name or `kite.space` URL.
- What you changed just before the failure.
- The exact error message or build output, if you can see it.
- The approximate time the failure happened.

## Related

- [Troubleshooting](/troubleshooting/)
- [Custom domain troubleshooting](/custom-domains/troubleshooting)
