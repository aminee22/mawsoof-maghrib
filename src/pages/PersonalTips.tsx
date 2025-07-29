import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Target, BookOpen, TrendingUp, Search, Users } from "lucide-react";

const PersonalTips = () => {
  const tips = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "اكتشف نفسك أولًا",
      content: [
        "لا تختر تخصصًا فقط لأن صديقك اختاره أو لأن عائلتك تريده.",
        "اسأل نفسك: ما الذي أحبه؟ ما الذي أجيده؟ ما الذي أراه مستقبلي فيه؟"
      ]
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "لا تستعجل القرار",
      content: [
        "خذ وقتك للتفكير قبل أن تختار مسارك الدراسي أو المهني.",
        "القرار الخاطئ الآن قد يُضيع سنوات من عمرك لاحقًا."
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "الشهادات مهمة… لكن المهارات أهم",
      content: [
        "تعلّم الحاسوب، اللغات، مهارات التواصل، والتخطيط… هذه أمور مطلوبة في أي مجال."
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "الفشل لا يعني النهاية",
      content: [
        "الكثير من الناجحين فشلوا مرة أو مرتين.",
        "لا تيأس، بل تعلم من الخطأ وابدأ من جديد."
      ]
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "التعليم الذاتي يصنع الفارق",
      content: [
        "لا تنتظر المدرسة فقط، بل تعلم من اليوتيوب، الدورات، الكتب، التجربة."
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "ابحث، جرّب، اسأل",
      content: [
        "لا تخف من طرح الأسئلة أو من تجربة مجالات جديدة."
      ]
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "ثق بنفسك",
      content: [
        "كل شخص لديه مسار خاص، لا تقارن نفسك بغيرك.",
        "أنت في طريقك الخاص، وثق أنه يمكنك النجاح بطريقتك."
      ]
    }
  ];

  const handleQuestionClick = () => {
    window.open('https://forms.gle/cifWM3Ty7vevX2vS8', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">بوابة التوجيه التربوي</h1>
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-primary"
            >
              العودة للخلف
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            نصائح شخصية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نصائح مهمة لمساعدتك في اتخاذ القرارات الصحيحة لمستقبلك
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
          {tips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {tip.icon}
                </div>
                <CardTitle className="text-lg text-primary">
                  📌 {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-right">
                  {tip.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Question Button */}
        <div className="text-center">
          <Button 
            onClick={handleQuestionClick}
            size="lg"
            className="gap-2 px-8 py-3 text-lg font-semibold"
          >
            💬 هل لديك سؤال؟
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalTips;