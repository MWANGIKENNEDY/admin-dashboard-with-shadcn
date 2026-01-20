import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* Chart Card */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <Skeleton className="h-6 w-32 mb-6" />
        <Skeleton className="h-[200px] w-full" />
      </div>

      {/* List Card */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Skeleton className="h-6 w-32 mb-6" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="flex-row items-center justify-between gap-4 p-4">
              <Skeleton className="h-12 w-12 rounded" />
              <CardContent className="flex-1 p-0 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-16" />
              </CardContent>
              <Skeleton className="h-4 w-8" />
            </Card>
          ))}
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Skeleton className="h-6 w-32 mb-6" />
        <div className="flex items-center justify-center">
          <Skeleton className="h-[200px] w-[200px] rounded-full" />
        </div>
      </div>

      {/* Todo Card */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Skeleton className="h-6 w-20 mb-4" />
        <Skeleton className="h-10 w-full mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="p-2">
              <div className="flex items-start gap-4">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 flex-1" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Area Chart Card */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <Skeleton className="h-6 w-32 mb-6" />
        <Skeleton className="h-[200px] w-full" />
      </div>

      {/* Another List Card */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Skeleton className="h-6 w-32 mb-6" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="flex-row items-center justify-between gap-4 p-4">
              <Skeleton className="h-12 w-12 rounded" />
              <CardContent className="flex-1 p-0 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-16" />
              </CardContent>
              <Skeleton className="h-4 w-8" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}