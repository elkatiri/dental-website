import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "+212651625941"; // Remplacez par votre numéro (format international sans le +)
  const message = "Bonjour, je souhaite prendre rendez-vous au cabinet dentaire.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
      aria-label="Contactez-nous sur WhatsApp"
    >
      {/* Label de texte qui apparaît au survol (Desktop) */}
      <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:px-4 group-hover:py-2 bg-white text-slate-800 text-sm font-bold rounded-full shadow-xl border border-slate-100 transition-all duration-500 ease-in-out whitespace-nowrap">
        Besoin d'aide ? Discutons
      </span>

      {/* Bouton Rond */}
      <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 hover:rotate-12 transition-all duration-300 relative">
        <MessageCircle size={30} fill="currentColor" />
        
        {/* Effet de pulsation (Ping) pour attirer l'attention */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </div>
    </a>
  );
};

export default WhatsAppButton;