import { cn } from '@/lib/utils'

export default function TitleSection({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <h1
          className={cn(
            'text-5xl font-bold drop-shadow text-start  ',
            className,
          )}
        >
          {title}
        </h1>
      </div>
    </>
  )
}
