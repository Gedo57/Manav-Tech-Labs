import { Button } from '../../components/common/Button.jsx';
import { ArticleCard, EditorialSection } from '../../components/content/EditorialBlocks.jsx';
import { siteContent } from '../../data/siteContent.js';

function DeliveryItem({ item }) {
  return (
    <article className="products-delivery-item">
      <span aria-hidden="true">{item.number}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </article>
  );
}

export function ProductsEditorialSections() {
  const content = siteContent.productsEditorial;

  return (
    <div className="products-editorial" aria-label="Product delivery and support information">
      <EditorialSection
        id="products-practical-workflows"
        eyebrow={content.introduction.eyebrow}
        title={content.introduction.title}
        lead={content.introduction.lead}
        className="products-editorial__introduction"
      >
        <div className="products-editorial__intro-grid">
          <div className="editorial-copy products-editorial__copy">
            {content.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="article-card-grid article-card-grid--three products-editorial__capabilities">
            {content.introduction.items.map((item, index) => (
              <ArticleCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection
        id="products-scope"
        eyebrow={content.scope.eyebrow}
        title={content.scope.title}
        lead={content.scope.lead}
        className="products-editorial__scope"
        align="center"
      >
        <div className="article-card-grid article-card-grid--three products-editorial__scope-grid">
          {content.scope.items.map((item, index) => (
            <ArticleCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="products-delivery-support"
        eyebrow={content.delivery.eyebrow}
        title={content.delivery.title}
        lead={content.delivery.lead}
        className="products-editorial__delivery"
      >
        <div className="products-delivery-grid">
          {content.delivery.items.map((item) => <DeliveryItem key={item.id} item={item} />)}
        </div>
      </EditorialSection>

      <section className="editorial-cta products-editorial__cta" aria-labelledby="products-cta-title">
        <div>
          <span className="editorial-cta__eyebrow">{content.cta.eyebrow}</span>
          <h2 id="products-cta-title">{content.cta.title}</h2>
          <p>{content.cta.body}</p>
        </div>
        <Button href="/contact">{content.cta.button}</Button>
      </section>
    </div>
  );
}
