"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone, Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "Project Management",
    "Agile/Scrum",
    "Risk Management",
    "Stakeholder Management",
    "Budget Management",
    "Team Leadership",
    "Process Improvement",
    "Quality Assurance",
    "Microsoft Project",
    "Jira",
    "Confluence",
    "Azure DevOps",
    "Power BI",
    "Excel",
  ]

  const experience = [
    {
      title: "Senior IT Project Manager",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Leading cross-functional teams in delivering complex IT projects, managing budgets up to $2M, and implementing agile methodologies across the organization.",
    },
    {
      title: "IT Project Manager",
      company: "Digital Innovations Corp",
      period: "2017 - 2020",
      description:
        "Managed multiple concurrent projects, improved delivery timelines by 30%, and established PMO best practices for the IT department.",
    },
    {
      title: "Project Coordinator",
      company: "Enterprise Systems Ltd",
      period: "2015 - 2017",
      description:
        "Coordinated project activities, maintained project documentation, and supported senior project managers in delivering successful outcomes.",
    },
  ]

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      description:
        "Led the migration of legacy systems to cloud infrastructure, reducing operational costs by 40% and improving system reliability.",
      tech: ["Azure", "DevOps", "Agile"],
      impact: "40% cost reduction",
    },
    {
      title: "Digital Transformation Initiative",
      description:
        "Managed organization-wide digital transformation project affecting 500+ employees across multiple departments.",
      tech: ["Change Management", "Training", "Process Optimization"],
      impact: "500+ employees impacted",
    },
    {
      title: "Security Compliance Project",
      description:
        "Implemented comprehensive security compliance framework ensuring adherence to industry standards and regulations.",
      tech: ["Security", "Compliance", "Risk Management"],
      impact: "100% compliance achieved",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200">
            DM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-slate-600 hover:text-blue-600 transition-colors duration-200 ${activeSection === item.id ? "text-blue-600 font-medium" : ""
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-6 space-y-4 animate-in slide-in-from-top duration-200">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-slate-600 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
                Dianne
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mendola
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Senior IT Project Manager with 8+ years of experience delivering complex technology solutions.
                Passionate about driving digital transformation and leading high-performing teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-50 hover:border-blue-300 transform hover:scale-105 transition-all duration-200 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="relative z-10 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/yanyan.jpg"
                  alt="Dianne Mendola"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              I'm a results-driven IT Project Manager with a proven track record of delivering complex technology
              projects on time and within budget. My expertise spans across various industries, with a focus on digital
              transformation, cloud migration, and process optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700 delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1 px-3 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">New York, NY</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-200">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">dianne.mendola@email.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-200">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/pdgmendola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:dianne.mendola@email.com"
                  className="p-3 bg-slate-600 text-white rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience</h2>
            <p className="text-lg text-slate-600">A journey of continuous growth and successful project deliveries</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <CardTitle className="text-xl text-slate-900 hover:text-blue-600 transition-colors duration-200">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Key Projects</h2>
            <p className="text-lg text-slate-600">Showcasing impactful projects that drove business transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-md group-hover:border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs hover:bg-blue-100 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {project.impact}
                      </span>
                      <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to drive your next IT project to success? Let's discuss how I can help transform your technology
              initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent hover:scale-105 transition-all duration-200"
                onClick={() => window.open("https://www.linkedin.com/in/pdgmendola/", "_blank")}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-center">
        <p className="text-slate-400">© 2024 Dianne Mendola. All rights reserved.</p>
      </footer>
    </div>
  )
}
