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
  const [isRedirecting, setIsRedirecting] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  const deepLink = `nearbyshops://whatsapp?data=${encodeURIComponent(
    data
  )}&mobileApp=1`;

  const attemptDeepLink = () => {
    setIsRedirecting(true);
    setShowFallback(false);

    // Try iframe method first (works better in in-app browsers)
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = deepLink;
    document.body.appendChild(iframe);

    // Also try direct redirect
    setTimeout(() => {
      window.location.href = deepLink;
    }, 100);

    // Clean up iframe after a short delay
    setTimeout(() => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 2000);
  };

  useEffect(() => {
    // Compute deep link inside effect to ensure it's fresh
    const currentDeepLink = `nearbyshops://whatsapp?data=${encodeURIComponent(
      data
    )}&mobileApp=1`;

    const tryDeepLink = () => {
      // Try iframe method first (works better in in-app browsers)
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = currentDeepLink;
      document.body.appendChild(iframe);

      // Also try direct redirect
      setTimeout(() => {
        window.location.href = currentDeepLink;
      }, 100);

      // Clean up iframe after a short delay
      setTimeout(() => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      }, 2000);
    };

    // If immediateRedirect is true, attempt deep link immediately without delay
    if (immediateRedirect) {
      tryDeepLink();

      // For immediate redirects, use a shorter timeout
      const timeout = setTimeout(() => {
        if (!document.hidden) {
          setShowFallback(true);
          setIsRedirecting(false);
        }
      }, 1500);
      return () => clearTimeout(timeout);
    }

    // Attempt to open the deep link
    tryDeepLink();

    // Set a timeout to detect if the app opened
    // If the page is still visible after 2.5 seconds, the app likely didn't open
    const timeout = setTimeout(() => {
      // Check if page is still visible (app didn't open)
      if (!document.hidden) {
        setShowFallback(true);
        setIsRedirecting(false);
      }
    }, 2500);

    // Clean up timeout if component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [data, immediateRedirect]);

  // Listen for page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page became hidden, app likely opened
        setIsRedirecting(false);
        setShowFallback(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (showFallback) {
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
