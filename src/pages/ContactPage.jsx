import { ContactLandscape } from '../sections/landscape/ContactLandscape.jsx';
import { ContactPortrait } from '../sections/portrait/ContactPortrait.jsx';
import { ContactEditorialSections } from '../sections/contact/ContactEditorialSections.jsx';

export function ContactPage({ layoutMode }) {
  return (
    <main className="section-route-page section-route-page--contact" data-page="contact">
      {layoutMode === 'portrait' ? <ContactPortrait /> : <ContactLandscape />}
      <ContactEditorialSections />
    </main>
  );
}
