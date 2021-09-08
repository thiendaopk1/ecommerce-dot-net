import { LineStyle, PermIdentity, Storefront, Timeline, TrendingUp } from '@material-ui/icons';
import CategoryIcon from '@material-ui/icons/Category';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import '../../components/sidebar/sidebar.css';
import classNames from 'classnames';
import { useState } from 'react';
function Sidebar() {
  const [active, setActive] = useState(1);
  const handleActive = (num) => {
    setActive(num);
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Admin/" className="link">
              <li
                onClick={() => handleActive(1)}
                className={classNames('sidebarListItem', { active: active === 1 })}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/Admin/users" className="link">
              <li
                onClick={() => handleActive(2)}
                className={classNames('sidebarListItem', { active: active === 2 })}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/Admin/products" className="link">
              <li
                onClick={() => handleActive(3)}
                className={classNames('sidebarListItem', { active: active === 3 })}
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/Admin/orders-manager" className="link">
              <li
                onClick={() => handleActive(4)}
                className={classNames('sidebarListItem', { active: active === 4 })}
              >
                <ShoppingBasketIcon className="sidebarIcon" />
                Orders
              </li>
            </Link>
            <Link to="/Admin/comments" className="link">
              <li
                onClick={() => handleActive(5)}
                className={classNames('sidebarListItem', { active: active === 5 })}
              >
                <FeedbackIcon className="sidebarIcon" />
                Comments
              </li>
            </Link>
            <Link to="/Admin/categories" className="link">
              <li
                onClick={() => handleActive(6)}
                className={classNames('sidebarListItem', { active: active === 6 })}
              >
                <CategoryIcon className="sidebarIcon" />
                Categorys
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
