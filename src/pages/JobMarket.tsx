import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Building, Globe, ArrowRight, Zap, Code, Heart, Wrench, Lightbulb, Users, BookOpen, Target } from "lucide-react"

const JobMarket = () => {
  const jobsByEducation = [
    {
      level: "📘 بدون شهادة",
      icon: <Building className="h-8 w-8" />,
      jobs: ["عمال البناء", "النظافة", "الحراسة", "التوصيل (Delivery)"]
    },
    {
      level: "🎓 مستوى إعدادي / تأهيلي",
      icon: <Briefcase className="h-8 w-8" />,
      jobs: ["الميكانيك", "الكهرباء", "صباغة السيارات", "التبريد والتكييف", "الحلاقة والطبخ", "المهن اليدوية والفنية"]
    },
    {
      level: "🎓 الباكالوريا",
      icon: <GraduationCap className="h-8 w-8" />,
      jobs: ["موظف إداري", "الشرطة والمخازنية", "القوات المسلحة الملكية", "الجمارك", "مراكز النداء (Call Center)", "التجارة والتسويق"]
    },
    {
      level: "🎓 دبلوم عالي (BTS - DUT - إجازة...)",
      icon: <GraduationCap className="h-8 w-8" />,
      jobs: ["مهندس مساعد", "تقني في الإعلاميات أو الكهرباء", "محاسب", "مصمم جرافيك", "فني في الصيانة", "أستاذ التعليم الخصوصي"]
    },
    {
      level: "🎓 الماستر والدكتوراه",
      icon: <GraduationCap className="h-8 w-8" />,
      jobs: ["أستاذ جامعي", "باحث علمي", "خبير استشاري"]
    }
  ]

  const promisingAreas = [
    {
      title: "الطاقات المتجددة",
      icon: <Zap className="h-6 w-6" />,
      description: "فرص كبيرة في الطاقة الشمسية والريحية مع النمو المتسارع لهذا القطاع في المغرب",
      color: "text-yellow-600"
    },
    {
      title: "الرقمنة والبرمجة",
      icon: <Code className="h-6 w-6" />,
      description: "طلب متزايد على المبرمجين، محللي البيانات، الأمن السيبراني وتطوير التطبيقات",
      color: "text-blue-600"
    },
    {
      title: "الصحة",
      icon: <Heart className="h-6 w-6" />,
      description: "خصاص في الممرضين، الأطباء، وتقنيي المختبرات مع الحاجة المتزايدة للخدمات الصحية",
      color: "text-red-600"
    },
    {
      title: "الصناعة واللوجستيك",
      icon: <Wrench className="h-6 w-6" />,
      description: "فرص مهمة في المهن الصناعية، خاصة في المناطق الصناعية الكبرى والنقل البحري",
      color: "text-purple-600"
    },
    {
      title: "المهن اليدوية",
      icon: <Building className="h-6 w-6" />,
      description: "كهربائي، ميكانيكي، نجار، وباقي المهن اليدوية مطلوبة بشكل دائم ومربحة",
      color: "text-orange-600"
    }
  ]

  const requiredSkills = [
    {
      category: "اللغات والتواصل",
      icon: <Users className="h-5 w-5" />,
      skills: ["الإنجليزية والفرنسية", "التواصل الفعال", "العرض والتقديم", "التفاوض"]
    },
    {
      category: "التكنولوجيا الرقمية",
      icon: <Code className="h-5 w-5" />,
      skills: ["أساسيات الكمبيوتر", "Microsoft Office", "البريد الإلكتروني", "وسائل التواصل الاجتماعي"]
    },
    {
      category: "المهارات الشخصية",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: ["العمل الجماعي", "إدارة الوقت", "المرونة والتكيف", "حل المشاكل"]
    },
    {
      category: "مهارات مهنية",
      icon: <Target className="h-5 w-5" />,
      skills: ["كتابة السيرة الذاتية", "التحضير لمقابلات العمل", "التعلم الذاتي", "الانضباط المهني"]
    }
  ]

  const practicalTips = [
    {
      title: "تابع الأخبار الاقتصادية",
      description: "ابق على اطلاع بآخر التطورات في سوق العمل المغربي والقطاعات الناشئة",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "استغل منصات التكوين المجانية",
      description: "استفد من مواقع مثل Coursera وEdx وYouTube لتطوير مهاراتك",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "اكتسب الخبرة العملية",
      description: "قم بتجارب تطوعية أو تداريب ميدانية لبناء خبرتك المهنية",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "تعلم مهنة تقنية موازية",
      description: "لا تتردد في تعلم مهارة تقنية إضافية بجانب تخصصك الأكاديمي",
      icon: <Wrench className="h-5 w-5" />
    }
  ]

  const jobSources = [
    { name: "ANAPEC", url: "https://www.anapec.org", description: "الوكالة الوطنية لإنعاش التشغيل والكفاءات" },
    { name: "Emploi Maroc", url: "https://www.emploimaroc.net", description: "بوابة البحث عن العمل بالمغرب" },
    { name: "Indeed Maroc", url: "https://ma.indeed.com", description: "محرك البحث العالمي للوظائف" },
    { name: "ReKrute", url: "https://www.rekrute.com", description: "منصة التوظيف الرائدة في المغرب" },
    { name: "LinkedIn", url: "https://www.linkedin.com", description: "الشبكة المهنية العالمية" },
    { name: "Coursera", url: "https://www.coursera.org", description: "منصة التكوين والشهادات المجانية" }
  ]

  return (
    <div className="min-h-screen bg-gradient-soft rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6">
            <BackButton label="العودة للسابق" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              سوق الشغل
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              سوق الشغل يتغير باستمرار، والنجاح المهني اليوم يعتمد على حسن اختيار المسار الدراسي الذي يتماشى مع متطلبات الواقع المهني
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="sectors">القطاعات الواعدة</TabsTrigger>
            <TabsTrigger value="skills">المهارات المطلوبة</TabsTrigger>
            <TabsTrigger value="tips">نصائح عملية</TabsTrigger>
            <TabsTrigger value="resources">مصادر مفيدة</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-8 text-primary">💼 الوظائف المطلوبة حسب المستوى الدراسي</h2>
              <div className="space-y-6">
                {jobsByEducation.map((category, index) => (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full gradient-secondary">
                          <div className="text-white">
                            {category.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{category.level}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {category.jobs.map((job, idx) => (
                          <div 
                            key={idx}
                            className="p-3 bg-accent/10 rounded-lg text-center"
                          >
                            <span className="text-sm font-medium text-foreground">{job}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Promising Sectors Tab */}
          <TabsContent value="sectors" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">🚀 القطاعات الواعدة في سوق العمل المغربي</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                تعرف على القطاعات التي تشهد نموًا متزايدًا وتوفر فرص عمل واعدة للمستقبل
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promisingAreas.map((area, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-accent/10 ${area.color}`}>
                        {area.icon}
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Required Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">🧠 المهارات المطلوبة في سوق الشغل</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                طوّر هذه المهارات لتزيد من فرصك في الحصول على عمل مناسب
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {requiredSkills.map((skillCategory, index) => (
                <Card key={index} className="shadow-medium">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {skillCategory.icon}
                      </div>
                      <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillCategory.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Practical Tips Tab */}
          <TabsContent value="tips" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">💡 نصائح عملية للنجاح المهني</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                اتبع هذه النصائح لتحسين فرصك في سوق العمل وبناء مسيرة مهنية ناجحة
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {practicalTips.map((tip, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-primary mt-1">
                        {tip.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{tip.title}</CardTitle>
                        <CardDescription>{tip.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">📌 مصادر مفيدة للبحث والتطوير</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                استفد من هذه المنصات والمواقع لتطوير مهاراتك والبحث عن فرص عمل
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobSources.map((source, index) => (
                <a 
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="shadow-medium hover:shadow-strong transition-smooth group h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{source.name}</h3>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                      <p className="text-sm text-muted-foreground">{source.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="shadow-medium gradient-soft border-primary/20 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">هل لديك سؤال؟</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              إذا كان لديك أي استفسار حول سوق العمل أو تحتاج لمساعدة في اختيار مسارك المهني
            </p>
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth" asChild>
              <a href="https://forms.gle/cifWM3Ty7vevX2vS8" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="mr-2 h-5 w-5" />
                هل لديك سؤال؟
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default JobMarket