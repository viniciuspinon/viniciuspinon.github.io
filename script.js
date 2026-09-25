/**
 * Vinícius Pinon - Academic Website
 * Tri-lingual Internationalization (PT / EN / ES), Theme Toggle, and Interactivity
 */

const translations = {
  pt: {
    // Navigation
    "nav.bio": "Bio",
    "nav.research": "Pesquisa",
    "nav.portfolio": "Portfólio",
    "nav.cv": "Currículo",

    // Sidebar & Profile
    "profile.title": "Cientista Político (UFPE) | Mestre em Administração (FGV-EBAPE)",
    "profile.affiliation": "Pesquisador-assistente na Fundação Joaquim Nabuco (FUNDAJ)",
    "profile.location": "Recife, Brasil",
    "profile.cvDownload": "Baixar CV (PDF)",
    "profile.email": "E-mail",
    "profile.lattes": "Currículo Lattes",

    // Bio Page
    "bio.heading": "Sobre",
    "bio.p1": "Possuo mestrado em Administração pela <strong>Escola Brasileira de Administração Pública e de Empresas da Fundação Getulio Vargas (FGV/EBAPE)</strong>, na linha de Instituições, Política e Governo, e bacharelado em Ciência Política pela <strong>Universidade Federal de Pernambuco (UFPE)</strong>.",
    "bio.p2": "Atualmente, sou pesquisador-assistente na <strong>Fundação Joaquim Nabuco (FUNDAJ)</strong> no Núcleo de Inovação Social em Políticas Públicas. Anteriormente, atuei como pesquisador na <strong>Escola Nacional de Administração Pública (Enap)</strong> no projeto <em>Evidência Express</em>, fui pesquisador-assistente na <strong>Harvard Business School</strong> (para a Profª. Paula Rettl, PhD) e na <strong>FGV/EBAPE</strong> (para o Prof. Octavio Amorim Neto, PhD), além de ter trabalhado como Analista de Dados na <strong>Prefeitura do Recife</strong> (SEPLAGTD).",
    "bio.interestsTitle": "Interesses de Pesquisa",
    "bio.interestsList": `
      <li>Políticas Públicas e Avaliação de Impacto</li>
      <li>Instituições Políticas</li>
      <li>Comportamento Político e Opinião Pública</li>
      <li>Ciência de Dados Aplicada e Métodos Quantitativos (R, Stata, Power BI)</li>
    `,

    // Research Page
    "research.pageTitle": "Pesquisa acadêmica",
    "research.pageSubtitle": "Dissertação de mestrado, artigos e projetos acadêmicos.",
    "research.thesisHeading": "Dissertação de Mestrado",
    "research.thesisTitle": "State policy vs. government policy: how do institutionalization and political ownership affect policy approval?",
    "research.thesisMeta": "FGV/EBAPE (Rio de Janeiro, 2024) &bull; Orientador: Prof. Dr. Cesar Zucco Jr.",
    "research.thesisAbstract": "Esta dissertação investiga como o grau de institucionalização e o pertencimento político (political ownership) influenciam a aprovação e longevidade de políticas públicas no poder legislativo brasileiro, diferenciando políticas perenes de Estado de programas transitórios de governo.",
    "research.btnAbstract": "[ Resumo ]",
    "research.btnFgv": "[ PDF ]",
    "research.otherHeading": "Outros trabalhos",
    "research.facepeTitle": "Inércia Legislativa: o impacto da fragmentação partidária na eficiência do Congresso Nacional (1995–2020)",
    "research.facepeMeta": "PIBIC FACEPE / UFPE (2020–2022) &bull; Orientadora: Profª. Dra. Mariana Batista da Silva",
    "research.facepeAbstract": "Análise empírica quantitativa sobre a relação entre fragmentação partidária e o tempo de tramitação e sucesso legislativo no Congresso Nacional.",
    "research.propesqTitle": "Campanha Fora de Época: o impacto do comportamento legislativo no sucesso eleitoral no Brasil (1995–2019)",
    "research.propesqMeta": "PIBIC Propesq / CNPq — UFPE (2019–2020) &bull; Orientadora: Profª. Dra. Mariana Batista da Silva",
    "research.propesqAbstract": "Estudo sobre a atuação parlamentar contínua e suas repercussões na taxa de reeleição e votação de deputados federais.",
    "research.tccTitle": "Trabalho de Conclusão de Curso (Bacharelado)",
    "research.tccMeta": "Universidade Federal de Pernambuco (UFPE) &bull; Orientadora: Profª. Dra. Mariana Batista da Silva",

    // Portfolio Page
    "portfolio.pageTitle": "Portfólio",
    "portfolio.pageSubtitle": "Projetos práticos, ferramentas, textos e atividades docentes.",
    "portfolio.secAppsHeading": "Aplicativos & Dashboards",
    "portfolio.project1Title": "Em Quem Eu Voto",
    "portfolio.project1Venue": "Setembro de 2026 &bull; Web App",
    "portfolio.project1Desc": "Guia e ferramenta interativa desenvolvida para auxiliar eleitores no processo de escolha de candidatos no sistema proporcional, considerando viabilidade eleitoral, alinhamento partidário e histórico parlamentar.",
    "portfolio.project1BtnSite": "[ Web App ]",
    "portfolio.project1BtnGithub": "[ GitHub ]",
    "portfolio.project1BtnArticle": "[ PDF ]",
    "portfolio.project2Title": "Dashboard de Gastos Públicos",
    "portfolio.project2Venue": "Setembro de 2022 &bull; Power BI",
    "portfolio.project2Desc": "Painel interativo em Power BI para visualização, monitoramento e análise de execução orçamentária e despesas públicas.",
    "portfolio.project2Btn": "[ Power BI ]",
    "portfolio.secWritingHeading": "Textos & Análises",
    "portfolio.newsletterDesc": "<strong>Domínio Público</strong> — sobre políticas públicas, governo e instituições.",
    "portfolio.btnSubstack": "Assinar no Substack &rarr;",
    "portfolio.art1Title": "Como escolher um candidato nas Eleições de 2026",
    "portfolio.art1Venue": "Setembro de 2026 &bull; Domínio Público",
    "portfolio.art1Desc": "Um guia prático para um voto informado nas eleições parlamentares, explorando o funcionamento do sistema proporcional, a viabilidade partidária e a avaliação do trabalho legislativo.",
    "portfolio.art2Title": "O Brasil precisa de um Ministério das Possibilidades?",
    "portfolio.art2Venue": "Agosto de 2026 &bull; Domínio Público",
    "portfolio.art2Desc": "O que podemos aprender com os Emirados Árabes Unidos sobre o futuro da inovação na gestão pública e formulação estratégica.",
    "portfolio.art3Title": "A concorrência na política",
    "portfolio.art3Venue": "Novembro de 2020 &bull; Medium / C&P Política",
    "portfolio.art3Desc": "Uma análise sobre competição partidária, mercado eleitoral e estratégias de posicionamento político.",
    "portfolio.btnReadSubstack": "[ Substack ]",
    "portfolio.btnReadMedium": "[ Medium ]",
    "portfolio.secTeachingHeading": "Ensino",
    "portfolio.course1Title": "Workshop: Análise de Dados com Power BI",
    "portfolio.course1Venue": "UFPE &bull; Gestão da Informação (3º período)",
    "portfolio.course1Desc": "Workshop ministrado para estudantes do 3º período do curso de Gestão da Informação da Universidade Federal de Pernambuco (UFPE), abordando fundamentos de Power BI, modelagem de dados, tratamento com Power Query e visualização analítica orientada à tomada de decisão.",
    "portfolio.course1Btn": "[ Slides ]",

    // CV Page
    "cv.pageTitle": "Currículo",
    "cv.pageSubtitle": "Formação acadêmica, trajetória profissional e competências técnicas.",
    "cv.downloadPt": "&darr; Baixar CV em Português (PDF)",
    "cv.downloadEn": "&darr; Download CV in English (PDF)",
    "cv.secEdu": "Formação Acadêmica",
    "cv.mscDegree": "Mestrado em Administração",
    "cv.mscInst": "FGV/EBAPE — Linha: Instituições, Política e Governo",
    "cv.baDegree": "Bacharelado em Ciência Política",
    "cv.baInst": "Universidade Federal de Pernambuco (UFPE)",
    "cv.secExp": "Experiência Profissional",
    "cv.expFundaj": "<strong>Pesquisador-assistente</strong>, Fundação Joaquim Nabuco (FUNDAJ)",
    "cv.expEnap": "<strong>Pesquisador</strong> (Projeto EvEx), Escola Nacional de Administração Pública (Enap)",
    "cv.expHbs": "<strong>Pesquisador-assistente</strong>, Harvard Business School (Profª. Paula Rettl)",
    "cv.expFgv": "<strong>Pesquisador-assistente</strong>, FGV/EBAPE (Prof. Octavio Amorim Neto)",
    "cv.expRecife": "<strong>Analista de Dados</strong> (BI), SEPLAGTD — Prefeitura do Recife",
    "cv.expCp": "<strong>Sócio-Fundador</strong>, C&P Política",
    "cv.expVirtu": "<strong>Diretor de Marketing</strong>, Virtù Consultoria",
    "cv.secTraining": "Formação Complementar",
    "cv.btnMoreCerts": "[ + Ver outras certificações e cursos ]",
    "cv.trGoogle": "<strong>Especialização em Gestão de Projetos</strong> &mdash; Google Career Certificates (240h)",
    "cv.trSocialInnov": "<strong>Inovação Social para o Aperfeiçoamento de Políticas Públicas</strong> &mdash; ENAP (40h)",
    "cv.trScrum": "<strong>Scrum e Ágil no Setor Público</strong> &mdash; Escola Nacional de Administração Pública — ENAP (30h)",
    "cv.trPbi": "<strong>Microsoft Power BI para Data Science</strong> &mdash; Data Science Academy (72h)",
    "cv.trData": "<strong>Análise de Dados como Suporte à Tomada de Decisão</strong> &mdash; ENAP (30h)",
    "cv.trImpact": "<strong>Avaliação de Impacto de Programas e Políticas Sociais</strong> &mdash; ENAP / J-PAL (36h)",
    "cv.trElectoral": "<strong>Sistemas Eleitorais: como democracias elegem seus governantes?</strong> &mdash; Escola do Legislativo / ALEPE (4h)",
    "cv.trBudget": "<strong>Introdução ao Orçamento Público</strong> &mdash; Instituto Legislativo Brasileiro / Senado Federal (40h)",
    "cv.trAi": "<strong>Jornada Inteligência Artificial</strong> &mdash; Hashtag Treinamentos",
    "cv.trCiti1": "<strong>Social and Behavioral Research Investigators</strong> &mdash; CITI Program",
    "cv.trCiti2": "<strong>Social and Behavioral Responsible Conduct of Research</strong> &mdash; CITI Program",
    "cv.trR": "<strong>Linguagem R</strong> &mdash; Udemy",
    "cv.trElsevier": "<strong>1st Elsevier Finance Conference</strong> &mdash; FGV/EBAPE",
    "cv.trSql": "<strong>Intermediate SQL Series</strong> &mdash; DataCamp",
    "cv.trPbiDc": "<strong>Introduction to Power BI</strong> &mdash; DataCamp",
    "cv.trSemanaInov": "<strong>Semana de Inovação 2022</strong> &mdash; ENAP",
    "cv.trToefl": "<strong>TOEFL iBT (Proficiência em Inglês B2)</strong> &mdash; ETS",
    "cv.trAnpad": "<strong>Teste ANPAD</strong> &mdash; Associação Nacional de Pós-Graduação e Pesquisa em Administração",
    "cv.secSkills": "Habilidades Técnicas",
    "cv.skillsList": `
      <li><strong>Análise de Dados:</strong> R, Stata, SPSS, Power BI, Modelagem Causal</li>
      <li><strong>Métodos de Pesquisa:</strong> Pesquisas de Opinião Pública, Avaliação de Impacto de Políticas Públicas, Entrevistas Qualitativas</li>
      <li><strong>Gestão & Projetos:</strong> Especialização em Gestão de Projetos (Google Career Certificate), Metodologias Ágeis (Scrum)</li>
      <li><strong>Idiomas & Certificados:</strong> Inglês Intermediário-Avançado (TOEFL B2), Certificação ANPAD</li>
    `
  },

  en: {
    // Navigation
    "nav.bio": "Bio",
    "nav.research": "Research",
    "nav.portfolio": "Portfolio",
    "nav.cv": "CV",

    // Sidebar & Profile
    "profile.title": "Political Scientist (UFPE) | MSc in Administration (FGV-EBAPE)",
    "profile.affiliation": "Research Assistant at Joaquim Nabuco Foundation (FUNDAJ)",
    "profile.location": "Recife, Brazil",
    "profile.cvDownload": "Download CV (PDF)",
    "profile.email": "Email",
    "profile.lattes": "Lattes Curriculum",

    // Bio Page
    "bio.heading": "About",
    "bio.p1": "I hold an MSc in Administration from the <strong>Brazilian School of Public and Business Administration at Fundação Getulio Vargas (FGV/EBAPE)</strong>, focusing on Institutions, Politics, and Government, and a BA in Political Science from the <strong>Federal University of Pernambuco (UFPE)</strong>.",
    "bio.p2": "Currently, I serve as a Research Assistant at the <strong>Joaquim Nabuco Foundation (FUNDAJ)</strong> within the Center for Social Innovation in Public Policy. Previously, I worked on evidence synthesis and data science at the <strong>National School of Public Administration (Enap)</strong> for the <em>Evidência Express</em> project, supported faculty research at <strong>Harvard Business School</strong> (Prof. Paula Rettl, PhD) and <strong>FGV/EBAPE</strong> (Prof. Octavio Amorim Neto, PhD), and served as a Data Analyst for the <strong>Recife City Hall</strong> (SEPLAGTD).",
    "bio.interestsTitle": "Research Interests",
    "bio.interestsList": `
      <li>Public Policy and Impact Evaluation</li>
      <li>Political Institutions</li>
      <li>Political Behavior and Public Opinion</li>
      <li>Applied Data Science & Quantitative Methods (R, Stata, Power BI)</li>
    `,

    // Research Page
    "research.pageTitle": "Academic Research",
    "research.pageSubtitle": "Master's thesis, working papers, and academic projects.",
    "research.thesisHeading": "Master's Thesis",
    "research.thesisTitle": "State policy vs. government policy: how do institutionalization and political ownership affect policy approval?",
    "research.thesisMeta": "FGV/EBAPE (Rio de Janeiro, 2024) &bull; Advisor: Prof. Cesar Zucco Jr., PhD",
    "research.thesisAbstract": "This thesis explores how the level of institutionalization and political ownership shape the legislative approval and durability of public policies in Brazil, distinguishing enduring State policies from transitory government agendas.",
    "research.btnAbstract": "[ Abstract ]",
    "research.btnFgv": "[ PDF ]",
    "research.otherHeading": "Other Works",
    "research.facepeTitle": "Legislative Inertia: the impact of party fragmentation on the efficiency of the National Congress (1995–2020)",
    "research.facepeMeta": "PIBIC FACEPE / UFPE (2020–2022) &bull; Advisor: Prof. Mariana Batista da Silva, PhD",
    "research.facepeAbstract": "Empirical quantitative analysis of the correlation between party fragmentation and legislative bill passage velocity in the Brazilian Congress.",
    "research.propesqTitle": "Off-Season Campaigning: the impact of legislative behavior on electoral success in Brazil (1995–2019)",
    "research.propesqMeta": "PIBIC Propesq / CNPq — UFPE (2019–2020) &bull; Advisor: Prof. Mariana Batista da Silva, PhD",
    "research.propesqAbstract": "Study evaluating continuous parliamentary performance and its effects on reelection rates in proportional representation.",
    "research.tccTitle": "Undergraduate Senior Thesis",
    "research.tccMeta": "Federal University of Pernambuco (UFPE) &bull; Advisor: Prof. Mariana Batista da Silva, PhD",

    // Portfolio Page
    "portfolio.pageTitle": "Portfolio",
    "portfolio.pageSubtitle": "Applied projects, tools, writings, and teaching materials.",
    "portfolio.secAppsHeading": "Applications & Dashboards",
    "portfolio.project1Title": "Em Quem Eu Voto (Who Do I Vote For)",
    "portfolio.project1Venue": "September 2026 &bull; Web App",
    "portfolio.project1Desc": "An interactive decision tool developed to guide voters through ballot choices in proportional representation systems, evaluating party viability, ideological alignment, and legislative track records.",
    "portfolio.project1BtnSite": "[ Web App ]",
    "portfolio.project1BtnGithub": "[ GitHub ]",
    "portfolio.project1BtnArticle": "[ PDF ]",
    "portfolio.project2Title": "Public Expenditure Dashboard",
    "portfolio.project2Venue": "September 2022 &bull; Power BI",
    "portfolio.project2Desc": "Interactive Power BI dashboard for exploring, monitoring, and analyzing budget execution and municipal public spending.",
    "portfolio.project2Btn": "[ Power BI ]",
    "portfolio.secWritingHeading": "Writings & Policy Analysis",
    "portfolio.newsletterDesc": "<strong>Domínio Público</strong> — on public policy, governance, and institutions.",
    "portfolio.btnSubstack": "Subscribe on Substack &rarr;",
    "portfolio.art1Title": "How to choose a candidate in the 2026 Elections",
    "portfolio.art1Venue": "September 2026 &bull; Domínio Público",
    "portfolio.art1Desc": "A practical guide for making informed votes in congressional elections, breaking down proportional representation, coalition thresholds, and legislative record evaluation.",
    "portfolio.art2Title": "Does Brazil need a Ministry of Possibilities?",
    "portfolio.art2Venue": "August 2026 &bull; Domínio Público",
    "portfolio.art2Desc": "Insights from international benchmarks on long-term public innovation and foresight governance in Brazil.",
    "portfolio.art3Title": "Competition in Politics",
    "portfolio.art3Venue": "November 2020 &bull; Medium / C&P Política",
    "portfolio.art3Desc": "An essay discussing electoral competition, political markets, and strategic campaign positioning.",
    "portfolio.btnReadSubstack": "[ Substack ]",
    "portfolio.btnReadMedium": "[ Medium ]",
    "portfolio.secTeachingHeading": "Teaching",
    "portfolio.course1Title": "Workshop: Data Analysis with Power BI",
    "portfolio.course1Venue": "UFPE &bull; Information Management (3rd Semester)",
    "portfolio.course1Desc": "Practical workshop delivered to undergraduate students in Information Management at UFPE, covering Power BI fundamentals, data modeling, Power Query transformations, and decision-driven visual analytics.",
    "portfolio.course1Btn": "[ Slides ]",

    // CV Page
    "cv.pageTitle": "Curriculum Vitae",
    "cv.pageSubtitle": "Academic background, professional trajectory, and skills.",
    "cv.downloadPt": "&darr; Download CV in Portuguese (PDF)",
    "cv.downloadEn": "&darr; Download CV in English (PDF)",
    "cv.secEdu": "Education",
    "cv.mscDegree": "MSc in Administration",
    "cv.mscInst": "FGV/EBAPE — Track: Institutions, Politics, and Government",
    "cv.baDegree": "BA in Political Science",
    "cv.baInst": "Federal University of Pernambuco (UFPE)",
    "cv.secExp": "Professional Experience",
    "cv.expFundaj": "<strong>Research Assistant</strong>, Joaquim Nabuco Foundation (FUNDAJ)",
    "cv.expEnap": "<strong>Researcher</strong> (EvEx Project), National School of Public Administration (Enap)",
    "cv.expHbs": "<strong>Research Assistant</strong>, Harvard Business School (Prof. Paula Rettl)",
    "cv.expFgv": "<strong>Research Assistant</strong>, FGV/EBAPE (Prof. Octavio Amorim Neto)",
    "cv.expRecife": "<strong>Data Analyst</strong> (BI), SEPLAGTD — Recife City Hall",
    "cv.expCp": "<strong>Co-Founder</strong>, C&P Política",
    "cv.expVirtu": "<strong>Marketing Director</strong>, Virtù Consulting",
    "cv.secTraining": "Certifications & Additional Training",
    "cv.btnMoreCerts": "[ + View additional certifications and courses ]",
    "cv.trGoogle": "<strong>Project Management Specialization</strong> &mdash; Google Career Certificates (240h)",
    "cv.trSocialInnov": "<strong>Social Innovation for Public Policy Improvement</strong> &mdash; ENAP (40h)",
    "cv.trScrum": "<strong>Scrum and Agile in the Public Sector</strong> &mdash; National School of Public Administration — ENAP (30h)",
    "cv.trPbi": "<strong>Microsoft Power BI for Data Science</strong> &mdash; Data Science Academy (72h)",
    "cv.trData": "<strong>Data Analysis for Decision-Making</strong> &mdash; ENAP (30h)",
    "cv.trImpact": "<strong>Impact Evaluation of Social Programs and Policies</strong> &mdash; ENAP / J-PAL (36h)",
    "cv.trElectoral": "<strong>Electoral Systems: How Democracies Elect Their Leaders</strong> &mdash; Legislative School of Pernambuco / ALEPE (4h)",
    "cv.trBudget": "<strong>Introduction to Public Budgeting</strong> &mdash; Brazilian Legislative Institute / Federal Senate (40h)",
    "cv.trAi": "<strong>Artificial Intelligence Journey</strong> &mdash; Hashtag Treinamentos",
    "cv.trCiti1": "<strong>Social and Behavioral Research Investigators</strong> &mdash; CITI Program",
    "cv.trCiti2": "<strong>Social and Behavioral Responsible Conduct of Research</strong> &mdash; CITI Program",
    "cv.trR": "<strong>R Programming Language</strong> &mdash; Udemy",
    "cv.trElsevier": "<strong>1st Elsevier Finance Conference</strong> &mdash; FGV/EBAPE",
    "cv.trSql": "<strong>Intermediate SQL Series</strong> &mdash; DataCamp",
    "cv.trPbiDc": "<strong>Introduction to Power BI</strong> &mdash; DataCamp",
    "cv.trSemanaInov": "<strong>Public Innovation Week 2022</strong> &mdash; ENAP",
    "cv.trToefl": "<strong>TOEFL iBT (English Proficiency B2)</strong> &mdash; ETS",
    "cv.trAnpad": "<strong>ANPAD Exam</strong> &mdash; National Association of Postgrad Programs in Administration",
    "cv.secSkills": "Technical Skills",
    "cv.skillsList": `
      <li><strong>Data Analysis:</strong> R, Stata, SPSS, Power BI, Causal Modeling</li>
      <li><strong>Research Methods:</strong> Public Opinion Surveys, Impact Evaluation, Qualitative Fieldwork</li>
      <li><strong>Management & Agile:</strong> Project Management Specialization (Google Career Certificate), Scrum</li>
      <li><strong>Languages & Credentials:</strong> Fluent Portuguese, Advanced English (TOEFL B2), ANPAD Certification</li>
    `
  },

  es: {
    // Navigation
    "nav.bio": "Bio",
    "nav.research": "Investigación",
    "nav.portfolio": "Portafolio",
    "nav.cv": "Currículum",

    // Sidebar & Profile
    "profile.title": "Científico Político (UFPE) | Magíster en Administración (FGV-EBAPE)",
    "profile.affiliation": "Asistente de Investigación en la Fundación Joaquim Nabuco (FUNDAJ)",
    "profile.location": "Recife, Brasil",
    "profile.cvDownload": "Descargar CV (PDF)",
    "profile.email": "Correo",
    "profile.lattes": "Currículum Lattes",

    // Bio Page
    "bio.heading": "Sobre mí",
    "bio.p1": "Tengo una maestría en Administración por la <strong>Escola Brasileira de Administração Pública e de Empresas da Fundação Getulio Vargas (FGV/EBAPE)</strong>, en la línea de Instituciones, Política y Gobierno, e licenciatura en Ciencia Política por la <strong>Universidad Federal de Pernambuco (UFPE)</strong>.",
    "bio.p2": "Actualmente me desempeño como asistente de investigación en la <strong>Fundación Joaquim Nabuco (FUNDAJ)</strong> en el Centro de Innovación Social en Políticas Públicas. Anteriormente trabajé como investigador en la <strong>Escuela Nacional de Administración Pública (Enap)</strong> en el proyecto <em>Evidência Express</em>, fui asistente de investigación en <strong>Harvard Business School</strong> (para la Profª. Paula Rettl, PhD) e na <strong>FGV/EBAPE</strong> (para el Prof. Octavio Amorim Neto, PhD), además de haberme desempeñado como Analista de Datos en la <strong>Alcaldía de Recife</strong> (SEPLAGTD).",
    "bio.interestsTitle": "Líneas de Investigación",
    "bio.interestsList": `
      <li>Políticas Públicas y Evaluación de Impacto</li>
      <li>Instituciones Políticas</li>
      <li>Comportamiento Político y Opinión Pública</li>
      <li>Ciencia de Datos Aplicada y Métodos Cuantitativos (R, Stata, Power BI)</li>
    `,

    // Research Page
    "research.pageTitle": "Investigación Académica",
    "research.pageSubtitle": "Tesis de maestría, documentos de trabajo y proyectos académicos.",
    "research.thesisHeading": "Tesis de Maestría",
    "research.thesisTitle": "State policy vs. government policy: how do institutionalization and political ownership affect policy approval?",
    "research.thesisMeta": "FGV/EBAPE (Río de Janeiro, 2024) &bull; Tutor: Prof. Dr. Cesar Zucco Jr.",
    "research.thesisAbstract": "Esta tesis analiza cómo el nivel de institucionalización y el sentido de propiedad política (political ownership) influyen en la aprobación y sostenibilidad de políticas públicas en el poder legislativo brasileño.",
    "research.btnAbstract": "[ Resumen ]",
    "research.btnFgv": "[ PDF ]",
    "research.otherHeading": "Otros Trabajos",
    "research.facepeTitle": "Inercia Legislativa: el impacto de la fragmentação partidaria en la eficiencia del Congreso Nacional (1995–2020)",
    "research.facepeMeta": "PIBIC FACEPE / UFPE (2020–2022) &bull; Tutora: Profª. Dra. Mariana Batista da Silva",
    "research.facepeAbstract": "Investigación cuantitativa sobre la correlación entre fragmentación partidaria y la velocidad y aprobación de proyectos de ley en el Congreso brasileño.",
    "research.propesqTitle": "Campaña Fuera de Temporada: el impacto del comportamiento legislativo en el éxito electoral en Brasil (1995–2019)",
    "research.propesqMeta": "PIBIC Propesq / CNPq — UFPE (2019–2020) &bull; Tutora: Profª. Dra. Mariana Batista da Silva",
    "research.propesqAbstract": "Estudio empírico sobre la actuación parlamentaria continua y su impacto en la reelección en sistemas proporcionales.",
    "research.tccTitle": "Tesis de Licenciatura",
    "research.tccMeta": "Universidad Federal de Pernambuco (UFPE) &bull; Tutora: Profª. Dra. Mariana Batista da Silva",

    // Portfolio Page
    "portfolio.pageTitle": "Portafolio",
    "portfolio.pageSubtitle": "Proyectos prácticos, herramientas, textos y materiales docentes.",
    "portfolio.secAppsHeading": "Aplicaciones y Paneles",
    "portfolio.project1Title": "Em Quem Eu Voto (¿Por quién voto?)",
    "portfolio.project1Venue": "Septiembre de 2026 &bull; Aplicación Web",
    "portfolio.project1Desc": "Herramienta y guía interactiva desarrollada para orientar a los ciudadanos en la toma de decisión electoral en sistemas proporcionales, combinando viabilidad, alineación partidaria y desempeño parlamentario.",
    "portfolio.project1BtnSite": "[ Web App ]",
    "portfolio.project1BtnGithub": "[ GitHub ]",
    "portfolio.project1BtnArticle": "[ PDF ]",
    "portfolio.project2Title": "Tablero de Gasto Público",
    "portfolio.project2Venue": "Septiembre de 2022 &bull; Power BI",
    "portfolio.project2Desc": "Panel interactivo en Power BI para la visualización, monitoreo y análisis de ejecución presupuestaria y gastos públicos.",
    "portfolio.project2Btn": "[ Power BI ]",
    "portfolio.secWritingHeading": "Textos y Análisis",
    "portfolio.newsletterDesc": "<strong>Domínio Público</strong> — sobre políticas públicas, gobierno e instituciones.",
    "portfolio.btnSubstack": "Suscribirse en Substack &rarr;",
    "portfolio.art1Title": "Cómo elegir un candidato en las Elecciones de 2026",
    "portfolio.art1Venue": "Septiembre de 2026 &bull; Domínio Público",
    "portfolio.art1Desc": "Una guía práctica para emitir un voto informado en elecciones legislativas, analizando el sistema proporcional, umbrales y trayectoria de los candidatos.",
    "portfolio.art2Title": "¿Necesita Brasil un Ministerio de las Posibilidades?",
    "portfolio.art2Venue": "Agosto de 2026 &bull; Domínio Público",
    "portfolio.art2Desc": "Una reflexión sobre gobernanza pública, formulación estratégica a largo plazo, innovación institucional y prospectiva estatal en Brasil.",
    "portfolio.art3Title": "La competencia en la política",
    "portfolio.art3Venue": "Noviembre de 2020 &bull; Medium / C&P Política",
    "portfolio.art3Desc": "Un ensayo sobre la competencia política, mercados electorales y estrategias de campaña.",
    "portfolio.btnReadSubstack": "[ Substack ]",
    "portfolio.btnReadMedium": "[ Medium ]",
    "portfolio.secTeachingHeading": "Enseñanza",
    "portfolio.course1Title": "Taller: Análisis de Datos con Power BI",
    "portfolio.course1Venue": "UFPE &bull; Gestión de la Información (3.º período)",
    "portfolio.course1Desc": "Taller práctico dictado para estudiantes de 3.º período de Gestión de la Información de la Universidad Federal de Pernambuco (UFPE), abordando fundamentos de Power BI, modelado de datos, transformación con Power Query y visualización analítica.",
    "portfolio.course1Btn": "[ Slides ]",

    // CV Page
    "cv.pageTitle": "Currículum Vitae",
    "cv.pageSubtitle": "Formación académica, trayectoria profesional y competencias técnicas.",
    "cv.downloadPt": "&darr; Descargar CV en Portugués (PDF)",
    "cv.downloadEn": "&darr; Download CV in English (PDF)",
    "cv.secEdu": "Formación Académica",
    "cv.mscDegree": "Maestría en Administración",
    "cv.mscInst": "FGV/EBAPE — Línea: Instituciones, Política y Gobierno",
    "cv.baDegree": "Licenciatura en Ciencia Política",
    "cv.baInst": "Universidad Federal de Pernambuco (UFPE)",
    "cv.secExp": "Experiencia Profesional",
    "cv.expFundaj": "<strong>Asistente de Investigación</strong>, Fundación Joaquim Nabuco (FUNDAJ)",
    "cv.expEnap": "<strong>Investigador</strong> (Proyecto EvEx), Escuela Nacional de Administración Pública (Enap)",
    "cv.expHbs": "<strong>Asistente de Investigación</strong>, Harvard Business School (Profª. Paula Rettl)",
    "cv.expFgv": "<strong>Asistente de Investigación</strong>, FGV/EBAPE (Prof. Octavio Amorim Neto)",
    "cv.expRecife": "<strong>Analista de Datos</strong> (BI), SEPLAGTD — Alcaldía de Recife",
    "cv.expCp": "<strong>Cofundador</strong>, C&P Política",
    "cv.expVirtu": "<strong>Director de Marketing</strong>, Virtù Consultoria",
    "cv.secTraining": "Formación Complementaria",
    "cv.btnMoreCerts": "[ + Ver otras certificaciones y cursos ]",
    "cv.trGoogle": "<strong>Especialización en Gestión de Proyectos</strong> &mdash; Google Career Certificates (240h)",
    "cv.trSocialInnov": "<strong>Innovación Social para la Mejora de Políticas Públicas</strong> &mdash; ENAP (40h)",
    "cv.trScrum": "<strong>Scrum y Ágil en el Sector Público</strong> &mdash; Escuela Nacional de Administración Pública — ENAP (30h)",
    "cv.trPbi": "<strong>Microsoft Power BI para Data Science</strong> &mdash; Data Science Academy (72h)",
    "cv.trData": "<strong>Análisis de Datos como Apoyo a la Toma de Decisiones</strong> &mdash; ENAP (30h)",
    "cv.trImpact": "<strong>Evaluación de Impacto de Programas y Políticas Sociales</strong> &mdash; ENAP / J-PAL (36h)",
    "cv.trElectoral": "<strong>Sistemas Electorales: ¿Cómo las democracias eligen a sus gobernantes?</strong> &mdash; Escuela del Legislativo / ALEPE (4h)",
    "cv.trBudget": "<strong>Introducción al Presupuesto Público</strong> &mdash; Instituto Legislativo Brasileño / Senado Federal (40h)",
    "cv.trAi": "<strong>Jornada de Inteligencia Artificial</strong> &mdash; Hashtag Treinamentos",
    "cv.trCiti1": "<strong>Social and Behavioral Research Investigators</strong> &mdash; CITI Program",
    "cv.trCiti2": "<strong>Social and Behavioral Responsible Conduct of Research</strong> &mdash; CITI Program",
    "cv.trR": "<strong>Lenguaje R</strong> &mdash; Udemy",
    "cv.trElsevier": "<strong>1st Elsevier Finance Conference</strong> &mdash; FGV/EBAPE",
    "cv.trSql": "<strong>Intermediate SQL Series</strong> &mdash; DataCamp",
    "cv.trPbiDc": "<strong>Introduction to Power BI</strong> &mdash; DataCamp",
    "cv.trSemanaInov": "<strong>Semana de Innovación Pública 2022</strong> &mdash; ENAP",
    "cv.trToefl": "<strong>TOEFL iBT (Competencia en Inglés B2)</strong> &mdash; ETS",
    "cv.trAnpad": "<strong>Examen ANPAD</strong> &mdash; Asociación Nacional de Posgrado en Administración",
    "cv.secSkills": "Competencias Técnicas",
    "cv.skillsList": `
      <li><strong>Análisis de Datos:</strong> R, Stata, SPSS, Power BI, Modelado Causal</li>
      <li><strong>Métodos de Investigación:</strong> Encuestas de Opinión Pública, Evaluación de Impacto, Entrevistas Cualitativas</li>
      <li><strong>Gestión & Proyectos:</strong> Especialización en Gestión de Proyectos (Google Career Certificate), Metodologías Ágiles (Scrum)</li>
      <li><strong>Idiomas & Certificaciones:</strong> Inglés Avanzado (TOEFL B2), Certificación ANPAD</li>
    `
  }
};

// =============================================================================
// Language Management (PT / EN / ES)
// =============================================================================
let currentLang = localStorage.getItem("preferred_lang") || "pt";

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);

  // Set HTML lang attribute
  if (lang === "pt") document.documentElement.lang = "pt-BR";
  else if (lang === "en") document.documentElement.lang = "en";
  else if (lang === "es") document.documentElement.lang = "es";

  // Update Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Translate plain text elements
  document.querySelectorAll("[data-i18n]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  // Translate HTML elements (supports &bull;, &rarr;, <strong>, etc.)
  document.querySelectorAll("[data-i18n-html]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n-html");
    if (translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });
}

// =============================================================================
// Theme Management (Light as Default)
// =============================================================================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.setAttribute("title", theme === "dark" ? "Modo Claro" : "Modo Escuro");
    themeBtn.innerHTML = theme === "dark" ? "&#9788;" : "&#9789;";
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("preferred_theme", next);
}

function initTheme() {
  const saved = localStorage.getItem("preferred_theme");
  applyTheme(saved || "light");
}

// =============================================================================
// Abstract Toggle
// =============================================================================
window.toggleAbstract = function (id) {
  const elem = document.getElementById(id);
  if (elem) {
    elem.classList.toggle("open");
  }
};

// =============================================================================
// Initialization on Load
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get("lang");
  if (paramLang && translations[paramLang]) {
    currentLang = paramLang;
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  const themeBtn = document.getElementById("themeToggle");
  themeBtn?.addEventListener("click", toggleTheme);

  setLanguage(currentLang);
  initTheme();

  const yearElem = document.getElementById("footerYear");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
