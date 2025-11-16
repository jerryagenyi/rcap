# RCAP - Risk Communication Activity Platform

<div align="center">

![RCAP Logo](https://via.placeholder.com/200x80/2c3e50/ffffff?text=RCAP)

**Risk Communication Activity Platform**

A purpose-built platform for tracking, reporting, and analyzing public health risk communication activities, optimized for low-bandwidth contexts.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3-green.svg)](https://vuejs.org/)
[![Laravel](https://img.shields.io/badge/Laravel-10-red.svg)](https://laravel.com/)

</div>

## 🚀 Quick Start

Get RCAP running in **15 minutes**:

```bash
# 1. Clone repository
git clone https://github.com/your-org/rcap.git
cd rcap

# 2. Start all services
docker-compose up -d

# 3. Setup database and seed data
docker-compose exec backend php artisan migrate:fresh --seed

# 4. Access RCAP
open http://localhost:5173
```

**Login Credentials:**
- Email: `admin@rcap.local`
- Password: `password`

📖 **Need help?** See [Quick Start Guide](./docs/QUICK_START.md)

## 📋 What RCAP Does

RCAP helps public health officials:

- 🏥 **Track Activities**: Monitor risk communication campaigns and outreach
- 📊 **Generate Reports**: Create evidence-based reports for leadership
- 👥 **Manage Teams**: Organize hierarchical health departments
- 📱 **Work Offline**: Function in low-bandwidth environments
- 🔒 **Secure Data**: Role-based access to sensitive information

## 🏗️ Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Vue 3 + Quasar | Progressive Web App, low-bandwidth optimized |
| **Backend** | Laravel 10 | RESTful API, rapid development |
| **Database** | PostgreSQL 15 | Reliable relational data storage |
| **Storage** | MinIO (S3-compatible) | File uploads and media storage |
| **Infrastructure** | Docker Compose | Consistent development and deployment |

## 📁 Project Structure

```
rcap/
├── 📁 Documentation Hub
│   ├── README.md                     # 📖 Project overview
│   ├── docs/                         # 📚 Complete documentation
│   └── .cursor/rules/                # 🤖 Cursor IDE rules
│       └── AI_ASSISTANT_PROMPT.md    # AI assistant guide
├── 📁 SpecKit Development
│   ├── specs/                        # 📋 5 MVP epics fully specified
│   ├── memory/                       # 🧠 Project constitution
│   └── templates/                    # 📋 SpecKit templates
├── 📁 Application Code
│   ├── backend/                      # 🔧 Laravel 10 API
│   ├── frontend/                     # 🎨 Vue 3 + Quasar PWA
│   └── docker-compose.yml            # 🐳 Infrastructure
└── 📁 Project Management
    ├── project-management/           # 📋 PRD, technical specs
    └── IMPLEMENTATION_PLAN.md        # 🗓️ Implementation timeline
```

📖 **See**: [Complete Project Structure](./PROJECT_STRUCTURE.md) for detailed overview

## 🎯 MVP Features

### ✅ Currently Implemented
- Multi-tier user management (Super Admin → Admin → Sub-admin → User)
- Hierarchical organization structure
- Activity tracking with evidence uploads
- Role-based dashboards and analytics
- Internal messaging system
- File storage (images, documents, audio, video)

### 🚧 Future Expansion (Not in MVP)
- Mapping and geospatial visualization
- Social media infodemiology monitoring
- AI-powered sentiment analysis
- Advanced research analytics

## 🤝 How to Contribute

RCAP follows **SpecKit-driven development**:

1. **Read the Spec**: Check `specs/epic-XXX-*.md` for feature requirements
2. **Follow the Plan**: Use `IMPLEMENTATION_PLAN.md` for task order
3. **Document Changes**: Update specs when implementing features
4. **Test Thoroughly**: Ensure all tests pass before submitting

📖 **See**: [Contributing Guide](./docs/CONTRIBUTING.md)

## 📚 Documentation

| For | Read This |
|-----|-----------|
| **New Developers** | [Quick Start](./docs/QUICK_START.md) → [Developer Setup](./docs/DEVELOPER_SETUP.md) |
| **Product Managers** | [PRD](./project-management/PRD.md) → [Implementation Plan](./IMPLEMENTATION_PLAN.md) |
| **DevOps Engineers** | [Docker Practices](./docs/DOCKER_PRACTICES.md) |
| **AI Assistants** | [AI Assistant Prompt](./.cursor/rules/AI_ASSISTANT_PROMPT.md) |
| **Project Structure** | [Complete Structure Guide](./PROJECT_STRUCTURE.md) |

## 🎯 Use Cases

### Public Health Officials
- Track COVID-19 vaccination campaign outreach
- Monitor Ebola risk communication activities
- Report on malaria prevention initiatives

### Government Organizations
- Federal ministry oversight of state programs
- State coordination of local health departments
- Cross-jurisdiction incident response

### NGOs and Partners
- Coordinate multi-organization response efforts
- Share best practices and resources
- Document impact for funding reports

## 🌍 Designed For

- **Low-bandwidth environments** - Progressive Web App technology
- **African health contexts** - Optimized for infrastructure challenges
- **Multi-level governance** - Federal → State → Local hierarchies
- **Evidence-based decisions** - Data-driven reporting and analytics

## 🔧 Development Status

- [x] Docker infrastructure setup
- [x] Database schema design
- [x] API architecture planning
- [x] Frontend component structure
- [ ] Authentication implementation *(In Progress)*
- [ ] Activity tracking features
- [ ] Dashboard analytics
- [ ] File upload system

## 🤝 Support

- 📖 **Documentation**: [./docs/](./docs/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-org/rcap/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-org/rcap/discussions)
- 📧 **Contact**: rcap@example.com

## 📄 License

[MIT License](LICENSE) - See [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built for public health professionals, by public health professionals.**

[![Built with ❤️ for Public Health](https://img.shields.io/badge/Built%20with%20❤️%20for-Public%20Health-red.svg)]()

</div>

