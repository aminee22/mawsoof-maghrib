import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Database } from "lucide-react"

const Favorites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-8 w-8 text-yellow-500" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              محفوظاتي
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            هنا ستجد جميع المصادر والمحتويات التي قمت بحفظها للمراجعة لاحقاً
          </p>
        </div>

        {/* Empty State */}
        <Card className="text-center py-12">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Database className="h-12 w-12 text-gray-400" />
            </div>
            <CardTitle className="text-2xl mb-2">لا توجد محفوظات بعد</CardTitle>
            <CardDescription className="text-lg mb-6">
              لتفعيل ميزة المحفوظات، تحتاج لربط المشروع بقاعدة بيانات Supabase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                بعد ربط Supabase ستتمكن من:
              </p>
              <ul className="text-right list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>حفظ المصادر المفيدة والروابط</li>
                <li>حفظ النصائح المهمة</li>
                <li>إنشاء قوائم مخصصة</li>
                <li>مزامنة المحفوظات عبر الأجهزة</li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="mx-2">
                  تعرف على كيفية ربط Supabase
                </Button>
                <Button variant="outline" size="lg" className="mx-2">
                  العودة للصفحة الرئيسية
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Favorites