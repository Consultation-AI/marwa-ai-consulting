# GoDaddy DNS Configuration Quick Reference

## Required DNS Records for www.marwa-ai.us

### Step 1: Log into GoDaddy
1. Go to https://dcc.godaddy.com/
2. Navigate to **My Products** → **Domains**
3. Click on **marwa-ai.us**
4. Click **Manage DNS**

### Step 2: Add A Records
Add these **4 A records** for the apex domain (@):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |

**How to add:**
1. Click **Add** button
2. Select **Type: A**
3. Name: `@`
4. Value: (IP address from table)
5. TTL: 600 seconds or leave as default
6. Click **Save**
7. Repeat for all 4 IP addresses

### Step 3: Add CNAME Record
Add **1 CNAME record** for the www subdomain:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR-GITHUB-USERNAME.github.io | 600 seconds |

**Replace** `YOUR-GITHUB-USERNAME` with your actual GitHub username.

**How to add:**
1. Click **Add** button
2. Select **Type: CNAME**
3. Name: `www`
4. Value: `your-github-username.github.io` (no trailing dot, no https://)
5. TTL: 600 seconds or leave as default
6. Click **Save**

### Step 4: Remove Conflicting Records (if any)
If you see existing records that conflict, you may need to:
- Delete or pause existing A records pointing to different IPs
- Delete or pause existing CNAME records for www pointing elsewhere

### Step 5: Wait for DNS Propagation
- DNS changes typically take 10-60 minutes
- Can take up to 48 hours in rare cases
- Check status: https://dnschecker.org

## Verification

### Test DNS Configuration
```bash
# Check A records
dig marwa-ai.us +short

# Check CNAME record
dig www.marwa-ai.us +short

# Check from different locations
nslookup www.marwa-ai.us
```

### Expected Results
- `dig marwa-ai.us` should show the 4 GitHub IPs
- `dig www.marwa-ai.us` should show your-username.github.io

## Troubleshooting

### DNS Not Resolving
- Verify you saved all DNS records
- Check for typos in IP addresses
- Ensure CNAME points to username.github.io (not repo name)
- Wait longer for propagation

### SSL Certificate Not Provisioning
- Wait up to 24 hours after DNS propagation
- Check GitHub Pages settings → ensure domain is set
- Make sure "Enforce HTTPS" is checked

### Website Shows 404
- Verify GitHub Actions deployment succeeded
- Check CNAME file exists in deployed site
- Ensure repository Pages settings show correct domain

## Support Contacts

- **GoDaddy DNS Support**: https://www.godaddy.com/help
- **GitHub Pages Documentation**: https://docs.github.com/pages
- **DNS Checker Tool**: https://dnschecker.org
