"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Import schema and structure
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

// Helper function to assert environment variables
function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (!value) {
    throw new Error(errorMessage);
  }
  return value;
}

// Environment variables
const apiVersion: string = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-06";
const dataset: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);
const projectId: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing or invalid environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
const token: string = assertValue(
  process.env.SANITY_API_TOKEN,
  "Missing environment variable: SANITY_API_TOKEN"
);

// Sanity configuration
export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
