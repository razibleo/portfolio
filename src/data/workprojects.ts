import Assets from "../utils/assets";

abstract class WorkProject {
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

interface MobileWorkProjectInterface extends WorkProject {
  appstoreUrl: string;
  googleplayUrl: string;
}

export class MobileWorkProject extends WorkProject {
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

const workprojects: WorkProject[] = [
  new MobileWorkProject({
    title: "Khaymat Zaman",
    description:
      "A fully featured e-commerce application where products are sold and categorized by shops.",
    projectscreenshot: Assets.KHAYMATZAMAN_SCREENSHOT,
    projectlogo: Assets.KMZ_LOGO,
    websiteurl: "https://kmz.ae",
    appstoreUrl:
      "https://apps.apple.com/ae/app/khaymat-zaman-%D8%AE%D9%8A%D9%85%D8%A9-%D8%B2%D9%85%D8%A7%D9%86/id1512642490",
    googleplayUrl:
      "https://play.google.com/store/apps/details?id=com.mvp.khaymat&hl=en&gl=US",
  }),

  new MobileWorkProject({
    title: "Sitt",
    description:
      "Sitt allows you to easily  book your baby sitting/nursing/helper needs across the UAE.",
    projectscreenshot: Assets.SITT_SCREENSHOT,

    projectlogo: Assets.SITT_LOGO,
    websiteurl: "https://sitt.ae/",
    appstoreUrl: "https://apps.apple.com/us/app/sitt-app/id1631411064",
    googleplayUrl:
      "https://play.google.com/store/apps/details?id=com.sitt.mobile",
  }),

  new MobileWorkProject({
    title: "MAWJ",
    description:
      "A real estate application where developers, consultants, contractors, & suppliers can showcase their projects.",
    projectscreenshot: Assets.MAWJ_SCREENSHOT,

    projectlogo: Assets.MAWJ_LOGO,
    websiteurl: "https://mawjplatform.com/",
    appstoreUrl: "https://apps.apple.com/us/app/mawj/id1613123236",
    googleplayUrl:
      "https://play.google.com/store/apps/details?id=com.mawj.mobile&hl=en&gl=US",
  }),

  new MobileWorkProject({
    title: "SmartFix",
    description:
      "A home service application that allows you to book differnt types of techinicians & buy products.",
    projectscreenshot: Assets.SMARTFIX_SCREENSHOT,

    projectlogo: Assets.SMARTFIX_LOGO,
    websiteurl: "https://smartfixapp.com/",
    appstoreUrl:
      "https://apps.apple.com/ae/app/smartfix-%D8%B3%D9%85%D8%A7%D8%B1%D8%AA-%D9%81%D9%83%D8%B3/id1575319109",
    googleplayUrl:
      "https://play.google.com/store/apps/details?id=com.mvp.smartfix",
  }),

  new MobileWorkProject({
    title: "Bseen",
    description:
      "A platform that offers advertising on cars while earning extra money for driving.",
    projectscreenshot: Assets.BSEEN_SCREENSHOT,

    projectlogo: Assets.BSEEN_LOGO,
    websiteurl: "https://b-seenapp.com/",
    appstoreUrl: "https://apps.apple.com/ae/app/b-seen/id1608872523",
    googleplayUrl:
      "https://play.google.com/store/apps/details?id=com.mvpapps.bseen",
  }),

  new MobileWorkProject({
    title: "Nomadic Tribes",
    description:
      "Embark on a life changing journey with indigenous peoples and connect with like-minded travellers.",
    projectscreenshot: Assets.NOMADIC_TRIBE_SCREENSHOT,

    projectlogo: Assets.NOMADIC_LOGO,
    websiteurl: "https://nomadictribe.com/",
    appstoreUrl: "https://apps.apple.com/us/app/nomadic-tribe/id1457846011",
    googleplayUrl:
      "https://play.google.com/store/apps/details?id=com.mvp.nomadictribe&hl=en&gl=US",
  }),
];

export default workprojects;
