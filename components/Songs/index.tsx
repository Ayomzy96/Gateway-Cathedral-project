"use client";
import React, { useState, useEffect } from "react";

import Carousel from "../Carousel";
import MusicCard from "./MusicCard";
import Icon from "../Icon";
// Button removed because /musics page (archive) has been removed
import LoadingCard from "../LoadingCard";

import { musics } from "@/utils/constants";

import styles from "./songs.module.scss";

// interface SongsProps {
//   musics: Array<{
//     name: string;
//     img: string;
//     authorName: string;
//     musicLength: string;
//     src: string;
//   }>;
// }

const Songs: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  // navigation to /musics removed

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  const [responsive] = useState({
    0: { items: 2 },
    1400: { items: 4 },
  });

  return (
    <section className={styles["songs"]}>
      <div className={styles["songs__heading-wrapper"]}>
        <h1 className={styles["songs__heading"]}>Gospel Songs</h1>
        <h1 className={styles["songs__heading-mobile"]}> Songs</h1>
        <h2 className={styles["songs__subheading"]}>
          Songs to strengthen <span>God&apos;s Presence</span>
        </h2>
      </div>
      <div className={styles["songs__content-wrapper"]}>
        {loading ? (
          <div className={styles["songs__song-loader-wrapper"]}>
            <LoadingItems />
          </div>
        ) : (
          <div className={styles["songs__song-carousel-wrapper"]}>
            <Carousel responsive={responsive}>
              {musics?.map((music, index) => {
                return (
                  <div className={styles["songs__song"]} key={index + 1}>
                    <MusicCard
                      src={music?.src}
                      name={music?.name}
                      authorName={music?.authorName}
                      duration={music?.musicLength}
                      img={music?.img}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
        <div className={styles["songs__wave-icon"]}>
          <Icon icon="wave" />
        </div>
      </div>
      {/* View More removed (archive/musics removed) */}
    </section>
  );
};

export default Songs;

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
