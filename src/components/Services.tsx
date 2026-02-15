import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Buildings, GraduationCap, UsersThree, Lightbulb, ChartLineUp, Brain } from "@phosphor-icons/react"
import { motion } from "framer-motion"

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
  return (
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
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
  )
}
