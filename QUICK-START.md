# Quick Reference: Deploy & DNS Fix

## 🚀 Deploy Your Changes (FROM SPARK)

```bash
npm run deploy
```

That's it! Wait 2-5 minutes for changes to appear at www.marwa-ai.us

---

## 🔧 Fix "www.marwa-ai.us not working"

**Problem:** DNS not configured in GoDaddy

**Solution:**
1. Login to [GoDaddy.com](https://www.godaddy.com)
2. Go to **My Products** → **DNS** (for marwa-ai.us domain)
3. Add this CNAME record:
   ```
   Type: CNAME
   Name: www
   Value: consultation-ai.github.io
   ```
4. Click **Save**
5. Wait 10-60 minutes for DNS to propagate
6. Test: https://www.marwa-ai.us

**Need more help?** See [DNS-TROUBLESHOOTING.md](./DNS-TROUBLESHOOTING.md)

---

## 📚 Full Guides

- **[SPARK-DEPLOY.md](./SPARK-DEPLOY.md)** - Complete deployment guide
- **[DNS-TROUBLESHOOTING.md](./DNS-TROUBLESHOOTING.md)** - DNS fix guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Full technical documentation
