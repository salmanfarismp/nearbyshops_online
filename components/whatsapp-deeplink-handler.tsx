"use client";

import { useEffect, useState } from "react";

interface WhatsAppDeeplinkHandlerProps {
  data: string;
}

export default function WhatsAppDeeplinkHandler({
  data,
}: WhatsAppDeeplinkHandlerProps) {
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const deepLink = `nearbyshops://auth/whatsapp-login?token=${encodeURIComponent(
      data
    )}`;

    // Attempt to open the deep link
    window.location.href = deepLink;

    // Set a timeout to detect if the app opened
    // If the page is still visible after 2.5 seconds, the app likely didn't open
    const timeout = setTimeout(() => {
      // Check if page is still visible (app didn't open)
      if (!document.hidden) {
        // Redirect to home page as fallback
        window.location.href = "/";
      }
    }, 2500);

    // Clean up timeout if component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

  // Listen for page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page became hidden, app likely opened
        setIsRedirecting(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
