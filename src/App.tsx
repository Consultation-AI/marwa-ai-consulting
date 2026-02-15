import { Toaster } from "@/components/ui/sonner"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

function App() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <main>
                <Hero />
                <Services />
                <ContactForm />
            </main>
            <Footer />
            <Toaster />
        </div>
    )
}

export default App