import { useState } from "react";
import Modal from "@mui/material/Modal";

const Windan = () => {
  // Functions for Modal image display
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleOpen = (imageSrc) => {
    setImageSrc(imageSrc);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="windan">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-object"
      >
        <div className="modal-div">
          <button className="close-button link" onClick={handleClose}>
            X
          </button>
          <img
            src={imageSrc}
            className="modal"
            alt="modal"
            onClick={handleClose}
          />
        </div>
      </Modal>

      <a href="https://windanmarket.com/" target="_blank" rel="noreferrer">
        <h1 className="section-title link">Windan Market Concept &#x2197;</h1>
      </a>
      <div className="project-what div-background">
        <h1>What</h1>
        <h3 className="what-description">
          I designed and deployed a menswear concept shop from scratch.
        </h3>
      </div>

      <div className="project-why div-background">
        <h1>Why</h1>
        <div className="problem-solution">
          <div className="project-list-div">
            <h2>User Problems</h2>
            <ul>
              <p>Finding unique menswear</p>
              <p>Cluttered online retailers</p>
              <p>Department stores carrying less in stock</p>
              <p>Shipping costs from multiple online stores</p>
              <p>Fast fashion</p>
            </ul>
          </div>
          <div className="project-list-div">
            <h2>Solution</h2>
            <ul>
              <p>Online menswear shop featuring some lesser known brands</p>
              <p>No pop-up advertisements / email deals</p>
              <p>Eco-conscious brands</p>
              <p>Less filler pieces than department stores</p>
              <p>Most garments designed to last</p>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-how div-background">
        <h1>How</h1>
        <div className="tools-features-resources">
          <div className="project-list-div">
            <h2>Tools</h2>
            <li className="project-list">
              <p>CSS</p>
              <p>HTML</p>
              <p>JSON</p>
              <p>JavaScript</p>
              <p>Express</p>
              <p>NPM</p>
              <p>OnRender</p>
            </li>
          </div>
          <div className="project-list-div">
            <h2>Features</h2>
            <li className="project-list">
              <p>Wishlist</p>
              <p>Filtering</p>
              <p>Scaling</p>
              <p>Pagination</p>
              <p>Search</p>
              <p>Rec Form</p>
            </li>
          </div>
          <div className="project-list-div">
            <h2>Resources</h2>
            <li className="project-list">
              <p>ChatGPT</p>
              <p>YouTube</p>
              <p>Documentation</p>
            </li>
          </div>
        </div>
      </div>

      <div className="project-details project-windan">
        <h1 className="project-windan">Design Elements</h1>

        <div className="details-section">
          <div className="product-page-views">
            <div className="horizontal-product-view-div">
              <img
                src="product_page.PNG"
                onClick={() => handleOpen("product_page.PNG")}
                alt="product-page"
                className="horizontal-product-view project-windan"
                decoding="async"
              ></img>
              <p className="project-windan windan-text">
                Wall to wall product images fill the width of the screen,
                maximizing product detail.
              </p>
            </div>
            <img
              src="product_page_mobile.PNG"
              onClick={() => handleOpen("product_page_mobile.PNG")}
              alt="product-page-mobile"
              className="vertical-product-view project-windan"
              decoding="async"
            ></img>
          </div>
        </div>

        <div className="details-section">
          <div className="product-tile-views">
            <img
              src="product_tile_saved.PNG"
              onClick={() => handleOpen("product_tile_saved.PNG")}
              alt="product-tile-saved"
              className="product-tile-view"
              decoding="async"
            ></img>
            <p className="project-windan windan-text">
              The check mark in the lower right corner provides the user with
              visual feedback for products they've saved.
            </p>
          </div>
        </div>

        <div className="details-section">
          <div className="product-page-views">
            <div className="horizontal-product-view-div">
              <img
                src="product_description.PNG"
                onClick={() => handleOpen("product_description.PNG")}
                alt="product-desc"
                className="horizontal-product-view project-windan"
                decoding="async"
              ></img>
              <p className="project-windan windan-text">
                Saved products get added to a "wishlist", where a description
                from the brand is displayed.
              </p>
            </div>
            <img
              src="product_description_mobile.PNG"
              onClick={() => handleOpen("product_description_mobile.PNG")}
              alt="product-desc-mobile"
              className="vertical-product-view project-windan"
              decoding="async"
            ></img>
          </div>
        </div>

        <div className="details-section">
          <p className="project-windan windan-text">
            Clicking on a product image opens a new tab, redirecting the user to
            the product site.
          </p>
        </div>

        <div className="details-section">
          <div className="product-page-views-flipped">
            <img
              src="product_filters_mobile.PNG"
              onClick={() => handleOpen("product_filters_mobile.PNG")}
              alt="product-filters-mobile"
              className="vertical-product-view project-windan"
              decoding="async"
            ></img>
            <div className="horizontal-product-view-div">
              <p className="project-windan windan-text">
                The drop-down menu lets users categorize and filter content
                quickly.
              </p>
              <img
                src="product_filters.PNG"
                onClick={() => handleOpen("product_filters.PNG")}
                alt="product-filters"
                className="horizontal-product-view project-windan"
                decoding="async"
              ></img>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="product-page-views">
            <div className="horizontal-product-view-div">
              <img
                src="product_search.PNG"
                onClick={() => handleOpen("product_search.PNG")}
                alt="product-search"
                className="horizontal-product-view project-windan"
                decoding="async"
              ></img>
              <p className="project-windan windan-text">
                The nav bar turns into a search bar for space efficiency.
              </p>
            </div>
            <img
              src="product_search_mobile.PNG"
              onClick={() => handleOpen("product_search_mobile.PNG")}
              alt="product-search-mobile"
              className="vertical-product-view project-windan"
              decoding="async"
            ></img>
          </div>
        </div>
      </div>

      <div className="project-details">
        <h1>Technical Elements</h1>

        <div className="details-section">
          <div className="code-view">
            <img
              src="wishlist_code.PNG"
              onClick={() => handleOpen("wishlist_code.PNG")}
              alt="wishlist-code"
              className="code"
              decoding="async"
            ></img>
            <p className="windan-text">
              Saved products are stored locally, eliminating the need for
              database storage, while still ensuring users can access their
              wishlist.
            </p>
          </div>
        </div>

        <div className="details-section">
          <div className="code-view">
            <img
              src="navbar_flex_code.PNG"
              onClick={() => handleOpen("navbar_flex_code.PNG")}
              alt="wishlist-code"
              className="code"
              decoding="async"
            ></img>
            <p className="windan-text">
              On larger screens, the navigation panel shrinks once the user
              begins to scroll.
            </p>
          </div>
        </div>

        <div className="details-section">
          <div className="code-view">
            <img
              src="load_more_code.PNG"
              onClick={() => handleOpen("load_more_code.PNG")}
              alt="wishlist-code"
              className="code"
              decoding="async"
            ></img>
            <p className="windan-text">
              At the bottom of the product grid, a load more button allows the
              user to load more content without having to navigate to a new
              page.
            </p>
          </div>
        </div>

        <div className="details-section">
          <p className="windan-text">
            The site is hosted on
            <a
              href="https://render.com/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Render&#x2197;
            </a>
            , a free web service provider for developers. Render seamlessly
            integrates with GitHub, allowing for effortless deployment and
            automatic updates with every code change.
          </p>
          <p className="windan-subtext sub-text">
            I am unaffiliated with Render. This is non-sponsored content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Windan;
