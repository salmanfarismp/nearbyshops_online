import { redirect } from "next/navigation";
import WhatsAppDeeplinkHandler from "@/components/whatsapp-deeplink-handler";

interface WhatsAppPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function WhatsAppPage({ searchParams }: WhatsAppPageProps) {
  const data = searchParams.data;

  // Validate data exists
  if (!data || typeof data !== "string") {
    redirect("/");
  }

  return <WhatsAppDeeplinkHandler data={data} />;
}

