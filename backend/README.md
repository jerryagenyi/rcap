# RCAP Backend API

Laravel-based RESTful API for RCAP platform.

## Setup

1. Copy environment file:
```bash
cp .env.example .env
```

2. Install dependencies:
```bash
composer install
```

3. Generate application key:
```bash
php artisan key:generate
```

4. Run migrations:
```bash
php artisan migrate
```

5. Seed database:
```bash
php artisan db:seed
```

## Development

Run development server:
```bash
php artisan serve
```

API will be available at: http://localhost:8000

## Testing

Run tests:
```bash
php artisan test
```

## API Documentation

API documentation will be available at `/api/documentation` (Swagger/OpenAPI).

