"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface WhatsAppDeeplinkHandlerProps {
  data: string;
  immediateRedirect?: boolean;
}

export default function WhatsAppDeeplinkHandler({
  data,
  immediateRedirect = false,
}: WhatsAppDeeplinkHandlerProps) {
  console.log("[WhatsAppDeeplinkHandler] Component mounted");
  console.log(
    "[WhatsAppDeeplinkHandler] Props - data:",
    data ? `${data.substring(0, 50)}...` : "null",
    "length:",
    data?.length
  );
  console.log(
    "[WhatsAppDeeplinkHandler] Props - immediateRedirect:",
    immediateRedirect
  );

  const [isRedirecting, setIsRedirecting] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  const deepLink = `nearbyshops://whatsapp?data=${encodeURIComponent(
    data
  )}&mobileApp=1`;

  console.log("[WhatsAppDeeplinkHandler] Deep link generated:", deepLink);
  console.log("[WhatsAppDeeplinkHandler] Deep link length:", deepLink.length);

  const attemptDeepLink = () => {
    console.log("[WhatsAppDeeplinkHandler] attemptDeepLink called");
    setIsRedirecting(true);
    setShowFallback(false);

    console.log("[WhatsAppDeeplinkHandler] Creating iframe for deep link");
    // Try iframe method first (works better in in-app browsers)
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = deepLink;
    console.log("[WhatsAppDeeplinkHandler] Iframe src set to:", deepLink);
    document.body.appendChild(iframe);
    console.log("[WhatsAppDeeplinkHandler] Iframe appended to body");

    // Also try direct redirect
    console.log(
      "[WhatsAppDeeplinkHandler] Scheduling direct redirect in 100ms"
    );
    setTimeout(() => {
      console.log(
        "[WhatsAppDeeplinkHandler] Executing direct redirect to:",
        deepLink
      );
      console.log(
        "[WhatsAppDeeplinkHandler] Current URL before redirect:",
        window.location.href
      );
      window.location.href = deepLink;
      console.log("[WhatsAppDeeplinkHandler] Direct redirect executed");
    }, 100);

    // Clean up iframe after a short delay
    setTimeout(() => {
      if (iframe.parentNode) {
        console.log("[WhatsAppDeeplinkHandler] Cleaning up iframe");
        iframe.parentNode.removeChild(iframe);
      }
    }, 2000);
  };

  useEffect(() => {
    console.log("[WhatsAppDeeplinkHandler] useEffect triggered");
    console.log(
      "[WhatsAppDeeplinkHandler] useEffect - data:",
      data ? `${data.substring(0, 50)}...` : "null"
    );
    console.log(
      "[WhatsAppDeeplinkHandler] useEffect - immediateRedirect:",
      immediateRedirect
    );
    console.log(
      "[WhatsAppDeeplinkHandler] useEffect - document.hidden:",
      document.hidden
    );
    console.log(
      "[WhatsAppDeeplinkHandler] useEffect - document.readyState:",
      document.readyState
    );
    console.log(
      "[WhatsAppDeeplinkHandler] useEffect - window.location.href:",
      window.location.href
    );

    // Compute deep link inside effect to ensure it's fresh
    const currentDeepLink = `nearbyshops://whatsapp?data=${encodeURIComponent(
      data
    )}&mobileApp=1`;

    console.log(
      "[WhatsAppDeeplinkHandler] useEffect - currentDeepLink:",
      currentDeepLink
    );

    const tryDeepLink = () => {
      console.log("[WhatsAppDeeplinkHandler] tryDeepLink called");
      console.log(
        "[WhatsAppDeeplinkHandler] tryDeepLink - currentDeepLink:",
        currentDeepLink
      );
      console.log(
        "[WhatsAppDeeplinkHandler] tryDeepLink - document.body exists:",
        !!document.body
      );

      // Try iframe method first (works better in in-app browsers)
      if (document.body) {
        console.log("[WhatsAppDeeplinkHandler] tryDeepLink - Creating iframe");
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = currentDeepLink;
        console.log(
          "[WhatsAppDeeplinkHandler] tryDeepLink - Iframe src:",
          currentDeepLink
        );
        document.body.appendChild(iframe);
        console.log("[WhatsAppDeeplinkHandler] tryDeepLink - Iframe appended");

        // Clean up iframe after a short delay
        setTimeout(() => {
          if (iframe.parentNode) {
            console.log(
              "[WhatsAppDeeplinkHandler] tryDeepLink - Cleaning up iframe"
            );
            iframe.parentNode.removeChild(iframe);
          }
        }, 2000);
      } else {
        console.warn(
          "[WhatsAppDeeplinkHandler] tryDeepLink - document.body not available"
        );
      }

      // Also try direct redirect
      console.log(
        "[WhatsAppDeeplinkHandler] tryDeepLink - Scheduling direct redirect in 100ms"
      );
      setTimeout(() => {
        console.log(
          "[WhatsAppDeeplinkHandler] tryDeepLink - Executing direct redirect"
        );
        console.log(
          "[WhatsAppDeeplinkHandler] tryDeepLink - Redirecting to:",
          currentDeepLink
        );
        console.log(
          "[WhatsAppDeeplinkHandler] tryDeepLink - Current URL:",
          window.location.href
        );
        window.location.href = currentDeepLink;
        console.log(
          "[WhatsAppDeeplinkHandler] tryDeepLink - Redirect executed"
        );
      }, 100);
    };

    // If immediateRedirect is true, attempt deep link immediately without delay
    if (immediateRedirect) {
      console.log(
        "[WhatsAppDeeplinkHandler] Immediate redirect mode - calling tryDeepLink"
      );
      tryDeepLink();

      // For immediate redirects, use a shorter timeout
      const timeout = setTimeout(() => {
        console.log(
          "[WhatsAppDeeplinkHandler] Immediate redirect timeout fired"
        );
        console.log(
          "[WhatsAppDeeplinkHandler] document.hidden:",
          document.hidden
        );
        if (!document.hidden) {
          console.log(
            "[WhatsAppDeeplinkHandler] Page still visible, showing fallback"
          );
          setShowFallback(true);
          setIsRedirecting(false);
        } else {
          console.log(
            "[WhatsAppDeeplinkHandler] Page is hidden, app likely opened"
          );
        }
      }, 1500);
      return () => {
        console.log(
          "[WhatsAppDeeplinkHandler] Cleaning up immediate redirect timeout"
        );
        clearTimeout(timeout);
      };
    }

    // Attempt to open the deep link
    console.log(
      "[WhatsAppDeeplinkHandler] Standard redirect mode - calling tryDeepLink"
    );
    tryDeepLink();

    // Set a timeout to detect if the app opened
    // If the page is still visible after 2.5 seconds, the app likely didn't open
    const timeout = setTimeout(() => {
      console.log("[WhatsAppDeeplinkHandler] Standard redirect timeout fired");
      console.log(
        "[WhatsAppDeeplinkHandler] document.hidden:",
        document.hidden
      );
      // Check if page is still visible (app didn't open)
      if (!document.hidden) {
        console.log(
          "[WhatsAppDeeplinkHandler] Page still visible, showing fallback"
        );
        setShowFallback(true);
        setIsRedirecting(false);
      } else {
        console.log(
          "[WhatsAppDeeplinkHandler] Page is hidden, app likely opened"
        );
      }
    }, 2500);

    // Clean up timeout if component unmounts
    return () => {
      console.log("[WhatsAppDeeplinkHandler] Cleaning up timeout");
      clearTimeout(timeout);
    };
  }, [data, immediateRedirect]);

  // Listen for page visibility changes
  useEffect(() => {
    console.log(
      "[WhatsAppDeeplinkHandler] Setting up visibility change listener"
    );

    const handleVisibilityChange = () => {
      console.log("[WhatsAppDeeplinkHandler] Visibility change detected");
      console.log(
        "[WhatsAppDeeplinkHandler] document.hidden:",
        document.hidden
      );
      if (document.hidden) {
        console.log(
          "[WhatsAppDeeplinkHandler] Page became hidden, app likely opened"
        );
        // Page became hidden, app likely opened
        setIsRedirecting(false);
        setShowFallback(false);
      } else {
        console.log("[WhatsAppDeeplinkHandler] Page became visible");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    console.log("[WhatsAppDeeplinkHandler] Visibility change listener added");

    return () => {
      console.log(
        "[WhatsAppDeeplinkHandler] Removing visibility change listener"
      );
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  console.log(
    "[WhatsAppDeeplinkHandler] Render - isRedirecting:",
    isRedirecting
  );
  console.log("[WhatsAppDeeplinkHandler] Render - showFallback:", showFallback);

  if (showFallback) {
    console.log("[WhatsAppDeeplinkHandler] Rendering fallback UI");
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Open in Nearbyshops App</h1>
          <p className="text-muted-foreground mb-6">
            The app didn't open automatically. Tap the button below to try
            again, or install the Nearbyshops app if you haven't already.
          </p>
          <Button onClick={attemptDeepLink} size="lg" className="w-full mb-4">
            Open Nearbyshops App
          </Button>
          <p className="text-sm text-muted-foreground">
            <a href="/" className="underline hover:text-foreground">
              Return to homepage
            </a>
          </p>
        </div>
      </div>
    );
  }

  console.log("[WhatsAppDeeplinkHandler] Rendering loading UI");
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-4">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
        <p className="text-muted-foreground">
          {isRedirecting
            ? "Opening Nearbyshops app..."
            : "Redirecting to app..."}
        </p>
      </div>
    </div>
  );
}
