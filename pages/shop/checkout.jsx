import React from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import ModulEcomerceOrderSummary from "~/components/ecomerce/modules/ModulEcomerceOrderSummary";
import FormCheckout from "~/components/shared/forms/FormCheckout";
import { connect } from "react-redux";

const CheckoutScreen = ({ ecomerce }) => {
    const breadcrumb = [
        {
            text: "Home",
            url: "/",
        },
        {
            text: "Shop",
            url: "/shopping-cart",
        },
        {
            text: "Checkout",
        },
    ];
    let orderForm = {firstName:"", lastName:"", orderNotes:"", phone:"", email:"", city:"", postcode:"", streetAddress:"", country:"", companyName:""};
    ecomerce.orderForm = orderForm;
    const handleFirstNameChange = (e) => {
        orderForm.firstName = e.target.value;
    }
    const handleLastNameChange = (e) => {
        orderForm.lastName = e.target.value;
    }
    const handleOrderNoteChange = (e) => {
        orderForm.orderNotes = e.target.value;
    }
    const handlePhoneChange = (e) => {
        orderForm.phone = e.target.value;
    }
    const handleEmailChange = (e) => {
        orderForm.email = e.target.value;
    }
    const handleCityChange = (e) => {
        orderForm.city = e.target.value;
    }
    const handlePostcodeChange = (e) => {
        orderForm.postcode = e.target.value;
    }
    const handleStreetAdressChange = (e) => {
        orderForm.streetAddress = e.target.value;
    }
    const handleContryChange = (e) => {
        //console.log(e.target.value);
        orderForm.country = e.target.value;
    }
    const handleCompanyNameChange = (e) => {
        orderForm.companyName = e.target.value;
    }

    return (
        <Container title="Checkout">
            <div className="ps-page ps-page--shopping">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="ps-page__heading">Checkout</h1>
                    </div>
                    <div className="ps-page__content">
                        <div className="ps-checkout">
                            <div className="ps-checkout__wapper">
                                <p className="ps-checkout__text">
                                    Returning customer?{" "}
                                    <a href="#">Click here to login</a>
                                </p>
                                <p className="ps-checkout__text">
                                    Have a coupon?{" "}
                                    <a href="shopping-cart.html">
                                        Click here to enter your code
                                    </a>
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <FormCheckout 
                                        onFirstNameChange={handleFirstNameChange}
                                        onLastNameChange={handleLastNameChange}
                                        onCompanyNameChange={handleCompanyNameChange}
                                        onCountryChange={handleContryChange}
                                        onCityChange={handleCityChange}
                                        onStreetAddressChange={handleStreetAdressChange}
                                        onPostcodeChange={handlePostcodeChange}
                                        onEmailChange={handleEmailChange}
                                        onPhoneChange={handlePhoneChange}
                                        onOrderNotesChange={handleOrderNoteChange} />
                                </div>
                                <div className="col-md-4">
                                    <ModulEcomerceOrderSummary />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default connect((state) => state) (CheckoutScreen);
