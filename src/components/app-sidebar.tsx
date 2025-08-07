import { Home, GraduationCap, University, Briefcase, BookOpen, Lightbulb, HelpCircle, Star, Heart, Menu } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "الصفحة الرئيسية", url: "/home", icon: Home },
  { title: "ما بعد الإعدادي", url: "/post-middle-school", icon: GraduationCap },
  { title: "ما بعد الباكالوريا", url: "/post-baccalaureate", icon: University },
  { title: "سوق الشغل", url: "/job-market", icon: Briefcase },
  { title: "الموارد المفيدة", url: "/useful-resources", icon: BookOpen },
  { title: "اختر اهتماماتك", url: "/choose-interests", icon: Heart },
  { title: "نصائح شخصية", url: "/personal-tips", icon: Lightbulb },
  { title: "محفوظاتي", url: "/favorites", icon: Star },
]

export function AppSidebar() {
  const { open } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary" : "hover:bg-accent/10 transition-all duration-200"

  const handleQuestionClick = () => {
    window.open("https://forms.gle/h7SZnb1nSgLHgVkQA", "_blank");
  };

  return (
    <Sidebar
      className={`border-l shadow-lg ${open ? "w-72" : "w-16"}`}
      collapsible="icon"
    >
      <SidebarHeader className="p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          {open && (
            <div>
              <h2 className="text-lg font-bold text-primary">
                دليل التوجيه
              </h2>
              <p className="text-xs text-muted-foreground">نحو مستقبل أفضل</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-xs font-semibold text-secondary mb-3">
            القائمة الرئيسية
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 rounded-xl">
                    <NavLink 
                      to={item.url} 
                      className={`${getNavCls({ isActive: isActive(item.url) })} flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200`}
                    >
                      <div className={`p-2 rounded-lg ${isActive(item.url) ? 'bg-primary text-white' : 'bg-accent/20'}`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      {open && (
                        <span className="text-sm font-medium text-right flex-1">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={handleQuestionClick}
                  className="h-12 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 hover:from-secondary/20 hover:to-primary/20 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <HelpCircle className="h-4 w-4 text-secondary" />
                  </div>
                  {open && (
                    <span className="text-sm font-medium text-right flex-1">
                      هل لديك سؤال؟
                    </span>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}