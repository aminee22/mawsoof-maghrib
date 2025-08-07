import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Building, Briefcase, Heart } from "lucide-react"

export const SmartNavigation = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* روابط سريعة */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            روابط سريعة للتوجيه
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/post-middle-school')} 
              className="h-auto p-4 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm">ما بعد الإعدادي</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/post-baccalaureate')} 
              className="h-auto p-4 flex flex-col gap-2 hover:bg-secondary hover:text-secondary-foreground"
            >
              <Building className="h-6 w-6" />
              <span className="text-sm">ما بعد الباكالوريا</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/job-market')} 
              className="h-auto p-4 flex flex-col gap-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Briefcase className="h-6 w-6" />
              <span className="text-sm">سوق الشغل</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/choose-interests')} 
              className="h-auto p-4 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <Heart className="h-6 w-6" />
              <span className="text-sm">اكتشف ميولاتك</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* التوجيه التفاعلي */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-center text-primary">
            🎯 اختر مسارك خطوة بخطوة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              ابدأ رحلتك التعليمية من خلال استكشاف المسارات المختلفة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-primary/20 hover:border-primary/40 transition-smooth cursor-pointer" onClick={() => navigate('/post-middle-school')}>
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">طلاب الإعدادي</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  اكتشف الشعب المتاحة بعد الثالثة إعدادي
                </p>
                <Button size="sm" className="w-full">
                  استكشف الخيارات
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-secondary/20 hover:border-secondary/40 transition-smooth cursor-pointer" onClick={() => navigate('/post-baccalaureate')}>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold mb-2">حاملو الباكالوريا</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  اكتشف الجامعات والمعاهد المتاحة
                </p>
                <Button size="sm" variant="secondary" className="w-full">
                  استكشف التخصصات
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="border border-accent/20 hover:border-accent/40 transition-smooth cursor-pointer" onClick={() => navigate('/choose-interests')}>
              <CardContent className="p-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">اكتشف ميولاتك</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ابدأ باكتشاف اهتماماتك الشخصية للوصول للمسار المناسب
                </p>
                <Button size="sm" variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  ابدأ الاستكشاف
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}