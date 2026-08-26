export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://danirudesilva.com/#person",
        name: "Daniru De Silva",
        jobTitle: "Full-Stack Software Engineer",
        url: "https://danirudesilva.com",
        sameAs: [
          "https://github.com/DaniruDesilva",
          "https://linkedin.com/in/daniru-de-silva-31977b2aa/",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Delight Consumer Products (Pvt) Ltd",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Moratuwa",
          department: "Faculty of Information Technology",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Galle",
          addressCountry: "Sri Lanka",
        },
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Cloud-Native ERP Systems",
          "Full-Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://danirudesilva.com/#website",
        url: "https://danirudesilva.com",
        name: "Daniru De Silva Portfolio",
        publisher: {
          "@id": "https://danirudesilva.com/#person",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Zynveo ERP",
        operatingSystem: "Web-based",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        creator: {
          "@id": "https://danirudesilva.com/#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
