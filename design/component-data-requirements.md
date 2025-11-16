# Component Data Requirements

This document defines what data each component needs, based on the SpecKit data models and API specifications.

## Epic 001: User & Organisation Management

### AuthLogin Component
**Data Needed:**
- None (form only)
- **API Call**: `POST /api/v1/auth/login`
- **Request**: `{ email: string, password: string }`
- **Response**: `{ user: User, token: string }`

### AuthRegister Component
**Data Needed:**
- Organisations list (for selection)
- **API Call**: `GET /api/v1/organisations` (for dropdown)
- **API Call**: `POST /api/v1/auth/register`
- **Request**: `{ email: string, password: string, name: string, organisation_id?: number }`
- **Response**: `{ user: User, token: string }`

### UserProfile Component
**Data Needed:**
- Current user data
- **API Call**: `GET /api/v1/users/me`
- **Response**: `{ id, email, name, role, organisation: { id, name }, profile_picture }`

### OrganisationList Component (Admin)
**Data Needed:**
- Organisations tree
- **API Call**: `GET /api/v1/organisations`
- **Response**: `[{ id, name, type, parent_id, children: [] }]`

## Epic 002: Activity Tracking

### ActivityForm Component
**Data Needed:**
- Templates list (for selection)
- Tags list (for selection)
- Current organisation
- **API Call**: `GET /api/v1/templates`
- **API Call**: `GET /api/v1/tags`
- **API Call**: `POST /api/v1/activities`
- **Request**: `{ title, description, date, location, type, organisation_id, template_id?, tags?: number[] }`

### ActivityList Component
**Data Needed:**
- Activities list (paginated)
- **API Call**: `GET /api/v1/activities?page=1&status=draft&organisation_id=1`
- **Response**: `{ data: Activity[], meta: { current_page, total, per_page } }`
- **Activity Structure**: `{ id, title, date, status, type, organisation: { name }, user: { name } }`

### FileUpload Component
**Data Needed:**
- Activity ID
- **API Call**: `POST /api/v1/activities/{id}/evidence`
- **Request**: `FormData` with file
- **Response**: `{ id, file_name, file_type, file_size, file_path }`

### ActivityTimeline Component
**Data Needed:**
- Activities by date
- **API Call**: `GET /api/v1/activities/timeline?start_date=2024-01-01&end_date=2024-12-31`
- **Response**: `{ [date: string]: Activity[] }`

## Epic 003: Dashboards & Analytics

### Dashboard Component
**Data Needed:**
- Dashboard summary
- **API Call**: `GET /api/v1/dashboard/{role}`
- **Response**: `{ total_activities, by_status: { draft, submitted, approved }, recent_activities: Activity[] }`

### StatusTrackingWidget Component
**Data Needed:**
- Status breakdown
- **API Call**: `GET /api/v1/analytics/activities/status`
- **Response**: `{ draft: number, submitted: number, approved: number, rejected: number }`

### ActivityHeatmap Component
**Data Needed:**
- Activity counts by date
- **API Call**: `GET /api/v1/analytics/activities/heatmap?start_date=2024-01-01&end_date=2024-12-31`
- **Response**: `{ [date: string]: number }`

### EngagementChart Component
**Data Needed:**
- Engagement metrics
- **API Call**: `GET /api/v1/analytics/engagement?start_date=2024-01-01&end_date=2024-12-31`
- **Response**: `{ metrics: [{ date, value, type }], trends: [{ date, average }] }`

## Epic 004: Communication

### MessageInbox Component
**Data Needed:**
- Messages list
- **API Call**: `GET /api/v1/messages?page=1`
- **Response**: `{ data: Message[], meta: { current_page, total } }`
- **Message Structure**: `{ id, subject, body, sender: { name }, is_urgent, read_at, created_at }`

### MessageComposer Component
**Data Needed:**
- Users list (for recipient selection)
- Organisations list (for broadcast)
- **API Call**: `GET /api/v1/organisations/{id}/users` (for recipient list)
- **API Call**: `POST /api/v1/messages`
- **Request**: `{ recipient_id?: number, organisation_id?: number, role?: string, subject, body, is_urgent: boolean }`

### NotificationBell Component
**Data Needed:**
- Unread count
- Recent notifications
- **API Call**: `GET /api/v1/notifications/unread-count`
- **API Call**: `GET /api/v1/notifications?limit=5`
- **Response**: `{ count: number }` and `[{ id, type, title, body, read_at, created_at }]`

## Epic 005: Documentation

### HelpSearch Component
**Data Needed:**
- Search results
- **API Call**: `GET /api/v1/help/search?q=search+term`
- **Response**: `[{ id, title, excerpt, category, slug }]`

### HelpArticle Component
**Data Needed:**
- Article content
- **API Call**: `GET /api/v1/help/articles/{id}`
- **Response**: `{ id, title, content (markdown), category, related_articles: [] }`

### OnboardingTour Component
**Data Needed:**
- Onboarding steps
- User progress
- **API Call**: `GET /api/v1/onboarding/steps`
- **API Call**: `GET /api/v1/onboarding/progress`
- **Response**: `[{ id, title, description, order, target_element }]` and `{ completed_steps: number[], skipped_steps: number[] }`

## Common Data Patterns

### Pagination
```typescript
{
  data: T[],
  meta: {
    current_page: number,
    last_page: number,
    per_page: number,
    total: number
  }
}
```

### Error Response
```typescript
{
  message: string,
  errors?: {
    [field: string]: string[]
  }
}
```

### Success Response
```typescript
{
  message?: string,
  data?: T
}
```

## Form Field Specifications

### Activity Form Fields
- **title**: string, required, max 255 chars
- **description**: text, required, max 10000 chars
- **date**: date, required, cannot be future
- **location**: string, required, max 255 chars (text only, no GIS)
- **type**: enum (workshop, campaign, meeting, training, other), required
- **template_id**: number, optional
- **tags**: number[], optional, multiple selection

### User Registration Fields
- **email**: string, required, email format, unique
- **password**: string, required, min 8 chars
- **password_confirmation**: string, required, must match password
- **name**: string, required, max 255 chars
- **organisation_id**: number, optional

### Message Form Fields
- **recipient_id**: number, optional (if sending to user)
- **organisation_id**: number, optional (if broadcasting)
- **role**: enum, optional (if sending to role group)
- **subject**: string, required, max 255 chars
- **body**: text, required, max 10000 chars
- **is_urgent**: boolean, default false

## File Upload Specifications

### Evidence File Upload
- **Allowed Types**: 
  - Images: jpg, jpeg, png, gif, webp (max 5MB)
  - Documents: pdf, doc, docx, xls, xlsx, txt (max 10MB)
  - Audio: mp3, wav, ogg (max 20MB)
  - Video: mp4, webm, mov (max 50MB)
- **Request**: `FormData` with `file` field
- **Response**: `{ id, file_name, file_type, file_size, file_path, signed_url }`

## Component Props Interface

### Example: ActivityForm Props
```typescript
interface ActivityFormProps {
  activityId?: number;  // If editing existing
  initialData?: Partial<Activity>;
  onSubmit: (data: ActivityFormData) => Promise<void>;
}
```

### Example: ActivityList Props
```typescript
interface ActivityListProps {
  filters?: {
    status?: string;
    organisation_id?: number;
    type?: string;
    date_from?: string;
    date_to?: string;
  };
}
```

