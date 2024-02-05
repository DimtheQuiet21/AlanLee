const font = 'Alegreya';

const header_style = {
    'background-color': 'rgb(197, 20, 20)',
    'border-radius': '10px',
    'box-shadow': '0 0 10px rgba(0, 0, 0, 0.1)'
}

const title_style = {
    'font-family': font,
    'font-size': '100px',
    'color': 'rgb(237, 175, 33)',
    '-webkit-text-stroke-width': '1px',
    '-webkit-text-stroke-color': 'black'
}

const subtitle_style = {
    'font-family': font,
    'font-size': '45px',
    'color': 'rgb(237, 175, 33)',
    '-webkit-text-stroke-width': '1px',
    '-webkit-text-stroke-color': 'black',
    'margin': 0
}

const subscript_style = {
    'font-family': 'Helvetica',
    'font-weight':'bold',
    'font-size': '25px',
    'color': 'rgb(249, 236, 207)',
    '-webkit-text-stroke-width': '1px',
    '-webkit-text-stroke-color': 'black',
    'margin': 0
}

function Head() {
    return (
        <header className = "container">
            <div 
                className = "d-flex justify-content-center"
                style ={header_style}>
                <p style = {title_style}>A</p>
                <div 
                    className ="d-flex flex-column align-items-start justify-content-center">
                    <p style = {subtitle_style}>lan</p>
                    <p style = {subscript_style}>Full-Stack</p>
                </div>
                <p style = {title_style}>L</p>
                <div 
                    className ="d-flex flex-column align-items-start justify-content-center">
                    <p style = {subtitle_style}>ee</p>
                    <p style = {subscript_style}>Developer</p>
                </div>
            </div>
        </header>
    );
};

export default Head;