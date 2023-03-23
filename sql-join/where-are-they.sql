select "a"."line1",
       "c"."name",
       "a"."district",
       "cou"."name" as "countryName"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "cou" using ("countryId");
