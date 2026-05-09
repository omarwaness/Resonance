'use client'

import { useUser } from '@clerk/nextjs'
import { Headphones } from 'lucide-react'
import { ThumbsUp } from '@/components/animate-ui/icons/thumbs-up'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { AnimateIcon } from '@/components/animate-ui/icons/icon'

export function DashboardHeader() {
  const { isLoaded, user } = useUser()

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Nice to see you</p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? 'there') : '...'}
        </h1>
      </div>

      <div className="lg:flex items-center gap-3 hidden">
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:business@codewithantonio.com">
            <AnimateIcon animateOnHover className="flex items-center gap-1">
              <ThumbsUp />
              <span className="hidden lg:block">Feedback</span>
            </AnimateIcon>
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:business@codewithantonio.com">
            <Headphones />
            <span className="hidden lg:block">Need help?</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
