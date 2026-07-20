import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../data/assets.js';
import { siteContent } from '../data/siteContent.js';

function money(value) {
  return `$${Number(value).toFixed(2)}`;
}

function getRequestedProductId() {
  if (typeof window === 'undefined') return '';

  const searchParams = new URLSearchParams(window.location.search || '');
  const searchProductId = searchParams.get('product');
  if (searchProductId) return searchProductId;

  const legacyHash = window.location.hash || '';
  const queryIndex = legacyHash.indexOf('?');
  if (queryIndex === -1) return '';

  const legacyParams = new URLSearchParams(legacyHash.slice(queryIndex + 1));
  return legacyParams.get('product') || '';
}

function Icon({ name }) {
  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
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

  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h14v15H5z" />
        <path d="M8 3v4M16 3v4M5 10h14" />
      </svg>
    );
  }

  if (name === 'user') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
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

  if (name === 'message') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20 20 4" />
        <path d="M8 4h12v12" />
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

  if (name === 'send') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m22 2-8 20-4-8-8-4 20-8Z" />
        <path d="m22 2-12 12" />
      </svg>
    );
  }

  return null;
}

function TextInput({ label, required, icon, ...props }) {
  return (
    <label className="enquiry-field">
      <span>{label} {required && <b>*</b>}</span>
      <div className="enquiry-field__control">
        <Icon name={icon} />
        <input {...props} />
      </div>
    </label>
  );
}

function SelectInput({ label, required, children, ...props }) {
  return (
    <label className="enquiry-field">
      <span>{label} {required && <b>*</b>}</span>
      <select {...props}>{children}</select>
    </label>
  );
}

function ContactRow({ icon, title, body, note }) {
  return (
    <div className="enquiry-contact-row">
      <span className="enquiry-contact-row__icon"><Icon name={icon} /></span>
      <div>
        <strong>{title}</strong>
        <span>{body}</span>
        <small>{note}</small>
      </div>
    </div>
  );
}

function SelectedProduct({ product }) {
  const image = assets.products[product.image];

  return (
    <aside className="enquiry-product-card">
      <h2>SELECTED PRODUCT</h2>
      <div className="enquiry-product-card__image">
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <div className="enquiry-product-card__copy">
        <div>
          <h3>{product.name}</h3>
          {product.badge && <span>{product.badge}</span>}
        </div>
        <p className="enquiry-rating">★ {product.rating} ({product.reviews} Reviews)</p>
        <p>{product.description}</p>
      </div>
      <div className="enquiry-product-card__price">
        <span>STARTING FROM</span>
        <strong>{money(product.price)}</strong>
        <em>{money(product.oldPrice)}</em>
        <small>You save {money(product.oldPrice - product.price)} ({product.discount}%)</small>
      </div>
      <div className="enquiry-product-card__license">
        <span>LICENSE TYPE</span>
        <strong>{product.features?.[0]?.value ?? 'Single User'}</strong>
      </div>
    </aside>
  );
}

export function EnquiryPage({ layoutMode }) {
  const products = siteContent.productsPage.products;
  const selectedProduct = useMemo(() => {
    const requestedId = getRequestedProductId();
    return products.find((product) => product.id === requestedId) ?? products[0];
  }, [products]);
  const [productId, setProductId] = useState(selectedProduct.id);
  const [submitted, setSubmitted] = useState(false);

  const product = products.find((item) => item.id === productId) ?? selectedProduct;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="enquiry-page" data-mode={layoutMode}>
      <div className="enquiry-page__background" aria-hidden="true" />

      <section className="enquiry-hero" aria-label="Product enquiry">
        <nav className="enquiry-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">HOME</Link>
          <span>›</span>
          <strong>ENQUIRY</strong>
        </nav>

        <div className="enquiry-hero__copy">
          <h1>
            <span>SEND YOUR</span>
            <strong>PRODUCT ENQUIRY</strong>
          </h1>
          <p>Tell us about your requirements and our experts will get back to you with the best solution, pricing, and next steps.</p>
        </div>
      </section>

      <section className="enquiry-shell" aria-label="Send product enquiry form">
        <SelectedProduct product={product} />

        <form className="enquiry-form-card" onSubmit={handleSubmit}>
          <div className="enquiry-form-card__head">
            <h2>ENQUIRY FORM</h2>
            <span>All fields marked <b>*</b> are required</span>
          </div>

          <div className="enquiry-form-grid">
            <TextInput label="Your Name" required icon="user" name="name" placeholder="Enter your full name" />
            <TextInput label="Your Email" required icon="mail" name="email" type="email" placeholder="Enter your email address" />
            <TextInput label="Company Name" required icon="company" name="company" placeholder="Enter your company name" />
            <SelectInput label="Product Name" required name="product" value={productId} onChange={(event) => setProductId(event.target.value)}>
              {products.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </SelectInput>
            <SelectInput label="License Type" required name="license">
              <option>Single User</option>
              <option>Team / Multi-User</option>
              <option>Enterprise</option>
            </SelectInput>
            <SelectInput label="Team Size" required name="teamSize">
              <option>1 - 5 Users</option>
              <option>6 - 20 Users</option>
              <option>21 - 50 Users</option>
              <option>50+ Users</option>
            </SelectInput>
            <SelectInput label="Budget Range" required name="budget">
              <option>$100 - $500</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000+</option>
            </SelectInput>
            <SelectInput label="Timeline" required name="timeline">
              <option>Within 1 Month</option>
              <option>1 - 3 Months</option>
              <option>3 - 6 Months</option>
              <option>Flexible</option>
            </SelectInput>
          </div>

          <label className="enquiry-field enquiry-field--wide">
            <span>Project Requirements / Message <b>*</b></span>
            <div className="enquiry-field__control enquiry-field__control--textarea">
              <Icon name="message" />
              <textarea name="message" placeholder="Please describe your requirements, goals, key features, or any specific expectations..." />
            </div>
          </label>

          <fieldset className="enquiry-checks">
            <legend>I'M INTERESTED IN <span>(Select all that apply)</span></legend>
            {['Demo Request', 'Custom Quote', 'Technical Support', 'Enterprise Licensing'].map((item, index) => (
              <label key={item}>
                <input type="checkbox" defaultChecked={index < 2} />
                <span />
                <strong>{item}</strong>
              </label>
            ))}
          </fieldset>

          <button className="enquiry-submit" type="submit">
            SEND ENQUIRY
            <Icon name="send" />
          </button>

          {submitted && <p className="enquiry-success">Your enquiry is ready for integration with the backend/contact endpoint.</p>}

          <p className="enquiry-secure"><Icon name="lock" /> Your information is secure and will never be shared.</p>
        </form>

        <aside className="enquiry-info-stack">
          <section className="enquiry-info-card">
            <h2>GET IN TOUCH</h2>
            <ContactRow icon="mail" title="Email Us" body="hello@manavtechlabs.com" note="We'll respond within 2-6 hours" />
            <ContactRow icon="phone" title="Call Us" body="+1 (302) 261-9180" note="Mon - Sat, 9:00 AM - 7:00 PM (EST)" />
            <ContactRow icon="calendar" title="Book a Consultation" body="Schedule a free 30-min call" note="Discuss your project with our experts" />
          </section>

          <section className="enquiry-info-card enquiry-info-card--compact">
            <h2>WHY ENQUIRE WITH US?</h2>
            <ul>
              <li>Tailored solutions for your business needs</li>
              <li>Transparent pricing and no hidden costs</li>
              <li>Scalable and future-ready technologies</li>
              <li>Dedicated support throughout the journey</li>
            </ul>
          </section>

          <section className="enquiry-info-card enquiry-faq-card">
            <div className="enquiry-faq-card__head">
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
              <Link to="/contact">VIEW ALL →</Link>
            </div>
            <details open>
              <summary>How quickly will you respond to my enquiry?</summary>
              <p>We typically respond within 2-6 business hours on working days.</p>
            </details>
            <details>
              <summary>Can I request a custom solution or integration?</summary>
              <p>Yes. We specialize in custom development and integrations.</p>
            </details>
          </section>
        </aside>
      </section>
    </main>
  );
}
