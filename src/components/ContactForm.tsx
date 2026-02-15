import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Envelope, WarningCircle } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  organization: string
  organizationType: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    organizationType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isFormValid = () => {
    return formData.name.trim() !== "" &&
           formData.email.trim() !== "" &&
           formData.email.includes("@") &&
           formData.organizationType !== "" &&
           formData.message.trim() !== ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isFormValid()) {
      toast.error("Please fill out all required fields correctly")
      return
    }

    setIsSubmitting(true)

    const emailBody = `
New Consultation Inquiry from Marwa AI Website

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || "Not specified"}
Organization Type: ${formData.organizationType}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:info@marwa-ai.us?subject=New Consultation Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`

    try {
      window.location.href = mailtoLink
      
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        toast.success("Thank you! Your inquiry has been sent.", {
          description: "We'll get back to you within 24 hours."
        })
        
        setFormData({
          name: "",
          email: "",
          organization: "",
          organizationType: "",
          message: ""
        })
      }, 1000)
    } catch (error) {
      setIsSubmitting(false)
      toast.error("Unable to send inquiry", {
        description: "Please email us directly at info@marwa-ai.us"
      })
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setIsSubmitted(false)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Let's Start Your AI Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your needs and we'll show you how AI can transform your organization
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Envelope size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Fill out the form below and we'll be in touch soon</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="transition-all focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="transition-all focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      placeholder="Acme Corp"
                      value={formData.organization}
                      onChange={(e) => handleChange("organization", e.target.value)}
                      className="transition-all focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizationType">Organization Type *</Label>
                    <Select
                      value={formData.organizationType}
                      onValueChange={(value) => handleChange("organizationType", value)}
                      required
                    >
                      <SelectTrigger id="organizationType" className="transition-all focus:ring-2 focus:ring-accent">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="company">Company</SelectItem>
                        <SelectItem value="school">School / University</SelectItem>
                        <SelectItem value="nonprofit">Non-Profit Organization</SelectItem>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Needs *</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe how you'd like to implement AI in your organization..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={6}
                    className="resize-none transition-all focus:ring-2 focus:ring-accent"
                  />
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                  >
                    <CheckCircle size={24} weight="fill" />
                    <span className="font-medium">Message sent successfully! We'll be in touch soon.</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  {!isSubmitting && <CheckCircle className="ml-2" />}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Or email us directly at{" "}
                  <a href="mailto:info@marwa-ai.us" className="text-accent hover:underline font-medium">
                    info@marwa-ai.us
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
