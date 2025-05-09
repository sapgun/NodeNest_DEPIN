"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function ImageUploader({ onUploadComplete }: { onUploadComplete: (url: string) => void }) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Upload failed")
      }

      onUploadComplete(result.url)
    } catch (err) {
      console.error("Upload error:", err)
      setError(err instanceof Error ? err.message : "Failed to upload image")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border border-gray-800 rounded-lg bg-[#0c0f1a]">
      <div className="text-center">
        <h3 className="text-lg font-medium text-white mb-2">{t("uploader.title")}</h3>
        <p className="text-sm text-gray-400">{t("uploader.description")}</p>
      </div>

      <div className="w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-700 bg-[#1a1d2c] hover:bg-[#1e2235]">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">{t("uploader.clickToUpload")}</span>
            </p>
            <p className="text-xs text-gray-500">{t("uploader.fileTypes")}</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
          />
        </label>
      </div>

      {isUploading && <div className="text-sm text-teal-400">{t("uploader.uploading")}</div>}

      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  )
}
