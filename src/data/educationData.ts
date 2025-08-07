// ملف البيانات الشامل للنظام التعليمي المغربي

export interface BacType {
  id: string;
  name: string;
  description: string;
  streams: string[];
}

export interface StudyPath {
  id: string;
  name: string;
  description: string;
  duration: string;
  requirements: string[];
  bacTypes: string[];
  institutions: Institution[];
  careers: Career[];
  difficulty: 'سهل' | 'متوسط' | 'صعب';
}

export interface Institution {
  id: string;
  name: string;
  city: string;
  type: 'جامعة' | 'معهد' | 'مدرسة عليا' | 'تكوين مهني';
  admissionConditions: string[];
  registrationLink?: string;
}

export interface Career {
  id: string;
  title: string;
  description: string;
  averageSalary?: string;
  demand: 'عالي' | 'متوسط' | 'منخفض';
  sector: string;
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  image: string;
  relatedPaths: string[];
  relatedCareers: string[];
}

// أنواع الباكالوريا
export const bacTypes: BacType[] = [
  {
    id: "sciences-math",
    name: "علوم رياضية",
    description: "شعبة العلوم الرياضية",
    streams: ["رياضيات أ", "رياضيات ب"]
  },
  {
    id: "sciences-physics",
    name: "علوم فيزيائية",
    description: "شعبة العلوم الفيزيائية",
    streams: ["فيزياء كيمياء"]
  },
  {
    id: "sciences-svt",
    name: "علوم الحياة والأرض",
    description: "شعبة علوم الحياة والأرض",
    streams: ["علوم الحياة والأرض"]
  },
  {
    id: "economics",
    name: "علوم اقتصادية",
    description: "شعبة العلوم الاقتصادية والتدبير",
    streams: ["اقتصاد وتدبير"]
  },
  {
    id: "literature",
    name: "آداب وعلوم إنسانية",
    description: "شعبة الآداب والعلوم الإنسانية",
    streams: ["آداب عربية", "آداب عصرية"]
  },
  {
    id: "technical",
    name: "علوم وتكنولوجيات",
    description: "شعبة العلوم والتكنولوجيات",
    streams: ["كهرباء", "ميكانيك", "بناء"]
  }
];

// المؤسسات التعليمية
export const institutions: Institution[] = [
  // المدارس العليا للمهندسين
  {
    id: "ensa-rabat",
    name: "المدرسة الوطنية العليا للهندسة والعمارة - الرباط",
    city: "الرباط",
    type: "مدرسة عليا",
    admissionConditions: ["باكالوريا علوم رياضية أو فيزيائية", "اجتياز المباراة الوطنية"],
    registrationLink: "https://ensa.ac.ma"
  },
  {
    id: "ensam-casablanca",
    name: "المدرسة الوطنية العليا للفنون والمهن - الدار البيضاء",
    city: "الدار البيضاء",
    type: "مدرسة عليا",
    admissionConditions: ["باكالوريا علوم رياضية أو فيزيائية", "اجتياز المباراة الوطنية"],
    registrationLink: "https://ensam.ac.ma"
  },
  {
    id: "encg-casablanca",
    name: "المدرسة الوطنية للتجارة والتسيير - الدار البيضاء",
    city: "الدار البيضاء",
    type: "مدرسة عليا",
    admissionConditions: ["باكالوريا اقتصادية أو علمية", "اجتياز المباراة"],
    registrationLink: "https://encg.ac.ma"
  },
  // الكليات
  {
    id: "fst-rabat",
    name: "كلية العلوم والتقنيات - الرباط",
    city: "الرباط",
    type: "جامعة",
    admissionConditions: ["باكالوريا علمية", "القبول حسب المعدل"],
    registrationLink: "https://fst.um5.ac.ma"
  },
  {
    id: "fes-law",
    name: "كلية الحقوق - فاس",
    city: "فاس",
    type: "جامعة",
    admissionConditions: ["جميع أنواع الباكالوريا", "ولوج مفتوح"],
    registrationLink: "https://usmba.ac.ma"
  },
  {
    id: "medicine-rabat",
    name: "كلية الطب والصيدلة - الرباط",
    city: "الرباط",
    type: "جامعة",
    admissionConditions: ["باكالوريا علوم الحياة والأرض", "معدل عالي + مباراة"],
    registrationLink: "https://fmp.um5.ac.ma"
  }
];

// المسارات الدراسية
export const studyPaths: StudyPath[] = [
  {
    id: "engineering",
    name: "الهندسة",
    description: "تكوين المهندسين في مختلف التخصصات",
    duration: "5 سنوات",
    requirements: ["باكالوريا علمية", "نتائج ممتازة", "اجتياز المباراة"],
    bacTypes: ["sciences-math", "sciences-physics"],
    institutions: [],
    careers: [],
    difficulty: "صعب"
  },
  {
    id: "medicine",
    name: "الطب",
    description: "تكوين الأطباء والممارسين الصحيين",
    duration: "7 سنوات",
    requirements: ["باكالوريا علوم الحياة والأرض", "معدل عالي جداً", "مباراة"],
    bacTypes: ["sciences-svt"],
    institutions: [],
    careers: [],
    difficulty: "صعب"
  },
  {
    id: "business",
    name: "التجارة والتسيير",
    description: "تكوين في إدارة الأعمال والتجارة",
    duration: "3-5 سنوات",
    requirements: ["باكالوريا اقتصادية أو علمية", "اجتياز المباراة"],
    bacTypes: ["economics", "sciences-math"],
    institutions: [],
    careers: [],
    difficulty: "متوسط"
  },
  {
    id: "law",
    name: "القانون",
    description: "دراسة القانون والعلوم القانونية",
    duration: "3-5 سنوات",
    requirements: ["جميع أنواع الباكالوريا", "ولوج مفتوح"],
    bacTypes: ["literature", "economics", "sciences-math"],
    institutions: [],
    careers: [],
    difficulty: "متوسط"
  },
  {
    id: "computer-science",
    name: "علوم الحاسوب",
    description: "تكوين في البرمجة وتكنولوجيا المعلومات",
    duration: "3-5 سنوات",
    requirements: ["باكالوريا علمية", "معدل جيد"],
    bacTypes: ["sciences-math", "sciences-physics"],
    institutions: [],
    careers: [],
    difficulty: "متوسط"
  }
];

// المهن والوظائف
export const careers: Career[] = [
  {
    id: "مهندس-مدني",
    title: "مهندس مدني",
    description: "تصميم وإشراف على المشاريع الإنشائية",
    averageSalary: "8000-15000 درهم",
    demand: "عالي",
    sector: "البناء والأشغال العمومية"
  },
  {
    id: "مهندس-كهرباء",
    title: "مهندس كهرباء",
    description: "تصميم وصيانة الأنظمة الكهربائية",
    averageSalary: "7000-14000 درهم",
    demand: "عالي",
    sector: "الطاقة والكهرباء"
  },
  {
    id: "مهندس-معلوميات",
    title: "مهندس معلوميات",
    description: "تطوير البرمجيات والأنظمة المعلوماتية",
    averageSalary: "9000-18000 درهم",
    demand: "عالي",
    sector: "التكنولوجيا"
  },
  {
    id: "طبيب-عام",
    title: "طبيب عام",
    description: "تشخيص وعلاج الأمراض العامة",
    averageSalary: "12000-25000 درهم",
    demand: "عالي",
    sector: "الصحة"
  },
  {
    id: "طبيب-مختص",
    title: "طبيب مختص",
    description: "التخصص في مجال طبي محدد",
    averageSalary: "20000-50000 درهم",
    demand: "عالي",
    sector: "الصحة"
  },
  {
    id: "جراح",
    title: "جراح",
    description: "إجراء العمليات الجراحية",
    averageSalary: "25000-60000 درهم",
    demand: "عالي",
    sector: "الصحة"
  },
  {
    id: "مدير-تجاري",
    title: "مدير تجاري",
    description: "إدارة العمليات التجارية والمبيعات",
    averageSalary: "8000-16000 درهم",
    demand: "متوسط",
    sector: "التجارة"
  },
  {
    id: "محاسب",
    title: "محاسب",
    description: "إدارة الحسابات والمالية",
    averageSalary: "5000-12000 درهم",
    demand: "متوسط",
    sector: "المالية"
  },
  {
    id: "مستشار-مالي",
    title: "مستشار مالي",
    description: "تقديم الاستشارات المالية",
    averageSalary: "7000-15000 درهم",
    demand: "متوسط",
    sector: "المالية"
  },
  {
    id: "محامي",
    title: "محامي",
    description: "تمثيل الموكلين أمام المحاكم",
    averageSalary: "6000-20000 درهم",
    demand: "متوسط",
    sector: "القضاء"
  },
  {
    id: "قاضي",
    title: "قاضي",
    description: "إصدار الأحكام القضائية",
    averageSalary: "15000-30000 درهم",
    demand: "منخفض",
    sector: "القضاء"
  },
  {
    id: "مستشار-قانوني",
    title: "مستشار قانوني",
    description: "تقديم الاستشارات القانونية",
    averageSalary: "7000-14000 درهم",
    demand: "متوسط",
    sector: "القانون"
  },
  {
    id: "مبرمج",
    title: "مبرمج",
    description: "تطوير البرامج والتطبيقات",
    averageSalary: "6000-15000 درهم",
    demand: "عالي",
    sector: "التكنولوجيا"
  },
  {
    id: "مطور-ويب",
    title: "مطور ويب",
    description: "تطوير مواقع الإنترنت",
    averageSalary: "7000-16000 درهم",
    demand: "عالي",
    sector: "التكنولوجيا"
  },
  {
    id: "مهندس-أنظمة",
    title: "مهندس أنظمة",
    description: "إدارة وصيانة الأنظمة المعلوماتية",
    averageSalary: "8000-17000 درهم",
    demand: "عالي",
    sector: "التكنولوجيا"
  }
];

// الاهتمامات
export const interests: Interest[] = [
  {
    id: "life-sciences",
    title: "علوم الحياة والطبيعة",
    description: "استكشف عالم البيولوجيا والعلوم الطبيعية",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
    relatedPaths: ["medicine"],
    relatedCareers: []
  },
  {
    id: "mathematics",
    title: "الرياضيات والمنطق",
    description: "اكتشف جمال الأرقام والمعادلات",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    relatedPaths: ["engineering", "computer-science"],
    relatedCareers: []
  },
  {
    id: "physics-engineering",
    title: "الفيزياء والهندسة",
    description: "ادخل عالم الاختراع والابتكار",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    relatedPaths: ["engineering"],
    relatedCareers: []
  },
  {
    id: "computer-science",
    title: "علوم الحاسوب والتكنولوجيا",
    description: "شكل مستقبل التكنولوجيا الرقمية",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    relatedPaths: ["computer-science"],
    relatedCareers: []
  },
  {
    id: "economics",
    title: "الاقتصاد والإدارة",
    description: "قد عالم الأعمال والمال",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    relatedPaths: ["business"],
    relatedCareers: []
  },
  {
    id: "law-humanities",
    title: "القانون والعلوم الإنسانية",
    description: "دافع عن العدالة والحقوق",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=250&fit=crop",
    relatedPaths: ["law"],
    relatedCareers: []
  }
];

// وظائف المساعدة
export const getPathsByBacType = (bacTypeId: string): StudyPath[] => {
  return studyPaths.filter(path => path.bacTypes.includes(bacTypeId));
};

export const getInstitutionsByPath = (pathId: string): Institution[] => {
  return institutions.filter(inst => 
    studyPaths.some(path => path.id === pathId && path.institutions.includes(inst))
  );
};

export const getCareersByPath = (pathId: string): Career[] => {
  return careers.filter(career => 
    studyPaths.some(path => path.id === pathId && path.careers.includes(career))
  );
};

export const getPathsByInterest = (interestId: string): StudyPath[] => {
  const interest = interests.find(i => i.id === interestId);
  if (!interest) return [];
  return studyPaths.filter(path => interest.relatedPaths.includes(path.id));
};

export const getCareersByInterest = (interestId: string): Career[] => {
  const interest = interests.find(i => i.id === interestId);
  if (!interest) return [];
  return careers.filter(career => interest.relatedCareers.includes(career.id));
};

export const getPathsBySector = (sector: string): StudyPath[] => {
  const sectorCareers = careers.filter(career => career.sector === sector);
  const relatedPaths = new Set<string>();
  
  sectorCareers.forEach(career => {
    studyPaths.forEach(path => {
      if (path.careers.some(c => c.id === career.id)) {
        relatedPaths.add(path.id);
      }
    });
  });
  
  return studyPaths.filter(path => relatedPaths.has(path.id));
};