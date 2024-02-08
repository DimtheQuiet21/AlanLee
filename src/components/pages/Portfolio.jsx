import PortfolioCard from "../UI/PortfolioCard";

const cards = [
  {
    "name":"Monster Mine",
    "img":"./src/assets/images/monster.png",
    "keywords":["Handlebars","Node-js","Express","Cloudinary","Heroku"],
    "description":"The Monster Mine is a Node.js web application designed to simplify the process of creating custom monsters for Dungeons & Dragons games. This application provides Dungeon Masters (DMs) with a user-friendly interface to make unique monsters tailored to their campaigns.",
    "deployed":"https://cryptic-bastion-38379-0ef3d47a3413.herokuapp.com/",
    "repo":"https://github.com/micahives/Monster-Mine"
  },
  {
    "name":"SpotRun",
    "img":"./src/assets/images/spotrun.png",
    "keywords":["Google API","Youtube API", "GetSongBPM API", "DayJS", "Materialize"],
    "description":"SpotRun is a music selection form that allows users to select their preferred music genre(s) and other running preferences such as distance, duration, and height. The form is designed to help users create a personalized music playlist that matches their running preferences. This README file provides an overview of the SpotRun music selection form and how to use it.",
    "deployed":"https://dimthequiet21.github.io/ProjectSpotRun/",
    "repo":"https://github.com/DimtheQuiet21/ProjectSpotRun"
  },
  {
    "name":"",
    "img":"",
    "keywords":[],
    "description":"",
    "deployed":"",
    "repo":""
  },
  {
    "name":"",
    "img":"",
    "keywords":[],
    "description":"",
    "deployed":"",
    "repo":""
  },
  {
    "name":"",
    "img":"",
    "keywords":[],
    "description":"",
    "deployed":"",
    "repo":""
  },
  {
    "name":"",
    "img":"",
    "keywords":[],
    "description":"",
    "deployed":"",
    "repo":""
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
