# 🚀 GoDaddy DNS Setup - Quick Start

## What to Enter in GoDaddy

### Step 1: Log into GoDaddy
1. Go to https://dcc.godaddy.com/
2. Click **Domains** → **marwa-ai.us** → **Manage DNS**

### Step 2: Add 4 A Records

Click **Add** button 4 times and enter these values:

**Record 1:**
- Type: `A`
- Name: `@`
- Value: `185.199.108.153`
- TTL: `600` (or leave default)

**Record 2:**
- Type: `A`
- Name: `@`
- Value: `185.199.109.153`
- TTL: `600` (or leave default)

**Record 3:**
- Type: `A`
- Name: `@`
- Value: `185.199.110.153`
- TTL: `600` (or leave default)

**Record 4:**
- Type: `A`
- Name: `@`
- Value: `185.199.111.153`
- TTL: `600` (or leave default)

### Step 3: Add 1 CNAME Record

Click **Add** button and enter:

- Type: `CNAME`
- Name: `www`
- Value: `consultation-ai.github.io`
- TTL: `600` (or leave default)

⚠️ **CRITICAL**: The CNAME value must be exactly `consultation-ai.github.io` - all lowercase, no spaces, no https://, no www

### Step 4: Save and Wait

1. Click **Save** for each record
2. Wait 10-60 minutes for DNS to propagate
3. Your site will be live at https://www.marwa-ai.us

## Summary - Copy These Values

```
4 A Records (Name: @):
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

1 CNAME Record:
  Name: www
  Value: consultation-ai.github.io
```

---

For detailed instructions and troubleshooting, see [GODADDY-DNS-SETUP.md](./GODADDY-DNS-SETUP.md)
