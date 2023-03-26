select "customers"."firstName",
       "customers"."lastName",
       "payments"."amount"
  from "payments"
  join "customers" using ("customerId")
 where "amount" = 11.99
 limit 10;
