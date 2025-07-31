import { useParams, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/ui/back-button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink, Heart, Users } from "lucide-react"

const interestData = {
  "life-sciences": {
    title: "علوم الحياة والطبيعة",
    description: "مجال علوم الحياة والطبيعة يفتح أمامك أبواب فهم الكائنات الحية والبيئة المحيطة بنا. يشمل دراسة البيولوجيا، الكيمياء، علوم البيئة، والطب.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "الطب البشري",
        description: "دراسة جسم الإنسان وعلاج الأمراض",
        duration: "7 سنوات",
        difficulty: "عالي",
        institutions: ["كلية الطب - جامعة محمد الخامس", "كلية الطب - جامعة الحسن الثاني"]
      },
      {
        name: "علوم البيولوجيا",
        description: "دراسة الكائنات الحية والعمليات الحيوية",
        duration: "3-5 سنوات",
        difficulty: "متوسط",
        institutions: ["كلية العلوم - جامعة الرباط", "كلية العلوم - جامعة فاس"]
      },
      {
        name: "الصيدلة",
        description: "دراسة الأدوية وتركيبها وتأثيراتها",
        duration: "6 سنوات",
        difficulty: "عالي",
        institutions: ["كلية الصيدلة - الدار البيضاء", "كلية الصيدلة - الرباط"]
      }
    ]
  },
  "mathematics": {
    title: "الرياضيات والمنطق",
    description: "الرياضيات هي لغة الكون، تفتح أمامك عالماً من التحليل والمنطق والحلول الإبداعية للمشاكل المعقدة.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "الرياضيات التطبيقية",
        description: "تطبيق المفاهيم الرياضية في مجالات مختلفة",
        duration: "3-5 سنوات",
        difficulty: "عالي",
        institutions: ["كلية العلوم - جامعة محمد الخامس", "المدرسة المحمدية للمهندسين"]
      },
      {
        name: "الإحصاء وعلوم البيانات",
        description: "تحليل البيانات واستخراج المعلومات المفيدة",
        duration: "3-5 سنوات",
        difficulty: "متوسط إلى عالي",
        institutions: ["المدرسة الوطنية للإحصاء", "كلية العلوم الاقتصادية"]
      }
    ]
  },
  "physics-engineering": {
    title: "الفيزياء والهندسة",
    description: "مجال يجمع بين فهم قوانين الطبيعة وتطبيقها لحل المشاكل وبناء المستقبل من خلال الهندسة والتكنولوجيا.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "الهندسة المدنية",
        description: "تصميم وبناء البنية التحتية والمباني",
        duration: "5 سنوات",
        difficulty: "عالي",
        institutions: ["المدرسة المحمدية للمهندسين", "المدرسة الوطنية للتطبيقات"]
      },
      {
        name: "الهندسة الكهربائية",
        description: "دراسة الأنظمة الكهربائية والإلكترونية",
        duration: "5 سنوات",
        difficulty: "عالي",
        institutions: ["المدرسة العليا للتكنولوجيا", "كلية العلوم والتقنيات"]
      }
    ]
  },
  "computer-science": {
    title: "علوم الحاسوب والتكنولوجيا",
    description: "مجال سريع التطور يشمل البرمجة، تطوير التطبيقات، الذكاء الاصطناعي، وأمن المعلومات.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "هندسة البرمجيات",
        description: "تطوير التطبيقات والأنظمة البرمجية",
        duration: "3-5 سنوات",
        difficulty: "متوسط إلى عالي",
        institutions: ["المدرسة الوطنية للعلوم التطبيقية", "كلية العلوم والتقنيات"]
      },
      {
        name: "أمن المعلومات",
        description: "حماية الأنظمة والبيانات من التهديدات",
        duration: "3-5 سنوات",
        difficulty: "عالي",
        institutions: ["المدرسة العليا للتكنولوجيا", "معاهد خاصة متخصصة"]
      }
    ]
  },
  "economics": {
    title: "الاقتصاد والإدارة",
    description: "فهم الأسواق والموارد وإدارة الأعمال لبناء مستقبل اقتصادي مزدهر.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "إدارة الأعمال",
        description: "تسيير وإدارة الشركات والمؤسسات",
        duration: "3-5 سنوات",
        difficulty: "متوسط",
        institutions: ["كلية العلوم الاقتصادية - الرباط", "المدرسة العليا للتجارة"]
      },
      {
        name: "المالية والمحاسبة",
        description: "إدارة الموارد المالية والتخطيط المالي",
        duration: "3-5 سنوات",
        difficulty: "متوسط",
        institutions: ["كلية العلوم الاقتصادية", "معاهد التكوين المهني"]
      }
    ]
  },
  "languages": {
    title: "اللغات والآداب",
    description: "استكشاف عالم اللغات والثقافات والتعبير الأدبي والفني.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "الترجمة",
        description: "ترجمة النصوص بين اللغات المختلفة",
        duration: "3-5 سنوات",
        difficulty: "متوسط",
        institutions: ["كلية الآداب - جامعة محمد الخامس", "معهد الملك فهد للترجمة"]
      },
      {
        name: "الصحافة والإعلام",
        description: "العمل في مجال الصحافة والإعلام",
        duration: "3-4 سنوات",
        difficulty: "متوسط",
        institutions: ["المعهد العالي للصحافة", "كلية علوم الإعلام"]
      }
    ]
  },
  "arts-design": {
    title: "الفنون والتصميم",
    description: "التعبير الإبداعي من خلال الفنون البصرية والتصميم والإبداع الرقمي.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "التصميم الجرافيكي",
        description: "تصميم الهوية البصرية والمواد الإعلانية",
        duration: "3-4 سنوات",
        difficulty: "متوسط",
        institutions: ["معهد الفنون الجميلة", "مدارس التصميم الخاصة"]
      },
      {
        name: "الهندسة المعمارية",
        description: "تصميم المباني والمساحات",
        duration: "6 سنوات",
        difficulty: "عالي",
        institutions: ["المدرسة الوطنية للهندسة المعمارية", "كلية الهندسة"]
      }
    ]
  },
  "law-humanities": {
    title: "القانون والعلوم الإنسانية",
    description: "دراسة القانون والمجتمع والسلوك الإنساني لبناء مجتمع أكثر عدالة.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "القانون",
        description: "دراسة الأنظمة القانونية والتشريعات",
        duration: "4-6 سنوات",
        difficulty: "عالي",
        institutions: ["كلية الحقوق - جامعة محمد الخامس", "كلية الحقوق - الدار البيضاء"]
      },
      {
        name: "علم النفس",
        description: "دراسة السلوك الإنساني والعمليات النفسية",
        duration: "3-5 سنوات",
        difficulty: "متوسط",
        institutions: ["كلية الآداب والعلوم الإنسانية", "معاهد علم النفس"]
      }
    ]
  },
  "technical-vocational": {
    title: "التكوين المهني والتقني",
    description: "اكتساب مهارات عملية ومهنية للدخول المباشر لسوق العمل.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=400&fit=crop",
    pathways: [
      {
        name: "التكوين في الصناعة",
        description: "تعلم مهارات الصناعة والإنتاج",
        duration: "2-3 سنوات",
        difficulty: "متوسط",
        institutions: ["معاهد التكوين المهني", "مراكز التأهيل المهني"]
      },
      {
        name: "التكنولوجيا التطبيقية",
        description: "تطبيق التكنولوجيا في المجالات المختلفة",
        duration: "2-4 سنوات",
        difficulty: "متوسط",
        institutions: ["معاهد التكنولوجيا التطبيقية", "مراكز التكوين"]
      }
    ]
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "عالي": return "destructive"
    case "متوسط إلى عالي": return "secondary"
    case "متوسط": return "default"
    default: return "default"
  }
}

export default function InterestDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  if (!id || !interestData[id as keyof typeof interestData]) {
    return (
      <div className="min-h-screen bg-gradient-subtle p-4 md:p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">المجال غير موجود</h1>
          <Button onClick={() => navigate('/choose-interests')}>العودة للمجالات</Button>
        </div>
      </div>
    )
  }

  const interest = interestData[id as keyof typeof interestData]

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={interest.image} 
          alt={interest.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {interest.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6 -mt-12 relative z-10">
        <div className="mb-6">
          <BackButton className="bg-background/80 backdrop-blur-sm" />
        </div>

        <Card className="mb-8 shadow-elegant bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-right text-foreground">نبذة عن المجال</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground text-right leading-relaxed">
              {interest.description}
            </p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-right">
            المسارات المتاحة ({interest.pathways.length})
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {interest.pathways.map((pathway, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <Badge variant={getDifficultyColor(pathway.difficulty)}>
                        {pathway.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        {pathway.duration}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl text-right text-foreground">
                    {pathway.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-right mb-6 leading-relaxed">
                    {pathway.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-right flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        المؤسسات المتاحة
                      </h4>
                      {pathway.institutions.map((institution, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg mb-2">
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4 ml-2" />
                            زيارة
                          </Button>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{institution}</span>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/choose-interests')}
            variant="outline"
            className="mr-4"
          >
            استكشف مجالات أخرى
          </Button>
          <Button onClick={() => navigate('/favorites')}>
            حفظ في المفضلة
          </Button>
        </div>
      </div>
    </div>
  )
}