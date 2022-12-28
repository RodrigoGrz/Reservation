-- CreateTable
CREATE TABLE "Accommodation" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "property_type" TEXT NOT NULL,
    "amount_per_night" DOUBLE PRECISION NOT NULL,
    "host" TEXT NOT NULL,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accommodation_property_type_key" ON "Accommodation"("property_type");

-- AddForeignKey
ALTER TABLE "Accommodation" ADD CONSTRAINT "Accommodation_property_type_fkey" FOREIGN KEY ("property_type") REFERENCES "property_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accommodation" ADD CONSTRAINT "Accommodation_host_fkey" FOREIGN KEY ("host") REFERENCES "hostings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
