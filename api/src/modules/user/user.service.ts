import { prisma } from "../../databse/prisma";
import { UserType } from "./user.schema";

async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
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

async function updateUser(id: string, data: UserType) {
  const user = await prisma.user.update({
    where: {id},
    data
  })

  return user; 
}

async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {id}
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