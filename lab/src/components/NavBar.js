function NavBar(props) {
    return (

        <div className="navbar">
            <img src={props.image} alt='logo'></img>
            <img src={props.image2} alt='icone menu'></img>
            
        </div>
    );
}

export default NavBar;