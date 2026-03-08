"use client";
import React, { useState } from "react";

import Button from "@/components/Button";
import MusicCard from "./MusicCard";
import Contact from "@/components/Contact";

import { musics } from "@/utils/constants";

import styles from "./musics.module.scss";

import { redirect } from "next/navigation";

export default function MusicsPage() {
  // Musics page removed — redirect to homepage
  redirect("/");
}
