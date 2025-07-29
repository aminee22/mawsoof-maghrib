import { HeroCard } from "@/components/ui/hero-card"
import { Button } from "@/components/ui/button"
import { GraduationCap, University, Briefcase, BookOpen, Lightbulb, MapPin, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft rtl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
            بوابة التوجيه التربوي
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة شاملة لمساعدة الطلاب المغاربة في اختيار مسارهم الدراسي والمهني المناسب
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth px-8 py-4">
              ابدأ رحلة التوجيه
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              تعرف أكثر
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation Cards */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          اختر مرحلتك التعليمية
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          <Link to="/post-middle-school">
            <HeroCard
              title="ما بعد الإعدادي"
              description="اكتشف المسارات المتاحة في الثانوية واختر ما يناسب ميولك وقدراتك"
              icon={<GraduationCap />}
              gradient="primary"
            />
          </Link>
          
          <Link to="/post-baccalaureate">
            <HeroCard
              title="ما بعد الباكالوريا"
              description="تعرف على الجامعات والمعاهد والتخصصات المتاحة لك"
              icon={<University />}
              gradient="secondary"
            />
          </Link>
          
          <Link to="/job-market">
            <HeroCard
              title="سوق الشغل"
              description="استكشف الفرص المهنية والمهن المطلوبة في السوق المغربي"
              icon={<Briefcase />}
              gradient="hero"
            />
          </Link>

          <Link to="/useful-resources">
            <HeroCard
              title="الموارد المفيدة"
              description="روابط ومصادر تعليمية وتوجيهية تساعد الطلاب في اكتشاف الفرص الدراسية والمهنية"
              icon={<BookOpen />}
              gradient="secondary"
            />
          </Link>

          <Link to="/personal-tips">
            <HeroCard
              title="نصائح شخصية"
              description="نصائح موجهة من خبراء التوجيه الدراسي لمساعدتك في اختيار المسار الأنسب حسب قدراتك واهتماماتك"
              icon={<Lightbulb />}
              gradient="primary"
            />
          </Link>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">لماذا تختار منصتنا؟</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">توجيه متخصص</h4>
              <p className="text-muted-foreground">نصائح وإرشادات من خبراء التوجيه التربوي</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <University className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">معلومات محدثة</h4>
              <p className="text-muted-foreground">أحدث المعلومات عن الجامعات والمعاهد</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">فرص مهنية</h4>
              <p className="text-muted-foreground">تعرف على أحدث الفرص في سوق العمل</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h4 className="font-bold mb-4 text-primary">التواصل</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="h-4 w-4" />
                  <span>+212 6 XX XX XX XX</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="h-4 w-4" />
                  <span>info@guidance.ma</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>المغرب</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-primary">روابط مفيدة</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>وزارة التربية الوطنية</div>
                <div>وزارة التعليم العالي</div>
                <div>مكتب التكوين المهني</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-primary">المساعدة</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>الأسئلة الشائعة</div>
                <div>دليل الاستخدام</div>
                <div>اتصل بنا</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 بوابة التوجيه التربوي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
