import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header className="main-header">
      <Link href="index2.html" className="logo">
        <b>Admin</b>LTE
      </Link>
      <nav className="navbar navbar-static-top" role="navigation">
        <Link
          href="#"
          className="sidebar-toggle"
          data-toggle="offcanvas"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </Link>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <Link href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o" />
                <span className="label label-success">4</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  <ul className="menu">
                    <li>
                      <Link href="#">
                        <div className="pull-left">
                          <img
                            src="../../../assets/dist/img/user2-160x160.jpg"
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Support Team
                          <small>
                            <i className="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="pull-left">
                          <img
                            src="../../../assets/dist/img/user3-128x128.jpg"
                            className="img-circle"
                            alt="user image"
                          />
                        </div>
                        <h4>
                          AdminLTE Design Team
                          <small>
                            <i className="fa fa-clock-o" /> 2 hours
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="pull-left">
                          <img
                            src="../../../assets/dist/img/user4-128x128.jpg"
                            className="img-circle"
                            alt="user image"
                          />
                        </div>
                        <h4>
                          Developers
                          <small>
                            <i className="fa fa-clock-o" /> Today
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="pull-left">
                          <img
                            src="../../../assets/dist/img/user3-128x128.jpg"
                            className="img-circle"
                            alt="user image"
                          />
                        </div>
                        <h4>
                          Sales Department
                          <small>
                            <i className="fa fa-clock-o" /> Yesterday
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <div className="pull-left">
                          <img
                            src="../../../assets/dist/img/user4-128x128.jpg"
                            className="img-circle"
                            alt="user image"
                          />
                        </div>
                        <h4>
                          Reviewers
                          <small>
                            <i className="fa fa-clock-o" /> 2 days
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <Link href="#">See All Messages</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown notifications-menu">
              <Link href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="header">You have 10 notifications</li>
                <li>
                  <ul className="menu">
                    <li>
                      <Link href="#">
                        <i className="fa fa-users text-aqua" /> 5 new members
                        joined today
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-warning text-yellow" /> Very long
                        description here that may not fit into the page and may
                        cause design problems
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-users text-red" /> 5 new members
                        joined
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-shopping-cart text-green" /> 25
                        sales made
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-user text-red" /> You changed your
                        username
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <Link href="#">View all</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown tasks-menu">
              <Link href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o" />
                <span className="label label-danger">9</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="header">You have 9 tasks</li>
                <li>
                  <ul className="menu">
                    <li>
                      <Link href="#">
                        <h3>
                          Design some buttons
                          <small className="pull-right">20%</small>
                        </h3>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-aqua"
                            style={{ width: "20%" }}
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <h3>
                          Create a nice theme
                          <small className="pull-right">40%</small>
                        </h3>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-green"
                            style={{ width: "40%" }}
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">40% Complete</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <h3>
                          Some task I need to do
                          <small className="pull-right">60%</small>
                        </h3>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-red"
                            style={{ width: "60%" }}
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">60% Complete</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <h3>
                          Make beautiful transitions
                          <small className="pull-right">80%</small>
                        </h3>
                        <div className="progress xs">
                          <div
                            className="progress-bar progress-bar-yellow"
                            style={{ width: "80%" }}
                            role="progressbar"
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">80% Complete</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <Link href="#">View all tasks</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown user user-menu">
              <Link href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img
                  src="../../../assets/dist/img/user2-160x160.jpg"
                  className="user-image"
                  alt="User Image"
                />
                <span className="hidden-xs">Alexander Pierce</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img
                    src="../../../assets/dist/img/user2-160x160.jpg"
                    className="img-circle"
                    alt="User Image"
                  />
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>
                <li className="user-body">
                  <div className="col-xs-4 text-center">
                    <Link href="#">Followers</Link>
                  </div>
                  <div className="col-xs-4 text-center">
                    <Link href="#">Sales</Link>
                  </div>
                  <div className="col-xs-4 text-center">
                    <Link href="#">Friends</Link>
                  </div>
                </li>
                <li className="user-footer">
                  <div className="pull-left">
                    <Link href="#" className="btn btn-default btn-flat">
                      Profile
                    </Link>
                  </div>
                  <div className="pull-right">
                    <Link href="#" className="btn btn-default btn-flat">
                      Sign out
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
