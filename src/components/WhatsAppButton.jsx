import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "917801801157";

  const message = encodeURIComponent(
    "Hello! I want to inquire about loan options. Please guide me."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        rounded-full
        bg-[#25D366] hover:bg-[#128C7E]
        px-4 py-3
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
      "
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
