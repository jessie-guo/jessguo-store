import React from 'react';

const Footer = () => (

  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Development
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://github.com/jessie-guo/jessguo-store"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Github
              </a>
              </div>
              <div>
              <a
                href="https://app.netlify.com/teams/jessie-guo/sites"
                className="d-block font-color-medium"
                target="_blank"
              >
                Netlify
              </a>

            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow me
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://www.instagram.com/jessieguoart/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Instagram
              </a>

            </div>
            <div>
            <a
                href="https://www.linkedin.com/in/jessie-guo-47b99362/"
                className="d-block font-color-medium"
                target="_blank"
              >
                LinkedIn
              </a>

            </div>
          </div>
        </div>
        {/* <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>
          </div>
        </div> */}
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
          <a
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              &copy; 2020 Jessie Guo
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
