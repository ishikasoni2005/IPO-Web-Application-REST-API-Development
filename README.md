# IPO Web Application

A full-stack IPO tracking application built with a React frontend and a Django REST Framework backend. The app lets users browse IPO listings, open detailed IPO pages, and add new IPO records through a REST API.

## Features

- Browse IPO listings with search, status filtering, and sorting
- View IPO details for a selected company
- Add new IPO records from the dashboard form
- REST API for IPO CRUD operations
- React frontend connected to Django through Axios
- CORS-enabled backend for local frontend development

## Tech Stack

- Frontend: React, Vite, Axios, React Router
- Backend: Django, Django REST Framework, django-cors-headers
- Database: PostgreSQL when configured, otherwise SQLite fallback

## Project Structure

```text
project-root
├── backend
│   ├── manage.py
│   ├── requirements.txt
│   ├── config
│   └── apps
│       ├── api
│       ├── core
│       └── users
├── frontend
│   ├── package.json
│   ├── .env.example
│   └── src
│       ├── components
│       ├── pages
│       ├── routes
│       └── services
├── IPO-TestDB.sql
└── ipo-webapp-documentation.pages
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/ipos` | Fetch all IPOs |
| POST | `/api/ipos` | Create a new IPO |
| GET | `/api/ipos/<id>` | Fetch a single IPO |
| PUT | `/api/ipos/<id>` | Replace an IPO |
| PATCH | `/api/ipos/<id>` | Update an IPO partially |
| DELETE | `/api/ipos/<id>` | Delete an IPO |

## Backend Notes

- Django apps:
  - `apps.core`: ORM models and admin registration
  - `apps.api`: serializers, views, tests, and API routing
  - `apps.users`: reserved for future authentication work
- CORS is configured for local React development through `django-cors-headers`
- The backend preserves slashless endpoints to match the existing frontend calls

## Installation

### Backend
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

Backend default URL: `http://127.0.0.1:8000`

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend default URL: `http://127.0.0.1:5173`

The frontend expects the backend API base URL to be `http://127.0.0.1:8000/api` unless `VITE_API_BASE_URL` is overridden.

## Verification

- `python manage.py check`
- `python manage.py test`
- `npm run build`
