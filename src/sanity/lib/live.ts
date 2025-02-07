"use server"; // Mark this file as a server component

import { defineLive } from "next-sanity";
import { client } from './client';

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX', // Replace 'vX' with your actual API version
  }),
  serverToken: process.env.SANITY_SERVER_TOKEN, // Add your server token
  browserToken: process.env.SANITY_BROWSER_TOKEN, // Add your browser token (optional)
});