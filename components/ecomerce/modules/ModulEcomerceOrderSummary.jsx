import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { calculateAmount } from "~/utilities/ecomerce-helpers";
import useEcomerce from "~/hooks/useEcomerce";
import Link from "next/link";
import { useRouter } from 'next/router';
const swell = require('swell-js');

swell.init('sailfish-e-commerce-limited', 'pk_392OXy2LAsQCLz7F9EQHEQ5tnVhAak6x');

const ModulEcomerceOrderSummary = ({ ecomerce }) => {
    const { products, getProducts } = useEcomerce();
    useEffect(() => {
        getProducts(ecomerce.cartItems, "cart");
    }, [ecomerce]);
    const router = useRouter();
    let ordering = false;
    async function placeOrder(){
        if(!ordering){
            ordering = true;
            console.log(ecomerce.cartItems);
            await swell.cart.setItems([]);
            for (let index = 0; index < ecomerce.cartItems.length; index++) {
                await swell.cart.addItem({
                    product_id: ecomerce.cartItems[index].id,
                    quantity: ecomerce.cartItems[index].quantity,
                }).then((cart) =>{
                    //console.log(cart);
                }).catch((error) => {console.log(JSON.stringify(error))});
                
            }
            /*await swell.cart.setItems(ecomerce.cartItems).then((cart) =>{
                console.log(cart);
            }).catch((error) => {console.log(JSON.stringify(error))});*/
    
            await swell.cart.update({
                shipping: {
                  name: ecomerce.orderForm.firstName+" "+ecomerce.orderForm.lastName,
                  address1: ecomerce.orderForm.streetAddress,
                  address2: '',
                  city: ecomerce.orderForm.city,
                  state: '',
                  zip: ecomerce.orderForm.postcode,
                  country: ecomerce.orderForm.country,
                  phone: ecomerce.orderForm.phone
                },
                account: {
                    email: ecomerce.orderForm.email,
                 // Optional; indicates the customer has consented to receive marketing emails
                    // Optional; sets the customer's password if one doesn't exist yet
                  }
              }).then((cart) =>{
                console.log(cart);
            }).catch((error) => {console.log(JSON.stringify(error))});
    
            await swell.cart.submitOrder().then(() => {
                console.log(cart);
            }).catch((error) => {console.log(JSON.stringify(error))});
            //ordering = false;
            router.push('/shop/order-success');
        }
    }

    // Views
    let cartItemsView,
        amountView = "0.00";
    if (products && products.length > 0) {
        amountView = calculateAmount(products);
        cartItemsView = products.map((item) => (
            <div className="ps-checkout__row ps-product" key={item.id}>
                <div className="ps-product__name">
                    <span>{item.name}</span> x <span>{item.quantity}</span>
                </div>
                <div className="ps-product__price">${item.price}</div>
            </div>
        ));
    } else {
    }
    return (
        <>
            <div className="ps-checkout__order">
                <h3 className="ps-checkout__heading">Your order</h3>
                <div className="ps-checkout__row">
                    <div className="ps-title">Product</div>
                    <div className="ps-title">Subtotal</div>
                </div>
                {cartItemsView}

                <div className="ps-checkout__row">
                    <div className="ps-title">Subtotal</div>
                    <div className="ps-product__price">${amountView}</div>
                </div>
                <div className="ps-checkout__row">
                    <div className="ps-title">Shipping</div>
                    <span>
                        <small>Free shipping</small>
                    </span>
                </div>
                <div className="ps-checkout__row">
                    <div className="ps-title">Total</div>
                    <div className="ps-product__price">${amountView}</div>
                </div>
                <div className="ps-checkout__payment">
                    {/* <div className="payment-method">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="method"
                                id="payment"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="payment">
                                Check payments
                            </label>
                        </div>
                        <p className="ps-note">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                        </p>
                    </div>
                    <div className="paypal-method">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="method"
                                id="paypal"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="paypal">
                                {" "}
                                PayPal{" "}
                                <img
                                    src="/static/img/AM_mc_vs_ms_ae_UK.png"
                                    alt=""
                                />
                                <a href="https://www.paypal.com/uk/webapps/mpp/paypal-popup">
                                    What is PayPal?
                                </a>
                            </label>
                        </div>
                    </div>*/}
                    <div className="check-faq">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="agree-terms"
                                defaultChecked
                            />
                            <label
                                className="form-check-label"
                                htmlFor="agree-term">
                                {" "}
                                I have read and agree to the website terms and
                                conditions *
                            </label>
                        </div>
                    </div>
                    <a className="ps-btn ps-btn--warning" onClick={placeOrder}>{ordering ? 'Wait...' : 'Place order'}</a>
                </div>
            </div>
        </>
    );
};

export default connect((state) => state)(ModulEcomerceOrderSummary);
