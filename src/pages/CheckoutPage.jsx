import { useMemo, useState } from 'react';
import { assets } from '../data/assets.js';
import { siteContent } from '../data/siteContent.js';

function money(value) {
  return `$${Number(value).toFixed(2)}`;
}

function getProductIdFromHash() {
  if (typeof window === 'undefined') return '';

  const hash = window.location.hash || '';
  const queryIndex = hash.indexOf('?');
  if (queryIndex === -1) return '';

  const params = new URLSearchParams(hash.slice(queryIndex + 1));
  return params.get('product') || '';
}

function findFeatureValue(product, label, fallback = '') {
  const feature = product.features?.find((item) => item.label.toLowerCase() === label.toLowerCase());
  return feature?.value ?? fallback;
}

function Icon({ name }) {
  if (name === 'user') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === 'company') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 21V4h10v17" />
        <path d="M16 9h4v12M9 8h1M12 8h1M9 12h1M12 12h1M9 16h1M12 16h1" />
      </svg>
    );
  }

  if (name === 'globe') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" />
      </svg>
    );
  }

  if (name === 'pin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  }

  if (name === 'building') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 21V7h14v14" />
        <path d="M8 10h2M14 10h2M8 14h2M14 14h2M8 18h8" />
      </svg>
    );
  }

  if (name === 'zip') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v12H4z" />
        <path d="M8 7V5h8v2M8 12h8M8 16h5" />
      </svg>
    );
  }

  if (name === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4 4.8 6.2c-.7.7-.9 1.8-.4 2.7 2.1 4.4 5.3 7.6 9.7 9.7.9.5 2 .3 2.7-.4L19 16l-4-3-2 2c-1.8-.9-3.1-2.2-4-4l2-2-4-5Z" />
      </svg>
    );
  }

  if (name === 'card') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h18v12H3z" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    );
  }

  if (name === 'paypal') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 20 11 4h6.2c2.2 0 3.8 1.5 3.5 3.6-.4 2.6-2.4 4.4-5.1 4.4h-3l-.8 4H8Z" />
        <path d="M5 20 8 6h5.5" />
      </svg>
    );
  }

  if (name === 'bank') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10h16L12 5 4 10Z" />
        <path d="M6 10v8M10 10v8M14 10v8M18 10v8M4 19h16" />
      </svg>
    );
  }

  if (name === 'lock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 11h10v9H7z" />
        <path d="M9 11V8a3 3 0 0 1 6 0v3" />
        <path d="M12 15v2" />
      </svg>
    );
  }

  if (name === 'arrow') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === 'tag') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12 12 4h7v7l-8 8-7-7Z" />
        <circle cx="16" cy="8" r="1.4" />
      </svg>
    );
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 20 6v6c0 5-3.2 8-8 9-4.8-1-8-4-8-9V6l8-3Z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.6" />
      </svg>
    );
  }

  if (name === 'download') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v11" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 20h14" />
      </svg>
    );
  }

  if (name === 'chat') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v11H8l-4 4V5Z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    );
  }

  return null;
}

function TextInput({ label, required, icon, ...props }) {
  return (
    <label className="checkout-field">
      <span>{label} {required && <b>*</b>}</span>
      <div className="checkout-field__control">
        <Icon name={icon} />
        <input required={required} {...props} />
      </div>
    </label>
  );
}

function SelectInput({ label, required, icon, children, ...props }) {
  return (
    <label className="checkout-field">
      <span>{label} {required && <b>*</b>}</span>
      <div className="checkout-field__control checkout-field__control--select">
        <Icon name={icon} />
        <select required={required} {...props}>{children}</select>
      </div>
    </label>
  );
}

function PaymentOption({ active, icon, label, onClick }) {
  return (
    <button
      className={`checkout-payment-option ${active ? 'checkout-payment-option--active' : ''}`.trim()}
      type="button"
      onClick={onClick}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
}

function SupportRow({ icon, title, body, note }) {
  return (
    <div className="checkout-support-row">
      <span className="checkout-support-row__icon"><Icon name={icon} /></span>
      <div>
        <strong>{title}</strong>
        <small>{body}</small>
      </div>
      {note && <em>{note}</em>}
    </div>
  );
}

function ConfidenceRow({ icon, title, body }) {
  return (
    <div className="checkout-confidence-row">
      <span><Icon name={icon} /></span>
      <div>
        <strong>{title}</strong>
        <small>{body}</small>
      </div>
    </div>
  );
}

export function CheckoutPage({ layoutMode }) {
  const products = siteContent.productsPage.products;
  const productId = getProductIdFromHash();
  const product = useMemo(
    () => products.find((item) => item.id === productId) ?? products[0],
    [productId, products]
  );
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const productImage = assets.products[product.image];
  const licenseType = findFeatureValue(product, 'License', 'Single User');
  const subtotal = product.price * quantity;
  const saving = (product.oldPrice - product.price) * quantity;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const decreaseQuantity = () => setQuantity((current) => Math.max(1, current - 1));
  const increaseQuantity = () => setQuantity((current) => Math.min(99, current + 1));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main id="checkout" className="checkout-page" data-mode={layoutMode}>
      <div className="checkout-page__background" aria-hidden="true" />

      <section className="checkout-hero" aria-label="Checkout intro">
        <nav className="checkout-breadcrumb" aria-label="Breadcrumb">
          <a href="#home">HOME</a>
          <span>›</span>
          <a href="#products">PRODUCTS</a>
          <span>›</span>
          <strong>CHECKOUT</strong>
        </nav>

        <div className="checkout-hero__copy">
          <h1>
            <span>COMPLETE YOUR</span>
            <strong>PURCHASE</strong>
          </h1>
          <p>Review your order details and complete your secure checkout.</p>
        </div>
      </section>

      <section className="checkout-shell" aria-label="Complete purchase form">
        <article className="checkout-product-card">
          <h2>SELECTED PRODUCT</h2>

          <div className="checkout-product-card__image">
            <img src={productImage} alt="" aria-hidden="true" />
          </div>

          <div className="checkout-product-card__copy">
            <div>
              <h3>{product.name}</h3>
              {product.badge && <span>{product.badge}</span>}
            </div>
            <p className="checkout-rating">★ {product.rating} ({product.reviews} Reviews)</p>
            <p>{product.description}</p>
          </div>

          <div className="checkout-product-card__price">
            <strong>{money(product.price)}</strong>
            <em>{money(product.oldPrice)}</em>
            <small>You save {money(product.oldPrice - product.price)} ({product.discount}%)</small>
          </div>

          <div className="checkout-product-card__meta">
            <div>
              <span><Icon name="shield" /></span>
              <strong>License Type</strong>
              <small>{licenseType}</small>
            </div>
            <div>
              <span><Icon name="tag" /></span>
              <strong>Quantity</strong>
              <div className="checkout-quantity" aria-label="Quantity selector">
                <button type="button" onClick={decreaseQuantity}>−</button>
                <strong>{quantity}</strong>
                <button type="button" onClick={increaseQuantity}>+</button>
              </div>
            </div>
          </div>
        </article>

        <form className="checkout-payment-card" onSubmit={handleSubmit}>
          <div className="checkout-card-heading">
            <h2>SELLING & PAYMENT</h2>
          </div>

          <h3>Billing Information</h3>
          <div className="checkout-form-grid">
            <TextInput label="Full Name" required icon="user" placeholder="Enter your full name" />
            <TextInput label="Email Address" required icon="mail" type="email" placeholder="Enter your email address" />
            <TextInput label="Company Name" icon="company" placeholder="Enter your company name" />
            <SelectInput label="Country" required icon="globe" defaultValue="">
              <option value="" disabled>Select your country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Egypt</option>
              <option>India</option>
              <option>United Arab Emirates</option>
            </SelectInput>
            <TextInput label="Billing Address" required icon="pin" placeholder="Enter your street address" />
            <TextInput label="City" required icon="building" placeholder="Enter your city" />
            <TextInput label="ZIP Code" required icon="zip" placeholder="Enter ZIP / Postal code" />
            <TextInput label="Phone Number" required icon="phone" type="tel" placeholder="Enter your phone number" />
          </div>

          <h3>Payment Method</h3>
          <div className="checkout-payment-options" role="group" aria-label="Payment method">
            <PaymentOption
              active={paymentMethod === 'credit-card'}
              icon="card"
              label="Credit Card"
              onClick={() => setPaymentMethod('credit-card')}
            />
            <PaymentOption
              active={paymentMethod === 'paypal'}
              icon="paypal"
              label="PayPal"
              onClick={() => setPaymentMethod('paypal')}
            />
            <PaymentOption
              active={paymentMethod === 'bank-transfer'}
              icon="bank"
              label="Bank Transfer"
              onClick={() => setPaymentMethod('bank-transfer')}
            />
          </div>

          {paymentMethod === 'credit-card' ? (
            <div className="checkout-card-box">
              <TextInput label="Card Number" required icon="card" placeholder="1234 5678 9012 3456" inputMode="numeric" />
              <div className="checkout-card-box__grid">
                <TextInput label="Expiry Date" required icon="card" placeholder="MM / YY" />
                <TextInput label="CVV" required icon="lock" placeholder="123" inputMode="numeric" />
                <TextInput label="Name on Card" required icon="user" placeholder="Enter name as on card" />
              </div>
            </div>
          ) : (
            <div className="checkout-alt-payment">
              <Icon name={paymentMethod === 'paypal' ? 'paypal' : 'bank'} />
              <div>
                <strong>{paymentMethod === 'paypal' ? 'PayPal checkout selected' : 'Bank transfer selected'}</strong>
                <small>You will receive the next payment instructions after submitting checkout.</small>
              </div>
            </div>
          )}

          <label className="checkout-agreement">
            <input type="checkbox" defaultChecked />
            <span />
            <strong>I agree to the <a href="#contact">Terms & Conditions</a> and <a href="#contact">Privacy Policy</a>.</strong>
          </label>

          <button className="checkout-submit" type="submit">
            <Icon name="lock" />
            <span>COMPLETE CHECKOUT</span>
            <Icon name="arrow" />
          </button>

          <p className="checkout-secure-note"><Icon name="lock" /> Your payment information is secure and encrypted.</p>
        </form>

        <aside className="checkout-sidebar" aria-label="Order information">
          <section className="checkout-summary-card">
            <h2>ORDER SUMMARY</h2>
            <div className="checkout-summary-product">
              <img src={productImage} alt="" aria-hidden="true" />
              <div>
                <strong>{product.name}</strong>
                <small>{licenseType} License</small>
              </div>
              <b>{money(product.price)}</b>
            </div>

            <div className="checkout-summary-lines">
              <p><span>License Type</span><strong>{licenseType}</strong></p>
              <p><span>Quantity</span><strong>{quantity}</strong></p>
              <hr />
              <p><span>Subtotal</span><strong>{money(subtotal)}</strong></p>
              <p className="checkout-summary-lines__discount"><span>Discount ({product.discount}%)</span><strong>-{money(saving)}</strong></p>
              <p><span>Tax (10%)</span><strong>{money(tax)}</strong></p>
            </div>

            <div className="checkout-summary-total">
              <span>Total</span>
              <strong>{money(total)}</strong>
            </div>

            <div className="checkout-promo">
              <label>
                <Icon name="tag" />
                <input placeholder="Enter promo code" />
              </label>
              <button type="button">APPLY</button>
            </div>
          </section>

          <section className="checkout-info-card">
            <h2>NEED HELP?</h2>
            <SupportRow icon="mail" title="Email Us" body="hello@manavtechlabs.com" note="We'll respond within 2–6 hours" />
            <SupportRow icon="phone" title="Call Us" body="+1 (302) 261-9180" note="Mon – Sat, 9:00 AM – 7:00 PM (EST)" />
            <SupportRow icon="chat" title="Live Chat" body="Chat with our support team" note="Available 24/7" />
          </section>

          <section className="checkout-info-card">
            <h2>SHOP WITH CONFIDENCE</h2>
            <ConfidenceRow icon="shield" title="Secure Payment" body="Your payment is 100% secure and encrypted" />
            <ConfidenceRow icon="download" title="Instant Delivery" body="Get access to your product instantly" />
            <ConfidenceRow icon="chat" title="Premium Support" body="24/7 expert support whenever you need it" />
          </section>
        </aside>
      </section>
    </main>
  );
}
