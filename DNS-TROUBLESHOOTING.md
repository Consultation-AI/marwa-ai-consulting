# 🔧 DNS Troubleshooting for www.marwa-ai.us

## Current Issue: "www.marwa-ai.us not working"

### Quick Diagnosis

Run this command to check DNS status:
```bash
nslookup www.marwa-ai.us
```

**If you see "REFUSED" or "can't find"**: DNS records are not configured properly in GoDaddy.

---

## ✅ Fix: Configure DNS in GoDaddy

### Step 1: Log into GoDaddy
1. Go to [GoDaddy.com](https://www.godaddy.com)
2. Sign in to your account
3. Go to **My Products**

### Step 2: Manage DNS
1. Find your domain: **marwa-ai.us**
2. Click the **DNS** button (or **Manage DNS**)

### Step 3: Add/Verify CNAME Record
This is the **most important** record for www.marwa-ai.us to work:

```
Type: CNAME
Name: www
Value: consultation-ai.github.io
TTL: 600 (or default)
```

**EXACTLY AS SHOWN ABOVE** - no www., no https://, no trailing dot

### Step 4: Add A Records (Optional - for marwa-ai.us without www)
If you want marwa-ai.us (without www) to work, add these 4 A records:

```
Type: A
Name: @
Value: 185.199.108.153
```

```
Type: A
Name: @
Value: 185.199.109.153
```

```
Type: A
Name: @
Value: 185.199.110.153
```

```
Type: A
Name: @
Value: 185.199.111.153
```

### Step 5: Save and Wait
1. Click **Save** in GoDaddy
2. **Wait 10-60 minutes** for DNS propagation
3. DNS changes can take up to 24 hours in rare cases

---

## 🧪 Test DNS Configuration

### Online Tools (Recommended)
- [DNS Checker](https://dnschecker.org) - Check propagation worldwide
- [What's My DNS](https://www.whatsmydns.net) - Alternative checker
- [MX Toolbox](https://mxtoolbox.com/SuperTool.aspx) - Advanced diagnostics

### Command Line
```bash
# Check CNAME record
nslookup www.marwa-ai.us

# Check A records (apex domain)
nslookup marwa-ai.us

# Detailed DNS info
dig www.marwa-ai.us ANY
```

### Expected Results
**CNAME (www.marwa-ai.us):**
```
www.marwa-ai.us	canonical name = consultation-ai.github.io
```

**A Records (marwa-ai.us):**
```
marwa-ai.us has address 185.199.108.153
marwa-ai.us has address 185.199.109.153
marwa-ai.us has address 185.199.110.153
marwa-ai.us has address 185.199.111.153
```

---

## ⚠️ Common Mistakes

### 1. Wrong CNAME Value
❌ **WRONG:**
- `www.consultation-ai.github.io`
- `https://consultation-ai.github.io`
- `consultation-ai.github.io.`

✅ **CORRECT:**
- `consultation-ai.github.io`

### 2. Wrong Name Field
❌ **WRONG:**
- `www.marwa-ai.us`
- `@`

✅ **CORRECT:**
- `www`

### 3. Conflicting Records
If you have multiple CNAME or A records for `www`, delete the old ones and keep only the correct one.

### 4. DNSSEC Issues
If DNSSEC is enabled and misconfigured, it can prevent DNS resolution. Usually not an issue with GoDaddy.

---

## 📋 Verification Checklist

Use this checklist to verify your DNS configuration:

- [ ] Logged into GoDaddy
- [ ] Navigated to DNS settings for marwa-ai.us domain
- [ ] CNAME record exists: `www` → `consultation-ai.github.io`
- [ ] CNAME record has no typos or extra characters
- [ ] Saved changes in GoDaddy
- [ ] Waited at least 10 minutes
- [ ] Tested with nslookup or online DNS checker
- [ ] CNAME resolves correctly
- [ ] Tested website: https://www.marwa-ai.us
- [ ] Website loads successfully

---

## 🔍 Still Not Working?

### Check GitHub Pages Status
1. Go to: https://github.com/Consultation-AI/marwa-ai-consulting/settings/pages
2. Verify **Custom domain** is set to: `www.marwa-ai.us`
3. Verify **Enforce HTTPS** is checked
4. Look for any error messages

### Check DNS Propagation
DNS changes can take time. Check if changes have propagated:
- [DNS Checker](https://dnschecker.org)
- Enter: `www.marwa-ai.us`
- Select: `CNAME` record type
- Should show: `consultation-ai.github.io`

### Contact Support
If DNS is configured correctly and propagated, but site still doesn't work:

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Chat: Available on GoDaddy.com
- Email: Through your GoDaddy account

**Information to Provide:**
- Domain: marwa-ai.us
- Issue: www subdomain not resolving
- CNAME record configured to: consultation-ai.github.io
- Screenshots of DNS settings

---

## 📖 Related Documentation

- [SPARK-DEPLOY.md](./SPARK-DEPLOY.md) - Quick deployment guide
- [GODADDY-QUICK-START.md](./GODADDY-QUICK-START.md) - GoDaddy setup guide
- [GODADDY-DNS-SETUP.md](./GODADDY-DNS-SETUP.md) - Detailed DNS instructions
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment documentation

---

## 🎯 Summary

**The Fix:**
1. Go to GoDaddy DNS settings
2. Add CNAME: `www` → `consultation-ai.github.io`
3. Wait 10-60 minutes
4. Test: https://www.marwa-ai.us

**That's it!** Once DNS is configured correctly, www.marwa-ai.us will work and you can use `npm run deploy` to publish updates instantly.
