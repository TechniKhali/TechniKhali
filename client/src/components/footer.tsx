import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";
import { GeometricPattern } from "./geometric-pattern";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/cv", label: "CV" },
    { path: "/about", label: "About" },
  ];

  const blogCategories = [
    "Career",
    "Tech",
    "Faith & Work",
    "Productivity",
    "Reflections",
  ];

  return (
    <footer className="border-t bg-card/50 mt-20">
      <div className="relative">
        <GeometricPattern className="absolute top-0 left-0 w-full h-px opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" data-testid="text-footer-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" data-testid="text-footer-categories">Blog Categories</h3>
            <ul className="space-y-2">
              {blogCategories.map((category) => (
                <li key={category}>
                  <Link href={`/blog?category=${category}`} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" data-testid="text-footer-connect">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Data Engineering Portfolio. Built with intention, clarity, and integrity.
          </p>
        </div>
      </div>
    </footer>
  );
}
