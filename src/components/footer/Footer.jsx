import React from 'react'
import './footer.css'
import '../header/Header'
import { useAuth0 } from "@auth0/auth0-react";

function Footer() {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <div className='c-container'>
        <div className='sign'>
          <p className='sign-p'>See personalized recommendations</p>
          { isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> : <button><span onClick={() => loginWithRedirect()}>Sign in</span></button>
          }
          <p className='sign-p1'>New customer? <span>Start here.</span></p>
        </div>
      </div>

                {/* ************************ */}

      <div href="./header/Header" className='backt-top'>
        <p>Back to top</p>
      </div>

                {/* ******************* */}
            
      <div className='footerSection'>
        <div>
          <h2>Get to Know Us</h2>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>

                  {/*  */}

        <div>
          <h2>Make Money with Us</h2>
          <p>Sell products on Amazon</p>
          <p>Sell on amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Bacome an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>See More Make Money with Us</p>
        </div>

                  {/*  */}

        <div>
          <h2>Amazon Payment Products</h2>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>

                  {/*  */}

        <div>
          <h2>Let Us Help You</h2>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content & Devices</p>
          <p>Help</p>
        </div>
      </div>

                      {/* ********************** */}

      <div className='language-changer'>
        <img src="/images/download (3).png" alt="" />
        <a href=""><i class="fa-solid fa-globe"></i>English</a>
        <a href=""><i class="fa-solid fa-dollar-sign"></i>USD - U.S. Dollar </a>
        <a href=""><img src="/images/download (2).png" alt="" />Pakistan </a>
      </div>

                      {/* *************************8 */}

      <div className='footer-last'>
        <div>
          <h3>Amazon <br /> Music</h3>
          <p>Stream <br /> millions <br />of songs</p>
        </div>
        <div>
          <h3>Amazon Ads</h3>
          <p>Reach customers <br />wherever they <br />spend thtier time</p>
        </div>
        <div>
          <h3>6pm</h3>
          <p>Score deals <br />on fashion brands</p>
        </div>
        <div>
          <h3>AbeBooks</h3>
          <p>Books, art <br />& collections</p>
        </div>
        <div>
          <h3>ACX</h3>
          <p>Audiobook Publishing <br />Made Easy</p>
        </div>
        <div>
          <h3>IMDb<br />
          Services</h3>
          <p>Movies, TV <br />
          & Celebrities</p>
        </div>
        <div>
          <h3>Sell on Amazon</h3>
          <p>Start a Selling<br />account</p>
        </div>
        <div>
          <h3>Veeqo</h3>
          <p>Shipping software<br />Inventory <br />Management</p>
        </div>
        <div>
          <h3>Amazon Business</h3>
          <p>Everything <br />
          For<br />Your <br />Business</p>
        </div>
        <div>
          <h3>AmazonGlobal</h3>
          <p>Ship Orders <br /> Internationally</p>
        </div>
        <div>
          <h3>Amazon Ads</h3>
          <p>Reach customers <br />wherever they <br />spend thtier time</p>
        </div>
        <div>
          <h3>Home Services</h3>
          <p>Experienced Pros <br /> Happiness <br />
          Guarantee</p>
        </div>
        <div>
          <h3>Amazon Web <br />
          Services</h3>
          <p>Scalable Cloud <br /> Computing <br /> Services</p>
        </div>
        <div>
          <h3>6pm</h3>
          <p>Score deals <br />on fashion brands</p>
        </div>
        <div>
          <h3>Audible<br />
          Services</h3>
          <p>Listen to Books & <br /> Original <br />
          Audio Performances</p>
        </div>
        <div>
          <h3>Box Office Mojo<br />
          Services</h3>
          <p>Find Movie <br /> Box Office Data</p>
        </div>
        <div>
          <h3>Goodreads<br />
          Services</h3>
          <p>Book reviews <br /> & <br />
          recommendations</p>
        </div>
        <div>
          <h3>IMDb<br />
          Services</h3>
          <p>Movies, TV <br />
          & Celebrities</p>
        </div>
        <div>
          <h3>Kindle Direct Publishing</h3>
          <p>Indie Digital & <br /> Print Publishing <br /> Made Easy</p>
        </div>
        <div>
          <h3>Amazon Web <br />
          Services</h3>
          <p>Scalable Cloud <br /> Computing <br /> Services</p>
        </div>
        <div>
          <h3>Veeqo</h3>
          <p>Shipping software<br />Inventory <br />Management</p>
        </div>
        <div>
          <h3>Prime Video</h3>
          <p>Movies, TV <br />
          & Celebrities</p>
        </div>
        <div>
          <h3>Amazon Ads</h3>
          <p>Reach customers <br />wherever they <br />spend thtier time</p>
        </div>
        <div>
          <h3>Audible<br />
          Services</h3>
          <p>Listen to Books & <br /> Original <br />
          Audio Performances</p>
        </div>
        <div>
          <h3>Amazon Web <br />
          Services</h3>
          <p>Scalable Cloud <br /> Computing <br /> Services</p>
        </div>
        <div>
          <h3>Goodreads<br />
          Services</h3>
          <p>Book reviews <br /> & <br />
          recommendations</p>
        </div>
        <div>
          <h3>Kindle Direct Publishing</h3>
          <p>Indie Digital & <br /> Print Publishing <br /> Made Easy</p>
        </div>
      </div>

      <div className='footer-end'>
        <div>
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Consumer Health Data Privacy Disclosure</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  )
}

export default Footer