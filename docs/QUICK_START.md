# RCAP Quick Start Guide

## 🚀 Get RCAP Running in 15 Minutes

This guide gets you from zero to a fully running RCAP development environment.

### Prerequisites

- **Docker & Docker Compose** installed
- **Git** installed
- **At least 4GB RAM** available
- **10GB free disk space**

### 1. Clone Repository

```bash
git clone https://github.com/your-org/rcap.git
cd rcap
```

### 2. Start Services

```bash
# Start all services (PostgreSQL, MinIO, Redis, Laravel, Vue)
docker-compose up -d

# Wait 30-60 seconds for services to be healthy
docker-compose ps
```

You should see all services as "healthy" or "running".

### 3. Setup Backend

```bash
# Install PHP dependencies
docker-compose exec backend composer install

# Generate application key
docker-compose exec backend php artisan key:generate

# Run database migrations and seed data
docker-compose exec backend php artisan migrate:fresh --seed

# Create storage link
docker-compose exec backend php artisan storage:link
```

### 4. Setup Frontend

```bash
# Install Node.js dependencies
docker-compose exec frontend npm install

# Build Quasar development server
docker-compose exec frontend npm run dev
```

### 5. Access RCAP

🎉 **RCAP is now running!**

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:5173 | Main RCAP application |
| **Backend API** | http://localhost:8000 | Laravel API documentation |
| **MinIO Console** | http://localhost:9001 | File storage management |
| **phpMyAdmin** (optional) | http://localhost:8080 | Database browser |

### 6. Login to RCAP

```
Email: admin@rcap.local
Password: password
```

You're logged in as a Super Administrator with full access to explore all features.

## What You Get Out-of-the-Box

### ✅ Pre-configured Features

1. **User Management**: Multi-tier roles (Super Admin → Admin → Sub-admin → User)
2. **Organisations**: Federal → State → Local hierarchy
3. **Activity Tracking**: Create and manage health communication activities
4. **File Uploads**: Evidence storage (images, docs, audio, video)
5. **Dashboards**: Role-based analytics and reporting
6. **Internal Messaging**: Communication between organization levels

### 📊 Sample Data

The seeder creates realistic public health data:

- **3 Sample Organisations**: Federal Ministry, State Health Departments
- **4 User Roles**: With appropriate permissions
- **Sample Activities**: COVID-19 campaigns, vaccination drives
- **Test Files**: Sample health education materials

### 🔧 Development Tools

- **Hot Reload**: Frontend changes appear instantly
- **API Documentation**: Available at `/api/docs`
- **Database Viewer**: phpMyAdmin for data inspection
- **File Browser**: MinIO console for uploaded files

## Next Steps

### 🎯 **Explore the Platform**
1. Create a new user with a different role
2. Upload evidence files to an activity
3. View different dashboards based on roles
4. Send internal messages between users

### 📚 **Learn More**
- [Complete Developer Setup](./DEVELOPER_SETUP.md)
- [Docker Best Practices](./DOCKER_PRACTICES.md)
- [How to Contribute](./CONTRIBUTING.md)
- [API Documentation](./API_DOCUMENTATION.md)

### 🐛 **Troubleshooting**
If something doesn't work:
1. Check [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Verify Docker services: `docker-compose ps`
3. Check logs: `docker-compose logs [service-name]`

## Common Questions

**Q: Can I change the ports?**
A: Yes, edit the `.env` file before starting services.

**Q: Where are the database files stored?**
A: In Docker-managed volumes (not in Git). See [Docker Practices](./DOCKER_PRACTICES.md).

**Q: How do I reset the database?**
A: `docker-compose exec backend php artisan migrate:fresh --seed`

**Q: Can I use a different database?**
A: PostgreSQL is required for production, but you can use SQLite for local testing.

---

🎉 **Welcome to RCAP!** You're now ready to contribute to public health risk communication tracking.

Need help? Check our [troubleshooting guide](./TROUBLESHOOTING.md) or open an issue.