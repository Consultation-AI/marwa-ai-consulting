# Marwa AI - Deployment Instructions

## GitHub Pages Setup

### 1. Enable GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The site will automatically deploy when you push to the `main` branch

### 2. Repository Setup
Make sure your repository is public (or you have GitHub Pro/Enterprise for private repos with Pages).

## GoDaddy Domain Configuration

### DNS Settings for www.marwa-ai.us

Log into your GoDaddy account and configure the following DNS records for marwa-ai.us:

#### A Records (for apex domain marwa-ai.us)
Add these four A records pointing to GitHub's servers:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 seconds (or default)

Type: A
Name: @
Value: 185.199.109.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.110.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.111.153
TTL: 600 seconds
```

#### CNAME Record (for www subdomain)
```
Type: CNAME
Name: www
Value: consultation-ai.github.io
TTL: 600 seconds (or default)
```

**EXACT VALUE**: `consultation-ai.github.io` (all lowercase, no https://, no trailing dot)

This points your www subdomain to the GitHub Pages hosting for the Consultation-AI organization.

## Verification Steps

1. **DNS Propagation**: After setting up DNS records in GoDaddy, wait 10-60 minutes for DNS propagation
2. **Check DNS**: Use `dig www.marwa-ai.us` or online tools like dnschecker.org to verify DNS setup
3. **HTTPS Setup**: GitHub Pages will automatically provision an SSL certificate for your custom domain
4. **Wait for Certificate**: SSL certificate provisioning can take up to 24 hours

## Testing Your Deployment

1. Push your code to the `main` branch
2. Go to **Actions** tab in your GitHub repository
3. Watch the deployment workflow run
4. Once complete, visit:
   - https://www.marwa-ai.us (custom domain)
   - https://your-username.github.io/your-repo-name (GitHub Pages default URL)

## Troubleshooting

### DNS Issues
- Verify all A records are correct (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
- Ensure CNAME points to consultation-ai.github.io (all lowercase, no www, no https://)
- Check DNS propagation status

### HTTPS Not Working
- Wait up to 24 hours for SSL certificate provisioning
- Make sure "Enforce HTTPS" is enabled in repository settings → Pages

### 404 Errors
- Verify the CNAME file is in the repository root
- Check that GitHub Actions workflow completed successfully
- Ensure the domain matches exactly in GitHub Pages settings

## Contact Form Functionality

The contact form uses a `mailto:` link which will:
1. Open the user's default email client
2. Pre-fill the email to info@marwa-ai.us
3. Include all form data in the email body

**Note**: For production use, consider implementing a backend service like:
- EmailJS
- Formspree
- SendGrid API
- Custom backend server

This would allow forms to work without requiring the user's email client.

## Support

For DNS/domain issues: Contact GoDaddy support
For GitHub Pages issues: Check GitHub Status or GitHub Support
For site bugs: Create an issue in the repository
