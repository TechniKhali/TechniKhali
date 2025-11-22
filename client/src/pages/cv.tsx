import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Linkedin, Award, Briefcase, GraduationCap } from "lucide-react";
import { GeometricPattern } from "@/components/geometric-pattern";
import { PageHead } from "@/components/page-head";
import headshotImage from "@assets/generated_images/professional_headshot_portrait.png";

export default function CV() {
  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 95 },
    { name: "Azure", level: 90 },
    { name: "Databricks", level: 85 },
    { name: "Power BI", level: 90 },
    { name: "Apache Spark", level: 80 },
  ];

  const certifications = [
    "Microsoft Certified: Azure Data Engineer Associate",
    "Databricks Certified Data Engineer Professional",
    "Microsoft Certified: Azure Fundamentals",
    "AWS Certified Cloud Practitioner",
  ];

  const experience = [
    {
      title: "Senior Data Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Led migration of legacy data systems to Azure cloud infrastructure",
        "Designed and implemented real-time data pipelines processing 10M+ events daily",
        "Mentored junior engineers on best practices in data engineering",
        "Reduced data processing costs by 40% through optimization strategies",
      ],
    },
    {
      title: "Data Engineer",
      company: "Analytics Corp",
      period: "2020 - 2022",
      location: "London, UK",
      responsibilities: [
        "Developed ETL pipelines using Azure Data Factory and Databricks",
        "Created interactive dashboards in Power BI for executive reporting",
        "Implemented data quality frameworks ensuring 99.9% data accuracy",
        "Collaborated with data scientists to deploy ML models to production",
      ],
    },
    {
      title: "Junior Data Analyst",
      company: "Business Intelligence Ltd",
      period: "2018 - 2020",
      location: "Manchester, UK",
      responsibilities: [
        "Analyzed business data to identify trends and opportunities",
        "Built SQL queries and reports for stakeholder decision-making",
        "Automated manual reporting processes, saving 20 hours per week",
        "Developed data visualization skills using Tableau and Power BI",
      ],
    },
  ];

  const education = [
    {
      degree: "MSc in Data Science",
      institution: "University of Manchester",
      period: "2016 - 2018",
      achievement: "Distinction",
    },
    {
      degree: "BSc in Computer Science",
      institution: "University of Leeds",
      period: "2013 - 2016",
      achievement: "First Class Honours",
    },
  ];

  return (
    <>
      <PageHead
        title="CV - Professional Experience & Education"
        description="Sarah Al-Rahman's curriculum vitae: 5+ years of Data Engineering experience with Azure, Databricks, certifications, and educational background."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-cv-heading">
          Curriculum Vitae
        </h1>
        <Button size="lg" data-testid="button-download-cv">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <GeometricPattern variant="divider" />

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Profile */}
          <Card>
            <CardContent className="pt-6 text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4 border-2 border-primary/20">
                <AvatarImage src={headshotImage} alt="Profile photo" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold mb-2" data-testid="text-cv-name">Sarah Al-Rahman</h2>
              <p className="text-muted-foreground mb-4" data-testid="text-cv-title">
                Data Engineering & Visualisation Specialist
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>sarah@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Linkedin className="h-4 w-4" />
                  <span>linkedin.com/in/sarah</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium" data-testid={`text-skill-${index}`}>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                      data-testid={`progress-skill-${index}`}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-sm" data-testid={`text-certification-${index}`}>
                    <Badge variant="secondary" className="mb-1">✓</Badge>
                    <span className="ml-2">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-summary">
                Accomplished Data Engineer with 5+ years of experience in designing and implementing 
                scalable data solutions. Expert in Azure cloud technologies, Databricks, and modern 
                data engineering practices. Passionate about transforming complex data into actionable 
                insights through elegant visualizations. Committed to delivering high-quality work with 
                integrity, clarity, and purpose. Proven track record of optimizing data workflows and 
                mentoring team members.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} data-testid={`card-experience-${index}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl" data-testid={`text-job-title-${index}`}>{job.title}</CardTitle>
                        <p className="text-primary font-medium" data-testid={`text-company-${index}`}>{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p data-testid={`text-period-${index}`}>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="leading-relaxed" data-testid={`text-responsibility-${index}-${idx}`}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} data-testid={`card-education-${index}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg" data-testid={`text-degree-${index}`}>{edu.degree}</CardTitle>
                        <p className="text-muted-foreground" data-testid={`text-institution-${index}`}>{edu.institution}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p data-testid={`text-edu-period-${index}`}>{edu.period}</p>
                        <Badge variant="secondary" className="mt-1">{edu.achievement}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
