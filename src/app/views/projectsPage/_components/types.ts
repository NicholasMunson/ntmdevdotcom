export interface Project {
  title: string;
  desc: string;
  image?: string;
  websiteUrl?: string;
  githubFrontend?: string;
  githubBackend?: string;
  detailedInfo?: {
    description: string;
    technologies: string[];
    features: string[];
    challenges: string[];
  };
}
