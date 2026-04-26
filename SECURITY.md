# Security Policy

## Vulnerability Reporting

If you discover a security vulnerability in Bot_forg, please email **daddyfilthie@proton.me** with:

- Description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact
- Suggested fix (if you have one)

Please do **NOT** open a public GitHub issue for security vulnerabilities.

---

## Current Security Status

### ✅ Patched Vulnerabilities

#### Next.js 16.0.7+ (Updated)
- **CVE-2025-66478**: Remote Code Execution via React Server Components
  - **Status**: ✅ PATCHED
  - **Fix**: Upgraded from 16.2.4 → 16.0.7
  - **Details**: [Next.js Security Advisory](https://github.com/vercel/next.js/security/advisories)

#### React 19.0.1 (Updated)
- **CVE-2025-55182**: RCE via React Server Components
  - **Status**: ✅ PATCHED
  - **Fix**: Upgraded from 19.x → 19.0.1
  - **Related CVEs**: CVE-2025-55184 (DoS), CVE-2025-55183 (Source exposure)
  - **Details**: [React Security Advisory](https://github.com/facebook/react/security/advisories)

### ✅ Verified Safe

- **TypeScript 5.7.3**: No critical vulnerabilities
- **Tailwind CSS 4.2.0**: No critical vulnerabilities
- **All Radix UI components**: Regularly maintained and audited

---

## Security Best Practices

### Development

1. **Type Safety**: Run `npm run type-check` before committing
2. **Code Linting**: Run `npm run lint` to catch potential issues
3. **Security Audits**: Run `npm run security:check` regularly
4. **Environment Variables**: Use `.env.local` for sensitive data (never commit to Git)

### Production

1. **Enable Security Headers** (configured in `next.config.mjs`):
   - `X-Content-Type-Options: nosniff` (prevents MIME sniffing)
   - `X-Frame-Options: SAMEORIGIN` (prevents clickjacking)
   - `X-XSS-Protection: 1; mode=block` (legacy XSS protection)
   - `Referrer-Policy: strict-origin-when-cross-origin` (controls referrer info)

2. **Image Optimization**: Enabled in production for better performance and security

3. **Dependency Updates**: Keep dependencies up-to-date
   ```bash
   npm outdated
   npm audit
   ```

4. **Secure Configuration**:
   - No TypeScript build errors ignored
   - Strict type checking enabled
   - ESLint with security rules enabled

---

## Dependency Management

### Current Versions

```json
{
  "next": "16.0.7",
  "react": "19.0.1",
  "react-dom": "19.0.1",
  "typescript": "5.7.3",
  "tailwindcss": "4.2.0"
}
```

### Regular Updates

- Run `npm audit` weekly
- Review `npm outdated` monthly
- Update critical security patches immediately
- Test updates thoroughly before deploying

---

## GitHub Security Features

This repository has the following security features enabled:

✅ **Dependabot Alerts** - Automated vulnerability detection  
✅ **Secret Scanning** - Prevent accidental credential leaks  
✅ **Code Scanning** - Identify potential vulnerabilities  
✅ **Branch Protection** - Enforce security checks before merge  

---

## Security Checklist

Before each deployment:

- [ ] Run `npm run type-check`
- [ ] Run `npm run lint`
- [ ] Run `npm run security:check`
- [ ] Review any dependency warnings
- [ ] Test in staging environment
- [ ] Check security headers in production

---

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [React Security](https://react.dev/learn/security)

---

## Last Updated

April 26, 2026
