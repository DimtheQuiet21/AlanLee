export default function Contact() {

  async function submitMessage (event) {
    event.preventDefault()
    console.log("Submitting Email");
    const formName = document.getElementById("formName").value;
    const formEmail = document.getElementById("formEmail").value
    const formMessage = document.getElementById("formMessage").value
    const emailCheck = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const subject = `Message to from ${formName} about FullStackDevelopment`
    
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
          <h4>Please Reach Out and Send me a Message!</h4>
          <h6>I'll try to get back to you as soon as possible</h6>
          <br></br>
          <div className ="form">
            <h4>Your Name: </h4>
            <input id = "formName" placeholder="Your Name (Required)"></input>
            <br></br>
            <h4>Your Email:</h4>
            <input id = "formEmail" placeholder=" Your Email (Required)"></input>
            <br></br>
            <input id = "formMessage" placeholder="Please Leave a Short Message"></input>
            <br></br>
            <button className = "btn" onClick={submitMessage}>Submit</button>
          </div>
        </div>
      </div>
    );
  }