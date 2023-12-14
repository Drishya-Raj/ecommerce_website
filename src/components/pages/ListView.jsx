import ListItem from "../listItems";
import ListViewContent from "../listViewContent";
import Navbar2 from "../navBar2";
import * as images from '../images';
import { Link } from 'react-router-dom';
import Seven from "../sectionSeven";
import Breadcrumbs from "../BreadCrumb";
import SearchBar from "../searchBar";


const ListView = () => {
   
    return (

        <div className="listview">
            <Navbar2 />
            <div className="navbar3">
                <Breadcrumbs/>
                <SearchBar />
            </div>
            <div className="middle">
                <ListItem />
                {/* <div className="flex"> */}
                <div className="column-flex">

                    <div className="navbar4">
                        <div>
                            <p>12,911 items in <b>Mobile accessory</b></p>
                        </div>
                        <div className="flexss">
                            <p>
                                <input type="checkbox" />
                                verified
                            </p>
                            <label htmlFor="feature">Featured
                                <select></select></label>
                            <div className='imgContainer'>
                                <Link to="/listview">
                                    <img src={images?.listview} alt="listview" />
                                </Link>
                                <Link to="/gridview">
                                    <img src={images?.gridview} alt="gridview" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* <FilterSection /> */}
                    
                        <ListViewContent />
                   

                </div>
                {/* </div> */}
            </div>
            <Seven />
        </div>

    )
}
export default ListView;