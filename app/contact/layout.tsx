import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SmileCare - Prenez rendez-vous à Agadir",
  description: "Contactez SmileCare pour prendre rendez-vous ou poser vos questions. Nous sommes à votre écoute pour vous offrir les meilleurs soins dentaires à Agadir.",
  keywords: ["contact dentiste", "prendre rendez-vous", "urgence dentaire", "cabinet dentaire Agadir"],
  openGraph: {
    title: "Contactez SmileCare | Cabinet Dentaire",
    description: "Prenez rendez-vous en ligne ou appelez-nous",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
