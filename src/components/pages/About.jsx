export default function About() {

  const blurb_style = {
    "font-family" : "Helvetica",
  };
  const image_style = {
    'backgroundImage':'url("/src/assets/images/Oman.png")',
    'backgroundSize':'cover',
    "min-width":"300px",
    "max-width":"900px"
  };


    return (
      <div>
        <h1>About Me</h1>
        <div className = "flex-column">
          <img style = {image_style} src = "/src/assets/images/OmanArcade.png"></img>
          <p style = {blurb_style}>
            My name is Alan Lee. I'm a full stack developer from Birmingham, AL who is living in the Midwest. I am currently completing my PhD in Anthropology (Archaeology) and have a Master's in Chemistry. For the past eight years, I have been studying ancient blacksmithing of the Kushan Empire. 
          </p>
        </div>

      </div>
    );
  }