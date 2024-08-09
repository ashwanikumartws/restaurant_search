import Head from 'next/head';
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Custom.css";
import MainLayout from "@/layout/MainLayout";

// export function reportWebVitals(metric) {
// }

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking qrCode".split(" "), 0);
              function callback (err, data) {
                console.log("hii", data)
                if(data.data_parsed.ref_id) {
                  document.cookie = "branch_io_ref_id=" + data.data_parsed.ref_id + "; path=/; domain=.example.com";
                  console.log("branch_io_data", err, data);
                }
              }
              branch.init('key_live_lyfdhyMPXRE8D9jDkbMNrickurcK2zfR', callback);
            `,
          }}

        />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
