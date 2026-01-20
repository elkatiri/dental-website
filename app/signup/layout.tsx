import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Créer un compte - Espace Patient',
  description: 'Inscrivez-vous pour accéder à votre espace patient sécurisé.',
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}