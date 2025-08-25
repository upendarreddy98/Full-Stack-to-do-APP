# Todo App Frontend

Modern React frontend built with Next.js, TypeScript, and Tailwind CSS for the Todo List application.

## 🚀 Features

- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **State Management**: React Context + useReducer
- **API Integration**: Custom service layer with error handling
- **Modern UI**: Dark theme following Figma design
- **Color Coding**: Visual organization with color-coded tasks

## 📋 Prerequisites

- Node.js 18+
- npm
- Backend API running on port 3001

### Platform-Specific Setup

**macOS:**
- Install Node.js via [nodejs.org](https://nodejs.org) or Homebrew: `brew install node`
- npm comes bundled with Node.js

**Windows:**
- Install Node.js from [nodejs.org](https://nodejs.org)
- npm comes bundled with Node.js

**Linux:**
- Install via package manager: `sudo apt install nodejs npm` (Ubuntu/Debian)
- Or use Node Version Manager (nvm)

## 🛠️ Quick Start

### **Step 1: Install Dependencies**
```bash
npm install
```

### **Step 2: Environment Setup**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### **Step 3: Start Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🌐 Pages & Features

### **Home Page (`/`)**
- List of all tasks with color coding
- Task statistics (total and completed)
- Toggle task completion (checkboxes)
- Delete tasks with confirmation
- Create new task button

### **Create Task (`/create`)**
- Title input (required)
- Color picker (9 color options)
- Form validation

### **Edit Task (`/edit/[id]`)**
- Pre-filled form with existing data
- Update task title and color
- Save changes functionality

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
todo-app-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/            # Reusable UI components
│   ├── contexts/              # React Context for state
│   └── lib/                   # API service layer
├── .env.local                 # Environment variables
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Background**: Dark gray (#111827)
- **Cards**: Medium gray (#1f2937)
- **Task Colors**: Red, Orange, Yellow, Green, Blue, Indigo, Purple, Pink, Gray

## 🌐 API Integration

The frontend communicates with the backend API:

```typescript
// Get all tasks
const tasks = await todoApi.getTodos()

// Create task
const newTask = await todoApi.createTodo({
  title: "New Task",
  color: "blue"
})

// Update task
const updatedTask = await todoApi.updateTodo(id, {
  completed: true
})

// Delete task
await todoApi.deleteTodo(id)
```

## 🚨 Troubleshooting

### Frontend Won't Start
```bash
# Check if backend is running
curl http://localhost:3001/tasks

# Restart frontend
npm run dev
```

### API Connection Issues
- Ensure backend is running on port 3001
- Check `.env.local` configuration
- Verify CORS settings in backend

### Platform-Specific Issues

**macOS:**
```bash
# If port 3000 is in use
lsof -ti:3000 | xargs kill -9

# Clear npm cache
npm cache clean --force

# Reset node_modules
rm -rf node_modules package-lock.json
npm install
```

**Windows:**
```powershell
# If port 3000 is in use
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Clear npm cache
npm cache clean --force
```

**Linux:**
```bash
# If port 3000 is in use
sudo lsof -ti:3000 | xargs sudo kill -9

# Clear npm cache
npm cache clean --force
```

## 📝 Backend Repository

This frontend requires the backend API to function. Get the backend from:
**Backend Repository**: [todo-app-backend](https://github.com/upendarreddy98/todo-app-backend)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variable: `NEXT_PUBLIC_API_URL=your-backend-url`
3. Deploy automatically

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📄 License

This project is licensed under the MIT License.
