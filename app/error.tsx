'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/20">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold text-destructive">
            Something went wrong!
          </CardTitle>
          <CardDescription className="text-base">
            An unexpected error occurred
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-left bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-medium mb-1">Error Details:</p>
            <p className="text-xs text-muted-foreground font-mono break-all">
              {error.message || 'Unknown error occurred'}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-1">
                Error ID: {error.digest}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={reset}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            
            <Button variant="outline" asChild className="flex items-center gap-2">
              <a href="/">
                <Home className="h-4 w-4" />
                Go Home
              </a>
            </Button>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">
              If this problem persists, please contact support
            </p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 mx-auto"
              onClick={() => {
                // In a real app, this would open a support ticket or feedback form
                window.open('mailto:support@dashboard.com?subject=Error Report&body=' + 
                  encodeURIComponent(`Error: ${error.message}\nError ID: ${error.digest || 'N/A'}`))
              }}
            >
              <Bug className="h-4 w-4" />
              Report Issue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}