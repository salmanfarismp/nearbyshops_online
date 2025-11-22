This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Variables

For Universal Links and App Links to work, you need to set the following environment variables:

- `APPLE_TEAM_ID`: Your Apple Developer Team ID (10 characters, e.g., `ABC123DEF4`)

  - Find it in your Apple Developer account or Xcode signing settings
  - Used for iOS Universal Links at `/.well-known/apple-app-site-association`

- `ANDROID_SHA256_FINGERPRINTS`: Comma-separated SHA-256 certificate fingerprints
  - Format: `fingerprint1,fingerprint2` (no spaces, no colons, no `SHA256:` prefix)
  - Get fingerprints using: `keytool -list -v -keystore <keystore> -alias <alias>`
  - Used for Android App Links at `/.well-known/assetlinks.json`

Create a `.env.local` file in the root directory with these variables for local development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
