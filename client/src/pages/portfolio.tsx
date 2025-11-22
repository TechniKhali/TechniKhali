import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/page-head";
import type { Project } from "@shared/schema";

export default function Portfolio() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-48 w-full rounded-md mb-4" />
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHead
        title="Portfolio - Data Engineering Projects"
        description="Explore my data engineering and visualization projects, showcasing real-world solutions using Azure, Databricks, and modern data stack technologies."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-portfolio-heading">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-description">
          Explore my data engineering and visualization projects, showcasing real-world solutions
          and technical expertise.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover-elevate transition-all duration-300 flex flex-col"
            data-testid={`card-project-${project.id}`}
          >
            <Link href={`/portfolio/${project.id}`} className="block" data-testid={`link-project-image-${project.id}`}>
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid={`img-project-thumbnail-${project.id}`}
                />
              </div>
            </Link>
            
            <CardHeader>
              <Link href={`/portfolio/${project.id}`} data-testid={`link-project-title-${project.id}`}>
                <CardTitle className="hover:text-primary transition-colors line-clamp-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>
              </Link>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4" data-testid={`text-project-description-${project.id}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-tech-${project.id}-${index}`}>
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-tech-more-${project.id}`}>
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4 mr-1.5" />
                    Code
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-demo-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Demo
                  </a>
                </Button>
              )}
              <Link href={`/portfolio/${project.id}`}>
                <Button size="sm" className="flex-1" data-testid={`button-view-details-${project.id}`}>
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {projects?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects available yet.</p>
        </div>
      )}
    </div>
    </>
  );
}
