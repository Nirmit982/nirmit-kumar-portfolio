import { JourneyStage, SkillGroup, Certification, OtherProject } from "@/types";

export const profile = {
  name: "Nirmit Kumar",
  email: "nirmitkumar371@gmail.com",
  github: "https://github.com/Nirmit982",
  leetcode: "https://leetcode.com/u/nirmit115/",
  linkedin: "https://linkedin.com/in/nirmit-kumar-820946253",
};

export const journeyStages: JourneyStage[] = [
  { index: "01", title: "Understand", description: "Break the problem into requirements, edge cases, and user needs." },
  { index: "02", title: "Design", description: "Choose a practical architecture, data model, and API structure." },
  { index: "03", title: "Build", description: "Develop modular, reusable, maintainable components." },
  { index: "04", title: "Test", description: "Validate edge cases, debug logical issues, and improve reliability." },
  { index: "05", title: "Deploy", description: "Use cloud infrastructure and deployment workflows to make software available." },
  { index: "06", title: "Improve", description: "Analyze feedback and continuously refine the product." },
];

export const focusAreas = [
  "Full-Stack Development",
  "DSA & Problem Solving",
  "AI-powered Applications",
  "Cloud & Deployment",
];

export const skillGroups: SkillGroup[] = [
  { category: "Programming", skills: ["C++", "JavaScript", "Python", "Java", "C", "HTML", "CSS"] },
  { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  { category: "Database", skills: ["PostgreSQL"] },
  { category: "Core", skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Full-Stack Development"] },
  { category: "Engineering", skills: ["Debugging", "Code Reviews", "Refactoring", "Clean Code", "Testing", "Edge-case Handling"] },
  { category: "Tools", skills: ["Git", "GitHub", "Android Studio"] },
  { category: "Cloud", skills: ["AWS", "EC2", "S3", "IAM", "VPC"] },
];

export const careerPilot = {
  title: "CareerPilot",
  subtitle: "AI-Powered Career Management Platform",
  description:
    "An AI-powered career management platform designed to help job seekers discover relevant opportunities, optimize resumes, generate application content, track applications, and improve career readiness.",
  featureCards: [
    {
      title: "AI Resume Optimizer",
      items: ["ATS/match scoring", "Improvement suggestions", "Resume version management", "Cover-letter generation", "Recruiter-message generation"],
    },
    {
      title: "Application Tracking",
      items: ["Kanban view", "List view", "Application status management", "Calendar scheduling", "Career assessments", "Performance reports"],
    },
    {
      title: "AI Career Assistant",
      items: ["Career recommendations", "Skill-gap insights", "Job-match scoring", "Personalized guidance"],
    },
    {
      title: "Analytics",
      items: ["Visual analytics", "Match scoring", "Career readiness indicators"],
    },
  ],
  technology: [
    "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "REST APIs",
    "React Query", "React Hook Form", "Zod", "Recharts", "Tailwind CSS",
  ],
  architecture: ["Frontend", "REST APIs", "Backend Services", "PostgreSQL", "AI / Career Intelligence"],
};

export const otherProjects: OtherProject[] = [
  {
    title: "AI Personal Voice Assistant",
    description:
      "An AI-powered personal voice assistant built with Python that uses speech recognition and natural language processing to interpret commands and automate tasks.",
    features: ["Speech recognition", "Natural language processing", "Information retrieval", "Application launching", "Voice-based responses"],
    tech: ["Python"],
  },
  {
    title: "Fitness Tracking Android Application",
    description:
      "A fitness tracking Android application focused on workout tracking, exercise routines, activity monitoring, and a smooth user experience.",
    tech: ["Java", "XML", "Android Studio"],
  },
];

export const awsExperience = [
  "EC2", "S3", "IAM", "VPC", "Cloud storage", "File management",
  "Access control", "Basic deployment", "Application monitoring",
];

export const certifications: Certification[] = [
  { title: "Python Programming Certification", issuer: "Coursera" },
  { title: "Git and Version Control", issuer: "Coursera" },
  { title: "React Native", issuer: "Coursera" },
  { title: "AWS Fundamentals", issuer: "Coursera" },
];

export const education = {
  degree: "B.Tech — Computer Science and Engineering",
  institution: "Chandigarh University, Mohali, India",
  timeline: "Expected: July 2026",
};
