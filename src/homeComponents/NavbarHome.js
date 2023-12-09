import './Navbar.css';
function NavbarHome() {
    const Buttons = () => {
        return (
            <div className="buttons-container">
            <button className="custom_button_1"> S’identifier </button>
            <button className="custom_button_2"> S’inscrire </button>
            </div>
        );
        };
return(
<nav className="navbar-container">
    <ul className='frame'>
        <div className="logo-container">
            <div className='circle'>
                <span className='le'>Le</span>
            </div>
            <div    className='text'>
                <span className='boulet'>Boulot</span>
            </div>
        </div>
        <ul id="menu">
            <li className='menu_1'><a href='Trouver des stages.html'>Trouver des stages</a></li>
            <li className='menu_2'><a href='Découvrer les entreprises.html'>Découvrer les entreprises</a> </li>
        </ul>
    </ul>
    
    <Buttons/>
</nav>

);
}

export default NavbarHome;