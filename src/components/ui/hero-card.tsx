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
            "group cursor-pointer transition-smooth hover:scale-105 hover:shadow-strong overflow-hidden",
            "border-2 border-transparent hover:border-primary/20",
            "bg-white/95 backdrop-blur-sm hover:bg-white",
            className
          )}
          {...props}
        >
          <CardContent className="p-8 text-center relative">
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <div className="relative z-10">
              <div className={cn(
                "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-smooth",
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
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-smooth">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </CardWrapper>
    )
  }
)
HeroCard.displayName = "HeroCard"

export { HeroCard }