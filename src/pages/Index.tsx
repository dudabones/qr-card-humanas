import { MessageCircle, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeartIcon from "@/components/HeartIcon";

const Index = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/5587996416504?text=ACHEI%20UM%20CORA%C3%87%C3%83O!";
    
    // Tenta abrir em nova aba primeiro, se não funcionar usa redirect direto
    try {
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="min-h-screen heartbeat-bg">
      <div className="heartbeat-overlay"></div>
      
      {/* Linha horizontal de ECG */}
      <div className="fixed top-1/2 left-0 w-full h-0.5 bg-heart-primary/20 transform -translate-y-1/2 z-0"></div>
      
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl relative z-10">
        {/* Header com animação */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="mb-6">
            <HeartIcon />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heart-primary mb-4 sm:mb-6 leading-tight px-2">
            Você encontrou um dos{" "}
            <span className="bg-gradient-to-r from-heart-primary to-heart-secondary bg-clip-text text-transparent">
              Corações do Cuidado Humana's!
            </span>
          </h1>
          
        </div>

        {/* Card principal com informações */}
        <Card className="mb-8 sm:mb-10 animate-fade-in-up shadow-xl border-0 bg-white/80 backdrop-blur-sm mx-2 sm:mx-0">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-foreground">
              <p>
                O coração é onde guardamos os nossos maiores amores.
                É ele que bate mais forte quando abraçamos quem amamos, quando sorrimos junto da família, quando realizamos sonhos.
              </p>
              
              <p>
                Mas… você sabe como está o seu coração hoje?
              </p>
              
              <p>
                Um simples <strong className="text-heart-primary">eletrocardiograma</strong> — <span className="text-heart-secondary font-semibold">rápido, indolor e seguro</span> — pode revelar muito sobre a sua saúde e até prevenir surpresas que mudam vidas.
              </p>
              
              <p>
                Cuidar do coração é cuidar da sua história, dos seus momentos, das pessoas que você não quer deixar para trás.
              </p>
              
              <p>
                Não espere um susto para valorizar o que mais importa.
                Faça o exame <strong className="text-heart-primary">GRATUITO</strong>. <span className="text-heart-secondary font-semibold">Cuide do seu coração. Cuide do coração de quem você ama.</span>
              </p>
              
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up px-3 sm:px-6">
          <Button
            onClick={handleWhatsAppClick}
            className="whatsapp-button text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl px-3 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg w-full max-w-[calc(100vw-24px)] sm:max-w-md md:max-w-lg lg:max-w-none lg:w-auto mx-auto"
            size="lg"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 flex-shrink-0" />
            <span className="text-center leading-tight text-xs sm:text-sm md:text-base lg:text-lg">Garantir meu ECG Gratuito via WhatsApp</span>
          </Button>
          
          <p className="mt-4 sm:mt-6 text-muted-foreground text-xs sm:text-sm px-2">
            Clique no botão acima e entre em contato conosco pelo WhatsApp
          </p>
        </div>

        {/* Elementos decorativos - ocultos no mobile */}
        <div className="hidden sm:block fixed top-10 left-10 opacity-20">
          <Heart className="w-12 h-12 lg:w-16 lg:h-16 text-heart-primary animate-heartbeat-pulse" fill="currentColor" />
        </div>
        <div className="hidden sm:block fixed bottom-10 right-10 opacity-20">
          <Activity className="w-8 h-8 lg:w-12 lg:h-12 text-heart-secondary animate-pulse" />
        </div>
        <div className="hidden md:block fixed top-1/2 left-5 opacity-15">
          <Activity className="w-6 h-6 lg:w-8 lg:h-8 text-heart-primary animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Index;
