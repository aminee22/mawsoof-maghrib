import { Home, GraduationCap, University, Briefcase, BookOpen, Lightbulb, HelpCircle, Star } from "lucide-react"
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
  { title: "نصائح شخصية", url: "/personal-tips", icon: Lightbulb },
  { title: "محفوظاتي", url: "/favorites", icon: Star },
]

export function AppSidebar() {
  const { open } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50"

  const handleQuestionClick = () => {
    window.open("https://forms.gle/cifWM3Ty7vevX2vS8", "_blank");
  };

  return (
    <Sidebar
      className={open ? "w-64" : "w-14"}
      collapsible="icon"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          {open && (
            <h2 className="text-lg font-semibold text-primary">
              دليل التوجيه
            </h2>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {open && <span className="text-right">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleQuestionClick}>
                  <HelpCircle className="h-4 w-4" />
                  {open && <span className="text-right">هل لديك سؤال؟</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}