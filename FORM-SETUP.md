# Contact Form Setup Guide

The contact form on the EdConnect website is configured to send submissions directly to `info@marwa-ai.us` using Web3Forms, a free form backend service.

## Quick Setup (5 minutes)

### Step 1: Get Your Free Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click **"Create Access Key"** (no signup required)
3. Enter your email: `info@marwa-ai.us`
4. Click **"Create Access Key"**
5. Check the inbox for `info@marwa-ai.us` and verify the email
6. Copy the access key that's displayed (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add the Access Key to Your Website

1. Open the file: `/src/components/ContactForm.tsx`
2. Find line 53 where it says: `formPayload.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
4. Save the file

Example:
```typescript
formPayload.append('access_key', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890')
```

### Step 3: Test the Form

1. Build and deploy your website
2. Fill out the contact form
3. Submit the form
4. Check `info@marwa-ai.us` inbox - you should receive the form submission!

## How It Works

- When someone submits the contact form, the data is sent to Web3Forms' API
- Web3Forms forwards the submission as an email to `info@marwa-ai.us`
- The form includes all fields: name, email, organization, organization type, and message
- No backend server or database required
- Completely free for up to 250 submissions per month

## Features

✅ **No Backend Required** - Perfect for GitHub Pages hosting  
✅ **Spam Protection** - Built-in spam filtering  
✅ **Email Notifications** - Instant email delivery to info@marwa-ai.us  
✅ **Form Validation** - Client-side validation before submission  
✅ **Success/Error Handling** - User-friendly feedback messages  
✅ **Mobile Responsive** - Works perfectly on all devices  

## Troubleshooting

### Form not sending emails?
- Verify you've replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
- Check that you've verified the email address with Web3Forms
- Look at the browser console for any error messages

### Need more submissions?
- The free tier includes 250 submissions/month
- For higher volume, Web3Forms offers affordable paid plans

### Want to test locally?
- The form will work in development mode
- Submissions will still be sent to the configured email address

## Alternative: Keep Simple mailto: Link

If you prefer a simpler approach without external services, the form can fall back to a `mailto:` link that opens the user's email client. This is less elegant but requires zero setup.

To use this fallback, the user would click "Send Inquiry" and their default email client would open with a pre-filled message.

## Support

- Web3Forms Documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- EdConnect Technical Support: Contact your web administrator
