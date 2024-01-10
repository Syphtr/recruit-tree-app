/*
  Warnings:

  - A unique constraint covering the columns `[public_identifier]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `linkedin_profile_url` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "starts_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "last_updated" TIMESTAMP(3),
ADD COLUMN     "linkedin_profile_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_public_identifier_key" ON "Profile"("public_identifier");
