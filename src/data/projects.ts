import MobileWorkProject from "../models/project/mobileworkproject";
import PersonalProject from "../models/project/personalproject";
import Project from "../models/project/project";
import Assets from "../utils/assets";

export const workprojects: Project[] = [
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
      "A real estate application where developers, consultants, contractors, & suppliers can showcase their work.",
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

export const personalprojects: Project[] = [
  new PersonalProject({
    title: "Space Invaders",
    description: "A fun classical Space Invaders created using JavaFX.",

    projectscreenshot: Assets.SPACEINVADERS_SCREENSHOT,
    demoUrl: null,
    githubUrl: "https://github.com/razibleo/AndoridTicTacToe",
    stacks: [
      {
        name: "Java",
        logoPath: Assets.JAVA_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "JavaFX",
        logoPath: Assets.JAVAFX_LOGO,
        logoInversionColorLevel: 1,
      },
    ],
  }),

  new PersonalProject({
    title: "Frogger",
    description:
      "Simplified version of the classical game Frogger created using JavaFX.",
    projectscreenshot: Assets.FROGGER_SCREENSHOT,
    demoUrl: null,
    githubUrl: "https://github.com/razibleo/javafxspaceinvaders",
    stacks: [
      {
        name: "Java",
        logoPath: Assets.JAVA_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "JavaFX",
        logoPath: Assets.JAVAFX_LOGO,
        logoInversionColorLevel: 1,
      },
    ],
  }),
  new PersonalProject({
    title: "Tic Tac Toe",
    description:
      "A native andoid Tic Tac Toe game with multiplayer functionaly via bluetooth created using Java.",
    projectscreenshot: Assets.TIC_TAC_TOE_SCREENSHOT,
    demoUrl:
      "https://drive.google.com/file/d/1kAseXEnMQSw_9HxdolVS0j1U4JasOrKb/view?usp=sharing",
    githubUrl: "https://github.com/razibleo/AndoridTicTacToe",
    stacks: [
      {
        name: "Java",
        logoPath: Assets.JAVA_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Android SDK",
        logoPath: Assets.ANDROID_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Bluetooth",
        logoPath: Assets.BLUETOOTHLOGO,
        logoInversionColorLevel: 1,
      },
    ],
  }),

  new PersonalProject({
    title: "Communiserve",
    description:
      "A hybrid mobile-app for nearby community members to help each other get groceries during COVID-19 created using Ionic.",
    projectscreenshot: Assets.COUMMUNISERVE_SCREENSHOT,
    demoUrl:
      "https://drive.google.com/u/0/uc?id=1EO4a3ETphU6TsXC3ApqUj0ZubHNS4ZSL&export=download",
    githubUrl: "https://github.com/razibleo/communiserve_app",
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
        name: "Typescript",
        logoPath: Assets.TYPSCRIPT_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Firebase",
        logoPath: Assets.FIREBASE_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Google Maps",
        logoPath: Assets.Google_MAPS_LOGO,
        logoInversionColorLevel: 1,
      },
      {
        name: "Push Notifications",
        logoPath: Assets.PUSH_NOTIFICATIONS_LOGO,
        logoInversionColorLevel: 1,
      },
    ],
  }),
];
