import { redirect } from "next/navigation";
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
    // Use immediate client-side redirect component
    return <WhatsAppDeeplinkHandler data={data} immediateRedirect={true} />;
  }

  return <WhatsAppDeeplinkHandler data={data} immediateRedirect={false} />;
}

