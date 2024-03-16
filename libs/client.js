// import { createClient } from "microcms-js-sdk";


// export const client = createClient({
//     serviceDomain: "darkun",
//     apiKey: process.env.API_KEY
// });
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "darkun",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});