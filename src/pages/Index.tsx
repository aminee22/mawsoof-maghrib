import { HeroCard } from "@/components/ui/hero-card"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  University, 
  Briefcase, 
  BookOpen, 
  Lightbulb, 
  MapPin, 
  Phone, 
  Mail,
  School,
  Target,
  Library,
  Users,
  TrendingUp,
  Award
} from "lucide-react"
import { Link } from "react-router-dom"
import heroBackground from "@/assets/hero-background.jpg"
import educationBg from "@/assets/education-bg.jpg"
import careerBg from "@/assets/career-bg.jpg"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background rtl">
      {/* Hero Section */}
      <section 
        className="relative py-40 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
            بوابة التوجيه التربوي
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
            منصة شاملة لتوجيه الطلاب المغاربة نحو أفضل الخيارات الدراسية والمهنية مع أحدث المعلومات والموارد التعليمية
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link to="/post-middle-school">
              <Button size="lg" className="gradient-primary text-white hover:scale-110 shadow-elegant px-12 py-5 text-xl font-bold transition-smooth border-0 rounded-full hover:shadow-glow">
                🎯 ابدأ رحلة التوجيه
              </Button>
            </Link>
            <Link to="/useful-resources">
              <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white/30 hover:scale-110 backdrop-blur-sm px-12 py-5 text-xl font-bold transition-smooth rounded-full">
                📚 تعرف أكثر
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(${educationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-foreground mb-6">
            اختر مسارك التعليمي
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-xl max-w-3xl mx-auto">
            استكشف الخيارات المتاحة أمامك واتخذ القرار الصحيح لمستقبلك
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 animate-fade-in-up">
            <Link to="/post-middle-school" className="transform transition-all duration-300 hover:-translate-y-2">
              <HeroCard
                title="🎓 ما بعد الإعدادي"
                description="تعرف على الشعب والمسارات المتاحة بعد إنهاء المرحلة الإعدادية وحدد مستقبلك التعليمي"
                icon={<School />}
                gradient="primary"
              />
            </Link>
            
            <Link to="/post-baccalaureate" className="transform transition-all duration-300 hover:-translate-y-2">
              <HeroCard
                title="🏆 ما بعد الباكالوريا"
                description="اكتشف الجامعات والمعاهد العليا والمسارات المهنية المتاحة واختر التخصص المناسب"
                icon={<Award />}
                gradient="secondary"
              />
            </Link>
            
            <Link to="/job-market" className="transform transition-all duration-300 hover:-translate-y-2">
              <HeroCard
                title="💼 سوق الشغل"
                description="تعرف على الفرص المهنية والوظائف المطلوبة في السوق المغربي والمهارات المطلوبة"
                icon={<Target />}
                gradient="hero"
              />
            </Link>

            <Link to="/useful-resources" className="transform transition-all duration-300 hover:-translate-y-2">
              <HeroCard
                title="📚 الموارد المفيدة"
                description="روابط ومصادر تعليمية وتوجيهية تساعد الطلاب في اكتشاف الفرص الدراسية والمهنية"
                icon={<Library />}
                gradient="primary"
              />
            </Link>

            <Link to="/personal-tips" className="transform transition-all duration-300 hover:-translate-y-2">
              <HeroCard
                title="💡 نصائح شخصية"
                description="نصائح موجهة من خبراء التوجيه الدراسي لمساعدتك في اختيار المسار الأنسب حسب قدراتك"
                icon={<Lightbulb />}
                gradient="secondary"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.03)), url(${careerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-foreground mb-16">
            لماذا تختار منصتنا؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-10 rounded-3xl bg-white/90 backdrop-blur-sm shadow-elegant hover:shadow-strong transition-smooth border border-primary/10">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full gradient-primary shadow-lg">
                <Users className="text-white h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">توجيه متخصص</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                احصل على إرشادات من خبراء في التوجيه المدرسي والمهني
              </p>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-white/90 backdrop-blur-sm shadow-elegant hover:shadow-strong transition-smooth border border-accent/10">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full gradient-secondary shadow-lg">
                <TrendingUp className="text-white h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">معلومات محدثة</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                آخر المستجدات حول الجامعات والمعاهد وسوق العمل في المغرب
              </p>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-white/90 backdrop-blur-sm shadow-elegant hover:shadow-strong transition-smooth border border-primary/10">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full gradient-hero shadow-lg">
                <Award className="text-white h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">فرص مهنية</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                اكتشف المهن الواعدة والمسارات المطلوبة في المستقبل
              </p>
            </div>
          </div>
        </div>
      </section>

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
