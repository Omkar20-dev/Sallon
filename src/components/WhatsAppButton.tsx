import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual number
    const message = encodeURIComponent("Hi! I'd like to book an appointment at Bella Luxe Beauty Parlor.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-elegant hover:shadow-soft hover:scale-110 transition-all duration-300 animate-scale-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
