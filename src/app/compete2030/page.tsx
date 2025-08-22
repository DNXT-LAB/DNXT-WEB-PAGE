import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Compete2030() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom">
          {/* Imagen principal */}
          <div className="flex justify-center mb-12">
            <Image 
              src="/images/compete.png" 
              alt="COMPETE 2030 - European Union Initiative" 
              width={1000} 
              height={200}
              className="max-w-full h-auto"
            />
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight font-poppins text-center mb-8 text-gold">
            Inovação & Desenvolvimento
          </h2>

          {/* Subtítulo */}
          <h4 className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-center text-white">
            O Nosso Projeto
          </h4>

          {/* Información del proyecto */}
          <div className="max-w-4xl mx-auto space-y-4 text-gray-300 font-poppins">
            <p><strong>Designação do projeto:</strong> DNXT RWA MARKETPLACE - Negociação de Diamantes com Tecnologia Blockchain</p>
            
            <p><strong>Objetivo do projeto:</strong> O projeto Diamond NXT pretende revolucionar o mercado dos diamantes com uma plataforma digital inovadora que usa tecnologias como blockchain, NFT e sistemas de verificação para garantir a autenticidade, rastreabilidade e ética de cada diamante. Esta solução promove transparência, confiança e inclusão, reduzindo intermediários e custos, tornando o investimento acessível a todos e fomentando práticas mais sustentáveis e responsáveis no setor diamantífero.</p>
            
            <p><strong>Entidade beneficiária:</strong> Diamond NXT Trading, Lda.</p>
            
            <p><strong>Código da operação:</strong> COMPETE2030-FEDER-01452600</p>

            <div className="flex items-center gap-2">
                <p><strong>DNXT COMPETE 2030:</strong></p>
                <a
                href="/Ficha_de_OperacaoA4_COMPETE-2030.pdf"
                download
                className="text-blue-500 underline mb-9"
                aria-label="Descargar PDF Dnxt compete 2030"
                >
                Ficha_de_OperacaoA4_COMPETE-2030
                </a>
            </div>
          </div>

          {/* Detalles financieros */}
          <div className="max-w-4xl mx-auto mt-12">
            <h4 className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-center text-gold">
              Detalhes Financeiros
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300 font-poppins">
                <p><strong>Custo Total:</strong> 834 541,43 €</p>
                <p><strong>Custo Elegível:</strong> 834 541,43 €</p>
              </div>
              <div className="space-y-4 text-gray-300 font-poppins">
                <p><strong>Apoio Financeiro da UE:</strong> 634 470,90 €</p>
                <p><strong>Cofinanciamento da UE:</strong> 76%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 