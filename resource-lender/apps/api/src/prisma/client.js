import { PrismaClient } from '@prisma/client' //needs pnpm dlx prisma generate command 

const prisma = new PrismaClient({
  //log["query"],
})
export default prisma
