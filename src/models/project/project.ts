export default abstract class Project {
  title: string;
  description: string;
  projectscreenshot: string;

  constructor(title: string, description: string, projectscreenshot: string) {
    this.title = title;
    this.description = description;
    this.projectscreenshot = projectscreenshot;
  }
}
