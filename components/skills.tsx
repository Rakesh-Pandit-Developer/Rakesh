import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const technicalSkills = [
    { name: "HTML, CSS and JavaScript", level: 90 },
    { name: "Microsoft Office (Word, Excel)", level: 85 },
    { name: "Git and Github", level: 75 },
    { name: "Basic React.js", level: 70 },
    { name: "WordPress Design", level: 65 },
  ]

  const languages = [
    { name: "Nepali", level: 100 },
    { name: "English", level: 80 },
    { name: "Hindi", level: 80 },
  ]

  const tools = ["Google Drive", "Google Doc", "Google Sheet", "Notion", "Replit", "Copilot", "VS Code", "Cloudflare"]

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-4">
                  {languages.map((language) => (
                    <div key={language.name}>
                      <div className="flex justify-between mb-2">
                        <span>{language.name}</span>
                        <span>{language.level}%</span>
                      </div>
                      <Progress value={language.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & Software</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

