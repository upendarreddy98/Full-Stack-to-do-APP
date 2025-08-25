# Todo App Backend

Express.js REST API for the Todo List application with TypeScript, Prisma, and MySQL.

## 🚀 Features

- ✅ **Create Tasks**: Add new tasks with title, description, and color
- ✏️ **Edit Tasks**: Update existing tasks
- ✅ **Toggle Completion**: Mark tasks as completed/incomplete
- 🗑️ **Delete Tasks**: Remove tasks with confirmation
- 🎨 **Color Coding**: Assign colors to organize tasks
- 📱 **Responsive Design**: Works on desktop and mobile
- 🔄 **Real-time Updates**: Instant UI updates with optimistic updates
- 🎯 **Modern UI**: Clean, dark theme following Figma design

## 🏗️ Architecture

### Frontend (Next.js)
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + useReducer
- **API Integration**: Custom API service with error handling

### Backend (Express.js)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MySQL with Prisma ORM
- **API**: RESTful endpoints
- **Validation**: Input validation and error handling

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

## 🚦 Quick Start

### Prerequisites

- Node.js 18+
- Docker Desktop
- npm

### Platform-Specific Setup Guides

- **macOS**: See [MACOS_SETUP.md](MACOS_SETUP.md) for detailed macOS instructions
- **Windows**: Follow the standard instructions below
- **Linux**: Follow the standard instructions with your package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd fullstack-todo-app
```

### 2. Start MySQL Database

```bash
docker-compose up -d mysql
```

### 3. Setup Backend

```bash
cd backend
npm install
npm run db:generate
npm run db:push
npm run dev
```

### 4. Setup Frontend (New Terminal)

```bash
cd frontend
npm install
npm run dev
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/health

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
