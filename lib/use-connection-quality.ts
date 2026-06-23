"use client"

import { useEffect, useState } from "react"

export function usePreferLightweightExperience(): boolean {
  const [preferLightweight, setPreferLightweight] = useState(false)

  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }).connection

    const saveData = connection?.saveData ?? false
    const slowType = connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g"
    setPreferLightweight(saveData || slowType)
  }, [])

  return preferLightweight
}