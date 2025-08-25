# Todo App - macOS Setup Guide

Complete setup instructions for running the Todo App on macOS.

## 🍎 **macOS Prerequisites**

### **Step 1: Install Required Software**

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js and npm
brew install node

# Install Docker Desktop for Mac
# Download from: https://www.docker.com/products/docker-desktop
# Or install via Homebrew Cask
brew install --cask docker
```

### **Step 2: Verify Installations**

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Docker version
docker --version

# Start Docker Desktop (if not running)
open -a Docker
```

## 🚀 **Backend Setup (macOS)**

### **Step 1: Clone and Setup Backend**

```bash
# Clone the backend repository
git clone https://github.com/upendarreddy98/todo-app-backend.git
cd todo-app-backend

# Install dependencies
npm install
```

### **Step 2: Start MySQL Database**

```bash
# Ensure Docker Desktop is running
docker ps

# Start MySQL container
docker-compose up -d mysql

# Verify MySQL is running
docker ps | grep mysql
```

### **Step 3: Initialize Database**

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with sample data
npm run db:seed
```

### **Step 4: Start Backend Server**

```bash
# Start development server
npm run dev

# Backend will be available at http://localhost:3001
```

## 🎨 **Frontend Setup (macOS)**

### **Step 1: Clone and Setup Frontend**

```bash
# Open new terminal window/tab
# Clone the frontend repository
git clone https://github.com/upendarreddy98/todo-app-frontend.git
cd todo-app-frontend

# Install dependencies
npm install
```

### **Step 2: Configure Environment**

```bash
# Create environment file
touch .env.local

# Add API URL to .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
```

### **Step 3: Start Frontend Server**

```bash
# Start development server
npm run dev

# Frontend will be available at http://localhost:3000
```

## 🔧 **macOS-Specific Commands**

### **Port Management**

```bash
# Check what's running on port 3000
lsof -ti:3000

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Check what's running on port 3001
lsof -ti:3001

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### **Docker Management**

```bash
# Start Docker Desktop
open -a Docker

# Stop all containers
docker stop $(docker ps -aq)

# Remove all containers
docker rm $(docker ps -aq)

# View Docker logs
docker-compose logs mysql
```

### **Node.js Management**

```bash
# Clear npm cache
npm cache clean --force

# Reset node_modules
rm -rf node_modules package-lock.json
npm install

# Update npm
npm install -g npm@latest
```

## 🚨 **macOS Troubleshooting**

### **Permission Issues**

```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm

# Fix node_modules permissions
sudo chown -R $(whoami) node_modules
```

### **Docker Issues**

```bash
# Reset Docker Desktop
# Go to Docker Desktop > Troubleshoot > Reset to factory defaults

# Restart Docker service
sudo launchctl stop com.docker.docker
sudo launchctl start com.docker.docker
```

### **Port Conflicts**

```bash
# Find process using port
sudo lsof -i :3000
sudo lsof -i :3001

# Kill specific process
sudo kill -9 <PID>
```

## ✅ **Verification Steps**

### **Test Backend**

```bash
# Test API endpoint
curl http://localhost:3001/tasks

# Should return JSON array of tasks
```

### **Test Frontend**

```bash
# Open in browser
open http://localhost:3000

# Should display Todo App interface
```

## 🎯 **Quick Commands Summary**

```bash
# Backend (Terminal 1)
cd todo-app-backend
docker-compose up -d mysql
npm run db:generate && npm run db:push && npm run db:seed
npm run dev

# Frontend (Terminal 2)
cd todo-app-frontend
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
npm install
npm run dev
```

Your Todo App should now be running on macOS! 🎉
