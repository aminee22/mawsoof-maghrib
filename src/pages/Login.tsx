import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  
  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  
  // Register state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Error states
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleLogin = () => {
    setLoginError("");
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError("يرجى ملء جميع الحقول");
      return;
    }
    // Here you would typically authenticate with your backend
    navigate("/home");
  };

  const handleRegister = () => {
    setRegisterError("");
    if (!registerName.trim() || !registerEmail.trim() || !registerPassword.trim() || !confirmPassword.trim()) {
      setRegisterError("يرجى ملء جميع الحقول");
      return;
    }
    if (registerPassword !== confirmPassword) {
      setRegisterError("كلمات المرور غير متطابقة");
      return;
    }
    if (registerPassword.length < 6) {
      setRegisterError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }
    // Here you would typically register with your backend
    navigate("/home");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log("Forgot password clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl mx-auto flex items-center justify-center shadow-lg hover-scale">
            <span className="text-4xl font-bold text-primary-foreground">توج</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">بوابة التوجيه التربوي</h1>
            <p className="text-muted-foreground text-lg">دليلك للمستقبل الأكاديمي والمهني</p>
          </div>
        </div>

        <Card className="border-border/50 shadow-xl backdrop-blur-sm bg-card/50 animate-scale-in">
          <CardContent className="p-8">
            <Tabs defaultValue="login" className="w-full" dir="rtl">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
                <TabsTrigger value="login" className="text-base font-semibold">تسجيل الدخول</TabsTrigger>
                <TabsTrigger value="register" className="text-base font-semibold">إنشاء حساب</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-6 mt-6">
                <div className="text-center space-y-2 mb-6">
                  <h2 className="text-2xl font-bold text-foreground">مرحباً بعودتك</h2>
                  <p className="text-muted-foreground">قم بتسجيل الدخول للمتابعة</p>
                </div>

                {loginError && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-lg text-center">
                    {loginError}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-sm font-medium text-right block">
                      البريد الإلكتروني
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="example@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pl-10 text-right h-12"
                        dir="rtl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-sm font-medium text-right block">
                      كلمة المرور
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="pl-10 pr-10 text-right h-12"
                        dir="rtl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showLoginPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-primary hover:text-primary/80 font-medium story-link"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  </div>
                  
                  <Button 
                    onClick={handleLogin}
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                    disabled={!loginEmail.trim() || !loginPassword.trim()}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                    تسجيل الدخول
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-6 mt-6">
                <div className="text-center space-y-2 mb-6">
                  <h2 className="text-2xl font-bold text-foreground">إنشاء حساب جديد</h2>
                  <p className="text-muted-foreground">انضم إلينا وابدأ رحلتك التعليمية</p>
                </div>

                {registerError && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-lg text-center">
                    {registerError}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="register-name" className="text-sm font-medium text-right block">
                      الاسم الكامل
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="اسمك الكامل"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        className="pl-10 text-right h-12"
                        dir="rtl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-sm font-medium text-right block">
                      البريد الإلكتروني
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="example@email.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        className="pl-10 text-right h-12"
                        dir="rtl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-sm font-medium text-right block">
                      كلمة المرور
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="register-password"
                        type={showRegisterPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        className="pl-10 pr-10 text-right h-12"
                        dir="rtl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showRegisterPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-sm font-medium text-right block">
                      تأكيد كلمة المرور
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10 pr-10 text-right h-12"
                        dir="rtl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleRegister}
                    className="w-full text-lg py-6 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300"
                    disabled={!registerName.trim() || !registerEmail.trim() || !registerPassword.trim() || !confirmPassword.trim()}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                    إنشاء حساب
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            منصة مخصصة لمساعدة الطلاب المغاربة في اتخاذ القرارات الأكاديمية والمهنية المناسبة
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            بالمتابعة، أنت توافق على شروط الاستخدام وسياسة الخصوصية
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;