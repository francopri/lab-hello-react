function Items(props) {

    return (

        <div className="items">
        
            <div>{props.image}</div>
            <div><h3>{props.text}</h3></div>
            <div><h4>{props.paragraph}</h4></div>
            <br />

        </div>
    );
}

export default Items;
