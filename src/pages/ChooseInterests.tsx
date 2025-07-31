import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/ui/back-button"
import { Heart } from "lucide-react"

const interests = [
  {
    id: "life-sciences",
    title: "علوم الحياة والطبيعة",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
    description: "استكشف عالم البيولوجيا والعلوم الطبيعية"
  },
  {
    id: "mathematics",
    title: "الرياضيات والمنطق",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    description: "اكتشف جمال الأرقام والمعادلات"
  },
  {
    id: "physics-engineering",
    title: "الفيزياء والهندسة",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    description: "ادخل عالم الاختراع والابتكار"
  },
  {
    id: "computer-science",
    title: "علوم الحاسوب والتكنولوجيا",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    description: "شكل مستقبل التكنولوجيا الرقمية"
  },
  {
    id: "economics",
    title: "الاقتصاد والإدارة",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    description: "قد عالم الأعمال والمال"
  },
  {
    id: "languages",
    title: "اللغات والآداب",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
    description: "أطلق قوة الكلمات والتعبير"
  },
  {
    id: "arts-design",
    title: "الفنون والتصميم",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=250&fit=crop",
    description: "عبر عن إبداعك وخيالك"
  },
  {
    id: "law-humanities",
    title: "القانون والعلوم الإنسانية",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=250&fit=crop",
    description: "دافع عن العدالة والحقوق"
  },
  {
    id: "technical-vocational",
    title: "التكوين المهني والتقني",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop",
    description: "تعلم مهارات عملية قابلة للتطبيق"
  }
]

export default function ChooseInterests() {
  const navigate = useNavigate()
  const [bookmarked, setBookmarked] = useState<string[]>([])

  const handleBookmark = (interestId: string) => {
    setBookmarked(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    )
  }

  const handleExplore = (interestId: string) => {
    navigate(`/interests/${interestId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-subtle p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            اختر اهتماماتك واكتشف المسارات المناسبة
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            استكشف مجالات اهتمامك واكتشف المسارات الأكاديمية والمهنية التي تناسب شخصيتك وطموحاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <Card 
              key={interest.id}
              className="group hover:scale-105 transition-smooth cursor-pointer shadow-elegant hover:shadow-glow bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-smooth" />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBookmark(interest.id)
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-smooth ${
                    bookmarked.includes(interest.id)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background/80 text-foreground hover:bg-background'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${bookmarked.includes(interest.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 text-right leading-relaxed">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground text-right mb-4 leading-relaxed">
                  {interest.description}
                </p>
                
                <Button 
                  onClick={() => handleExplore(interest.id)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                >
                  استكشف المسارات
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {bookmarked.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              لديك {bookmarked.length} مجال محفوظ في المفضلة
            </p>
            <Button variant="outline" onClick={() => navigate('/favorites')}>
              عرض المفضلة
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}