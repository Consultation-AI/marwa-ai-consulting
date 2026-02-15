import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, oklch(0.45 0.15 290 / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, oklch(0.70 0.15 200 / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, oklch(0.85 0.08 290 / 0.05) 0%, transparent 70%)
          `
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Brain weight="duotone" className="text-primary" />
            <span className="text-sm font-medium">AI Consulting Excellence</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight">
            Transform Your Organization with AI Innovation
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Expert consulting services helping companies, organizations, and schools implement cutting-edge AI solutions that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-[1.02] shadow-lg shadow-accent/20"
              onClick={scrollToContact}
            >
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
