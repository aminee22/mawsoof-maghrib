import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Wrench, Briefcase, ArrowRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

const PostMiddleSchool = () => {
  const tracks = [
    {
      emoji: "🧠",
      title: "الشعب العلمية",
      icon: <GraduationCap className="h-8 w-8" />,
      subjects: ["علوم الحياة والأرض", "العلوم الفيزيائية", "العلوم الرياضية"],
      description: "مناسبة للتلاميذ الذين يحبون المواد العلمية، الرياضيات، والتجارب.",
      careers: "الطب، الهندسة، الفيزياء، البيولوجيا..."
    },
    {
      emoji: "📚",
      title: "الشعب الأدبية",
      icon: <BookOpen className="h-8 w-8" />,
      subjects: ["شعبة الآداب", "شعبة العلوم الإنسانية"],
      description: "مناسبة لمحبي اللغات، الفلسفة، والتاريخ.",
      careers: "الصحافة، القانون، اللغات، العلوم الاجتماعية..."
    },
    {
      emoji: "🛠️",
      title: "الشعب التقنية والمهنية",
      icon: <Wrench className="h-8 w-8" />,
      subjects: ["الإلكترونيات", "الكهرباء", "الإعلاميات", "التصميم الصناعي"],
      description: "مناسبة لمن يفضلون الجانب التطبيقي والتقني.",
      careers: "BTS، DUT، الهندسة التطبيقية، المدارس العليا للتكنولوجيا..."
    },
    {
      emoji: "🏫",
      title: "التكوين المهني (OFPPT)",
      icon: <Briefcase className="h-8 w-8" />,
      subjects: ["كهرباء", "صباغة", "طبخ", "إعلاميات", "تصميم", "حلاقة..."],
      description: "متاح مباشرة بعد الإعدادي أو البكالوريا. مناسب لمن يريد دخول سوق الشغل بسرعة.",
      careers: "تكوين قصير، فرصة عمل سريعة، دبلومات معترف بها"
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
        <div className="grid gap-8 mb-12">
          {tracks.map((track, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{track.emoji}</div>
                  <div>
                    <CardTitle className="text-2xl">{track.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">📚 تتضمن:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {track.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <span className="text-green-600 font-semibold">✅</span> {track.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">🎓 فرص ما بعد البكالوريا:</h4>
                    <p className="text-muted-foreground">{track.careers}</p>
                  </div>
                  {track.title === "التكوين المهني (OFPPT)" && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700">🟢 مزايا:</h4>
                      <p className="text-green-600">{track.careers}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Question Button */}
        <div className="text-center">
          <a 
            href="https://forms.gle/cifWM3Ty7vevX2vS8" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
              💬 استبيان؟
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostMiddleSchool