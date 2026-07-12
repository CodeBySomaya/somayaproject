import "./Navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <h2>SA</h2>
                <span>Somaya Aziz</span>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;