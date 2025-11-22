import {
  type Project,
  type InsertProject,
  type BlogPost,
  type InsertBlogPost,
  type Skill,
  type ContactSubmission,
  type InsertContact,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Projects
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Blog Posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Skills
  getAllSkills(): Promise<Skill[]>;
  
  // Contact
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private blogPosts: Map<string, BlogPost>;
  private skills: Skill[];
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.projects = new Map();
    this.blogPosts = new Map();
    this.skills = [];
    this.contactSubmissions = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample Projects
    const sampleProjects: InsertProject[] = [
      {
        title: "Real-Time Data Pipeline for E-Commerce Analytics",
        description: "Built a scalable real-time data pipeline processing 10M+ daily events using Azure Event Hubs and Databricks.",
        overview: "Designed and implemented a comprehensive real-time data processing solution for a major e-commerce platform. The system ingests customer behavior data, transaction events, and inventory updates, transforming them into actionable insights within seconds.",
        challenge: "The client needed to process millions of events per day with sub-second latency while maintaining data quality and handling peak traffic during sales events. The existing batch processing system couldn't provide timely insights for dynamic pricing and inventory management.",
        solution: "Implemented a streaming architecture using Azure Event Hubs for ingestion, Databricks Structured Streaming for processing, and Delta Lake for storage. Added data quality checks, implemented auto-scaling, and created real-time dashboards in Power BI.",
        techStack: ["Azure Event Hubs", "Databricks", "Apache Spark", "Delta Lake", "Python", "Power BI", "Azure Data Factory"],
        thumbnail: "/images/data_engineering_dashboard.png",
        images: [
          "/images/data_engineering_dashboard.png",
          "/images/analytics_dashboard_mockup.png"
        ],
        githubUrl: "https://github.com/sarah-alrahman/ecommerce-pipeline",
        demoUrl: "https://demo.example.com/ecommerce",
        order: 1,
      },
      {
        title: "Enterprise Data Warehouse Migration to Azure",
        description: "Led migration of on-premises data warehouse to Azure Synapse Analytics, reducing costs by 40%.",
        overview: "Orchestrated the complete migration of a legacy on-premises data warehouse to Azure cloud infrastructure. The project involved migrating 15TB of historical data, redesigning ETL processes, and training the team on cloud-native tools.",
        challenge: "The organization faced increasing costs and performance issues with their on-premises infrastructure. They needed a modern, scalable solution that could handle growing data volumes while reducing operational overhead and enabling advanced analytics capabilities.",
        solution: "Designed a cloud-native architecture using Azure Synapse Analytics, implemented automated ETL pipelines with Azure Data Factory, optimized data models for cloud performance, and created a comprehensive data governance framework. Achieved 40% cost reduction and 3x query performance improvement.",
        techStack: ["Azure Synapse Analytics", "Azure Data Factory", "Azure Data Lake Gen2", "SQL", "Python", "Azure DevOps"],
        thumbnail: "/images/data_visualization_network.png",
        images: [
          "/images/data_visualization_network.png",
          "/images/analytics_dashboard_mockup.png"
        ],
        githubUrl: "https://github.com/sarah-alrahman/azure-migration",
        order: 2,
      },
      {
        title: "ML-Powered Customer Churn Prediction Dashboard",
        description: "Developed predictive analytics dashboard combining machine learning with interactive visualizations.",
        overview: "Created an end-to-end machine learning solution to predict customer churn, including data pipeline development, model training, deployment, and an interactive Power BI dashboard for business users.",
        challenge: "The marketing team needed to identify at-risk customers early enough to take preventive action, but existing reports only showed historical churn data. They required real-time predictions accessible to non-technical users.",
        solution: "Built a complete MLOps pipeline using Databricks for model development, Azure ML for deployment, and Power BI for visualization. Implemented automated retraining, A/B testing for models, and created an intuitive interface showing churn probability, key factors, and recommended actions.",
        techStack: ["Databricks", "Azure ML", "Python", "Scikit-learn", "Power BI", "Azure Functions"],
        thumbnail: "/images/analytics_dashboard_mockup.png",
        images: [
          "/images/analytics_dashboard_mockup.png",
          "/images/data_engineering_dashboard.png"
        ],
        demoUrl: "https://demo.example.com/churn",
        order: 3,
      },
    ];

    sampleProjects.forEach(project => {
      const id = randomUUID();
      this.projects.set(id, { ...project, id });
    });

    // Sample Blog Posts
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "Building Resilient Data Pipelines: Lessons from Production",
        content: `After years of building data pipelines, I've learned that resilience isn't just about handling errors—it's about building systems that gracefully degrade, recover automatically, and provide visibility when things go wrong.

One of my most valuable lessons came from a production incident at 2 AM. Our real-time pipeline stopped processing events due to a schema change in the source system. The pipeline crashed, alerts fired, and I spent hours manually recovering the system. This experience taught me several crucial principles.

First, always implement schema evolution handling. Use tools like Delta Lake that support schema evolution, and build validation layers that can handle unexpected changes gracefully. Don't assume your upstream data sources will remain constant.

Second, idempotency is non-negotiable. Design every stage of your pipeline to be safely retryable. When recovering from failures, you should be able to reprocess data without creating duplicates or inconsistent states.

Third, observability must be built in from day one. Implement comprehensive monitoring, detailed logging, and meaningful alerts. Use tools like Azure Monitor and Application Insights to track data quality metrics, processing latencies, and error rates.

Fourth, automate recovery where possible. Dead letter queues, automatic retries with exponential backoff, and circuit breakers can handle many common failures without human intervention.

Finally, test failure scenarios. Don't wait for production to discover how your system behaves under stress. Regularly practice disaster recovery, test your backups, and simulate various failure modes.

Building resilient systems requires upfront investment, but the peace of mind and reduced operational burden are worth every hour spent on proper error handling and recovery mechanisms.`,
        excerpt: "Hard-won lessons about building data pipelines that can handle the unexpected, recover gracefully, and keep running in production.",
        bannerImage: "/images/inspirational_tech_workspace.png",
        tags: ["Data Engineering", "Best Practices", "Azure", "Databricks"],
        category: "Tech",
        readTime: 8,
      },
      {
        title: "Finding Purpose in Data: Integrating Faith with Technical Work",
        content: `As a Data Engineer who is also a person of faith, I've often reflected on how my spiritual values intersect with my technical work. For a long time, I kept these parts of my life separate—my faith was personal, and my work was professional. But over time, I've discovered that integrating these aspects has made me both a better engineer and a more fulfilled person.

My faith teaches me to approach work with intention. Every data pipeline I build, every dashboard I create, represents real people and real decisions. When I'm processing customer data, I'm reminded that behind every row in a database is a human being with needs, preferences, and dignity that deserves respect.

This perspective has shaped how I think about data privacy and ethics. I'm not just complying with GDPR because it's the law—I'm protecting people's information because it's the right thing to do. When designing systems, I ask not just "can we do this?" but "should we do this?"

Integrity in technical work means more than writing bug-free code. It means being honest when timelines are unrealistic, speaking up when a proposed solution cuts corners on data quality, and admitting mistakes rather than hiding them. The pressure to deliver quickly can tempt us to compromise, but maintaining integrity builds trust and leads to better outcomes.

My faith also reminds me that work is about service—to users, to stakeholders, to team members. When I'm debugging a complex issue at midnight, remembering that this work serves others gives it meaning beyond just completing a task. When I'm mentoring junior engineers, I see it as an opportunity to invest in someone's growth and future.

Finally, integrating faith with work means maintaining balance and perspective. Technical work can be all-consuming, but it's not ultimate. Taking time for prayer, rest, and relationships isn't a distraction from work—it's what keeps me grounded and sustainable for the long term.

This integration isn't always easy, and I don't always get it right. But striving to align my work with my values has made my career more meaningful and my faith more practical. I've learned that being fully myself—including my faith identity—in professional spaces doesn't diminish my technical credibility; it enriches my contribution.`,
        excerpt: "Reflections on how faith shapes my approach to data engineering, from ethics and integrity to finding purpose in technical work.",
        bannerImage: "/images/professional_workspace_setup.png",
        tags: ["Faith & Work", "Career", "Reflections", "Ethics"],
        category: "Faith & Work",
        readTime: 6,
      },
      {
        title: "Power BI Best Practices: Creating Dashboards That People Actually Use",
        content: `I've built dozens of Power BI dashboards over the years, and I've learned that technical excellence doesn't guarantee adoption. The best dashboards aren't the ones with the most features—they're the ones people actually use.

Start with the business question, not the data. Before opening Power BI, spend time understanding what decisions your dashboard will support. Talk to stakeholders. Shadow them for a day. Watch how they currently work. A dashboard that answers the right question simply is infinitely more valuable than one that shows impressive but irrelevant metrics.

Less is more. Resist the urge to cram every possible metric into a single view. Focus on the 3-5 key insights that matter most. Use separate pages for detailed analysis, but make the landing page immediately useful.

Design for your audience's technical level. If you're building for executives, prioritize clarity and high-level insights. For analysts, provide drill-through capabilities and detailed filters. Know who will use this daily versus who will glance at it weekly.

Performance matters more than you think. A beautiful dashboard that takes 30 seconds to load won't get used. Optimize your data model, use aggregations, limit visuals per page, and test on realistic data volumes.

Make it mobile-friendly. Many stakeholders check dashboards on their phones. Design with mobile layouts in mind, not as an afterthought.

Provide context and guidance. Include brief explanations of metrics, add tooltips for complex calculations, and use bookmarks to create guided tours. Not everyone has your data expertise.

Finally, iterate based on usage. Use Power BI's usage analytics to see which pages get viewed, which filters get used, and which reports get ignored. Talk to users regularly. The first version is never perfect—the best dashboards evolve based on real-world usage.

Remember: your goal isn't to showcase every Power BI feature. It's to empower people to make better decisions faster. Keep that purpose central, and your dashboards will actually get used.`,
        excerpt: "Practical tips for creating Power BI dashboards that stakeholders will actually use and value, based on years of real-world experience.",
        bannerImage: "/images/analytics_dashboard_mockup.png",
        tags: ["Power BI", "Data Visualization", "Best Practices", "Productivity"],
        category: "Tech",
        readTime: 7,
      },
    ];

    sampleBlogPosts.forEach(post => {
      const id = randomUUID();
      this.blogPosts.set(id, {
        ...post,
        id,
        date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000), // Random date within last 90 days
      });
    });

    // Sample Skills
    this.skills = [
      {
        name: "Data Engineering",
        description: "Building robust data pipelines and ETL processes",
        icon: "database",
        category: "Core",
      },
      {
        name: "Azure & Cloud",
        description: "Expertise in Azure data services and cloud architecture",
        icon: "cloud",
        category: "Core",
      },
      {
        name: "Data Visualization",
        description: "Creating impactful dashboards with Power BI",
        icon: "chart",
        category: "Core",
      },
      {
        name: "Python & SQL",
        description: "Advanced programming and database skills",
        icon: "code",
        category: "Technical",
      },
      {
        name: "Databricks & Spark",
        description: "Big data processing and analytics at scale",
        icon: "sparkles",
        category: "Technical",
      },
      {
        name: "ML Engineering",
        description: "Deploying machine learning models to production",
        icon: "brain",
        category: "Advanced",
      },
    ];
  }

  // Projects
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => a.order - b.order);
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  // Blog Posts
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      date: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  // Skills
  async getAllSkills(): Promise<Skill[]> {
    return this.skills;
  }

  // Contact
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertContact,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
