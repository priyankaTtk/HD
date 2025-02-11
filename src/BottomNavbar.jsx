import './BottomNavbar.css'

function BottomNavbar() {
    return(
        <div className="bottomnavbar">
            <div className="navbar-brand">
                <span>SIGN UP FOR OUR DAILY INSIDER</span>
            </div>
            <div className="navbar-search">
                <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="navbar-buttons">
                <button className="btn">Subscribe</button>
            </div>
        </div>
    );
}

export default BottomNavbar;