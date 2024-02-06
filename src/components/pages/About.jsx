export default function About() {
  const font = 'Alegreya';

  const blurb_style = {
    "font-family" : font,
    "width":"40%",
    "margin":"2rem"
  };

  const image_style = {
    'backgroundSize':'cover',
    "minWidth":"50%", //50% of the image size
    "maxWidth":"50vw", //50% of the window
    "border":"20px double black",
    "borderRadius":"50%",
  };

  const biograph = 
    `My name is Alan Lee. I'm a full stack developer from Birmingham,
    AL who is living in the Midwest. I am currently completing my PhD
    in Anthropology (Archaeology) and have a Master's in Chemistry.
    For the past eight years, I have been studying ancient blacksmithing of the Kushan Empire.`

    return (
      <div>
        <h1 className = "text-center">About Me</h1>
        <div className = "d-flex align-items-center flex-direction-switch">
          <img style = {image_style} src = "/src/assets/images/Sepia.png"></img>
          <p style = {blurb_style}>
            {biograph}
          </p>
        </div>

      </div>
    );
  }