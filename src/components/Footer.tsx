import { Separator } from "@/components/ui/separator"
import { Brain } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/10 py-12 border-t">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Brain size={24} weight="duotone" className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">EdConnect</h3>
              <p className="text-sm text-muted-foreground">AI Consulting Excellence</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-muted-foreground">Contact us</p>
            <a 
              href="mailto:info@marwa-ai.us" 
              className="text-accent hover:underline font-medium"
            >
              info@marwa-ai.us
            </a>
            <a 
              href="https://www.marwa-ai.us" 
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              www.marwa-ai.us
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EdConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
