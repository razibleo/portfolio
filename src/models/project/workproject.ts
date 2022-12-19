import Project from "./project";

interface WorkProjectInterface extends Project {
  projectlogo: string;
  websiteurl: string;
}

export default class WorkProject extends Project {
  projectlogo: string;
  websiteurl: string;

  constructor(params: WorkProjectInterface) {
    super(params.title, params.description, params.projectscreenshot);
    this.projectlogo = params.projectlogo;
    this.websiteurl = params.websiteurl;
  }
}
