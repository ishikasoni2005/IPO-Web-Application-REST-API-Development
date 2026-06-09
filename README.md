# 📈 IPO Web Application

A full-stack IPO tracking app with a React frontend and Django REST Framework backend.

Browse IPO listings, view company details, and add new IPO records — all through a clean REST API with search, filtering, and sorting.

---

## ✨ Features

- Browse IPO listings with search, status filtering, and sorting
- View detailed IPO page per company
- Add new IPO records from the dashboard
- Full CRUD REST API
- CORS-enabled backend for local frontend development

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Axios, React Router |
| Backend | Django, Django REST Framework, `django-cors-headers` |
| Database | PostgreSQL (SQLite fallback) |

---

## 📂 Project Structure

```text
project-root/
├── backend/
│   ├── config/
│   ├── apps/
│   │   ├── core/        # ORM models and admin registration
│   │   ├── api/         # Serializers, views, tests, routing
│   │   └── users/       # Reserved for future auth
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── services/
│   ├── .env.example
│   └── package.json
│
├── IPO-TestDB.sql
└── ipo-webapp-documentation.pages
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/ipos` | Fetch all IPOs |
| POST | `/api/ipos` | Create a new IPO |
| GET | `/api/ipos/<id>` | Fetch a single IPO |
| PUT | `/api/ipos/<id>` | Replace an IPO |
| PATCH | `/api/ipos/<id>` | Partially update an IPO |
| DELETE | `/api/ipos/<id>` | Delete an IPO |

---

## ⚙️ Setup

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

Runs at `http://127.0.0.1:8000`

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Runs at `http://127.0.0.1:5173`. Expects backend at `http://127.0.0.1:8000/api` unless `VITE_API_BASE_URL` is overridden in `.env`.

---

## ✅ Verification

```bash
python manage.py check
python manage.py test
npm run build
```
