import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Top from "../components/Top";
import "../css/services.css";

const Services = () => {
  const clickhandler = () => {
    document
      .querySelector(".dental_emergency_content")
      .classList.toggle("hidden_service");

    document.querySelector(".fa-chevron-down").classList.toggle("rotate");
  };

  return (
    <div className="services">
      <Header />
      <div className="services_content">
        <div className="servive_image">
          <div className="service_head">
            <h1>ALL MEDICAL SERVICES</h1>
          </div>
        </div>
        <ul className="general_dentistry_list" onClick={clickhandler}>
          <h2>General Dentistry</h2>
          <li className="general_dentistry_item">
            <div className="open_menu">
              <i class="fas fa-chevron-down"></i>
              <h3>Dental Emergency</h3>
            </div>
            <div className="content_of_service">
              <div className="dental_emergency_content hidden_service">
                <h1 className="dental_emergency_heading">Dental Emergency</h1>
                <h2>Dental Emergency Treatment</h2>
                <p>
                  Have you encountered a problem, mainly a severe Tooth Pain on
                  a holiday, weekend, or in the middle of the night? If you face
                  a severe Dental Problem outside normal clinic hours, you will
                  likely need to see the dentist in an Emergency. It is
                  important to understand the difference between a standard
                  dental issue that can wait until morning and a real emergency
                  that can compromise your health or cost you a tooth. In
                  general, any dental problem that needs immediate treatment to
                  stop bleeding, alleviate severe tooth nerve pain, or save a
                  tooth is considered an Emergency. Such consideration also
                  involves treating severe infections that can be
                  life-threatening.
                </p>
                <h1 className="common_dental_emergency">
                  Common Dental Emergencies
                </h1>
                <p>
                  If you’re suffering from any of the following common Dental
                  Emergencies, you need to know some important facts to treat
                  and save your tooth.
                </p>
                <div className="dental_image_para">
                  <div className="dental_image">
                    <figure>
                      <img src="/images/knockdOutTooth.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="dental_para">
                    <h1>Knocked Out Tooth</h1>
                    <p>
                      A Knocked Out Tooth is common dental emergency that needs
                      immediate attention and treatment. This usually happens
                      either due to a fall or trauma and can lead to loss of a
                      tooth, if not treated at the right time. If proper
                      emergency steps are not followed, a dentist may not be
                      able to preserve your tooth. 1. Pick up your tooth from
                      the crown. Make sure not to touch the root of the tooth.
                      2. Rinse it under the normal tap water to remove any dirt
                      without removing any tissue attached to it. 3. If you are
                      able to reinsert it in the socket, do it immediately or
                      else place the tooth in a milk solution or normal saline.
                      4. Immediately bring this tooth along with you to our
                      dentist, the more time you take, the lesser the chance to
                      save your tooth.
                    </p>
                  </div>
                </div>

                <div className="dental_image_para">
                  <div className="dental_para">
                    <h1>Chipped, Cracked Or Fractured Tooth</h1>
                    <p>
                      A Chipped Tooth does not often require immediate
                      treatment, thus cannot be counted as a Dental Emergency.
                      It can be left for the next few days if you cannot see a
                      dentist in a while. But when a tooth is cracked or
                      fractured, you usually experience a sharp, throbbing tooth
                      pain that is generally unbearable. Broken tooth pain needs
                      urgent emergency treatment in order to save the tooth.
                      Severe fractures are so extreme that the tooth cannot be
                      saved. If you suffer a fractured tooth, call us
                      immediately for an emergency appointment, meanwhile follow
                      these steps: 1. Rinse your mouth with warm salt water for
                      tooth pain relief. 2. Cold compress often helps to
                      minimize the swelling over your face. 3. Take
                      acetaminophen for tooth pain treatment and avoid any other
                      painkiller. As soon as you visit the dentist, an X-ray
                      will be needed in order to properly diagnose the condition
                      of your tooth. If the pulp inside of the tooth is damaged
                      and you are suffering from a root tooth pain, your tooth
                      may need a root canal. If the pulp is not damaged, the
                      tooth might only need a crown.
                    </p>
                  </div>
                  <div className="dental_image">
                    <figure>
                      <img src="/images/chippedTooth.jpg" alt="" />
                    </figure>
                  </div>
                </div>

                <div className="dental_image_para">
                  <div className="dental_image">
                    <figure>
                      <img src="/images/toothinfection.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="dental_para">
                    <h1>Tooth Infection</h1>
                    <p>
                      A Dental Abscess is a severe and potentially
                      life-threatening condition in which pus is accumulated in
                      the pocket of your tooth has led to an infection. A tooth
                      abscess may show different signs and symptoms including,
                      fever, tooth sensitivity to hot and cold, a persistent
                      toothache, tender lymph nodes in your neck, swelling in
                      the face, and a bump on your gums near the infected tooth.
                      This condition is a dental emergency as the infection can
                      spread into your jaw, surrounding tissue, and to other
                      areas of the body if left untreated. Before you can see
                      the dentist, rinse your mouth with mild saltwater several
                      times to relieve the teeth pain, and draw the pus to the
                      surface. But even if the pus drains itself, still your
                      tooth needs immediate treatment because still there is a
                      risk of infection spreading to your bone.
                    </p>
                  </div>
                </div>

                <div className="dental_image_para">
                  <div className="dental_para">
                    <h1>Facial Injury Or Tissue Damage</h1>
                    <p>
                      Any type of injury inside the mouth, such as wounds,
                      tissue Lacerations, and tears to the lips, cheeks, mouth,
                      and tongue, are considered tissue damage and a Dental
                      Emergency. It is important to immediately consult our
                      dentist for Emergency Treatment for such types of injuries
                      or it can lead to further damage. 1. Clean the area with
                      warm water and place gauze over the bleeding site. 2. Take
                      acetaminophen if you experience any pain.
                    </p>
                  </div>
                  <div className="dental_image">
                    <figure>
                      <img src="/images/tissueDamage.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <Footer />
      </div>
      <Top />
    </div>
  );
};

export default Services;
