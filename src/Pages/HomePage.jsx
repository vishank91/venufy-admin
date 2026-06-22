import React from 'react'

export default function HomePage() {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/*  Menu  */}

                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo">
                            <a href="index.html" className="app-brand-link">
                                <span className="app-brand-logo demo">
                                    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                            fill="#7367F0"
                                        />
                                        <path
                                            opacity="0.06"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                                            fill="#161616"
                                        />
                                        <path
                                            opacity="0.06"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                                            fill="#161616"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                            fill="#7367F0"
                                        />
                                    </svg>
                                </span>
                                <span className="app-brand-text demo menu-text fw-bold">Vuexy</span>
                            </a>

                            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                                <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
                                <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
                            </a>
                        </div>

                        <div className="menu-inner-shadow"></div>

                        <ul className="menu-inner py-1">
                            {/*  Dashboards  */}
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-smart-home"></i>
                                    <div data-i18n="Dashboards">Dashboards</div>
                                    <div className="badge bg-label-primary rounded-pill ms-auto">3</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="index.html" className="menu-link">
                                            <div data-i18n="Analytics">Analytics</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboards-crm.html" className="menu-link">
                                            <div data-i18n="CRM">CRM</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboards-ecommerce.html" className="menu-link">
                                            <div data-i18n="eCommerce">eCommerce</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*  Layouts  */}
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-layout-sidebar"></i>
                                    <div data-i18n="Layouts">Layouts</div>
                                </a>

                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="layouts-collapsed-menu.html" className="menu-link">
                                            <div data-i18n="Collapsed menu">Collapsed menu</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-content-navbar.html" className="menu-link">
                                            <div data-i18n="Content navbar">Content navbar</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-content-navbar-with-sidebar.html" className="menu-link">
                                            <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="../horizontal-menu-template" className="menu-link" target="_blank">
                                            <div data-i18n="Horizontal">Horizontal</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-without-menu.html" className="menu-link">
                                            <div data-i18n="Without menu">Without menu</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-without-navbar.html" className="menu-link">
                                            <div data-i18n="Without navbar">Without navbar</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-fluid.html" className="menu-link">
                                            <div data-i18n="Fluid">Fluid</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-container.html" className="menu-link">
                                            <div data-i18n="Container">Container</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-blank.html" className="menu-link">
                                            <div data-i18n="Blank">Blank</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*  Apps & Pages  */}
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Apps &amp; Pages</span>
                            </li>
                            <li className="menu-item">
                                <a href="app-email.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-mail"></i>
                                    <div data-i18n="Email">Email</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-chat.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-messages"></i>
                                    <div data-i18n="Chat">Chat</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-calendar.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-calendar"></i>
                                    <div data-i18n="Calendar">Calendar</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-kanban.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-layout-kanban"></i>
                                    <div data-i18n="Kanban">Kanban</div>
                                </a>
                            </li>
                            <li className="menu-item active open">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-file-dollar"></i>
                                    <div data-i18n="Invoice">Invoice</div>
                                    <div className="badge bg-label-danger rounded-pill ms-auto">4</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="app-invoice-list.html" className="menu-link">
                                            <div data-i18n="List">List</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="app-invoice-preview.html" className="menu-link">
                                            <div data-i18n="Preview">Preview</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="app-invoice-edit.html" className="menu-link">
                                            <div data-i18n="Edit">Edit</div>
                                        </a>
                                    </li>
                                    <li className="menu-item active">
                                        <a href="app-invoice-add.html" className="menu-link">
                                            <div data-i18n="Add">Add</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-users"></i>
                                    <div data-i18n="Users">Users</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="app-user-list.html" className="menu-link">
                                            <div data-i18n="List">List</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="View">View</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="app-user-view-account.html" className="menu-link">
                                                    <div data-i18n="Account">Account</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-user-view-security.html" className="menu-link">
                                                    <div data-i18n="Security">Security</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-user-view-billing.html" className="menu-link">
                                                    <div data-i18n="Billing & Plans">Billing & Plans</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-user-view-notifications.html" className="menu-link">
                                                    <div data-i18n="Notifications">Notifications</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-user-view-connections.html" className="menu-link">
                                                    <div data-i18n="Connections">Connections</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-settings"></i>
                                    <div data-i18n="Roles & Permissions">Roles & Permissions</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="app-access-roles.html" className="menu-link">
                                            <div data-i18n="Roles">Roles</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="app-access-permission.html" className="menu-link">
                                            <div data-i18n="Permission">Permission</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-file"></i>
                                    <div data-i18n="Pages">Pages</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="User Profile">User Profile</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="pages-profile-user.html" className="menu-link">
                                                    <div data-i18n="Profile">Profile</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-profile-teams.html" className="menu-link">
                                                    <div data-i18n="Teams">Teams</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-profile-projects.html" className="menu-link">
                                                    <div data-i18n="Projects">Projects</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-profile-connections.html" className="menu-link">
                                                    <div data-i18n="Connections">Connections</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Account Settings">Account Settings</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="pages-account-settings-account.html" className="menu-link">
                                                    <div data-i18n="Account">Account</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-account-settings-security.html" className="menu-link">
                                                    <div data-i18n="Security">Security</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-account-settings-billing.html" className="menu-link">
                                                    <div data-i18n="Billing & Plans">Billing & Plans</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-account-settings-notifications.html" className="menu-link">
                                                    <div data-i18n="Notifications">Notifications</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-account-settings-connections.html" className="menu-link">
                                                    <div data-i18n="Connections">Connections</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="pages-faq.html" className="menu-link">
                                            <div data-i18n="FAQ">FAQ</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Help Center">Help Center</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="pages-help-center-landing.html" className="menu-link">
                                                    <div data-i18n="Landing">Landing</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-help-center-categories.html" className="menu-link">
                                                    <div data-i18n="Categories">Categories</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-help-center-article.html" className="menu-link">
                                                    <div data-i18n="Article">Article</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="pages-pricing.html" className="menu-link">
                                            <div data-i18n="Pricing">Pricing</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Misc">Misc</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="pages-misc-error.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Error">Error</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Coming Soon">Coming Soon</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Not Authorized">Not Authorized</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-lock"></i>
                                    <div data-i18n="Authentications">Authentications</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Login">Login</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="auth-login-basic.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-login-cover.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Cover">Cover</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Register">Register</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="auth-register-basic.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-register-cover.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Cover">Cover</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Multi-steps">Multi-steps</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Verify Email">Verify Email</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Cover">Cover</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Reset Password">Reset Password</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Cover">Cover</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Forgot Password">Forgot Password</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Cover">Cover</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Two Steps">Two Steps</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                                                    <div data-i18n="Cover">Cover</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-forms"></i>
                                    <div data-i18n="Wizard Examples">Wizard Examples</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="wizard-ex-checkout.html" className="menu-link">
                                            <div data-i18n="Checkout">Checkout</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="wizard-ex-property-listing.html" className="menu-link">
                                            <div data-i18n="Property Listing">Property Listing</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="wizard-ex-create-deal.html" className="menu-link">
                                            <div data-i18n="Create Deal">Create Deal</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="modal-examples.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-square"></i>
                                    <div data-i18n="Modal Examples">Modal Examples</div>
                                </a>
                            </li>

                            {/*  Components  */}
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Components</span>
                            </li>
                            {/*  Cards  */}
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-id"></i>
                                    <div data-i18n="Cards">Cards</div>
                                    <div className="badge bg-label-primary rounded-pill ms-auto">6</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="cards-basic.html" className="menu-link">
                                            <div data-i18n="Basic">Basic</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="cards-advance.html" className="menu-link">
                                            <div data-i18n="Advance">Advance</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="cards-statistics.html" className="menu-link">
                                            <div data-i18n="Statistics">Statistics</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="cards-analytics.html" className="menu-link">
                                            <div data-i18n="Analytics">Analytics</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="cards-actions.html" className="menu-link">
                                            <div data-i18n="Actions">Actions</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/*  User interface  */}
                            <li className="menu-item">
                                <a href="javascript:void(0)" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-color-swatch"></i>
                                    <div data-i18n="User interface">User interface</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="ui-accordion.html" className="menu-link">
                                            <div data-i18n="Accordion">Accordion</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-alerts.html" className="menu-link">
                                            <div data-i18n="Alerts">Alerts</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-badges.html" className="menu-link">
                                            <div data-i18n="Badges">Badges</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-buttons.html" className="menu-link">
                                            <div data-i18n="Buttons">Buttons</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-carousel.html" className="menu-link">
                                            <div data-i18n="Carousel">Carousel</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-collapse.html" className="menu-link">
                                            <div data-i18n="Collapse">Collapse</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-dropdowns.html" className="menu-link">
                                            <div data-i18n="Dropdowns">Dropdowns</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-footer.html" className="menu-link">
                                            <div data-i18n="Footer">Footer</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-list-groups.html" className="menu-link">
                                            <div data-i18n="List Groups">List groups</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-modals.html" className="menu-link">
                                            <div data-i18n="Modals">Modals</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-navbar.html" className="menu-link">
                                            <div data-i18n="Navbar">Navbar</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-offcanvas.html" className="menu-link">
                                            <div data-i18n="Offcanvas">Offcanvas</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                                            <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-progress.html" className="menu-link">
                                            <div data-i18n="Progress">Progress</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-spinners.html" className="menu-link">
                                            <div data-i18n="Spinners">Spinners</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-tabs-pills.html" className="menu-link">
                                            <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-toasts.html" className="menu-link">
                                            <div data-i18n="Toasts">Toasts</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-tooltips-popovers.html" className="menu-link">
                                            <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="ui-typography.html" className="menu-link">
                                            <div data-i18n="Typography">Typography</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*  Extended components  */}
                            <li className="menu-item">
                                <a href="javascript:void(0)" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-components"></i>
                                    <div data-i18n="Extended UI">Extended UI</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="extended-ui-avatar.html" className="menu-link">
                                            <div data-i18n="Avatar">Avatar</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-blockui.html" className="menu-link">
                                            <div data-i18n="BlockUI">BlockUI</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-drag-and-drop.html" className="menu-link">
                                            <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-media-player.html" className="menu-link">
                                            <div data-i18n="Media Player">Media Player</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                                            <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-star-ratings.html" className="menu-link">
                                            <div data-i18n="Star Ratings">Star Ratings</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-sweetalert2.html" className="menu-link">
                                            <div data-i18n="SweetAlert2">SweetAlert2</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-text-divider.html" className="menu-link">
                                            <div data-i18n="Text Divider">Text Divider</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                                            <div data-i18n="Timeline">Timeline</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="extended-ui-timeline-basic.html" className="menu-link">
                                                    <div data-i18n="Basic">Basic</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="extended-ui-timeline-fullscreen.html" className="menu-link">
                                                    <div data-i18n="Fullscreen">Fullscreen</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-tour.html" className="menu-link">
                                            <div data-i18n="Tour">Tour</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-treeview.html" className="menu-link">
                                            <div data-i18n="Treeview">Treeview</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="extended-ui-misc.html" className="menu-link">
                                            <div data-i18n="Miscellaneous">Miscellaneous</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*  Icons  */}
                            <li className="menu-item">
                                <a href="javascript:void(0)" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-brand-tabler"></i>
                                    <div data-i18n="Icons">Icons</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="icons-tabler.html" className="menu-link">
                                            <div data-i18n="Tabler">Tabler</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="icons-font-awesome.html" className="menu-link">
                                            <div data-i18n="Fontawesome">Fontawesome</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*  Forms & Tables  */}
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Forms &amp; Tables</span>
                            </li>
                            {/*  Forms  */}
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-toggle-left"></i>
                                    <div data-i18n="Form Elements">Form Elements</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="forms-basic-inputs.html" className="menu-link">
                                            <div data-i18n="Basic Inputs">Basic Inputs</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-input-groups.html" className="menu-link">
                                            <div data-i18n="Input groups">Input groups</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-custom-options.html" className="menu-link">
                                            <div data-i18n="Custom Options">Custom Options</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-editors.html" className="menu-link">
                                            <div data-i18n="Editors">Editors</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-file-upload.html" className="menu-link">
                                            <div data-i18n="File Upload">File Upload</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-pickers.html" className="menu-link">
                                            <div data-i18n="Pickers">Pickers</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-selects.html" className="menu-link">
                                            <div data-i18n="Select & Tags">Select &amp; Tags</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-sliders.html" className="menu-link">
                                            <div data-i18n="Sliders">Sliders</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-switches.html" className="menu-link">
                                            <div data-i18n="Switches">Switches</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="forms-extras.html" className="menu-link">
                                            <div data-i18n="Extras">Extras</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-layout-navbar"></i>
                                    <div data-i18n="Form Layouts">Form Layouts</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="form-layouts-vertical.html" className="menu-link">
                                            <div data-i18n="Vertical Form">Vertical Form</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="form-layouts-horizontal.html" className="menu-link">
                                            <div data-i18n="Horizontal Form">Horizontal Form</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="form-layouts-sticky.html" className="menu-link">
                                            <div data-i18n="Sticky Actions">Sticky Actions</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-text-wrap-disabled"></i>
                                    <div data-i18n="Form Wizard">Form Wizard</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="form-wizard-numbered.html" className="menu-link">
                                            <div data-i18n="Numbered">Numbered</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="form-wizard-icons.html" className="menu-link">
                                            <div data-i18n="Icons">Icons</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="form-validation.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-checkbox"></i>
                                    <div data-i18n="Form Validation">Form Validation</div>
                                </a>
                            </li>
                            {/*  Tables  */}
                            <li className="menu-item">
                                <a href="tables-basic.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-table"></i>
                                    <div data-i18n="Tables">Tables</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-layout-grid"></i>
                                    <div data-i18n="Datatables">Datatables</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="tables-datatables-basic.html" className="menu-link">
                                            <div data-i18n="Basic">Basic</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="tables-datatables-advanced.html" className="menu-link">
                                            <div data-i18n="Advanced">Advanced</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="tables-datatables-extensions.html" className="menu-link">
                                            <div data-i18n="Extensions">Extensions</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*  Charts & Maps  */}
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Charts &amp; Maps</span>
                            </li>
                            <li className="menu-item">
                                <a href="javascript:void(0);" className="menu-link menu-toggle">
                                    <i className="menu-icon tf-icons ti ti-chart-pie"></i>
                                    <div data-i18n="Charts">Charts</div>
                                </a>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="charts-apex.html" className="menu-link">
                                            <div data-i18n="Apex Charts">Apex Charts</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="charts-chartjs.html" className="menu-link">
                                            <div data-i18n="ChartJS">ChartJS</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="maps-leaflet.html" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-map"></i>
                                    <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                                </a>
                            </li>

                            {/*  Misc  */}
                            <li className="menu-header small text-uppercase">
                                <span className="menu-header-text">Misc</span>
                            </li>
                            <li className="menu-item">
                                <a href="https://pixinvent.ticksy.com/" target="_blank" className="menu-link">
                                    <i className="menu-icon tf-icons ti ti-lifebuoy"></i>
                                    <div data-i18n="Support">Support</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a
                                    href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/"
                                    target="_blank"
                                    className="menu-link"
                                >
                                    <i className="menu-icon tf-icons ti ti-file-description"></i>
                                    <div data-i18n="Documentation">Documentation</div>
                                </a>
                            </li>
                        </ul>
                    </aside>
                    {/*  / Menu  */}

                    {/*  Layout container  */}
                    <div className="layout-page">
                        {/*  Navbar  */}

                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="ti ti-menu-2 ti-sm"></i>
                                </a>
                            </div>

                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                {/*  Search  */}
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item navbar-search-wrapper mb-0">
                                        <a className="nav-item nav-link search-toggler d-flex align-items-center px-0" href="javascript:void(0);">
                                            <i className="ti ti-search ti-md me-2"></i>
                                            <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                                        </a>
                                    </div>
                                </div>
                                {/*  /Search  */}

                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    {/*  Language  */}
                                    <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                                                    <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                                                    <span className="align-middle">English</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:void(0);" data-language="fr">
                                                    <i className="fi fi-fr fis rounded-circle me-1 fs-3"></i>
                                                    <span className="align-middle">French</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:void(0);" data-language="de">
                                                    <i className="fi fi-de fis rounded-circle me-1 fs-3"></i>
                                                    <span className="align-middle">German</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:void(0);" data-language="pt">
                                                    <i className="fi fi-pt fis rounded-circle me-1 fs-3"></i>
                                                    <span className="align-middle">Portuguese</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* / Language  */}

                                    {/*  Style Switcher  */}
                                    <li className="nav-item me-2 me-xl-0">
                                        <a className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                                            <i className="ti ti-md"></i>
                                        </a>
                                    </li>
                                    {/* / Style Switcher  */}

                                    {/*  Quick links   */}
                                    <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                                        <a
                                            className="nav-link dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                            aria-expanded="false"
                                        >
                                            <i className="ti ti-layout-grid-add ti-md"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end py-0">
                                            <div className="dropdown-menu-header border-bottom">
                                                <div className="dropdown-header d-flex align-items-center py-3">
                                                    <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-shortcuts-add text-body"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Add shortcuts"
                                                    ><i className="ti ti-sm ti-apps"></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div className="dropdown-shortcuts-list scrollable-container">
                                                <div className="row row-bordered overflow-visible g-0">
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-calendar fs-4"></i>
                                                        </span>
                                                        <a href="app-calendar.html" className="stretched-link">Calendar</a>
                                                        <small className="text-muted mb-0">Appointments</small>
                                                    </div>
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-file-invoice fs-4"></i>
                                                        </span>
                                                        <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                                                        <small className="text-muted mb-0">Manage Accounts</small>
                                                    </div>
                                                </div>
                                                <div className="row row-bordered overflow-visible g-0">
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-users fs-4"></i>
                                                        </span>
                                                        <a href="app-user-list.html" className="stretched-link">User App</a>
                                                        <small className="text-muted mb-0">Manage Users</small>
                                                    </div>
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-lock fs-4"></i>
                                                        </span>
                                                        <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                                                        <small className="text-muted mb-0">Permission</small>
                                                    </div>
                                                </div>
                                                <div className="row row-bordered overflow-visible g-0">
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-chart-bar fs-4"></i>
                                                        </span>
                                                        <a href="index.html" className="stretched-link">Dashboard</a>
                                                        <small className="text-muted mb-0">User Profile</small>
                                                    </div>
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-settings fs-4"></i>
                                                        </span>
                                                        <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                                                        <small className="text-muted mb-0">Account Settings</small>
                                                    </div>
                                                </div>
                                                <div className="row row-bordered overflow-visible g-0">
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-help fs-4"></i>
                                                        </span>
                                                        <a href="pages-help-center-landing.html" className="stretched-link">Help Center</a>
                                                        <small className="text-muted mb-0">FAQs & Articles</small>
                                                    </div>
                                                    <div className="dropdown-shortcuts-item col">
                                                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                            <i className="ti ti-square fs-4"></i>
                                                        </span>
                                                        <a href="modal-examples.html" className="stretched-link">Modals</a>
                                                        <small className="text-muted mb-0">Useful Popups</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*  Quick links  */}

                                    {/*  Notification  */}
                                    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                                        <a
                                            className="nav-link dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                            aria-expanded="false"
                                        >
                                            <i className="ti ti-bell ti-md"></i>
                                            <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end py-0">
                                            <li className="dropdown-menu-header border-bottom">
                                                <div className="dropdown-header d-flex align-items-center py-3">
                                                    <h5 className="text-body mb-0 me-auto">Notification</h5>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-all text-body"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Mark all as read"
                                                    ><i className="ti ti-mail-opened fs-4"></i
                                                    ></a>
                                                </div>
                                            </li>
                                            <li className="dropdown-notifications-list scrollable-container">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src="../../assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                                                                <p className="mb-0">Won the monthly best seller gold badge</p>
                                                                <small className="text-muted">1h ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">Charles Franklin</h6>
                                                                <p className="mb-0">Accepted your connection</p>
                                                                <small className="text-muted">12hr ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src="../../assets/img/avatars/2.png" alt className="h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">New Message ✉️</h6>
                                                                <p className="mb-0">You have new message from Natalie</p>
                                                                <small className="text-muted">1h ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <span className="avatar-initial rounded-circle bg-label-success"
                                                                    ><i className="ti ti-shopping-cart"></i
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">Whoo! You have new order 🛒</h6>
                                                                <p className="mb-0">ACME Inc. made new order $1,154</p>
                                                                <small className="text-muted">1 day ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src="../../assets/img/avatars/9.png" alt className="h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">Application has been approved 🚀</h6>
                                                                <p className="mb-0">Your ABC project application has been approved.</p>
                                                                <small className="text-muted">2 days ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <span className="avatar-initial rounded-circle bg-label-success"
                                                                    ><i className="ti ti-chart-pie"></i
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">Monthly report is generated</h6>
                                                                <p className="mb-0">July monthly financial report is generated</p>
                                                                <small className="text-muted">3 days ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src="../../assets/img/avatars/5.png" alt className="h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">Send connection request</h6>
                                                                <p className="mb-0">Peter sent you connection request</p>
                                                                <small className="text-muted">4 days ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src="../../assets/img/avatars/6.png" alt className="h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">New message from Jane</h6>
                                                                <p className="mb-0">Your have new message from Jane</p>
                                                                <small className="text-muted">5 days ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <span className="avatar-initial rounded-circle bg-label-warning"
                                                                    ><i className="ti ti-alert-triangle"></i
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1">CPU is running high</h6>
                                                                <p className="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                                                                <small className="text-muted">5 days ago</small>
                                                            </div>
                                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                                ><span className="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                                ><span className="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-menu-footer border-top">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center"
                                                >
                                                    View all notifications
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* / Notification  */}

                                    {/*  User  */}
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                <img src="../../assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="pages-account-settings-account.html">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src="../../assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-semibold d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-profile-user.html">
                                                    <i className="ti ti-user-check me-2 ti-sm"></i>
                                                    <span className="align-middle">My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-account-settings-account.html">
                                                    <i className="ti ti-settings me-2 ti-sm"></i>
                                                    <span className="align-middle">Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-account-settings-billing.html">
                                                    <span className="d-flex align-items-center align-middle">
                                                        <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                                                        <span className="flex-grow-1 align-middle">Billing</span>
                                                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20"
                                                        >2</span
                                                        >
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-help-center-landing.html">
                                                    <i className="ti ti-lifebuoy me-2 ti-sm"></i>
                                                    <span className="align-middle">Help</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-faq.html">
                                                    <i className="ti ti-help me-2 ti-sm"></i>
                                                    <span className="align-middle">FAQ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pages-pricing.html">
                                                    <i className="ti ti-currency-dollar me-2 ti-sm"></i>
                                                    <span className="align-middle">Pricing</span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
                                                    <i className="ti ti-logout me-2 ti-sm"></i>
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* / User  */}
                                </ul>
                            </div>

                            {/*  Search Small Screens  */}
                            <div className="navbar-search-wrapper search-input-wrapper d-none">
                                <input
                                    type="text"
                                    className="form-control search-input container-xxl border-0"
                                    placeholder="Search..."
                                    aria-label="Search..."
                                />
                                <i className="ti ti-x ti-sm search-toggler cursor-pointer"></i>
                            </div>
                        </nav>

                        {/*  / Navbar  */}

                        {/*  Content wrapper  */}
                        <div className="content-wrapper">
                            {/*  Content  */}

                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row invoice-add">
                                    {/*  Invoice Add */}
                                    <div className="col-lg-9 col-12 mb-lg-0 mb-4">
                                        <div className="card invoice-preview-card">
                                            <div className="card-body">
                                                <div className="row m-sm-4 m-0">
                                                    <div className="col-md-7 mb-md-0 mb-4 ps-0">
                                                        <div className="d-flex svg-illustration mb-4 gap-2 align-items-center">
                                                            <svg
                                                                width="32"
                                                                height="22"
                                                                viewBox="0 0 32 22"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                                                    fill="#7367F0"
                                                                />
                                                                <path
                                                                    opacity="0.06"
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                                                                    fill="#161616"
                                                                />
                                                                <path
                                                                    opacity="0.06"
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                                                                    fill="#161616"
                                                                />
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                                                    fill="#7367F0"
                                                                />
                                                            </svg>

                                                            <span className="app-brand-text fw-bold fs-4"> Vuexy </span>
                                                        </div>
                                                        <p className="mb-2">Office 149, 450 South Brand Brooklyn</p>
                                                        <p className="mb-2">San Diego County, CA 91905, USA</p>
                                                        <p className="mb-3">+1 (123) 456 7891, +44 (876) 543 2198</p>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <dl className="row mb-2">
                                                            <dt className="col-sm-6 mb-2 mb-sm-0 text-md-end ps-0">
                                                                <span className="h4 text-capitalize mb-0 text-nowrap">Invoice</span>
                                                            </dt>
                                                            <dd className="col-sm-6 d-flex justify-content-md-end pe-0 ps-0 ps-sm-2">
                                                                <div className="input-group input-group-merge disabled w-px-150">
                                                                    <span className="input-group-text">#</span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        disabled
                                                                        placeholder="3905"
                                                                        value="3905"
                                                                        id="invoiceId"
                                                                    />
                                                                </div>
                                                            </dd>
                                                            <dt className="col-sm-6 mb-2 mb-sm-0 text-md-end ps-0">
                                                                <span className="fw-normal">Date:</span>
                                                            </dt>
                                                            <dd className="col-sm-6 d-flex justify-content-md-end pe-0 ps-0 ps-sm-2">
                                                                <input type="text" className="form-control w-px-150 date-picker" placeholder="YYYY-MM-DD" />
                                                            </dd>
                                                            <dt className="col-sm-6 mb-2 mb-sm-0 text-md-end ps-0">
                                                                <span className="fw-normal">Due Date:</span>
                                                            </dt>
                                                            <dd className="col-sm-6 d-flex justify-content-md-end pe-0 ps-0 ps-sm-2">
                                                                <input type="text" className="form-control w-px-150 date-picker" placeholder="YYYY-MM-DD" />
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>

                                                <hr className="my-3 mx-n4" />

                                                <div className="row p-sm-4 p-0">
                                                    <div className="col-md-6 col-sm-5 col-12 mb-sm-0 mb-4">
                                                        <h6 className="mb-4">Invoice To:</h6>
                                                        <p className="mb-1">Thomas shelby</p>
                                                        <p className="mb-1">Shelby Company Limited</p>
                                                        <p className="mb-1">Small Heath, B10 0HF, UK</p>
                                                        <p className="mb-1">718-986-6062</p>
                                                        <p className="mb-0">peakyFBlinders@gmail.com</p>
                                                    </div>
                                                    <div className="col-md-6 col-sm-7">
                                                        <h6 className="mb-4">Bill To:</h6>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="pe-4">Total Due:</td>
                                                                    <td><strong>$12,110.55</strong></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pe-4">Bank name:</td>
                                                                    <td>American Bank</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pe-4">Country:</td>
                                                                    <td>United States</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pe-4">IBAN:</td>
                                                                    <td>ETD95476213874685</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pe-4">SWIFT code:</td>
                                                                    <td>BR91905</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <hr className="my-3 mx-n4" />

                                                <form className="source-item pt-4 px-0 px-sm-4">
                                                    <div className="mb-3" data-repeater-list="group-a">
                                                        <div className="repeater-wrapper pt-0 pt-md-4" data-repeater-item>
                                                            <div className="d-flex border rounded position-relative pe-0">
                                                                <div className="row w-100 p-3">
                                                                    <div className="col-md-6 col-12 mb-md-0 mb-3">
                                                                        <p className="mb-2 repeater-title">Item</p>
                                                                        <select className="form-select item-details mb-3">
                                                                            <option selected disabled>Select Item</option>
                                                                            <option value="App Design">App Design</option>
                                                                            <option value="App Customization">App Customization</option>
                                                                            <option value="ABC Template">ABC Template</option>
                                                                            <option value="App Development">App Development</option>
                                                                        </select>
                                                                        <textarea className="form-control" rows="2" placeholder="Item Information"></textarea>
                                                                    </div>
                                                                    <div className="col-md-3 col-12 mb-md-0 mb-3">
                                                                        <p className="mb-2 repeater-title">Cost</p>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control invoice-item-price mb-3"
                                                                            placeholder="00"
                                                                            min="12"
                                                                        />
                                                                        <div>
                                                                            <span>Discount:</span>
                                                                            <span className="discount me-2">0%</span>
                                                                            <span
                                                                                className="tax-1 me-2"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                title="Tax 1"
                                                                            >0%</span
                                                                            >
                                                                            <span className="tax-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Tax 2"
                                                                            >0%</span
                                                                            >
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 col-12 mb-md-0 mb-3">
                                                                        <p className="mb-2 repeater-title">Qty</p>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control invoice-item-qty"
                                                                            placeholder="1"
                                                                            min="1"
                                                                            max="50"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-1 col-12 pe-0">
                                                                        <p className="mb-2 repeater-title">Price</p>
                                                                        <p className="mb-0">$24.00</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex flex-column align-items-center justify-content-between border-start p-2"
                                                                >
                                                                    <i className="ti ti-x cursor-pointer" data-repeater-delete></i>
                                                                    <div className="dropdown">
                                                                        <i
                                                                            className="ti ti-settings ti-xs cursor-pointer more-options-dropdown"
                                                                            role="button"
                                                                            id="dropdownMenuButton"
                                                                            data-bs-toggle="dropdown"
                                                                            data-bs-auto-close="outside"
                                                                            aria-expanded="false"
                                                                        >
                                                                        </i>
                                                                        <div
                                                                            className="dropdown-menu dropdown-menu-end w-px-300 p-3"
                                                                            aria-labelledby="dropdownMenuButton"
                                                                        >
                                                                            <div className="row g-3">
                                                                                <div className="col-12">
                                                                                    <label for="discountInput" className="form-label">Discount(%)</label>
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control"
                                                                                        id="discountInput"
                                                                                        min="0"
                                                                                        max="100"
                                                                                    />
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <label for="taxInput1" className="form-label">Tax 1</label>
                                                                                    <select name="tax-1-input" id="taxInput1" className="form-select tax-select">
                                                                                        <option value="0%" selected>0%</option>
                                                                                        <option value="1%">1%</option>
                                                                                        <option value="10%">10%</option>
                                                                                        <option value="18%">18%</option>
                                                                                        <option value="40%">40%</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <label for="taxInput2" className="form-label">Tax 2</label>
                                                                                    <select name="tax-2-input" id="taxInput2" className="form-select tax-select">
                                                                                        <option value="0%" selected>0%</option>
                                                                                        <option value="1%">1%</option>
                                                                                        <option value="10%">10%</option>
                                                                                        <option value="18%">18%</option>
                                                                                        <option value="40%">40%</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="dropdown-divider my-3"></div>
                                                                            <button type="button" className="btn btn-label-primary btn-apply-changes">Apply</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row pb-4">
                                                        <div className="col-12">
                                                            <button type="button" className="btn btn-primary" data-repeater-create>Add Item</button>
                                                        </div>
                                                    </div>
                                                </form>

                                                <hr className="my-3 mx-n4" />

                                                <div className="row p-0 p-sm-4">
                                                    <div className="col-md-6 mb-md-0 mb-3">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <label for="salesperson" className="form-label me-4 fw-semibold">Salesperson:</label>
                                                            <input
                                                                type="text"
                                                                className="form-control ms-3"
                                                                id="salesperson"
                                                                placeholder="Edward Crowley"
                                                            />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="invoiceMsg"
                                                            placeholder="Thanks for your business"
                                                        />
                                                    </div>
                                                    <div className="col-md-6 d-flex justify-content-end">
                                                        <div className="invoice-calculations">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="w-px-100">Subtotal:</span>
                                                                <span className="fw-semibold">$00.00</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="w-px-100">Discount:</span>
                                                                <span className="fw-semibold">$00.00</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="w-px-100">Tax:</span>
                                                                <span className="fw-semibold">$00.00</span>
                                                            </div>
                                                            <hr />
                                                            <div className="d-flex justify-content-between">
                                                                <span className="w-px-100">Total:</span>
                                                                <span className="fw-semibold">$00.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr className="my-3 mx-n4" />

                                                <div className="row px-0 px-sm-4">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label for="note" className="form-label fw-semibold">Note:</label>
                                                            <textarea className="form-control" rows="2" id="note" placeholder="Invoice note"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  /Invoice Add */}

                                    {/*  Invoice Actions  */}
                                    <div className="col-lg-3 col-12 invoice-actions">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <button
                                                    className="btn btn-primary d-grid w-100 mb-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#sendInvoiceOffcanvas"
                                                >
                                                    <span className="d-flex align-items-center justify-content-center text-nowrap"
                                                    ><i className="ti ti-send ti-xs me-1"></i>Send Invoice</span
                                                    >
                                                </button>
                                                <a href="./app-invoice-preview.html" className="btn btn-label-secondary d-grid w-100 mb-2">Preview</a>
                                                <button type="button" className="btn btn-label-secondary d-grid w-100">Save</button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-2">Accept payments via</p>
                                            <select className="form-select mb-4">
                                                <option value="Bank Account">Bank Account</option>
                                                <option value="Paypal">Paypal</option>
                                                <option value="Card">Credit/Debit Card</option>
                                                <option value="UPI Transfer">UPI Transfer</option>
                                            </select>
                                            <div className="d-flex justify-content-between mb-2">
                                                <label for="payment-terms" className="mb-0">Payment Terms</label>
                                                <label className="switch switch-primary me-0">
                                                    <input type="checkbox" className="switch-input" id="payment-terms" checked />
                                                    <span className="switch-toggle-slider">
                                                        <span className="switch-on"></span>
                                                        <span className="switch-off"></span>
                                                    </span>
                                                    <span className="switch-label"></span>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <label for="client-notes" className="mb-0">Client Notes</label>
                                                <label className="switch switch-primary me-0">
                                                    <input type="checkbox" className="switch-input" id="client-notes" />
                                                    <span className="switch-toggle-slider">
                                                        <span className="switch-on"></span>
                                                        <span className="switch-off"></span>
                                                    </span>
                                                    <span className="switch-label"></span>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <label for="payment-stub" className="mb-0">Payment Stub</label>
                                                <label className="switch switch-primary me-0">
                                                    <input type="checkbox" className="switch-input" id="payment-stub" />
                                                    <span className="switch-toggle-slider">
                                                        <span className="switch-on"></span>
                                                        <span className="switch-off"></span>
                                                    </span>
                                                    <span className="switch-label"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  /Invoice Actions  */}
                                </div>

                                {/*  Offcanvas  */}
                                {/*  Send Invoice Sidebar  */}
                                <div className="offcanvas offcanvas-end" id="sendInvoiceOffcanvas" aria-hidden="true">
                                    <div className="offcanvas-header my-1">
                                        <h5 className="offcanvas-title">Send Invoice</h5>
                                        <button
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="offcanvas-body pt-0 flex-grow-1">
                                        <form>
                                            <div className="mb-3">
                                                <label for="invoice-from" className="form-label">From</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="invoice-from"
                                                    value="shelbyComapny@email.com"
                                                    placeholder="company@email.com"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label for="invoice-to" className="form-label">To</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="invoice-to"
                                                    value="qConsolidated@email.com"
                                                    placeholder="company@email.com"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label for="invoice-subject" className="form-label">Subject</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="invoice-subject"
                                                    value="Invoice of purchased Admin Templates"
                                                    placeholder="Invoice regarding goods"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label for="invoice-message" className="form-label">Message</label>
                                                <textarea className="form-control" name="invoice-message" id="invoice-message" cols="3" rows="8">
                                                    Dear Queen Consolidated,
                                                    Thank you for your business, always a pleasure to work with you!
                                                    We have generated a new invoice in the amount of $95.59
                                                    We would appreciate payment of this invoice by 05/11/2021</textarea
                                                >
                                            </div>
                                            <div className="mb-4">
                                                <span className="badge bg-label-primary">
                                                    <i className="ti ti-link ti-xs"></i>
                                                    <span className="align-middle">Invoice Attached</span>
                                                </span>
                                            </div>
                                            <div className="mb-3 d-flex flex-wrap">
                                                <button type="button" className="btn btn-primary me-3" data-bs-dismiss="offcanvas">Send</button>
                                                <button type="button" className="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/*  /Send Invoice Sidebar  */}

                                {/*  /Offcanvas  */}
                            </div>
                            {/*  / Content  */}

                            {/*  Footer  */}
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl">
                                    <div
                                        className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"
                                    >
                                        <div>
                                            ©
                                            <script>
                                                document.write(new Date().getFullYear());
                                            </script>
                                            , made with ❤️ by <a href="https://pixinvent.com" target="_blank" className="fw-semibold">Pixinvent</a>
                                        </div>
                                        <div>
                                            <a href="https://themeforest.net/licenses/standard" className="footer-link me-4" target="_blank"
                                            >License</a
                                            >
                                            <a href="https://1.envato.market/pixinvent_portfolio" target="_blank" className="footer-link me-4"
                                            >More Themes</a
                                            >

                                            <a
                                                href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/"
                                                target="_blank"
                                                className="footer-link me-4"
                                            >Documentation</a
                                            >

                                            <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block"
                                            >Support</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </footer>
                            {/*  / Footer  */}

                            <div className="content-backdrop fade"></div>
                        </div>
                        {/*  Content wrapper  */}
                    </div>
                    {/*  / Layout page  */}
                </div>

                {/*  Overlay  */}
                <div className="layout-overlay layout-menu-toggle"></div>

                {/*  Drag Target Area To SlideIn Menu On Small Screens  */}
                <div className="drag-target"></div>
            </div>
        </>
    )
}
