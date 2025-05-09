"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trash2, Upload, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import type { ProductImage } from "@/lib/product-images"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProductGalleryAdmin() {
  const [images, setImages] = useState<ProductImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 업로드 폼 상태
  const [file, setFile] = useState<File | null>(null)
  const [category, setCategory] = useState<string>("standard")
  const [alt, setAlt] = useState<string>("")
  const [featured, setFeatured] = useState<boolean>(false)

  // 이미지 목록 가져오기
  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true)
        const response = await fetch("/api/product-images")

        if (!response.ok) {
          throw new Error("Failed to fetch product images")
        }

        const data = await response.json()
        setImages(data.images)
      } catch (err) {
        console.error("Error fetching images:", err)
        setError("Failed to load images")
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  // 이미지 업로드 핸들러
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please select a file to upload")
      return
    }

    try {
      setUploading(true)
      setError(null)

      const formData = new FormData()
      formData.append("file", file)
      formData.append("category", category)
      formData.append("alt", alt || file.name)
      formData.append("featured", featured.toString())

      const response = await fetch("/api/product-images/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()

      // 이미지 목록 업데이트
      setImages((prev) => [...prev, data.image])

      // 폼 초기화
      setFile(null)
      setAlt("")
      setFeatured(false)

      // 파일 입력 필드 초기화
      const fileInput = document.getElementById("file-upload") as HTMLInputElement
      if (fileInput) {
        fileInput.value = ""
      }
    } catch (err) {
      console.error("Upload error:", err)
      setError(err instanceof Error ? err.message : "Failed to upload image")
    } finally {
      setUploading(false)
    }
  }

  // 이미지 삭제 핸들러 (실제 구현에서는 API 호출 필요)
  const handleDelete = async (id: string) => {
    // 여기서는 클라이언트 측에서만 삭제 (실제로는 API 호출 필요)
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-3xl font-bold">Product Gallery Management</h1>

          {/* 업로드 폼 */}
          <div className="mb-12 rounded-xl border border-gray-800 bg-[#0c0f1a] p-6">
            <h2 className="mb-6 text-xl font-semibold">Upload New Image</h2>

            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="file-upload">Image File</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 border-gray-700 bg-[#1a1d2c] text-white"
                  />

                  {file && (
                    <div className="mt-4 flex items-center gap-4">
                      <div className="h-20 w-20 overflow-hidden rounded-md border border-gray-700">
                        <Image
                          src={URL.createObjectURL(file) || "/placeholder.svg"}
                          alt="Preview"
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">{file.name}</p>
                        <p className="text-xs text-gray-400">{(file.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="mt-1 border-gray-700 bg-[#1a1d2c] text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="border-gray-700 bg-[#1a1d2c] text-white">
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="plus">Plus</SelectItem>
                        <SelectItem value="colors">Colors</SelectItem>
                        <SelectItem value="showcase">Showcase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="alt-text">Alt Text</Label>
                    <Input
                      id="alt-text"
                      value={alt}
                      onChange={(e) => setAlt(e.target.value)}
                      placeholder="Descriptive text for the image"
                      className="mt-1 border-gray-700 bg-[#1a1d2c] text-white"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch id="featured" checked={featured} onCheckedChange={setFeatured} />
                    <Label htmlFor="featured">Featured Image</Label>
                  </div>
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" className="bg-teal-500 text-black hover:bg-teal-600" disabled={uploading || !file}>
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* 이미지 갤러리 */}
          <div className="rounded-xl border border-gray-800 bg-[#0c0f1a] p-6">
            <h2 className="mb-6 text-xl font-semibold">Product Images</h2>

            {loading ? (
              <div className="flex h-40 items-center justify-center">
                <Loader2 className="mr-2 h-6 w-6 animate-spin text-teal-500" />
                <span>Loading images...</span>
              </div>
            ) : images.length === 0 ? (
              <div className="flex h-40 items-center justify-center">
                <p className="text-gray-400">No images found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {images.map((image) => (
                  <div key={image.id} className="group relative overflow-hidden rounded-lg border border-gray-700">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex justify-end">
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleDelete(image.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-white">{image.alt}</p>
                        <p className="text-xs text-gray-300">Category: {image.category}</p>
                        {image.featured && (
                          <span className="mt-1 inline-block rounded-full bg-teal-500/20 px-2 py-0.5 text-xs text-teal-400">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
