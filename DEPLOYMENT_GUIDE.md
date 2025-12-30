# GitHub Pages Deployment Guide

## 🚀 Complete Deployment Instructions

Follow these steps to deploy your "Fibres of my Being" blog to GitHub Pages.

## Step 1: Create a GitHub Repository

### Option A: New Repository on GitHub.com

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Choose a repository name:
   - For personal site: `<your-username>.github.io` (e.g., `johndoe.github.io`)
   - For project site: Any name (e.g., `my-blog`, `fibres-of-my-being`)
4. Keep it **Public**
5. **Don't** initialize with README (you already have files)
6. Click **"Create repository"**

### Option B: Using Command Line

```bash
# Install GitHub CLI if you haven't (optional)
brew install gh

# Create repository
gh repo create fibres-of-my-being --public --source=. --remote=origin
```

## Step 2: Configure Next.js for GitHub Pages

### If Using Project Site (not username.github.io)

You need to set the `basePath` in your Next.js config.

**Edit `next.config.ts`:**

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // ← UNCOMMENT and change this!
  images: { unoptimized: true },
};
```

**Example:**
- If your repo is `fibres-of-my-being`
- Set `basePath: '/fibres-of-my-being'`

### If Using Personal Site (username.github.io)

**Keep `next.config.ts` as is:**

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/your-repo-name',  // ← Keep this commented out
  images: { unoptimized: true },
};
```

## Step 3: Initialize Git and Push

```bash
cd /Users/vis/projects/anurag

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Fibres of my Being blog"

# Add your GitHub repository as remote
# Replace with your actual repository URL
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. That's it! GitHub will automatically use your `.github/workflows/deploy.yml`

### Method 2: Manual Setup (Alternative)

If you prefer manual deployment:

1. Build locally:
```bash
npm run build
```

2. The `out/` folder contains your static site

3. Push the `out/` folder to a `gh-pages` branch:
```bash
git subtree push --prefix out origin gh-pages
```

4. In GitHub Settings → Pages:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `root`

## Step 5: Wait for Deployment

After pushing to GitHub:

1. Go to **Actions** tab in your repository
2. You'll see a workflow running (usually takes 2-3 minutes)
3. Wait for the green checkmark ✅
4. Your site is live!

## Step 6: Access Your Site

Your blog will be available at:

### Personal Site
```
https://YOUR-USERNAME.github.io/
```

### Project Site
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
- Username: `johndoe`
- Repo: `fibres-of-my-being`
- URL: `https://johndoe.github.io/fibres-of-my-being/`

## 🔧 Troubleshooting

### Issue: 404 Page Not Found

**Cause:** Incorrect `basePath` configuration

**Fix:**
1. Check your repository name
2. Update `basePath` in `next.config.ts` to match
3. Commit and push:
```bash
git add next.config.ts
git commit -m "Fix basePath"
git push
```

### Issue: CSS/Images Not Loading

**Cause:** Assets looking in wrong path

**Fix:**
- Ensure `basePath` matches your repo name exactly
- Check that images are in `public/images/`
- Rebuild: `npm run build`

### Issue: GitHub Actions Failing

**Cause:** Missing permissions or workflow issues

**Fix:**
1. Go to Settings → Actions → General
2. Under "Workflow permissions":
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**
3. Save and re-run the workflow

### Issue: Old Version Showing

**Cause:** Browser cache

**Fix:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Or clear browser cache

## 📝 Making Updates

Every time you want to update your blog:

```bash
# 1. Make your changes (add posts, edit content, etc.)

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Add new blog post"

# 4. Push to GitHub
git push

# 5. GitHub Actions will automatically rebuild and deploy!
```

## 🎨 Custom Domain (Optional)

Want to use your own domain (e.g., `blog.yourname.com`)?

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)

2. Add a `CNAME` file to `public/` folder:
```bash
echo "blog.yourname.com" > public/CNAME
```

3. In your domain registrar, add DNS records:
```
Type: CNAME
Name: blog (or @)
Value: YOUR-USERNAME.github.io
```

4. In GitHub Settings → Pages:
   - Enter your custom domain
   - Check "Enforce HTTPS"

5. Wait for DNS propagation (can take up to 24 hours)

## 📊 Checking Deployment Status

### View Build Logs

1. Go to **Actions** tab
2. Click on the latest workflow run
3. Click on the job to see detailed logs
4. Look for errors if deployment failed

### Verify Build

```bash
# Build locally to test
npm run build

# Check the out/ folder
ls -la out/

# You should see:
# - index.html
# - about.html
# - posts/ folder with all your articles
# - _next/ folder with assets
```

## 🔐 Environment Variables (If Needed)

If you add API keys or secrets later:

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add your secrets
4. Reference in workflow: `${{ secrets.YOUR_SECRET_NAME }}`

## ✅ Deployment Checklist

Before your first deployment:

- [ ] Repository created on GitHub
- [ ] `basePath` configured correctly (if using project site)
- [ ] `.github/workflows/deploy.yml` exists
- [ ] `.nojekyll` file exists in root
- [ ] All content files in `content/posts/` directories
- [ ] Images in `public/images/`
- [ ] `npm run build` works locally
- [ ] Git initialized and remote added
- [ ] All files committed
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] Workflow completed successfully

## 🎉 Success!

Once deployed, share your blog:
- Twitter/X: "Check out my new blog: [URL]"
- LinkedIn: Share your first post
- Reddit: Share in relevant communities
- Dev.to: Cross-post your articles

## 📚 Quick Reference

```bash
# Daily workflow
npm run dev              # Test locally
git add .                # Stage changes
git commit -m "message"  # Commit
git push                 # Deploy!

# Troubleshooting
npm run build            # Test build
git status               # Check git status
git log --oneline        # View commits
```

## 🆘 Need Help?

If you encounter issues:

1. Check the Actions tab for error messages
2. Verify `basePath` in `next.config.ts`
3. Ensure all files are committed
4. Try a clean build: `rm -rf out/ .next/ && npm run build`
5. Check GitHub Pages settings

---

**Your blog is ready to go live! 🚀**

