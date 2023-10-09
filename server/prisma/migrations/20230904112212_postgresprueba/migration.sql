/*
  Warnings:

  - You are about to drop the column `country` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Publicmovies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "country";

-- AlterTable
ALTER TABLE "Publicmovies" DROP COLUMN "country";
