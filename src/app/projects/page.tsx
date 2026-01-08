import { getProjects } from "../services/projects.service";
import ProjectsSection from "./components/ProjectsSection";

export default async function Projects() {
  const projects = await getProjects()

  return <ProjectsSection projects={projects}/>
}