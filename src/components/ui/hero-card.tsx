import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface HeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon: React.ReactNode
  gradient?: "primary" | "secondary" | "hero"
  href?: string
}

const HeroCard = React.forwardRef<HTMLDivElement, HeroCardProps>(
  ({ className, title, description, icon, gradient = "primary", href, ...props }, ref) => {
    const CardWrapper = href ? "a" : "div"
    
    return (
      <CardWrapper href={href} className="block">
        <Card
          ref={ref}
          className={cn(
            "group cursor-pointer transition-smooth hover:scale-105 hover:shadow-strong",
            "border-2 border-transparent hover:border-primary/20",
            className
          )}
          {...props}
        >
          <CardContent className="p-8 text-center">
            <div className={cn(
              "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full",
              gradient === "primary" && "gradient-primary",
              gradient === "secondary" && "gradient-secondary", 
              gradient === "hero" && "gradient-hero"
            )}>
              <div className="text-white text-3xl">
                {icon}
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </CardWrapper>
    )
  }
)
HeroCard.displayName = "HeroCard"

export { HeroCard }