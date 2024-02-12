import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {

const iconstyle = {
  "height":"100px",
  "position": "absolute",
  "top": "50%",
  "left": "50%",
  "transform": "translate(-50%, -50%)",
  "zIndex": "1"
}

const containerstyle = {
  "width" : "75vw",
  "height": "100vw",
  "backgroundImage": `url('/assets/images/CV.png')`,
  "backgroundSize": "cover",
  "backgroundRepeat": "no-repeat",
  "padding":"0px"
}

const overlaystyle = {
  "height" : "100%",
  "width": "100%",
  "position" : "relative",
  "backgroundColor" : "rgb(165, 165, 165)",
  "display":"block"
}

async function onButtonClick () {
  const url = "./public/assets/pdfs/LeeACV2022.pdf";
    fetch(url, {
       method: 'GET', 
    })
    .then(response => {
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Failed to download PDF');
      }
    })
    .then(pdfBlob => {
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = url; 
      document.body.appendChild(link);
      link.click();
      // Clean up: remove the link and revoke the URL
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfUrl);
    })
    .catch(error => {
      console.error('Error downloading PDF:', error);
    });
}

    return (
      <div>
        <h1 className = "text-center">Resume</h1>
        <div className = "container" style = {containerstyle}>
          <div className= 'overlay' style = {overlaystyle}>
            <FontAwesomeIcon icon={faFileArrowDown} style = {iconstyle} className = "btn" onClick= {onButtonClick} />
          </div>
        </div>
      </div>
    );
  }