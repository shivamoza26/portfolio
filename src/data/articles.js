export const articles = [
  {
    id: 1,
    title: "Advanced Data Visualization Techniques with Python",
    excerpt: "Exploring cutting-edge visualization libraries and techniques for creating compelling data stories that drive business decisions.",
    content: "In this comprehensive guide, we'll dive deep into advanced visualization techniques using Python libraries like Plotly, Altair, and Bokeh. We'll explore interactive dashboards, real-time data visualization, and how to create compelling narratives with your data.",
    author: "Shivam Oza",
    publishDate: "2024-08-15",
    readTime: "8 min read",
    tags: ["Python", "Data Visualization", "Analytics"],
    image: "https://via.placeholder.com/600x300?text=Data+Visualization",
    featured: true,
    category: "Tutorial"
  },
  {
    id: 2,
    title: "Machine Learning Model Deployment Strategies",
    excerpt: "Best practices for deploying ML models to production, including containerization, monitoring, and scaling strategies.",
    content: "Learn how to take your machine learning models from Jupyter notebooks to production environments. We'll cover Docker containerization, API development with FastAPI, monitoring with MLflow, and scaling strategies for high-traffic applications.",
    author: "Shivam Oza",
    publishDate: "2024-07-28",
    readTime: "12 min read",
    tags: ["Machine Learning", "DevOps", "Docker"],
    image: "https://via.placeholder.com/600x300?text=ML+Deployment",
    featured: false,
    category: "Guide"
  },
  {
    id: 3,
    title: "Building Real-time Analytics Dashboards",
    excerpt: "Creating responsive, real-time dashboards that provide instant insights into your business metrics and KPIs.",
    content: "Discover how to build real-time analytics dashboards using modern web technologies. We'll explore WebSocket connections, streaming data processing, and creating responsive visualizations that update in real-time.",
    author: "Shivam Oza",
    publishDate: "2024-07-10",
    readTime: "10 min read",
    tags: ["Real-time", "Dashboards", "Analytics"],
    image: "https://via.placeholder.com/600x300?text=Real-time+Dashboard",
    featured: true,
    category: "Tutorial"
  },
  {
    id: 4,
    title: "Data Ethics and Responsible AI Practices",
    excerpt: "Understanding the ethical implications of data science and implementing responsible AI practices in your projects.",
    content: "As data scientists, we have a responsibility to ensure our work is ethical and beneficial to society. This article explores key principles of data ethics, bias detection and mitigation, and implementing responsible AI practices.",
    author: "Shivam Oza",
    publishDate: "2024-06-22",
    readTime: "15 min read",
    tags: ["Ethics", "AI", "Responsibility"],
    image: "https://via.placeholder.com/600x300?text=Data+Ethics",
    featured: false,
    category: "Opinion"
  },
  {
    id: 5,
    title: "SQL Performance Optimization Techniques",
    excerpt: "Advanced SQL optimization strategies to improve query performance and database efficiency in large-scale applications.",
    content: "Learn advanced SQL optimization techniques including index strategies, query planning, partitioning, and performance monitoring. We'll cover real-world examples and best practices for optimizing database performance.",
    author: "Shivam Oza",
    publishDate: "2024-06-05",
    readTime: "11 min read",
    tags: ["SQL", "Performance", "Database"],
    image: "https://via.placeholder.com/600x300?text=SQL+Optimization",
    featured: false,
    category: "Technical"
  }
];

export const categories = [
  "All",
  "Tutorial",
  "Guide", 
  "Opinion",
  "Technical"
];

export const featuredArticles = articles.filter(article => article.featured);
