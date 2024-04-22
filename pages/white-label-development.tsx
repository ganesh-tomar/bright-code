"use client";
import React from "react";
import Sticky from "../components/stickyNav";
import ContactForm from "../components/contactForm";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Overview from "../components/overview";
import BannerThird from "../components/BannerThird";
import ContentWithImageColTwo from "../components/ContentWithImageColTwo";
import {
  bannerThird,
  overview,
  contentWithImage,
  contentWithImage2,
  contentWithImage3,
  contentWithImage4,
  contactform,
} from "../dataWhiteLabelDevelopment/data";

export const metadata: Metadata = {
  title: "White Label Drupal Development | Bright Code",
  description:
    " Discover Bright Code's White Label Web Development services, providing seamless solutions for agencies seeking reliable and confidential development support. Elevate your brand with our expert-driven, collaborative approach to web development",
  openGraph: {
    images: [
      {
        url: "/agency_agency-1.png",
        alt: "Alt text for your image",
      },
    ],
    siteName: "Bright Code",
  },
};

interface OGImage {
  url: string;
  alt: string;
}

interface OpenGraph {
  images: OGImage[];
  siteName: string;
}

interface Metadata {
  title: string;
  description: string;
  openGraph?: OpenGraph;
}

const stickyData = [
  {
    id: "1",
    title: "White Label Development",
    url: "white-label-development",
  },
  {
    id: "2",
    title: "Dedicated Development Team",
    url: "dedicated-team",
  },
  {
    id: "3",
    title: "CMS Implementation",
    url: "cms-implementation",
  },
  {
    id: "4",
    title: "CMS Maintenance",
    url: "cms-support",
  },
];

const WhiteLabelDevelopment: React.FC = () => {
  const [clickedId, setClickedId] = useState<string | null>(null);

  return (
    <>
      <NextSeo
        title={String(metadata.title)}
        description={String(metadata.description)}
        openGraph={
          metadata.openGraph
            ? {
                title: String(metadata.title),
                description: metadata.description || "", // Make sure it's not undefined
                images: metadata.openGraph.images || [], // Make sure it's not undefined
                siteName: metadata.openGraph.siteName || "", // Make sure it's not undefined
              }
            : undefined
        }
      />

      <BannerThird data={bannerThird} />

      <Sticky
        data={stickyData}
        clickedId={clickedId}
        setClickedId={setClickedId}
      />

      <Overview data={overview} />

      <ContentWithImageColTwo data={contentWithImage} />

      <ContentWithImageColTwo data={contentWithImage2} />

      <ContentWithImageColTwo data={contentWithImage3} />

      <ContentWithImageColTwo data={contentWithImage4} />

      <ContactForm data={contactform} />
    </>
  );
};

export default WhiteLabelDevelopment;
