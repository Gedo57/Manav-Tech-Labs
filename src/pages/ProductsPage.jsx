import { useEffect, useMemo, useRef, useState } from 'react';
import { productsPageLayout as layout } from '../config/layout/products.layout.js';
import { cssVars } from '../config/layout/styleHelpers.js';
import { assets } from '../data/assets.js';
import { siteContent } from '../data/siteContent.js';

const PRICE_MAX = 1000;
const FAVORITES_STORAGE_KEY = 'manav-products-favorites';
const PRODUCTS_SEARCH_EVENT = 'manav-products-search';
const PRODUCTS_FAVORITES_EVENT = 'manav-products-favorites';

function getProductsPageStyle() {
  return cssVars({
    productsPageMaxWidth: layout.page.maxWidth,
    productsPagePaddingTop: layout.page.paddingTop,
    productsPageMinHeight: layout.page.minHeight,
    productsPortraitPaddingTop: layout.page.portraitPaddingTop,
    productsPortraitPaddingX: layout.page.portraitPaddingX,
    productsPortraitPaddingBottom: layout.page.portraitPaddingBottom,
    productsSidebarWidth: layout.shell.sidebarWidth,
    productsDetailWidth: layout.shell.detailWidth,
    productsContentPaddingX: layout.shell.contentPaddingX,
    productsContentPaddingTop: layout.shell.contentPaddingTop,
    productsContentPaddingBottom: layout.shell.contentPaddingBottom,
    productsColumnGap: layout.shell.columnGap,
    productsCardColumns: String(layout.cards.columns),
    productsCardGap: layout.cards.gap,
    productsCardRadius: layout.cards.radius,
    productsCardImageHeight: layout.cards.imageHeight,
    productsPortraitCardColumns: String(layout.cards.portraitColumns),
    productsPortraitCardGap: layout.cards.portraitGap
  });
}

function Icon({ name }) {
  if (name === 'search') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </svg>
    );
  }

  if (name === 'heart') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.8 5.8a5.1 5.1 0 0 0-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21.8l8.8-8.8a5.1 5.1 0 0 0 0-7.2Z" />
      </svg>
    );
  }

  if (name === 'arrow-left') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 12H5" />
        <path d="m12 5-7 7 7 7" />
      </svg>
    );
  }

  return null;
}

const platformIcons = {
  Windows: '▦',
  macOS: '●',
  Linux: '♙'
};

function money(value) {
  return `$${Number(value).toFixed(2)}`;
}

function readStoredFavorites() {
  if (typeof window === 'undefined') return [];

  try {
    const storedValue = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsedValue = storedValue ? JSON.parse(storedValue) : [];
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

function ProductCard({ product, isSelected, isFavorite, onSelect, onToggleFavorite }) {
  const image = assets.products[product.image];

  return (
    <article className={`product-card ${isSelected ? 'product-card--selected' : ''}`.trim()}>
      {product.badge && <span className={`product-card__badge product-card__badge--${product.badgeTone}`}>{product.badge}</span>}

      <button
        className={`product-card__heart ${isFavorite ? 'product-card__heart--active' : ''}`.trim()}
        type="button"
        aria-label={isFavorite ? `Remove ${product.name} from favorites` : `Save ${product.name}`}
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(product.id)}
      >
        <Icon name="heart" />
      </button>

      <button className="product-card__select" type="button" onClick={onSelect} aria-label={`View ${product.name} details`}>
        <img src={image} alt="" aria-hidden="true" />
      </button>

      <div className="product-card__body">
        <div className="product-card__title-row">
          <h2>{product.name}</h2>
          <span className="product-card__rating">★ {product.rating}</span>
        </div>
        <p>{product.shortDescription}</p>

        <div className="product-card__platforms" aria-label={`${product.name} supported platforms`}>
          {product.platforms.map((platform) => (
            <span key={platform} title={platform}>{platformIcons[platform] ?? '◆'}</span>
          ))}
        </div>

        <div className="product-card__price-row">
          <strong>{money(product.price)}</strong>
          <span>{money(product.oldPrice)}</span>
        </div>

        <div className="product-card__actions">
          <a href={`#checkout?product=${encodeURIComponent(product.id)}`}>BUY NOW</a>
          <a href={`#enquiry?product=${encodeURIComponent(product.id)}`}>ENQUIRY</a>
        </div>
      </div>
    </article>
  );
}

function Sidebar({
  categories,
  licenseTypes,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  priceLimit,
  onPriceLimitChange,
  searchInputRef
}) {
  const rangeProgress = `${(priceLimit / PRICE_MAX) * 100}%`;

  return (
    <aside className="products-sidebar" aria-label="Product filters">
      <div className="products-sidebar__intro">
        <h1>
          <span>{siteContent.productsPage.titleTop}</span>
          <span>{siteContent.productsPage.titleAccent}</span>
        </h1>
        <p>{siteContent.productsPage.description}</p>
      </div>

      <label className="products-search">
        <span className="sr-only">Search software</span>
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Search software..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <Icon name="search" />
      </label>

      <div className="products-filter-block">
        <h2>CATEGORIES</h2>
        <div className="products-category-list">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`products-category ${activeCategory === category.id ? 'products-category--active' : ''}`.trim()}
              type="button"
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="products-category__icon">{category.icon}</span>
              <span>{category.label}</span>
              <strong>{category.count}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="products-filter-block">
        <h2>PRICE RANGE</h2>
        <label className="price-range" style={{ '--priceRangeProgress': rangeProgress }}>
          <span className="sr-only">Maximum product price</span>
          <input
            type="range"
            min="0"
            max={PRICE_MAX}
            step="10"
            value={priceLimit}
            onChange={(event) => onPriceLimitChange(Number(event.target.value))}
          />
        </label>
        <div className="price-range__labels">
          <span>$0</span>
          <span>{priceLimit >= PRICE_MAX ? '$1000+' : `$${priceLimit}`}</span>
        </div>
      </div>

      <div className="products-filter-block">
        <h2>LICENSE TYPE</h2>
        <div className="license-list">
          {licenseTypes.map((license, index) => (
            <label key={license} className="license-row">
              <input type="checkbox" defaultChecked={index === 0} />
              <span />
              <strong>{license}</strong>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

function DetailFeature({ feature }) {
  return (
    <div className="product-detail-feature">
      <span>{feature.icon}</span>
      <div>
        <strong>{feature.label}</strong>
        <small>{feature.value}</small>
      </div>
    </div>
  );
}

function DetailsPanel({ product, isFavorite, onToggleFavorite }) {
  const selectedImage = assets.products[product.image];

  return (
    <aside className="products-detail" aria-label={`${product.name} details`}>
      <div className="products-detail__topline">
        <span>DETAILS</span>
        <a href="#products">
          <Icon name="arrow-left" />
          BACK TO PRODUCTS
        </a>
      </div>

      <div className="products-detail__gallery products-detail__gallery--single-thumb">
        <div className="products-detail__thumbs" aria-hidden="true">
          <div className="products-detail__thumb products-detail__thumb--active">
            <img src={selectedImage} alt="" />
          </div>
        </div>

        <div className="products-detail__image-frame">
          <img src={selectedImage} alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="products-detail__copy">
        <div className="products-detail__title-row">
          <h2>{product.name}</h2>
          <button
            className={`products-detail__favorite ${isFavorite ? 'products-detail__favorite--active' : ''}`.trim()}
            type="button"
            aria-label={isFavorite ? `Remove ${product.name} from favorites` : `Save ${product.name}`}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(product.id)}
          >
            <Icon name="heart" />
          </button>
        </div>
        <div className="products-detail__rating">
          <span>★ {product.rating} ({product.reviews} Reviews)</span>
          {product.badge && <strong>{product.badge}</strong>}
        </div>

        <div className="products-detail__price">
          <strong>{money(product.price)}</strong>
          <span>{money(product.oldPrice)}</span>
        </div>
        <p className="products-detail__saving">You save {money(product.oldPrice - product.price)} ({product.discount}%)</p>
        <p>{product.description}</p>
      </div>

      <div className="products-detail__features">
        {product.features.map((feature) => (
          <DetailFeature key={feature.label} feature={feature} />
        ))}
      </div>

      <div className="products-detail__checkout">
        <div className="quantity-control" aria-label="Quantity selector">
          <button type="button">−</button>
          <strong>1</strong>
          <button type="button">+</button>
        </div>
        <a href={`#checkout?product=${encodeURIComponent(product.id)}`}>BUY NOW</a>
        <a href={`#enquiry?product=${encodeURIComponent(product.id)}`}>ENQUIRY</a>
      </div>
    </aside>
  );
}

function FavoritesPanel({ products, favoriteIds, isOpen, onClose, onSelectProduct, onToggleFavorite }) {
  const favoriteProducts = products.filter((product) => favoriteIds.includes(product.id));

  if (!isOpen) return null;

  return (
    <aside className="products-favorites-panel" aria-label="Saved products">
      <div className="products-favorites-panel__header">
        <div>
          <span>FAVORITES</span>
          <strong>{favoriteProducts.length} Saved</strong>
        </div>
        <button type="button" aria-label="Close favorites" onClick={onClose}>×</button>
      </div>

      {favoriteProducts.length > 0 ? (
        <div className="products-favorites-panel__list">
          {favoriteProducts.map((product) => (
            <article key={product.id} className="products-favorite-item">
              <button
                className="products-favorite-item__main"
                type="button"
                onClick={() => {
                  onSelectProduct(product.id);
                  onClose();
                }}
              >
                <img src={assets.products[product.image]} alt="" aria-hidden="true" />
                <span>
                  <strong>{product.name}</strong>
                  <small>{money(product.price)}</small>
                </span>
              </button>
              <button
                className="products-favorite-item__remove"
                type="button"
                aria-label={`Remove ${product.name} from favorites`}
                onClick={() => onToggleFavorite(product.id)}
              >
                <Icon name="heart" />
              </button>
            </article>
          ))}
        </div>
      ) : (
        <p className="products-favorites-panel__empty">No favorite products selected yet.</p>
      )}
    </aside>
  );
}

export function ProductsPage({ layoutMode }) {
  const { categories, licenseTypes, products } = siteContent.productsPage;
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceLimit, setPriceLimit] = useState(PRICE_MAX);
  const [sortMode, setSortMode] = useState('popular');
  const [favoriteIds, setFavoriteIds] = useState(readStoredFavorites);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const focusSearchInput = () => {
      searchInputRef.current?.focus();
      searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const toggleFavoritesPanel = () => {
      setIsFavoritesOpen((current) => !current);
    };

    window.addEventListener(PRODUCTS_SEARCH_EVENT, focusSearchInput);
    window.addEventListener(PRODUCTS_FAVORITES_EVENT, toggleFavoritesPanel);

    return () => {
      window.removeEventListener(PRODUCTS_SEARCH_EVENT, focusSearchInput);
      window.removeEventListener(PRODUCTS_FAVORITES_EVENT, toggleFavoritesPanel);
    };
  }, []);

  const favoriteIdSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  const toggleFavorite = (productId) => {
    setFavoriteIds((current) => (
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    ));
  };

  const visibleProducts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filteredProducts = products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
      const matchesPrice = priceLimit >= PRICE_MAX || product.price <= priceLimit;
      const matchesSearch = !normalizedSearchTerm
        || product.name.toLowerCase().includes(normalizedSearchTerm)
        || product.shortDescription.toLowerCase().includes(normalizedSearchTerm)
        || product.description.toLowerCase().includes(normalizedSearchTerm);

      return matchesCategory && matchesPrice && matchesSearch;
    });

    return [...filteredProducts].sort((firstProduct, secondProduct) => {
      if (sortMode === 'price-low') return firstProduct.price - secondProduct.price;
      if (sortMode === 'price-high') return secondProduct.price - firstProduct.price;
      if (sortMode === 'rating') return secondProduct.rating - firstProduct.rating;
      return secondProduct.reviews - firstProduct.reviews;
    });
  }, [activeCategory, priceLimit, products, searchTerm, sortMode]);

  const selectedProduct = visibleProducts.find((product) => product.id === selectedProductId) ?? visibleProducts[0] ?? products[0];

  return (
    <main id="products" className="products-page" data-mode={layoutMode} style={getProductsPageStyle()}>
      <div className="products-page__background" aria-hidden="true" />
      <section className="products-page__shell" aria-label="Software products">
        <Sidebar
          categories={categories}
          licenseTypes={licenseTypes}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          priceLimit={priceLimit}
          onPriceLimitChange={setPriceLimit}
          searchInputRef={searchInputRef}
        />

        <section className="products-list" aria-label="Product catalog">
          <div className="products-list__toolbar">
            <p>Showing {visibleProducts.length > 0 ? `1-${visibleProducts.length}` : '0'} of {products.length} products</p>
            <label>
              <span className="sr-only">Sort products</span>
              <select value={sortMode} onChange={(event) => setSortMode(event.target.value)}>
                <option value="popular">Sort by: Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="products-grid">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProduct.id === product.id}
                  isFavorite={favoriteIdSet.has(product.id)}
                  onSelect={() => setSelectedProductId(product.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="products-empty-state">
              <strong>No products match these filters.</strong>
              <span>Try another search term or increase the price range.</span>
            </div>
          )}

          <nav className="products-pagination" aria-label="Product pagination">
            <button type="button" aria-label="Previous page">‹</button>
            <button className="products-pagination__active" type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" aria-label="Next page">›</button>
          </nav>
        </section>

        {selectedProduct && (
          <DetailsPanel
            product={selectedProduct}
            isFavorite={favoriteIdSet.has(selectedProduct.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </section>

      <FavoritesPanel
        products={products}
        favoriteIds={favoriteIds}
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        onSelectProduct={setSelectedProductId}
        onToggleFavorite={toggleFavorite}
      />
    </main>
  );
}
