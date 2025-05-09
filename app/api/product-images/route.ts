import { NextResponse } from "next/server"
import { initialProductImages } from "@/lib/product-images"

// 실제 구현에서는 데이터베이스나 Blob 메타데이터에서 이미지 정보를 가져올 수 있습니다
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  try {
    let images = [...initialProductImages]

    // 카테고리별 필터링
    if (category && category !== "all") {
      images = images.filter((image) => image.category === category)
    }

    // 순서대로 정렬
    images = images.sort((a, b) => (a.order || 999) - (b.order || 999))

    return NextResponse.json({
      images,
      success: true,
    })
  } catch (error) {
    console.error("Error fetching product images:", error)
    return NextResponse.json({ error: "Failed to fetch product images" }, { status: 500 })
  }
}
