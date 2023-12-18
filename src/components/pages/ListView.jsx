import ListItem from "../listItems";
import ListViewContent from "../listViewContent";
import * as images from '../images';
import { Link } from 'react-router-dom';
import Seven from "../sectionSeven";
import Breadcrumbs from "../BreadCrumb";
import SearchBar from "../searchBar";


const ListView = ({crumbs}) => {
   
    return (
        <div className="listview">
            <div className="navbar3">
                <Breadcrumbs crumbs={crumbs}/>
                <SearchBar />
            </div>
            <div className="middle">
                <ListItem />
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
                        <ListViewContent />
                </div>
            </div>
            <Seven />
        </div>

    )
}
export default ListView;