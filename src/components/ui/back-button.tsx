import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "./button"

interface BackButtonProps {
  className?: string
  label?: string
}

export function BackButton({ className = "", label = "العودة" }: BackButtonProps) {
  const navigate = useNavigate()

  return (
    <Button
      variant="outline"
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-2 hover:bg-accent/10 transition-smooth ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  )
}