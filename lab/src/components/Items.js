function Items(props) {

    return (

        <div className='items'>
            <img src={props.image} alt="icone" />
            <h3>{props.text}</h3>
            <h4>{props.paragraph}</h4>
        </div>

    );
}

export default Items;
