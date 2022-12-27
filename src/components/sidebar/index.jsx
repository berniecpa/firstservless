import React from "react";
import { Link, withRouter } from "react-router-dom";
import { avatar17 } from '../imagepath';

const SidebarNav = (props) => {
  const exclusionArray = ["login", "register", "forgot-password", "error-404", "error-500", "email", "mail-view", "components"];
  if (
    exclusionArray.indexOf(props.location.pathname.split("/")[1]) >= 0
  ) {
    return "";
  }
  const { location } = props
  let pathname = location.pathname  
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <form action="search.html" className="mobile-view">
          <input className="form-control" type="text" placeholder="Search here" />
          <button className="btn" type="button"><i className="fa fa-search" /></button>
        </form>
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="nav-item nav-profile">
              <a className="nav-link">
                <div className="nav-profile-image">
                  <img src={avatar17} alt="profile" />
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">David Grey. H</span>
                  <span className="text-white text-small">Project Manager</span>
                </div>
                <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
              </a>
            </li>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="submenu">
              <a className={`${pathname === "/" || pathname === "/projects-dashboard" || pathname === "/index" ||
                pathname === "/leads-dashboard" ? "active subdrop" : ""}`}><i className="feather-home" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link to="/" className={`${pathname === "/" ? "active" : ""}`}>Deals Dashboard</Link></li>
                <li><Link to="/projects-dashboard" className={`${pathname === "/projects-dashboard" ? "active" : ""}`}>Projects Dashboard</Link></li>
                <li><Link to="/leads-dashboard" className={`${pathname === "/leads-dashboard" ? "active" : ""}`}>Leads Dashboard</Link></li>
              </ul>
            </li>
            <li>
              <Link className={`${pathname.includes("tasks") ? "active" : ""}`} to="/tasks"><i className="feather-check-square" /> <span>Tasks</span></Link>
            </li>
            <li>
              <Link className={`${pathname.includes("contacts") ? "active" : ""}`} to="/contacts"><i className="feather-smartphone" /> <span>Contacts</span></Link>
            </li>
            <li>
              <Link className={`${pathname.includes("companies") ? "active" : ""}`} to="/companies"><i className="feather-database" /> <span>Companies</span></Link>
            </li>
            <li>
              <Link className={`${pathname === "/leads" ? "active" : ""}`} to="/leads"><i className="feather-user" /> <span>Leads</span></Link>
            </li>
            <li>
              <Link className={`${pathname.includes("deals") ? "active" : ""}`} to="/deals"><i className="feather-radio" /> <span>Deals</span></Link>
            </li>
            <li>
              <Link className={`${pathname === "/projects" ? "active" : ""}`} to="/projects"><i className="feather-grid" /> <span>Projects</span></Link>
            </li>
            <li>
              <Link className={`${pathname.includes("reports") ? "active" : ""}`} to="/reports"><i className="feather-bar-chart-2" /> <span>Reports</span></Link>
            </li>
            <li>
              <Link className={`${pathname.includes("activities") ? "active" : ""}`} to="/activities"><i className="feather-calendar" /> <span>Activities</span></Link>
            </li>
            <li className="submenu">
              <a className={`${pathname === "/blog" || pathname === "/add-blog" ||
                pathname === "/edit-blog" || pathname === "categories" ? "active subdrop" : ""}`}><i className="feather-grid" /> <span>Blogs</span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link to="/blog" className={`${pathname === "/blog" || pathname === "/pending-blog" ? "active" : ""}`}>All Blogs</Link></li>
                <li><Link to="/add-blog" className={`${pathname === "/add-blog" ? "active" : ""}`}>Add Blog</Link></li>
                <li><Link to="/edit-blog" className={`${pathname === "/edit-blog" ? "active" : ""}`}>Edit Blog</Link></li>
                <li><Link to="/categories" className={`${pathname === "/categories" ? "active" : ""}`}>Categories</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a className={`${pathname === "/invoices" || pathname === "/invoice-grid" ||
                pathname === "/add-invoice" || pathname === "edit-invoice" || pathname === "view-invoice" || pathname === "invoices-settings" ? "active subdrop" : ""}`}><i className="feather-clipboard" /> <span>Invoices </span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link to="/invoices" className={`${pathname === "/invoices" || pathname === "/invoices-paid" || pathname === "/invoices-overdue" || pathname === "/invoices-draft" || pathname === "/invoices-recurring" || pathname === "/invoices-cancelled" ? "active" : ""}`}>Invoices List</Link></li>
                <li><Link to="/invoice-grid" className={`${pathname === "/invoice-grid" ? "active" : ""}`}>Invoices Grid</Link></li>
                <li><Link to="/add-invoice" className={`${pathname === "/add-invoice" ? "active" : ""}`}>Add Invoices</Link></li>
                <li><Link to="/edit-invoice" className={`${pathname === "/edit-invoice" ? "active" : ""}`}>Edit Invoices</Link></li>
                <li><Link to="/view-invoice" className={`${pathname === "/view-invoice" ? "active" : ""}`}>Invoices Details</Link></li>
                <li><Link to="/invoices-settings" className={`${pathname === "/invoices-settings" || pathname === "/tax-settings" || pathname === "/bank-settings" ? "active" : ""}`}>Invoices Settings</Link></li>
              </ul>
            </li>
            <li>
              <a className={`${pathname.includes("email") ? "active" : ""}`} href="/email"><i className="feather-mail" /> <span>Email</span></a>
            </li>
            <li>
              <a className={`${pathname.includes("settings") ? "active" : ""}`} href="/settings"><i className="feather-settings" /> <span>Settings</span></a>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("error-404") || pathname.includes("error-500") ? "active subdrop" : ""}`}><i className="feather-alert-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("error-404") ? "active" : ""}`} to="/error-404">404 Error </Link></li>
                <li><Link className={`${pathname.includes("error-500") ? "active" : ""}`} to="/error-500">500 Error </Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("faq") || pathname.includes("terms")
                || pathname.includes("privacy-policy") || pathname.includes("blank-page") ? "active subdrop" : ""}`}><i className="feather-list" /> <span> Pages </span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("faq") ? "active" : ""}`} to="/faq"> FAQ </Link></li>
                <li><Link className={`${pathname.includes("terms") ? "active" : ""}`} to="/terms"> Terms </Link></li>
                <li><Link className={`${pathname.includes("privacy-policy") ? "active" : ""}`} to="/privacy-policy"> Privacy Policy </Link></li>
                <li><Link className={`${pathname.includes("blank-page") ? "active" : ""}`} to="/blank-page"> Blank Page </Link></li>
              </ul>
            </li>
            <li className="menu-title">
              <span>UI Interface</span>
            </li>
            <li>
              <a className={`${pathname.includes("components") ? "active" : ""}`} href="/components"><i className="feather-layout" /> <span>Components</span></a>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("sweetalerts") || pathname.includes("tooltip") || pathname.includes("popover")
                || pathname.includes("ribbon") || pathname.includes("clipboard") || pathname.includes("drag-drop") || pathname.includes("rangeslider")
                || pathname.includes("rating") || pathname.includes("toastr") || pathname.includes("text-editor") || pathname.includes("counter")
                || pathname.includes("scrollbar") || pathname.includes("spinner") || pathname.includes("notification") || pathname.includes("lightbox")
                || pathname.includes("stickynote") || pathname.includes("timeline") || pathname.includes("horizontal-timeline") || pathname.includes("form-wizard") ? "active subdrop" : ""}`}>
                <i className="feather feather-box" /> <span> Elements </span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("sweetalerts") ? "active" : ""}`} to="/sweetalerts">Sweet Alerts</Link></li>
                <li><Link className={`${pathname.includes("tooltip") ? "active" : ""}`} to="/tooltip">Tooltip</Link></li>
                <li><Link className={`${pathname.includes("popover") ? "active" : ""}`} to="/popover">Popover</Link></li>
                <li><Link className={`${pathname.includes("ribbon") ? "active" : ""}`} to="/ribbon">Ribbon</Link></li>
                <li><Link className={`${pathname.includes("clipboard") ? "active" : ""}`} to="/clipboard">Clipboard</Link></li>
                <li><Link className={`${pathname.includes("drag-drop") ? "active" : ""}`} to="/drag-drop">Drag & Drop</Link></li>
                <li><Link className={`${pathname.includes("rangeslider") ? "active" : ""}`} to="/rangeslider">Range Slider</Link></li>
                <li><Link className={`${pathname.includes("rating") ? "active" : ""}`} to="/rating">Rating</Link></li>
                <li><Link className={`${pathname.includes("toastr") ? "active" : ""}`} to="/toastr">Toastr</Link></li>
                <li><Link className={`${pathname.includes("text-editor") ? "active" : ""}`} to="/text-editor">Text Editor</Link></li>
                <li><Link className={`${pathname.includes("counter") ? "active" : ""}`} to="/counter">Counter</Link></li>
                <li><Link className={`${pathname.includes("scrollbar") ? "active" : ""}`} to="/scrollbar">Scrollbar</Link></li>
                <li><Link className={`${pathname.includes("spinner") ? "active" : ""}`} to="/spinner">Spinner</Link></li>
                <li><Link className={`${pathname.includes("notification") ? "active" : ""}`} to="/notification">Notification</Link></li>
                <li><Link className={`${pathname.includes("lightbox") ? "active" : ""}`} to="/lightbox">Lightbox</Link></li>
                <li><Link className={`${pathname.includes("stickynote") ? "active" : ""}`} to="/stickynote">Sticky Note</Link></li>
                <li><Link className={`${pathname === "/timeline" ? "active" : ""}`} to="/timeline">Timeline</Link></li>
                <li><Link className={`${pathname === "/horizontal-timeline" ? "active" : ""}`} to="/horizontal-timeline">Horizontal Timeline</Link></li>
                <li><Link className={`${pathname.includes("form-wizard") ? "active" : ""}`} to="/form-wizard">Form Wizard</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("chart-apex") || pathname.includes("chart-js")
                || pathname.includes("chart-morris") || pathname.includes("chart-flot")
                || pathname.includes("chart-peity") || pathname.includes("chart-c3") ? "active subdrop" : ""}`}><i className="feather feather-bar-chart-2" /> <span>Charts</span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("chart-apex") ? "active" : ""}`} to="/chart-apex">Apex Charts</Link></li>
                <li><Link className={`${pathname.includes("chart-js") ? "active" : ""}`} to="/chart-js">Chart Js</Link></li>
                <li><Link className={`${pathname.includes("chart-morris") ? "active" : ""}`} to="/chart-morris">Morris Charts</Link></li>
                <li><Link className={`${pathname.includes("chart-flot") ? "active" : ""}`} to="/chart-flot">Flot Charts</Link></li>
                <li><Link className={`${pathname.includes("chart-peity") ? "active" : ""}`} to="/chart-peity">Peity Charts</Link></li>
                <li><Link className={`${pathname.includes("chart-c3") ? "active" : ""}`} to="/chart-c3">C3 Charts</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("icon-fontawesome") || pathname.includes("icon-feather")
                || pathname.includes("icon-ionic") || pathname.includes("icon-material")
                || pathname.includes("icon-pe7") || pathname.includes("icon-simpleline") || pathname.includes("icon-themify") || pathname.includes("icon-weather")
                || pathname.includes("icon-typicon") || pathname.includes("icon-flag") ? "active subdrop" : ""}`}><i className="feather feather-award" /> <span>Icons</span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("icon-fontawesome") ? "active" : ""}`} to="/icon-fontawesome">Fontawesome Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-feather") ? "active" : ""}`} to="/icon-feather">Feather Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-ionic") ? "active" : ""}`} to="/icon-ionic">Ionic Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-material") ? "active" : ""}`} to="/icon-material">Material Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-pe7") ? "active" : ""}`} to="/icon-pe7">Pe7 Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-simpleline") ? "active" : ""}`} to="/icon-simpleline">Simpleline Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-themify") ? "active" : ""}`} to="/icon-themify">Themify Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-weather") ? "active" : ""}`} to="/icon-weather">Weather Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-typicon") ? "active" : ""}`} to="/icon-typicon">Typicon Icons</Link></li>
                <li><Link className={`${pathname.includes("icon-flag") ? "active" : ""}`} to="/icon-flag">Flag Icons</Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("form-basic-inputs") || pathname.includes("form-input-groups")
                || pathname.includes("form-horizontal") || pathname.includes("form-vertical")
                || pathname.includes("form-mask") || pathname.includes("form-validation") ? "active subdrop" : ""}`}><i className="feather-credit-card" /> <span> Forms </span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("form-basic-inputs") ? "active" : ""}`} to="/form-basic-inputs">Basic Inputs </Link></li>
                <li><Link className={`${pathname.includes("form-input-groups") ? "active" : ""}`} to="/form-input-groups">Input Groups </Link></li>
                <li><Link className={`${pathname.includes("form-horizontal") ? "active" : ""}`} to="/form-horizontal">Horizontal Form </Link></li>
                <li><Link className={`${pathname.includes("form-vertical") ? "active" : ""}`} to="/form-vertical"> Vertical Form </Link></li>
                <li><Link className={`${pathname.includes("form-mask") ? "active" : ""}`} to="/form-mask"> Form Mask </Link></li>
                <li><Link className={`${pathname.includes("form-validation") ? "active" : ""}`} to="/form-validation"> Form Validation </Link></li>
              </ul>
            </li>
            <li className="submenu">
              <a className={`${pathname.includes("tables-basic") || pathname.includes("data-tables") ? "active subdrop" : ""}`}><i className="feather-box" /> <span> Tables </span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li><Link className={`${pathname.includes("tables-basic") ? "active" : ""}`} to="/tables-basic">Basic Tables </Link></li>
                <li><Link className={`${pathname.includes("data-tables") ? "active" : ""}`} to="/data-tables">Data Table </Link></li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Extras</span>
            </li>
            <li className="submenu">
              <a><i className="feather-command" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
              <ul className="sub-menus">
                <li className="submenu">
                  <a> <span>Level 1</span> <span className="menu-arrow" /></a>
                  <ul className="sub-menus">
                    <li><a><span>Level 2</span></a></li>
                    <li className="submenu">
                      <a> <span> Level 2</span> <span className="menu-arrow" /></a>
                      <ul className="sub-menus">
                        <li><a>Level 3</a></li>
                        <li><a>Level 3</a></li>
                      </ul>
                    </li>
                    <li><a> <span>Level 2</span></a></li>
                  </ul>
                </li>
                <li>
                  <a> <span>Level 1</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SidebarNav);
