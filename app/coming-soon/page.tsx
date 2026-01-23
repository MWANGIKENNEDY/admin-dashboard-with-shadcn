import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, Rocket, Sparkles, Bell, Mail } from 'lucide-react'

export default function ComingSoon() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center shadow-lg">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
            <Rocket className="h-12 w-12 text-primary" />
          </div>
          
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-2">
              <Sparkles className="mr-1 h-3 w-3" />
              Coming Soon
            </Badge>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Something Amazing is Coming
            </CardTitle>
            <CardDescription className="text-lg">
              We're working hard to bring you this feature. Stay tuned!
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">In Development</h3>
              <p className="text-sm text-muted-foreground">
                Our team is actively building this feature
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Modern Design</h3>
              <p className="text-sm text-muted-foreground">
                Built with the latest UI/UX best practices
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed and reliability
              </p>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold flex items-center justify-center gap-2">
              <Bell className="h-4 w-4" />
              Get Notified When It's Ready
            </h3>
            <p className="text-sm text-muted-foreground">
              Want to be the first to know when this feature launches? We'll send you an update!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Notify Me
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="flex items-center gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/users">
                View Users
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/payments">
                View Payments
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              Expected release: Q2 2025 • Follow our progress on the dashboard
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}