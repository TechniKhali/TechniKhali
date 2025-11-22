import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GeometricPattern } from "@/components/geometric-pattern";
import { Sparkles, Heart, Code2, TrendingUp } from "lucide-react";
import { PageHead } from "@/components/page-head";
import headshotImage from "@assets/generated_images/professional_headshot_portrait.png";

export default function About() {
  const journeySteps = [
    {
      year: "2013",
      title: "The Beginning",
      description: "Started my journey in Computer Science, fascinated by how data tells stories.",
    },
    {
      year: "2018",
      title: "Entering the Field",
      description: "Graduated with an MSc in Data Science and began my career as a Junior Data Analyst.",
    },
    {
      year: "2020",
      title: "Leveling Up",
      description: "Transitioned to Data Engineering, discovering my passion for building robust data systems.",
    },
    {
      year: "2022",
      title: "Leadership & Growth",
      description: "Became a Senior Data Engineer, leading projects and mentoring others.",
    },
    {
      year: "Present",
      title: "Purpose-Driven Work",
      description: "Integrating technical excellence with faith-aligned values in everything I do.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Intention",
      description: "Every line of code, every pipeline, every dashboard is built with purpose and care.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Committed to ethical data practices, transparency, and doing what's right.",
    },
    {
      icon: Code2,
      title: "Excellence",
      description: "Pursuing continuous improvement and delivering high-quality technical solutions.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Always learning, always evolving, both professionally and personally.",
    },
  ];

  return (
    <>
      <PageHead
        title="About Me - My Journey in Data Engineering"
        description="Learn about Sarah Al-Rahman's journey in data engineering, professional philosophy, and how faith shapes her approach to technical work."
      />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-heading">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of data, faith, and continuous growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <Avatar className="w-64 h-80 rounded-lg border-4 border-primary/20 shadow-xl">
                <AvatarImage src={headshotImage} alt="Sarah Al-Rahman" className="object-cover" />
                <AvatarFallback className="text-6xl bg-primary/10 rounded-lg">SA</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold" data-testid="text-about-name">
                Sarah Al-Rahman
              </h2>
              <p className="text-lg text-primary font-semibold">
                Data Engineering & Visualisation Specialist
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-about-intro">
                I'm a Data Engineer who believes that technology, when wielded with intention and 
                integrity, can create meaningful change. My journey in data engineering has taught 
                me that behind every dataset is a story waiting to be told, and behind every pipeline 
                is an opportunity to serve something greater than ourselves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in London, I specialize in Azure cloud technologies, Databricks, and creating 
                visualizations that transform complex data into clear, actionable insights. But more 
                than the technical skills, I'm driven by a desire to do work that matters—work that 
                aligns with my values and contributes positively to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GeometricPattern variant="divider" />

      {/* Professional Journey */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="text-journey-heading">
            My Professional Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative flex gap-6 items-start" data-testid={`card-journey-${index}`}>
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0 z-10">
                    {step.year}
                  </div>
                  <Card className="flex-1 hover-elevate transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="md:hidden text-sm text-primary font-bold mb-2">{step.year}</div>
                      <h3 className="text-xl font-semibold mb-2" data-testid={`text-journey-title-${index}`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-journey-description-${index}`}>
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeometricPattern variant="divider" />

      {/* Professional Philosophy */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" data-testid="text-philosophy-heading">
            My Professional Philosophy
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            These core values guide every project I undertake and every decision I make in my career.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2" data-testid={`text-value-title-${index}`}>
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <GeometricPattern variant="divider" />

      {/* Faith & Work Integration */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="relative">
            <GeometricPattern variant="watermark" className="absolute inset-0 text-primary" />
            <Card className="relative border-primary/20 shadow-lg">
              <CardContent className="pt-8 pb-8 px-6 md:px-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary" data-testid="text-faith-heading">
                  Integrating Faith with Work
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p data-testid="text-faith-paragraph-1">
                    For me, data engineering isn't just a career—it's a calling. I believe that the work 
                    we do in the world should reflect our deepest values and contribute to something meaningful. 
                    Whether I'm optimizing a data pipeline or creating a visualization, I approach each task 
                    as an opportunity to serve with excellence and integrity.
                  </p>
                  <p data-testid="text-faith-paragraph-2">
                    My faith teaches me to be mindful of the impact of my work, to treat data with respect 
                    (knowing it often represents real people and real lives), and to always strive for truth 
                    and clarity. In a field that can sometimes prioritize speed over thoughtfulness, I'm 
                    committed to taking the time to do things right.
                  </p>
                  <p data-testid="text-faith-paragraph-3">
                    This integration of faith and profession guides me to be not just a better engineer, 
                    but a better colleague, mentor, and member of my community. It reminds me that success 
                    isn't just measured in technical achievements, but in the positive difference we make 
                    in the lives of others.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
