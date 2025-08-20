import ProjectCard from "./project-card";

const projects = [
  {
    title: "Cosmic Video Player",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "abstract data",
    projectUrl: "/alpha"
  },
  {
    title: "Stealth Coder",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "network visualization",
    projectUrl: "/beta"
  },
  {
    title: "LinguaChat AI",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "code terminal",
    projectUrl: "/gamma"
  },
  {
    title: "Resume Parser",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "dashboard ui",
    projectUrl: "/delta"
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} imageUrl={project.imageUrl} hint={project.hint} projectUrl={project.projectUrl} />
      ))}
    </div>
  );
}
