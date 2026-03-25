# 🏯 Shrine Database

> A frontend-only app for exploring Japanese shrine data. Uses a local JSON dataset and no backend server.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)

## 🌟 Features

### Core Functionality

- 📱 **Modern UI** — Responsive React interface with local dataset
- 🔎 **Search-and-browse** — Filter shrines (name, location, address)
- 📁 **Local data source** — `src/data/shrines.json` powers the app
- 🛠️ **Add shrine support** — Optional form with local state callback
- ♻️ **Server-free** — No Express, no CORS, no network dependency

### Design & UX

- 🎨 **Japanese-Inspired Aesthetics** — Warm color palette (#faf7f0, #9d7b32, #413827)
- 📐 **Card-Based Layout** — Clean component structure with visual hierarchy
- 📱 **Mobile Responsive** — Works perfectly on desktop, tablet, and mobile
- ♿ **Semantic HTML** — Accessible markup for inclusive browsing
- 🎯 **Intuitive Navigation** — Clear routing and information architecture

### Developer Experience

- 📚 **Comprehensive Documentation** — API docs, integration guides, and examples
- 🧪 **Test Scripts** — Automated API testing for all endpoints
- 🔧 **Easy Setup** — Single command installation and multiple run options
- 📦 **Modern Tooling** — Vite for fast development, ESLint for code quality
- 🚀 **Hot Reload** — File watching and auto-refresh during development

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Development](#development)
- [Contributing](#contributing)
- [Security](#security)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18 or higher ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** for version control

### Installation (2 minutes)

```bash
# 1. Clone the repository
git clone <repository-url>
cd shrine-finder

# 2. Install dependencies
npm install

# 3. Start the application
npm run dev
```

**Access the application:**

- Frontend: http://localhost:5173

> No local API endpoint is required. The app loads data from `src/data/shrines.json`.

## 📁 Project Structure

```
shrine-finder/
├── src/                          # React Frontend
│   ├── components/               # React Components
│   │   ├── App/                 # Main app component
│   │   ├── Header/              # Navigation header
│   │   ├── Shrines/             # Shrine listing page
│   │   ├── PublicApi/           # Documentation page
│   │   ├── Dashboard/           # Landing page
│   │   ├── ListItem/            # Shrine list item
│   │   └── ...                  # Other components
│   ├── data/
│   │   └── shrines.json         # Shrine dataset (static JSON)
│   ├── utils/
│   │   └── constants.js         # Shrine data pointer
│   ├── vendors/
│   │   └── normalize.css        # CSS reset
│   ├── index.css                # Global styles
│   └── main.jsx                 # React entry point
│
├── public/                       # Static assets
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # Linting rules
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## � Local Data Source

The app loads shrine records directly from static JSON at:

- `src/data/shrines.json`

This file includes the same shrine objects previously in `src/utils/constants.js`.

### How to update data

1. Open `src/data/shrines.json`.
2. Add, update, or remove shrine records.
3. Save and refresh the app (`npm run dev`).

### Download the dataset

- **Download directly from GitHub:** [shrines.json](./src/data/shrines.json)
- Use cURL to download:

```bash
curl -o shrines.json https://raw.githubusercontent.com/<your-org>/<your-repo>/main/src/data/shrines.json
```

> No backend server is required in this mode. The UI uses local data and browser state only.

## 💻 Technologies

### Frontend Stack

| Technology   | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| React        | 19      | UI library              |
| Vite         | 8       | Build tool & dev server |
| React Router | 6.30    | Client-side routing     |
| CSS3         | Modern  | Styling & design system |

### Development Tools

| Tool   | Purpose                        |
| ------ | ------------------------------ |
| ESLint | Code quality & consistency     |
| Vite   | Lightning-fast dev environment |
| npm    | Package management             |

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (localhost:5173)                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  React Application                                   │   │
│  │  ├── Dashboard (Hero & Navigation)                  │   │
│  │  ├── Shrines (List & Search)                        │   │
│  │  ├── PublicApi (Documentation)                      │   │
│  │  └── Components (Header, Footer, etc.)              │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
                          (local)
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│               Static data store                            │
│   `src/data/shrines.json`                                  │
│   (also exposed as `src/utils/constants.js`)               │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **On App Load**: Frontend fetches data from API with fallback to local data
2. **Search**: User enters search term → Frontend sends query → API filters results
3. **Add Shrine**: User fills the form → local data callback adds shrine in state
4. **Update/Delete**: Implemented in app state for local editing if required

## 🛠️ Development

### Available Commands

```bash
# Frontend Development
npm run dev           # Start Vite dev server (http://localhost:5173)
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint on codebase
```

> Backend commands and tests were removed: this project now runs completely client-side with data from `src/data/shrines.json`.

### Development Workflow

**Terminal - Frontend:**

```bash
npm run dev
```

> The project is now static-data-driven; no backend server terminal is required.

### Code Style

- **ESLint** enforces code quality
- **Prettier** for consistent formatting (via ESLint)
- Components use functional React with hooks
- CSS uses BEM naming convention

```bash
# Check for linting issues
npm run lint

# Fix linting issues (auto-fixable)
npm run lint -- --fix
```

## 👥 Contributing

We welcome contributions! Here's how to get started:

### Before Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with descriptive commits
4. Test thoroughly
5. Submit a pull request

### Contribution Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Update documentation for new features
- Add tests for bug fixes
- Keep changes focused and reasonably sized

### Areas We'd Love Help With

- 🐛 **Bug Fixes** — Report and fix issues
- 📚 **Documentation** — Improve guides and examples
- ♿ **Accessibility** — Make the app more inclusive
- 🎨 **UI/UX** — Enhance design and user experience
- 🚀 **Performance** — Optimize code and loading times
- 🧪 **Testing** — Add comprehensive tests
- 🔒 **Security** — Implement security best practices

### Pull Request Process

1. Update README.md for any user-facing changes
2. Link any related issues in the PR description
3. Request review from maintainers
4. Address feedback and iterate

## 🔒 Security

This project is currently frontend-only with static data. Basic best practices:

- ✅ Keep input validation in UI forms
- ✅ Avoid eval and unsafe DOM insertion
- ✅ Use HTTPS when deploying the site
- ✅ Use code review for JSON metadata changes

For enhanced data security in a future API-driven version, include request validation, auth, and rate limiting.

## ❓ Troubleshooting

### Frontend Not Loading Data

```bash
# Check browser console for errors
# Ensure JSON is formatted and present in src/data/shrines.json
# No backend server is required
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 Project Statistics

- **Lines of Code**: ~800+ (frontend only)
- **Components**: 10+
- **Dependencies**: 4 production + 10 dev
- **Shrine Records**: 10 sample shrines included

## 🗺️ Roadmap

### Phase 1: Current ✅

- [x] React + Vite frontend
- [x] Static JSON data source
- [x] Search functionality
- [x] Documentation

### Phase 2: Short-term (1-2 months)

- [ ] Persistent database (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Input validation & sanitization
- [ ] Rate limiting & security headers
- [ ] Unit & integration tests

### Phase 3: Medium-term (2-3 months)

- [ ] Shrine images and gallery
- [ ] Map integration (Google Maps/Mapbox)
- [ ] Personal collection feature
- [ ] Advanced filtering & sorting
- [ ] Export functionality (CSV/JSON)

### Phase 4: Long-term (3+ months)

- [ ] Mobile app (React Native)
- [ ] Social features (ratings, comments)
- [ ] Machine learning for recommendations
- [ ] GraphQL API alternative
- [ ] Admin dashboard

## 📖 Documentation

- **[Local Data](./src/data/shrines.json)** — JSON dataset for the app
- **[Quick Start](#quick-start)** — Setup and run instructions
- **[Contributing](./CONTRIBUTING.md)** — Contribution guidelines (planned)

## 📝 License

This project currently has no license file. Contributors can add a license later if desired.

## 🙏 Acknowledgments

- Japanese shrine data and inspiration
- React community
- Contributors and supporters

## 📧 Support & Questions

- 📫 **Issues**: Report bugs via GitHub Issues
- 💬 **Discussions**: Ask questions in GitHub Discussions
- 📚 **Docs**: Use this README and `src/data/shrines.json`
- 🐛 **Debugging**: Enable console logs and check browser DevTools

---

<div align="center">

**[⬆ Back to Top](#-shrine-database)**

Created with 🏯 and ❤️ by the Shrine Database Community

</div>
