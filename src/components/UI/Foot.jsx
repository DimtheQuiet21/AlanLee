import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faYoutube } from '@fortawesome/free-brands-svg-icons'

const iconstyle = {
    "height":"5rem",
  }
  

export default function Foot () {

    const redirect = (site) => {
        if (site === "github")
        window.location.href = "https://github.com/DimtheQuiet21";
        else if (site == "stack") {
        window.location.href = "https://stackoverflow.com/users/14082899/dimthequiet";
        } else {
        window.location.href = "https://www.youtube.com/channel/UCJCkDuETIZuyNnz8PazdmLA";
        };
    };

    return (
        <div className = "container d-flex align-items-center justify-content-center">
             <FontAwesomeIcon icon={faGithub} style = {iconstyle} className = "btn" onClick = {() => redirect("github")}  />
             <FontAwesomeIcon icon={faStackOverflow} style = {iconstyle} className = "btn" onClick = {() => redirect("stack")}/>
             <FontAwesomeIcon icon={faYoutube} style = {iconstyle} className = "btn"onClick = {() => redirect("youtube")}/>
        </div>
    )
}