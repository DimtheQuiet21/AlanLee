import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {

const iconstyle = {
  "height":"100px"
}

async function onButtonClick () {
  const url = "./src/assets/pdfs/LeeACV2022.pdf";
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
        <h1>Resume</h1>
        <div className = "container">
          <FontAwesomeIcon icon={faFileArrowDown} style = {iconstyle} className = "btn" onClick= {onButtonClick} />

        </div>
      </div>
    );
  }