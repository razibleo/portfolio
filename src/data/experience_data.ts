import ExperienceModel from "../models/experience";
import Assets from "../utils/assets";

const experiences: ExperienceModel[] = [
  {
    positionTitle: "Full-Stack Engineer",
    companyName: "MVP Applications and Game Design",
    companyUrl: "https://mvp-apps.com",
    companyLogo: Assets.MVP_LOGO,
    companyBackgroundUrl:
      "https://static01.nyt.com/images/2022/04/04/multimedia/15ai-nocode/15ai-nocode-mobileMasterAt3x.jpg",
    responsibilites: [
      "Restructuing of equestrian sports application",
      "Utilize clean and maintainable architecture",
      "Creating RESTful and GraphQL APIs",
      // "Optimize SQL queries for faster response times",
      "Understand client's requirements, and designing a workflow with the team",
    ],
    dateFrom: new Date(Date.parse("Sept 2021")),
    dateTo: null,
    stacks: [
      {
        name: "Laravel",
        logoPath: Assets.LARAVEL_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Firebase",
        logoPath: Assets.FIREBASE_LOGO,
        logoInversionColorLevel: 0.9,
      },
      {
        name: "AWS",
        logoPath: Assets.AWS_LOGO,
        logoInversionColorLevel: 1,
      },
      // {
      //   name: "CloudFlare",
      //   logoPath: Assets.CLOUDFLARE_LOGO,
      // },
      {
        name: "Flutter",
        logoPath: Assets.FLUTTER_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "MySql",
        logoPath: Assets.MYSQL_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "CloudFlare",
        logoPath: Assets.CLOUDFLARE_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Fastlane",
        logoPath: Assets.FASTLANE_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "MongoDB",
        logoPath: Assets.MONGODB_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Docker",
        logoPath: Assets.DOCKER_LOGO,
        logoInversionColorLevel: 1,
      },
    ],
  },
  {
    positionTitle: "Front-End Engineer",
    companyName: "MVP Applications and Game Design",
    companyUrl: "https://mvp-apps.com",
    companyLogo: Assets.MVP_LOGO_BLACK,
    companyBackgroundUrl:
      "https://thumbs.dreamstime.com/b/computer-troubleshooting-concept-banner-header-technical-support-guys-working-repairing-computer-hardware-software-129701356.jpg",
    responsibilites: [
      "Develop cross platfrom mobile applications & design admin control panels using Flutter and React respectively",
      "Implement complex designs & animations",
      // "Reponsive Design and create reusable widgets/components",
      "Integrate API's and communicate with communicate with back-end engieers",
    ],
    dateFrom: new Date(Date.parse("April 2021")),
    dateTo: new Date(Date.parse("August 2021")),

    stacks: [
      {
        name: "Flutter",
        logoPath: Assets.FLUTTER_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "React.js",
        logoPath: Assets.REACT_LOGO,
        logoInversionColorLevel: 0,
      },
      {
        name: "Redux",
        logoPath: Assets.REDUX_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Adobe XD",
        logoPath: Assets.ADOBE_XD_LOGO,
        logoInversionColorLevel: 0.2,
      },
      {
        name: "Jira Atlassin",
        logoPath: Assets.JIRA_LOGO,
        logoInversionColorLevel: 1,
      },

      {
        name: "Git",
        logoPath: Assets.GIT_LOGO,
        logoInversionColorLevel: 1,
      },
    ],
  },
  {
    positionTitle: "Freelancer",
    companyName: "Abu Dhabi University",
    companyUrl: "https://www.adu.ac.ae",
    companyLogo: Assets.ADU_LOGO,
    companyBackgroundUrl:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/2280186-banner-da-internet-das-coisas-vetor.jpg",
    responsibilites: [
      "Tutor students understand and learn Java/Python",
      "Create websites/mobile apps for students/clients wanting to start a small business",
      "Design complex IOT Circuitry and/or robots using Aruduino & Raspberry Pi",
    ],
    dateFrom: new Date(Date.parse("December 2017")),
    dateTo: new Date(Date.parse("June 2021")),
    stacks: [
      {
        name: "Ionic",
        logoPath: Assets.IONIC_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Angular",
        logoPath: Assets.ANGULAR_LOGO,
        logoInversionColorLevel: 1,
      },

      {
        name: "Java",
        logoPath: Assets.JAVA_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "JavaFX",
        logoPath: Assets.JAVA_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Python",
        logoPath: Assets.PYTHON_LOGO,
        logoInversionColorLevel: 0.8,
      },
      {
        name: "OpenCV",
        logoPath: Assets.OPENCV_ALT_LOGO,
        logoInversionColorLevel: 0.8,
      },
      {
        name: "ROS",
        logoPath: Assets.ROS_ALT_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Aruduino",
        logoPath: Assets.ARDUINO_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Raspberry Pi",
        logoPath: Assets.RASPBERRY_PI_LOGO,
        logoInversionColorLevel: 1,
      },
    ],
  },
];

export default experiences;
