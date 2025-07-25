import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Wrench, Briefcase, ArrowRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

const PostMiddleSchool = () => {
  const tracks = [
    {
      title: "المسار العلمي",
      description: "رياضيات، فيزياء، كيمياء، علوم الحياة والأرض",
      icon: <GraduationCap className="h-8 w-8" />,
      subjects: ["الرياضيات", "الفيزياء والكيمياء", "علوم الحياة والأرض"],
      careers: ["طبيب", "مهندس", "صيدلي", "بحث علمي"]
    },
    {
      title: "المسار الأدبي",
      description: "اللغات، التاريخ، الجغرافيا، الفلسفة",
      icon: <BookOpen className="h-8 w-8" />,
      subjects: ["اللغة العربية", "اللغات الأجنبية", "التاريخ والجغرافيا", "الفلسفة"],
      careers: ["أستاذ", "صحفي", "مترجم", "دبلوماسي"]
    },
    {
      title: "المسار التقني",
      description: "علوم المهندس، تكنولوجيا المعلومات، الإلكترونيك",
      icon: <Wrench className="h-8 w-8" />,
      subjects: ["علوم المهندس", "الرياضيات التطبيقية", "المعلوماتية"],
      careers: ["تقني متخصص", "مطور برمجيات", "فني صيانة"]
    },
    {
      title: "التكوين المهني",
      description: "تعلم مهارات عملية ودخول سوق الشغل مباشرة",
      icon: <Briefcase className="h-8 w-8" />,
      subjects: ["تكوين تطبيقي", "تدريب ميداني", "مهارات مهنية"],
      careers: ["حرفي متخصص", "تقني", "ريادي أعمال"]
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
            التوجيه ما بعد الإعدادي
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر المسار الذي يناسب ميولك وقدراتك لضمان مستقبل مهني ناجح
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tracks.map((track, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full gradient-primary">
                    <div className="text-white">
                      {track.icon}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{track.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {track.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">المواد الأساسية:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {track.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">المهن المحتملة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.careers.map((career, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidance Section */}
        <Card className="shadow-medium gradient-soft border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">نصائح للاختيار الصحيح</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xl mb-4 text-primary">اعرف نفسك:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ما هي المواد التي تحبها وتتفوق فيها؟</li>
                  <li>• ما هي هواياتك واهتماماتك؟</li>
                  <li>• هل تفضل العمل النظري أم التطبيقي؟</li>
                  <li>• ما هي نقاط قوتك وضعفك؟</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-secondary">استكشف الخيارات:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ابحث عن معلومات حول كل مسار</li>
                  <li>• تحدث مع طلاب وخريجين</li>
                  <li>• زر المعاهد والثانويات</li>
                  <li>• استشر المرشد التربوي</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
                <ArrowRight className="mr-2 h-5 w-5" />
                ابدأ الاستبيان التوجيهي
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PostMiddleSchool