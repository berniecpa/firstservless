import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { SystemUser,CircleImg,C_logo,C_logo2 } from "../imagepath"
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

const Activities =()=> {
  const data= [
        {
         id: 1,
         subject:"Call",
         deal: "Ansanio tech",
         contact: "Cravo Ansanio",
         email: "anson@gmail.com",
         phone: "9874565464",
         companies: "Soylent Corp",
        },

        {
            id: 2,
            subject:"Call",
            deal: "Ansanio tech",
            contact: "Cravo Ansanio",
            email: "johndoe@gmail.com",
            phone: "9874565464",
            companies: "Soylent Corp",
           },
           {
            id: 3,
            subject:"Call",
            deal: "Lunch",
            contact: "John Doe",
            email: "johndoe@gmail.com",
            phone: "9874565464",
            companies: "Acme Corporation"	
           },
           {
            id: 4,
            subject:"Call",
            deal: "Lunch",
            contact: "John Doe",
            email: "johndoe@gmail.com",
            phone: "9874565464",
            companies: "Acme Corporation"	
           },
           {
            id: 5,
            subject:"Phone",
            deal: "Lunch",
            contact: "John Doe",
            email: "johndoe@gmail.com",
            phone: "9874565464",
            companies: "Acme Corporation"	
           },
  
  
      ];

    const columns = [
     
      {
        title: "Subject",
        dataIndex: "subject",
        render: (text, record) => (
          <><a href="#" data-bs-toggle="modal" data-bs-target="#add_activity">{text}</a></>
          ),
        sorter: (a, b) => a.subject.length - b.subject.length,
      },

      {
        title: "Deal",
        dataIndex: "deal",
        render: (text, record) => (
          <><a href="#" data-bs-toggle="modal" data-bs-target="#company-details">{text}</a></>
          ),
        sorter: (a, b) => a.deal.length - b.deal.length,
      },
      {
        title: "Contact Person",
        dataIndex: "contact",
        render: (text, record) => (
          <>{text}</>
          ),
        sorter: (a, b) => a.contact.length - b.contact.length,
      },
      {
        title: "Email",
        dataIndex: "email",
        render: (text, record) => (
          <>{text}</>
          ),
        sorter: (a, b) => a.email.length - b.email.length,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        render: (text, record) => (
          <>{text}</>
          ),
        sorter: (a, b) => a.phone.length - b.phone.length,
      },
      {
        title: "Companies",
        dataIndex: "companies",
        render: (text, record) => (
          <><a href="#" data-bs-toggle="modal" data-bs-target="#company-details">{text}</a></>
          ),
        sorter: (a, b) => a.companies.length - b.companies.length,
      },
      {
        title: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action text-center">
          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="material-icons">more_vert</i></a>
          <div className="dropdown-menu dropdown-menu-right h-100">
            <a style={{display:"initial"}} className="dropdown-item">Edit</a>
          </div>
        </div>
          ),
        }
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
        className: "checkbox-red"
      })
    };
    return (
      <div className="page-wrapper">
      <Helmet>
        <title>Activities - CRMS admin Template</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        <div className="crms-title row bg-white">
          <div className="col  p-0">
            <h3 className="page-title m-0">
              <span className="page-title-icon bg-gradient-primary text-white me-2">
                <i className="feather-calendar" />
              </span> Activities </h3>
          </div>
          <div className="col p-0 text-end">
            <ul className="breadcrumb bg-white float-end m-0 pl-0 pr-0">
              <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
              <li className="breadcrumb-item active">Activities</li>
            </ul>
          </div>
        </div>
        <div className="page-header pt-3 mb-0 ">
          <div className="row">
            <div className="col">
              <div className="dropdown">
                <a className="dropdown-toggle recently-viewed" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Propose Times </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item">Recently Viewed</a>
                  <a className="dropdown-item">Items I'm following</a>
                  <a className="dropdown-item">All Activity</a>
                  <a className="dropdown-item">All Closed Activity</a>
                  <a className="dropdown-item">All Open Activity</a>
                  <a className="dropdown-item">My Activity</a>
                </div>
              </div>
            </div>
            <div className="col text-end">
              <ul className="list-inline-item pl-0">
                <li className="list-inline-item">
                  <button className="add btn btn-gradient-primary font-weight-bold text-white todo-list-add-btn btn-rounded" id="add-task" data-bs-toggle="modal" data-bs-target="#add_activity">Add Activity</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Content Starts */}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-body">
                <div className="table-responsive activity-tables">                  
                  <Table
                      rowSelection={{
                       
                        ...rowSelection,
                      }}
                      pagination= { {total : data.length,
                          showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                      style = {{overflowX : 'auto'}}
                      columns={columns}                 
                      bordered
                      dataSource={data}
                      rowKey={record => record.id}
                      // onChange={handleTableChange}
                  />     
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Content End */}
      </div>
      {/* /Page Content */}
      <div className="modal right fade" id="company-details" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog" role="document">
          <button type="button" className="close md-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              <div className="row w-100">
                <div className="col-md-7 account d-flex">
                  <div className="company_img">
                    <img src={C_logo} alt="User" className="user-image" />
                  </div>
                  <div>
                    <p className="mb-0">Company</p>
                    <span className="modal-title">Clampett Oil and Gas Corp</span>
                    <span className="rating-star"><i className="fa fa-star" aria-hidden="true" /></span>
                    <span className="lock"><i className="fa fa-lock" aria-hidden="true" /></span>
                  </div>
                </div>
                <div className="col-md-5 text-end">
                  <ul className="list-unstyled list-style-none">
                    <li className="dropdown list-inline-item"><br />
                      <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Actions </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item">Edit This Company</a>
                        <a className="dropdown-item">Change Organization Image</a>
                        <a className="dropdown-item">Delete This Organization</a>
                        <a className="dropdown-item">Change Record Owner</a>
                        <a className="dropdown-item">Generate Merge Document</a>
                        <a className="dropdown-item">Print This Organization</a>
                        <a className="dropdown-item">Add New Task For Organization</a>
                        <a className="dropdown-item">Add New Event For Organization</a>
                        <a className="dropdown-item">Add Activity Set To Organization</a>
                        <a className="dropdown-item">Add New Contact For Organization</a>
                        <a className="dropdown-item">Add New Opportunity For Organization</a>
                        <a className="dropdown-item">Add New Opportunity For Organization</a>
                        <a className="dropdown-item">Add New Project For Organization</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card due-dates">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span>Title</span>
                    <p>Enquiry</p>
                  </div>
                  <div className="col">
                    <span>Companies</span>
                    <p>Acme Corp</p>
                  </div>
                  <div className="col">
                    <span>Phone</span>
                    <p>9876764875</p>
                  </div>
                  <div className="col">
                    <span>Email</span>
                    <p>johndoe@gmail.com</p>
                  </div>
                  <div className="col">
                    <span>Contact owner</span>
                    <p>John Doe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="task-infos">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                  <li className="nav-item"><a className="nav-link active" href="#task-details" data-bs-toggle="tab">Details</a></li>
                  <li className="nav-item"><a className="nav-link" href="#task-related" data-bs-toggle="tab">Related</a></li>
                  <li className="nav-item"><a className="nav-link" href="#task-activity" data-bs-toggle="tab">Activity</a></li>
                  <li className="nav-item"><a className="nav-link" href="#task-news" data-bs-toggle="tab">News</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane show active" id="task-details">
                    <div className="crms-tasks">
                      <div className="tasks__item crms-task-item active">
                        <div className="accordion-header js-accordion-header">Organization Name</div> 
                        <div className="accordion-body js-accordion-body">
                          <div className="accordion-body__contents">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-0">Record ID</td>
                                  <td className="border-0">124192692</td>
                                </tr>
                                <tr>
                                  <td>Organization Name</td>
                                  <td>Clampett Oil and Gas Corp.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tasks__item crms-task-item">
                        <div className="accordion-header js-accordion-header">Organization Contact Details</div> 
                        <div className="accordion-body js-accordion-body">
                          <div className="accordion-body__contents">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-0">Phone</td>
                                  <td className="border-0">(626) 847-1294</td>
                                </tr>
                                <tr>
                                  <td>Fax</td>
                                  <td>1234</td>
                                </tr>
                                <tr>
                                  <td>Website</td>
                                  <td>google.com</td>
                                </tr>
                                <tr>
                                  <td>LinkedIn</td>
                                  <td>Lorem ipsum</td>
                                </tr>
                                <tr>
                                  <td>Facebook</td>
                                  <td>lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>Twitter</td>
                                  <td>Not Started</td>
                                </tr>
                                <tr>
                                  <td>Email Domains</td>
                                  <td>abc@gmail.com</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tasks__item crms-task-item">
                        <div className="accordion-header js-accordion-header">Address Information</div> 
                        <div className="accordion-body js-accordion-body">
                          <div className="accordion-body__contents">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-0">Billing Address</td>
                                  <td className="border-0">1000 Escalon Street, Palo Alto, CA, 94020, United States map</td>
                                </tr>
                                <tr>
                                  <td>Shipping Addres</td>
                                  <td>United States</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tasks__item crms-task-item">
                        <div className="accordion-header js-accordion-header">Additional Information</div> 
                        <div className="accordion-body js-accordion-body">
                          <div className="accordion-body__contents">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Dates to remember</td>
                                  <td>09/12/2005</td>
                                </tr>
                                <tr>
                                  <td>Organization Created</td>
                                  <td>03-Jun-20 1:14 AM</td>
                                </tr>
                                <tr>
                                  <td>Date of Next Activity </td>
                                  <td>09/12/2005</td>
                                </tr>
                                <tr>
                                  <td>Date of Last Activity </td>
                                  <td>27/01/2006</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tasks__item crms-task-item">
                        <div className="accordion-header js-accordion-header">Description Information</div> 
                        <div className="accordion-body js-accordion-body">
                          <div className="accordion-body__contents">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Description</td>
                                  <td>Lorem ipsum </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tasks__item crms-task-item">
                        <div className="accordion-header js-accordion-header">Tag Information</div> 
                        <div className="accordion-body js-accordion-body">
                          <div className="accordion-body__contents">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-0">Tag List</td>
                                  <td className="border-0">Lorem Ipsum</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane task-related" id="task-related">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-gradient-danger card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Companies</h4>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-gradient-info card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Deals</h4>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-gradient-success card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Projects</h4>
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-4">
                        <div className="card bg-gradient-success card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Contacts</h4>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-gradient-danger card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Notes</h4>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-gradient-info card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Files</h4>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="crms-tasks p-2">
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Companies</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Company Name</th>
                                      <th>Phone</th>
                                      <th>Billing Country</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a className="avatar"><img alt="" src={C_logo2} /></a>
                                        <a data-bs-toggle="modal" data-bs-target="#company-details">Clampett Oil and Gas Corp.</a>
                                      </td>
                                      <td>8754554531</td>
                                      <td>United States</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <a className="avatar"><img alt="" src={C_logo} /></a>
                                        <a data-bs-toggle="modal" data-bs-target="#company-details">Acme Corporation</a>
                                      </td>
                                      <td>8754554531</td>
                                      <td>United States</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Deals</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Deal Name</th>
                                      <th>Company</th>
                                      <th>User Responsible</th>
                                      <th>Deal Value</th>
                                      <th />
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Bensolet
                                      </td>
                                      <td>Globex</td>
                                      <td>John Doe</td>
                                      <td>USD $‎180</td>
                                      <td><i className="fa fa-star" aria-hidden="true" /></td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Ansanio tech
                                      </td>
                                      <td>Lecto</td>
                                      <td>John Smith</td>
                                      <td>USD $‎180</td>
                                      <td><i className="fa fa-star" aria-hidden="true" /></td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Projects</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Project Name</th>
                                      <th>Status</th>
                                      <th>User Responsible</th>
                                      <th>Date Created</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Wilmer Deluna
                                      </td>
                                      <td>Completed</td>
                                      <td>Williams</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Contacts</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <th>Title</th>
                                      <th>phone</th>
                                      <th>Email</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Wilmer Deluna
                                      </td>
                                      <td>Call Enquiry</td>
                                      <td>987675656</td>
                                      <td>william@gmail.com</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        John Doe
                                      </td>
                                      <td>Enquiry</td>
                                      <td>987675656</td>
                                      <td>john@gmail.com</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Notes </div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <th>Size</th>
                                      <th>Category</th>
                                      <th>Date Added</th>
                                      <th>Added by</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Document
                                      </td>
                                      <td>50KB</td>
                                      <td>Email</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>John Doe</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Finance
                                      </td>
                                      <td>100KB</td>
                                      <td>Phone call</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>Smith</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Files </div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <th>Size</th>
                                      <th>Category</th>
                                      <th>Date Added</th>
                                      <th>Added by</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Document
                                      </td>
                                      <td>50KB</td>
                                      <td>Phone Enquiry</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>John Doe</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Finance
                                      </td>
                                      <td>100KB</td>
                                      <td>Email</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>Smith</td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Edit Link</a>
                                            <a className="dropdown-item">Delete Link</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="task-activity">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-gradient-danger card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Total Activities</h4>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-gradient-info card-img-holder text-white h-100">
                          <div className="card-body">
                            <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                            <h4 className="font-weight-normal mb-3">Last Activity</h4>
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="crms-tasks  p-2">
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Upcoming Activity </div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Type</th>
                                      <th>Activity Name</th>
                                      <th>Assigned To</th>
                                      <th>Due Date</th>
                                      <th>Status</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Meeting
                                      </td>
                                      <td>Call Enquiry</td>
                                      <td>John Doe</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>
                                        <label className="container-checkbox">
                                          <input type="checkbox" defaultChecked />
                                          <span className="checkmark" />
                                        </label>
                                      </td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Add New Task</a>
                                            <a className="dropdown-item">Add New Event</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Meeting
                                      </td>
                                      <td>Phone Enquiry</td>
                                      <td>David</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>
                                        <label className="container-checkbox">
                                          <input type="checkbox" defaultChecked />
                                          <span className="checkmark" />
                                        </label>
                                      </td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Add New Task</a>
                                            <a className="dropdown-item">Add New Event</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Past Activity </div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <div className="table-responsive">
                                <table className="table table-striped table-nowrap custom-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Type</th>
                                      <th>Activity Name</th>
                                      <th>Assigned To</th>
                                      <th>Due Date</th>
                                      <th>Status</th>
                                      <th className="text-end">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Meeting
                                      </td>
                                      <td>Call Enquiry</td>
                                      <td>John Doe</td>
                                      <td>13-Jul-20 11:37 PM</td>
                                      <td>
                                        <label className="container-checkbox">
                                          <input type="checkbox" defaultChecked />
                                          <span className="checkmark" />
                                        </label>
                                      </td>
                                      <td className="text-center">
                                        <div className="dropdown dropdown-action">
                                          <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">Add New Task</a>
                                            <a className="dropdown-item">Add New Event</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="task-news">
                    <div className="row">
                      <div className="col-md-12">
                        <h4>News Items</h4>
                        <p>Current news items about this Organization are sourced from Google News</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* modal-content */}
        </div>{/* modal-dialog */}
      </div>
       {/* Modal */}
       <div className="modal right fade" id="add_activity" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <button type="button" className="close md-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Schedule an Activity</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form className="forms-sampme">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input className="form-control" type="text" name="deal-name" id="deal-name" defaultValue="Call" />
                    </div>
                    <div className="btn-group mb-3">
                      <button type="button" className="btn btn-light"><i className="fa fa-phone" aria-hidden="true" /></button>
                      <button type="button" className="btn btn-light"><i className="fa fa-users" aria-hidden="true" /></button>
                      <button type="button" className="btn btn-light"><i className="fa fa-clock-o" aria-hidden="true" /></button>
                      <button type="button" className="btn btn-light"><i className="fa fa-flag" aria-hidden="true" /></button>
                      <button type="button" className="btn btn-light"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                      <button type="button" className="btn btn-light"><i className="fa fa-cutlery" aria-hidden="true" /></button>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="cal-icon"><input className="form-control" type="text" placeholder="MM/DD/YY" /></div>
                        </div>
                        <div className="col-md-3">
                          <select className="form-control">
                            <option>02:00</option>
                            <option>03:00</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <select className="form-control">
                            <option>02:00</option>
                            <option>03:00</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <div className="cal-icon"><input className="form-control" type="text" placeholder="MM/DD/YY" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="row m-0">
                        <p>Add <a >Guests</a>, <a>Location</a>, <a>Description</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Busy</option>
                        <option>Free</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea className="form-control mb-2" rows={3} placeholder="Notes" defaultValue={""} />
                      <span className="pt-2">Notes are private and visible only within your Pipedrive account</span>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option>John Doe</option>
                        <option>John Smith</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Deal or Lead" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="People" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Organization" />
                    </div>
                  </div>
                </div>
                <div className="submit-section mt-0">
                  <div className="custom-check mb-4">
                    <input type="checkbox" id="mark-as-done" />
                    <label htmlFor="mark-as-done">Mark as Done</label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>&nbsp;&nbsp;
                  <button type="button" className="btn btn-secondary btn-rounded">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{/* modal */}
       {/*Deal details Modal */}
       <div className="modal right fade" id="deal-details" tabIndex={-1} role="dialog" aria-modal="true">
          <div className="modal-dialog" role="document">
            <button type="button" className="close md-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <div className="modal-content">
              <div className="modal-header">
                
                <div className="row w-100">
                  <div className="col-md-7 account">
                    <p className="User-name">Deal</p>
                    <span><img src={C_logo} alt="User" className="user-image" /></span>
                    <span className="modal-title">Globex</span>&nbsp;
                    <span className="rating-star"><i className="fa fa-star" aria-hidden="true" /></span>&nbsp;
                    <span className="lock"><i className="fa fa-lock" aria-hidden="true" /></span>
                  </div>
                  <div className="col-md-5 text-end">
                    <ul className="list-unstyled list-style-none">
                      <li className="dropdown list-inline-item"><br />
                        <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Actions </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item">Edit This Company</a>
                          <a className="dropdown-item">Change Organization Image</a>
                          <a className="dropdown-item">Delete This Organization</a>
                          <a className="dropdown-item">Change Record Owner</a>
                          <a className="dropdown-item">Generate Merge Document</a>
                          <a className="dropdown-item">Print This Organization</a>
                          <a className="dropdown-item">Add New Task For Organization</a>
                          <a className="dropdown-item">Add New Event For Organization</a>
                          <a className="dropdown-item">Add Activity Set To Organization</a>
                          <a className="dropdown-item">Add New Contact For Organization</a>
                          <a className="dropdown-item">Add New Opportunity For Organization</a>
                          <a className="dropdown-item">Add New Opportunity For Organization</a>
                          <a className="dropdown-item">Add New Project For Organization</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="card shadow p-2 due-dates">
                <div className="row m-0">
                  <div className="col">
                    <span>Title</span>
                    <p />
                  </div>
                  <div className="col">
                    <span>Companies</span>
                    <p />
                  </div>
                  <div className="col">
                    <span>Phone</span>
                    <p>9876764875</p>
                  </div>
                  <div className="col">
                    <span>Email</span>
                    <p>johndoe@gmail.com</p>
                  </div>
                  <div className="col">
                    <span>Contact owner</span>
                    <p>John Doe</p>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="row pb-2">
                  <div className="col">
                    <span>Pipeline: Deal Pipeline</span>
                  </div>
                  <div className="col text-end">
                    <span>Deal State: closed won</span>
                  </div>
                </div>
                <div className="row">
                  <div className="pipeline-small flat pl-3 pr-3 w-100">
                    <a className="won noselect tipped-top text-white" data-bs-toggle="tooltip" data-placement="top" data-original-title="Pipeline: Deal Pipeline">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Prospecting</span></a>
                    <a className="won noselect tipped-top bg-gray text-white" data-bs-toggle="tooltip" data-placement="top" data-original-title="Pipeline: Deal Pipeline">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Qualification</span></a>
                    <a className="won noselect tipped-top text-white" data-bs-toggle="tooltip" data-placement="top" data-original-title="Pipeline: Deal Pipeline">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Needs Analysis</span></a>
                    <a className="won noselect tipped-top text-white" data-bs-toggle="tooltip" data-placement="top" data-original-title="Pipeline: Deal Pipeline">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Proposals</span></a>
                    <a className="won noselect tipped-top text-white" data-bs-toggle="tooltip" data-placement="top" data-original-title="Pipeline: Deal Pipeline">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Nogatiation</span></a>
                    <a className="won noselect tipped-top text-white padding" data-bs-toggle="tooltip" data-placement="top" data-original-title="Pipeline: Deal Pipeline">&nbsp;closed win</a>
                  </div>
                </div>
                <div className="task-infos pt-3">
                  <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                    <li className="nav-item"><a className="nav-link active" href="#pipeline-task-details" data-bs-toggle="tab">Details</a></li>
                    <li className="nav-item"><a className="nav-link" href="#pipeline-task-related" data-bs-toggle="tab">Related</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="pipeline-task-details">
                      <div className="crms-tasks">
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Task Details</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Record ID</td>
                                    <td>124192692</td>
                                  </tr>
                                  <tr>
                                    <td>Task Name</td>
                                    <td>1. Personalize your account</td>
                                  </tr>
                                  <tr>
                                    <td>Assigned To</td>
                                    <td>John Doe</td>
                                  </tr>
                                  <tr>
                                    <td>Date Due</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Additional Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Start Date</td>
                                    <td>-</td>
                                  </tr>
                                  <tr>
                                    <td>Reminder Date</td>
                                    <td>-</td>
                                  </tr>
                                  <tr>
                                    <td>Repeats</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Progress</td>
                                    <td>0%</td>
                                  </tr>
                                  <tr>
                                    <td>Priorit</td>
                                    <td>Medium</td>
                                  </tr>
                                  <tr>
                                    <td>Status</td>
                                    <td>Not Started</td>
                                  </tr>
                                  <tr>
                                    <td>Last Updated</td>
                                    <td>04-Jun-20</td>
                                  </tr>
                                  <tr>
                                    <td>Created</td>
                                    <td>03-Jun-20 1:14 AM</td>
                                  </tr>
                                  <tr>
                                    <td>Task Created By</td>
                                    <td>John Doe</td>
                                  </tr>
                                  <tr>
                                    <td>Task Owner</td>
                                    <td>John Doe</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Related To</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Related To</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Description Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Description</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Task Comments</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <button className="btn btn-secondary text-white w-25">Add Comments</button>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Permissions</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Task visibility</td>
                                    <td>Private</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane task-related" id="pipeline-task-related">
                      <div className="row pt-3">
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Companies</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Deals</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Projects</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3 pb-4">
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Contacts</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Notes</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Files</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="crms-tasks  p-2">
                          <div className="tasks__item crms-task-item active">
                            <div className="accordion-header js-accordion-header">Companies <span className="badge badge-secondary float-end">2</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                                <div className="table-responsive">
                                  <table className="table table-striped table-nowrap custom-table mb-0">
                                    <thead>
                                      <tr>
                                        <th>Company Name</th>
                                        <th>Phone</th>
                                        <th>Billing Country</th>
                                        <th className="text-end">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a className="avatar"><img alt="" src={C_logo2} /></a>
                                          <a data-bs-toggle="modal" data-bs-target="#company-details">Clampett Oil and Gas Corp.</a>
                                        </td>
                                        <td>8754554531</td>
                                        <td>United States</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a className="avatar"><img alt="" src={C_logo} /></a>
                                          <a data-bs-toggle="modal" data-bs-target="#company-details">Acme Corporation</a>
                                        </td>
                                        <td>8754554531</td>
                                        <td>United States</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Deals <span className="badge badge-secondary float-end">2</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                                <div className="table-responsive">
                                  <table className="table table-striped table-nowrap custom-table mb-0">
                                    <thead>
                                      <tr>
                                        <th>Deal Name</th>
                                        <th>Company</th>
                                        <th>User Responsible</th>
                                        <th>Deal Value</th>
                                        <th />
                                        <th className="text-end">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Bensolet
                                        </td>
                                        <td>Globex</td>
                                        <td>John Doe</td>
                                        <td>USD $‎180</td>
                                        <td><i className="fa fa-star" aria-hidden="true" /></td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Ansanio tech
                                        </td>
                                        <td>Lecto</td>
                                        <td>John Smith</td>
                                        <td>USD $‎180</td>
                                        <td><i className="fa fa-star" aria-hidden="true" /></td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Projects <span className="badge badge-secondary float-end">1</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                                <div className="table-responsive">
                                  <table className="table table-striped table-nowrap custom-table mb-0 ">
                                    <thead>
                                      <tr>
                                        <th>Project Name</th>
                                        <th>Status</th>
                                        <th>User Responsible</th>
                                        <th>Date Created</th>
                                        <th className="text-end">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Wilmer Deluna
                                        </td>
                                        <td>Completed</td>
                                        <td>Williams</td>
                                        <td>13-Jul-20 11:37 PM</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Contacts <span className="badge badge-secondary float-end">2</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                                <div className="table-responsive">
                                  <table className="table table-striped table-nowrap custom-table mb-0">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>phone</th>
                                        <th>Email</th>
                                        <th className="text-end">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Wilmer Deluna
                                        </td>
                                        <td>Call Enquiry</td>
                                        <td>987675656</td>
                                        <td>william@gmail.com</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          John Doe
                                        </td>
                                        <td>Enquiry</td>
                                        <td>987675656</td>
                                        <td>john@gmail.com</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Notes <span className="badge badge-secondary float-end">2</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                                <div className="table-responsive">
                                  <table className="table table-striped table-nowrap custom-table mb-0">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Category</th>
                                        <th>Date Added</th>
                                        <th>Added by</th>
                                        <th className="text-end">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Document
                                        </td>
                                        <td>50KB</td>
                                        <td>-</td>
                                        <td>13-Jul-20 11:37 PM</td>
                                        <td>John Doe</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Finance
                                        </td>
                                        <td>100KB</td>
                                        <td>-</td>
                                        <td>13-Jul-20 11:37 PM</td>
                                        <td>Smith</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Files <span className="badge badge-secondary float-end">2</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                                <div className="table-responsive">
                                  <table className="table table-striped table-nowrap custom-table mb-0">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Category</th>
                                        <th>Date Added</th>
                                        <th>Added by</th>
                                        <th className="text-end">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Document
                                        </td>
                                        <td>50KB</td>
                                        <td>-</td>
                                        <td>13-Jul-20 11:37 PM</td>
                                        <td>John Doe</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Finance
                                        </td>
                                        <td>100KB</td>
                                        <td>-</td>
                                        <td>13-Jul-20 11:37 PM</td>
                                        <td>Smith</td>
                                        <td className="text-end">
                                          <div className="dropdown dropdown-action">
                                            <a className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                              <a className="dropdown-item">Edit Link</a>
                                              <a className="dropdown-item">Delete Link</a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* modal-content */}
          </div>{/* modal-dialog */}
        </div>{/* modal */}
        {/*system users Modal */}
        <div className="modal right fade" id="system-user" tabIndex={-1} role="dialog" aria-modal="true">
          <div className="modal-dialog" role="document">
            <button type="button" className="close md-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <div className="modal-content">
              <div className="modal-header">
                
                <div className="row w-100">
                  <div className="col-md-7 account">
                    <p className="User-name">System User</p>
                    <span><img src={SystemUser} alt="User" className="user-image" /></span>
                    <span className="modal-title users">John Doe</span>&nbsp;
                    <span className="rating-star"><i className="fa fa-star" aria-hidden="true" /></span>&nbsp;
                    <span className="lock"><i className="fa fa-lock" aria-hidden="true" /></span>
                  </div>
                  <div className="col-md-5 text-end">
                    <ul className="list-unstyled list-style-none">
                      <li className="dropdown list-inline-item"><br />
                        <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Actions </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item">Edit This Contact</a>
                          <a className="dropdown-item">Change Contact Image</a>
                          <a className="dropdown-item">Delete This Contact</a>
                          <a className="dropdown-item">Clone This Contact</a>
                          <a className="dropdown-item">Change Record Owner</a>
                          <a className="dropdown-item">Generate Merge Document</a>
                          <a className="dropdown-item">Change Contact To Lead</a>
                          <a className="dropdown-item">Print This Contact</a>
                          <a className="dropdown-item">Email This Contact</a>
                          <a className="dropdown-item">Add New Task For Contact</a>
                          <a className="dropdown-item">Add New Event For Contact</a>
                          <a className="dropdown-item">Add Activity Set To Contact</a>
                          <a className="dropdown-item">Add New Deal For Contact</a>
                          <a className="dropdown-item">Add New Project For Contact</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="card shadow p-2 due-dates">
                <div className="row m-0">
                  <div className="col">
                    <span>Title</span>
                    <p />
                  </div>
                  <div className="col">
                    <span>Companies</span>
                    <p />
                  </div>
                  <div className="col">
                    <span>Phone</span>
                    <p>9876764875</p>
                  </div>
                  <div className="col">
                    <span>Email</span>
                    <p>johndoe@gmail.com</p>
                  </div>
                  <div className="col">
                    <span>Contact owner</span>
                    <p>John Doe</p>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="task-infos">
                  <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                    <li className="nav-item"><a className="nav-link active" href="#task-details" data-bs-toggle="tab">Details</a></li>
                    <li className="nav-item"><a className="nav-link" href="#task-related" data-bs-toggle="tab">Related</a></li>
                    <li className="nav-item"><a className="nav-link" href="#task-activity" data-bs-toggle="tab">Activity</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="task-details">
                      <div className="crms-tasks">
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Name &amp; Occupation</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Record ID</td>
                                    <td className="border-0">124192692</td>
                                  </tr>
                                  <tr>
                                    <td className="border-0">Name</td>
                                    <td className="border-0">John Doe</td>
                                  </tr>
                                  <tr>
                                    <td>Company</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Title</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Contact Details</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Email</td>
                                    <td className="border-0">johndoe@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <td>Email Opted out</td>
                                    <td>
                                      <div className="form-check m-0 pl-0">
                                        <label className="form-check-label">
                                          <input className="checkbox" type="checkbox" /> <i className="input-helper" /><i className="input-helper" /><i className="input-helper" /></label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Phone</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Home Phone</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Mobile Phone</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Other Phone</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Assistant Phone</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Assistant Name</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Fax</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Linkedin</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Facebook</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Twitter</td>
                                    <td />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Address Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Mailling Address</td>
                                    <td className="border-0">-</td>
                                  </tr>
                                  <tr>
                                    <td>Other Address</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Dates To Remember</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Dates to Remember</td>
                                    <td className="border-0">-</td>
                                  </tr>
                                  <tr>
                                    <td>Date of Birth</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Additional Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Date of Next Activity</td>
                                    <td className="border-0">-</td>
                                  </tr>
                                  <tr>
                                    <td>Date of Last Activity</td>
                                    <td>-</td>
                                  </tr>
                                  <tr>
                                    <td>Contact Owner</td>
                                    <td>John Doe</td>
                                  </tr>
                                  <tr>
                                    <td>Contact Created</td>
                                    <td>Jun 20, 2020</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Description Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Description</td>
                                    <td className="border-0">Lorem Ipsum</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Tag List</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="border-0">Tag List</td>
                                    <td className="border-0">Lorem Ipsum</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane task-related" id="task-related">
                      <div className="row pt-3">
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Companies</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Deals</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Projects</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3 pb-4">
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Contacts</h4>
                              <span />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Notes</h4>
                              <span />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Files</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="crms-tasks  p-2">
                          <div className="tasks__item crms-task-item active">
                            <div className="accordion-header js-accordion-header">Companies <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Deals <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Projects <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Contacts <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Notes <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Files <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="task-activity">
                      <div className="row pt-3">
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Total Activities</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Emails</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Tasks</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3 pb-4">
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Events</h4>
                              <span />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Last Activity</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="crms-tasks  p-2">
                          <div className="tasks__item crms-task-item active">
                            <div className="accordion-header js-accordion-header">Upcoming Activity <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Past Activity <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* modal-content */}
          </div>{/* modal-dialog */}
        </div>{/* modal */}
        {/*Deal details Modal */}
        <div className="modal right fade" id="project-details" tabIndex={-1} role="dialog" aria-modal="true">
          <div className="modal-dialog" role="document">
            <button type="button" className="close md-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <div className="modal-content">
              <div className="modal-header">
                
                <div className="row w-100">
                  <div className="col-md-7 account">
                    <p className="User-name">Project</p>
                    <span><img src={C_logo} alt="User" className="user-image" /></span>
                    <span className="modal-title">Whirligig G990</span>&nbsp;
                    <span className="rating-star"><i className="fa fa-star" aria-hidden="true" /></span>&nbsp;
                    <span className="lock"><i className="fa fa-lock" aria-hidden="true" /></span>
                  </div>
                  <div className="col-md-5 text-end">
                    <ul className="list-unstyled list-style-none">
                      <li className="dropdown list-inline-item"><br />
                        <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Actions </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item">Edit This Project</a>
                          <a className="dropdown-item">Change Project Image</a>
                          <a className="dropdown-item">Clone This Project</a>
                          <a className="dropdown-item">Delete This Project</a>
                          <a className="dropdown-item">Change Record Owner</a>
                          <a className="dropdown-item">Generate Merge Document</a>
                          <a className="dropdown-item">Print This Project</a>
                          <a className="dropdown-item">Add New Task For Project</a>
                          <a className="dropdown-item">Add New Event For Project</a>
                          <a className="dropdown-item">Add Activity Set To Project</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="card shadow p-2 due-dates">
                <div className="row m-0">
                  <div className="col">
                    <span>Title</span>
                    <p />
                  </div>
                  <div className="col">
                    <span>Companies</span>
                    <p />
                  </div>
                  <div className="col">
                    <span>Phone</span>
                    <p>9876764875</p>
                  </div>
                  <div className="col">
                    <span>Email</span>
                    <p>johndoe@gmail.com</p>
                  </div>
                  <div className="col">
                    <span>Contact owner</span>
                    <p>John Doe</p>
                  </div>
                </div>
              </div>
              <div className="modal-body project-pipeline">
                <div className="row pb-2">
                  <div className="col">
                    <span>Pipeline: Deal Pipeline</span>
                  </div>
                  <div className="col text-end">
                    <span>Deal State: closed won</span>
                  </div>
                </div>
                <div className="row">
                  <div className="pipeline-small flat pipeline-project p-2 w-100">
                    <a className="won noselect tipped-top text-white w-25" data-bs-toggle="tooltip" data-placement="top" data-original-title="Plan">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Plan</span>
                      <span className="stretched-link" data-bs-toggle="modal" data-bs-target="#pipeline-stage" data-bs-dismiss="modal" />
                    </a>
                    <a className="won noselect tipped-top bg-gray text-white w-12" data-bs-toggle="tooltip" data-placement="top" data-original-title="Design">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Design</span>
                      <span className="stretched-link" data-bs-toggle="modal" data-bs-target="#pipeline-stage" data-bs-dismiss="modal" />
                    </a>
                    <a className="won noselect tipped-top text-white w-25" data-bs-toggle="tooltip" data-placement="top" data-original-title="Develop">&nbsp;<i className="fa fa-check" aria-hidden="true" /><br /><span>Develop</span>
                      <span className="stretched-link" data-bs-toggle="modal" data-bs-target="#pipeline-stage" data-bs-dismiss="modal" />
                    </a>
                    <a className="won noselect tipped-top text-white padding w-25" data-bs-toggle="tooltip" data-placement="top" data-original-title="COmplete">&nbsp;Complete
                    </a>
                  </div>
                </div>
                <div className="task-infos pt-3">
                  <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                    <li className="nav-item"><a className="nav-link active" href="#pipeline-task-details" data-bs-toggle="tab">Details</a></li>
                    <li className="nav-item"><a className="nav-link" href="#pipeline-task-related" data-bs-toggle="tab">Related</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="pipeline-task-details">
                      <div className="crms-tasks">
                        <div className="tasks__item crms-task-item active">
                          <div className="accordion-header js-accordion-header">Task Details</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Record ID</td>
                                    <td>124192692</td>
                                  </tr>
                                  <tr>
                                    <td>Task Name</td>
                                    <td>1. Personalize your account</td>
                                  </tr>
                                  <tr>
                                    <td>Assigned To</td>
                                    <td>John Doe</td>
                                  </tr>
                                  <tr>
                                    <td>Date Due</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Additional Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Start Date</td>
                                    <td>-</td>
                                  </tr>
                                  <tr>
                                    <td>Reminder Date</td>
                                    <td>-</td>
                                  </tr>
                                  <tr>
                                    <td>Repeats</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Progress</td>
                                    <td>0%</td>
                                  </tr>
                                  <tr>
                                    <td>Priorit</td>
                                    <td>Medium</td>
                                  </tr>
                                  <tr>
                                    <td>Status</td>
                                    <td>Not Started</td>
                                  </tr>
                                  <tr>
                                    <td>Last Updated</td>
                                    <td>04-Jun-20</td>
                                  </tr>
                                  <tr>
                                    <td>Created</td>
                                    <td>03-Jun-20 1:14 AM</td>
                                  </tr>
                                  <tr>
                                    <td>Task Created By</td>
                                    <td>John Doe</td>
                                  </tr>
                                  <tr>
                                    <td>Task Owner</td>
                                    <td>John Doe</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Related To</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Related To</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Description Information</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Description</td>
                                    <td>-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Task Comments</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <button className="btn btn-secondary text-white w-25">Add Comments</button>
                            </div>
                          </div>
                        </div>
                        <div className="tasks__item crms-task-item">
                          <div className="accordion-header js-accordion-header">Permissions</div> 
                          <div className="accordion-body js-accordion-body">
                            <div className="accordion-body__contents">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Task visibility</td>
                                    <td>Private</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane task-related" id="pipeline-task-related">
                      <div className="row pt-3">
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Companies</h4>
                              <span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Deals</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Projects</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3 pb-4">
                        <div className="col-md-4">
                          <div className="card bg-gradient-success card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Contacts</h4>
                              <span />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-danger card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Notes</h4>
                              <span />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card bg-gradient-info card-img-holder text-white h-100">
                            <div className="card-body">
                              <img src={CircleImg} className="card-img-absolute" alt="circle-image" />
                              <h4 className="font-weight-normal mb-3">Files</h4>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="crms-tasks  p-2">
                          <div className="tasks__item crms-task-item active">
                            <div className="accordion-header js-accordion-header">Companies <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Deals <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Projects <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Contacts <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Notes <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                          <div className="tasks__item crms-task-item">
                            <div className="accordion-header js-accordion-header">Files <span className="badge badge-secondary float-end">0</span></div> 
                            <div className="accordion-body js-accordion-body">
                              <div className="accordion-body__contents">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* modal-content */}
          </div>{/* modal-dialog */}
        </div>{/* modal */}
        {/* cchange pipeline stage Modal */}
        <div className="modal" id="pipeline-stage">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Change Pipeline Stage</h4>
                <button type="button" className="close" data-bs-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">New Stage</label>
                    <select className="form-control" id="related-to">
                      <option>Plan</option>
                      <option>Design</option>
                      <option>Develop</option>
                      <option>Complete</option>
                    </select>
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer text-center">
                <button type="button" className="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-secondary btn-rounded cancel-button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }


export default Activities;
