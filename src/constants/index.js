import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  reactQuery,
  jest,
  python,
  selenium,
  oneTo,
  snapsinn,
  pilloe
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend (ReactJS) Developer",
    icon: web,
  },
  {
    title: "Frontend (ReactJS) Mentor",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Context API",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "React query",
    icon: reactQuery,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Clumio",
    iconBg: "#383E56",
    points: [
      "Collaborated with various teams within Frontend development, including the design-system, platform features team, MFE teams, and production features team.",
      "Worked withing design-system team to create reusable and generic components. Components include Combobox, Navigation Menu, Popovers, Nested Infinite Popovers, Tooltips, Single menu, Menu group, Standard card,and Input box.",
      "Led multiple product and feature development initiatives from scratch. One of the project which was given to me as a Frontend lead aimed at reducing the bandwidth of the CS team and the User such that CS team should no longer spend hours on assisting customers and the User should no longer be following the lengthy method of performing main operations on our app.",
      "The above project involved close collaboration with backend, UX, and product management teams. It also involves my contribution from every team within frontend development like design-system, module federation, and platform features. It achieved an engagement and success rate of nearly 90 (percent) according to pendo stats.",
      "Mentored few folks and contributed to the development of several products and features that are now actively used and sold to customers. Few features includes Adding account/environments, Populating inventories, Implementing Calendars to provide easy way for users to select and perform operation, Implementing tables to display active operations and errors if any.",
      "Noticed an enhanced application performance while using the custom-built components. Made this possible by optimizing render times by preventing unnecessary re-renders of the component.",
      "Tech stack - Reactjs, Typescript, Javascript, Storybook, React testing library, Jest, Enzyme, React-query, Selenium, Context API"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Foxmula",
    iconBg: "#E6DEDD",
    points: [
      "Worked in a team to address the issue of career building and industrial hiring by developing an application using Reactjs and documenting the modules and components developed.",
    ],
  },
];

const projects = [
  {
    name: "One to Doc",
    description: [
      "Problems 1. The lack of availability of resources and access to healthcare facilities. 2. Most of the people in cities have to resort to other social media platforms which often leads to larger response times.",
      "Introduction The application is based for the purpose of increasing the accessibility of resources and getting people healthcare advice while in home.",
      "Impact Increased the response time on urgent requirements and provided healthcare facilities easily.",
      "Awarded the best UI in a National level hackathon organized by Bajaj Finserv health."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: oneTo,
    source_code_link: "https://github.com/pranjals149/One-to-DOC",
  },
  {
    name: "SnapsInn",
    description:
      "This app is a snaps based web app. Whenever a user logs into his / her account, the app is redirected to the camera page. Just click the photograph and press Send. After clicking the send button, the snaps will be displayed in the chats section. The snaps can be opened and it will be valid for only 10 seconds. After 10 seconds, users will not be able to see the snaps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: snapsinn,
    source_code_link: "https://github.com/pranjals149/SnapsInn",
  },
  {
    name: "Pilloe",
    description:
      "Pilloe is remote collaboration application which allows users to create a session or to join a session. After entering in the session, a user can use a whiteboard, make announcements, upload files, manage tasks, chat with community, make a meet, and view calendar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: pilloe,
    source_code_link: "https://github.com/pranjals149/Pilloe",
  },
];

export { services, technologies, experiences, projects };
