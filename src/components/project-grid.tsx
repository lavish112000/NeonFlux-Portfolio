import ProjectCard from "./project-card";

const projects = [
  {
    title: "Project Alpha",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "abstract data"
  },
  {
    title: "Project Beta",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "network visualization"
  },
  {
    title: "Project Gamma",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "code terminal"
  },
  {
    title: "Project Delta",
    imageUrl: "https://placehold.co/600x400/0A192F/A239CA",
    hint: "dashboard ui"
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} imageUrl={project.imageUrl} hint={project.hint} />
      ))}
    </div>
  );
}
