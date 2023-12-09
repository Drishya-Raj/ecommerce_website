const Navbar2 = () => {
    return (
        <div className="navbartwo">
            <ul className="left">
                <li><i className="fa-solid fa-bars"></i> All Category</li>
                <li>Hot offers</li>
                <li>Gift boxes</li>
                <li>Projects</li>
                <li>Menu Item</li>
                <li><label htmlFor="Help">Help</label>
                    <select name="">
                        <option></option>
                    </select>
                </li>
            </ul>
            <ul className="right">
                <li>English,</li>
                <li><label htmlFor="USD">USD</label>
                    <select name="">
                        <option></option>
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
export default Navbar2;