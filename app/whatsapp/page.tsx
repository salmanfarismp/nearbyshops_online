import { redirect } from "next/navigation";
import Script from "next/script";
import WhatsAppDeeplinkHandler from "@/components/whatsapp-deeplink-handler";

interface WhatsAppPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function WhatsAppPage({ searchParams }: WhatsAppPageProps) {
  const data = searchParams.data;
  const mobileApp = searchParams.mobileApp;

  // Validate data exists
  if (!data || typeof data !== "string") {
    redirect("/");
  }

  // If mobileApp=1, immediately redirect to mobile app
  const isMobileApp = mobileApp === "1" || (Array.isArray(mobileApp) && mobileApp[0] === "1");

  if (isMobileApp) {
    const deepLink = `nearbyshops://whatsapp?data=${encodeURIComponent(data)}&mobileApp=1`;
    
    return (
      <>
        <Script
          id="immediate-mobile-redirect"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var deepLink = ${JSON.stringify(deepLink)};
                  
                  // Try direct redirect immediately
                  window.location.href = deepLink;
                  
                  // Also try iframe method when body is available (works better in in-app browsers)
                  function tryIframe() {
                    if (document.body) {
                      var iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = deepLink;
                      document.body.appendChild(iframe);
                      
                      // Clean up iframe
                      setTimeout(function() {
                        if (iframe.parentNode) {
                          iframe.parentNode.removeChild(iframe);
                        }
                      }, 2000);
                    } else {
                      setTimeout(tryIframe, 10);
                    }
                  }
                  tryIframe();
                } catch(e) {
                  console.error('Deep link error:', e);
                }
              })();
            `,
          }}
        />
        <WhatsAppDeeplinkHandler data={data} immediateRedirect={true} />
      </>
    );
  }

  return <WhatsAppDeeplinkHandler data={data} immediateRedirect={false} />;
}

