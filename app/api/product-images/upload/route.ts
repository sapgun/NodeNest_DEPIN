import { NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const category = formData.get("category") as string
    const alt = formData.get("alt") as string
    const featured = formData.get("featured") === "true"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (!category) {
      return NextResponse.json({ error: "Category is required" }, { status: 400 })
    }

    // 파일 이름에 카테고리와 고유 ID 추가
    const filename = `products/${category}/${nanoid()}-${file.name}`

    // Vercel Blob에 이미지 업로드
    const blob = await put(filename, file, {
      access: "public",
    })

    // 실제 구현에서는 여기서 데이터베이스에 메타데이터를 저장할 수 있습니다

    return NextResponse.json({
      success: true,
      image: {
        id: nanoid(),
        url: blob.url,
        alt: alt || file.name,
        category,
        featured,
        order: Date.now(), // 기본 순서로 타임스탬프 사용
      },
    })
  } catch (error) {
    console.error("Error uploading product image:", error)
    return NextResponse.json({ error: "Failed to upload product image" }, { status: 500 })
  }
}
