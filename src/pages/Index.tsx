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
  Award,
  Heart,
  Brain,
  Compass,
  Star
} from "lucide-react"
import { Link } from "react-router-dom"
import heroBackground from "@/assets/hero-background.jpg"
import educationBg from "@/assets/education-bg.jpg"
import careerBg from "@/assets/career-bg.jpg"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background rtl">
      {/* Welcome Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            اكتشف مستقبلك مع منصة <span className="text-primary">موصوف</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            منصة ذكية تساعدك على اختيار المسار الأنسب لك، بناءً على ميولاتك، ونتائجك الدراسية، وسوق الشغل
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/smart-guidance">
              <Button size="lg" className="gradient-primary text-white hover:scale-105 shadow-elegant px-8 py-4 text-lg font-semibold transition-smooth rounded-lg">
                🎯 المستشار الذكي
              </Button>
            </Link>
            <Link to="/useful-resources">
              <Button size="lg" variant="outline" className="hover:scale-105 px-8 py-4 text-lg font-semibold transition-smooth rounded-lg">
                📚 اكتشف المزيد
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section 
        className="relative py-32 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            رحلتك التعليمية تبدأ هنا
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            استكشف المسارات المتاحة أمامك واتخذ القرارات الصحيحة لمستقبل مشرق
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            اختر مسارك التعليمي
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            رحلة منظمة حسب مسارك الدراسي - من الإعدادي إلى سوق الشغل
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* ما بعد الإعدادي */}
            <Link to="/post-middle-school" className="group">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl mb-4 mx-auto">
                  <School className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">ما بعد الإعدادي</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  اكتشف الشعب والمسارات بعد الثالثة إعدادي
                </p>
                <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                  ابدأ الاستكشاف
                </Button>
              </div>
            </Link>

            {/* ما بعد الباكالوريا */}
            <Link to="/post-baccalaureate" className="group">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl mb-4 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">ما بعد الباكالوريا</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  الجامعات والمعاهد والتخصصات المتاحة
                </p>
                <Button className="w-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all">
                  استكشف التخصصات
                </Button>
              </div>
            </Link>

            {/* سوق الشغل */}
            <Link to="/job-market" className="group">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl mb-4 mx-auto">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">سوق الشغل</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  الفرص المهنية والمهارات المطلوبة
                </p>
                <Button className="w-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all">
                  اكتشف الفرص
                </Button>
              </div>
            </Link>

            {/* الميولات الشخصية */}
            <Link to="/choose-interests" className="group">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">الميولات الشخصية</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  اكتشف ميولاتك واهتماماتك الحقيقية
                </p>
                <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                  اختبر ميولاتك
                </Button>
              </div>
            </Link>
          </div>

          {/* الصف الثاني من البطاقات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* المستشار الذكي */}
            <Link to="/smart-guidance" className="group">
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-foreground/80 to-foreground/60 rounded-xl mb-4 mx-auto">
                  <Compass className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">المستشار الذكي</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  نظام توجيه ذكي حسب ملفك الشخصي
                </p>
                <Button variant="outline" className="w-full hover:bg-foreground hover:text-background transition-all">
                  استكشف النظام الذكي
                </Button>
              </div>
            </Link>

            {/* الموارد المفيدة */}
            <Link to="/useful-resources" className="group">
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/80 to-secondary/60 rounded-xl mb-4 mx-auto">
                  <Library className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">الموارد المفيدة</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  مصادر ومراجع تعليمية مفيدة
                </p>
                <Button variant="outline" className="w-full hover:bg-secondary hover:text-white transition-all">
                  تصفح المصادر
                </Button>
              </div>
            </Link>

            {/* نصائح شخصية */}
            <Link to="/personal-tips" className="group">
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/80 to-accent/60 rounded-xl mb-4 mx-auto">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">نصائح شخصية</h3>
                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  نصائح من خبراء التوجيه المهني
                </p>
                <Button variant="outline" className="w-full hover:bg-accent hover:text-white transition-all">
                  احصل على النصائح
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              لماذا تختار منصة موصوف؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن نوفر لك كل ما تحتاجه لاتخاذ القرار الصحيح حول مستقبلك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* توجيه مخصص */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                  <Compass className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">🧭 توجيه مخصص</h3>
                <p className="text-muted-foreground leading-relaxed">
                  خطة توجيه مصممة خصيصاً حسب ميولاتك وقدراتك
                </p>
              </div>
            </div>
            
            {/* معلومات محدثة */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 shadow-lg">
                  <TrendingUp className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">📊 معلومات محدثة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  بيانات حديثة ومحدثة باستمرار عن الجامعات وسوق العمل
                </p>
              </div>
            </div>
            
            {/* فرص مهنية */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-lg">
                  <Star className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">💼 فرص مهنية</h3>
                <p className="text-muted-foreground leading-relaxed">
                  اكتشف المهن الواعدة والقطاعات الناشئة في المغرب
                </p>
              </div>
            </div>
            
            {/* دعم في اختيار التخصص */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                  <Brain className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">🎓 دعم في اختيار التخصص</h3>
                <p className="text-muted-foreground leading-relaxed">
                  مساعدة شخصية لاختيار التخصص الأنسب لشخصيتك
                </p>
              </div>
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
