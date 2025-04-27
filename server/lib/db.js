import mysql from "mysql2/promise";

export async function connectDB() {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shamshair',  // Make sure to replace with your MySQL password
    database: 'rao'  // Make sure this matches your actual DB name
  });

  return db;
}