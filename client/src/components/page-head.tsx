import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
  ogImage?: string;
}

export function PageHead({ title, description, ogImage }: PageHeadProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Update document title
    document.title = `${title} | Sarah Al-Rahman - Data Engineer`;

    // Helper to update or create meta tag
    const updateMeta = (selector: string, attrs: Record<string, string>) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        Object.entries(attrs).forEach(([key, value]) => {
          if (key !== 'content') {
            tag!.setAttribute(key, value);
          }
        });
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", attrs.content);
      return tag;
    };

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Update meta description
    updateMeta('meta[name="description"]', {
      name: "description",
      content: description
    });

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];

    if (ogImage) {
      ogTags.push({ property: "og:image", content: window.location.origin + ogImage });
    } else {
      // Remove og:image if none provided
      const existingOgImage = document.querySelector('meta[property="og:image"]');
      if (existingOgImage) {
        existingOgImage.remove();
      }
    }

    ogTags.forEach(({ property, content }) => {
      updateMeta(`meta[property="${property}"]`, { property, content });
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];

    if (ogImage) {
      twitterTags.push({ name: "twitter:image", content: window.location.origin + ogImage });
    } else {
      // Remove twitter:image if none provided
      const existingTwitterImage = document.querySelector('meta[name="twitter:image"]');
      if (existingTwitterImage) {
        existingTwitterImage.remove();
      }
    }

    twitterTags.forEach(({ name, content }) => {
      updateMeta(`meta[name="${name}"]`, { name, content });
    });
  }, [title, description, ogImage]);

  return null;
}
