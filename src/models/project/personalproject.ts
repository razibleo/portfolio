import Project from "./project";

interface PeronsonalProjectInterface extends Project {
  githubUrl: string;
  demoUrl: string;
}

export default class PersonalProject extends Project {
  githubUrl: string;
  demoUrl: string;

  constructor(params: PeronsonalProjectInterface) {
    super(
      params.title,
      params.description,
      params.projectscreenshot,
      params.projectlogo,
      params.websiteurl
    );
    this.githubUrl = params.githubUrl;
    this.demoUrl = params.demoUrl;
  }
}
