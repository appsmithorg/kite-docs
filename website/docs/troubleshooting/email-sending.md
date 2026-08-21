---
title: Emails Aren't Sending
description: Fix Kite emails (like form notifications) that fail to send, often because the sender address or domain isn't verified.
---

# Emails Aren't Sending

If your site sends email (for example, a notification when someone submits a contact form) and those messages aren't going out, the cause is usually an unverified sender address or an invalid recipient. This page walks you through the fix.

## Symptom

- Emails your site is supposed to send (like form notifications) don't arrive.
- You see an error from the email provider, often a **422** error.

## Cause

A few common things cause this:

- **The sender domain or address isn't verified.** Email providers won't send on behalf of a "from" address until you've proven you own the domain it uses.
- **The from or to address is invalid.** A typo or an incomplete email address gets rejected.
- **The message details aren't valid.** Missing or malformed information in what's being sent (the payload) can be rejected as a 422 error.

## Fix

1. **Verify your sender domain.** With your email provider, complete domain verification for the address your site sends from. Until the domain is verified, sends will be rejected. <!-- TODO: verify how sender domains are configured in Kite -->
2. **Use a valid from address.** Make sure the "from" address uses your verified domain and is spelled correctly.
3. **Use a valid recipient address.** Confirm the "to" address (where notifications go) is a real, correctly typed email address.
4. **Check the message details.** Make sure required fields aren't empty. For a contact form, check that the form is passing along the information the email needs.
5. **Ask Kite to retry.** Once your domain and addresses are correct, have Kite send the email again to confirm it goes through.

:::tip 422 errors usually mean "something wasn't accepted"
A 422 from your email provider means the request reached them but was turned down, most often because the sender domain isn't verified or an address is invalid. Fixing those two things clears most cases.
:::

## Still not sending?

If emails still fail after verifying your domain and addresses, [contact support](/troubleshooting/) with your **app URL**, the exact error message (a screenshot helps), and which email isn't sending.

## Related

- [Contact Forms & Lead Capture](/forms-integrations/contact-forms)
