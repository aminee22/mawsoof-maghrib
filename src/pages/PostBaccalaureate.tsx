import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { University, Building2, Award, Users, ArrowRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

const PostBaccalaureate = () => {
  const institutions = [
    {
      title: "المدارس الوطنية للمهندسين (ENSA)",
      description: "تكوين مهندسين في مختلف التخصصات",
      icon: <University className="h-8 w-8" />,
      duration: "5 سنوات",
      entry: "مباراة وطنية",
      specializations: ["الهندسة الإعلامية", "الهندسة المدنية", "هندسة الطيران", "الهندسة الصناعية"],
      requirements: "باك علمي أو تقني بمعدل جيد"
    },
    {
      title: "تقني متخصص (OFPPT)",
      description: "تكوين تقني متخصص في مجالات متنوعة",
      icon: <Building2 className="h-8 w-8" />,
      duration: "2 سنة",
      entry: "ملف + مقابلة",
      specializations: ["التجارة والتسويق", "السياحة والفندقة", "المعلوماتيات", "الصناعة"],
      requirements: "باكالوريا أو مستوى باك"
    },
    {
      title: "شهادة التقني العالي (BTS)",
      description: "تكوين تقني عالي متخصص",
      icon: <Award className="h-8 w-8" />,
      duration: "2 سنة",
      entry: "انتقاء على أساس النقط",
      specializations: ["المحاسبة والتسيير", "التجارة الدولية", "المعلوماتيات التطبيقية"],
      requirements: "باكالوريا بمعدل مقبول"
    },
    {
      title: "الكليات والجامعات",
      description: "تعليم جامعي في تخصصات متنوعة",
      icon: <Users className="h-8 w-8" />,
      duration: "3-5 سنوات",
      entry: "مفتوح أو انتقائي",
      specializations: ["الطب", "الحقوق", "الاقتصاد", "الآداب والعلوم الإنسانية"],
      requirements: "باكالوريا حسب التخصص"
    }
  ]

  const guidanceSteps = [
    {
      step: "1",
      title: "حدد ميولك",
      description: "اكتشف ما تحب وما يثير اهتمامك"
    },
    {
      step: "2", 
      title: "اعرف قدراتك",
      description: "قيم نقاطك ومستواك الأكاديمي"
    },
    {
      step: "3",
      title: "ابحث عن المعلومات",
      description: "تعرف على الخيارات المتاحة أمامك"
    },
    {
      step: "4",
      title: "اتخذ القرار",
      description: "اختر المسار الذي يناسبك أكثر"
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
            التوجيه ما بعد الباكالوريا
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف الخيارات المتاحة أمامك واختر المسار الذي يحقق طموحاتك المهنية
          </p>
        </div>

        {/* Guidance Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">خطوات التوجيه الصحيح</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {guidanceSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Institutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-secondary">المؤسسات والتخصصات</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {institutions.map((institution, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full gradient-secondary">
                      <div className="text-white">
                        {institution.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{institution.title}</CardTitle>
                      <CardDescription className="text-base">
                        {institution.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 text-sm">
                      <Badge variant="outline" className="border-primary text-primary">
                        المدة: {institution.duration}
                      </Badge>
                      <Badge variant="outline" className="border-secondary text-secondary">
                        الولوج: {institution.entry}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">الشروط:</h4>
                      <p className="text-muted-foreground text-sm">{institution.requirements}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-secondary">التخصصات:</h4>
                      <div className="flex flex-wrap gap-2">
                        {institution.specializations.map((spec, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                          >
                            {spec}
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

        {/* Call to Action */}
        <Card className="shadow-medium gradient-soft border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج مساعدة في الاختيار؟</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              أجب على استبياننا التفاعلي لتحديد المسار الأنسب حسب ميولك ونقاطك وأهدافك المهنية
            </p>
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
              <ArrowRight className="mr-2 h-5 w-5" />
              ابدأ اختبار التوجيه
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PostBaccalaureate