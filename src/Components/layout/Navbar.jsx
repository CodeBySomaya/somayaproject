import "./Navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <h2>SA</h2>
                <span>Somaya Aziz</span>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Protfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;