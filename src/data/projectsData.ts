
import { FeaturedProject } from '../components/projects/FeaturedProjects';
import { OtherProject } from '../components/projects/OtherProjects';
import { CaseStudy } from '../components/projects/CaseStudies';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Smart City Initiative",
    location: "Franklin STEM Academy, Boston",
    description: "Students created miniature smart city models using sensors to monitor traffic, energy usage, and environmental factors. The project integrated concepts from urban planning, environmental science, and technology.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjBjaXR5fGVufDB8fDB8fHww",
    studentAge: "14-16 years",
    duration: "4 months",
    achievements: ["Regional Innovation Award", "Featured in STEM Today Magazine"],
    technologies: ["IoT Sensors", "Arduino", "Data Visualization"]
  },
  {
    id: 2,
    title: "Agricultural Robotics",
    location: "Greenfield High School, Portland",
    description: "A project focused on automated farming solutions, including irrigation systems and crop monitoring robots. Students developed prototypes that could measure soil conditions and autonomously water plants based on needs.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZyUyMHJvYm90fGVufDB8fDB8fHww",
    studentAge: "16-18 years",
    duration: "6 months",
    achievements: ["State STEM Competition Winner", "Partnership with Local Farms"],
    technologies: ["Robotics", "Environmental Sensors", "Python Programming"]
  },
  {
    id: 3,
    title: "Healthcare Innovations",
    location: "Medical Preparatory School, Chicago",
    description: "Students developed assistive robots designed to help with healthcare monitoring and mobility support. The project addressed real-world challenges faced by elderly and mobility-impaired individuals.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZSUyMHJvYm90fGVufDB8fDB8fHww",
    studentAge: "15-17 years",
    duration: "5 months",
    achievements: ["Healthcare Innovation Award", "Presented at Medical Tech Conference"],
    technologies: ["Medical Sensors", "AI Algorithms", "Human-Computer Interaction"]
  }
];

export const otherProjects: OtherProject[] = [
  {
    id: 4,
    title: "Renewable Energy Lab",
    location: "Westside Science Academy, Seattle",
    description: "Students designed and built miniature renewable energy systems, comparing efficiency of different approaches.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVuZXdhYmxlJTIwZW5lcmd5fGVufDB8fDB8fHww",
    studentAge: "12-14 years",
    technologies: ["Solar panels", "Wind turbines", "Energy monitoring"]
  },
  {
    id: 5,
    title: "Environmental Monitoring System",
    location: "Lakeside Middle School, Denver",
    description: "A network of sensors to monitor air quality, water quality, and other environmental factors on campus.",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVudmlyb25tZW50YWwlMjBtb25pdG9yaW5nfGVufDB8fDB8fHww",
    studentAge: "11-13 years",
    technologies: ["Environmental sensors", "Data logging", "Web dashboards"]
  },
  {
    id: 6,
    title: "Underwater ROV Project",
    location: "Coastal Academy, Miami",
    description: "Students built remotely operated vehicles to explore underwater environments and collect data.",
    image: "https://images.unsplash.com/photo-1586422405722-da3eefan9ded9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuZGVyd2F0ZXIlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D",
    studentAge: "15-17 years",
    technologies: ["Waterproof robotics", "Remote control systems", "Marine biology"]
  },
  {
    id: 7,
    title: "Interactive Art Installation",
    location: "Arts & Technology School, Austin",
    description: "An interdisciplinary project combining programming, robotics, and visual arts to create interactive installations.",
    image: "https://images.unsplash.com/photo-1633286441883-7dc1d9a56a97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwaW5zdGFsbGF0aW9ufGVufDB8fDB8fHww",
    studentAge: "13-18 years",
    technologies: ["Motion sensors", "LED systems", "Interactive programming"]
  },
  {
    id: 8,
    title: "Space Exploration Simulation",
    location: "Northern District STEM School, Houston",
    description: "Students developed a Mars rover simulation and carried out mock exploration missions.",
    image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFycyUyMHJvdmVyfGVufDB8fDB8fHww",
    studentAge: "14-16 years",
    technologies: ["Robotics", "Programming", "Virtual reality"]
  },
  {
    id: 9,
    title: "Wearable Technology for Sports",
    location: "Athletic Preparatory Academy, San Diego",
    description: "Students created wearable devices to monitor athletic performance and provide real-time feedback.",
    image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhcmFibGUlMjB0ZWNofGVufDB8fDB8fHww",
    studentAge: "15-18 years",
    technologies: ["Motion sensors", "Biometric monitoring", "Mobile app development"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 10,
    title: "District-Wide Robotics Integration",
    organization: "Metropolitan School District",
    location: "Los Angeles, CA",
    challenge: "Implementing a comprehensive robotics program across 15 schools with varying resource levels and teacher experience.",
    solution: "Cretile developed a phased implementation plan with differentiated training for teachers and a scalable equipment model.",
    results: "90% of schools successfully launched robotics programs within one year, with over 2,500 students participating.",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzdHJpY3R8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 11,
    title: "Rural STEM Access Initiative",
    organization: "Countryside Educational Cooperative",
    location: "Rural Montana",
    challenge: "Bringing high-quality STEM education to geographically dispersed schools with limited resources and connectivity.",
    solution: "Customized offline-capable robotics kits with curriculum designed for mixed-age classrooms and limited supervision.",
    results: "STEM participation increased by 175% across 8 rural schools, with 5 schools launching their first-ever robotics teams.",
    image: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVyYWwlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
  }
];
