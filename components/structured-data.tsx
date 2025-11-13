export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nearbyshops",
    description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field.",
    url: "https://nearbyshops.online",
    logo: "https://nearbyshops.online/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "help@nearbyshops.online",
      contactType: "Customer Service",
    },
    sameAs: [
      // Add social media links when available
      // "https://twitter.com/nearbyshops",
      // "https://facebook.com/nearbyshops",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nearbyshops",
    url: "https://nearbyshops.online",
    description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nearbyshops.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nearbyshops",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "iOS, Android",
    description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}

