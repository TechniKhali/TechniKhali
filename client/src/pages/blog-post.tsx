import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { GeometricPattern } from "@/components/geometric-pattern";
import { PageHead } from "@/components/page-head";
import type { BlogPost } from "@shared/schema";

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ["/api/blog", postId],
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton className="h-96 w-full rounded-lg mb-8" />
        <div className="max-w-3xl mx-auto">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHead
        title={post?.title || "Blog Post"}
        description={post?.excerpt || "Read this blog post about data engineering, career, and professional growth."}
        ogImage={post?.bannerImage}
      />
      <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={post.bannerImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="mb-4 backdrop-blur-sm" data-testid="button-back">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <Badge className="mb-3 backdrop-blur-sm" data-testid="badge-category">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl" data-testid="text-post-title">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 backdrop-blur-sm bg-background/50 px-3 py-1.5 rounded-md">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 backdrop-blur-sm bg-background/50 px-3 py-1.5 rounded-md">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" data-testid={`badge-tag-${index}`}>
                {tag}
              </Badge>
            ))}
          </div>

          <GeometricPattern variant="divider" />

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground"
            data-testid="text-content"
          >
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <GeometricPattern variant="divider" />

          {/* Related Tags */}
          <div className="mt-12 p-6 bg-card/50 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Topics Covered</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link key={index} href={`/blog?tag=${tag}`}>
                  <Badge variant="outline" className="hover-elevate cursor-pointer">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
