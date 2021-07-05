import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src={"/img/main.svg"}
          alt={"mainImg"}
          width={"500"}
          className={("mainLogoImg", styles.mainLogoImg)}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/OAuth2.0"
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="http://dauth.b1nd.com"
          >
            DAuth 사용해보기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="대구 소프트웨어 고등학교 DAuth 공식 문서"
    >
      <HomepageHeader />
    </Layout>
  );
}
