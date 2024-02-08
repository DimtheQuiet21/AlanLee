function KeywordList (props) {

    const list = props.list;

    return ( 
        <ul>
            {list.map ((word,index) => (
                <li id = {index}>{word}</li>
            ))}
        </ul>
    )
}



export default KeywordList
