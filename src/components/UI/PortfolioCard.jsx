import KeywordList from './KeywordList.jsx';

function PortfolioCard (props) {

    return ( 
        <div className = "card m-2" id = {`project-${props.id}`}>
            <h2 className = "text-center">{props.name}</h2>
            <img src = {props.img}></img>
            <h5 className = "ps-4 mt-4 mb-0 text-center">Key-Words</h5>
            <KeywordList list = {props.keywords} />
            <p>{props.description}</p>
            <h4><a href = {props.deployed}>Deployed Website</a></h4>
            <h4><a href = {props.repo}>Repository</a></h4>
        </div>
    )
}

export default PortfolioCard