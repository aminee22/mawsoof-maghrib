import { BackButton } from "@/components/ui/back-button"
import { SmartNavigation } from "@/components/SmartNavigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Brain, Target } from "lucide-react"

const SmartGuidance = () => {
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
              المستشار التوجيهي الذكي
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              دعنا نساعدك في اختيار المسار المناسب لك بناءً على نوع الباكالوريا، اهتماماتك، والفرص المتاحة في سوق الشغل
            </p>
          </div>
        </div>

        {/* Introduction Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center shadow-medium">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-primary">توجيه ذكي</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                اختر حسب نوع الباكالوريا الخاصة بك واكتشف المسارات المتاحة أمامك
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-medium">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-secondary">حسب الاهتمامات</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                اكتشف التخصصات والمهن التي تتماشى مع ميولاتك واهتماماتك الشخصية
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-medium">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-accent">الفرص الواعدة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                تعرف على القطاعات الناشئة والمهن المطلوبة بكثرة في السوق المغربي
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Smart Navigation Component */}
        <SmartNavigation />

        {/* Tips Section */}
        <Card className="shadow-medium gradient-soft border-primary/20 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">💡 نصائح ذكية</h3>
            <div className="grid md:grid-cols-2 gap-6 text-right">
              <div>
                <h4 className="font-semibold mb-2">🎯 كن واقعياً</h4>
                <p className="text-muted-foreground text-sm">
                  اختر التخصص الذي يتماشى مع قدراتك ونتائجك الدراسية
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📊 ادرس السوق</h4>
                <p className="text-muted-foreground text-sm">
                  تأكد من وجود فرص عمل في المجال الذي تختاره
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💭 فكر في المستقبل</h4>
                <p className="text-muted-foreground text-sm">
                  اختر مجالاً له آفاق نمو وتطور في السنوات القادمة
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🗣️ استشر الخبراء</h4>
                <p className="text-muted-foreground text-sm">
                  تحدث مع أشخاص يعملون في المجال الذي تفكر فيه
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SmartGuidance