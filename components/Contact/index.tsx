"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "./contact.module.scss";

// Simplified Contact component that shows the Mailchimp subscribe form.
const Contact: React.FC = () => {
  return (
    <div className={styles["contact"]}>
      <h1 className={styles["contact__heading"]}>Stay Updated</h1>
      <div className={styles["contact__form-wrapper"]}>
        <div style={{ flex: 1 }}>
          <p>Join our mailing list to get announcements and event updates for Gateway Youth.</p>
          <ContactForm />
        </div>
        <div className={styles["contact__form-image"]}>
          <Image src={'/images/contact_image.svg'} width={533} height={533} alt="Contact Image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
