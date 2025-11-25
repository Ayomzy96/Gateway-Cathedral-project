"use client";
import React, { useRef, useState } from "react";

import Icon from "../Icon";
import Button from "../Button";

import { NewsLetterFormScreen } from "@/utils/types";

import styles from "./newsletter.module.scss";

const Newsletter: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] =
    useState<NewsLetterFormScreen>("signUpForm");

  const form = useRef<HTMLFormElement>(null);

  const handleSetScreen = (screen: NewsLetterFormScreen) => {
    setActiveScreen(screen);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // EmailJS removed — simulate newsletter sign-up success for UX
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 700));
      handleSetScreen("signUpSuccess");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const newsLetterScreen: Record<NewsLetterFormScreen, JSX.Element> = {
    signUpForm: (
      <>
        <h3 className={styles["newsletter__form-heading"]}>
          Sign Up For Our Newsletter
        </h3>
        <div className={styles["newsletter__form-input-wrapper"]}>
          <label
            htmlFor="user_email"
            className={styles["newsletter__form-input-label"]}
          >
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className={styles["newsletter__form-input"]}
            required
          />
        </div>
        <div className={styles["newsletter__form-button"]}>
          <Button
            type="submit"
            label="Sign Up"
            size="mini"
            variant="primary"
            loading={loading}
          />
        </div>
      </>
    ),
    signUpSuccess: (
      <div className={styles["newsletter__form--success"]}>
        <h3 className={styles["newsletter__form-heading"]}>
          Newsletter Sign Up Successful
        </h3>
        <div className={styles["newsletter__form-icon--checkmark"]}>
          <Icon icon="checkmark" />
        </div>
        <Button
          type="button"
          variant="primary"
          label="Done"
          size="medium"
          handleClick={() => handleSetScreen("signUpForm")}
        />
      </div>
    ),
  };

  return (
    <div className={styles["newsletter"]}>
      <h1 className={styles["newsletter__heading"]}>Newsletter</h1>
      <div className={styles["newsletter__form-wrapper"]}>
        <div className={styles["newsletter__form-icon"]}>
          <Icon icon="inbox" />
        </div>
        <form
          className={styles["newsletter__form"]}
          onSubmit={handleFormSubmit}
          ref={form}
        >
          {newsLetterScreen[activeScreen]}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
