import WorkProject from "./workproject";

interface MobileWorkProjectInterface extends WorkProject {
  appstoreUrl: string;
  googleplayUrl: string;
}

export default class MobileWorkProject extends WorkProject {
  appstoreUrl: string;
  googleplayUrl: string;

  constructor(params: MobileWorkProjectInterface) {
    super({
      title: params.title,
      description: params.description,
      projectscreenshot: params.projectscreenshot,
      projectlogo: params.projectlogo,
      websiteurl: params.websiteurl,
    });
    this.appstoreUrl = params.appstoreUrl;
    this.googleplayUrl = params.googleplayUrl;
  }
}
