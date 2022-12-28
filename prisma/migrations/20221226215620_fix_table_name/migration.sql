/*
  Warnings:

  - You are about to drop the `Accommodation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Accommodation" DROP CONSTRAINT "Accommodation_host_fkey";

-- DropForeignKey
ALTER TABLE "Accommodation" DROP CONSTRAINT "Accommodation_property_type_fkey";

-- DropTable
DROP TABLE "Accommodation";

-- CreateTable
CREATE TABLE "accommodations" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "property_type" TEXT NOT NULL,
    "amount_per_night" DOUBLE PRECISION NOT NULL,
    "host" TEXT NOT NULL,

    CONSTRAINT "accommodations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accommodations_property_type_key" ON "accommodations"("property_type");

-- AddForeignKey
ALTER TABLE "accommodations" ADD CONSTRAINT "accommodations_property_type_fkey" FOREIGN KEY ("property_type") REFERENCES "property_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accommodations" ADD CONSTRAINT "accommodations_host_fkey" FOREIGN KEY ("host") REFERENCES "hostings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
