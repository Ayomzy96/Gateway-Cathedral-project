"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import LoadingCard from "@/components/LoadingCard";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
// music components removed
import Services from "@/components/Service";

import { youthFaq } from "@/utils/constants";

import styles from "./page.module.scss";

const Page: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div className={styles["children"]}>
        <div className={styles["children__banner-image"]}>
          <div className={styles["children__banner-content"]}>
            <h1 className={styles["children__banner-content-heading"]}>
              Welcome to the Shining Light Fellowship youth church 
            </h1>
            <p className={styles["children__banner-content-description"]}>
              Remember your Creator in the days of your youth, before the days
              of trouble come and the years approach when you will say, I find
              no pleasure in them - Ecclesiastes 12:1
            </p>
          </div>
        </div>
        <div className={styles["children__content-wrapper"]}>
          <div className={styles["children__pastor-profile-section"]}>
            <div className={styles["children__pastor-profile-image"]}>
              <Image
                src={"https://kdijhjnkxkrfjlyavcoe.supabase.co/storage/v1/object/public/Gateway%20Cathedral/welcome%20to%20church.jpg"}
                alt="Image of pastor with wife"
                fill
              />
            </div>

            <div className={styles["children__pastor-profile-content-wrapper"]}>
              <h1
                className={styles["children__pastor-profile-content-heading"]}
              >
                Welcome to Shining Light Fellowship!
              </h1>
              <p className={styles["children__pastor-profile-content"]}>
                We believe the best way for students to experience God is
                through building relationships with each other. In this safe
                space, you can relax and be real as you learn more about your
                awesome Creator.
                <br />
                <br />
                Whether through casual hangouts, service projects or deep
                discussions about life&apos;s big questions, our goal is to
                support each person&apos;s spiritual journey. As the Bible says,
                &quot;As iron sharpens iron, so one person sharpens
                another.&quot;
                <br />
                <br />
                There is no judgment here - only an open door to ask anything on
                your mind, share laughs and grow stronger together in community.
                We aim to challenge one another to closer walks with Christ
                through authentic fellowship.
                <br />
                <br />
                Our prayer is that you leave feeling empowered yet grounded in
                God&apos;s unconditional love. No matter what&apos;s going on in
                your life, know that you are not alone and this group is here
                for you.
                <br />
                <br />
                We can&apos;t wait to welcome both familiar and new faces into
                this journey. Wherever you&apos;re at in faith, you&apos;ve
                found a home in the Youth Zone!
              </p>
            </div>
          </div>

          {/* Music section removed */}
        </div>
      </div>
  <Services />
      <div className={styles["children__faq-wrapper"]}>
        <FAQ faq={youthFaq} />
      </div>
      <Contact />
    </>
  );
};

export default Page;

