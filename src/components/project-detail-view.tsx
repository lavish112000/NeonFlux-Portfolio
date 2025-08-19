import type { CurateProjectsOutput } from "@/ai/flows/project-curation";
import Image from "next/image";
import BarChartComponent from "./charts/bar-chart";
import LineChartComponent from "./charts/line-chart";
import CircularProgressBar from "./charts/circular-progress-bar";

interface ProjectDetailViewProps {
  projectData: CurateProjectsOutput | null;
}

export default function ProjectDetailView({ projectData }: ProjectDetailViewProps) {
  const renderContent = () => {
    if (projectData?.projectDetails) {
      const details = projectData.projectDetails.split('\n').filter(line => line.trim() !== '');
      return (
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {details.map((item, index) => (
            <li key={index}>{item.replace(/^- /, '')}</li>
          ))}
        </ul>
      );
    }
    return (
      <div className="text-center text-gray-400 py-16">
        <p className="text-2xl">Search to curate project details</p>
        <p>e.g., "Show me recent web development projects using React."</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Project Details from AI</h3>
          {renderContent()}
        </div>
      </div>
      <div className="lg:col-span-2 space-y-8">
        <div className="grid grid-cols-2 gap-8">
            <CircularProgressBar percentage={75} label="Completion" />
            <CircularProgressBar percentage={92} label="Performance" />
        </div>
        <BarChartComponent />
        <LineChartComponent />
      </div>
    </div>
  );
}
