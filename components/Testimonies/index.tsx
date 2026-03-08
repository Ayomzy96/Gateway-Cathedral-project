"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { useClickOutside } from "@/utils/useClickOutside";
import { testimonies } from "@/utils/constants";

import Button from "../Button";
import LoadingCard from "../LoadingCard";
import TestimoniesCarousel from "./TestimoniesCarousel";
import TestimonyModal from "./TestimonyModal";
import TestimonyCard from "./TestimoniesCarousel/TestimonyCard";

import styles from "./testimonies.module.scss";
import AddTestimoniesModal from "./AddTestimoniesModal";

interface TestimoniesProps {
  style?: React.CSSProperties;
}
const Testimonies: React.FC<TestimoniesProps> = ({ style }) => {
  const [testimonyName, setTestimonyName] = useState<string>("");
  const [testimony, setTestimony] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openAddTestimonyModal, setOpenAddTestimonyModal] =
    useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { push } = useRouter();

  const handleRouteToTestimoniesPage = () => {
    push("/testimonies");
  };

  const handleViewMore = (name: string, testimony: string) => {
    setTestimonyName(name);
    setTestimony(testimony);
    setOpenModal(!openModal);
  };

  const handleAddTestimony = () => {
    setOpenAddTestimonyModal(!openAddTestimonyModal);
  };

  useClickOutside(modalRef, setOpenModal, false);
  useClickOutside(modalRef, setOpenAddTestimonyModal, false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles["testimonies"]} style={style}>
      <div className={styles["testimonies__heading-container"]}>
        <h1 className={styles["testimonies__heading"]}>Testimonies</h1>
        <h2 className={styles["testimonies__subheading"]}>
          <span>Inspiring testimonies</span> you shouldn&apos;t miss
        </h2>
      </div>
      <div className={styles["testimonies__description-container"]}>
        <p className={styles["testimonies__description"]}>
          Testimonies declare God’s faithfulness and strengthen the church. They
          invite thanksgiving (Psalm 107:1–2; 1 Thessalonians 5:18), build
          faith (Romans 10:17), and witness to those seeking hope (John 9:25;
          Acts 4:20). By sharing how God has healed, provided, or transformed a
          life, we glorify Him and encourage others to trust in His power. Please
          add your story so others may be blessed.
        </p>
        <div className={styles["testimonies__description-button"]}>
          <Button
            label="Add your testimony"
            type="button"
            variant="primary"
            size="mini"
            handleClick={handleAddTestimony}
          />
        </div>
      </div>
      <div className={styles["testimonies__carousel-wrapper"]}>
        {loading ? (
          <div className={styles["testimonies__carousel-loader-wrapper"]}>
            <LoadingItems />
          </div>
        ) : (
          <TestimoniesCarousel
            handleGoToTestimoniesPage={handleRouteToTestimoniesPage}
          >
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
          </TestimoniesCarousel>
        )}
      </div>
      {openModal && (
        <div className={styles["testimonies__modal-wrapper"]} ref={modalRef}>
          <TestimonyModal name={testimonyName} content={testimony} />
        </div>
      )}
      {openAddTestimonyModal && (
        <div className={styles["testimonies__modal-wrapper"]} ref={modalRef}>
          <AddTestimoniesModal />
        </div>
      )}
    </div>
  );
};

export default Testimonies;

const LoadingItems = () => {
  return (
    <>
      {Array.from({ length: 7 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <LoadingCard key={index + 1} />;
        })}
    </>
  );
};
