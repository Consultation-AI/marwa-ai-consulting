#!/bin/bash
# Quick deployment script for Spark users
# This script builds and commits changes automatically

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Check if there are uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 Found uncommitted changes"
    
    # Add all changes
    git add .
    
    # Create commit message
    TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
    COMMIT_MSG="Auto-deploy from Spark - $TIMESTAMP"
    
    echo "💾 Committing changes: $COMMIT_MSG"
    git commit -m "$COMMIT_MSG"
else
    echo "✅ No uncommitted changes found"
fi

# Push to main branch (triggers GitHub Actions deployment)
echo "📤 Pushing to GitHub..."
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: You are on branch '$CURRENT_BRANCH'"
    echo "    To deploy, changes must be pushed to 'main' branch"
    read -p "    Push to 'main' branch? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin "$CURRENT_BRANCH:main"
    else
        echo "❌ Deployment cancelled"
        exit 1
    fi
else
    git push origin main
fi

echo "✅ Deployment initiated!"
echo "📊 Check deployment status at: https://github.com/Consultation-AI/marwa-ai-consulting/actions"
echo "🌐 Your site will be live at: https://www.marwa-ai.us"
echo ""
echo "⏱️  Note: Changes may take 2-5 minutes to appear on the live site"
