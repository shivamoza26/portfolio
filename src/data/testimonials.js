export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "VP of Analytics",
    company: "TechCorp Solutions",
    image: "https://via.placeholder.com/80x80?text=SJ",
    content: "Shivam's analytical skills and attention to detail are exceptional. He transformed our data infrastructure and delivered insights that directly contributed to a 25% increase in revenue. His ability to communicate complex findings to stakeholders is remarkable.",
    rating: 5,
    project: "Revenue Analytics Dashboard",
    date: "2024-01-15",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Product Manager",
    company: "Analytics Pro Inc.",
    image: "https://via.placeholder.com/80x80?text=MC",
    content: "Working with Shivam was a game-changer for our product analytics. His machine learning models helped us reduce customer churn by 30%. He's not just technically proficient but also understands business needs perfectly.",
    rating: 5,
    project: "Customer Churn Prediction Model",
    date: "2023-11-20",
    linkedin: "https://linkedin.com/in/michael-chen",
    featured: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Data Engineering Lead",
    company: "StartupXYZ",
    image: "https://via.placeholder.com/80x80?text=ER",
    content: "Shivam's expertise in data pipeline optimization saved us countless hours and resources. His fraud detection system achieved 95% accuracy, which exceeded our expectations. He's a true professional with excellent problem-solving skills.",
    rating: 5,
    project: "Fraud Detection System",
    date: "2023-08-10",
    linkedin: "https://linkedin.com/in/emily-rodriguez",
    featured: false
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "DataFlow Systems",
    image: "https://via.placeholder.com/80x80?text=DP",
    content: "Shivam demonstrated exceptional leadership in our analytics transformation project. His technical knowledge combined with project management skills made him an invaluable asset to our team. Highly recommended!",
    rating: 5,
    project: "Analytics Infrastructure Overhaul",
    date: "2023-06-05",
    linkedin: "https://linkedin.com/in/david-park",
    featured: true
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Global Retail Corp",
    image: "https://via.placeholder.com/80x80?text=LT",
    content: "The customer segmentation analysis Shivam provided revolutionized our marketing strategy. We saw a 45% improvement in campaign ROI within the first quarter. His insights are always actionable and data-driven.",
    rating: 5,
    project: "Customer Segmentation Analysis",
    date: "2023-04-18",
    linkedin: "https://linkedin.com/in/lisa-thompson",
    featured: false
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Senior Data Scientist",
    company: "AI Innovations Lab",
    image: "https://via.placeholder.com/80x80?text=RK",
    content: "Shivam's mentorship during my transition into data science was invaluable. His deep understanding of both technical concepts and industry best practices helped accelerate my learning curve significantly.",
    rating: 5,
    project: "Data Science Mentorship",
    date: "2023-03-22",
    linkedin: "https://linkedin.com/in/robert-kim",
    featured: false
  }
];

export const stats = {
  totalTestimonials: testimonials.length,
  averageRating: 5.0,
  featuredCount: testimonials.filter(t => t.featured).length,
  companiesWorkedWith: [...new Set(testimonials.map(t => t.company))].length
};
