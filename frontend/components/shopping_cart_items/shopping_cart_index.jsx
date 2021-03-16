import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartIndexItem from './shopping_cart_index_item';
import {Link} from 'react-router-dom'


class ShoppingCartIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkout: true
    }
  }

  componentDidMount() {
    this.props.fetchCartItems();;
  }

  totalQuantity() {
    let cartItems = this.props.items ;
    let quantity = 0;
    
    cartItems.forEach (item => {
      quantity += item.quantity
    })

    return quantity;
  }

  totalPrice() {
      let total = 0;
      // debugger
      for(let i = 0; i < this.props.items.length; i++) {
        // debugger
          let item = this.props.items[i];
          total += (item.price * item.quantity);
      }

      return total.toFixed(2);
  }

  changeText() {
    this.setState({checkout: !this.state.checkout})
  }

  render() {
    let checkout = this.state.checkout ? "checkout" : "thankyou";
    if (this.totalQuantity() === 0) {
      return (
        <div className="cart-index-container-tp">
          <h3>Your cart is empty!</h3>
          <Link
            className="back-to-main"
            to="/">
            Go back to main page
          </Link>
        </div>
          )
        } else {
        return (
          <div className="cart-index-container-btm">
            <div className="items-in-your-cart">
            {this.totalQuantity()} items in your cart
            
              <div className="keep-btn">
                <Link 
                className="keep"
                to="/">
                  <button className="keep-shopping">Keep shopping</button>
                </Link>
              </div>
            </div>
            <div className="cart-index-sub">
            <div className="cart-index-sub-sub">
                <div className="shopping-cart-index-item">
                  {this.props.items.map((item) => (
                    <ShoppingCartIndexItem
                      deleteCartItem={this.props.deleteCartItem}
                      updateCartItem={this.props.updateCartItem}
                      item={item}
                      key={item.id}
                    />
                  ))}
                </div>
                <div className="right-col">
                <div className="item-transaction">
                  <div className="item-total">
                    <span className="how">How you'll pay</span>
                    <label className="payment-options">
                      <input type="radio" value="mc" defaultChecked></input>
                        <div className="cc-logos">
                          <img id="mc-logo" src={window.mc}></img>
                          <img id="visa-logo" src={window.visa}></img>
                          <img id="aa-logo" src={window.aa}></img>
                          <img id="aa-logo" src={window.dc}></img>
    
                        </div>
                    </label>
                    <label className="payment-options">
                      <input type="radio" value="pp"></input>
                        <div className="pp-logo">
                          <img src={window.pp}></img>
                        </div>
                    </label>
                    <div className="total-price">
                      <span className="total">Item(s) total</span>
                      <span> ${this.totalPrice()}</span>
                    </div>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span className="green"> FREE</span>
                  </div>
    
                  <div className="subtotal">
                    <span>Total ({this.totalQuantity()} items)</span>
                    <span> ${this.totalPrice()}</span>
                  </div>
                  <div className="checkout-btn">
                    <Link 
                      to="/">
                      <button className="checkout" onClick={this.changeText.bind(this)}>Proceed to checkout</button>
                    </Link>
                  </div>
                </div>
                </div>
              </div>
              </div>
          </div>
        );
      } 
  }
}

export default ShoppingCartIndex;
