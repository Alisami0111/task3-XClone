import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faHouse ,faBell,faEnvelope,faBookmark,faList,faUser ,faEllipsisV    } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className="sidebar">


      <div className="sidebarOption ">
        <span><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
      </div>
      
      <div className="sidebarOption"><FontAwesomeIcon icon={faHouse} size="16px" />
        <span> Home</span>
      </div>
      <div className="sidebarOption"><FontAwesomeIcon icon={faBell} size="16px" />
        <span>Notifications</span>
      </div>
      <div className="sidebarOption"><FontAwesomeIcon icon={faEnvelope} size="16px" />
        <span>Messages</span>
      </div>
      <div className="sidebarOption"><FontAwesomeIcon icon={faBookmark} size="16px" />
        <span>Bookmarks</span>
      </div>
      <div className="sidebarOption"><FontAwesomeIcon icon={faList} size="16px" />
        <span>Lists</span>
      </div>
      <div className="sidebarOption"><FontAwesomeIcon icon={faUser} size="16px" />
        <span>Profile</span>
      </div>
      <div className="sidebarOption"><FontAwesomeIcon icon={faEllipsisV} size="16px" />
        <span>More</span>
      </div>
      <button className="tweetButton">Tweet</button>
    </div>
  );
};

export default Sidebar;
