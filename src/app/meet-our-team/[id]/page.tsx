"use client";
import React from "react";
import { useParams } from "next/navigation";
import styles from "./team-detail.module.scss";
import { teamCategories } from "@/utils/team";

const TeamDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id || "";
  const category = teamCategories.find((c) => c.id === id);

  if (!category) {
    return <div className={styles["detail"]}>Group not found.</div>;
  }

  return (
    <div className={styles["detail"]}>
      <h1 className={styles["detail__heading"]}>{category.title}</h1>
      <p className={styles["detail__desc"]}>{category.description}</p>

      <section className={styles["detail__members"]}>
        <h2>Members & Roles</h2>
        <ul>
          {category.members.map((m, idx) => (
            <li key={idx} className={styles["detail__member"]}>
              <div className={styles["detail__member-photo"]}>
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={m.name} />
                ) : (
                  <div className={styles["detail__member-placeholder"]}>{m.name.charAt(0)}</div>
                )}
              </div>
              <div>
                <p className={styles["detail__member-name"]}>{m.name}</p>
                <p className={styles["detail__member-role"]}>{m.role}</p>
                {m.bio ? <p className={styles["detail__member-bio"]}>{m.bio}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles["detail__gallery"]}>
        <h2>Photo Album</h2>
        <div className={styles["detail__gallery-grid"]}>
          {(category.gallery && category.gallery.length > 0) ? (
            category.gallery.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt={`${category.title} ${i + 1}`} />
            ))
          ) : (
            <p>No photos yet. You can add URLs in utils/team.ts gallery array.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeamDetail;
