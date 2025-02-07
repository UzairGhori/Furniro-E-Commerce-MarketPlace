import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'd73jv5pc',
    dataset: 'production',
    token: 'skYSYOZhhnDvO9z40OBB9hh7WYpwysX3Xv13l7OqfP5aFqY8E3uvNDPIVY0WL6kSNkTB6UDiKXa7Twp4MjX6bC08sGR5j3nFCZ6IGfsbbMlzTx6edEkprpvRfxFfSObD08NCtuexco3FmaHZY8W7q3v0q69jGscl77T7WCIeV1iVsA3PdLE3',
    useCdn: true,
    apiVersion : "2025-01-21"
})

export async function sanityfetch({query, params ={}} :{query : string , params? : any}){
    return await client.fetch(query, params)
}