function KeywordList (props) {

    const list = props.list;

    return ( 
        <div className="col">
            <ul className = "d-flex justify-content-center" style = {{flexWrap:"wrap"}}>
                {list.map ((word,index) => (
                    <li className ="m-3" id = {index} key = {index}>{word}</li>
                ))}
            </ul>
        </div>

    )
}



export default KeywordList
