/*
  Warnings:

  - You are about to drop the column `parentId` on the `Admission` table. All the data in the column will be lost.
  - Added the required column `childDob` to the `Admission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childGender` to the `Admission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childName` to the `Admission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentName` to the `Admission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentPhone` to the `Admission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admission" DROP COLUMN "parentId",
ADD COLUMN     "childDob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "childGender" TEXT NOT NULL,
ADD COLUMN     "childName" TEXT NOT NULL,
ADD COLUMN     "medicalNotes" TEXT,
ADD COLUMN     "parentEmail" TEXT,
ADD COLUMN     "parentName" TEXT NOT NULL,
ADD COLUMN     "parentPhone" TEXT NOT NULL;
