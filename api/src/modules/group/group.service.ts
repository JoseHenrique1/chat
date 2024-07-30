import { prisma } from "../../databse/prisma";
import { GroupType } from "./group.schema";

async function getGroup(id: string) {
  const group = await prisma.group.findUnique({
    where: { id },
  })
  return group;
}

async function getGroups() {
  const groups = await prisma.group.findMany();
  return groups;
}

async function createGroup(data: GroupType) {
  const group = await prisma.group.create({
    data
  })

  return group;
}

async function updateGroup(id: string, data: GroupType) {
  const group = await prisma.group.update({
    where: {id},
    data
  })

  return group; 
}

async function deleteGroup(id: string) {
  const group = await prisma.group.delete({
    where: {id}
  })

  return group
}


export const GroupService = {
  getGroup,
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
}