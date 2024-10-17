-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Friends" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailUser" TEXT NOT NULL,
    "emailFriend" TEXT NOT NULL,
    CONSTRAINT "Friends_emailUser_fkey" FOREIGN KEY ("emailUser") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Friends_emailFriend_fkey" FOREIGN KEY ("emailFriend") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Friends" ("emailFriend", "emailUser", "id") SELECT "emailFriend", "emailUser", "id" FROM "Friends";
DROP TABLE "Friends";
ALTER TABLE "new_Friends" RENAME TO "Friends";
CREATE UNIQUE INDEX "Friends_emailUser_emailFriend_key" ON "Friends"("emailUser", "emailFriend");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
