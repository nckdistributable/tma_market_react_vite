import StickyBottomMenu from "../StickyBottomMenu/StickyBottomMenu";
import image from '../../assets/homa.jpg'
import './Cart.css'

export default function Cart() {
    return (
        <div>
            <div className="cart-wrapper">
                <h1>Cart</h1>

                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item-wrapper">
                    <div className="cart-item">
                        <img src={image} alt="Item" className="item-image" />
                        <div className="cart-item-description">
                            <h2>Item Name</h2>
                            <p>Price: 1000</p>
                        </div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-total">
                    <h2>Total: 2000</h2>
                    <button className="buy-button">Buy Now</button>
                </div>
                
            </div>
            <StickyBottomMenu></StickyBottomMenu>
        </div>
    )
}   