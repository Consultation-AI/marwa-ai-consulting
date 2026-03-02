# Troubleshooting: www.marwa-ai.us Not Showing

## Quick Diagnosis

### Is the site deployed to GitHub Pages?
1. Check the [Actions tab](https://github.com/Consultation-AI/marwa-ai-consulting/actions)
2. Verify the "Deploy to GitHub Pages" workflow shows ✅ success
3. If failed, check the workflow logs for errors

### Is GitHub Pages enabled and configured?
**⚠️ MOST COMMON ISSUE: Custom domain not configured in Settings**

Go to [Repository Settings → Pages](https://github.com/Consultation-AI/marwa-ai-consulting/settings/pages) and verify:

#### Required Configuration:
1. **Source**: GitHub Actions ✅
2. **Custom domain**: `www.marwa-ai.us` 
   - If this field is empty or shows a different domain, **this is the problem!**
   - Enter `www.marwa-ai.us` and click Save
   - GitHub will verify DNS configuration
   - Wait for green checkmark: "DNS check successful"
3. **Enforce HTTPS**: ☑️ Enable (after DNS is verified and SSL cert is issued)

#### Expected State:
```
✅ Your site is live at https://www.marwa-ai.us
```

If you see:
- ❌ "DNS check failed" → Check DNS configuration (see below)
- ⚠️ "Certificate pending" → Wait up to 24 hours for SSL provisioning
- 💡 "Domain is not configured" → Enter www.marwa-ai.us in Custom domain field

### Is DNS configured correctly at GoDaddy?

Visit [GoDaddy DNS Management](https://dcc.godaddy.com/) for domain `marwa-ai.us` and verify:

#### Required DNS Records:

**A Records (4 records, all with Name = @):**
```
Type: A,  Name: @,  Value: 185.199.108.153
Type: A,  Name: @,  Value: 185.199.109.153
Type: A,  Name: @,  Value: 185.199.110.153
Type: A,  Name: @,  Value: 185.199.111.153
```

**CNAME Record (1 record):**
```
Type: CNAME,  Name: www,  Value: consultation-ai.github.io
```

⚠️ **CRITICAL**: The CNAME value must be exactly `consultation-ai.github.io`
- No `https://`
- No `www.`
- No trailing period
- All lowercase

#### Verify DNS Propagation:
1. Wait 10-60 minutes after making DNS changes
2. Check DNS status:
   ```bash
   nslookup www.marwa-ai.us
   dig www.marwa-ai.us CNAME
   ```
3. Or use online tool: https://dnschecker.org/#CNAME/www.marwa-ai.us

Expected result:
```
www.marwa-ai.us → consultation-ai.github.io → GitHub Pages IPs
```

## Step-by-Step Fix

### If site is not loading:

1. **First, check GitHub Pages Settings** (most likely issue)
   - Go to [Settings → Pages](https://github.com/Consultation-AI/marwa-ai-consulting/settings/pages)
   - Verify Custom domain is set to `www.marwa-ai.us`
   - If empty, enter it and click Save
   - Wait for DNS verification

2. **If DNS check fails in GitHub:**
   - Verify all 5 DNS records exist at GoDaddy (see above)
   - Wait 30-60 minutes for DNS propagation
   - Click "Remove" then re-add the custom domain in GitHub Pages settings

3. **If you get certificate errors:**
   - This is normal immediately after setup
   - SSL certificates can take up to 24 hours to provision
   - Use `http://www.marwa-ai.us` temporarily (will redirect to HTTPS once ready)

4. **If you get 404 errors:**
   - Verify latest deployment succeeded in Actions tab
   - Check that CNAME file contains `www.marwa-ai.us`
   - Trigger a new deployment: Push a commit or manually trigger workflow

### If deployment workflow fails:

1. Check [Actions tab](https://github.com/Consultation-AI/marwa-ai-consulting/actions) for error details
2. Common issues:
   - Node/npm version mismatch: Update `.github/workflows/deploy.yml`
   - Build errors: Run `npm run build` locally to diagnose
   - Permission errors: Verify workflow has `pages: write` permission

## Testing Checklist

After configuration, verify each of these:

- [ ] GitHub Actions deployment shows success
- [ ] GitHub Pages Settings shows custom domain as `www.marwa-ai.us`
- [ ] DNS check shows green checkmark in GitHub Pages Settings
- [ ] `nslookup www.marwa-ai.us` returns GitHub Pages IPs
- [ ] http://www.marwa-ai.us loads (or redirects to HTTPS)
- [ ] https://www.marwa-ai.us loads without certificate errors

## Common Error Messages

### "There isn't a GitHub Pages site here"
- **Cause**: Custom domain not configured in GitHub Pages settings
- **Fix**: Go to Settings → Pages, enter `www.marwa-ai.us` in Custom domain field

### "DNS_PROBE_FINISHED_NXDOMAIN"
- **Cause**: DNS not configured or not propagated
- **Fix**: Verify DNS records at GoDaddy, wait for propagation (10-60 min)

### "NET::ERR_CERT_COMMON_NAME_INVALID"
- **Cause**: SSL certificate not yet provisioned or wrong domain
- **Fix**: Wait up to 24 hours for certificate issuance; verify custom domain in Settings

### "404 - File not found"
- **Cause**: Site deployed but custom domain configuration mismatch
- **Fix**: Verify CNAME file contains correct domain, redeploy

## Need More Help?

1. Check the deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
2. Check DNS setup guide: [GODADDY-DNS-SETUP.md](./GODADDY-DNS-SETUP.md)
3. Quick start guide: [GODADDY-QUICK-START.md](./GODADDY-QUICK-START.md)
4. GitHub Pages documentation: https://docs.github.com/en/pages

## Repository Access Note

**Private Repository**: This repository is private, which means GitHub Pages requires:
- GitHub Pro, Team, or Enterprise subscription
- The deployed site is still publicly accessible at www.marwa-ai.us
- Only the source code remains private
