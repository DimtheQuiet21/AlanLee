import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

  async function submitMessage (event) {
    event.preventDefault()
    console.log("Submitting Email");
    const formName = document.getElementById("formName").value;
    const formEmail = document.getElementById("formEmail").value
    const formMessage = document.getElementById("formMessage").value
    const emailCheck = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const subject = `Message from ${formName} about FullStackDevelopment`
    
    if (emailCheck.test(formEmail)) {
      try {
        window.open(`mailto:aflee227@gmail.com?subject=${subject}&body=${formMessage}`);
      } catch (err) {
        alert("Email could not be sent!")
      }
    } else (
      alert("Please use a valid email")
    )
  }

    return (
      <div>
        <h1 className = "text-center">Contact Me</h1>
        <div className = "container">
          <div className = "d-flex">
            <div className = "container">
              <h4>Please Reach Out and Send me a Message!</h4>
              <h6>I'll try to get back to you as soon as possible</h6>
            </div>
            <button className = "btn btn-primary align-items-center justify-content-center d-flex flex-column custom-btn" onClick={submitMessage}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Send Email</span>
            </button>
          </div>
          <br></br>
          <div className ="form">
            <h4>Name: </h4>
            <input type = "text" id = "formName" placeholder="(Required)" style = {{ width: "-webkit-fill-available"}}/>
            <br></br>
            <h4>Email:</h4>
            <input type = "text" id = "formEmail" placeholder="(Required)" style = {{ width: "-webkit-fill-available"}}/>
            <br></br>
            <h4>Message:</h4>
            <input 
              id = "formMessage"
              placeholder="Please Leave a Short Message"
              style = {
                {
                  width: "-webkit-fill-available",
                  height: "20vw",
                  padding: "5px",
                  textAlign: "left",
                  verticalAlign: "top"
                }
              }> </input>
          </div>
        </div>
      </div>
    );
  }