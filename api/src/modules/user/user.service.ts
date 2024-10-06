import { prisma } from "../../databse/prisma";
import { UserType } from "./user.schema";

async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  return user;
}

async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  return user;
}

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function createUser(data: UserType) {
  const user = await prisma.user.create({
    data
  })

  return user;
}

async function updateUser(email: string, data: UserType) {
  const user = await prisma.user.update({
    where: {email},
    data
  })

  return user; 
}

async function deleteUser(email: string) {
  const user = await prisma.user.delete({
    where: {email}
  })

  return user
}


export const UserService = {
  getUser,
  getUserByEmail,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}