# 🚨 QUICK FIX: Site Not Loading

## Problem
**www.marwa-ai.us is not showing** because DNS records are not configured.

## Solution (2 Steps)

### STEP 1: Configure DNS at GoDaddy ⚡ DO THIS FIRST

**Go to**: https://dcc.godaddy.com/ → Domains → marwa-ai.us → Manage DNS

**Add these 5 records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 600 |
| A | @ | `185.199.109.153` | 600 |
| A | @ | `185.199.110.153` | 600 |
| A | @ | `185.199.111.153` | 600 |
| CNAME | www | `consultation-ai.github.io` | 600 |

⚠️ **CNAME must be exactly**: `consultation-ai.github.io` (no https://, no www, all lowercase)

**Wait**: 10-60 minutes for DNS to propagate

---

### STEP 2: Configure GitHub Pages Settings

**Go to**: https://github.com/Consultation-AI/marwa-ai-consulting/settings/pages

1. In "Custom domain" field, enter: `www.marwa-ai.us`
2. Click **Save**
3. Wait for green checkmark (DNS check successful)
4. Enable **"Enforce HTTPS"**

---

## Verify It Works

Run this command:
```bash
./scripts/verify-deployment.sh
```

Or open: https://www.marwa-ai.us

---

## Need Help?

- See [SITE-NOT-LOADING-FIX.md](./SITE-NOT-LOADING-FIX.md) for detailed instructions
- See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues
- See [GODADDY-QUICK-START.md](./GODADDY-QUICK-START.md) for step-by-step GoDaddy guide
