import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Espace Patient - Connexion',
  description: 'Accédez à votre espace patient sécurisé',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
