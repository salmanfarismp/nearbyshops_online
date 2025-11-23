import { redirect } from "next/navigation";
import Script from "next/script";
import WhatsAppDeeplinkHandler from "@/components/whatsapp-deeplink-handler";

interface WhatsAppPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
}

// Force dynamic rendering to ensure runtime logs
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function WhatsAppPage({ searchParams }: WhatsAppPageProps) {
  // Handle both Promise and direct object cases (Next.js 15+ uses Promise)
  const resolvedSearchParams = searchParams instanceof Promise 
    ? await searchParams 
    : searchParams;

  // DEBUG: Log all search params
  console.log("[WhatsAppPage] All searchParams:", JSON.stringify(resolvedSearchParams, null, 2));
  console.log("[WhatsAppPage] searchParams.data:", resolvedSearchParams.data);
  console.log("[WhatsAppPage] searchParams.data type:", typeof resolvedSearchParams.data);
  console.log("[WhatsAppPage] searchParams.data isArray:", Array.isArray(resolvedSearchParams.data));
  console.log("[WhatsAppPage] searchParams.mobileApp:", resolvedSearchParams.mobileApp);
  console.log("[WhatsAppPage] searchParams.mobileApp type:", typeof resolvedSearchParams.mobileApp);

  // Handle both string and array cases for data
  const dataParam = resolvedSearchParams.data;
  const data = Array.isArray(dataParam) ? dataParam[0] : dataParam;
  
  console.log("[WhatsAppPage] Processed data:", data);
  console.log("[WhatsAppPage] Processed data type:", typeof data);
  console.log("[WhatsAppPage] Processed data length:", data ? data.length : "null/undefined");

  const mobileApp = resolvedSearchParams.mobileApp;
  console.log("[WhatsAppPage] mobileApp param:", mobileApp);

  // If searchParams is empty, let client component handle it from URL
  if (!data || typeof data !== "string") {
    console.warn("[WhatsAppPage] WARNING: searchParams empty or invalid, passing to client component to read from URL");
    return (
      <WhatsAppDeeplinkHandler 
        data="" 
        immediateRedirect={true}
        searchParams={JSON.stringify(resolvedSearchParams)}
        readFromUrl={true}
      />
    );
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
                console.log('[Script] Timestamp:', new Date().toISOString());
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
        <WhatsAppDeeplinkHandler 
          data={data} 
          immediateRedirect={true}
          searchParams={JSON.stringify(resolvedSearchParams)}
        />
      </>
    );
  }

  console.log("[WhatsAppPage] Not a mobile app request, using standard handler");
  return (
    <WhatsAppDeeplinkHandler 
      data={data} 
      immediateRedirect={false}
      searchParams={JSON.stringify(resolvedSearchParams)}
    />
  );
}

