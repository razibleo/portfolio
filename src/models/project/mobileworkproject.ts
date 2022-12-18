import Project from "./project";

interface MobileWorkProjectInterface extends Project {
  appstoreUrl: string;
  googleplayUrl: string;
}

export default class MobileWorkProject extends Project {
  appstoreUrl: string;
  googleplayUrl: string;

  constructor(params: MobileWorkProjectInterface) {
    super(
      params.title,
      params.description,
      params.projectscreenshot,
      params.projectlogo,
      params.websiteurl
    );
    this.appstoreUrl = params.appstoreUrl;
    this.googleplayUrl = params.googleplayUrl;
  }
}
