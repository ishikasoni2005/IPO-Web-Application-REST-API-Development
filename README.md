# 📈 IPO Web Application (React + Django REST API)

A full-stack **IPO Tracking Web Application** built using **React for the frontend** and **Django with Django REST Framework for the backend**.  
The platform allows users to explore **upcoming, ongoing, and recently listed IPOs**, view detailed company information, and track IPO subscription status through a modern web interface powered by REST APIs.

---

# 🚀 Features

## 📊 IPO Dashboard
- View **upcoming IPOs**
- Track **ongoing IPO subscriptions**
- Explore **recently listed IPOs**
- Interactive and responsive UI

## 🔎 IPO Details
- Company name and overview
- IPO issue price
- Lot size and issue size
- IPO open and close dates
- Listing date and exchange
- Subscription status

## 👤 User Features
- User registration and login
- Bookmark IPOs
- Personal IPO watchlist

## ⚡ REST API
Backend APIs built using **Django REST Framework** for scalable and efficient communication between frontend and backend.

Example endpoints:

| Method | Endpoint | Description |
|------|------|------|
| GET | `/api/ipos/` | Fetch all IPOs |
| GET | `/api/ipos/{id}/` | Get IPO details |
| POST | `/api/ipos/` | Add IPO |
| PUT | `/api/ipos/{id}/` | Update IPO |
| DELETE | `/api/ipos/{id}/` | Delete IPO |

---

# 🏗️ Tech Stack

## Frontend
- React
- Axios
- React Router
- Tailwind CSS / Bootstrap

## Backend
- Django
- Django REST Framework
- PostgreSQL / SQLite
- Django Authentication

## Tools
- Git & GitHub
- REST API Architecture
- JSON Data Exchange

---

# 📂 Project Structure



ipo-web-app
│
├── backend
│ ├── ipo_project
│ ├── ipo_api
│ ├── manage.py
│ └── requirements.txt
│
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── services
│ │ ├── App.js
│ │ └── index.js
│
└── README.md



---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ipo-web-app.git
cd ipo-web-app


cd backend

python -m venv venv

source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver

Backend runs on:
http://127.0.0.1:8000


💻 Frontend Setup (React)
cd frontend

npm install
npm start
Frontend runs on:
http://localhost:3000


🔗 API Integration Example
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/ipos/";

export const fetchIPOs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
📊 Example IPO Data
{
  "company_name": "ABC Tech Ltd",
  "issue_price": "₹320",
  "lot_size": 45,
  "open_date": "2026-04-01",
  "close_date": "2026-04-03",
  "listing_date": "2026-04-10"
}
🔮 Future Improvements
Live IPO data integration using stock market APIs
IPO subscription analytics
Portfolio tracking
Email and push notifications
Admin dashboard for IPO management
👩‍💻 Author
Ishika
Computer Science Student
Backend Developer | AI/ML Enthusiast
