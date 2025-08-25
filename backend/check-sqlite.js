const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkSQLiteDatabase() {
  try {
    console.log('Checking SQLite database contents...');
    console.log('Database URL:', process.env.DATABASE_URL);
    
    const todos = await prisma.todo.findMany();
    console.log(`Found ${todos.length} todos in SQLite database:`);
    console.log(JSON.stringify(todos, null, 2));
    
    // Also check the count
    const count = await prisma.todo.count();
    console.log(`Total count: ${count}`);
    
  } catch (error) {
    console.error('Error checking SQLite database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkSQLiteDatabase();
