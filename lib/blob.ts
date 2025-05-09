import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

export async function uploadToBlob(file: File) {
  try {
    const filename = `${nanoid()}-${file.name}`
    const blob = await put(filename, file, {
      access: "public",
    })

    return {
      success: true,
      url: blob.url,
      filename: blob.pathname,
    }
  } catch (error) {
    console.error("Error uploading to blob:", error)
    return {
      success: false,
      error: "Failed to upload file",
    }
  }
}
