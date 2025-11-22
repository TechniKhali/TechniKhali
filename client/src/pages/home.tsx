import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Database, LineChart, Cloud, Sparkles, Code2, BarChart3 } from "lucide-react";
import { GeometricPattern } from "@/components/geometric-pattern";
import { PageHead } from "@/components/page-head";
import headshotImage from "@assets/generated_images/professional_headshot_portrait.png";

export default function Home() {
  const skills = [
    {
      icon: Database,
      name: "Data Engineering",
      description: "Building robust data pipelines and ETL processes with Azure and Databricks",
    },
    {
      icon: LineChart,
      name: "Data Visualization",
      description: "Creating insightful dashboards and visual analytics for data-driven decisions",
    },
    {
      icon: Cloud,
      name: "Cloud Architecture",
      description: "Designing scalable cloud solutions on Azure with best practices",
    },
    {
      icon: Sparkles,
      name: "Data Quality",
      description: "Implementing data governance and ensuring data integrity across systems",
    },
    {
      icon: Code2,
      name: "Python & SQL",
      description: "Expert in Python, SQL, and modern data engineering frameworks",
    },
    {
      icon: BarChart3,
      name: "Analytics",
      description: "Transforming raw data into actionable business insights",
    },
  ];

  return (
    <>
      <PageHead
        title="Home - Data Engineering & Visualisation Specialist"
        description="Sarah Al-Rahman is a Data Engineer specializing in Azure, Databricks, and data visualization. Using data with intention, clarity, and integrity."
      />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-primary/20 via-primary/10 to-background overflow-hidden">
        <GeometricPattern variant="watermark" className="absolute inset-0 text-primary" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Avatar */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20 shadow-xl">
                <AvatarImage src={headshotImage} alt="Profile photo" />
                <AvatarFallback className="text-6xl bg-primary/10">DE</AvatarFallback>
              </Avatar>
            </div>

            {/* Right: Content */}
            <div className="text-center md:text-left order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-hero-name">
                Sarah Al-Rahman
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4" data-testid="text-hero-title">
                Data Engineering & Visualisation Specialist
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl" data-testid="text-hero-tagline">
                Using data with intention, clarity, and integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/portfolio">
                  <Button size="lg" className="min-w-[160px]" data-testid="button-view-work">
                    View My Work
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="min-w-[160px] backdrop-blur-sm" data-testid="button-download-cv">
                  Download CV
                </Button>
                <Link href="/blog">
                  <Button size="lg" variant="secondary" className="min-w-[160px]" data-testid="button-read-blog">
                    Read My Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <GeometricPattern variant="divider" />
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-intro-heading">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
              I'm a passionate Data Engineer with expertise in building scalable data solutions and creating 
              meaningful visualizations. With a focus on Azure, Databricks, and modern data engineering practices, 
              I help organizations transform their data into actionable insights. My approach combines technical 
              excellence with a commitment to integrity and purposeful work.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-heading">
              Core Competencies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver robust data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-skill-${index}`}>
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? I'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-get-in-touch">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
