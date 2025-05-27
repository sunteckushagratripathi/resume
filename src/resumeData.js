// Resume data - Kushagra Tripathi's Resume Content
export const resumeData = {
  personalInfo: {
    name: "Kushagra Tripathi",
    title: "Software Developer II",
    email: "kushagratripathi457@gmail.com",
    phone: "9149357597",
    location: "Trivandrum, Kerala",
    linkedin: "linkedin.com/in/kushagra-tripathi-78b0a9158",
    github: "github.com/kushagratripathi", // Add your GitHub if you have one
    website: "",
    profileImage: "/profile-image.jpg" // Add your image to public folder with this name
  },
  
  summary: `An experienced Software Developer with 5 years in the Fin-Tech and BFSI sectors, specializing in designing and optimizing high-performance systems. Proficient in Java 21, Spring Boot, Microservices, Kafka, Redis, SQL/NoSQL, and TestNG. Skilled in optimizing APIs, reducing latency, and resolving production issues. Hands-on with AI and LLMs, including fine-tuning and deploying models locally. Developed solutions using RAG techniques and LLMs to convert pseudocode into Java code. Successfully led projects and onsite deployments in Germany and Dubai.`,
  
  experience: [
    {
      company: "SunTec Business Solutions, Bangalore",
      position: "Analyst",
      duration: "August 2023 – Present",
      location: "Bangalore, India",
      responsibilities: [
        "XDM Platform Development: Designed and developed a multi-tenant data management layer for Telecom and Banking with polyglot persistence, Redis caching, and scalable architecture for high-performance data processing",
        "RAG AI based model Code generation: Developed AI solutions using RAG techniques and LLMs for automated code generation",
        "Redis Cache Optimization: Implemented Redis caching with asynchronous updates and bloom filters, achieving 3,000 TPS while ensuring data consistency, scalability, and low-latency access",
        "Platform Code Generation: Architected a Java-based code generation platform using Apache Velocity, automating the creation of DAO, POJO, Service classes, and DDL to enable a no-code/low-code development environment",
        "Performance Engineering: Optimized database queries using DynaTrace, reducing API response times from 10 minutes to milliseconds, significantly enhancing system efficiency and user experience",
        "Fintech Transaction Acceleration: Designed high-throughput APIs and Kafka streaming architecture, improving transaction speed by 70% and reducing errors by 15% in a fintech domain application",
        "Technical Leadership & Delivery: Led a 7-member team, streamlining project execution and boosting delivery efficiency by 25%, ensuring 100% on-time completion with well-structured design and development practices"
      ]
    },
    {
      company: "SunTec Business Solutions, Bangalore",
      position: "Software Engineer",
      duration: "October 2021 – August 2023",
      location: "Bangalore, India",
      responsibilities: [
        "Rule Engine Implementation: Designed and developed a custom rule engine using Java 8, resulting in a 30% reduction in processing time and a 40% decrease in maintenance efforts",
        "Production-Level Expertise: Successfully resolved over 50+ production-level issues, specializing in troubleshooting and defect analysis to ensure smooth operations with a 99.9% system uptime",
        "Kafka Streams Efficiency: Developed an exception handling framework for Kafka Streams, increasing data processing efficiency by 200%",
        "Microservices Development: Key contributor in developing backend service APIs and Hibernate using Agile methodologies, consistently meeting Scrum deadlines while ensuring clean code and timely delivery"
      ]
    },
    {
      company: "SunTec Business Solutions, Bangalore",
      position: "Associate Software Engineer",
      duration: "October 2020 – October 2021",
      location: "Bangalore, India",
      responsibilities: [
        "API Development: Integrated REST APIs and utilized Spring Boot with Java 8 to design and develop scalable microservices, creating API functions tailored for business scenarios in the BFSI sector",
        "Automation Tool Development: Engineered an automation tool for generating logs in Java APIs, allowing developers to focus more on business logic by reducing manual effort",
        "Reliable Testing: Conducted TestNG testing, ensuring 99% reliability and robustness in solutions"
      ]
    },
    {
      company: "Indian Institute of Technology, Kanpur",
      position: "Summer Intern",
      duration: "May 2019 – July 2019",
      location: "Kanpur, India",
      responsibilities: [
        "Network Monitoring Tool: Developed a network monitoring tool to analyze packets using shell scripting with commands like tcpdump, grep, and cut"
      ]
    },
    {
      company: "Lohia Corp Ltd., Kanpur",
      position: "Summer Intern",
      duration: "May 2018 – July 2018",
      location: "Kanpur, India",
      responsibilities: [
        "ChatBot Development: Created a ChatBot named 'LCL_Connect' using Microsoft Bot Framework. The Chatbot is currently live in LohiaCorp Ltd, providing employee-specific information using Microsoft Azure cloud platform"
      ]
    }
  ],
  
  skills: {
    "Programming Languages & Frameworks": ["Java 21", "Java 8", "Spring Boot", "Microservices", "Apache Kafka", "Hibernate", "GRPC", "Apache Velocity", "Python"],
    "LLM Models": ["Llama 3.2B", "CodeLlama 7B", "Salesforce Java Model"],
    "Cache & Performance": ["Redis", "DynaTrace (Performance Analysis)"],
    "DevOps & Containerization": ["Docker", "Kubernetes"],
    "Frontend Technologies": ["HTML", "CSS"],
    "Databases": ["Oracle", "PostgreSQL", "MariaDB", "MS SQL", "MongoDB"],
    "Testing": ["TestNG"],
    "Cloud Technologies": ["Microsoft Azure"],
    "Build/Versioning Tools": ["Maven", "Git", "Jira"],
    "Soft Skills": ["Communication", "Team Collaboration", "Technical Leadership"]
  },
  
  education: [
    {
      degree: "BTech in Computer Science",
      school: "Ajay Kumar Garg Engineering College, Ghaziabad",
      year: "2016 – 2020",
      location: "Ghaziabad, India",
      gpa: "8.5/10"
    },
    {
      degree: "Intermediate",
      school: "Delhi Public School, Kanpur",
      year: "2015 – 2016",
      location: "Kanpur, India",
      gpa: "91.6%"
    }
  ],
  
  certifications: [
    {
      name: "Extra Miler Award for Performance Tuning",
      issuer: "SunTec Business Solutions",
      year: "2024"
    },
    {
      name: "Lakshya Award",
      issuer: "SunTec Business Solutions",
      year: "2022-2023"
    },
    {
      name: "Leadership Training (LEAD)",
      issuer: "SunTec Business Solutions",
      year: "2023"
    },
    {
      name: "CTO Honor List and Client Honor List Award",
      issuer: "SunTec Business Solutions",
      year: "2022"
    }
  ],
  
  projects: [
    {
      name: "XDM Platform - Multi-tenant Data Management",
      description: "Designed and developed a comprehensive multi-tenant data management layer for Telecom and Banking sectors with polyglot persistence and scalable architecture",
      technologies: ["Java 21", "Spring Boot", "Redis", "Microservices", "Apache Kafka", "Oracle", "PostgreSQL"],
      highlights: [
        "Achieved 3,000 TPS with Redis caching and bloom filters",
        "Implemented polyglot persistence for optimal data storage",
        "Ensured data consistency and low-latency access across tenants"
      ]
    },
    {
      name: "RAG AI Code Generation Platform",
      description: "Developed an AI-powered code generation solution using RAG techniques and LLMs to convert pseudocode into Java code",
      technologies: ["Java", "LLMs", "Llama 3.2B", "CodeLlama 7B", "RAG", "Apache Velocity"],
      highlights: [
        "Automated DAO, POJO, and Service class generation",
        "Enabled no-code/low-code development environment",
        "Significantly reduced development time and manual coding effort"
      ]
    },
    {
      name: "High-Performance Fintech APIs",
      description: "Architected and developed high-throughput APIs with Kafka streaming for fintech transaction processing",
      technologies: ["Java 8", "Spring Boot", "Apache Kafka", "Redis", "Microservices"],
      highlights: [
        "Improved transaction speed by 70%",
        "Reduced errors by 15% in production environment",
        "Handled high-volume financial transactions with reliability"
      ]
    },
    {
      name: "Custom Rule Engine",
      description: "Designed and implemented a custom rule engine for business logic processing in BFSI applications",
      technologies: ["Java 8", "Spring Boot", "Hibernate", "Custom Rule Engine"],
      highlights: [
        "Reduced processing time by 30%",
        "Decreased maintenance efforts by 40%",
        "Improved system flexibility and configurability"
      ]
    }
  ],

  accomplishments: [
    "2024: Extra Miler Award for Performance tuning in SunTec product",
    "2022-2023: Received Lakshya Award at SunTec",
    "2023: Completed leadership training (LEAD) at SunTec",
    "2022: Winner of CTO Honor List and Client Honor List Award, Hackathon Winner at SunTec",
    "October 2018: Conducted workshop on Java 8 for 950 first-year students in College"
  ]
};

export default resumeData;
