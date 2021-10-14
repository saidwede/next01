import React from "react";
import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";

const FormCheckout = (props) => {
    return (
        <form className="ps-form--checkout" action="/" method="get">
            <div className="ps-form__billings">
                <h4 className="ps-form__heading">Billing Details</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                First Name <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={props.onFirstNameChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Last Name <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={props.onLastNameChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Company Name (optional)</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={props.onCompanyNameChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Country <sup>*</sup>
                            </label>
                            <select className="ps-select form-control" onChange={props.onCountryChange} >
                                <option value="USA">USA</option>
                                <option value="England">England</option>
                                <option value="Japan">Japan</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Street address <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="House number and street name"
                                onChange={props.onStreetAddressChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Postcode / ZIP (optional)</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Apartment, suite, unit etc. (optional)"
                                onChange={props.onPostcodeChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Town / City <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={props.onCityChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Email <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={props.onEmailChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Phone <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={props.onPhoneChange}
                            />
                        </div>
                    </div>
                    {/*<div className="col-sm-12">
                        <div className="form-group create-account">
                            <div className="ps-checkbox">
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    id="createAccount"
                                    name="createAccount"
                                />
                                <label htmlFor="createAccount">
                                    Create An account
                                </label>
                            </div>
                        </div>
                    </div>*/}
                    {/*<div className="col-sm-12">
                        <div className="form-group shipping">
                            <div className="ps-checkbox">
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    id="shipping"
                                    name="shipping"
                                />
                                <label htmlFor="shipping">
                                    <strong>
                                        Shipping to different Address
                                    </strong>
                                </label>
                            </div>
                        </div>
                    </div>*/}
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Order notes (optional)</label>
                            <textarea
                                className="form-control"
                                rows="6"
                                onChange={props.onOrderNotesChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormCheckout;
