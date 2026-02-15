# 🚀 Quick Deploy from Spark

## The Problem
**Issue:** www.marwa-ai.us not working, want to publish directly from Spark without manual GitHub commits.

## The Solution
Now you can deploy your changes with **one simple command**!

---

## ⚡ Deploy in One Command

After making changes in Spark, simply run:

```bash
npm run deploy
```

**OR**

```bash
npm run publish
```

That's it! This will:
1. ✅ Automatically commit your changes
2. ✅ Push to GitHub
3. ✅ Trigger automatic deployment to www.marwa-ai.us
4. ✅ Your site will be live in 2-5 minutes

---

## 📋 Step-by-Step Guide

### 1. Make Your Changes in Spark
Edit files, add features, update content - work as usual in your Spark environment.

### 2. Deploy
Open terminal and run:
```bash
npm run deploy
```

### 3. Wait for Deployment
- Changes typically appear in **2-5 minutes**
- Check deployment status: [GitHub Actions](https://github.com/Consultation-AI/marwa-ai-consulting/actions)

### 4. Verify
Visit your site:
- **Primary URL:** https://www.marwa-ai.us (custom domain)
- **Backup URL:** https://consultation-ai.github.io/marwa-ai-consulting/

---

## 🛠️ Troubleshooting

### "www.marwa-ai.us not working"

**Problem:** DNS not configured properly in GoDaddy

**Quick Fix:**
1. Log into [GoDaddy](https://www.godaddy.com)
2. Go to: **My Products** → **DNS** → **Manage DNS** for marwa-ai.us
3. Verify these DNS records exist:

**CNAME Record (Required):**
```
Type: CNAME
Name: www
Value: consultation-ai.github.io
TTL: 600 seconds
```

**A Records (Optional, for apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153 (add 4 separate A records)
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

4. **Wait 10-60 minutes** for DNS propagation
5. Check DNS status: [DNS Checker](https://dnschecker.org)

**Note:** If DNS records are correct but site still doesn't load, contact GoDaddy support.

---

## 🔍 Check Deployment Status

### GitHub Actions Dashboard
Monitor your deployment: https://github.com/Consultation-AI/marwa-ai-consulting/actions

**Deployment Stages:**
1. ⏳ **Build** (1-2 minutes) - Compiles your code
2. ⏳ **Deploy** (1-2 minutes) - Publishes to GitHub Pages
3. ✅ **Live** - Site is updated!

### Command Line Check
```bash
# Check git status
git status

# View recent deployments
git log --oneline -5

# See what will be deployed
git diff
```

---

## 📚 Alternative Deployment Methods

### Method 1: Using the Script Directly
```bash
./deploy.sh
```

### Method 2: Manual Git Commands (Old Way)
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Method 3: Automatic Deployment (Default)
The GitHub Actions workflow automatically deploys when you push to `main` branch.

---

## 🎯 Best Practices

1. **Test Locally First**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173 to preview changes

2. **Build Before Deploy** (Optional)
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy Frequently**
   - Small, frequent deployments are better than large ones
   - Each deployment is tracked in git history

4. **Check Before Committing**
   ```bash
   git status
   git diff
   ```

---

## ❓ FAQ

**Q: Do I need to use GitHub desktop or web interface?**
A: No! Just use `npm run deploy` from your terminal.

**Q: Can I deploy from any branch?**
A: The script will prompt you to push to `main` if you're on a different branch.

**Q: What if deployment fails?**
A: Check the [GitHub Actions page](https://github.com/Consultation-AI/marwa-ai-consulting/actions) for error logs.

**Q: How do I know when my site is live?**
A: Wait 2-5 minutes after running `npm run deploy`, then visit www.marwa-ai.us

**Q: Can I undo a deployment?**
A: Yes, use git to revert commits:
```bash
git revert HEAD
git push origin main
```

---

## 📞 Need Help?

### DNS/Domain Issues
- Contact: [GoDaddy Support](https://www.godaddy.com/contact-us)
- Docs: See [GODADDY-DNS-SETUP.md](./GODADDY-DNS-SETUP.md)

### Deployment Issues
- Check: [GitHub Actions](https://github.com/Consultation-AI/marwa-ai-consulting/actions)
- Docs: See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Code Issues
- Create an issue in the repository
- Check existing documentation

---

## 🎉 Success!

You now have a streamlined deployment process:
1. Make changes in Spark
2. Run `npm run deploy`
3. Wait 2-5 minutes
4. Site is live at www.marwa-ai.us

No more manual GitHub commits needed! 🚀
