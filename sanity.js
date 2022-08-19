import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "vu9k5non",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "skOKpXtmqeoJNT7FeXHSDwXNFiakxfAbc5x0W9JzCcEn4q28Z9yU4LSGNFhqI4n0X9rGezlBpXGYFlV5S97uFKlJDaexdZxK8nWjsUpJCUI4CO5XfKVZAhIN8c0dWhUhy4WU7RcSn52NtQRlPA8vWGf2dSGupYDuLvuO6rqU7k4q07dNMLGl",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
