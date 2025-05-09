import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  try {
    const blob = await put(file.name, file, {
      access: "public",
    })

    return NextResponse.json({
      url: blob.url,
      success: true,
    })
  } catch (error) {
    console.error("Error uploading to blob:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
