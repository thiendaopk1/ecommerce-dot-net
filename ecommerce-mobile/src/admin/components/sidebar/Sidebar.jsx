import {
  LineStyle, PermIdentity,
  Storefront, Timeline,
  TrendingUp
} from "@material-ui/icons";
import CategoryIcon from '@material-ui/icons/Category';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import "../../components/sidebar/sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Admin/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/Admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/Admin/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/Admin/orders-manager" className="link">
            <li className="sidebarListItem">
              <ShoppingBasketIcon className="sidebarIcon" />
              Orders
            </li>
            </Link>
            <Link to="/Admin/comments" className="link">
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Comments
            </li>
            </Link>
            <Link to="/Admin/categories" className="link">
              <li className="sidebarListItem">
                <CategoryIcon className="sidebarIcon" />
                Categories
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
