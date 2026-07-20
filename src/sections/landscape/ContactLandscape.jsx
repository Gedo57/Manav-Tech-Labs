import { useState } from 'react';
import { ControlledSection } from '../../components/layout/ControlledSection.jsx';
import { contactLandscapeLayout as layout } from '../../config/layout/landscape/contact.layout.js';
import { boxStyle, cssVars, textStyle } from '../../config/layout/styleHelpers.js';
import { assets } from '../../data/assets.js';
import { siteContent } from '../../data/siteContent.js';

function ContactIcon({ type }) {
  const common = {
    width: '30',
    height: '30',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true'
  };

  if (type === 'email') {
    return (
      <svg {...common}>
        <path d="M3.5 6.5h17v11h-17v-11Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'location') {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.4V12l3.4 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactInfoItem({ item }) {
  return (
    <article className="contact-info-item contact-info-item--landscape">
      <span className="contact-info-item__icon">
        <ContactIcon type={item.icon} />
      </span>
      <span className="contact-info-item__copy">
        <strong>{item.title}</strong>
        {item.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </span>
    </article>
  );
}


function ContactForm() {
  const { contact } = siteContent;
  const vars = cssVars({
    contactFormPadding: layout.form.padding,
    contactFormGap: layout.form.gap,
    contactFieldHeight: layout.form.fieldHeight,
    contactTextareaHeight: layout.form.textareaHeight,
    contactButtonHeight: layout.form.buttonHeight,
    contactFieldFontSize: layout.form.fontSize,
    contactButtonFontSize: layout.form.buttonFontSize
  });

  return (
    <form className="contact-form contact-form--landscape controlled-box" style={{ ...boxStyle(layout.form), ...vars }} onSubmit={(event) => event.preventDefault()}>
      <div className="contact-form__row">
        <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" autoComplete="name" required />
        <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" autoComplete="email" required />
      </div>
      <div className="contact-form__row">
        <select name="projectType" aria-label="Project Type" defaultValue="" required>
          <option value="" disabled>Project Type</option>
          {contact.form.projectTypes.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <select name="budgetRange" aria-label="Budget Range" defaultValue="">
          <option value="" disabled>Budget Range</option>
          {contact.form.budgetRanges.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <textarea name="message" placeholder="Tell us about your project..." aria-label="Tell us about your project" required />
      <button type="submit" className="contact-form__button">
        <span>{contact.form.submit}</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <article className={`contact-faq-item ${isOpen ? 'contact-faq-item--open' : ''}`.trim()}>
      <button
        type="button"
        className="contact-faq-item__trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span className="contact-faq-item__plus" aria-hidden="true">+</span>
      </button>
      <p hidden={!isOpen}>{item.answer}</p>
    </article>
  );
}

function FAQPanel() {
  const { contact } = siteContent;
  const [openIndex, setOpenIndex] = useState(0);
  const vars = cssVars({
    contactFaqPaddingX: layout.faq.paddingX,
    contactFaqPaddingY: layout.faq.paddingY,
    contactFaqTitleSize: layout.faq.titleSize,
    contactFaqGapX: layout.faq.gapX,
    contactFaqGapY: layout.faq.gapY,
    contactFaqItemHeight: layout.faq.itemHeight,
    contactFaqItemFontSize: layout.faq.itemFontSize,
    contactFaqPlusSize: layout.faq.plusSize
  });

  return (
    <section className="contact-faq contact-faq--landscape controlled-box" style={{ ...boxStyle(layout.faq), ...vars }} aria-label="Frequently asked questions">
      <h3>{contact.faqTitle}</h3>
      <div className="contact-faq__grid">
        {contact.faq.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
          />
        ))}
      </div>
    </section>
  );
}

export function ContactLandscape() {
  const { contact } = siteContent;
  const listVars = cssVars({
    contactInfoGap: layout.contactList.gap,
    contactInfoIconSize: layout.contactList.iconSize,
    contactInfoTitleSize: layout.contactList.titleSize,
    contactInfoBodySize: layout.contactList.bodySize,
    contactInfoBodyLineHeight: layout.contactList.bodyLineHeight
  });

  return (
    <ControlledSection
      id="contact"
      mode="landscape"
      section={layout.section}
      className="contact-landscape"
      ariaLabel="Manav Tech Labs contact section"
    >
      <div className="contact-landscape__shade" aria-hidden="true" />
      <div className="contact-landscape__bg controlled-image" style={boxStyle(layout.background)} aria-hidden="true">
        <img src={assets.contact.background} alt="" />
      </div>

      <header className="contact-landscape__header controlled-box" style={boxStyle(layout.titleBlock)}>
        <h2 className="contact-title contact-title--landscape" style={textStyle(layout.title)}>
          <span className="contact-title__line contact-title__line--white">{contact.titleTop}</span>
          <span className="contact-title__line contact-title__line--white">{contact.titleMiddle} <span className="contact-title__accent">{contact.titleAccent}</span></span>
        </h2>
      </header>

      <p className="contact-landscape__description controlled-box" style={textStyle(layout.description)}>{contact.description}</p>

      <div className="contact-info-list contact-info-list--landscape controlled-box" style={{ ...boxStyle(layout.contactList), ...listVars }} aria-label="Contact details">
        {contact.info.map((item) => (
          <ContactInfoItem key={item.id} item={item} />
        ))}
      </div>


      <ContactForm />
      <FAQPanel />
    </ControlledSection>
  );
}
