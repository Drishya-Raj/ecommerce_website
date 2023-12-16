const NavItem= () => {
    return (
        <div className="navbartwo">
            <ul className="left">
                <li><i className="fa-solid fa-bars"></i> All Category</li>
                <li>Hot offers</li>
                <li>Gift boxes</li>
                <li>Projects</li>
                <li>Menu Item</li>
                <li><label htmlFor="Help">Help</label>
                   
                </li>
            </ul>
            <ul className="right">
                <li>English,</li>
                <li><label htmlFor="USD">USD</label>
                    <select name="">
                        <option value>USD</option>
                        <option value>INR</option>
                    </select></li>
                <li>
                    <label htmlFor="Ship to">Ship to</label>
                    <select name="flag">
                        <option></option>
                    </select>
                </li>
            </ul>
        </div>
    )
}
export default NavItem;