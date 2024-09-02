/*
  Warnings:

  - You are about to drop the column `userDestinyId` on the `UserMessagePrivate` table. All the data in the column will be lost.
  - You are about to drop the column `userFromId` on the `UserMessagePrivate` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserOnGroup` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `groupMessage` table. All the data in the column will be lost.
  - Added the required column `emailFriend` to the `UserMessagePrivate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailUser` to the `UserMessagePrivate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailUser` to the `UserOnGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailUser` to the `groupMessage` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserMessagePrivate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "emailUser" TEXT NOT NULL,
    "emailFriend" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserMessagePrivate_emailUser_fkey" FOREIGN KEY ("emailUser") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserMessagePrivate_emailFriend_fkey" FOREIGN KEY ("emailFriend") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserMessagePrivate" ("createdAt", "id", "message", "updatedAt") SELECT "createdAt", "id", "message", "updatedAt" FROM "UserMessagePrivate";
DROP TABLE "UserMessagePrivate";
ALTER TABLE "new_UserMessagePrivate" RENAME TO "UserMessagePrivate";
CREATE TABLE "new_UserOnGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailUser" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserOnGroup_emailUser_fkey" FOREIGN KEY ("emailUser") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserOnGroup" ("createdAt", "groupId", "id", "updatedAt") SELECT "createdAt", "groupId", "id", "updatedAt" FROM "UserOnGroup";
DROP TABLE "UserOnGroup";
ALTER TABLE "new_UserOnGroup" RENAME TO "UserOnGroup";
CREATE UNIQUE INDEX "UserOnGroup_emailUser_groupId_key" ON "UserOnGroup"("emailUser", "groupId");
CREATE TABLE "new_groupMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "emailUser" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "groupMessage_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "groupMessage_emailUser_fkey" FOREIGN KEY ("emailUser") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_groupMessage" ("createdAt", "groupId", "id", "message", "updatedAt") SELECT "createdAt", "groupId", "id", "message", "updatedAt" FROM "groupMessage";
DROP TABLE "groupMessage";
ALTER TABLE "new_groupMessage" RENAME TO "groupMessage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
