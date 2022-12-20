import TechStack from "./techstack";

export default interface ExperienceModel {
  positionTitle: string;
  companyName: string;
  companyUrl: string;
  companyLogo: string;
  companyBackgroundUrl: string;
  responsibilites: string[];
  dateFrom: Date;
  dateTo: Date | null;
  stacks: TechStack[];
}
