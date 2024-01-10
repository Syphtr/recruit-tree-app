/*
  Warnings:

  - You are about to drop the column `degree` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `field` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `duration_short` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `subtitleURL` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the `Certification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recommendation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VolunteerExperience` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ProfileId` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degree_name` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starts_at` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProfileId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starts_at` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Made the column `company` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_userId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_userId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_userId_fkey";

-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Recommendation" DROP CONSTRAINT "Recommendation_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyCompany_id_fkey";

-- DropForeignKey
ALTER TABLE "VolunteerExperience" DROP CONSTRAINT "VolunteerExperience_userId_fkey";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "degree",
DROP COLUMN "field",
DROP COLUMN "title",
DROP COLUMN "url",
DROP COLUMN "userId",
ADD COLUMN     "ProfileId" INTEGER NOT NULL,
ADD COLUMN     "activities_and_societies" TEXT,
ADD COLUMN     "degree_name" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "ends_at" TIMESTAMP(3),
ADD COLUMN     "field_of_study" TEXT,
ADD COLUMN     "grade" TEXT,
ADD COLUMN     "logo_url" TEXT,
ADD COLUMN     "school" TEXT NOT NULL,
ADD COLUMN     "school_linkedin_profile_url" TEXT,
ADD COLUMN     "starts_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "company_id",
DROP COLUMN "duration",
DROP COLUMN "duration_short",
DROP COLUMN "end_date",
DROP COLUMN "start_date",
DROP COLUMN "subtitle",
DROP COLUMN "subtitleURL",
DROP COLUMN "url",
DROP COLUMN "userId",
ADD COLUMN     "ProfileId" INTEGER NOT NULL,
ADD COLUMN     "company_linkedin_profile_url" TEXT,
ADD COLUMN     "ends_at" TIMESTAMP(3),
ADD COLUMN     "logo_url" TEXT,
ADD COLUMN     "starts_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "company" SET NOT NULL;

-- DropTable
DROP TABLE "Certification";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "Position";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Recommendation";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VolunteerExperience";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "public_identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_public_identifier_key" ON "Profile"("public_identifier");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_ProfileId_fkey" FOREIGN KEY ("ProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_ProfileId_fkey" FOREIGN KEY ("ProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
