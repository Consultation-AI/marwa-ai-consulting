import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Buildings, GraduationCap, UsersThree, Lightbulb, ChartLineUp, Brain } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  Chalkboard, 
  Student, 
  Certificate, 
  Chat, 
  MagnifyingGlass,
  Robot,
  ChartBar,
  Users,
  ClipboardText,
  Translate,
  Video,
  FileText,
  PencilLine,
  Question,
  Calendar,
  ShieldCheck
} from "@phosphor-icons/react"

const k12Services = [
  {
    icon: Buildings,
    title: "Corporate AI Solutions",
    description: "Help your company leverage AI to streamline operations, enhance decision-making, and gain competitive advantages in your industry.",
    features: ["Process Automation", "Predictive Analytics", "AI Strategy"]
  },
  {
    icon: GraduationCap,
    title: "Educational AI Integration",
    description: "Empower schools and universities with AI tools that personalize learning, optimize administration, and prepare students for the future.",
    features: ["Learning Platforms", "Student Analytics", "Administrative Tools"]
  },
  {
    icon: UsersThree,
    title: "Non-Profit & Organizations",
    description: "Enable organizations to maximize impact through AI-driven insights, efficient resource allocation, and enhanced program delivery.",
    features: ["Impact Measurement", "Resource Optimization", "Donor Insights"]
  }
]

const benefits = [
  {
    title: "Early Warning Systems",
    description: "Predictive analytics that identify at-risk students early, enabling timely interventions and personalized support strategies."
  },
  {
    icon: Chalkboard,
    title: "Lesson Planning Assistants",
    description: "AI tools that help teachers create engaging, standards-aligned lesson plans with differentiated instruction strategies."
  },
  {
    icon: Translate,
    title: "Language Learning AI",
    description: "Conversational AI for practicing foreign languages with real-time pronunciation feedback and cultural context."
  },
  {
    icon: FileText,
    title: "Reading Comprehension Tools",
    description: "AI-powered reading assistance that adjusts text complexity, provides definitions, and tracks comprehension progress."
  },
  {
    icon: ShieldCheck,
    title: "Plagiarism Detection",
    description: "Advanced AI systems that detect academic dishonesty and help maintain academic integrity across assignments."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-optimized class scheduling that balances teacher workloads, room availability, and student course requirements."
  },
  {
    icon: Users,
    title: "Parent Communication Platforms",
    description: "AI-enhanced systems that automate parent updates, translate communications, and track student progress reporting."
  },
  {
    icon: Question,
    title: "Socratic Learning Assistants",
    description: "AI tools that guide students through problem-solving using questioning techniques rather than providing direct answers."
  }
]

const higherEdServices = [
  {
    icon: Student,
    title: "Research Assistant AI",
    description: "Advanced AI tools for literature review, data analysis, and research synthesis to accelerate academic research projects."
  },
  {
    icon: ChartBar,
    title: "Student Success Analytics",
    description: "Comprehensive predictive models analyzing retention, graduation likelihood, and career readiness to support student outcomes."
  },
  {
    icon: Certificate,
    title: "Credential Recognition Systems",
    description: "AI-powered platforms for evaluating and recognizing prior learning, micro-credentials, and alternative education pathways."
  },
  {
    icon: Robot,
    title: "Virtual Teaching Assistants",
    description: "Scalable AI TAs that handle routine questions, grade assignments, and provide personalized feedback in large lecture courses."
  },
  {
    icon: Video,
    title: "Lecture Transcription & Summarization",
    description: "Automated systems that transcribe lectures, generate summaries, and create searchable knowledge bases from course content."
  },
  {
    icon: MagnifyingGlass,
    title: "Career Guidance AI",
    description: "Intelligent career counseling systems that match students with opportunities based on skills, interests, and market trends."
  },
  {
    icon: ClipboardText,
    title: "Admissions Optimization",
    description: "AI-driven holistic review systems that identify promising candidates while ensuring fair and equitable admissions processes."
  },
  {
    icon: ChartLineUp,
    title: "Learning Management Intelligence",
    description: "Advanced analytics for LMS platforms that provide insights into engagement patterns, learning outcomes, and course effectiveness."
  },
  {
    icon: Chat,
    title: "Academic Advising Chatbots",
    description: "AI advisors that help students navigate degree requirements, course selection, and graduation planning 24/7."
  },
  {
    icon: FileText,
    title: "Writing Enhancement Tools",
    description: "AI-powered writing assistance for academic papers, theses, and dissertations with style, structure, and citation guidance."
  },
  {
    icon: Brain,
    title: "Personalized Learning Pathways",
    description: "AI systems that create customized degree paths and recommend courses based on career goals and learning preferences."
  },
  {
    icon: Users,
    title: "Peer Matching & Collaboration",
    description: "Intelligent systems that form study groups and project teams based on complementary skills and learning styles."
  },
  {
    icon: Lightbulb,
    title: "Innovation & Patent Analysis",
    description: "AI tools for technology transfer offices to identify commercialization opportunities and analyze patent landscapes."
  },
  {
    icon: ShieldCheck,
    title: "Academic Integrity Monitoring",
    description: "Sophisticated AI detection for plagiarism, contract cheating, and AI-generated content in academic submissions."
  },
  {
    icon: Calendar,
    title: "Campus Resource Optimization",
    description: "AI-driven space utilization, energy management, and resource allocation systems for efficient campus operations."
  },
  {
    icon: ChartBar,
    title: "Enrollment Forecasting",
    description: "Predictive models for enrollment trends, revenue projections, and strategic planning for institutional sustainability."
  }
]

const services = [
  {
    icon: Buildings,
    title: "Corporate AI Solutions",
    description: "Help your company leverage AI to streamline operations, enhance decision-making, and gain competitive advantages in your industry.",
    features: ["Process Automation", "Predictive Analytics", "AI Strategy"]
  },
  {
    icon: GraduationCap,
    title: "Educational AI Integration",
    description: "Empower schools and universities with AI tools that personalize learning, optimize administration, and prepare students for the future.",
    features: ["Learning Platforms", "Student Analytics", "Administrative Tools"],
    clickable: true
  },
  {
    icon: UsersThree,
    title: "Non-Profit & Organizations",
    description: "Enable organizations to maximize impact through AI-driven insights, efficient resource allocation, and enhanced program delivery.",
    features: ["Impact Measurement", "Resource Optimization", "Donor Insights"]
  }
]

const benefits = [
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    description: "Custom AI roadmaps aligned with your goals"
  },
  {
    icon: Brain,
    title: "Implementation Support",
    description: "End-to-end guidance from concept to deployment"
  },
  {
    icon: ChartLineUp,
    title: "Measurable Results",
    description: "Track ROI and continuously optimize performance"
  }
]

export function Services() {
  const [isEducationDialogOpen, setIsEducationDialogOpen] = useState(false)

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored AI consulting for every sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                    service.clickable ? 'cursor-pointer hover:border-primary' : ''
                  }`}
                  onClick={() => service.clickable && setIsEducationDialogOpen(true)}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <service.icon size={28} weight="duotone" className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    {service.clickable && (
                      <p className="text-xs text-primary font-medium mt-4">
                        Click to explore all AI services →
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose EdConnect?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-card border"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <benefit.icon size={24} weight="duotone" className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Dialog open={isEducationDialogOpen} onOpenChange={setIsEducationDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <GraduationCap size={28} weight="duotone" className="text-white" />
              </div>
              Educational AI Services
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              Comprehensive AI solutions tailored for K-12 schools and higher education institutions
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="k12" className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="k12" className="text-base">K-12 Education</TabsTrigger>
              <TabsTrigger value="higher-ed" className="text-base">Higher Education</TabsTrigger>
            </TabsList>

            <TabsContent value="k12" className="mt-6 space-y-4">
              <div className="grid gap-4">
                {k12Services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon size={22} weight="duotone" className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="higher-ed" className="mt-6 space-y-4">
              <div className="grid gap-4">
                {higherEdServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon size={22} weight="duotone" className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Ready to transform education with AI?</strong> Contact us to discuss which solutions best fit your institution's needs.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
