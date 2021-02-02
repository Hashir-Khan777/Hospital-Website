import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Top from "../components/Top";
import "../css/services.css";

const Services = () => {
  return (
    <div className="services">
      <Header />
      <div className="services_content">
        <div className="servive_image">
          <div className="service_head">
            <h1>ALL MEDICAL SERVICES</h1>
          </div>
        </div>
        <div className="dental_services">
          <div className="general_dentistry">
            <h1>General Dentistry</h1>
            <div className="general_dentistry_content">
              <div className="dental_emergency general_service">
                <Link to="/dental-emergency" className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/dentalEmergency.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Dental Emergency</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/generalcheckups.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Dental Checkup</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/dentalExray.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Dental X-Ray</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/scaling.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Scaling and Polishing</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/rootCanal.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Root Canal</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/toothFilling.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Tooth Filling</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/crown.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Crown and Bridges</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/family.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Family Dentistry</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/child.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Child Dentistry</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/dentures.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Dentures</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/gumLifting.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Gum Lifting & Contouring</p>
                  </div>
                </Link>
              </div>
              <div className="dental_emergency general_service">
                <Link className="go_to_service">
                  <div className="service_image">
                    <figure>
                      <img src="/images/dentalBonding.png" alt="" />
                    </figure>
                  </div>
                  <div className="service_name">
                    <p>Dental Bonding</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="general_dentistry">
              <h1>Cosmetic Dentistry</h1>
              <div className="general_dentistry_content">
                <div className="dental_emergency general_service">
                  <Link className="go_to_service">
                    <div className="service_image">
                      <figure>
                        <img src="/images/toothwhitning.png" alt="" />
                      </figure>
                    </div>
                    <div className="service_name">
                      <p>Teeth Whitening</p>
                    </div>
                  </Link>
                </div>
                <div className="dental_emergency general_service">
                  <Link className="go_to_service">
                    <div className="service_image">
                      <figure>
                        <img src="/images/veeners.png" alt="" />
                      </figure>
                    </div>
                    <div className="service_name">
                      <p>Veneers</p>
                    </div>
                  </Link>
                </div>
                <div className="dental_emergency general_service">
                  <Link className="go_to_service">
                    <div className="service_image">
                      <figure>
                        <img src="/images/hollywoodsmile.png" alt="" />
                      </figure>
                    </div>
                    <div className="service_name">
                      <p>Hollywood Smile</p>
                    </div>
                  </Link>
                </div>
                <div className="dental_emergency general_service">
                  <Link className="go_to_service">
                    <div className="service_image">
                      <figure>
                        <img src="/images/botox.png" alt="" />
                      </figure>
                    </div>
                    <div className="service_name">
                      <p>Botox</p>
                    </div>
                  </Link>
                </div>
                <div className="dental_emergency general_service">
                  <Link className="go_to_service">
                    <div className="service_image">
                      <figure>
                        <img src="/images/fillers.png" alt="" />
                      </figure>
                    </div>
                    <div className="service_name">
                      <p>Fillers</p>
                    </div>
                  </Link>
                </div>
                <div className="dental_emergency general_service">
                  <Link className="go_to_service">
                    <div className="service_image">
                      <figure>
                        <img src="/images/skinwhitening.png" alt="" />
                      </figure>
                    </div>
                    <div className="service_name">
                      <p>Skin Whitening</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="general_dentistry">
                <h1>Surgical Dentistry</h1>
                <div className="general_dentistry_content">
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/simpleextraction.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Simple Tooth Extraction</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/wisdomextraction.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Wisdom Tooth Extraction</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/surgeryextraction.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Surgical Extraction</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/minorsurgery.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Minor Oral Surgeries</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/dentalimplants.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Dental Implant</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/fourimplants.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>All On Four Implants</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="general_dentistry">
                <h1>Orthodontic Dentistry</h1>
                <div className="general_dentistry_content">
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/braces.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Mettalic Braces</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/aligner.png" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Invisible Aligners</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dental_emergency general_service">
                    <Link className="go_to_service">
                      <div className="service_image">
                        <figure>
                          <img src="/images/retainer.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="service_name">
                        <p>Retainer</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="before_after">
                <h1>Before After</h1>
                <div class="img-comp-container">
                  <div class="img-comp-img">
                    <img
                      src="/images/braces.png"
                      alt=""
                      width="300"
                      height="200"
                    />
                  </div>
                  <div class="img-comp-img img-comp-overlay">
                    <img
                      src="/images/aligner.png"
                      alt=""
                      width="300"
                      height="200"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <Top />
    </div>
  );
};

export default Services;
