import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1> <span>Explore</span> the Hidden Gems of <span>Odisha</span></h1>
        <p>
          Discover breathtaking waterfalls, scenic hilltops, and unexplored
          destinations.
        </p>
        <form className="search-bar">
          <input type="text" placeholder="Where you want to go?" />
          <button type="submit">Search</button>
        </form>
        <Link to="/destinations">
          <button className="explore-button">Explore Now</button>
        </Link>
      </section>
      {/* Explore Destinations Section */}
      <section className="section">
        <h2>Top Destinations</h2>
        <div className="card-container">
          {destinations.map((place, index) => (
            <div key={index} className="card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Travel Guides Section */}
      <section className="travel-guides">
        <h2>Plan Your Journey</h2>
        <p>Find expert guides, local tips, and the best travel experiences.</p>

        <div className="travel-container">
          <div className="travel-card">
            <img src="https://media.licdn.com/dms/image/D5612AQEqxGb8Lsj_mg/article-cover_image-shrink_720_1280/0/1681237358042?e=2147483647&v=beta&t=9vyegow_TTCnTVrhQQMVdE6Ad-p47vlyEAWYXmjkdPE" alt="Guides" />
            <h3>Local Travel Guides</h3>
            <p>Connect with experienced guides for a smooth and immersive journey.</p>
            <Link to="/guides">
              <button className="travel-button">Find Guides</button>
            </Link>
          </div>

          <div className="travel-card">
            <img src="https://img.etimg.com/photo/msid-103077831,imgsize-10727/image-1.jpg" alt="Tips" />
            <h3>Best Travel Tips</h3>
            <p>Discover hidden destinations, local traditions, and must-visit places.</p>
            <Link to="/blog">
              <button className="travel-button">Read More</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Stay Options */}
      <section className="stay-options">
        <h2>Find Your Stay</h2>
        <p>Book comfortable accommodations near your favorite destinations.</p>

        <div className="stay-container">
          <div className="stay-card">
            <img src="https://www.seleqtionshotels.com/content/dam/seleqtions/en/in/our-hotels/the-crown-bhubaneswar-ihcl-seleqtions/new-gallery/dji-0220-rs.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="Hotel" />
            <h3>Luxury Hotels</h3>
            <p>Stay in the best-rated hotels with premium amenities and scenic views.</p>
            <Link to="/stays">
              <button className="stay-button">Book Now</button>
            </Link>
          </div>

          <div className="stay-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5c/d2/7a/facade.jpg?w=1200&h=-1&s=1" alt="Resort" />
            <h3>Cozy Resorts</h3>
            <p>Relax in nature with beautiful resort stays, perfect for families and couples.</p>
            <Link to="/stays">
              <button className="stay-button">Book Now</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>Odisha Unveiled</h3>
            <p>Discover the hidden gems of Odisha with expert guides, travel tips, and the best stays.</p>
          </div>

          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/guides">Travel Guides</Link></li>
              <li><Link to="/stays">Stay Options</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
          </div>

          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest travel updates and offers!</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Odisha Unveiled | All rights reserved.</p>
        </div>
      </footer>

    </>
  );
}
const destinations = [
  {
    name: "Duduma Waterfalls",
    description: "A mesmerizing waterfall in Koraput, perfect for adventure lovers.",
    image: "https://incredibleodisha.in/wp-content/uploads/2023/03/Duduma-Waterfall-full-view-1280x960.webp"
  },
  {
    name: "Deomali Hills",
    description: "The highest peak in Odisha, offering breathtaking views.",
    image: "https://cdn.talesofbackpacker.com/wp-content/uploads/2024/08/Places-to-Visit-Near-Deomali-Mountain-Peak-1024x569.jpg?strip=all&lossy=1&quality=92&webp=90&avif=90&ssl=1"
  },
  {
    name: "Simlipal National Park",
    description: "A beautiful wildlife sanctuary with dense forests and waterfalls.",
    image: "https://imagedelivery.net/dmcxpiIQ1lAgOmi_eg0IzQ/4a0ae755-386c-4689-6d6f-93152c2fd400/public"
  },
  {
    name: "Chilika Lake",
    description: "The largest coastal lagoon in India, Chilika Lake is a paradise for bird watchers and nature lovers.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/chilika-lake-bhubaneshwar-odisha-3-atttr-hero?qlt=82&ts=1727010856968"
  },
  {
    name: "Gopalpur Beach",
    description: "A pristine and less crowded beach known for its golden sands, calm waves, and old lighthouse.",
    image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_32,w_620,h_349,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/b-gopalpur-beach_f7efhl"
  },
  {
    name: "Deojhar Waterfall",
    description: "A hidden gem in Odisha, Deojhar Waterfall is a stunning spot for trekking and picnics.",
    image: "https://odishatour.in/wp-content/uploads/2022/02/Deojhar-Waterfall-Talapunji-Narasinghpur-Cuttack-2.jpg"
  },
];

export default Home;
