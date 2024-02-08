import KeywordList from './KeywordList.jsx';

function PortfolioCard (props) {

    return ( 
        <div className = "card" id = {`project-${props.id}`}>
            <h2>{props.name}</h2>
            <img src = {props.img}></img>
            <h6>Key-Words</h6>
            <KeywordList list = {props.keywords} />
            <p>{props.description}</p>
            <h4><a href = {props.deployed}>Deployed Website</a></h4>
            <h4><a href = {props.repo}>Repository</a></h4>
        </div>
    )
}

export default PortfolioCard