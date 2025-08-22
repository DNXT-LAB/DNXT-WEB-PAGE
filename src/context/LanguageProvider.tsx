"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LanguageCode = "pt" | "en" | "es";

type Translations = Record<string, Record<LanguageCode, string>>;

type LanguageContextType = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "dnxt_lang";

const translations: Translations = {
  // Header / Nav
  "nav.home": { en: "Home", es: "Inicio", pt: "Início" },
  "nav.about": { en: "About", es: "Nosotros", pt: "Sobre" },
  "nav.process": { en: "Manufacturing Process", es: "Proceso de Fabricación", pt: "Processo de Fabrico" },
  "nav.platform": { en: "DNXT PLATFORM", es: "PLATAFORMA DNXT", pt: "PLATAFORMA DNXT" },
  "nav.services": { en: "Services", es: "Servicios", pt: "Serviços" },
  "nav.compete": { en: "COMPETE 2030", es: "COMPETE 2030", pt: "COMPETE 2030" },
  "nav.contact": { en: "Contact", es: "Contacto", pt: "Contato" },
  "nav.ourTech": { en: "Our Technology", es: "Nuestra Tecnología", pt: "Nossa Tecnologia" },
  "nav.contactUs": { en: "Contact Us", es: "Contáctanos", pt: "Contacte-nos" },

  // Hero
  "hero.title.part1": { en: "Shaping the", es: "Dando forma al", pt: "Moldando o" },
  "hero.title.highlight": { en: "Future", es: "Futuro", pt: "Futuro" },
  "hero.title.part2": { en: "of", es: "del", pt: "do" },
  "hero.title.part3": { en: "Diamonds", es: "Diamante", pt: "Diamante" },
  "hero.description": {
    en: "DNXT is revolutionizing the diamond industry through fully automated polishing, RWA tokenization, and blockchain integration.",
    es: "DNXT está revolucionando la industria del diamante mediante pulido totalmente automatizado, tokenización de RWA e integración con blockchain.",
    pt: "A DNXT está a revolucionar a indústria do diamante com polimento totalmente automatizado, tokenização de RWA e integração com blockchain."
  },

  // About
  "about.title": { en: "About", es: "Sobre", pt: "Sobre" },
  "about.subtitle": {
    en: "Merging cutting-edge manufacturing technology with blockchain integration for the future of diamonds",
    es: "Combinando tecnología de fabricación de vanguarda con integración blockchain para el futuro de los diamantes",
    pt: "Combinando tecnologia de fabrico de ponta com integração blockchain para o futuro dos diamantes"
  },
  "about.mission": { en: "Mission", es: "Misión", pt: "Missão" },
  "about.mission.text": {
    en: "To revolutionize the diamond industry by building a secure, transparent, and decentralized digital platform that enables the tokenization of real-world diamonds through blockchain, CVC, and ZeroID technologies. Our mission is to democratize access to diamond investment by ensuring traceability, authenticity, and ethical sourcing across the entire value chain.",
    es: "Revolucionar la industria del diamante creando una plataforma digital segura, transparente y descentralizada que permita la tokenización de diamantes reales mediante blockchain, CVC y ZeroID. Nuestra misión es democratizar el acceso a la inversión en diamantes garantizando trazabilidad, autenticidad y un origen ético en toda la cadena de valor.",
    pt: "Revolucionar a indústria do diamante através de uma plataforma digital segura, transparente e descentralizada que permita a tokenização de diamantes reais com blockchain, CVC e ZeroID. A nossa missão é democratizar o acesso ao investimento em diamantes garantindo rastreabilidade, autenticidade e origem ética em toda a cadeia de valor."
  },
  "about.vision": { en: "Vision", es: "Visión", pt: "Visão" },
  "about.vision.text": {
    en: "To become the global leader in real-world asset (RWA) tokenization, setting a new technological standard in the diamond sector. We aim to reshape how diamonds are valued, traded, and owned by delivering a future-proof, inclusive, and sustainable marketplace that bridges the physical and digital worlds.",
    es: "Ser el líder global en tokenización de activos del mundo real (RWA), estableciendo un nuevo estándar tecnológico en el sector del diamante. Queremos redefinir cómo se valoran, negocian y poseen los diamantes, ofreciendo un mercado sostenible, inclusivo y preparado para el futuro que conecte los mundos físico y digital.",
    pt: "Tornar-nos líderes globais na tokenização de ativos do mundo real (RWA), definindo um novo padrão tecnológico no setor do diamante. Pretendemos redefinir como os diamantes são valorizados, negociados e detidos, oferecendo um mercado sustentável, inclusivo e preparado para o futuro que ligue os mundos físico e digital."
  },

  // How It Works
  "how.title": { en: "Manufacturing Process", es: "Proceso de Fabricación", pt: "Processo de Fabrico" },
  "how.subtitle": {
    en: "DNXT integrates precision engineering with IA to deliver diamonds of exceptional quality and verifiable authenticity.",
    es: "DNXT integra ingeniería de precisión con IA para ofrecer diamantes de calidad excepcional y autenticidad verificable.",
    pt: "A DNXT integra engenharia de precisão com IA para oferecer diamantes de qualidade excecional e autenticidade verificável."
  },
  "how.step1.title": {
    en: "Scanning, Planning, and Mapping with AI Tech",
    es: "Escaneo, Planificación y Mapeo con Tecnología IA",
    pt: "Digitalização, Planeamento e Mapeamento com Tecnologia IA"
  },
  "how.step1.desc": {
    en: "High-resolution 3D scanning systems, powered by AI and computer vision, analyze the rough diamond to determine the optimal cut strategy. This maximizes yield, clarity, and value, minimizing human error and material loss.",
    es: "Sistemas de escaneo 3D de alta resolución, impulsados por IA y visión por computador, analizan el diamante en bruto para determinar la estrategia de corte óptima. Esto maximiza el rendimiento, la claridad y el valor, minimizando el error humano y la pérdida de material.",
    pt: "Sistemas de digitalização 3D de alta resolução, impulsionados por IA e visão computacional, analisam o diamante em bruto para determinar a estratégia ideal de corte. Isto maximiza o rendimento, a clareza e o valor, minimizando o erro humano e a perda de material."
  },
  "how.step1.b1": { en: "AI algorithms simulate thousands of cutting plans in milliseconds", es: "Algoritmos de IA simulan miles de planes de corte en milisegundos", pt: "Algoritmos de IA simulam milhares de planos de corte em milissegundos" },
  "how.step1.b2": { en: "Deep imaging identifies inclusions, strain lines, and growth patterns", es: "Imagen profunda identifica inclusiones, líneas de tensión y patrones de crecimiento", pt: "Imagem profunda identifica inclusões, linhas de tensão e padrões de crescimento" },
  "how.step1.b3": { en: "Optimization engines prioritize value extraction (carat, cut, clarity)", es: "Motores de optimización priorizan la extracción de valor (quilate, corte, claridad)", pt: "Motores de otimização priorizam a extração de valor (quilate, corte, clareza)" },

  "how.step2.title": { en: "Laser Sawing and Cutting", es: "Serrado y Corte Láser", pt: "Serração e Corte a Laser" },
  "how.step2.desc": {
    en: "Industrial-grade lasers are used to make precise cuts based on the AI-generated mapping. This stage ensures structural integrity and maximizes potential for ideal light performance in the final product.",
    es: "Lásers de grado industrial realizan cortes precisos basados en el mapeo generado por IA. Esta fase garantiza la integridad estructural y maximiza el rendimiento lumínico del producto final.",
    pt: "Lasers de grau industrial realizam cortes precisos com base no mapeamento gerado pela IA. Esta fase garante a integridade estrutural e maximiza o desempenho de luz no produto final."
  },
  "how.step2.b1": { en: "Laser cutting minimizes mechanical stress and breakage", es: "El corte láser minimiza el estrés mecánico y las roturas", pt: "O corte a laser minimiza o stress mecânico e as quebras" },
  "how.step2.b2": { en: "Seamless integration with AI planning for automated execution", es: "Integração perfeita com o planeamento IA para execução automatizada", pt: "Integração perfeita com o planeamento IA para execução automatizada" },
  "how.step2.b3": { en: "Real-time control systems adapt to micro-variations in the material", es: "Sistemas de control en tiempo real se adaptan a micro variaciones del material", pt: "Sistemas de controlo em tempo real adaptam-se a micro variações do material" },

  "how.step3.title": { en: "Automatic Polishing with AI-Driven Sensors", es: "Pulido Automático con Sensores impulsados por IA", pt: "Polimento Automático com Sensores impulsionados por IA" },
  "how.step3.desc": {
    en: "A robotic polishing arm, guided by real-time sensor feedback and intelligent algorithms, shapes facets with micrometer precision. Machine learning models maintain uniform polishing quality at scale.",
    es: "Um braço robótico de polimento, guiado por feedback de sensores em tempo real e algoritmos inteligentes, molda facetas com precisão micrométrica. Modelos de ML mantêm qualidade uniforme em escala.",
    pt: "Um braço robótico de polimento, guiado por sensores em tempo real e algoritmos inteligentes, molda facetas com precisão micrométrica. Modelos de ML mantêm qualidade uniforme em escala."
  },
  "how.step3.b1": { en: "Robotic arms ensure uniform symmetry and angle accuracy", es: "Braços robóticos garantizan simetría uniforme y precisión de ângulos", pt: "Braços robóticos garantem simetria uniforme e precisão de ângulos" },
  "how.step3.b2": { en: "Feedback loops using vibration and torque", es: "Laços de feedback usando vibração e torque", pt: "Ciclos de feedback usando vibração e torque" },
  "how.step3.b3": { en: "Consistency across batches regardless of operator variability", es: "Consistência entre lotes independentemente da variabilidade do operador", pt: "Consistência entre lotes independentemente da variabilidade do operador" },

  "how.step4.title": { en: "Diamond Tokenization", es: "Tokenización de Diamantes", pt: "Tokenização de Diamantes" },
  "how.step4.desc": {
    en: "Once polished and certified, the diamond is digitized via tokenization. Each stone is linked to a cryptographic token (NFT) with traceable metadata, enabling secure, verifiable ownership and trading.",
    es: "Una vez pulido y certificado, el diamante se digitaliza a través de tokenización. Cada pedra se vincula a un token criptográfico (NFT) con metadatos rastreables, habilitando propiedad y comercio verificables y seguros.",
    pt: "Depois de polido e certificado, o diamante é digitalizado via tokenização. Cada pedra é ligada a um token criptográfico (NFT) com metadados rastreáveis, permitindo propriedade e negociação seguras e verificáveis."
  },
  "how.step4.b1": { en: "Blockchain-backed NFTs store cut, carat, clarity, and provenance data", es: "NFTs em blockchain armazenam corte, quilate, clareza e proveniência", pt: "NFTs em blockchain armazenam corte, quilate, clareza e proveniência" },
  "how.step4.b2": { en: "Integration with IoT for Continuous Verifiable Connectivity (CVC)", es: "Integração com IoT para Conectividade Verificável Contínua (CVC)", pt: "Integração com IoT para Conectividade Verificável Contínua (CVC)" },
  "how.step4.b3": { en: "Enables liquidity, fractional ownership, and global market access", es: "Permite liquidez, propriedade fracionada e acesso a mercados globais", pt: "Permite liquidez, propriedade fracionada e acesso a mercados globais" },

  // CVC Technology
  "tech.title": { en: "Our Technology", es: "Nuestra Tecnología", pt: "Nossa Tecnologia" },
  "tech.subtitle": { en: "Cutting-edge solutions designed to revolutionize the diamond industry", es: "Soluciones de vanguardia diseñadas para revolucionar la industria del diamante", pt: "Soluções de ponta desenhadas para revolucionar a indústria do diamante" },
  "tech.01.title": { en: "Precision Grading Lab", es: "Laboratorio de Graduación de Precisión", pt: "Laboratório de Classificação de Precisão" },
  "tech.01.desc": { en: "Our advanced laboratory leverages AI-driven tools and expert gemologists to deliver unmatched accuracy in diamond grading, ensuring trust and transparency for investors and collectors.", es: "Nuestro laboratorio avanzado utiliza ferramentas de IA e gemólogos expertos para proporcionar precisión incomparable na classificação de diamantes, garantindo confiança y transparencia para inversores y coleccionistas.", pt: "O nosso laboratório avançado utiliza ferramentas com IA e gemólogos especialistas para oferecer precisão incomparável na classificação de diamantes, garantindo confiança e transparência para investidores e colecionadores." },
  "tech.02.title": { en: "CVC Protocol", es: "Protocolo CVC", pt: "Protocolo CVC" },
  "tech.02.subtitle": { en: "(Continuous Verifiable Connectivity)", es: "(Conectividade Verificável Contínua)", pt: "(Conectividade Verificável Contínua)" },
  "tech.02.desc": { en: "This protocol ensures each diamond's identity is permanently verifiable on-chain, enabling tamper-proof traceability from the mine to the metaverse.", es: "Este protocolo garantiza que la identidad de cada diamante sea permanentemente verificable on-chain, habilitando rastreabilidad à prova de manipulación desde la mina hasta el metaverso.", pt: "Este protocolo garante que a identidade de cada diamante seja permanentemente verificável on-chain, permitindo rastreabilidade à prova de adulteração desde a mina até ao metaverso." },
  "tech.03.title": { en: "Digital Twin Engine", es: "Motor de Gemelo Digital", pt: "Motor de Gémeo Digital" },
  "tech.03.desc": { en: "Each diamond is paired with a unique, metadata-rich digital twin, stored on blockchain to preserve its history, ownership, and certification across digital ecosystems.", es: "Cada diamante é emparejado com um gémeo digital único e rico em metadados, armazenado em blockchain para preservar a sua história, propriedade e certificação em ecossistemas digitais.", pt: "Cada diamante é emparelhado com um gémeo digital único e rico em metadados, armazenado na blockchain para preservar o seu histórico, propriedade e certificação em ecossistemas digitais." },
  "tech.04.title": { en: "VaultLink Storage", es: "Armazenamiento VaultLink", pt: "Armazenamento VaultLink" },
  "tech.04.desc": { en: "A hybrid custody system that combines biometric-secured physical vaults with smart contract-based access for 24/7 visibility and maximum asset protection.", es: "Um sistema de custodia híbrido que combina cofres físicos com segurança biométrica com acesso baseado em smart contracts, oferecendo visibilidade 24/7 e máxima proteção de ativos.", pt: "Um sistema de custódia híbrido que combina cofres físicos com segurança biométrica com acesso baseado em smart contracts, oferecendo visibilidade 24/7 e máxima proteção de ativos." },

  // DNXT Platform
  "platform.title": { en: "DNXT PLATFORM", es: "PLATAFORMA DNXT", pt: "PLATAFORMA DNXT" },
  "platform.subtitle": { en: "A comprehensive digital ecosystem for diamond investment, trading, and asset management", es: "Um ecossistema digital completo para investimento, negociação e gestão de ativos em diamantes", pt: "Um ecossistema digital completo para investimento, negociação e gestão de ativos em diamantes" },
  "platform.overview": { en: "Platform Overview", es: "Visão Geral da Plataforma", pt: "Visão Geral da Plataforma" },
  "platform.overview.text": { en: "The DNXT Platform merges cutting-edge blockchain infrastructure with the intrinsic value of tokenized diamonds to deliver a next-generation Real-World Asset (RWA) marketplace. Designed for security, transparency, and scalability, the platform facilitates real-time trading, on-chain asset management, and direct ownership of diamond-backed digital tokens for both retail and institutional participants.", es: "A Plataforma DNXT combina infraestrutura blockchain de ponta com o valor intrínseco de diamantes tokenizados para oferecer um marketplace de Ativos do Mundo Real (RWA) de nova geração. Projetada para segurança, transparência e escalabilidade, permite negociação em tempo real, gestão on-chain de ativos e propriedade direta de tokens lastreados em diamantes para participantes de varejo e institucionais.", pt: "A Plataforma DNXT combina infraestrutura blockchain de ponta com o valor intrínseco de diamantes tokenizados para oferecer um marketplace de Ativos do Mundo Real (RWA) de nova geração. Projetada para segurança, transparência e escalabilidade, permite negociação em tempo real, gestão on-chain de ativos e propriedade direta de tokens lastreados em diamantes para participantes de varejo e institucionais." },
  "platform.secureTrading": { en: "Secure Trading Environment", es: "Ambiente de Negociación Seguro", pt: "Ambiente de Negociação Seguro" },
  "platform.secureTrading.desc": { en: "Institutional-grade security protocols, on-chain auditability, and real-time verification ensure trustless, transparent, and compliant transactions.", es: "Protocolos de segurança de nível institucional, auditabilidade on-chain e verificação em tempo real garantem transações confiáveis, transparentes e conformes.", pt: "Protocolos de segurança de nível institucional, auditabilidade on-chain e verificação em tempo real garantem transações confiáveis, transparentes e conformes." },
  "platform.marketIntel": { en: "Market Intelligence", es: "Inteligência de Mercado", pt: "Inteligência de Mercado" },
  "platform.marketIntel.desc": { en: "AI-driven analytics and dynamic pricing models offer deep market insights and risk assessment tools, empowering data-informed investment strategies.", es: "Análises com IA e modelos de precificação dinâmica oferecem insights de mercado e ferramentas de avaliação de risco, sustentando estratégias de investimento informadas por dados.", pt: "Análises com IA e modelos de precificação dinâmica oferecem insights de mercado e ferramentas de avaliação de risco, sustentando estratégias de investimento informadas por dados." },
  "platform.keyFeatures": { en: "Key Features", es: "Funcionalidades Clave", pt: "Funcionalidades-Chave" },
  "platform.forInvestors": { en: "For Investors", es: "Para Inversores", pt: "Para Investidores" },
  "platform.forTraders": { en: "For Traders", es: "Para Traders", pt: "Para Traders" },
  "platform.benefits": { en: "Platform Benefits", es: "Beneficios de la Plataforma", pt: "Benefícios da Plataforma" },

  // Services CTA (reused)
  "cta.book": { en: "Book Your Appointment Today", es: "Reserva tu Cita Hoy", pt: "Marque a sua Consulta Hoje" },

  // Services Page
  "services.title": { en: "DNXT Services", es: "Servicios DNXT", pt: "Serviços DNXT" },
  "services.subtitle": { 
    en: "A premium diamond cutting and restoration atelier in Porto, Portugal", 
    es: "Un atelier premium de corte y restauración de diamantes en Oporto, Portugal", 
    pt: "Um atelier premium de corte e restauração de diamantes no Porto, Portugal" 
  },
  "services.overview": { en: "Service Overview", es: "Resumen de Servicios", pt: "Visão Geral dos Serviços" },
  "services.overview.text": { 
    en: "DNXT provides expert diamond cutting, re-cutting, and repair services for clients looking for a trusted and transparent alternative to Antwerp and India. Our atelier combines advanced technology with meticulous craftsmanship to maximize the beauty, brilliance, and value of every diamond.",
    es: "DNXT proporciona servicios expertos de corte, recorte y reparación de diamantes para clientes que buscan una alternativa confiable y transparente a Amberes e India. Nuestro atelier combina tecnología avanzada con artesanía meticulosa para maximizar la belleza, el brillo y el valor de cada diamante.",
    pt: "A DNXT fornece serviços especializados de corte, recorte e reparação de diamantes para clientes que procuram uma alternativa confiável e transparente a Antuérpia e Índia. O nosso atelier combina tecnologia avançada com artesanato meticuloso para maximizar a beleza, o brilho e o valor de cada diamante."
  },
  "services.precisionCutting": { en: "Precision Cutting", es: "Corte de Precisión", pt: "Corte de Precisão" },
  "services.precisionCutting.desc": { 
    en: "Transform rough diamonds into polished masterpieces with exceptional proportions, symmetry, and brilliance.",
    es: "Transforma diamantes en bruto en obras maestras pulidas con proporciones, simetría y brillo excepcionales.",
    pt: "Transforma diamantes em bruto em obras-primas polidas com proporções, simetria e brilho excecionais."
  },
  "services.reCutting": { en: "Re-Cutting & Upgrading", es: "Recorte y Mejora", pt: "Recorte e Melhoria" },
  "services.reCutting.desc": { 
    en: "Modernize outdated cuts to enhance light performance, brilliance, and market value",
    es: "Moderniza cortes obsoletos para mejorar el rendimiento lumínico, brillo y valor de mercado",
    pt: "Moderniza cortes obsoletos para melhorar o desempenho de luz, brilho e valor de mercado"
  },
  "services.repair": { en: "Diamond Repair", es: "Reparación de Diamantes", pt: "Reparação de Diamantes" },
  "services.repair.desc": { 
    en: "Restore chipped or damaged diamonds without compromising quality, maintaining the highest possible carat retention.",
    es: "Restaura diamantes astillados o dañados sin comprometer la calidad, manteniendo la mayor retención de quilates posible.",
    pt: "Restaura diamantes lascados ou danificados sem comprometer a qualidade, mantendo a maior retenção de quilates possível."
  },
  "services.keyFeatures": { en: "Key Features", es: "Características Clave", pt: "Características-Chave" },
  "services.forOwners": { en: "For Diamond Owners", es: "Para Propietarios de Diamantes", pt: "Para Proprietários de Diamantes" },
  "services.forOwners.b1": { en: "Expert cutting for rough diamonds", es: "Corte experto para diamantes en bruto", pt: "Corte especializado para diamantes em bruto" },
  "services.forOwners.b2": { en: "Re-cutting to improve old or outdated cuts", es: "Recorte para mejorar cortes viejos o obsoletos", pt: "Recorte para melhorar cortes antigos ou obsoletos" },
  "services.forOwners.b3": { en: "Professional repair for damaged stones", es: "Reparación profesional para piedras dañadas", pt: "Reparação profissional para pedras danificadas" },
  "services.forJewelers": { en: "For Jewelers", es: "Para Joyeros", pt: "Para Joalheiros" },
  "services.forJewelers.b1": { en: "Reliable European-based atelier", es: "Atelier confiable con base en Europa", pt: "Atelier confiável com base na Europa" },
  "services.forJewelers.b2": { en: "Advanced cutting and polishing technology", es: "Tecnología avanzada de corte y pulido", pt: "Tecnologia avançada de corte e polimento" },
  "services.forJewelers.b3": { en: "Personalized handling and secure process", es: "Manejo personalizado y proceso seguro", pt: "Manuseio personalizado e processo seguro" },
  "services.whyChoose": { en: "Why Choose DNXT?", es: "¿Por qué Elegir DNXT?", pt: "Por que Escolher a DNXT?" },
  "services.whyChoose.european": { en: "European Alternative", es: "Alternativa Europea", pt: "Alternativa Europeia" },
  "services.whyChoose.european.desc": { en: "Trusted cutting services in Porto, Portugal", es: "Servicios de corte confiables en Oporto, Portugal", pt: "Serviços de corte confiáveis no Porto, Portugal" },
  "services.whyChoose.technology": { en: "Cutting-Edge Technology", es: "Tecnología de Vanguardia", pt: "Tecnologia de Ponta" },
  "services.whyChoose.technology.desc": { en: "Precision tools for superior results", es: "Herramientas de precisión para resultados superiores", pt: "Ferramentas de precisão para resultados superiores" },
  "services.whyChoose.transparency": { en: "Full Transparency", es: "Transparencia Total", pt: "Transparência Total" },
  "services.whyChoose.transparency.desc": { en: "From consultation to delivery, no hidden steps", es: "Desde la consulta hasta la entrega, sin pasos ocultos", pt: "Desde a consulta até à entrega, sem passos ocultos" },

  // COMPETE 2030 Page
  "compete.title": { en: "Innovation & Development", es: "Innovación y Desarrollo", pt: "Inovação & Desenvolvimento" },
  "compete.subtitle": { en: "Our Project", es: "Nuestro Proyecto", pt: "O Nosso Proyecto" },
  "compete.project.designation": { en: "Project designation:", es: "Designación del proyecto:", pt: "Designação do projeto:" },
  "compete.project.designation.text": { 
    en: "DNXT RWA MARKETPLACE - Diamond Trading with Blockchain Technology", 
    es: "DNXT RWA MARKETPLACE - Negociación de Diamantes con Tecnología Blockchain", 
    pt: "DNXT RWA MARKETPLACE - Negociação de Diamantes com Tecnologia Blockchain" 
  },
  "compete.project.objective": { en: "Project objective:", es: "Objetivo del proyecto:", pt: "Objetivo do projeto:" },
  "compete.project.objective.text": { 
    en: "The Diamond NXT project aims to revolutionize the diamond market with an innovative digital platform that uses technologies such as blockchain, NFT and verification systems to ensure the authenticity, traceability and ethics of each diamond. This solution promotes transparency, trust and inclusion, reducing intermediaries and costs, making investment accessible to everyone and fostering more sustainable and responsible practices in the diamond industry.",
    es: "El proyecto Diamond NXT pretende revolucionar el mercado de los diamantes con una plataforma digital innovadora que usa tecnologías como blockchain, NFT y sistemas de verificación para garantizar la autenticidad, rastreabilidad y ética de cada diamante. Esta solución promueve transparencia, confianza e inclusión, reduciendo intermediarios y costos, haciendo el inversión accesible a todos y fomentando prácticas más sostenibles y responsables en el sector diamantífero.",
    pt: "O projeto Diamond NXT pretende revolucionar o mercado dos diamantes com uma plataforma digital inovadora que usa tecnologias como blockchain, NFT e sistemas de verificação para garantir a autenticidade, rastreabilidade e ética de cada diamante. Esta solução promove transparência, confiança e inclusão, reduzindo intermediários e custos, tornando o investimento acessível a todos e fomentando práticas mais sustentáveis e responsáveis no setor diamantífero."
  },
  "compete.project.beneficiary": { en: "Beneficiary entity:", es: "Entidad beneficiaria:", pt: "Entidade beneficiária:" },
  "compete.project.beneficiary.text": { en: "Diamond NXT Trading, Lda.", es: "Diamond NXT Trading, Lda.", pt: "Diamond NXT Trading, Lda." },
  "compete.project.code": { en: "Operation code:", es: "Código de la operación:", pt: "Código da operação:" },
  "compete.project.code.text": { en: "COMPETE2030-FEDER-01452600", es: "COMPETE2030-FEDER-01452600", pt: "COMPETE2030-FEDER-01452600" },
  "compete.download": { en: "Download", es: "Descargar", pt: "Descargar" },
  "compete.financial.title": { en: "Financial Details", es: "Detalles Financieros", pt: "Detalhes Financeiros" },
  "compete.financial.totalCost": { en: "Total Cost:", es: "Costo Total:", pt: "Custo Total:" },
  "compete.financial.eligibleCost": { en: "Eligible Cost:", es: "Costo Elegible:", pt: "Custo Elegível:" },
  "compete.financial.euSupport": { en: "EU Financial Support:", es: "Apoyo Financiero de la UE:", pt: "Apoio Financeiro da UE:" },
  "compete.financial.euCoFinancing": { en: "EU Co-financing:", es: "Cofinanciamiento de la UE:", pt: "Cofinanciamento da UE:" },

  // Footer
  "footer.socials": { en: "Socials", es: "Redes Sociales", pt: "Redes Sociais" },
  "footer.solutions": { en: "Solutions", es: "Soluciones", pt: "Soluciones" },
  "footer.contact": { en: "Contact", es: "Contacto", pt: "Contato" },
  "footer.manufacturingProcess": { en: "Manufacturing Process", es: "Proceso de Fabricación", pt: "Processo de Fabrico" },
  "footer.ourTechnology": { en: "Our Technology", es: "Nuestra Tecnología", pt: "Nossa Tecnologia" },
  "footer.dnxtPlatform": { en: "DNXT Platform", es: "Plataforma DNXT", pt: "Plataforma DNXT" },
  "footer.address": { 
    en: "Rua dos Três Lagares, Antiga Praça Municipal do Fundão, Incubadora A Praça, 6230-421 Fundão, Portugal.",
    es: "Rua dos Três Lagares, Antiga Praça Municipal do Fundão, Incubadora A Praça, 6230-421 Fundão, Portugal.",
    pt: "Rua dos Três Lagares, Antiga Praça Municipal do Fundão, Incubadora A Praça, 6230-421 Fundão, Portugal."
  },
  "footer.phone": { en: "+351 925 287 726", es: "+351 925 287 726", pt: "+351 925 287 726" },
  "footer.email": { en: "info@diamondnxt.com", es: "info@diamondnxt.com", pt: "info@diamondnxt.com" },
  "footer.copyright": { en: "All rights reserved.", es: "Todos los derechos reservados.", pt: "Todos os direitos reservados." },
  "footer.privacyPolicy": { en: "Privacy Policy", es: "Política de Privacidad", pt: "Política de Privacidade" },
  "footer.termsOfService": { en: "Terms of Service", es: "Términos de Servicio", pt: "Termos de Serviço" },

  // Contact Page
  "contact.title": { en: "Contact Us", es: "Contáctanos", pt: "Contacte-nos" },
  "contact.subtitle": { 
    en: "Have questions about DNXT? We'd love to hear from you.", 
    es: "¿Tienes preguntas sobre DNXT? Nos encantaría saber de ti.", 
    pt: "Tem perguntas sobre a DNXT? Gostaríamos de saber de si." 
  },
  "contact.form.name": { en: "Name", es: "Nombre", pt: "Nome" },
  "contact.form.name.placeholder": { en: "Your name", es: "Tu nombre", pt: "O seu nome" },
  "contact.form.email": { en: "Email", es: "Correo electrónico", pt: "Email" },
  "contact.form.email.placeholder": { en: "your@email.com", es: "tu@email.com", pt: "o@seu.email.com" },
  "contact.form.subject": { en: "Subject", es: "Asunto", pt: "Assunto" },
  "contact.form.subject.placeholder": { 
    en: "What's this about?", 
    es: "¿De qué se trata?", 
    pt: "Sobre o que é?" 
  },
  "contact.form.message": { en: "Message", es: "Mensaje", pt: "Mensagem" },
  "contact.form.message.placeholder": { en: "Your message...", es: "Tu mensaje...", pt: "A sua mensagem..." },
  "contact.form.send": { en: "Send Message", es: "Enviar Mensaje", pt: "Enviar Mensagem" },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("es");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as LanguageCode | null) : null;
    if (stored) {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: LanguageCode) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  const t = useMemo(() => {
    return (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] ?? entry.en ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
} 