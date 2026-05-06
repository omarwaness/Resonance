import { HydrateClient, prefetch, trpc } from '@/trpc/server'
import { HealthCheck } from './health-test'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export default function Page() {
  prefetch(trpc.health.queryOptions())

  return (
    <HydrateClient>
      <ErrorBoundary
        fallback={<div>Error occurred while fetching health status.</div>}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HealthCheck />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}
