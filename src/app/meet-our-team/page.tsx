"use client";
import React from "react";
import Link from "next/link";
import styles from "./meet-our-team.module.scss";
import { teamCategories } from "@/utils/team";

const MeetOurTeamPage: React.FC = () => {
  return (
    <div className={styles["team"]}>
      <h1 className={styles["team__heading"]}>Meet Our Team</h1>
      <p className={styles["team__intro"]}>
        Below are the ministry groups that serve at Gateway Cathedral. Click
        any group to see job descriptions, members and photo album.
      </p>

      <ul className={styles["team__list"]}>
        {teamCategories.map((cat) => (
          <li className={styles["team__list-item"]} key={cat.id}>
            <h2 className={styles["team__list-title"]}>{cat.title}</h2>
            <p className={styles["team__list-desc"]}>{cat.description}</p>
            <Link href={`/meet-our-team/${cat.id}`} className={styles["team__link"]}>
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetOurTeamPage;
