import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (emailOrPhone.trim()) {
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto flex items-center justify-center">
            <span className="text-3xl font-bold text-primary-foreground">توج</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">بوابة التوجيه التربوي</h1>
            <p className="text-muted-foreground text-lg">دليلك للمستقبل الأكاديمي والمهني</p>
          </div>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl text-foreground">مرحباً بك</CardTitle>
            <CardDescription className="text-base">
              ابدأ رحلتك نحو اختيار المسار المناسب لمستقبلك
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="emailOrPhone" className="text-sm font-medium text-foreground block text-right">
                البريد الإلكتروني أو رقم الهاتف
              </label>
              <Input
                id="emailOrPhone"
                type="text"
                placeholder="example@email.com"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="text-right"
                dir="rtl"
              />
            </div>
            
            <Button 
              onClick={handleStart}
              className="w-full text-lg py-6"
              disabled={!emailOrPhone.trim()}
            >
              ابدأ الآن
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                بالمتابعة، أنت توافق على شروط الاستخدام وسياسة الخصوصية
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            منصة مخصصة لمساعدة الطلاب المغاربة في اتخاذ القرارات الأكاديمية والمهنية المناسبة
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;