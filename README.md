# Full-Stack Todo Application

A modern, full-stack Todo application with React (Next.js) frontend and Express.js backend, featuring a dark theme with rocket icon design.

## 🚀 Features

- **Modern UI**: Dark theme with gradient rocket icon design
- **Full CRUD**: Create, read, update, and delete tasks
- **Color Coding**: Organize tasks with color categories
- **Real-time Updates**: Instant UI feedback and state management
- **Type Safety**: Full TypeScript implementation across the stack
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Database Integration**: MySQL with Prisma ORM

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Context API** for state management

### Backend
- **Express.js** with TypeScript
- **Prisma ORM** for database management
- **MySQL 8.0** database
- **CORS** enabled for frontend integration

### Infrastructure
- **Docker** for MySQL containerization
- **RESTful API** design
- **Environment-based** configuration

## 📁 Project Structure

```
fullstack-todo-app/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable React components
│   │   ├── contexts/        # React Context for state management
│   │   └── lib/            # API services and utilities
│   ├── package.json
│   └── README.md
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   └── index.ts        # Main server file
│   ├── prisma/             # Database schema and migrations
│   ├── package.json
│   └── README.md
└── README.md               # This file
```

## 📋 Prerequisites

- Node.js 18+
- Docker Desktop
- npm or yarn

## 🚀 Quick Start Guide

### **Step 1: Clone Repository**
```bash
git clone https://github.com/upendarreddy98/Full-Stack-to-do-APP.git
cd Full-Stack-to-do-APP
```

### **Step 2: Start MySQL Database**
```bash
docker-compose up -d mysql
```

### **Step 3: Setup Backend**
```bash
cd backend
npm install
npm run db:generate
npm run db:push
npm run dev
```
Backend will be running on `http://localhost:3001`

### **Step 4: Setup Frontend** (in new terminal)
```bash
cd frontend
npm install
npm run dev
```
Frontend will be running on `http://localhost:3000`

### **Step 5: Access Application**
Open your browser and navigate to `http://localhost:3000`

## 📖 Detailed Setup Instructions

See individual README files:
- [Backend Setup](./backend/README.md)
- [Frontend Setup](./frontend/README.md)

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get specific task |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

## 🎨 Design

The application follows the provided Figma design with:
- Dark theme with blue accents
- Clean, modern interface
- Color-coded tasks
- Responsive layout
- Intuitive user interactions

## 🧪 Testing

Run tests for both applications:

```bash
# Backend tests
cd backend && npm test

# Frontend tests  
cd frontend && npm test
```

## 🚀 Deployment

### Backend Deployment
1. Set up MySQL database
2. Configure environment variables
3. Run database migrations
4. Deploy to your preferred platform

### Frontend Deployment
1. Configure API URL for production
2. Build the application
3. Deploy to Vercel, Netlify, or your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Context**: State management
- **Custom Hooks**: Reusable logic

### Backend
- **Express.js**: Node.js web framework
- **TypeScript**: Type-safe JavaScript
- **Prisma**: Modern database toolkit
- **MySQL**: Relational database
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 📄 License

This project is licensed under the MIT License.
