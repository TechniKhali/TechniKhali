import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock } from "lucide-react";
import { PageHead } from "@/components/page-head";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
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

  const featuredPost = posts?.[0];
  const recentPosts = posts?.slice(1);

  return (
    <>
      <PageHead
        title="Blog - Tech, Career & Faith Reflections"
        description="Thoughts on data engineering, career growth, and integrating faith with professional work. Practical insights from real-world experience."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-blog-heading">
          Blog & Reflections
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-description">
          Thoughts on data engineering, career growth, and integrating faith with professional work.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.id}`} data-testid="link-featured-post">
          <Card className="mb-12 overflow-hidden hover-elevate transition-all duration-300" data-testid="card-featured-post">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video md:aspect-auto overflow-hidden bg-muted">
                <img
                  src={featuredPost.bannerImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid="img-featured-banner"
                />
              </div>
              <div className="p-6 md:py-8 flex flex-col justify-center">
                <Badge className="w-fit mb-3" data-testid="badge-featured">Featured</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4 hover:text-primary transition-colors" data-testid="text-featured-title">
                  {featuredPost.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 line-clamp-3" data-testid="text-featured-excerpt">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} min read
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featuredPost.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-featured-tag-${index}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Link>
      )}

      {/* Recent Posts */}
      {recentPosts && recentPosts.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6" data-testid="text-recent-heading">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} data-testid={`link-post-${post.id}`}>
                <Card className="h-full overflow-hidden hover-elevate transition-all duration-300 flex flex-col" data-testid={`card-post-${post.id}`}>
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.bannerImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      data-testid={`img-post-banner-${post.id}`}
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2" variant="outline" data-testid={`badge-category-${post.id}`}>{post.category}</Badge>
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors" data-testid={`text-post-title-${post.id}`}>
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-post-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground w-full">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-tag-${post.id}-${index}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}

      {posts?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blog posts available yet.</p>
        </div>
      )}
    </div>
    </>
  );
}
