import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Brain, List, X } from "@phosphor-icons/react"
import { useIsMobile } from "@/hooks/use-mobile"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <Brain size={24} weight="duotone" className="text-white" />
            </div>
            <span className="font-bold text-xl">Marwa AI</span>
          </button>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X size={24} /> : <List size={24} />}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="justify-start text-lg"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-[1.02]"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
