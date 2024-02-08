import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {



    return (
      <div>
        <h1>Resume</h1>
        <div className = "container">
          <FontAwesomeIcon icon={faFileArrowDown} />

        </div>
      </div>
    );
  }