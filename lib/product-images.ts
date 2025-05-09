export type ProductImage = {
  id: string
  url: string
  alt: string
  category: "standard" | "plus" | "colors" | "showcase"
  featured?: boolean
  order?: number
}

// 초기 이미지 데이터 (나중에 API로 대체될 수 있음)
export const initialProductImages: ProductImage[] = [
  {
    id: "standard-1",
    url: "/images/NodeNest_device_standard.png",
    alt: "NodeNest Standard Device",
    category: "standard",
    featured: true,
    order: 1,
  },
  {
    id: "plus-1",
    url: "/images/NodeNest_stack.png",
    alt: "NodeNest Plus Stack",
    category: "plus",
    featured: true,
    order: 1,
  },
  {
    id: "colors-1",
    url: "/images/NodeNest_device_plus_edition3.png",
    alt: "NodeNest Color Variants",
    category: "colors",
    featured: true,
    order: 1,
  },
  {
    id: "device-1",
    url: "/images/NodeNest_device1.png",
    alt: "NodeNest devices in different colors",
    category: "showcase",
    order: 1,
  },
  {
    id: "device-2",
    url: "/images/NodeNest_device3.png",
    alt: "NodeNest Standard Device Closeup",
    category: "standard",
    order: 2,
  },
  {
    id: "device-3",
    url: "/images/NodeNest_device_plus_edition2.png",
    alt: "NodeNest Plus Edition",
    category: "plus",
    order: 2,
  },
]

// 이미지 필터링 함수
export function getProductImagesByCategory(images: ProductImage[], category: string): ProductImage[] {
  return images.filter((image) => image.category === category).sort((a, b) => (a.order || 999) - (b.order || 999))
}

export function getFeaturedProductImages(images: ProductImage[]): ProductImage[] {
  return images.filter((image) => image.featured).sort((a, b) => (a.order || 999) - (b.order || 999))
}
