-- CreateTable
CREATE TABLE "reservations" (
    "id" TEXT NOT NULL,
    "accommodation" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "check_in" TIMESTAMP(3) NOT NULL,
    "check_out" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_accommodation_fkey" FOREIGN KEY ("accommodation") REFERENCES "accommodations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_customer_fkey" FOREIGN KEY ("customer") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
