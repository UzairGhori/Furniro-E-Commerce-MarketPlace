export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skYSYOZhhnDvO9z40OBB9hh7WYpwysX3Xv13l7OqfP5aFqY8E3uvNDPIVY0WL6kSNkTB6UDiKXa7Twp4MjX6bC08sGR5j3nFCZ6IGfsbbMlzTx6edEkprpvRfxFfSObD08NCtuexco3FmaHZY8W7q3v0q69jGscl77T7WCIeV1iVsA3PdLE3",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
