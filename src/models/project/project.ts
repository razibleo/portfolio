export default abstract class Project {
  title: string;
  description: string;
  projectscreenshot: string;
  projectlogo: string;
  websiteurl: string;

  constructor(
    title: string,
    description: string,
    projectscreenshot: string,
    projectlogo: string,
    websiteurl: string
  ) {
    this.title = title;
    this.description = description;
    this.projectscreenshot = projectscreenshot;
    this.projectlogo = projectlogo;
    this.websiteurl = websiteurl;
  }
}
