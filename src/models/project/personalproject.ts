import TechStack from "../techstack";
import Project from "./project";

interface PeronsonalProjectInterface extends Project {
  githubUrl: string;
  demoUrl: string | null;
  stacks: TechStack[];
}

export default class PersonalProject extends Project {
  githubUrl: string;
  demoUrl: string | null;
  stacks: TechStack[];

  constructor(params: PeronsonalProjectInterface) {
    super(params.title, params.description, params.projectscreenshot);
    this.githubUrl = params.githubUrl;
    this.demoUrl = params.demoUrl;
    this.stacks = params.stacks;
  }
}
