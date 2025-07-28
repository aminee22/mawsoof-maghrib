import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Building, Globe, ArrowRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

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

  const requiredSkills = [
    "🔑 التواصل الفعال",
    "💻 أساسيات الكمبيوتر", 
    "🌐 اللغات (الفرنسية – الإنجليزية)",
    "🧾 كتابة السيرة الذاتية",
    "🎤 التحضير لمقابلات العمل",
    "🤝 المرونة والانضباط"
  ]

  const jobSources = [
    { name: "ANAPEC", url: "https://www.anapec.org" },
    { name: "Emploi Maroc", url: "https://www.emploimaroc.net" },
    { name: "Indeed Maroc", url: "https://ma.indeed.com" },
    { name: "ReKrute", url: "https://www.rekrute.com" }
  ]

  return (
    <div className="min-h-screen bg-gradient-soft rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/home" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-smooth mb-4">
            <Home className="h-5 w-5" />
            العودة للرئيسية
          </Link>
          <h1 className="text-4xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            سوق الشغل
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف الوظائف المتاحة والمهارات المطلوبة في سوق العمل المغربي
          </p>
        </div>

        {/* Jobs by Education Level */}
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

        {/* Required Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-secondary">🧠 مهارات مطلوبة في سوق الشغل</h2>
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {requiredSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">📌 مصادر للبحث عن فرص العمل</h2>
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {jobSources.map((source, index) => (
                  <a 
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/10 transition-smooth group"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-medium">{source.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="shadow-medium gradient-soft border-primary/20">
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