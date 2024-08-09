import React, { useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { ContextProvider } from "@/context/Context";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);
  return (
    <>
      <ContextProvider>
        <Head>
          <link
            rel="preload"
            href="//cdn-images.mailchimp.com/emhfhgfhbedcode/classic-071822.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"

          />
          <noscript>
            <link
              rel="stylesheet"
              href="//cdn-images.mailchimp.com/emhfhgfhbedcode/classic-071822.css"
            />
          </noscript>
        </Head>
        <Header />
        {children}
        <Footer />
      </ContextProvider>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
