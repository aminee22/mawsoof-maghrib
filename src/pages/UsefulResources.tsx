import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, Monitor, Globe, Youtube, FileText, Wrench, ExternalLink } from "lucide-react";

const UsefulResources = () => {
  const resourceSections = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "مواقع التوجيه الدراسي في المغرب",
      resources: [
        { name: "tawjihi.ma", description: "بوابة التوجيه الرسمية لما بعد الباكالوريا", url: "https://tawjihi.ma" },
        { name: "orientation.chafik.com", url: "https://orientation.chafik.com" },
        { name: "parcoursmaroc.com", url: "https://parcoursmaroc.com" }
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "مواقع المنح الدراسية",
      resources: [
        { name: "marj3.com", url: "https://marj3.com" },
        { name: "opportunitydesk.org", url: "https://opportunitydesk.org" },
        { name: "scholarshiproar.com", url: "https://scholarshiproar.com" }
      ]
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "مواقع لتعلم البرمجة والمهارات الرقمية",
      resources: [
        { name: "coursera.org", url: "https://coursera.org" },
        { name: "freecodecamp.org", url: "https://freecodecamp.org" },
        { name: "khanacademy.org", url: "https://khanacademy.org" },
        { name: "Udemy", description: "بعض الدورات مجانية", url: "https://udemy.com" }
      ]
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "مواقع لتعلم اللغات مجانا",
      resources: [
        { name: "duolingo.com", url: "https://duolingo.com" },
        { name: "busuu.com", url: "https://busuu.com" },
        { name: "memrise.com", url: "https://memrise.com" },
        { name: "learnenglish.britishcouncil.org", url: "https://learnenglish.britishcouncil.org" }
      ]
    },
    {
      icon: <Youtube className="h-6 w-6 text-primary" />,
      title: "قنوات يوتيوب مفيدة",
      resources: [
        { name: "قناة Driss Bensari", description: "توجيه ودراسة" },
        { name: "قناة إنجليزي سهل" },
        { name: "قناة أسامة الزيرو", description: "برمجة" },
        { name: "قناة عبداللطيف سعيد", description: "تحفيز وتنمية" }
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "كتب إلكترونية مجانية",
      resources: [
        { name: "pdfdrive.com", description: "كتب متنوعة", url: "https://pdfdrive.com" },
        { name: "zlibrary.to", description: "كتب أكاديمية وأدبية", url: "https://zlibrary.to" }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "أدوات مهمة للطلاب",
      resources: [
        { name: "Canva", description: "لإنشاء CV أو تصاميم تعليمية", url: "https://canva.com" },
        { name: "Google Docs", description: "لإنشاء ملخصات أو عروض", url: "https://docs.google.com" },
        { name: "Grammarly", description: "لتصحيح اللغة الإنجليزية", url: "https://grammarly.com" }
      ]
    }
  ];

  const handleResourceClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

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
            مصادر مفيدة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعة من المصادر والأدوات المفيدة لدعم رحلتك التعليمية والمهنية
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {resourceSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {section.icon}
                </div>
                <CardTitle className="text-lg text-primary">
                  📚 {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.resources.map((resource, resourceIndex) => (
                    <li key={resourceIndex} className="text-right">
                      <div 
                        className={`flex items-start gap-2 p-2 rounded-md transition-colors ${
                          resource.url 
                            ? 'hover:bg-accent/50 cursor-pointer' 
                            : ''
                        }`}
                        onClick={() => handleResourceClick(resource.url)}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 justify-end">
                            <span className="font-medium text-foreground">
                              {resource.name}
                            </span>
                            {resource.url && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                          </div>
                          {resource.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {resource.description}
                            </p>
                          )}
                        </div>
                        <span className="text-primary mt-1">•</span>
                      </div>
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

export default UsefulResources;