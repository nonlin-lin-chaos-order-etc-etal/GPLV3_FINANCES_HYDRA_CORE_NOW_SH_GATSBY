import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>FREE WORLDS IT DEPT :: GPL VERSION 3 :: FINANCES_HYDRA_CORE SERVER*LIBRARY PROJECT :: SMART AI AND NON-AI FINANCIAL CHAT ASSISTANTS AT MULTIPLE NETWORKS :: WE AIM FOR ROCK SOLID OPENSOURCE SOFTWARE CODE TO GATHER POSITIVE FEEDBACKS FROM CORE USER CUSTOMERS AS MUCH AS POSSIBLE IN THESE BEST OF THE WORLDS. PLEASE DO COME GET SOME GREATNESS!</title>
      </Helmet>
      <h1>FREE WORLDS IT DEPT :: GPL VERSION 3 :: FINANCES_HYDRA_CORE SERVER*LIBRARY PROJECT :: SMART AI AND NON-AI FINANCIAL CHAT ASSISTANTS AT MULTIPLE NETWORKS :: WE AIM FOR ROCK SOLID OPENSOURCE SOFTWARE CODE TO GATHER POSITIVE FEEDBACKS FROM CORE USER CUSTOMERS AS MUCH AS POSSIBLE IN THESE BEST OF THE WORLDS. PLEASE DO COME GET SOME GREATNESS!</h1>
      <h2>GPLV3 Source Code for FINANCES_HYDRA_CORE: <A HREF="https://github.com/FREEWORLDSITDEPT/GPLV3_FINANCES_HYDRA_CORE" TARGET="_blank" rel="noreferrer" rel="noopener">https://github.com/FREEWORLDSITDEPT/GPLV3_FINANCES_HYDRA_CORE</A></h2>
      <h2>Project Status: Inception; Initial Development.</h2>
      <h2>Project Inception Start Date, with Nanosecond precision: +2021-05-28 14:07:40 UTC 601187247</h2>
      <h3>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h3>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
