
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
import { LogoImg, LogoSmallImg } from "../_components/imagepath";

const Sidebar = (props) => {
    const [isSideMenu, setSideMenu] = useState("");

    const toggleSidebar = (value) => {
        console.log(value);
        setSideMenu(value);
    };

    useEffect(() => {
        function handleMouseOver(e) {
            e.stopPropagation();
            if (document.body.classList.contains('mini-sidebar') && document.querySelector('#toggle_btn').offsetParent !== null) {
                var targ = e.target.closest('.sidebar');
                if (targ) {
                    document.body.classList.add('expand-menu');
                    document.querySelectorAll('.subdrop + ul').forEach((ul) => ul.style.display = 'block');
                } else {
                    document.body.classList.remove('expand-menu');
                    document.querySelectorAll('.subdrop + ul').forEach((ul) => ul.style.display = 'none');
                }
                return false;
            }
        }

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    useEffect(() => {
        $(document).on('change', '.sidebar-type-four input', function () {
            if ($(this).is(':checked')) {
                $('.sidebar').addClass('sidebar-eight');
                $('.sidebar-menu').addClass('sidebar-menu-eight');
                $('.menu-title').addClass('menu-title-eight');
                $('.header').addClass('header-eight');
                $('.header-left-two').addClass('header-left-eight');
                $('.user-menu').addClass('user-menu-eight');
                $('.dropdown-toggle').addClass('dropdown-toggle-eight');
                $('.white-logo').addClass('show-logo');
                $('.header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)').addClass('hide-logo');
                $('.header-two .header-left-two .logo:not(.logo-small)').removeClass('hide-logo');
                $('.header-two .header-left-two .dark-logo').removeClass('show-logo');
            } else {
                $('.sidebar').removeClass('sidebar-eight');
                $('.sidebar-menu').removeClass('sidebar-menu-eight');
                $('.menu-title').removeClass('menu-title-eight');
                $('.header').removeClass('header-eight');
                $('.header-left-two').removeClass('header-left-eight');
                $('.user-menu').removeClass('user-menu-eight');
                $('.dropdown-toggle').removeClass('dropdown-toggle-eight');
                $('.white-logo').removeClass('show-logo');
                $('.header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)').removeClass('hide-logo');
            }
        });
    }, [])



    let pathName = props.location.pathname;

    console.log("Working", pathName);


    return (
        <>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <Link to="/index">
                            {/* <img src={LogoImg} className="img-fluid logo" alt="" /> */}
                            <h1 className="fs-1">Brand</h1>
                        </Link>
                        <Link to="index.html">
                            <img
                                src={LogoSmallImg}
                                className="img-fluid logo-small"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
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
                            {/* Main */}
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
                                        className={`${"/invoice_generation" === pathName ? "active" : ""}`}
                                    >
                                        Invoice generation
                                    </Link>
                                </li>

                            </ul>
                            {/* /Main */}

                        </div>
                    </div>
                </Scrollbars>
            </div>
        </>
    );
};
export default withRouter(Sidebar);
