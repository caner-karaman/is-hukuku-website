import React from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { WEBSITE_URL } from "@/lib/constants";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${WEBSITE_URL}/#person`,
    "name": "Gayenur Karaman",
    "url": WEBSITE_URL,
    "telephone": "+905436433346",
    "email": "gayenurbaycan@gmail.com",
    "jobTitle": "Avukat",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "İstanbul Medipol Üniversitesi Hukuk Fakültesi",
      "url": "https://www.medipol.edu.tr/"
    },
    "knowsAbout": [
      "İş Hukuku",
      "Tazminat Hukuku"
    ],
    "description": "Avukat Gayenur Karaman, İstanbul Medipol Üniversitesi Hukuk Fakültesi mezunu olup, İstanbul 1 No'lu Barosu'na 66828 sicil numarası ile bağlı olarak İş Hukuku ve Tazminat Hukuku alanlarında uzman avukatlık ve hukuki danışmanlık hizmeti sunmaktadır.",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Avukatlık Ruhsatnamesi",
      "recognizedBy": {
        "@type": "Organization",
        "name": "İstanbul 1 No'lu Barosu",
        "sameAs": "https://www.istanbulbarosu.org.tr/"
      },
      "credentialId": "66828"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomeTemplate />
    </>
  );
}

