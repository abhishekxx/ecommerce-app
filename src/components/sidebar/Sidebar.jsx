import "./sidebar.css";
import { UserOutlined,
  HistoryOutlined,
    BellOutlined,
    KeyOutlined,
    StarOutlined,
} from '@ant-design/icons';


import { Link } from "react-router-dom";

 

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to='/personalInformation' className="link">
            <li className="sidebarListItem">
              <UserOutlined  className="sidebarIcon" />
              Personal Information
            </li>
            </Link>
            <li className="sidebarListItem">
            <StarOutlined  className="sidebarIcon" />
              Favourities
            </li>
            <li className="sidebarListItem">
            <HistoryOutlined  className="sidebarIcon" />
              Order History
            </li>
            <li className="sidebarListItem">
            <KeyOutlined  className="sidebarIcon" />
              Password Change
            </li><li className="sidebarListItem">
            <BellOutlined  className="sidebarIcon" />
              Notification
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
