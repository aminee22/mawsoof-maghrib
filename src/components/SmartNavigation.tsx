import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, GraduationCap, Building, Briefcase, Heart, TrendingUp } from "lucide-react"
import { 
  bacTypes, 
  studyPaths, 
  institutions, 
  careers, 
  interests,
  getPathsByBacType,
  getInstitutionsByPath,
  getCareersByPath,
  getPathsByInterest,
  getCareersByInterest,
  getPathsBySector
} from "@/data/educationData"

export const SmartNavigation = () => {
  const navigate = useNavigate()
  const [selectedBacType, setSelectedBacType] = useState<string>("")
  const [selectedPath, setSelectedPath] = useState<string>("")
  const [selectedInterest, setSelectedInterest] = useState<string>("")
  const [selectedSector, setSelectedSector] = useState<string>("")

  const availablePaths = selectedBacType ? getPathsByBacType(selectedBacType) : []
  const availableInstitutions = selectedPath ? getInstitutionsByPath(selectedPath) : []
  const availableCareers = selectedPath ? getCareersByPath(selectedPath) : []
  
  const interestPaths = selectedInterest ? getPathsByInterest(selectedInterest) : []
  const interestCareers = selectedInterest ? getCareersByInterest(selectedInterest) : []
  
  const sectorPaths = selectedSector ? getPathsBySector(selectedSector) : []

  const sectors = [...new Set(careers.map(career => career.sector))]

  const handleExploreInterest = (interestId: string) => {
    navigate(`/interests/${interestId}`)
  }

  return (
    <div className="space-y-8">
      {/* التنقل حسب نوع الباكالوريا */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <GraduationCap className="h-6 w-6" />
            اختر حسب نوع الباكالوريا
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedBacType} onValueChange={setSelectedBacType}>
            <SelectTrigger>
              <SelectValue placeholder="اختر نوع الباكالوريا" />
            </SelectTrigger>
            <SelectContent>
              {bacTypes.map((bacType) => (
                <SelectItem key={bacType.id} value={bacType.id}>
                  {bacType.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {availablePaths.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-secondary">المسارات المتاحة:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {availablePaths.map((path) => (
                  <Card key={path.id} className="border border-primary/20 hover:border-primary/40 transition-smooth cursor-pointer" onClick={() => setSelectedPath(path.id)}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">{path.name}</h5>
                          <p className="text-sm text-muted-foreground">{path.duration}</p>
                        </div>
                        <Badge variant={path.difficulty === 'صعب' ? 'destructive' : path.difficulty === 'متوسط' ? 'secondary' : 'default'}>
                          {path.difficulty}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {availableInstitutions.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-secondary">المؤسسات المتاحة:</h4>
              <div className="space-y-2">
                {availableInstitutions.map((institution) => (
                  <Card key={institution.id} className="border border-accent/20">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium">{institution.name}</h5>
                          <p className="text-sm text-muted-foreground">{institution.city}</p>
                          <Badge variant="outline" className="mt-1">{institution.type}</Badge>
                        </div>
                        {institution.registrationLink && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => window.open(institution.registrationLink, '_blank')}
                          >
                            <ArrowRight className="h-4 w-4 mr-1" />
                            زيارة الموقع
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {availableCareers.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-secondary">الآفاق المهنية:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {availableCareers.map((career) => (
                  <Card key={career.id} className="border border-success/20">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium">{career.title}</h5>
                          <p className="text-sm text-muted-foreground mb-2">{career.description}</p>
                          {career.averageSalary && (
                            <p className="text-sm font-medium text-primary">{career.averageSalary}</p>
                          )}
                        </div>
                        <Badge variant={career.demand === 'عالي' ? 'default' : career.demand === 'متوسط' ? 'secondary' : 'outline'}>
                          {career.demand}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* التنقل حسب الاهتمامات */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <Heart className="h-6 w-6" />
            اختر حسب اهتماماتك
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedInterest} onValueChange={setSelectedInterest}>
            <SelectTrigger>
              <SelectValue placeholder="اختر مجال اهتمامك" />
            </SelectTrigger>
            <SelectContent>
              {interests.map((interest) => (
                <SelectItem key={interest.id} value={interest.id}>
                  {interest.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedInterest && (
            <div className="flex justify-center">
              <Button 
                onClick={() => handleExploreInterest(selectedInterest)}
                className="bg-secondary hover:bg-secondary/90"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                استكشف هذا المجال بالتفصيل
              </Button>
            </div>
          )}

          {interestPaths.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-secondary">المسارات المرتبطة:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {interestPaths.map((path) => (
                  <Card key={path.id} className="border border-secondary/20 hover:border-secondary/40 transition-smooth">
                    <CardContent className="p-4">
                      <h5 className="font-medium">{path.name}</h5>
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {interestCareers.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-secondary">المهن المناسبة:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {interestCareers.map((career) => (
                  <Card key={career.id} className="border border-accent/20">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium">{career.title}</h5>
                          <p className="text-sm text-muted-foreground">{career.sector}</p>
                        </div>
                        <Badge variant={career.demand === 'عالي' ? 'default' : 'secondary'}>
                          {career.demand}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* التنقل حسب القطاعات الواعدة */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent">
            <TrendingUp className="h-6 w-6" />
            اختر حسب القطاعات الواعدة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedSector} onValueChange={setSelectedSector}>
            <SelectTrigger>
              <SelectValue placeholder="اختر القطاع المهني" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {sectorPaths.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-accent">التخصصات المطلوبة في هذا القطاع:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {sectorPaths.map((path) => (
                  <Card key={path.id} className="border border-accent/20 hover:border-accent/40 transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">{path.name}</h5>
                          <p className="text-sm text-muted-foreground">{path.duration}</p>
                        </div>
                        <Badge variant="outline">{path.difficulty}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* روابط سريعة */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            روابط سريعة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" onClick={() => navigate('/post-middle-school')} className="h-auto p-4 flex flex-col gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm">ما بعد الإعدادي</span>
            </Button>
            <Button variant="outline" onClick={() => navigate('/post-baccalaureate')} className="h-auto p-4 flex flex-col gap-2">
              <Building className="h-6 w-6" />
              <span className="text-sm">ما بعد الباكالوريا</span>
            </Button>
            <Button variant="outline" onClick={() => navigate('/job-market')} className="h-auto p-4 flex flex-col gap-2">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm">سوق الشغل</span>
            </Button>
            <Button variant="outline" onClick={() => navigate('/choose-interests')} className="h-auto p-4 flex flex-col gap-2">
              <Heart className="h-6 w-6" />
              <span className="text-sm">اكتشف ميولاتك</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}