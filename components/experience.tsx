import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Web Developer</h3>
                  <p className="text-muted-foreground">Freelancing, Nepal</p>
                </div>
                <Badge>1 year</Badge>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Frontend Focus: Building responsive and intuitive websites using HTML, CSS, and JavaScript.</li>
                <li>Learning-Driven: Actively expanding skills through personal projects and online resources.</li>
                <li>Attention to Detail: Ensuring clean code and pixel-perfect design implementation.</li>
                <li>
                  Collaborative Spirit: Enjoy working with designers and developers to create seamless user experiences.
                </li>
                <li>
                  Beginner Projects: Developed simple websites (e.g., portfolios, landing pages) to practice core
                  concepts.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Administrative Assistant (Data Entry Focus)</h3>
                  <p className="text-muted-foreground">Nepal IT Solutions, Birgunj</p>
                </div>
                <Badge>1 year</Badge>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Managed high-volume data entry operations, maintaining error-free databases for company records.
                </li>
                <li>Generated detailed reports using Microsoft Excel to support decision-making processes.</li>
                <li>
                  Coordinated with cross-functional teams to streamline administrative workflows and improve
                  productivity.
                </li>
                <li>Proofread and formatted official documents, ensuring compliance with organizational standards.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

