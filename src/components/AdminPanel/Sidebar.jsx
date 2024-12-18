import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // State to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);
  // State to track selected menu
  const [selectedMenu, setSelectedMenu] = useState(null);
  console.log("🚀 ~ Sidebar ~ selectedMenu:", selectedMenu);

  // Function to toggle menu
  const handleToggle = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  // Function to handle selecting a menu item
  const handleSelect = (menuName) => {
    setSelectedMenu(menuName);
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="../../../assets/dist/img/user2-160x160.jpg"
              className="img-circle"
              alt="User Image"
            />
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>
            <Link to="#">
              <i className="fa fa-circle text-success" /> Online
            </Link>
          </div>
        </div>

        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input
              type="text"
              name="q"
              className="form-control"
              placeholder="Search..."
            />
            <span className="input-group-btn">
              <button
                type="submit"
                name="search"
                id="search-btn"
                className="btn btn-flat"
              >
                <i className="fa fa-search" />
              </button>
            </span>
          </div>
        </form>

        <ul className="sidebar-menu">
          <li className="header">MAIN NAVIGATION</li>

          {/* Example for Dashboard Menu */}
          <li
            className={`treeview ${
              openMenu === "dashboard" ? "menu-open" : ""
            } ${selectedMenu === "dashboard" ? "active" : ""}`}
          >
            <Link to="#" onClick={() => handleToggle("dashboard")}>
              <i className="fa fa-dashboard" /> <span>Dashboard</span>
              <i className="fa fa-angle-left pull-right" />
            </Link>
            <ul
              className="treeview-menu"
              style={{ display: openMenu === "dashboard" ? "block" : "none" }}
            >
              <li className={selectedMenu === "dashboard-v1" ? "active" : ""}>
                <Link
                  to="/dashboard"
                  onClick={() => handleSelect("dashboard-v1")}
                >
                  <i className="fa fa-circle-o" /> Dashboard v1
                </Link>
              </li>
              <li className={selectedMenu === "dashboard-v2" ? "active" : ""}>
                <Link
                  to="index2.html"
                  onClick={() => handleSelect("dashboard-v2")}
                >
                  <i className="fa fa-circle-o" /> Dashboard v2
                </Link>
              </li>
            </ul>
          </li>

          {/* Example for Layout Options Menu */}
          <li
            className={`treeview ${openMenu === "layout" ? "menu-open" : ""} ${
              selectedMenu === "layout" ? "active" : ""
            }`}
          >
            <Link to="#" onClick={() => handleToggle("layout")}>
              <i className="fa fa-files-o" />
              <span>Operation</span>
              <span className="label label-primary pull-right">4</span>
            </Link>
            <ul
              className="treeview-menu"
              style={{ display: openMenu === "layout" ? "block" : "none" }}
            >
              <li className={selectedMenu === "CRUD" ? "active" : ""}>
                <Link to="crud/simplecrud" onClick={() => handleSelect("CRUD")}>
                  <i className="fa fa-circle-o" /> Crud
                </Link>
              </li>
              <li className={selectedMenu === "Accordion" ? "active" : ""}>
                <Link
                  to="/operation/Accordion"
                  onClick={() => handleSelect("Accordion")}
                >
                  <i className="fa fa-circle-o" /> Accordion
                </Link>
              </li>
              <li className={selectedMenu === "boxed" ? "active" : ""}>
                <Link
                  to="pages/layout/boxed.html"
                  onClick={() => handleSelect("boxed")}
                >
                  <i className="fa fa-circle-o" /> Boxed
                </Link>
              </li>
              <li className={selectedMenu === "fixed" ? "active" : ""}>
                <Link
                  to="pages/layout/fixed.html"
                  onClick={() => handleSelect("fixed")}
                >
                  <i className="fa fa-circle-o" /> Fixed
                </Link>
              </li>
              <li
                className={selectedMenu === "collapsed-sidebar" ? "active" : ""}
              >
                <Link
                  to="pages/layout/collapsed-sidebar.html"
                  onClick={() => handleSelect("collapsed-sidebar")}
                >
                  <i className="fa fa-circle-o" /> Collapsed Sidebar
                </Link>
              </li>
            </ul>
          </li>

          <li className={selectedMenu === "widgets" ? "active" : ""}>
            <Link
              to="pages/widgets.html"
              onClick={() => handleSelect("widgets")}
            >
              <i className="fa fa-th" /> <span>Widgets</span>{" "}
              <small className="label pull-right bg-green">new</small>
            </Link>
          </li>

          {/* Add more menus similarly */}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
