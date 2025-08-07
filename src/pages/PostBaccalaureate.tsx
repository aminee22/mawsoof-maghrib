import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"
import { Separator } from "@/components/ui/separator"
import { 
  University, 
  Building2, 
  Award, 
  Users, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Target, 
  Lightbulb, 
  ExternalLink,
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Briefcase,
  Globe,
  Heart,
  Search
} from "lucide-react"

const PostBaccalaureate = () => {
  const studyPaths = [
    {
      title: "الكليات العمومية",
      emoji: "🎓",
      icon: <University className="h-8 w-8" />,
      color: "blue",
      duration: "3-8 سنوات",
      accessType: "ولوج مفتوح",
      description: "التعليم الجامعي العمومي المفتوح لجميع حاملي البكالوريا",
      institutions: [
        "كلية العلوم", "كلية الآداب والعلوم الإنسانية", "كلية الحقوق", 
        "كلية العلوم الاقتصادية والتدبير", "كلية الطب والصيدلة", "كلية طب الأسنان"
      ],
      admission: "شهادة البكالوريا فقط (أو مباراة محدودة للطب)",
      prospects: "الماستر، الدكتوراه، التدريس، البحث العلمي، الوظيفة العمومية",
      examples: ["إجازة في الرياضيات", "إجازة في الاقتصاد", "دكتوراه في الطب"]
    },
    {
      title: "المدارس العليا",
      emoji: "🏛️",
      icon: <Building2 className="h-8 w-8" />,
      color: "green",
      duration: "3-5 سنوات",
      accessType: "ولوج محدود بمباراة",
      description: "تكوين متخصص عالي الجودة مع فرص عمل ممتازة",
      institutions: [
        "ENSA - المدارس الوطنية للعلوم التطبيقية",
        "ENCG - المدارس الوطنية للتجارة والتسيير", 
        "ENSAM - المدرسة الوطنية العليا للفنون والمهن",
        "FST - كليات العلوم والتقنيات",
        "EMI - المدرسة المحمدية للمهندسين"
      ],
      admission: "مباراة كتابية + شفهية، معدل البكالوريا مرتفع",
      prospects: "مهندس، مدير، خبير، رواد أعمال، رواتب عالية",
      examples: ["مهندس في المعلوميات", "مدير مالي", "مهندس مدني"]
    },
    {
      title: "الأقسام التحضيرية",
      emoji: "📚",
      icon: <BookOpen className="h-8 w-8" />,
      color: "purple",
      duration: "2 سنة + 3 سنوات مدرسة عليا",
      accessType: "انتقاء صارم",
      description: "إعداد مكثف للولوج إلى أرقى المدارس العليا",
      institutions: [
        "CPGE العلمية (Math Sup/Spé)",
        "CPGE الاقتصادية والتجارية", 
        "CPGE الأدبية"
      ],
      admission: "معدل ممتاز في البكالوريا + ملف أكاديمي قوي",
      prospects: "المدارس العليا المرموقة، المناصب القيادية",
      examples: ["مدرسة البوليتكنيك", "المدارس العليا التجارية الكبرى"]
    },
    {
      title: "التكوين المهني العالي",
      emoji: "🔧",
      icon: <Award className="h-8 w-8" />,
      color: "orange",
      duration: "2-3 سنوات",
      accessType: "انتقاء أو مباراة",
      description: "تكوين تطبيقي مباشر لسوق الشغل",
      institutions: [
        "ISTA - معاهد التكوين في التكنولوجيا التطبيقية",
        "ISGI - معاهد التكوين في التدبير",
        "ISPITS - معاهد التكوين في المهن الصحية"
      ],
      admission: "البكالوريا + أحياناً مباراة أو مقابلة",
      prospects: "تقني متخصص، دخول سريع لسوق الشغل، إنشاء مشاريع",
      examples: ["تقني في الشبكات", "مساعد طبي", "تقني محاسبة"]
    },
    {
      title: "الدراسة بالخارج",
      emoji: "✈️",
      icon: <Globe className="h-8 w-8" />,
      color: "teal",
      duration: "متغيرة حسب البرنامج",
      accessType: "شروط خاصة بكل دولة",
      description: "فرصة للحصول على تعليم دولي وخبرة ثقافية",
      institutions: [
        "الجامعات الفرنسية", "الجامعات الألمانية", "الجامعات الكندية",
        "الجامعات التركية", "الجامعات الإسبانية"
      ],
      admission: "معدل جيد + إتقان اللغة + ملف قوي + أحياناً امتحانات",
      prospects: "شهادات معترف بها دولياً، فرص عمل عالمية",
      examples: ["منح الحكومة الفرنسية", "برنامج إيراسموس", "منح DAAD الألمانية"]
    },
    {
      title: "التعليم الخاص",
      emoji: "🏢",
      icon: <Briefcase className="h-8 w-8" />,
      color: "red",
      duration: "2-5 سنوات",
      accessType: "رسوم دراسية",
      description: "تعليم متخصص بمناهج حديثة وشراكات دولية",
      institutions: [
        "الجامعات الخاصة", "معاهد التكوين المتخصصة",
        "مدارس الإدارة والأعمال", "معاهد التقنيات المتقدمة"
      ],
      admission: "البكالوريا + رسوم دراسية + أحياناً مقابلة",
      prospects: "تخصصات نادرة، شبكات مهنية قوية، مناهج متطورة",
      examples: ["إدارة الأعمال", "التصميم الجرافيكي", "التسويق الرقمي"]
    }
  ]

  const bacTypeMapping = [
    {
      bacType: "علوم رياضية أ و ب",
      specializations: [
        "الهندسة", "الطب", "الصيدلة", "العلوم الأساسية", 
        "المعلوميات", "الرياضيات التطبيقية"
      ],
      institutions: ["ENSA", "EMI", "ENSAM", "كلية الطب", "كلية العلوم"],
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      bacType: "علوم فيزيائية",
      specializations: [
        "الفيزياء", "الكيمياء", "علوم المواد", "الهندسة", 
        "العلوم الصناعية"
      ],
      institutions: ["كلية العلوم", "FST", "ENSA", "المدارس التقنية"],
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      bacType: "علوم الحياة والأرض",
      specializations: [
        "البيولوجيا", "الطب", "الصيدلة", "البيطرة", 
        "علوم البيئة", "الزراعة"
      ],
      institutions: ["كلية الطب", "كلية العلوم", "IAV", "ISPITS"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      bacType: "آداب وعلوم إنسانية",
      specializations: [
        "الآداب", "اللغات", "التاريخ", "الجغرافيا", 
        "علم النفس", "علم الاجتماع"
      ],
      institutions: ["كلية الآداب", "ENS", "معاهد الترجمة"],
      color: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      bacType: "علوم اقتصادية",
      specializations: [
        "الاقتصاد", "التدبير", "التجارة", "المحاسبة", 
        "التسويق", "المالية"
      ],
      institutions: ["ENCG", "FSJES", "ISCAE", "مدارس التجارة"],
      color: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      bacType: "علوم شرعية",
      specializations: [
        "الدراسات الإسلامية", "اللغة العربية", "الفقه", 
        "أصول الدين", "التربية الإسلامية"
      ],
      institutions: ["دار الحديث الحسنية", "كلية الآداب", "ENS"],
      color: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ]

  const selectionTips = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "اتبع شغفك",
      description: "اختر المجال الذي تحبه حقاً، وليس فقط ما يعتبره الآخرون 'مرموقاً'"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: "حدد أهدافك",
      description: "فكر في نوع الحياة المهنية التي تريدها والمسؤوليات التي تفضلها"
    },
    {
      icon: <Search className="h-6 w-6 text-green-500" />,
      title: "ابحث واستطلع",
      description: "تحدث مع المختصين والخريجين، واقرأ عن التخصصات المختلفة"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
      title: "قيّم قدراتك",
      description: "كن واقعياً حول نقاط قوتك وضعفك الأكاديمية والشخصية"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "فكر في المستقبل",
      description: "ادرس سوق العمل والتطورات التكنولوجية في المجال الذي تفكر فيه"
    },
    {
      icon: <Users className="h-6 w-6 text-teal-500" />,
      title: "استشر الخبراء",
      description: "لا تتردد في طلب النصح من المستشارين التربويين والأساتذة"
    }
  ]

  const usefulResources = [
    {
      title: "دليل التوجيه الجامعي",
      description: "الدليل الرسمي لجميع المؤسسات والتخصصات",
      type: "external",
      url: "https://www.enssup.gov.ma",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "منصة التسجيل الجامعي",
      description: "التسجيل الإلكتروني في الجامعات العمومية",
      type: "external", 
      url: "https://candidature.men.gov.ma",
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      title: "دليل المنح الدراسية",
      description: "معلومات حول المنح المحلية والدولية",
      type: "download",
      url: "#",
      icon: <Download className="h-5 w-5" />
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50/50",
      green: "border-green-200 bg-green-50/50", 
      purple: "border-purple-200 bg-purple-50/50",
      orange: "border-orange-200 bg-orange-50/50",
      teal: "border-teal-200 bg-teal-50/50",
      red: "border-red-200 bg-red-50/50"
    }
    return colorMap[color as keyof typeof colorMap] || "border-gray-200 bg-gray-50/50"
  }

  const getIconColor = (color: string) => {
    const iconColorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600", 
      orange: "text-orange-600",
      teal: "text-teal-600",
      red: "text-red-600"
    }
    return iconColorMap[color as keyof typeof iconColorMap] || "text-gray-600"
  }

  return (
    <div className="min-h-screen bg-gradient-soft rtl">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6">
            <BackButton label="العودة للسابق" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              التوجيه ما بعد البكالوريا
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                بعد الحصول على شهادة البكالوريا، يُفتح أمامك عدد كبير من المسارات الدراسية، وكل خيار يحدد مسارك الأكاديمي والمهني. 
                في هذه الصفحة، سنرشدك لفهم اختياراتك، التخصصات، المؤسسات، شروط القبول، والآفاق المستقبلية.
              </p>
            </div>
          </div>
        </div>

        {/* Study Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            🎯 المسارات الدراسية الكبرى
          </h2>
          <div className="grid gap-8">
            {studyPaths.map((path, index) => (
              <Card key={index} className={`${getColorClasses(path.color)} border-2 shadow-medium hover:shadow-strong transition-smooth`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{path.emoji}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{path.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{path.description}</p>
                      <div className="flex gap-3 mt-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {path.duration}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {path.accessType}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          🏛️ أمثلة على المؤسسات:
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {path.institutions.map((institution, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <ArrowRight className="h-3 w-3" />
                              {institution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          📋 شروط القبول:
                        </h4>
                        <p className="text-sm text-muted-foreground">{path.admission}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          🚀 الآفاق المستقبلية:
                        </h4>
                        <p className="text-sm text-muted-foreground">{path.prospects}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                          💼 أمثلة على المهن:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {path.examples.map((example, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bac Type Mapping */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            📊 نوع البكالوريا والتخصصات المناسبة
          </h2>
          <div className="grid gap-6">
            {bacTypeMapping.map((mapping, index) => (
              <Card key={index} className={`border-2 ${mapping.color} transition-smooth hover:shadow-md`}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{mapping.bacType}</h3>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-primary">التخصصات المناسبة:</h4>
                      <div className="flex flex-wrap gap-1">
                        {mapping.specializations.map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-primary">أمثلة على المؤسسات:</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        {mapping.institutions.map((inst, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            {inst}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selection Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            🧠 كيف تختار التخصص المناسب لك؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionTips.map((tip, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{tip.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Useful Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            📎 موارد وروابط مفيدة
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {usefulResources.map((resource, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary">{resource.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                      {resource.type === "external" ? (
                        <a 
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                        >
                          زيارة الموقع <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <Button variant="outline" size="sm" className="text-xs">
                          تحميل الدليل
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">
            🔗 روابط سريعة للمزيد من المعلومات
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="p-4 h-auto flex-col" asChild>
              <a href="/job-market">
                <Briefcase className="h-6 w-6 mb-2" />
                <span className="text-sm">سوق الشغل</span>
              </a>
            </Button>
            <Button variant="outline" className="p-4 h-auto flex-col" asChild>
              <a href="/useful-resources">
                <BookOpen className="h-6 w-6 mb-2" />
                <span className="text-sm">موارد مفيدة</span>
              </a>
            </Button>
            <Button variant="outline" className="p-4 h-auto flex-col" asChild>
              <a href="/personal-tips">
                <Lightbulb className="h-6 w-6 mb-2" />
                <span className="text-sm">نصائح شخصية</span>
              </a>
            </Button>
            <Button variant="outline" className="p-4 h-auto flex-col" asChild>
              <a href="/favorites">
                <Heart className="h-6 w-6 mb-2" />
                <span className="text-sm">المفضلة</span>
              </a>
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Call to Action */}
        <Card className="shadow-medium gradient-soft border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">هل لديك سؤال؟</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              إذا كان لديك أي استفسار حول التوجيه أو تحتاج لمساعدة شخصية في اختيار المسار المناسب، 
              لا تتردد في التواصل معنا
            </p>
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth" asChild>
              <a href="https://forms.gle/h7SZnb1nSgLHgVkQA" target="_blank" rel="noopener noreferrer">
                هل لديك سؤال؟
                <ArrowRight className="mr-2 h-5 w-5" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PostBaccalaureate