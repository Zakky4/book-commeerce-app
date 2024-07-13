import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBooks = async () => {
  const allBooks = await client.get({
    endpoint: "ebookzakky",
    queries: {
      offset: 0,
      limit: 10,
    },
  });
  return allBooks;
};
