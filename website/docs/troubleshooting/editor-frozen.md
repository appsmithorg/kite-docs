---
title: Chat Stuck or Page Crashed
description: What to do when a Kite chat turn never finishes, you see a stream error, or the page shows "Something went wrong."
---

# Chat Stuck or Page Crashed

Sometimes a turn in the website editor runs much longer than expected, or the page errors out. Your work is saved separately, so the steps below are safe to try.

## Symptoms

- Kite has been working on one request for a long time with no result.
- You see a **Stream error**.
- The page shows **Something went wrong** with a **Reload page** button.

## How the editor handles a busy Kite

While Kite is working, the chat box keeps accepting messages. Anything you send goes into a visible **queue** and runs when the current turn finishes. There is also a **Stop** button that cancels the running turn. The editor never locks you out, and there is no per-project lock that support needs to release; a run that gets stuck is cleaned up automatically.

## Fixes to try in order

1. **Give it a moment.** Large builds and multi-page changes take time.
2. **Press Stop.** If a turn has clearly stalled, stop it, then send a shorter or clearer version of the request.
3. **Refresh the page.** This clears a stream error or a stale session.
4. **Reload when asked.** If you see **Something went wrong**, click **Reload page**.
5. **Reopen the project** from your websites list for a fresh session.
6. **Check your internet connection.** A dropped connection causes stream errors.
7. **Try a different browser or disable extensions.**
8. **Contact support.** If the problem repeats, open **Chat with us** with your site URL, what you were doing, and a screenshot.

:::info Your work is safe
A stalled turn or an error screen does not delete your site. Your project is stored separately from the editor window, so refreshing or reopening does not lose your progress.
:::

## Recover after a bad edit

If a turn changed something you did not want, restore an earlier version. See [Undo Changes & Version History](/troubleshooting/version-history).
