import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackButton } from "@/components/ui/back-button"
import { University, Building2, Award, Users, ArrowRight } from "lucide-react"

const PostBaccalaureate = () => {
  const sections = [
    {
      title: "🎓 الدراسة الجامعية العمومية",
      icon: <University className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">📘 الكليات:</h4>
            <ul className="text-muted-foreground space-y-1 mr-4">
              <li>• كلية العلوم</li>
              <li>• كلية الآداب</li>
              <li>• كلية الحقوق</li>
              <li>• كلية الاقتصاد</li>
              <li>• كلية الشريعة</li>
              <li>• كلية اللغة العربية</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm">✅ تتطلب فقط شهادة الباكالوريا، بدون مباراة.</p>
            <p className="text-sm">🔑 الدراسة غالبًا نظرية، مدة التكوين 3 سنوات (إجازة أساسية).</p>
          </div>
        </div>
      )
    },
    {
      title: "🏫 المدارس والمعاهد العليا",
      icon: <Building2 className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">🎯 تتطلب مباراة أو انتقاء:</h4>
            <ul className="text-muted-foreground space-y-1 mr-4">
              <li>• الأقسام التحضيرية CPGE</li>
              <li>• المدارس الوطنية للعلوم التطبيقية ENSA</li>
              <li>• المدرسة الوطنية للتجارة والتسيير ENCG</li>
              <li>• المدرسة الوطنية العليا للفنون والمهن ENSAM</li>
              <li>• معاهد التكوين في مهن التمريض ISPITS</li>
              <li>• معهد الحسن الثاني للزراعة والبيطرة IAV</li>
              <li>• المعهد الملكي للإدارة الترابية ISIC/ENSAE/IFG/EMI...</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm">📌 هذه المدارس تعطي دبلومات عالية وفرص عمل قوية.</p>
            <p className="text-sm">🕐 مدة التكوين غالبًا 5 سنوات أو أكثر.</p>
          </div>
        </div>
      )
    },
    {
      title: "🛠️ التكوين المهني العالي",
      icon: <Award className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">🔧 دبلومات BTS - DUT - DTS</h4>
            <p className="text-muted-foreground text-sm mb-2">
              ✅ تكوين تطبيقي في ميادين مثل: الإعلاميات، التسويق، الإلكترونيات، المحاسبة، الكهرباء...
            </p>
            <p className="text-sm">📌 مناسب لمن يفضل الجانب العملي ويريد دخول سوق الشغل بسرعة.</p>
          </div>
        </div>
      )
    },
    {
      title: "✈️ الدراسة في الخارج",
      icon: <Users className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground text-sm mb-2">
              🌍 دول مثل فرنسا، ألمانيا، تركيا، كندا، إسبانيا...
            </p>
            <p className="text-sm mb-2">📌 تحتاج: معدل جيد + لغة + أحيانًا إمتحانات قبول.</p>
            <p className="text-sm">🎓 منح حكومية أو خاصة متوفرة لبعض الدول.</p>
          </div>
        </div>
      )
    },
    {
      title: "❗ ماذا لو لم أنجح في الباك؟",
      icon: <Award className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">✳️ لا تيأس! يمكنك:</h4>
            <ul className="text-muted-foreground space-y-1 mr-4">
              <li>• إعادة السنة لتحسين مستواك</li>
              <li>• التوجه نحو التكوين المهني</li>
              <li>• البدء في مشاريع صغيرة أو تعلم مهارات جديدة (برمجة، تصميم، لغات...)</li>
            </ul>
          </div>
        </div>
      )
    }
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
            التوجيه ما بعد الباكالوريا
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف الخيارات المتاحة أمامك واختر المسار الذي يحقق طموحاتك المهنية
          </p>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-12 space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full gradient-secondary">
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {section.content}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="shadow-medium gradient-soft border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">هل لديك سؤال؟</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              إذا كان لديك أي استفسار أو تحتاج لمساعدة إضافية، لا تتردد في طرح سؤالك
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

export default PostBaccalaureate