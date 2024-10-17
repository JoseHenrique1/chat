-- CreateTable
CREATE TABLE "Friends" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailUser" TEXT NOT NULL,
    "emailFriend" TEXT NOT NULL,
    CONSTRAINT "Friends_emailUser_fkey" FOREIGN KEY ("emailUser") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Friends_emailUser_emailFriend_key" ON "Friends"("emailUser", "emailFriend");
