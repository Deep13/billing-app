import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Dashboard from './dashboard/Index';
import Indextwo from './dashboard/Indextwo';
import Indexthree from './dashboard/Indexthree';
import Indexfour from './dashboard/Indexfour';
import Indexfive from './dashboard/Indexfive';
import Customers from './customers/Index';
import AddCustomer from './customers/AddCustomer';
import EditCustomer from './customers/EditCustomer';
import Expenses from './expenses/Index';
import AddExpenses from './expenses/AddExpenses';
import EditExpenses from './expenses/EditExpenses';
import Estimates from './estimates/Index';
import AddEstimate from './estimates/AddEstimate';
import EditEstimate from './estimates/EditEstimate';
import ViewEstimate from './estimates/ViewEstimate';
import Invoices from './invoices/Index';
import Invoicedetails from './invoices/Invoicedetails';
import Invoicesettings from './invoices/Invoicesettings';
import Invoicegrid from './invoices/Invoicegrid';
import Taxsettings from './invoices/Taxsettings';
import Invoicerecurring from './invoices/Invoicerecurring';
import Invoicecancelled from './invoices/Invoicecancelled';
import Invoicepaid from './invoices/Invoicepaid';
import Invoiceoverdue from './invoices/Invoiceoverdue';
import Banksettings from './invoices/Banksettings';
import ViewInvoice from './invoices/ViewInvoice';
import AddInvoice from './invoices/AddInvoice';
import EditInvoice from './invoices/EditInvoice';
import Invoicedraft from './invoices/Invoicedraft';
import Payments from './payments/Index';
import AddPayments from './payments/AddPayments';
import ProfileSettings from './settings/Profile';
import Preferences from './settings/Preferences';
import TaxTypes from './settings/TaxTypes';
import ExpenseCategory from './settings/ExpenseCategory';
import Notifications from './settings/Notifications';
import ChangePassword from './settings/ChangePassword';
import Chat from './application/Chat';
import Calendar from './application/Calendar';
import Inbox from './application/Inbox';
import Profile from './profile/Index';
import Login from './authentication/Login';
import Register from './authentication/Register';
import ForgotPassword from './authentication/ForgotPassword';
import LockScreen from './authentication/LockScreen';
import Page404 from './errorpages/404';
import Page500 from './errorpages/500';
import BlankPage from './blankpage/Index';
import Components from './components/Index';


import VectorMaps from './vectormaps/Index';
import BasicTables from './tables/BasicTables';
import DataTables from './tables/DataTables';
import SalesReport from './reports/salesreport';
import ExpenseReport from './reports/expense';
import ProfitlossReport from './reports/profitloss';
import Taxreport from './reports/taxreport';
import StickySidebar from './layouts/StickySidebar'
import config from 'config';
import Invoiceone from "./invoices/Invoiceone";
import InvoiceTwo from "./invoices/InvoiceTwo";
import InvoiceThree from "./invoices/InvoiceThree";
import InvoiceFour from "./invoices/InvoiceFour";
import InvoiceFive from "./invoices/InvoiceFive";
import BusTicket from "./invoices/BusTicket";
import CarBookingInvoice from "./invoices/CarBookingInvoice";
import CoffeeShop from "./invoices/CoffeeShop";
import CashRecepitOne from "./invoices/CashRecepit";
import CashRecepitTwo from "./invoices/CashRecepitTwo";
import CashRecepitThree from "./invoices/CashRecepitThree";
import CashRecepitFour from "./invoices/CashRecepitFour";
import AddProduct from "./products/addProduct";
import CustomerDetails from "./customers/customerDetails";
import CustomerDetailsPaid from "./customers/customerDetailsPaid";
import CustomerDetailsCancel from "./customers/customerDetailsCancel";
import Vendors from "./vendors";
import AddLedger from "./vendors/addLedger";
import ProductList from "./products/productList";
import EditProduct from "./products/editProduct";
import Category from "./products/category";
import Units from "./products/units";
import Inventory from "./inventory";
import ActiveCustomers from "./customers/activeCustomers";
import DeactiveCustomers from "./customers/deactivateCustomers";
import InvoiceList from "./invoices/invoiceList";
import InvoiceOverdue from "./invoices/Invoiceoverdue";
import InvoicePaid from "./invoices/Invoicepaid";
import InvoiceTemplate from "./invoices/invoiceTemplate";
import GeneralInvoiceOne from "./invoices/generalInvoiceOne";
import GeneralInvoiceTwo from "./invoices/generalInvoiceTwo";
import GeneralInvoiceFour from "./invoices/generalInvoiceFour";
import GeneralInvoiceThree from "./invoices/generalInvoiceThree";
import GeneralInvoiceFive from "./invoices/generalInvoiceFive";
import DomainHosting from "./invoices/domainHosting";
import Ecommerce from "./invoices/ecommerce";
import FitnessCenter from "./invoices/fitnessCenter";
import TrainTicketBooking from "./invoices/trainTicketBooking";
import FlightBookingInvoice from "./invoices/flightBookingInvoice";
import HotelBooking from "./invoices/hotelBooking";
import InternetBooking from "./invoices/internetBooking";
import Medical from "./invoices/medical";
import MoneyExchange from "./invoices/moneyExchange";
import MovieTicketBooking from "./invoices/movieTicketBooking";
import RestuarentBilling from "./invoices/restuarentBilling";
import StudentBilling from "./invoices/studentBilling";
import RecurringInvoice from "./recurring";
import RecurringPaid from "./recurring/recurringPaid";
import RecurringPending from "./recurring/recurringPending";
import RecurringOverdue from "./recurring/recurringOverdue";
import RecurringDraft from "./recurring/recurringDraft";
import RecurringCancelled from "./recurring/recurringCancelled";
import Recurring from "./recurring/recurring";
import CreditNotes from "./creditNotes";
import CreditPending from "./creditNotes/creditPending";
import CreditOverdue from "./creditNotes/creditOverdue";
import CreditDraft from "./creditNotes/creditDraft";
import CreditRecurring from "./creditNotes/creditRecurring";
import CreditCancelled from "./creditNotes/creditCancelled";
import AddCredit from "./creditNotes/addCredit";
import CreditDetails from "./creditNotes/creditDetails";
import Purchases from "./purchase";
import AddPurchases from "./purchase/addPurchases";
import EditPurchase from "./purchase/editPurchase";
import PurchaseDetails from "./purchase/purchaseDetails";
import PurchaseOrders from "./purchaseOrders";
import DebitNotes from "./debitNotes";
import Quotations from "./quatations";
import AddQuotations from "./quatations/addQuotations";
import EditQuotations from "./quatations/editQuotations";
import DeliveryChallans from "./deliveryChallans";
import EditChallans from "./deliveryChallans/editChallans";
import AddChallans from "./deliveryChallans/addChallans";
import PaymentSummary from "./paymentSummary";
import AddUser from "./manageUser";
import User from "./manageUser/user";
import Users from "./manageUser/user";
import EditUser from "./manageUser/editUser";
import RolesPermission from "./rolePermission";
import Permission from "./rolePermission/permission";
import DeleteAccount from "./deleteAccount";
import MembershipPlan from "./membership";
import MembershipAddons from "./membership/membershipAddons";
import Subscribers from "./membership/subscribers";
import Transaction from "./membership/transaction";
import AddPage from "./pages";
import Pages from "./pages/page";
import AllBlogs from "./blog";
import InactiveBlog from "./blog/inactiveBlog";
import AddBlog from "./blog/addBlog";
import Categories from "./blog/categories";
import AddCategories from "./blog/addCategories";
import BlogComments from "./blog/blogComments";
import Countries from "./location";
import States from "./location/states";
import Cities from "./location/cities";
import Testimonials from "./testimonials";
import AddTestimonials from "./testimonials/addTestimonials";
import EditTestimonials from "./testimonials/editTestimonials";
import Faq from "./faq";
import Tickets from "./tickets";
import TicketPending from "./tickets/ticketPending";
import TicketOverdue from "./tickets/ticketOverdue";
import TicketDraft from "./tickets/ticketDraft";
import TicketRecurring from "./tickets/ticketRecurring";
import TicketCancelled from "./tickets/ticketCancelled";
import TicketList from "./tickets/ticketlist";
import TicketListPending from "./tickets/ticketlist/ticketListPending";
import TicketListOverdue from "./tickets/ticketlist/ticketListOverdue";
import TicketListDraft from "./tickets/ticketlist/ticketListdraft";
import TicketListRecurring from "./tickets/ticketlist/ticketListRecurring";
import TicketListCancelled from "./tickets/ticketlist/ticketListCancelled";
import TicketKanban from "./tickets/ticketKanban";
import TicketDetails from "./tickets/ticketOverview";
import { FullScreen } from "react-full-screen";
import AddMembership from "./membership/addMembership";
import FontAwesome from "./icons/font-awesome";
import Feather from "./icons/feather";
import IconicIcon from "./icons/iconic";
import MaterialIcon from "./icons/material";
import MaterialIcons from "./icons/material";
import Pe7 from "./icons/pe7";
import SimpleLine from "./icons/simpleLine";
import Themify from "./icons/themify";
import apexCharts from "./charts/apexcharts";
import ChartJs from "./charts/chartjs";
import MorrisCharts from "./charts/morrisChart";
import FlotCharts from "./charts/floatjs";
import PeityCharts from "./charts/peityCharts";
import C3Charts from "./charts/c3Charts";
import Flags from "./icons/flags";
import WeatherIcons from "./icons/weather";
import Accordions from "./baseUi/accordions";
import Alert from "./baseUi/alerts";
import Avatar from "./baseUi/avatar";
import Badges from "./baseUi/badges";
import Buttons from "./baseUi/buttons";
import Buttongroup from "./baseUi/button-group";
import Breadcumbs from "./baseUi/breadcrumbs";
import Cards from "./baseUi/cards";
import Carousel from "./baseUi/carousel";
// import Ribbon from "./elements/ribbon";
import Dropdowns from "./baseUi/dropdowns";
import Grid from "./baseUi/grid";
import Images from "./baseUi/images";
import Lightbox from "./baseUi/lightbox";
import Media from "./baseUi/media";
import Modals from "./baseUi/modals";
import Offcanvas from "./baseUi/offcanvas";
import Pagination from "./baseUi/pagination";
import Popover from "./baseUi/popover";
import Progress from "./baseUi/progress";
import Placeholder from "./baseUi/placeholders";
import Rangeslides from "./baseUi/rangeslider";
import Spinners from "./baseUi/spinners";
import Sweetalerts from "./baseUi/sweeetalerts";
import Tap from "./baseUi/tab";
import Toasts from "./baseUi/toasts";
import Tooltip from "./baseUi/tooltip";
import Typography from "./baseUi/typography";
import Videos from "./baseUi/videos";
import Error404 from "./error404";
import Fileupload from "./forms/File-upload";
import Formselect2 from "./forms/form-select2";
import BasicInputs from "./forms/basic-inputs";
import FormInputGroups from "./forms/input-groups";
import HorizontalForm from "./forms/horizontal-form";
import VerticalForm from "./forms/vertical-form";
import FormMask from "./forms/FormMask";
import FormValidation from "./forms/FormValidation";
import DeleteAccounts from "./settings/deleteAccount";

import Ribbon from "./elements/ribbon";
import { Clipboard } from "./elements/clipboard";
import Rating from "./elements/rating";
import Texteditor from "./elements/texteditor";
import Counter from "./elements/counter";
import Scrollbar from "./elements/scrollbar";
import Notification from "./elements/notification";
import Stickynote from "./elements/stickynote";
import Timeline from "./elements/timeline";
import Horizontaltimeline from "./elements/horizontaltimeline";
import Formwizard from "./elements/formwizard";
import ContactMessage from "./contactMessage";
import DragDrop from "./elements/drag&drop";
import TypiconIcons from "./icons/typicon";
import StockManagement from "./Project/StockManagement";
import DailyBalance from "./Project/DailyBalance";
import ExpenseManagement from "./Project/ExpenseManagement";
import BuyerCreation from "./Project/BuyerCreation";
import InvoiceManagement from "./Project/InvoiceManagement";
import InvoiceGeneration from "./Project/InvoiceGeneration";
import CustomLogin from "./Project/CustomLogin";

const AppContainer = (props) => {


  return (
    <Router basename={`${config.publicPath}`}>

      <StickySidebar />

      <Switch>

        <Route path="/index" component={Dashboard} />
        <Route path="/indextwo" component={Indextwo} />
        <Route path="/indexthree" component={Indexthree} />
        <Route path="/indexfour" component={Indexfour} />
        <Route path="/indexfive" component={Indexfive} />
        <Route path="/customers" component={Customers} />
        <Route path="/add-customer" component={AddCustomer} />
        <Route path="/edit-customer" component={EditCustomer} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/add-expenses" component={AddExpenses} />
        <Route path="/edit-expenses" component={EditExpenses} />
        <Route path="/estimates" component={Estimates} />
        <Route path="/add-estimate" component={AddEstimate} />
        <Route path="/edit-estimate" component={EditEstimate} />
        <Route path="/view-estimate" component={ViewEstimate} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/invoice-details" component={Invoicedetails} />
        <Route path="/invoice-grid" component={Invoicegrid} />
        <Route path="/view-invoice" component={ViewInvoice} />
        <Route path="/add-invoice" component={AddInvoice} />
        <Route path="/edit-invoice" component={EditInvoice} />
        <Route path="/tax-settings" component={Taxsettings} />
        <Route path="/invoice-paid" component={InvoicePaid} />
        <Route path="/invoice-overdue" component={InvoiceOverdue} />
        <Route path="/bank-settings" component={Banksettings} />
        <Route path="/invoices-settings" component={Invoicesettings} />
        <Route path="/invoice-draft" component={Invoicedraft} />
        <Route path="/invoice-recurring" component={Invoicerecurring} />
        <Route path="/invoice-cancelled" component={Invoicecancelled} />
        <Route path="/invoice-one" component={Invoiceone} />
        <Route path="/invoice-two" component={InvoiceTwo} />
        <Route path="/invoice-three" component={InvoiceThree} />
        <Route path="/invoice-four" component={InvoiceFour} />
        <Route path="/invoice-five" component={InvoiceFive} />
        <Route path="/payments" component={Payments} />
        <Route path="/add-payments" component={AddPayments} />
        <Route path="/settings" component={ProfileSettings} />
        <Route path="/sales-report" component={SalesReport} />
        <Route path="/expenses-report" component={ExpenseReport} />
        <Route path="/profit-loss-report" component={ProfitlossReport} />
        <Route path="/taxs-report" component={Taxreport} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/tax-types" component={TaxTypes} />
        <Route path="/expense-category" component={ExpenseCategory} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/chat" component={Chat} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/profile" component={Profile} />
        <Route path="/error-404" component={Page404} />
        <Route path="/error-500" component={Page500} />
        <Route path="/blank-page" component={BlankPage} />

        <Route path="/components" component={Components} />

        <Route path="/basic-inputs" component={BasicInputs} />
        <Route path="/input-groups" component={FormInputGroups} />
        <Route path="/horizontal-form" component={HorizontalForm} />
        <Route path="/vertical-form" component={VerticalForm} />
        <Route path="/form-mask" component={FormMask} />
        <Route path="/form-validation" component={FormValidation} />
        <Route path="/File-upload" component={Fileupload} />
        <Route path="/form-select2" component={Formselect2} />

        <Route path="/basic-table" component={BasicTables} />
        <Route path="/data-tables" component={DataTables} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/lock-screen" component={LockScreen} />
        <Route path="/bus-ticket" component={BusTicket} />
        <Route path="/car-booking-invoice" component={CarBookingInvoice} />
        <Route path="/coffee-shop" component={CoffeeShop} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/active-customers" component={ActiveCustomers} />
        <Route path="/deactive-customers" component={DeactiveCustomers} />
        <Route path="/customer-details" component={CustomerDetails} />
        <Route path="/customer-details-paid" component={CustomerDetailsPaid} />
        <Route path="/customer-details-cancel" component={CustomerDetailsCancel} />
        <Route path="/vendors" component={Vendors} />
        <Route path="/add-ledger" component={AddLedger} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/category" component={Category} />
        <Route path="/units" component={Units} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/invoice-list" component={InvoiceList} />
        <Route path="/invoice-template" component={InvoiceTemplate} />
        <Route path="/general-invoice-1" component={GeneralInvoiceOne} />
        <Route path="/general-invoice-2" component={GeneralInvoiceTwo} />
        <Route path="/general-invoice-3" component={GeneralInvoiceThree} />
        <Route path="/general-invoice-4" component={GeneralInvoiceFour} />
        <Route path="/general-invoice-5" component={GeneralInvoiceFive} />
        <Route path="/domain-hosting" component={DomainHosting} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/fitness-center" component={FitnessCenter} />
        <Route path="/train-ticket-booking" component={TrainTicketBooking} />
        <Route path="/flight-booking-invoice" component={FlightBookingInvoice} />
        <Route path="/hotel-booking" component={HotelBooking} />
        <Route path="/internet-billing" component={InternetBooking} />
        <Route path="/medical" component={Medical} />
        <Route path="/moneyexchange" component={MoneyExchange} />
        <Route path="/movie-ticket-booking" component={MovieTicketBooking} />
        <Route path="/restuarent-billing" component={RestuarentBilling} />
        <Route path="/student-billing" component={StudentBilling} />
        <Route path="/cashreceipt-1" component={CashRecepitOne} />
        <Route path="/cashreceipt-2" component={CashRecepitTwo} />
        <Route path="/cashreceipt-3" component={CashRecepitThree} />
        <Route path="/cashreceipt-4" component={CashRecepitFour} />
        <Route path="/recurring-invoices" component={RecurringInvoice} />
        <Route path="/recurring-paid" component={RecurringPaid} />
        <Route path="/recurring-pending" component={RecurringPending} />
        <Route path="/recurring-overdue" component={RecurringOverdue} />
        <Route path="/recurring-draft" component={RecurringDraft} />
        <Route path="/recurring-cancelled" component={RecurringCancelled} />
        <Route path="/recurring" component={Recurring} />
        <Route path="/credit-notes" component={CreditNotes} />
        <Route path="/credit-notes-pending" component={CreditPending} />
        <Route path="/credit-notes-overdue" component={CreditOverdue} />
        <Route path="/credit-notes-draft" component={CreditDraft} />
        <Route path="/credit-notes-recurring" component={CreditRecurring} />
        <Route path="/credit-notes-cancelled" component={CreditCancelled} />
        <Route path="/credit-notes-cancelled" component={CreditCancelled} />
        <Route path="/add-credit-notes" component={AddCredit} />
        <Route path="/credit-notes-details" component={CreditDetails} />
        <Route path="/purchases" component={Purchases} />
        <Route path="/add-purchases" component={AddPurchases} />
        <Route path="/edit-purchases" component={EditPurchase} />
        <Route path="/purchases-details" component={PurchaseDetails} />
        <Route path="/purchase-orders" component={PurchaseOrders} />
        <Route path="/debit-notes" component={DebitNotes} />
        <Route path="/quotations" component={Quotations} />
        <Route path="/add-quotations" component={AddQuotations} />
        <Route path="/edit-quotations" component={EditQuotations} />
        <Route path="/delivery-challans" component={DeliveryChallans} />
        <Route path="/edit-delivery-challans" component={EditChallans} />
        <Route path="/add-delivery-challans" component={AddChallans} />
        <Route path="/payment-summary" component={PaymentSummary} />
        <Route path="/add-user" component={AddUser} />
        <Route path="/users" component={Users} />
        <Route path="/edit-users" component={EditUser} />
        <Route path="/roles-permission" component={RolesPermission} />
        <Route path="/permission" component={Permission} />
        <Route path="/permission" component={Permission} />
        <Route path="/delete-account-request" component={DeleteAccount} />
        <Route path="/membership-plans" component={MembershipPlan} />
        <Route path="/membership-addons" component={MembershipAddons} />
        <Route path="/subscribers" component={Subscribers} />
        <Route path="/transactions" component={Transaction} />
        <Route path="/add-page" component={AddPage} />
        <Route path="/pages" component={Pages} />
        <Route path="/all-blogs" component={AllBlogs} />
        <Route path="/inactive-blog" component={InactiveBlog} />
        <Route path="/add-blog" component={AddBlog} />
        <Route path="/categories" component={Categories} />
        <Route path="/add-categories" component={AddCategories} />
        <Route path="/blog-comments" component={BlogComments} />
        <Route path="/countries" component={Countries} />
        <Route path="/states" component={States} />
        <Route path="/cities" component={Cities} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/add-testimonials" component={AddTestimonials} />
        <Route path="/edit-testimonials" component={EditTestimonials} />
        <Route path="/faq" component={Faq} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/tickets-list-pending" component={TicketPending} />
        <Route path="/tickets-list-overdue" component={TicketOverdue} />
        <Route path="/tickets-list-draft" component={TicketDraft} />
        <Route path="/tickets-list-recurring" component={TicketRecurring} />
        <Route path="/tickets-list-cancelled" component={TicketCancelled} />
        <Route path="/tickets-list" component={TicketList} />
        <Route path="/tickets-pending" component={TicketListPending} />
        <Route path="/tickets-overdue" component={TicketListOverdue} />
        <Route path="/tickets-draft" component={TicketListDraft} />
        <Route path="/tickets-recurring" component={TicketListRecurring} />
        <Route path="/tickets-cancelled" component={TicketListCancelled} />
        <Route path="/tickets-kanban" component={TicketKanban} />
        <Route path="/tickets-overview" component={TicketDetails} />
        <Route path="/add-membership" component={AddMembership} />
        <Route path="/add-membership" component={AddMembership} />
        <Route path="/fontawesome-icons" component={FontAwesome} />
        <Route path="/feather-icons" component={Feather} />
        <Route path="/ionic-icons" component={IconicIcon} />
        <Route path="/material-icons" component={MaterialIcons} />
        <Route path="/pe7-icons" component={Pe7} />
        <Route path="/typicon-icons" component={TypiconIcons} />
        <Route path="/simpleline-icons" component={SimpleLine} />
        <Route path="/themify-icons" component={Themify} />
        <Route path="/weather-icons" component={WeatherIcons} />
        <Route path="/flag-icons" component={Flags} />
        <Route path="/apex-charts" component={apexCharts} />
        <Route path="/chart-js" component={ChartJs} />
        <Route path="/morris-charts" component={MorrisCharts} />
        <Route path="/float-charts" component={FlotCharts} />
        <Route path="/peity-charts" component={PeityCharts} />
        <Route path="/c3-charts" component={C3Charts} />

















        <Route path="/login2" component={CustomLogin} />
        <Route path="/stock_management" component={StockManagement} />
        <Route path="/daily_balance" component={DailyBalance} />
        <Route path="/expense_management" component={ExpenseManagement} />
        <Route path="/buyer_creation" component={BuyerCreation} />
        <Route path="/invoice_management" component={InvoiceManagement} />
        <Route path="/invoice_generation" component={InvoiceGeneration} />
















        <Route path="/alerts" component={Alert} />
        <Route path="/accordions" component={Accordions} />
        <Route path="/avatar" component={Avatar} />
        <Route path="/badges" component={Badges} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/button-group" component={Buttongroup} />
        <Route path="/breadcrumbs" component={Breadcumbs} />
        <Route path="/cards" component={Cards} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/dropdowns" component={Dropdowns} />
        <Route path="/grid" component={Grid} />
        <Route path="/images" component={Images} />
        <Route path="/lightbox" component={Lightbox} />
        <Route path="/media" component={Media} />
        <Route path="/modals" component={Modals} />
        <Route path="/offcanvas" component={Offcanvas} />
        <Route path="/pagination" component={Pagination} />
        <Route path="/popover" component={Popover} />
        <Route path="/progress" component={Progress} />
        <Route path="/placeholders" component={Placeholder} />
        <Route path="/rangeslides" component={Rangeslides} />
        <Route path="/spinners" component={Spinners} />
        <Route path="/sweetalerts" component={Sweetalerts} />
        <Route path="/tab" component={Tap} />
        <Route path="/toasts" component={Toasts} />
        <Route path="/tooltip" component={Tooltip} />
        <Route path="/typography" component={Typography} />
        <Route path="/video" component={Videos} />
        <Route path="/vector-map" component={VectorMaps} />
        <Route path="/error-404" component={Error404} />
        <Route path="/delete-accounts" component={DeleteAccounts} />

        <Route path="/ribbon" component={Ribbon} />
        <Route path="/clipboard" component={Clipboard} />
        <Route path="/drag-drop" component={DragDrop} />
        <Route path="/rating" component={Rating} />
        <Route path="/text-editor" component={Texteditor} />
        <Route path="/counter" component={Counter} />
        <Route path="/scrollbar" component={Scrollbar} />
        <Route path="/notification" component={Notification} />
        <Route path="/sticky-note" component={Stickynote} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/horizontal-timeline" component={Horizontaltimeline} />
        <Route path="/form-wizard" component={Formwizard} />
        <Route path="/contact-messages" component={ContactMessage} />
      </Switch>
    </Router>
  );
};

export default AppContainer;
