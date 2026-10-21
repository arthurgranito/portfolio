export type Locale = 'en' | 'pt'

export const messages = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      title: 'Arthur\nGranito.',
      subtitle: 'Full Stack Developer & AI Engineer',
      location: 'Rio de Janeiro, Brazil · Open to remote',
      cta_projects: 'View Projects',
      cta_contact: 'Contact',
      available: 'Available for opportunities',
    },
    about: {
      title: 'About Me',
      subtitle: 'Who I am',
      text: 'Full stack and AI developer shipping production systems since 2025, from design to deploy. As an AI Engineer at WSB Advisors, I put into production an assistant with text-to-SQL that went from 35% to 99% accuracy, measured by automated evaluation. I built a financial system for a retail chain on my own and created Seedash, a multi-agent platform that generates KPI dashboards through conversation. Main stack: Python (Django, FastAPI), Java (Spring Boot), React/TypeScript, PostgreSQL and Docker. Looking for a remote junior position in AI, backend or full stack.',
      highlights: ['WSB Advisors', 'text-to-SQL', '35% to 99%', 'Seedash', 'Python', 'Java', 'React/TypeScript', 'PostgreSQL', 'Docker'],
      stats: {
        experience: 'years shipping to production',
        accuracy: 'text-to-SQL accuracy (from 35%)',
        keys: 'fewer key losses at the hospital',
        hours: 'saved/month with automation',
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey',
      present: 'Present',
      jobs: [
        {
          company: 'WSB Advisors',
          role: 'AI Engineer & Full Stack Developer · WSB One / One Energy News',
          period: 'Sep 2026 – Present',
          location: 'Rio de Janeiro, RJ',
          bullets: [
            'Designed and shipped Windy, an AI assistant that answers in natural language (pt/en) over the WSB One database, an offshore market intelligence platform',
            'Raised text-to-SQL accuracy from 35% to 99% (138 of 139 cases), with no confidently wrong answers, measured by an automated evaluation framework that simulates real conversations',
            'Architected the LangGraph pipeline: intent classifier, history-aware question rewriting, a semantic layer on PostgreSQL and SQL validation (sqlglot) before execution',
            'Implemented subscription-based access control enforced in the SQL itself and JWT authentication integrated with Django; fixed a flaw that exposed conversations through the public API (RLS and read-only roles on Supabase)',
            'Built a RAG with source citations over the One Energy News archive and the portal\'s React Native mobile app, with the AI built in',
          ],
        },
        {
          company: 'Pró Abelha',
          role: 'Full Stack Developer (freelance project)',
          period: 'May 2026 – Jul 2026',
          location: 'Teresópolis, RJ',
          bullets: [
            'Built on my own, from design to production deploy, a financial management system for a retail chain, replacing a manual workflow in Google Forms, Sheets and n8n',
            'Backend in Java 21, Spring Boot 3.5 and PostgreSQL with Docker on a VPS (nginx + SSL); frontend in React + TypeScript deployed on Vercel as an installable PWA',
            'Delivered a token-based public form with QR Code and autosave, a KPI dashboard, user management and multi-tab Excel export',
          ],
        },
        {
          company: 'Tech4me',
          role: 'Full Stack Developer',
          period: 'Aug 2025 – Feb 2026',
          location: 'Teresópolis, RJ',
          bullets: [
            'Developed REST APIs in Java/Spring Boot with Docker and web and desktop applications used in production by the school',
          ],
        },
        {
          company: 'HCTCO',
          role: 'Hospital System Assistant · Hospital das Clínicas de Teresópolis',
          period: 'Feb 2025 – Aug 2025',
          location: 'Teresópolis, RJ',
          bullets: [
            'Developed a key control system (React, Java, PostgreSQL, Docker) that reduced key losses by 75%',
            'Automated hospital waste spreadsheets with Python and Pandas, saving the team 10+ hours per month',
          ],
        },
        {
          company: 'Tech4me',
          role: 'Programming Instructor (part-time)',
          period: 'Aug 2025 – Present',
          location: 'Teresópolis, RJ · weekly classes',
          bullets: [
            'Teach Java, JavaScript and React courses and organize an annual hackathon with 15+ participants, including international ones',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies I work with',
    },
    projects: {
      title: 'Projects',
      subtitle: 'What I have built',
      view_github: 'View on GitHub',
      view_demo: 'Live Demo',
      stack: 'Stack',
      items: {
        seedash: {
          tagline: 'KPI dashboards generated through conversation',
          description: 'A small business owner describes in plain language what they want to track, and the AI generates a dashboard with KPIs, charts and filters that they refine by chatting.',
          bullets: [
            'Multi-agent pipeline in LangGraph with 6 agents, an interview that pauses and resumes (interrupt) and structured output validated with Pydantic',
            'Semantic catalog of the customer\'s database: PostgreSQL schema enriched by AI with Portuguese aliases, linking the user\'s vocabulary to the right table, with read-only queries and timeouts',
            'Patch-based refinement without regenerating the dashboard, and sharing with access control via RLS on Supabase',
          ],
        },
        devtoclient: {
          tagline: 'Work delivery and approval between developers and clients',
          description: 'SaaS in production that centralizes the delivery and approval of work between developers and their clients.',
          bullets: [
            'Backend in Java 21 and Spring Boot, with authentication via Spring Security and JWT and data stored in MongoDB',
            'Frontend in React + TypeScript, with the application containerized with Docker and running on AWS',
          ],
        },
      },
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background',
      subjects: 'Key Subjects',
      schools: [
        {
          institution: 'Centro Universitário Serra dos Órgãos (UNIFESO)',
          degree: "Bachelor's Degree – Computer Science",
          period: '2025 – Expected 2029 · 4th semester, evening',
          location: 'Teresópolis, RJ',
          subjects: ['Programming Logic', 'Algorithms & Data Structures', 'OOP', 'Computer Networks', 'Information Security', 'Cloud Computing', 'Computer Architecture', 'Artificial Intelligence'],
        },
        {
          institution: 'Tech4me, Escola de Tecnologia e Inovação',
          degree: 'Technical Course – Frontend Development',
          period: 'Feb 2024 – Dec 2024',
          location: 'Teresópolis, RJ',
          subjects: ['SOLID', 'HTML/CSS/JS', 'React', 'SPA', 'UI/UX', 'Git', 'Styled Components', 'APIs', 'Tailwind', 'Bootstrap', 'Mobile First'],
        },
      ],
    },
    contact: {
      title: "Let's work together.",
      subtitle: 'Get in touch',
      email_label: 'Send me an email',
      github_label: 'Check my GitHub',
      linkedin_label: 'Connect on LinkedIn',
      copy_email: 'Copy email',
      copied: 'Copied!',
      footer_credit: 'Designed & built by Arthur Granito',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      education: 'Educação',
      contact: 'Contato',
    },
    hero: {
      title: 'Arthur\nGranito.',
      subtitle: 'Desenvolvedor Full Stack & Engenheiro de IA',
      location: 'Rio de Janeiro, Brasil · Disponível para remoto',
      cta_projects: 'Ver Projetos',
      cta_contact: 'Contato',
      available: 'Disponível para oportunidades',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Quem sou eu',
      text: 'Desenvolvedor full stack e de IA que entrega sistemas em produção desde 2025, do design ao deploy. Como Engenheiro de IA na WSB Advisors, coloquei em produção um assistente com text-to-SQL que saiu de 35% para 99% de acurácia, medida por avaliação automatizada. Já desenvolvi sozinho um sistema financeiro para rede de lojas e criei o Seedash, plataforma multiagente que gera painéis de indicadores por conversa. Stack principal: Python (Django, FastAPI), Java (Spring Boot), React/TypeScript, PostgreSQL e Docker. Busco posição júnior remota em IA, backend ou full stack.',
      highlights: ['WSB Advisors', 'text-to-SQL', '35% para 99%', 'Seedash', 'Python', 'Java', 'React/TypeScript', 'PostgreSQL', 'Docker'],
      stats: {
        experience: 'anos entregando em produção',
        accuracy: 'de acurácia no text-to-SQL (era 35%)',
        keys: 'menos perdas de chaves no hospital',
        hours: 'economizadas/mês com automação',
      },
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha trajetória profissional',
      present: 'Presente',
      jobs: [
        {
          company: 'WSB Advisors',
          role: 'Engenheiro de IA & Desenvolvedor Full Stack · WSB One / One Energy News',
          period: 'Set 2026 – Presente',
          location: 'Rio de Janeiro, RJ',
          bullets: [
            'Projetei e coloquei em produção a Windy, assistente de IA que responde em linguagem natural (pt/en) sobre a base da WSB One, plataforma de inteligência de mercado offshore',
            'Elevei a acurácia do text-to-SQL de 35% para 99% (138 de 139 casos), sem respostas erradas afirmadas com confiança, medida por um framework de avaliação automatizada que simula conversas reais',
            'Arquitetei o pipeline em LangGraph: classificador de intenção, reescrita de perguntas com histórico, camada semântica no PostgreSQL e validação de SQL (sqlglot) antes da execução',
            'Implementei controle de acesso por assinatura aplicado no próprio SQL e autenticação JWT integrada ao Django; corrigi uma falha que expunha conversas pela API pública (RLS e roles somente leitura no Supabase)',
            'Construí um RAG com citação de fontes sobre o acervo do One Energy News e o app mobile do portal em React Native, com a IA integrada',
          ],
        },
        {
          company: 'Pró Abelha',
          role: 'Desenvolvedor Full Stack (projeto freelance, PJ)',
          period: 'Mai 2026 – Jul 2026',
          location: 'Teresópolis, RJ',
          bullets: [
            'Desenvolvi sozinho, do design ao deploy em produção, um sistema de gestão financeira para rede de lojas, substituindo um fluxo manual em Google Forms, Sheets e n8n',
            'Backend em Java 21, Spring Boot 3.5 e PostgreSQL com Docker em VPS (nginx + SSL); frontend em React + TypeScript publicado na Vercel como PWA instalável',
            'Entreguei formulário público por token com QR Code e autosave, dashboard de KPIs, gestão de usuários e exportação Excel multi-abas',
          ],
        },
        {
          company: 'Tech4me',
          role: 'Desenvolvedor Full Stack',
          period: 'Ago 2025 – Fev 2026',
          location: 'Teresópolis, RJ',
          bullets: [
            'Desenvolvi APIs REST em Java/Spring Boot com Docker e aplicações web e desktop usadas em produção pela escola',
          ],
        },
        {
          company: 'HCTCO',
          role: 'Auxiliar de Sistema Hospitalar · Hospital das Clínicas de Teresópolis',
          period: 'Fev 2025 – Ago 2025',
          location: 'Teresópolis, RJ',
          bullets: [
            'Desenvolvi um sistema de controle de chaves (React, Java, PostgreSQL, Docker) que reduziu as perdas de chaves em 75%',
            'Automatizei planilhas de resíduos hospitalares com Python e Pandas, poupando 10+ horas por mês da equipe',
          ],
        },
        {
          company: 'Tech4me',
          role: 'Instrutor de Programação (PJ, meio período)',
          period: 'Ago 2025 – Presente',
          location: 'Teresópolis, RJ · aulas semanais',
          bullets: [
            'Ministro cursos de Java, JavaScript e React e organizo um hackathon anual com 15+ participantes, incluindo internacionais',
          ],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologias com que trabalho',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'O que eu construí',
      view_github: 'Ver no GitHub',
      view_demo: 'Demo ao Vivo',
      stack: 'Stack',
      items: {
        seedash: {
          tagline: 'Painéis de indicadores gerados por conversa',
          description: 'O dono de um pequeno negócio descreve em português o que quer acompanhar, e a IA gera um painel com KPIs, gráficos e filtros que ele refina conversando.',
          bullets: [
            'Pipeline multiagente em LangGraph com 6 agentes, entrevista que pausa e retoma (interrupt) e saída estruturada validada com Pydantic',
            'Catálogo semântico do banco do cliente: schema do PostgreSQL enriquecido por IA com apelidos em português, ligando o vocabulário do usuário à tabela certa, com consultas somente leitura e tempo limite',
            'Refinamento por patch, sem regerar o painel, e compartilhamento com controle de acesso via RLS no Supabase',
          ],
        },
        devtoclient: {
          tagline: 'Entrega e aprovação de trabalhos entre devs e clientes',
          description: 'SaaS em produção que centraliza a entrega e a aprovação de trabalhos entre desenvolvedores e clientes.',
          bullets: [
            'Backend em Java 21 e Spring Boot, com autenticação via Spring Security e JWT e dados no MongoDB',
            'Frontend em React + TypeScript, com a aplicação containerizada em Docker e rodando na AWS',
          ],
        },
      },
    },
    education: {
      title: 'Educação',
      subtitle: 'Minha formação acadêmica',
      subjects: 'Disciplinas Principais',
      schools: [
        {
          institution: 'Centro Universitário Serra dos Órgãos (UNIFESO)',
          degree: 'Bacharelado – Ciência da Computação',
          period: '2025 – Previsão 2029 · 4º período, noturno',
          location: 'Teresópolis, RJ',
          subjects: ['Lógica de Programação', 'Algoritmos e Estruturas de Dados', 'POO', 'Redes de Computadores', 'Segurança da Informação', 'Computação em Nuvem', 'Arquitetura de Computadores', 'Inteligência Artificial'],
        },
        {
          institution: 'Tech4me, Escola de Tecnologia e Inovação',
          degree: 'Curso Técnico – Desenvolvimento Frontend',
          period: 'Fev 2024 – Dez 2024',
          location: 'Teresópolis, RJ',
          subjects: ['SOLID', 'HTML/CSS/JS', 'React', 'SPA', 'UI/UX', 'Git', 'Styled Components', 'APIs', 'Tailwind', 'Bootstrap', 'Mobile First'],
        },
      ],
    },
    contact: {
      title: 'Vamos trabalhar juntos.',
      subtitle: 'Entre em contato',
      email_label: 'Me envie um email',
      github_label: 'Veja meu GitHub',
      linkedin_label: 'Conecte-se no LinkedIn',
      copy_email: 'Copiar email',
      copied: 'Copiado!',
      footer_credit: 'Desenhado e desenvolvido por Arthur Granito',
    },
  },
}

export type Messages = typeof messages.en
