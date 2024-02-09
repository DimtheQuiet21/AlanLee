export default function Contact() {
    return (
      <div>
        <h1 className = "text-center">Contact Me</h1>
      <div className = "container">
        <h4>Please Reach Out and Send me a Message!</h4>
        <h6>I'll try to get back to you as soon as possible</h6>
        <br></br>
        <div className ="form">
          <h4>Your Name: </h4>
          <input placeholder="Name"></input>
          <br></br>
          <h4>Your Email:</h4>
          <input placeholder="Email"></input>
          <br></br>
          <input placeholder="Please Leave a Short Message"></input>
          <br></br>
          <button className = "btn">Submit</button>
        </div>


      </div>

          {/* WHEN I am presented with the Contact section
          THEN I see a contact form with fields for a name, an email address, and a message
          WHEN I move my cursor out of one of the form fields without entering text
          THEN I receive a notification that this field is required
          WHEN I enter text into the email address field
          THEN I receive a notification if I have entered an invalid email address */}

      
      </div>
    );
  }