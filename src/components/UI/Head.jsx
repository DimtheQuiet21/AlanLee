const font = 'Alegreya';

const title_style = {
    'fontFamily': font,
    'fontSize': '100px',
    'color': 'rgb(237, 175, 33)',
    'WebkitTextStrokeWidth': '1px',
    'WebkitTextStrokeColor': 'black'
}

const subtitle_style = {
    'fontFamily': font,
    'fontSize': '45px',
    'color': 'rgb(237, 175, 33)',
    'WebkitTextStrokeWidth': '1px',
    'WebkitTextStrokeColor': 'black',
    'margin': 0
}

const subscript_style = {
    'fontFamily': 'Helvetica',
    'fontWeight':'bold',
    'fontSize': '25px',
    'color': 'rgb(249, 236, 207)',
    'WebkitTextStrokeWidth': '1px',
    'WebkitTextStrokeColor': 'black',
    'margin': 0
}

function Head() {
    return (
            <div className = "d-flex justify-content-center">
                <p style = {title_style}>A</p>
                <div 
                    className ="d-flex flex-column align-items-start justify-content-center">
                    <p style = {subtitle_style}>lan</p>
                    <p style = {subscript_style}>FullStack</p>
                </div>
                <p style = {title_style}>L</p>
                <div 
                    className ="d-flex flex-column align-items-start justify-content-center">
                    <p style = {subtitle_style}>ee</p>
                    <p style = {subscript_style}>Developer</p>
                </div>

            </div>
    );
};

export default Head;