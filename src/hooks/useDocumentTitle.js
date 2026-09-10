import { useEffect } from 'react'

// Keeps the browser tab (and anything scraping the page) accurate per route.
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Parlok Studio` : 'Parlok Studio'
  }, [title])
}
