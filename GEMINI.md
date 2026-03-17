# Project Overview: BeaversLab Astro Website

BeaversLab is a modern, high-performance website built with **Astro**, focusing on a "Human-Agent Co-Creation" theme. It features a sophisticated, interactive ecosystem visualization and robust internationalization (i18n) support for English and Chinese.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (v6+)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (integrated via `@tailwindcss/vite`)
- **Language:** TypeScript
- **Internationalization:** Custom i18n implementation with localized JSON files and browser language detection.
- **Package Manager:** `pnpm`

## Key Architecture & Features

### 1. Internationalization (i18n)
- **Routing:** Uses localized paths (e.g., `/en/`, `/zh/`).
- **Detection:** The root `index.astro` contains a script to detect browser language or local storage preference and redirect to the appropriate locale.
- **Implementation:** 
    - Translation files are stored in `src/i18n/locales/`.
    - A custom `t` function in `src/i18n/index.ts` provides dot-notation access to nested translation keys.
- **Configuration:** Managed in `astro.config.mjs` under the `i18n` block.

### 2. Ecosystem Network
- Located at `src/components/EcosystemNetwork.astro`.
- An interactive SVG component representing a network of agents and humans.
- Uses complex SVG paths, gradients, and CSS animations to create a "living" network feel.

### 3. Layouts & Components
- **`Layout.astro`**: The base HTML structure.
- **`EcosystemLayout.astro`**: A specialized layout for the ecosystem-themed pages, likely including specific styles or background elements.
- **`ProjectCard.astro`**: Displays individual projects with status indicators and "Live Logs".

## Building and Running

Commands are executed via `pnpm`:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install all dependencies |
| `pnpm dev` | Start the local development server at `localhost:4321` |
| `pnpm build` | Build the static site for production (output to `./dist/`) |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro` | Access the Astro CLI for adding integrations or running checks |

## Development Conventions

- **Component-First:** Build reusable UI elements as `.astro` components in `src/components/`.
- **Localization:** **Never** hardcode strings in components. Always add them to `src/i18n/locales/en.json` (and `zh.json`) and use the `t(lang, 'key.path')` function.
- **Styling:**
    - Use Tailwind CSS utility classes for most styling.
    - Global styles are in `src/styles/global.css`.
    - Complex animations or component-specific overrides are in `src/styles/ecosystem.css` or within `<style>` tags in `.astro` files.
- **Type Safety:** Ensure all component props and i18n keys are correctly typed. The `Lang` type in `src/i18n/index.ts` should be used for language-specific logic.
- **Assets:** Static assets like images and favicons are stored in `public/`. Reference them using absolute paths (e.g., `/logo.webp`).
