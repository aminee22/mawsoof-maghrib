import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/ui/back-button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, BookOpen, Wrench, Briefcase, ArrowRight, Target, Lightbulb, ExternalLink, Clock, Award, Users } from "lucide-react"

const PostMiddleSchool = () => {
  const educationPaths = [
    {
      emoji: "🎓",
      title: "التعليم الثانوي التأهيلي",
      icon: <GraduationCap className="h-8 w-8" />,
      duration: "3 سنوات",
      conditions: "النجاح في امتحان الجهوي للثالثة إعدادي",
      branches: [
        {
          name: "الشعب العلمية",
          subjects: ["علوم الحياة والأرض", "العلوم الفيزيائية", "العلوم الرياضية"],
          suitableFor: "محبي العلوم والرياضيات والتجارب"
        },
        {
          name: "الشعب الأدبية",
          subjects: ["الآداب", "العلوم الإنسانية", "العلوم الشرعية"],
          suitableFor: "محبي اللغات والفلسفة والتاريخ"
        },
        {
          name: "الشعب التقنية",
          subjects: ["العلوم والتكنولوجيات الكهربائية", "العلوم والتكنولوجيات الميكانيكية"],
          suitableFor: "محبي التقنية والتطبيق العملي"
        }
      ],
      prospects: "الجامعات، المدارس العليا، الأقسام التحضيرية"
    },
    {
      emoji: "🛠️",
      title: "التكوين المهني (التأهيلي)",
      icon: <Wrench className="h-8 w-8" />,
      duration: "2-3 سنوات",
      conditions: "النجاح في امتحان الجهوي + مباراة أو انتقاء",
      branches: [
        {
          name: "الصناعة",
          subjects: ["كهرباء", "ميكانيك", "إلكترونيات", "لحام"],
          suitableFor: "محبي العمل اليدوي والتقني"
        },
        {
          name: "الخدمات",
          subjects: ["إعلاميات", "محاسبة", "سياحة", "طبخ"],
          suitableFor: "محبي التواصل وخدمة الزبائن"
        }
      ],
      prospects: "سوق الشغل مباشرة، BTS، تكوين متخصص"
    },
    {
      emoji: "📚",
      title: "التعليم الأصيل",
      icon: <BookOpen className="h-8 w-8" />,
      duration: "3 سنوات",
      conditions: "النجاح في امتحان الجهوي + مباراة",
      branches: [
        {
          name: "العلوم الشرعية",
          subjects: ["الفقه", "التفسير", "الحديث", "العقيدة"],
          suitableFor: "محبي العلوم الإسلامية"
        },
        {
          name: "اللغة العربية",
          subjects: ["النحو", "البلاغة", "الأدب", "العروض"],
          suitableFor: "محبي اللغة العربية والأدب"
        }
      ],
      prospects: "جامعات دار الحديث الحسنية، كليات الآداب"
    },
    {
      emoji: "🕌",
      title: "التعليم العتيق",
      icon: <Award className="h-8 w-8" />,
      duration: "متغيرة",
      conditions: "مباراة ولوج خاصة",
      branches: [
        {
          name: "العلوم الشرعية التقليدية",
          subjects: ["القرآن الكريم", "الفقه", "الحديث", "التفسير"],
          suitableFor: "الراغبين في التعليم التقليدي الإسلامي"
        }
      ],
      prospects: "الوعظ والإرشاد، التدريس، الدراسات العليا الشرعية"
    }
  ]

  const interestPathMapping = [
    {
      interest: "ميول علمي",
      paths: ["الثانوي العلمي", "التكوين المهني التقني", "الأقسام التحضيرية العلمية"],
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      interest: "ميول أدبي",
      paths: ["الثانوي الأدبي", "التعليم الأصيل", "التكوين المهني في الخدمات"],
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      interest: "ميول تطبيقي",
      paths: ["التكوين المهني الصناعي", "الثانوي التقني", "التكوين المهني الخدماتي"],
      color: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      interest: "ميول ديني",
      paths: ["التعليم الأصيل", "التعليم العتيق", "الثانوي الأدبي"],
      color: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ]

  const tips = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "لا تعتمد فقط على النقاط",
      description: "فكر في اهتماماتك وما تحب فعله حقاً، وليس فقط في نقاطك الدراسية"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "استشر المختصين",
      description: "تحدث مع أسرتك، مستشارك التربوي، وأساتذتك للحصول على آراء متنوعة"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "فكر في المستقبل",
      description: "ادرس الآفاق الدراسية والمهنية لكل مسار قبل اتخاذ قرارك"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "خذ وقتك",
      description: "لا تتسرع في القرار، واجمع معلومات كافية عن كل الخيارات المتاحة"
    }
  ]

  const usefulLinks = [
    {
      title: "دليل التوجيه الرسمي - وزارة التربية الوطنية",
      url: "https://www.men.gov.ma",
      description: "الدليل الرسمي للتوجيه المدرسي والمهني"
    },
    {
      title: "مكتب التكوين المهني وإنعاش الشغل",
      url: "https://www.ofppt.ma",
      description: "معلومات حول التكوين المهني والتخصصات المتاحة"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-soft rtl">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6">
            <BackButton label="العودة للسابق" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              التوجيه ما بعد الإعدادي
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                بعد إنهاء التعليم الإعدادي، يواجه التلميذ اختيارات متعددة لمساره الدراسي. 
                هذه الصفحة ستساعدك على فهم هذه الاختيارات، واختيار المسار الأنسب لك حسب اهتماماتك وقدراتك.
              </p>
            </div>
          </div>
        </div>

        {/* Education Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            🎯 المسارات الدراسية المتاحة
          </h2>
          <div className="grid gap-8">
            {educationPaths.map((path, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{path.emoji}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{path.title}</CardTitle>
                      <div className="flex gap-4 mt-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {path.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                        📋 شروط الولوج:
                      </h4>
                      <p className="text-muted-foreground">{path.conditions}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">🎓 الشعب والتخصصات:</h4>
                      <div className="grid gap-3">
                        {path.branches.map((branch, idx) => (
                          <div key={idx} className="p-4 border rounded-lg bg-accent/5">
                            <h5 className="font-semibold text-secondary">{branch.name}</h5>
                            <p className="text-sm text-muted-foreground mt-1">{branch.suitableFor}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {branch.subjects.map((subject, subIdx) => (
                                <Badge key={subIdx} variant="secondary" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                        🚀 الآفاق المستقبلية:
                      </h4>
                      <p className="text-muted-foreground">{path.prospects}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interest-Path Mapping */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            🧠 اربط ميولك بالمسار المناسب
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interestPathMapping.map((mapping, index) => (
              <Card key={index} className={`border-2 ${mapping.color} transition-smooth hover:shadow-md`}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{mapping.interest}</h3>
                  <div className="space-y-2">
                    {mapping.paths.map((path, pathIdx) => (
                      <div key={pathIdx} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        <span className="text-sm">{path}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            💡 نصائح لاختيار المسار الأنسب
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{tip.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            🔗 روابط مفيدة
          </h2>
          <div className="grid gap-4">
            {usefulLinks.map((link, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Question Button */}
        <div className="text-center">
          <a 
            href="https://forms.gle/cifWM3Ty7vevX2vS8" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
              💬 هل لديك أسئلة أخرى؟ استبيان مخصص
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostMiddleSchool