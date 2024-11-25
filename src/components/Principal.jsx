const CuestionarioTutorias = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <FormularioCuestionario />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default CuestionarioTutorias;
  