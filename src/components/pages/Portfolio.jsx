import PortfolioCard from "../UI/PortfolioCard";

const cards = [
  {
    "name":"Monster Mine",
    "img":"/assets/images/monster.png",
    "keywords":["Handlebars","NodeJS","Express","Cloudinary","Heroku"],
    "description":"The Monster Mine is a Node.js web application designed to simplify the process of creating custom monsters for Dungeons & Dragons games. This application provides Dungeon Masters (DMs) with a user-friendly interface to make unique monsters tailored to their campaigns.",
    "deployed":"https://cryptic-bastion-38379-0ef3d47a3413.herokuapp.com/",
    "repo":"https://github.com/micahives/Monster-Mine"
  },
  {
    "name":"SpotRun",
    "img":"/assets/images/spotrun.png",
    "keywords":["Google API","Youtube API", "GetSongBPM API", "DayJS", "Materialize"],
    "description":"SpotRun is a music selection form that allows users to select their preferred music genre(s) and other running preferences such as distance, duration, and height. The form is designed to help users create a personalized music playlist that matches their running preferences. This README file provides an overview of the SpotRun music selection form and how to use it.",
    "deployed":"https://dimthequiet21.github.io/ProjectSpotRun/",
    "repo":"https://github.com/DimtheQuiet21/ProjectSpotRun"
  },
  {
    "name":"Tiny Tech Blog",
    "img":"/assets/images/tinytech.png",
    "keywords":["Handlebars", "MySQL", "Sequelize", "Express", "NodeJS", "Heroku"],
    "description":"This Blog is designed for users to be able to post short blogs about their experiences in technology. The current form of the blog is limited but the framework is in place for a deeper user experience. A user can currently sign up to post their own blogs as well as sign up to leave comments. They can view other users blog posts on the homepage as well as edit and delete their own blogs.",
    "deployed":"https://whispering-eyrie-25416-3b64194d3ca3.herokuapp.com/",
    "repo":"https://github.com/DimtheQuiet21/tiny-Tech-Blog"
  },
  {
    "name":"Alan Lee's First Portfolio",
    "img":"/assets/images/portfolio.png",
    "keywords":["HTML" , "Javascript"],
    "description":"This personal profile will act as an introduction to my works as well as my personality as a web developer and web designer. This profile should demonstrate my current skills in HTML, CSS, Javascript. It will be updated on a semi-frequent bassis to reflect my growth as a developer.",
    "deployed":"https://dimthequiet21.github.io/Personal-Portfolio-of-Alan-Lee/",
    "repo":"https://github.com/DimtheQuiet21/Personal-Portfolio-of-Alan-Lee"
  },
  {
    "name":"JATE-JustAnotherTextEditor",
    "img":"/assets/images/JATE.png",
    "keywords":["HTML-Plugin Manifest", "WebpackHTML", "WebpackPWAManifest", "InjectManifest", "Babel-Loader", "Css-Loader", "Style-Loader"],
    "description":"This Progressive Web Application is a text editor that will allow a user to work offline on some basic coding! It uses Code Mirror as a base for the editor and Webpack for the bundling and caching of images. Several other technologies are at play such as HTML-Plugin Manifest. The source code for this application, namely the client-server folders along with the code-mirror setup and static element execution were all done by the EDX-Bootcamp out of the Extended University of Wisconsin Campus! It was great getting to see this in action! Also, WebpackHTML documentation alongside WebpackPWAManifest documentation were absolutely vital for this project.",
    "deployed":"",
    "repo":""
  },
  {
    "name":"The Social Media App",
    "img":"/assets/images/socialmedia.png",
    "keywords":["MongoDb", "Mongoose", "Express"],
    "description":"This project is designed to give a user a deeper understanding of the monogodb structure through the mongoose ORM. You will need insomnia in order to fully utilize this project in it's current form along with maintaining a strict adherence to the restful API structure in the server. Example commands will be provided for you down below. A great deal of this code was directly inspired by the EDX BootCamp's very own instructor activity on Mongo/Mongoose. While not exactly a 1:1 crossover, I would be remise to understate just how helpful that source code was in the creation of this application. I did put on some of my own flair into the mix, but the set up and execution is very similar",
    "deployed":"https://youtu.be/atvjCR2FkVs",
    "repo":"https://github.com/DimtheQuiet21/social-media-app"
  },
];

export default function Portfolio() {
    return (
      <div>
        <h1 className = "text-center">My Portfolio</h1>
        <div className ="container">
          {cards.map((card,index)=>(
            <PortfolioCard 
              key = {index}
              name = {card.name}
              img = {card.img}
              keywords = {card.keywords}
              description = {card.description}
              deployed = {card.deployed}
              repo = {card.repo}/>
          ))}
        </div>
      </div>
    );
  }
