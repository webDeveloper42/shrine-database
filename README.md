# 🏯 Shrine Database

> A beautiful full-stack application for exploring and managing Japanese shrine data. Built with modern web technologies and designed with a warm, shrine-inspired aesthetic.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express.js-5-yellow)](https://expressjs.com/)

## 🌟 Features

### Core Functionality

- 📱 **Modern UI** — Responsive React interface with real-time API synchronization
- 🗃️ **Full CRUD API** — RESTful Express.js backend with complete data management
- 🔍 **Smart Search** — Find shrines by name, location, or address
- 📊 **Data Management** — Add, update, and delete shrine records
- ⚡ **Graceful Degradation** — Automatic fallback to local data if API unavailable
- 🌐 **Cross-Origin Ready** — CORS enabled for seamless frontend-backend communication

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
npm run dev          # Frontend only
# OR
npm run server:dev   # Backend + Frontend (in separate terminals)
```

**Access the application:**

- Frontend: http://localhost:5173
- API: http://localhost:5000

## 📁 Project Structure

```
shrine-finder/
├── src/                          # React Frontend
│   ├── components/               # React Components
│   │   ├── App/                 # Main app component
│   │   ├── Header/              # Navigation header
│   │   ├── Shrines/             # Shrine listing page
│   │   ├── PublicApi/           # API documentation page
│   │   ├── Dashboard/           # Landing page
│   │   ├── ListItem/            # Shrine list item
│   │   ├── AddShrineForm/       # Example form component
│   │   └── ...                  # Other components
│   ├── utils/
│   │   ├── api.js               # API client functions
│   │   └── constants.js         # Shrine data
│   ├── vendors/
│   │   └── normalize.css        # CSS reset
│   ├── index.css                # Global styles
│   └── main.jsx                 # React entry point
│
├── server/                       # Express Backend
│   ├── server.js                # Main server & routes
│   ├── data.js                  # Shrine database
│   ├── API.md                   # API documentation
│   └── test-api.sh              # Test automation
│
├── public/                       # Static assets
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # Linting rules
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── API_INTEGRATION.md          # Frontend integration guide
├── QUICK_START.sh              # Quick reference
└── README.md                   # This file
```

## 🔌 API Reference

### Base URL

```
http://localhost:5000
```

### Endpoints Overview

| Method | Endpoint                      | Description         | Auth |
| ------ | ----------------------------- | ------------------- | ---- |
| GET    | `/api/shrines`                | Get all shrines     | ❌   |
| GET    | `/api/shrines/:id`            | Get specific shrine | ❌   |
| POST   | `/api/shrines`                | Add new shrine      | ❌   |
| PUT    | `/api/shrines/:id`            | Update shrine       | ❌   |
| DELETE | `/api/shrines/:id`            | Delete shrine       | ❌   |
| GET    | `/api/shrines/search?q=query` | Search shrines      | ❌   |
| GET    | `/api/shrines/count`          | Get total count     | ❌   |

### Example Requests

**Get all shrines:**

```bash
curl http://localhost:5000/api/shrines
```

**Add a shrine:**

```bash
curl -X POST http://localhost:5000/api/shrines \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Meiji Shrine",
    "location": "Shibuya - Tokyo, Japan",
    "address": "1-1 Yoyogikamizonocho, Shibuya Ward, Tokyo"
  }'
```

**Search shrines:**

```bash
curl "http://localhost:5000/api/shrines/search?q=Kyoto"
```

For complete API documentation, see [server/API.md](./server/API.md).

## 💻 Technologies

### Frontend Stack

| Technology   | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| React        | 19      | UI library              |
| Vite         | 8       | Build tool & dev server |
| React Router | 6.30    | Client-side routing     |
| CSS3         | Modern  | Styling & design system |

### Backend Stack

| Technology | Version | Purpose               |
| ---------- | ------- | --------------------- |
| Node.js    | 18+     | JavaScript runtime    |
| Express.js | 5       | Web framework         |
| CORS       | 2.8     | Cross-origin requests |

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
                    HTTP/REST/JSON
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              Express API Server (localhost:5000)            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Routes                                              │   │
│  │  ├── GET /api/shrines (list)                        │   │
│  │  ├── GET /api/shrines/:id (detail)                  │   │
│  │  ├── POST /api/shrines (create)                     │   │
│  │  ├── PUT /api/shrines/:id (update)                  │   │
│  │  ├── DELETE /api/shrines/:id (remove)               │   │
│  │  └── GET /api/shrines/search (search)               │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Data Store (In-Memory - array of shrines)           │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **On App Load**: Frontend fetches data from API with fallback to local data
2. **Search**: User enters search term → Frontend sends query → API filters results
3. **Add Shrine**: User submits form → POST request → Server validates → Shrine added
4. **Update/Delete**: Similar flow for PUT/DELETE operations

## 🛠️ Development

### Available Commands

```bash
# Frontend Development
npm run dev           # Start Vite dev server (http://localhost:5173)
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run ESLint on codebase

# Backend Development
npm run server        # Start Express API (http://localhost:5000)
npm run server:dev    # Start with file watching

# Testing
bash server/test-api.sh  # Run automated API tests
```

### Development Workflow

**Terminal 1 - Backend:**

```bash
npm run server:dev
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

**Terminal 3 - Run Tests (optional):**

```bash
bash server/test-api.sh
```

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

### Current Implementation

- ✅ Input validation on all endpoints
- ✅ Error handling middleware
- ✅ Type checking for requests
- ✅ CORS enabled for development

### Recommendations for Production

Before deploying to production, implement:

1. **CORS Restrictions** — Limit to specific origins
2. **Rate Limiting** — Prevent abuse with `express-rate-limit`
3. **Security Headers** — Add `helmet` middleware
4. **Authentication** — Implement JWT or session-based auth
5. **HTTPS** — Enforce encrypted connections
6. **Database** — Replace in-memory storage with persistent DB
7. **Validation** — Add schema validation (joi, zod)

See [SECURITY.md](./SECURITY.md) for detailed recommendations.

## ❓ Troubleshooting

### API Server Won't Start

```bash
# Error: Port 5000 already in use
# Solution: Kill the process or use a different port
lsof -i :5000              # Find process
kill -9 <PID>             # Kill process
PORT=3001 npm run server   # Use different port
```

### Frontend Not Loading Data

```bash
# Check browser console for errors
# Ensure API server is running on port 5000
# Check VITE_API_URL environment variable
env | grep VITE_API_URL
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API Tests Fail

```bash
# Ensure server is running first
npm run server &
sleep 2
bash server/test-api.sh
```

## 📊 Project Statistics

- **Lines of Code**: ~1,000+ (frontend + backend)
- **Components**: 10+
- **API Endpoints**: 8
- **Dependencies**: 6 production + 10 dev
- **Shrine Records**: 10 sample shrines included

## 🗺️ Roadmap

### Phase 1: Current ✅

- [x] React + Vite frontend
- [x] Express.js API
- [x] CRUD operations
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

- **[API Documentation](./server/API.md)** — Complete API reference with examples
- **[Integration Guide](./API_INTEGRATION.md)** — Frontend integration examples
- **[Quick Start](./QUICK_START.sh)** — Quick reference guide
- **[Contributing](./CONTRIBUTING.md)** — Contribution guidelines (planned)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Japanese shrine data and inspiration
- React and Express.js communities
- Contributors and supporters

## 📧 Support & Questions

- 📫 **Issues**: Report bugs via GitHub Issues
- 💬 **Discussions**: Ask questions in GitHub Discussions
- 📚 **Docs**: Check [API.md](./server/API.md) and [API_INTEGRATION.md](./API_INTEGRATION.md)
- 🐛 **Debugging**: Enable console logs and check browser DevTools

---

<div align="center">

**[⬆ Back to Top](#-shrine-database)**

Created with 🏯 and ❤️ by the Shrine Database Community

</div>
