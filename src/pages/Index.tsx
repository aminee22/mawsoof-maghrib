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
        className="relative py-32 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            بوابة التوجيه التربوي
          </h1>
          <p className="text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            منصة شاملة لتوجيه الطلاب المغاربة نحو أفضل الخيارات الدراسية والمهنية
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link to="/post-middle-school">
              <Button size="lg" className="gradient-primary text-white hover:scale-105 shadow-elegant px-10 py-4 text-lg font-semibold transition-smooth border-0">
                ابدأ رحلة التوجيه
              </Button>
            </Link>
            <Link to="/useful-resources">
              <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm px-10 py-4 text-lg font-semibold transition-smooth">
                تعرف أكثر
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <Link to="/post-middle-school">
              <HeroCard
                title="ما بعد الإعدادي"
                description="تعرف على الشعب والمسارات المتاحة بعد إنهاء المرحلة الإعدادية"
                icon={<School />}
                gradient="primary"
              />
            </Link>
            
            <Link to="/post-baccalaureate">
              <HeroCard
                title="ما بعد الباكالوريا"
                description="اكتشف الجامعات والمعاهد العليا والمسارات المهنية المتاحة"
                icon={<Award />}
                gradient="secondary"
              />
            </Link>
            
            <Link to="/job-market">
              <HeroCard
                title="سوق الشغل"
                description="تعرف على الفرص المهنية والوظائف المطلوبة في السوق المغربي"
                icon={<Target />}
                gradient="hero"
              />
            </Link>

            <Link to="/useful-resources">
              <HeroCard
                title="الموارد المفيدة"
                description="روابط ومصادر تعليمية وتوجيهية تساعد الطلاب في اكتشاف الفرص الدراسية والمهنية"
                icon={<Library />}
                gradient="primary"
              />
            </Link>

            <Link to="/personal-tips">
              <HeroCard
                title="نصائح شخصية"
                description="نصائح موجهة من خبراء التوجيه الدراسي لمساعدتك في اختيار المسار الأنسب حسب قدراتك واهتماماتك"
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
