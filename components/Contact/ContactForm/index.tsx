import React, { useEffect } from "react";

// Mailchimp embed converted to JSX. This component renders the Mailchimp form
// and loads the Mailchimp stylesheet into the document head.
const ContactForm: React.FC = () => {
  useEffect(() => {
    // inject Mailchimp stylesheet if not already present
    const href = "//cdn-images.mailchimp.com/embedcode/classic-061523.css";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us4.list-manage.com/subscribe/post?u=9c57e94deefc816ffb6c9a30d&amp;id=dd9e69036b&amp;f_id=00600ae2f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Abonnieren</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> Angaben erforderlich
            </div>

            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">E-Mail-Adresse <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
            </div>

            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>

            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden>
              <input type="text" name="b_9c57e94deefc816ffb6c9a30d_dd9e69036b" tabIndex={-1} defaultValue="" />
            </div>

            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                <p style={{ margin: "0px auto" }}>
                  <a href="http://eepurl.com/jsRY2Q" title="Mailchimp – Einfaches, schnelles E-Mail-Marketing">
                    <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: 4 }}>
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{ width: 220, height: 40, display: "flex", padding: 2, justifyContent: "center", alignItems: "center" }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
