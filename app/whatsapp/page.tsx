import { redirect } from "next/navigation";
import Script from "next/script";
import WhatsAppDeeplinkHandler from "@/components/whatsapp-deeplink-handler";

interface WhatsAppPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function WhatsAppPage({ searchParams }: WhatsAppPageProps) {
  // DEBUG: Log all search params
  console.log("[WhatsAppPage] All searchParams:", JSON.stringify(searchParams, null, 2));
  console.log("[WhatsAppPage] searchParams.data:", searchParams.data);
  console.log("[WhatsAppPage] searchParams.data type:", typeof searchParams.data);
  console.log("[WhatsAppPage] searchParams.data isArray:", Array.isArray(searchParams.data));
  console.log("[WhatsAppPage] searchParams.mobileApp:", searchParams.mobileApp);
  console.log("[WhatsAppPage] searchParams.mobileApp type:", typeof searchParams.mobileApp);

  // Handle both string and array cases for data
  const dataParam = searchParams.data;
  const data = Array.isArray(dataParam) ? dataParam[0] : dataParam;
  
  console.log("[WhatsAppPage] Processed data:", data);
  console.log("[WhatsAppPage] Processed data type:", typeof data);
  console.log("[WhatsAppPage] Processed data length:", data ? data.length : "null/undefined");

  const mobileApp = searchParams.mobileApp;
  console.log("[WhatsAppPage] mobileApp param:", mobileApp);

  // Validate data exists - be more lenient
  if (!data) {
    console.error("[WhatsAppPage] ERROR: data is missing or falsy, redirecting to home");
    console.error("[WhatsAppPage] data value:", data);
    console.error("[WhatsAppPage] dataParam value:", dataParam);
    redirect("/");
  }

  if (typeof data !== "string") {
    console.error("[WhatsAppPage] ERROR: data is not a string, redirecting to home");
    console.error("[WhatsAppPage] data type:", typeof data);
    console.error("[WhatsAppPage] data value:", data);
    redirect("/");
  }

  console.log("[WhatsAppPage] ✓ Data validation passed");

  // If mobileApp=1, immediately redirect to mobile app
  const isMobileApp = mobileApp === "1" || (Array.isArray(mobileApp) && mobileApp[0] === "1");
  console.log("[WhatsAppPage] isMobileApp:", isMobileApp);

  if (isMobileApp) {
    const deepLink = `nearbyshops://whatsapp?data=${encodeURIComponent(data)}&mobileApp=1`;
    console.log("[WhatsAppPage] Deep link generated:", deepLink);
    console.log("[WhatsAppPage] Deep link length:", deepLink.length);
    
    return (
      <>
        <Script
          id="immediate-mobile-redirect"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                console.log('[Script] Immediate mobile redirect script executing');
                try {
                  var deepLink = ${JSON.stringify(deepLink)};
                  console.log('[Script] Deep link:', deepLink);
                  console.log('[Script] Current URL:', window.location.href);
                  console.log('[Script] Document ready state:', document.readyState);
                  console.log('[Script] Document body exists:', !!document.body);
                  
                  // Try direct redirect immediately
                  console.log('[Script] Attempting direct redirect to:', deepLink);
                  window.location.href = deepLink;
                  console.log('[Script] Direct redirect attempted');
                  
                  // Also try iframe method when body is available (works better in in-app browsers)
                  var iframeAttempts = 0;
                  function tryIframe() {
                    iframeAttempts++;
                    console.log('[Script] tryIframe attempt:', iframeAttempts);
                    if (document.body) {
                      console.log('[Script] Document body available, creating iframe');
                      var iframe = document.createElement('iframe');
                      iframe.style.display = 'none';
                      iframe.src = deepLink;
                      console.log('[Script] Iframe src set to:', deepLink);
                      document.body.appendChild(iframe);
                      console.log('[Script] Iframe appended to body');
                      
                      // Clean up iframe
                      setTimeout(function() {
                        if (iframe.parentNode) {
                          iframe.parentNode.removeChild(iframe);
                          console.log('[Script] Iframe cleaned up');
                        }
                      }, 2000);
                    } else {
                      console.log('[Script] Document body not available yet, retrying in 10ms');
                      if (iframeAttempts < 100) {
                        setTimeout(tryIframe, 10);
                      } else {
                        console.error('[Script] Max iframe attempts reached');
                      }
                    }
                  }
                  tryIframe();
                } catch(e) {
                  console.error('[Script] Deep link error:', e);
                  console.error('[Script] Error stack:', e.stack);
                }
              })();
            `,
          }}
        />
        <WhatsAppDeeplinkHandler data={data} immediateRedirect={true} />
      </>
    );
  }

  console.log("[WhatsAppPage] Not a mobile app request, using standard handler");
  return <WhatsAppDeeplinkHandler data={data} immediateRedirect={false} />;
}

