import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';

const Sidebarthree = (props) => {

    const [isSideMenu, setSideMenu] = useState("")

    const toggleSidebar = (value) => {
        console.log(value);
        setSideMenu(value)

    }

    console.log("Working", isSideMenu)


    let pathName = props.location.pathname;
    return (


        <div className="sidebar sidebar-three-three" id="sidebar">
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax="95vh"
                thumbMinSize={30}
                universal={false}
                hideTracksWhenNotNeeded={true}
            >
                <div className="sidebar-inner slimscroll">

                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <Link
                                    to="/stock_management"
                                    className={`${"/stock_management" === pathName ? "active" : ""}`}
                                >
                                    Stock Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/daily_balance"
                                    className={`${"/daily_balance" === pathName ? "active" : ""}`}
                                >
                                    Daily Balance
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/expense_management"
                                    className={`${"/expense_management" === pathName ? "active" : ""}`}
                                >
                                    Expense Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/buyer_creation"
                                    className={`${"/buyer_creation" === pathName ? "active" : ""}`}
                                >
                                    Buyer Creation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/invoice_management"
                                    className={`${"/invoice_management" === pathName ? "active" : ""}`}
                                >
                                    Invoice Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/invoice_generation"
                                    className={`${"/invoice_management" === pathName ? "active" : ""}`}
                                >
                                    Invoice generation
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </Scrollbars>
        </div>

    );

}
export default withRouter(Sidebarthree);