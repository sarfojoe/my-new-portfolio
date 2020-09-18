import socialNetwork from "../assets/images/social-network.png";
import movieLibrary from "../assets/images/movie-library.png";
import travelDaries from "../assets/images/travel-diaries.png";
import recipeApp from "../assets/images/recipe1.png";
//import employeeTracker from '../assets/images/employeeTracker.jpg'
import covid19 from "../assets/images/covid-19tracker.png";
import nodejsLogo from "../assets/images/nodejsLogo.svg";
import mongodbLogo from "../assets/images/mongodbLogo.svg";
import mysqlLogo from "../assets/images/mysqlLogo.svg";
import expressjsLogo from "../assets/images/expressjsLogo.svg";
import jqueryLogo from "../assets/images/jqueryLogo.svg";
import htmlLogo from "../assets/images/htmlLogo.svg";
import cssLogo from "../assets/images/cssLogo.svg";
import javascriptLogo from "../assets/images/javascriptLogo.svg";
// import indigoBallBg from '../assets/images/gdproj_indigoBall_bg.jpg'
// import hyperMockBg from '../assets/images/gdproj_hyperMock_bg.jpg'
// import otherLogosBg from '../assets/images/gdproj_otherLogos_bg.jpg'
// import otherPrintsBg from '../assets/images/gdproj_otherPrints_bg.jpg'

const projects = [
  {
    title: "Covid-19 Tracker",
    description:
      "An application made with react to track the update of Covid-19 cases all over the world",
    imageUrl: covid19,
    githubUrl: "https://github.com/sarfojoe/covid-19-tracker",
    deployedUrl: "https://covid-19-tracker-33b25.web.app/",
  },
  {
    title: "Movie-Library",
    description:
      "A netflix clone made with react, material-UI, API, axios. This app enables you to watch movie trailers",
    imageUrl: movieLibrary,
    githubUrl: "https://github.com/sarfojoe/movie-library",
    deployedUrl: "https://movie-library-7598c.web.app/",
  },
  {
    title: "Recipe-app",
    description:
      "A recipe app which provides you with all the ingredients and calories of any food you search. Made with React.js, API, CSS",
    imageUrl: recipeApp,
    githubUrl: "https://github.com/sarfojoe/recipe-app",
    deployedUrl: "https://recipe-app-4eb17.web.app/",
  },
  {
    title: "Social Network",
    description:
      "A fullstack app for social networking where people are able to register and log in to create and share a post.",
    imageUrl: socialNetwork,
    githubUrl: "https://github.com/sarfojoe/react-redux-social-network-app",
    deployedUrl: "https://react-redux-posts.web.app/login",
  },
  {
    title: "Travel Diaries",
    description:
      "A group work of fullstack app for poeple who travel all over the world. This app enables you to mark all places visited in the world, share pictures and add comments for people who want to visit there",
    imageUrl: travelDaries,
    githubUrl: "https://github.com/sarfojoe/traveldiaries",
    deployedUrl: "https://traveldiaries-fd7aa.web.app/",
  },
  //   {
  //     title: 'Employee Tracker',
  //     description:
  //       'A command-line interface app for tracking employees within a company.',
  //     imageUrl: employeeTracker,
  //     githubUrl: 'https://github.com/aroblesgalit/12-Employee-Tracker'
  //   }
];

// const graphicDesignProjects = [
//   {
//     title: 'Indigo Ball',
//     type: ['Logo Design', 'Print'],
//     image: indigoBallBg,
//     link: '/indigo-ball'
//   },
//   {
//     title: 'HyperMock',
//     type: ['Logo Design', 'UI Design'],
//     image: hyperMockBg,
//     link: '/hypermock'
//   },
//   {
//     title: 'Other Logos',
//     type: ['Logo Designs'],
//     image: otherLogosBg,
//     link: '/other-logos'
//   },
//   {
//     title: 'Other Print Designs',
//     type: ['Print Designs'],
//     image: otherPrintsBg,
//     link: 'https://www.alvingalit.com/'
//   }
// ]

const skills = [
  {
    title: "HTML",
    icon: htmlLogo,
  },
  {
    title: "CSS",
    icon: cssLogo,
  },
  {
    title: "JavaScript",
    icon: javascriptLogo,
  },
  {
    title: "jQuery",
    icon: jqueryLogo,
  },
  {
    title: "Bootstrap",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    title: "UIKit",
    icon: "https://cdn.iconscout.com/icon/free/png-64/uikit-285322.png",
  },
  {
    title: "React",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
  },
  {
    title: "Node.js",
    icon: nodejsLogo,
  },
  {
    title: "MongoDB",
    icon: mongodbLogo,
  },
  {
    title: "MySQL",
    icon: mysqlLogo,
  },
  {
    title: "Express",
    icon: expressjsLogo,
  },
  {
    title: "Visual Studio",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },
];

const credits = [
  {
    text: "HTML5 Logo",
    link: "https://www.w3.org/html/logo/#downloads",
  },
  {
    text: "CSS3 Logo",
    link: "https://worldvectorlogo.com/downloaded/css3",
  },
  {
    text: "JavaScript Logo",
    link: "https://commons.wikimedia.org/wiki/File:Javascript-shield.svg",
  },
  {
    text: "jQuery Logo",
    link: "https://brand.jquery.org/logos/",
  },
  {
    text: "Bootstrap Logo",
    link: "https://commons.wikimedia.org/wiki/File:Bootstrap_logo.svg",
  },
  {
    text: "UIKit Logo",
    link: "https://iconscout.com/icon/uikit",
  },
  {
    text: "React Logo",
    link: "https://commons.wikimedia.org/wiki/File:React-icon.svg",
  },
  {
    text: "Node.js Logo",
    link: "https://nodejs.org/en/about/resources/",
  },
  {
    text: "MongoDB Logo",
    link: "https://www.mongodb.com/brand-resources",
  },
  {
    text: "MySQL Logo",
    link: "https://www.mysql.com/about/legal/logos.html",
  },
  {
    text: "Express Logo",
    link: "https://commons.wikimedia.org/wiki/File:Expressjs.png",
  },
  {
    text: "Visual Studio Logo",
    link:
      "https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg",
  },
];

export default {
  getProjects: function () {
    return new Promise((resolve) => {
      resolve(projects);
    });
  },
  getSkills: function () {
    return new Promise((resolve) => {
      resolve(skills);
    });
  },
  getCredits: function () {
    return new Promise((resolve) => {
      resolve(credits);
    });
  },
  //   getGDProjects: function () {
  //     return new Promise(resolve => {
  //       resolve(graphicDesignProjects)
  //     })
  //   }
};
