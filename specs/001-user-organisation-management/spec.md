# Feature Specification: User & Organisation Management

## Overview
Implement multi-tier role-based user and organisation management system with hierarchical permissions and self-service profile management. This is the foundation for all other features in RCAP, providing authentication, authorization, and organisational structure.

## User Stories

### US-001: User Registration & Authentication
- **As a** new user
- **I want to** register and authenticate
- **So that** I can access the platform

**Acceptance Criteria:**
- [ ] User can register with email and password
- [ ] Email verification required before account activation
- [ ] Password reset functionality via email
- [ ] JWT token-based authentication via Laravel Sanctum
- [ ] Session management with token refresh
- [ ] Logout functionality

### US-002: Role-Based Access Control
- **As a** system administrator
- **I want to** assign roles to users
- **So that** they have appropriate permissions

**Acceptance Criteria:**
- [ ] Four role levels: Super Admin, Admin, Sub-admin, User
- [ ] Role-based permissions enforced at API level (middleware)
- [ ] Role-based permissions enforced at UI level (component guards)
- [ ] Role assignment by higher-level admins only
- [ ] Permission inheritance (Super Admin > Admin > Sub-admin > User)
- [ ] Role change audit trail

### US-003: Organisation Hierarchy
- **As a** Super Admin
- **I want to** create and manage organisations in a hierarchy
- **So that** the system reflects real-world structure

**Acceptance Criteria:**
- [ ] Create organisations with parent-child relationships
- [ ] Assign users to organisations
- [ ] View organisation tree structure
- [ ] Edit organisation details (by authorised users)
- [ ] Delete organisations (with cascade handling)
- [ ] Organisation-based data filtering

### US-004: User Profile Management
- **As a** user
- **I want to** manage my profile
- **So that** my information is up to date

**Acceptance Criteria:**
- [ ] View own profile information
- [ ] Edit own profile (name, contact info)
- [ ] Upload profile picture
- [ ] Default profile picture: Abstract AI-generated avatars from [UI Faces](https://www.uifaces.co/category/abstract) are used when no custom profile picture is uploaded
- [ ] Update contact information
- [ ] Change password
- [ ] View activity history (own activities)

## Technical Requirements

### Database Schema
- **users** table:
  - id (bigint, primary key)
  - email (varchar, unique, not null)
  - password (varchar, hashed)
  - name (varchar, not null)
  - role (enum: super_admin, admin, sub_admin, user)
  - organisation_id (bigint, foreign key)
  - email_verified_at (timestamp, nullable)
  - profile_picture (varchar, nullable) - Default: abstract AI avatars from https://www.uifaces.co/category/abstract
  - created_at, updated_at

- **organisations** table:
  - id (bigint, primary key)
  - name (varchar, not null)
  - parent_id (bigint, nullable, foreign key)
  - type (enum: federal, state, local)
  - description (text, nullable)
  - created_at, updated_at

- **roles** table:
  - id (bigint, primary key)
  - name (varchar, unique)
  - permissions (json)
  - created_at, updated_at

- **user_roles** pivot table:
  - user_id (bigint, foreign key)
  - role_id (bigint, foreign key)
  - assigned_by (bigint, foreign key)
  - assigned_at (timestamp)

### API Endpoints
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/refresh` - Refresh token
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password
- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/me` - Update current user profile
- `PUT /api/v1/users/me/password` - Change password
- `GET /api/v1/organisations` - List organisations (filtered by role)
- `POST /api/v1/organisations` - Create organisation (admin only)
- `GET /api/v1/organisations/{id}` - Get organisation details
- `PUT /api/v1/organisations/{id}` - Update organisation (admin only)
- `GET /api/v1/organisations/{id}/users` - List users in organisation
- `POST /api/v1/users/{id}/roles` - Assign role to user (admin only)

### Frontend Components
- `AuthLogin.vue` - Login page component
- `AuthRegister.vue` - Registration page component
- `AuthForgotPassword.vue` - Password reset request page
- `AuthResetPassword.vue` - Password reset page
- `UserProfile.vue` - User profile page
- `OrganisationList.vue` - Organisation listing (admin)
- `OrganisationForm.vue` - Organisation create/edit form (admin)
- `UserRoleAssignment.vue` - Role assignment interface (admin)
- `useAuthStore.ts` - Pinia store for authentication
- `useUserStore.ts` - Pinia store for user data
- `useOrganisationStore.ts` - Pinia store for organisations

## Dependencies
- Laravel Sanctum for authentication
- Vue Router for navigation
- Pinia for state management
- Email service for verification and password reset

## Security Considerations
- Password hashing using bcrypt
- JWT token expiration and refresh
- Role-based middleware on all protected endpoints
- Email verification to prevent fake accounts
- Rate limiting on authentication endpoints
- CSRF protection for forms

## Performance Considerations
- Index on email for fast login lookups
- Index on organisation_id for filtering
- Cache organisation tree structure
- Lazy load organisation children

## Priority
**High** - Foundation for all other features

## Related Epics
- Epic 002: Activity Tracking (depends on user/organisation structure)
- Epic 003: Dashboards (depends on role-based access)
- Epic 004: Communication (depends on organisation hierarchy)

