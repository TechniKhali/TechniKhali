import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Projects table
export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  overview: text("overview").notNull(),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  techStack: text("tech_stack").array().notNull(),
  thumbnail: text("thumbnail").notNull(),
  images: text("images").array().notNull(),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  order: integer("order").notNull().default(0),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Blog posts table
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  bannerImage: text("banner_image").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  tags: text("tags").array().notNull(),
  category: text("category").notNull(),
  readTime: integer("read_time").notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  date: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

// Skills (static data, no table needed)
export const skillSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  category: z.string(),
});

export type Skill = z.infer<typeof skillSchema>;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
