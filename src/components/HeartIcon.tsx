const HeartIcon = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <img 
          src="/lovable-uploads/b5ef45ee-0391-49b4-9e42-fdee0bdb7ef9.png"
          alt="Coração do Cuidado Humana's"
          className="w-32 h-32 animate-heartbeat-pulse drop-shadow-lg"
        />
        <div className="absolute inset-0 w-32 h-32 opacity-30">
          <img 
            src="/lovable-uploads/b5ef45ee-0391-49b4-9e42-fdee0bdb7ef9.png"
            alt="Coração do Cuidado Humana's"
            className="w-32 h-32 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default HeartIcon;