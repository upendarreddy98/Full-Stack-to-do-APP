# Todo App Backend

Express.js REST API for the Todo List application with TypeScript, Prisma, and MySQL.

## 🚀 Features

- **RESTful API**: Complete CRUD operations for tasks
- **TypeScript**: Full type safety
- **Prisma ORM**: Modern database toolkit
- **MySQL Database**: Reliable relational database
- **CORS Support**: Cross-origin resource sharing

## 📋 Prerequisites

- Node.js 18+
- Docker Desktop (for MySQL)
- npm

### Platform-Specific Requirements

**macOS:**
- Install Docker Desktop for Mac from [docker.com](https://www.docker.com/products/docker-desktop)
- Ensure Docker is running before starting MySQL

**Windows:**
- Install Docker Desktop for Windows
- Enable WSL2 if prompted

**Linux:**
- Install Docker Engine or Docker Desktop
- Ensure your user is in the docker group

## 🛠️ Quick Start

### **Step 1: Clone Repository**
```bash
git clone https://github.com/upendarreddy98/todo-app-backend.git
cd todo-app-backend
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Start MySQL Database**
```bash
# Start MySQL container
docker-compose up -d mysql
```

### **Step 4: Database Setup**
```bash
# Generate Prisma client
npm run db:generate

# Create database tables
npm run db:push

# Optional: Add sample data
npm run db:seed
```

### **Step 5: Start Development Server**
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## 🔧 Environment Configuration

Create a `.env` file in the root directory:
```env
DATABASE_URL="mysql://upendartodo:upendartodo123@localhost:3306/todo_app"
PORT=3001
NODE_ENV=development
```

## 📚 API Endpoints

### Base URL: `http://localhost:3001`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get specific task |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

### Example Requests

**Get all tasks:**
```bash
curl http://localhost:3001/tasks
```

**Create a task:**
```bash
curl -X POST http://localhost:3001/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task","color":"blue"}'
```

**Update a task:**
```bash
curl -X PUT http://localhost:3001/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

**Delete a task:**
```bash
curl -X DELETE http://localhost:3001/tasks/1
```

## 🗄️ Database Schema

```sql
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    color VARCHAR(50) DEFAULT 'blue',
    completed BOOLEAN DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Add sample data

## 🐳 Docker Setup

### Using Docker Compose (Recommended)
```bash
# Start MySQL database
docker-compose up -d mysql

# Check if running
docker ps
```

### Platform-Specific Docker Commands

**macOS/Linux:**
```bash
# Start MySQL container
docker-compose up -d mysql

# View logs
docker-compose logs mysql

# Stop container
docker-compose down
```

**Windows (PowerShell):**
```powershell
# Start MySQL container
docker-compose up -d mysql

# View logs
docker-compose logs mysql

# Stop container
docker-compose down
```

### Manual MySQL Setup
If you prefer local MySQL installation:

**macOS:**
```bash
# Install via Homebrew
brew install mysql
brew services start mysql

# Create database and user
mysql -u root -p
CREATE DATABASE todo_app;
CREATE USER 'upendartodo'@'localhost' IDENTIFIED BY 'upendartodo123';
GRANT ALL PRIVILEGES ON todo_app.* TO 'upendartodo'@'localhost';
```

**Windows/Linux:**
1. Install MySQL 8.0+
2. Create database: `todo_app`
3. Create user: `upendartodo` with password `upendartodo123`
4. Update `.env` with your credentials

## 🚨 Troubleshooting

### Database Connection Issues
```bash
# Check if MySQL container is running
docker ps

# Check MySQL logs
docker logs todo_mysql

# Restart MySQL
docker-compose restart mysql
```

### Prisma Issues
```bash
# Regenerate Prisma client
npm run db:generate

# Reset database
npm run db:push
```

## 📝 Frontend Repository

This backend serves the frontend application. Get the frontend from:
**Frontend Repository**: [todo-app-frontend](https://github.com/upendarreddy98/todo-app-frontend)

## 🚀 Deployment

### Production Setup
1. Set up MySQL database on your hosting platform
2. Update environment variables:
   ```env
   DATABASE_URL="mysql://user:password@host:port/database"
   PORT=3001
   NODE_ENV=production
   ```
3. Run migrations:
   ```bash
   npm run db:migrate
   ```
4. Start server:
   ```bash
   npm run build
   npm start
   ```

## 📄 License

This project is licensed under the MIT License.
