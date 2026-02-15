#!/bin/bash
# Script to verify GitHub Pages deployment and DNS configuration

echo "================================"
echo "GitHub Pages Deployment Checker"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

DOMAIN="www.marwa-ai.us"
GITHUB_PAGES_IP="185.199.108.153"

echo "Checking: $DOMAIN"
echo ""

# Check if CNAME file exists
echo "1. Checking CNAME file..."
if [ -f "CNAME" ]; then
    CNAME_CONTENT=$(cat CNAME)
    if [ "$CNAME_CONTENT" = "$DOMAIN" ]; then
        echo -e "${GREEN}✓${NC} CNAME file exists and contains: $CNAME_CONTENT"
    else
        echo -e "${RED}✗${NC} CNAME file contains wrong domain: $CNAME_CONTENT (expected: $DOMAIN)"
    fi
else
    echo -e "${RED}✗${NC} CNAME file not found"
fi
echo ""

# Check DNS resolution
echo "2. Checking DNS resolution..."
if command -v dig &> /dev/null; then
    echo "   Running: dig $DOMAIN"
    DIG_OUTPUT=$(dig +short $DOMAIN)
    if [ -z "$DIG_OUTPUT" ]; then
        echo -e "${RED}✗${NC} DNS not resolving (domain not found)"
        echo "   → Check DNS configuration at GoDaddy"
    else
        echo -e "${GREEN}✓${NC} DNS resolves to:"
        echo "$DIG_OUTPUT" | while read -r line; do
            echo "   → $line"
        done
        
        # Check if it resolves to GitHub Pages IPs
        if echo "$DIG_OUTPUT" | grep -q "185.199"; then
            echo -e "${GREEN}✓${NC} Resolves to GitHub Pages IP"
        else
            echo -e "${YELLOW}!${NC} Does not appear to resolve to GitHub Pages"
        fi
    fi
elif command -v nslookup &> /dev/null; then
    echo "   Running: nslookup $DOMAIN"
    NSLOOKUP_OUTPUT=$(nslookup $DOMAIN 2>&1)
    if echo "$NSLOOKUP_OUTPUT" | grep -q "can't find"; then
        echo -e "${RED}✗${NC} DNS not resolving (domain not found)"
        echo "   → Check DNS configuration at GoDaddy"
    else
        echo -e "${GREEN}✓${NC} DNS resolves"
        echo "$NSLOOKUP_OUTPUT" | grep "Address:" | tail -n +2
    fi
else
    echo -e "${YELLOW}!${NC} dig or nslookup not available, skipping DNS check"
fi
echo ""

# Check HTTPS connectivity
echo "3. Checking website accessibility..."
if command -v curl &> /dev/null; then
    echo "   Testing: https://$DOMAIN"
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "https://$DOMAIN" 2>/dev/null)
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo -e "${GREEN}✓${NC} Site is accessible (HTTP $HTTP_CODE)"
        echo -e "${GREEN}✓${NC} www.marwa-ai.us is working!"
    elif [ "$HTTP_CODE" = "000" ]; then
        echo -e "${RED}✗${NC} Cannot connect (connection timeout or refused)"
        echo "   → Check DNS propagation or GitHub Pages configuration"
    elif [ "$HTTP_CODE" = "404" ]; then
        echo -e "${RED}✗${NC} Site not found (HTTP 404)"
        echo "   → Custom domain likely not configured in GitHub Pages Settings"
        echo "   → Go to: Settings → Pages → Custom domain"
    else
        echo -e "${YELLOW}!${NC} Unexpected response (HTTP $HTTP_CODE)"
    fi
else
    echo -e "${YELLOW}!${NC} curl not available, skipping connectivity check"
fi
echo ""

# Check build output
echo "4. Checking build output..."
if [ -d "dist" ]; then
    echo -e "${GREEN}✓${NC} dist/ directory exists"
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✓${NC} dist/index.html exists"
    else
        echo -e "${RED}✗${NC} dist/index.html not found"
    fi
    if [ -f "dist/CNAME" ]; then
        echo -e "${GREEN}✓${NC} dist/CNAME exists"
    else
        echo -e "${YELLOW}!${NC} dist/CNAME not found (will be generated during build)"
    fi
else
    echo -e "${YELLOW}!${NC} dist/ directory not found (run 'npm run build')"
fi
echo ""

# Summary and recommendations
echo "================================"
echo "Summary and Next Steps"
echo "================================"
echo ""

echo "If the site is not accessible:"
echo ""
echo "1. ${YELLOW}Most Common Issue:${NC} Custom domain not configured in GitHub"
echo "   → Go to: https://github.com/Consultation-AI/marwa-ai-consulting/settings/pages"
echo "   → Enter 'www.marwa-ai.us' in Custom domain field"
echo "   → Click Save and wait for DNS verification"
echo ""
echo "2. ${YELLOW}DNS Not Configured:${NC} Check GoDaddy DNS settings"
echo "   → Ensure CNAME record: www → consultation-ai.github.io"
echo "   → Ensure 4 A records: @ → GitHub Pages IPs"
echo "   → See GODADDY-QUICK-START.md for exact values"
echo ""
echo "3. ${YELLOW}Propagation Delay:${NC} Wait 10-60 minutes after DNS changes"
echo ""
echo "For detailed troubleshooting, see: TROUBLESHOOTING.md"
echo ""
