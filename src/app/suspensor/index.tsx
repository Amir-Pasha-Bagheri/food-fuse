import React, { Suspense } from 'react'

type SuspensorProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function Suspensor({ children, fallback }: SuspensorProps) {
  return <Suspense fallback={fallback || 'loading...'}>{children}</Suspense>
}
