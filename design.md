# Portfolio Website - Technical Design

## Technology Stack

- **Framework**: Next.js 16.0.7 (Turbopack enabled)
- **Runtime**: React 19.2.1
- **Styling**: Tailwind CSS 4, PostCSS
- **Markdown Processing**: gray-matter, remark, remark-html
- **Icons**: react-icons 5.5.0
- **Build Output**: Standalone mode (Docker-ready)

## Application Architecture

### Directory Structure

```rchitecture

### Directory Structure
```
app/
├── layout.js                 # Root layout with SEO metadata
├── page.js                   # Home page (/)
├── globals.css              # Global styles
├── about/page.js            # About page (/about)
├── food/                    # Blog section (placeholder)
└── components/
    ├── Nav.js               # Navigation (Home, About)
    ├── CopyEmail.js         # Interactive email copy
    └── PageTransition.js    # Page transition animation

lib/
└── blogs.js                 # Markdown post loader

public/
└── buddy/                   # Social link images
```

### Pages & Routes

- `/` - Home page
- `/about` - About page
- `/food/` - Blog section (infrastructure ready, pages not implemented

### Home Page (`app/page.js`)

**Purpose**: Primary landing page with personal introduction and social links

**Core Sections**:

1. **Hero Section**
   - Background image covering
   - Centered main container with cream/tan background
   - Large h1 heading: "Hi! I'm Joe"
   - Introduction paragraphs (name aliases: Zezhou, Storce)
   - UC Berkeley affiliation

2. **Profile Image**
   - Responsive portrait image (`me-cooking.jpg`)
   - Border styling: 2px solid dark blue with opacity
   - Padding and margin for spacing

## Components

### Nav (`app/components/Nav.js`)
- **Type**: Client component (`'use client'`)
- **Tracks**: Current pathname via `usePathname()`
- **Routes**: Home (`/`), About (`/about`)
- **Styling**: Dark background (#0d0d2a), uses Next.js `Link` for client-side navigation

### CopyEmail (`app/components/CopyEmail.js`)
- **Type**: Client component (`'use client'`)
- **Props**: `email` (string)
- **Behavior**: 
  - Click to copy to clipboard
  - Shows "(copied!)" confirmation (green text, 1000ms duration)
  - Uses `navigator.clipboard.writeText()`
- **State**: `copied` (boolean via `useState`)

### PageTransition (`app/components/PageTransition.js`)
- **Type**: Client component (`'use client'`)
- **Purpose**: Animation wrapper on route changes
- **Behavior**:
  - Monitors pathname via `usePathname()`
  - Applies `animating` class for 200ms on route change
  - Requires CSS implementation in styles
- **Status**: Component exists but CSS not integratednsition.js`)

**Type**: Client-side animation wrapper (`'use client'`)

**Functionality**:
- Detects route changes via `usePathname()`
- Triggers CSS animation on pathname change
- Sets `animating` class for 200ms animation duration
- Creates smooth visual transitions between pages

**Usage**: Can be integrated into layout for page-level animations

---

## Styling System

### Global Styles (`app/globals.css`)

**Color Palette** (CSS Custom Properties):
- `--color-secondary`: #F7BC45 (golden)
- `--color-accent`: #DCA561 (warm accent)
- `--color-accent-dark`: #223249 (dark blue)
- `--color-background`: #DCD7BA (cream)
- `--color-background-dark`: #C8C093 (tan)
- `--color-foreground`: #1F1F28 (dark text)
- `--color-foreground-light`: #54546D (medium text)
- `--blue`: #2D4F67 (secondary blue)

## Styling (`app/globals.css`)

**CSS Variables**:
- `--color-secondary`: #F7BC45
- `--color-accent`: #DCA561
- `--color-accent-dark`: #223249
- `--color-background`: #DCD7BA
- `--color-background-dark`: #C8C093
- `--color-foreground`: #1F1F28
- `--color-foreground-light`: #54546D

**Layout Classes**:
- `.main-container`: Centered column, max-width 800px, 75% responsive width
- `.centered-paragraph`: Center text, 75% width, 1.5 line-height
- `.portrait-image`: 60% width, bordered
- `.buddy-box`: Flex wrap, gap 0.25rem, 70% width

**Navigation**: Dark background (#0d0d2a), cream links (#DCD7BA), 2rem font size

## Data Management

### Blog Loader (`lib/blogs.js`)

**Function**: `getSortedPostsData()`
- Reads `.md` files from `/blogs` directory
- Parses YAML frontmatter via `gray-matter`
- Returns array sorted by date (descending)
- Serializes dates to ISO strings
- Handles invalid dates by placing at end

**Output**: `{ id, ...metadata }`

**Status**: Ready to use, no blog pages implemented yet
- Media query-ready CSS structure

---

## Future Considerations

1. **Food Blog** (`app/food/`): Planned blog section using blog utility
2. **Blog Display Pages**: Implementation of `/food/[slug]` routes using `getSortedPostsData()`
3. **Page Transition Animation**: Integrate `PageTransition` component into layout CSS
4. **Static Generation**: Leverage Next.js SSG for blog post generation
5. **Performance**: Consider image optimization once blog with images is added

---

## Development Notes

- Uses modern React 19 with client components where interactivity is needed
- Maintains clean separation between server (layout, pages) and client components
- Markdown/YAML infrastructure ready for content expansion
- Fully containerized for consistent deployment across environments
## Configuration

**next.config.ts**:
- Output: `standalone` (Docker-ready)
- Trailing slashes: enabled
- Images: unoptimized

**Build Commands**:
- `npm run dev` - Development with Turbopack
- `npm run build` - Production build
- `npm start` - Serve standalone build
- `npm run lint` - ESLint check

**Deployment**:
- Docker: `Dockerfile` + `docker-compose.yml`
- Nginx: `nginx/joewang.me` config