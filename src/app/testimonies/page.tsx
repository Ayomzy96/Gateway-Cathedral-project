"use client";
import React, { useState, useRef } from "react";

import Button from "@/components/Button";
import TestimonyCard from "@/components/Testimonies/TestimoniesCarousel/TestimonyCard";
import TestimonyModal from "@/components/Testimonies/TestimonyModal";
import Contact from "@/components/Contact";

import { testimonies } from "@/utils/constants";
import { useClickOutside } from "@/utils/useClickOutside";

import styles from "./testimonies.module.scss";

const TestimoniesPage: React.FC = () => {
  const [testimonyName, setTestimonyName] = useState<string>("");
  const [testimony, setTestimony] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleViewMore = (name: string, testimony: string) => {
    setTestimonyName(name);
    setTestimony(testimony);
    setOpenModal(!openModal);
  };

  useClickOutside(modalRef, setOpenModal, false);

  return (
    <>
      <div className={styles["testimonies"]}>
        <div className={styles["testimonies__heading-container"]}>
          <h1 className={styles["testimonies__heading"]}>Testimonies</h1>
          <h3 className={styles["testimonies__subheading"]}>
            <span>Inspiring testimonies</span> you shouldn&apos;t miss
          </h3>
        </div>
        <div className={styles["testimonies__description-container"]}>
          <p className={styles["testimonies__description"]}>
            Testimonies remind us of God's faithfulness and the power of telling
            what He has done. As Revelation 12:11 says, "They triumphed over him
            by the blood of the Lamb and by the word of their testimony" — your
            story can encourage others, strengthen faith, and bring hope to those
            who are struggling. Please share how God has moved in your life so we
            can celebrate and uplift one another.
          </p>
          <div className={styles["testimonies__description-button"]}>
            <Button
              label="Add your testimony"
              type="button"
              variant="primary"
              size="mini"
            />
          </div>
        </div>
        <div className={styles["testimonies__content-wrapper"]}>
          {testimonies?.map((testimony, index) => {
            return (
              <TestimonyCard
                key={index + 1}
                name={testimony?.name}
                testimony={testimony?.testimony}
                handleViewMore={() =>
                  handleViewMore(testimony?.name, testimony?.testimony)
                }
              />
            );
          })}
        </div>

        {openModal && (
          <div className={styles["testimonies__modal-wrapper"]} ref={modalRef}>
            <TestimonyModal name={testimonyName} content={testimony} />
          </div>
        )}
      </div>
      <Contact />
    </>
  );
};

export default TestimoniesPage;
