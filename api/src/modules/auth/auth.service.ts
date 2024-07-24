import { prisma } from "../../databse/prisma.ts"
import { sign } from "jsonwebtoken"

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

async function getUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email, password }
  })
  return user
}

function signin(id: string) {
  const token = sign({ id: id }, JWT_SECRET_KEY!, { expiresIn: "7d" })
  return token
}
export const AuthService = {
  signin,
  getUser
}