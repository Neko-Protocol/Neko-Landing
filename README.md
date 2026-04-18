<img width="2940" height="770" alt="banner" src="https://github.com/user-attachments/assets/b094f921-6242-4ecd-8034-cb4e9d0ce267" />

Welcome to the Neko Protocol Landing Page repository. This project is the front-facing interface for Neko Protocol: an overview of the platform, links to the dApp, bilingual content (Spanish and English), and a Supabase-backed waitlist form.

## What is Neko Protocol?

Neko Protocol is a decentralized lending and borrowing platform that bridges traditional finance with decentralized finance (DeFi). It enables users to unlock liquidity for real-world assets (RWAs) on the Stellar blockchain. By leveraging Neko Protocol, users can:

- Access instant liquidity for their real-world assets.
- Participate in a fully decentralized and transparent financial ecosystem.
- Benefit from seamless integration between traditional finance and DeFi.

## About this repository

The landing page is built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **Zustand**, and **Supabase** for the waitlist. The default locale is **Spanish** (`es`); visitors can switch to English from the navbar.

Main sections: Navbar, Hero (flames, stocks, dual CTAs), Problem, Features (bento), FAQ, CTA, Waitlist, Footer.

- dApp: [dapp.nekoprotocol.xyz](https://dapp.nekoprotocol.xyz)
- Protocol site: [nekoprotocol.xyz](https://nekoprotocol.xyz)

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/Neko-Protocol/Neko-Landing.git
   cd Neko-Landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables (optional for local UI; required for waitlist inserts):

   ```bash
   cp .env.example .env.local
   ```

   Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. If they are missing, the Supabase client stays `null` and the waitlist UI still loads; inserts only work with valid credentials.

4. Run the dev server (opens at [http://localhost:3000](http://localhost:3000)):

   ```bash
   npm run dev
   ```

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Next.js development server     |
| `npm run build`   | Production build               |
| `npm run start`   | Start production server        |
| `npm run lint`    | ESLint                         |

## Environment variables

| Variable                         | Description                          |
| -------------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`       | Supabase project URL               |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | Supabase anonymous (public) key    |

## License

This project is licensed under the MIT License. See the LICENSE file for details if present in the repository.
