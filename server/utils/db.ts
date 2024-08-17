import {PrismaClient} from "@prisma/client";
import {writeLog} from "~/server/utils/logger";

let prisma: PrismaClient;

async function connectMSSQLConnectionPrisma() {
  try {
    const connection = new PrismaClient();

    await writeLog(
      "info",
      "Database MSSQL connection using prisma created successfully",
    );
    return connection;
  } catch (error) {
    await writeLog(
      "error",
      `Error connecting to the database: ${JSON.stringify(error)}`,
    );
    throw error;
  }
}

export async function getMSSQLPrismaClient() {
  if (!prisma) {
    prisma = await connectMSSQLConnectionPrisma();
  }
  return prisma;
}

