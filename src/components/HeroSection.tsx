import heroImage from "@/assets/hero-pao-de-queijo.jpg";
import { Award, MapPin, Wheat } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background com imagem */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pão de Queijo Mineiro artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/90 via-brown-dark/70 to-brown-dark/50" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-cheese-light text-sm font-body font-semibold mb-4 animate-fade-in">
            Tradição Mineira desde sempre
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Pão de Queijo{" "}
            <span className="text-primary">Mineiro</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream/90 font-body mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            O sabor autêntico de Minas Gerais direto para sua mesa. 
            Feito com amor, tradição e o melhor queijo da região.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold font-body shadow-elevated hover:bg-cheese-gold transition-all duration-300"
            >
              Ver Produtos
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-cream/30 text-cream font-semibold font-body hover:bg-cream/10 transition-all duration-300"
            >
              Nossa História
            </a>
          </div>
        </div>
      </div>

      {/* Destaque Queijo Canastra */}
      <div className="relative z-10 bg-minas-green">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-accent-foreground">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-cheese-gold" />
              <div>
                <p className="font-display font-bold text-lg">Queijo Canastra Legítimo</p>
                <p className="text-sm text-cream/80 font-body">Ingrediente principal de todos os nossos produtos</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-cream/30" />
            
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-cheese-gold" />
              <span className="font-body">Direto de Minas Gerais</span>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-cream/30" />
            
            <div className="flex items-center gap-3">
              <Wheat className="h-6 w-6 text-cheese-gold" />
              <span className="font-body">Produção Artesanal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
