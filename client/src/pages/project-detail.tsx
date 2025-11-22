import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { GeometricPattern } from "@/components/geometric-pattern";
import { PageHead } from "@/components/page-head";
import type { Project } from "@shared/schema";

export default function ProjectDetail() {
  const [, params] = useRoute("/portfolio/:id");
  const projectId = params?.id;

  const { data: project, isLoading } = useQuery<Project>({
    queryKey: ["/api/projects", projectId],
    enabled: !!projectId,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton className="h-96 w-full rounded-lg mb-8" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link href="/portfolio">
          <Button data-testid="button-back-to-portfolio">Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHead
        title={project?.title || "Project Details"}
        description={project?.description || "View detailed information about this data engineering project."}
        ogImage={project?.thumbnail}
      />
      <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/20 to-background">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio">
              <Button variant="ghost" size="sm" className="mb-4 backdrop-blur-sm" data-testid="button-back">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-project-title">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="backdrop-blur-sm" data-testid={`badge-tech-${index}`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-testid="link-github">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" data-testid="link-demo">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-4" data-testid="text-overview-heading">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-overview">
              {project.overview}
            </p>
          </section>

          <GeometricPattern variant="divider" />

          {/* Challenge & Solution */}
          <section className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-challenge-heading">
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-challenge">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-solution-heading">
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-solution">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
          </section>

          <GeometricPattern variant="divider" />

          {/* Tools & Technologies */}
          <section>
            <h2 className="text-3xl font-bold mb-6" data-testid="text-tools-heading">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.techStack.map((tech, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <p className="font-medium" data-testid={`text-tech-${index}`}>{tech}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          {project.images && project.images.length > 0 && (
            <>
              <GeometricPattern variant="divider" />
              <section>
                <h2 className="text-3xl font-bold mb-6" data-testid="text-screenshots-heading">Project Screenshots</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border bg-card">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto"
                        data-testid={`img-screenshot-${index}`}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
