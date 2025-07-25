import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Code, Heart, DollarSign, Users, Zap, ArrowRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

const JobMarket = () => {
  const inDemandJobs = [
    {
      title: "مطور البرمجيات",
      description: "تطوير التطبيقات والمواقع الإلكترونية",
      icon: <Code className="h-8 w-8" />,
      demand: "عالي جداً",
      salary: "15,000 - 40,000 درهم",
      skills: ["JavaScript", "Python", "React", "قواعد البيانات"],
      growth: "+25% سنوياً"
    },
    {
      title: "أخصائي التسويق الرقمي", 
      description: "إدارة الحملات الإعلانية والتسويق عبر الإنترنت",
      icon: <TrendingUp className="h-8 w-8" />,
      demand: "عالي",
      salary: "8,000 - 25,000 درهم",
      skills: ["SEO/SEM", "وسائل التواصل", "Google Ads", "تحليل البيانات"],
      growth: "+20% سنوياً"
    },
    {
      title: "ممرض/ممرضة",
      description: "الرعاية الصحية والطبية للمرضى",
      icon: <Heart className="h-8 w-8" />,
      demand: "عالي", 
      salary: "6,000 - 15,000 درهم",
      skills: ["رعاية طبية", "تواصل", "صبر", "دقة"],
      growth: "+15% سنوياً"
    },
    {
      title: "محاسب مالي",
      description: "إدارة الحسابات والأمور المالية للشركات",
      icon: <DollarSign className="h-8 w-8" />,
      demand: "متوسط إلى عالي",
      salary: "7,000 - 20,000 درهم", 
      skills: ["محاسبة", "Excel", "تحليل مالي", "قانون ضريبي"],
      growth: "+10% سنوياً"
    },
    {
      title: "مدير الموارد البشرية",
      description: "إدارة الموظفين والتوظيف والتدريب",
      icon: <Users className="h-8 w-8" />,
      demand: "متوسط",
      salary: "10,000 - 30,000 درهم",
      skills: ["إدارة", "تواصل", "قانون العمل", "تدريب"],
      growth: "+12% سنوياً"
    },
    {
      title: "فني طاقة متجددة",
      description: "تركيب وصيانة أنظمة الطاقة الشمسية والرياح",
      icon: <Zap className="h-8 w-8" />,
      demand: "عالي ومتنامي",
      salary: "8,000 - 18,000 درهم",
      skills: ["كهرباء", "ميكانيك", "طاقة شمسية", "صيانة"],
      growth: "+30% سنوياً"
    }
  ]

  const careerTips = [
    {
      title: "طور مهاراتك باستمرار",
      description: "العالم يتغير بسرعة، فتأكد من تحديث مهاراتك دائماً",
      tips: ["تعلم أونلاين", "احضر دورات تدريبية", "اقرأ في مجالك", "تواصل مع الخبراء"]
    },
    {
      title: "ابني شبكة علاقات مهنية",
      description: "العلاقات المهنية مفتاح النجاح في سوق العمل",
      tips: ["شارك في الفعاليات", "استخدم LinkedIn", "انضم لجمعيات مهنية", "تطوع"]
    },
    {
      title: "اكتسب خبرة عملية",
      description: "الخبرة العملية لا تقل أهمية عن الشهادات",
      tips: ["تدرب في الشركات", "اعمل مشاريع شخصية", "تطوع", "فريلانس"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-soft rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-smooth mb-4">
            <Home className="h-5 w-5" />
            العودة للرئيسية
          </Link>
          <h1 className="text-4xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            سوق الشغل والفرص المهنية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف المهن المطلوبة في السوق المغربي وتعرف على كيفية تطوير مهاراتك
          </p>
        </div>

        {/* In-Demand Jobs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">المهن الأكثر طلباً</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {inDemandJobs.map((job, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg gradient-primary">
                      <div className="text-white">
                        {job.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {job.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">الطلب:</span>
                      <Badge variant="outline" className="border-secondary text-secondary">
                        {job.demand}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">الراتب:</span>
                      <span className="text-sm text-muted-foreground">{job.salary}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">النمو:</span>
                      <span className="text-sm text-accent font-medium">{job.growth}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">المهارات المطلوبة:</h4>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Development Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-secondary">نصائح تطوير المسيرة المهنية</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {careerTips.map((tip, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <Card className="shadow-medium gradient-soft border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">ابدأ رحلتك المهنية اليوم</CardTitle>
            <CardDescription className="text-lg">
              استكشف الفرص واكتشف المسار الذي يناسب مهاراتك وطموحاتك
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Button variant="outline" size="lg" className="h-14">
                دليل كتابة السيرة الذاتية
              </Button>
              <Button variant="outline" size="lg" className="h-14">
                نصائح المقابلات الشخصية
              </Button>
              <Button variant="outline" size="lg" className="h-14">
                مواقع البحث عن عمل
              </Button>
              <Button variant="outline" size="lg" className="h-14">
                منصات التعلم المجاني
              </Button>
            </div>
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
              <ArrowRight className="mr-2 h-5 w-5" />
              ابدأ تقييم مهاراتك
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default JobMarket