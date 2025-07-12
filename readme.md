### ✅ Project Summary (based on your info)

**Project Name:** EcoJugaad
**Tech Stack:** MERN (MySql, Express.js, React.js, Node.js, Sequelize ORM)
**Purpose:** Helps users find nearby e-waste recycling facilities using maps and location.

---

### ✅ `README.md` for **EcoJugaad**

```markdown
# ♻️ EcoJugaad - E-Waste Recycling Platform

EcoJugaad is a full-stack MERN web application that helps users find nearby e-waste recycling facilities using location-based services. The app is designed to promote sustainable living by guiding users to dispose of electronic waste responsibly.

## 🌍 Features

- 📍 Location-based search for e-waste recycling centers  
- 🗺️ Interactive map using MapGL or Mapbox API  
- 📝 Facility details: name, type, timings, contact  
- 🧾 User registration & login (optional)  
- 🔎 Search & Filter functionality  
- 📊 Admin dashboard (optional: to add/edit facility data)

## 🛠️ Tech Stack

| Layer     | Technology                      |
|-----------|----------------------------------|
| Frontend  | React.js, Tailwind CSS (optional) |
| Backend   | Express.js, Node.js             |
| Database  | MongoDB (Mongoose ODM)          |
| API       | MapGL API / Mapbox              |

## 📂 Project Structure

```

eco-jugaad/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
├── frontend/
│   ├── public/
│   │   └── images/        # Sign In, Home, Map, Booking, Profile, Contact Us, About Us
│   ├── app/
│   │   ├── signin/
│   │   ├── map/
│   │   ├── booking/
│   │   ├── profile/
│   │   ├── contact/
│   │   └── about/
│   └── components/
│
└── README.md

````

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eco-jugaad.git
cd eco-jugaad
````

### 2. Setup Backend

```bash
cd backend
npm install
# Create .env file
npm run dev
```

`.env` file format:

```
MONGO_URI=your_mongodb_uri
PORT=5000
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

`.env.local` for Frontend:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📷 Screenshots 

## 📷 Screenshots

### 🏠 Home Page
![Home Page](frontend/public/images/Home.png)

### 🔐 Sign In Page
![Sign In](frontend/public/images/signin.png)

### 🗺️ Map View
![Map View](frontend/public/images/map.png)

### 📅 Booking Page
![Booking Page](frontend/public/images/booking.png)

### 👤 Profile Page
![Profile](frontend/public/images/profile.png)

### 📞 Contact Us Page
![Contact](frontend/public/images/contact.png)

### ℹ️ About Us Page
![About Us](frontend/public/images/about.png)


## 🧑‍💻 Author

**Karthik Raut**
📧 [karthikraut@example.com](mailto:karthikraut2@gmail.com)
🌐 [LinkedIn](www.linkedin.com/in/karthik-raut-b5a6a7243) | [GitHub](https://github.com/Karthikraut)

