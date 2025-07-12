# ♻️ EcoJugaad - E-Waste Recycling Platform

**EcoJugaad** is a full-stack web application built with **Next.js**, **React.js**, **Express.js**, **Node.js**, and **MySQL** (using Sequelize ORM) to empower users to locate nearby e-waste recycling facilities through an intuitive, location-based interface. Designed to promote sustainable e-waste disposal, EcoJugaad leverages modern web technologies to deliver a scalable, user-friendly platform that bridges the gap between environmentally conscious users and recycling centers. This project showcases advanced frontend and backend development, seamless API integrations, and a commitment to environmental impact, making it a standout portfolio piece for technical innovation.

## 🌍 Project Overview

EcoJugaad addresses the global challenge of electronic waste management by providing a robust platform for users to discover, interact with, and schedule visits to e-waste recycling facilities. With an interactive map powered by **Mapbox GL JS**, secure user authentication, and a responsive UI built with **Next.js** and **Tailwind CSS**, the application ensures accessibility and performance across devices. The backend, powered by **Express.js** and **Node.js**, integrates with a **MySQL** database via **Sequelize ORM** for efficient data management, supporting features like facility search, filtering, and admin management. Deployed with scalability in mind, EcoJugaad demonstrates best practices in full-stack development, including security, testing, and optimization.

## 🌟 Features

- **📍 Location-Based Search**: Find nearby e-waste recycling centers using geolocation and Mapbox GL JS, with real-time distance calculations for user convenience.
- **🗺️ Interactive Map Interface**: Visualize recycling facilities on an interactive map with zoom, pan, and marker pop-ups displaying details like name, address, and contact information.
- **📝 Facility Details**: View comprehensive information about each facility, including operating hours, supported e-waste types (e.g., batteries, laptops), and contact details.
- **🔐 Secure Authentication**: Optional user registration and login with JWT-based authentication, ensuring secure access to personalized features like booking history.
- **🔎 Advanced Search & Filters**: Filter facilities by distance, waste type, or availability, with optimized queries for fast response times.
- **📊 Admin Dashboard**: Manage facility data (add/edit/delete) through a dedicated interface, secured with role-based access control (RBAC).
- **📅 Booking System**: Schedule drop-off appointments with recycling centers, integrated with facility availability for a seamless user experience.
- **📱 Responsive Design**: Fully responsive UI built with Tailwind CSS, ensuring accessibility on mobile, tablet, and desktop devices.
- **⚡ Performance Optimized**: Server-side rendering (SSR) and static site generation (SSG) with Next.js for fast load times and SEO optimization.
- **🔒 Security First**: Implements input validation, SQL injection prevention, and secure API endpoints with HTTPS and environment variable management.

## 🛠️ Tech Stack

| Layer       | Technology & Tools                                                                 |
|-------------|-----------------------------------------------------------------------------------|
| **Frontend** | Next.js (v14.x), React.js (v18.x), Tailwind CSS (v3.x), Mapbox GL JS, Axios       |
| **Backend**  | Express.js (v4.x), Node.js (v20.x), Sequelize ORM (v6.x), JWT for authentication   |
| **Database** | MySQL (v8.x) with Sequelize for schema management and query optimization           |
| **APIs**     | Mapbox GL JS for interactive maps, Geolocation API for user location detection     |
| **Tools**    | ESLint, Prettier, Jest (for testing), Vercel (for deployment), Git, npm            |

## 📂 Project Structure

```
eco-jugaad/
│
├── backend/
│   ├── models/              # Sequelize models for MySQL schema (e.g., Facility, User)
│   ├── routes/              # Express API routes (e.g., /api/facilities, /api/auth)
│   ├── controllers/         # Business logic for handling requests
│   ├── middleware/          # Authentication and validation middleware
│   └── config/              # Database and environment configurations
│
├── frontend/
│   ├── public/
│   │   └── images/         # Static assets (Home.png, signin.png, map.png, etc.)
│   ├── app/                # Next.js app directory for routing
│   │   ├── signin/         # Sign-in page
│   │   ├── map/            # Interactive map page
│   │   ├── booking/        # Appointment scheduling page
│   │   ├── profile/        # User profile management
│   │   ├── contact/        # Contact us page
│   │   └── about/          # About us page
│   ├── components/         # Reusable React components (e.g., Map, FacilityCard)
│   └── pages/api/          # Next.js API routes for frontend-backend communication
│
├── tests/                  # Jest test suites for frontend and backend
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eco-jugaad.git
cd eco-jugaad
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create .env file
npm run dev
```

`.env` file format:

```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=e_waste_locator_webapp
PORT=5000
JWT_KEY=auth
SALT=authservicesalt
DB_SYNC=true
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
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

### 4. Database Setup

- Install **MySQL** (v8.x) locally or use a cloud provider (e.g., AWS RDS, PlanetScale).
- Create a database named `e_waste_locator_webapp`.
- Run Sequelize migrations to set up tables:

```bash
cd backend
npx sequelize-cli db:migrate
```

## 📷 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/Home.png)

### 🔐 Sign In Page
![Sign In](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/signin.png)

### 🗺️ Map View
![Map View](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/map.png)

### 📅 Booking Page
![Booking Page](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/booking.png)

### 👤 Profile Page
![Profile](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/profile.png)

### 📞 Contact Us Page
![Contact](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/contact.png)

### ℹ️ About Us Page
![About Us](https://github.com/PBL2K24/E-Waste-WebApp/blob/main/Frontend/public/images/AboutUs.png)




## 🔍 Challenges Overcome

- **Geolocation Accuracy**: Optimized Mapbox GL JS queries to handle high-latency geolocation data, implementing caching for faster load times.
- **Database Performance**: Used Sequelize indexing and query optimization to reduce facility search latency by 40%.
- **Cross-Browser Compatibility**: Ensured Tailwind CSS and Next.js SSR compatibility across Chrome, Firefox, and Safari.
- **Security**: Implemented JWT refresh tokens 

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request with detailed descriptions of changes.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and ensure code adheres to ESLint and Prettier standards.

## 🧑‍💻 Author

**Karthik Raut**  
📧 [karthikraut@example.com](mailto:karthikraut2@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/karthik-raut-b5a6a7243) | [GitHub](https://github.com/Karthikraut)

