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
      subtitle: 'Full Stack Developer',
      location: 'Rio de Janeiro, Brazil',
      cta_projects: 'View Projects',
      cta_contact: 'Contact',
      available: 'Available for opportunities',
    },
    about: {
      title: 'About Me',
      subtitle: 'Who I am',
      text: 'I am a dedicated and curious Full Stack Developer, working from frontend design and implementation to CI/CD pipelines, Kubernetes and AWS infrastructure. I work with Java on the backend and React/Next.js on the frontend, creating scalable, secure and well-structured applications. I focus on good practices, clean architecture, automation and efficient deliveries. I value quality code, team collaboration, and continuous learning as I advance my academic training in Computer Science.',
      stats: {
        experience: 'years of experience',
        students: 'students taught',
        employees: 'employees impacted',
        hours: 'saved/month with automation',
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey',
      present: 'Present',
      jobs: [
        {
          company: 'Tech4me',
          role: 'Programming Instructor & Full Stack Developer',
          period: 'Aug 2025 – Present',
          location: 'Teresópolis, RJ',
          bullets: [
            'Create complete programming courses using various languages and robotics tools (Arduino, Lego Mindstorms, intelligent robots)',
            'Develop web and desktop applications using HTML, CSS, JavaScript, React and Delphi',
            'Teach programming and robotics for all ages; organize an annual Hackathon with 15+ in-person, remote and international students',
            'Develop REST APIs with Java and Spring Boot + DevOps with Docker and docker-compose for Frontend course backend',
          ],
        },
        {
          company: 'HCTCO',
          role: 'Hospital System Assistant & Implementer',
          period: 'Feb 2024 – Aug 2025',
          location: 'Teresópolis, RJ',
          bullets: [
            'Contributed to the MV hospital system implementation, supporting 200+ employees',
            'Developed a Full Stack project (React, Java, PostgreSQL, Docker) to control locker room keys, reducing key losses by 75%',
            'Maintained database using Oracle SQL and assisted in MV system integration',
            'Built automations with Python, Pandas and Matplotlib for hospital waste spreadsheets, saving 10+ hours/month',
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
      subtitle: 'My open source work',
      view_github: 'View on GitHub',
      view_demo: 'Live Demo',
      stars: 'stars',
      forks: 'forks',
      loading: 'Loading projects...',
      error: 'Could not load projects. Visit my GitHub directly.',
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background',
      subjects: 'Key Subjects',
      schools: [
        {
          institution: 'Centro Universitário Serra dos Órgãos (UNIFESO)',
          degree: "Bachelor's Degree – Computer Science",
          period: '2025 – Expected 2029',
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
      subtitle: 'Desenvolvedor Full Stack',
      location: 'Rio de Janeiro, Brasil',
      cta_projects: 'Ver Projetos',
      cta_contact: 'Contato',
      available: 'Disponível para oportunidades',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Quem sou eu',
      text: 'Sou um Desenvolvedor Full Stack dedicado e curioso, atuando desde o design e implementação do frontend até pipelines CI/CD, Kubernetes e infraestrutura em AWS. Trabalho com Java no backend e React/Next.js no frontend, criando aplicações escaláveis, seguras e bem estruturadas. Tenho foco em boas práticas, arquitetura limpa, automação e entregas eficientes. Valorizo código de qualidade, colaboração em equipe e aprendizado contínuo, enquanto avanço na minha formação acadêmica em Ciência da Computação.',
      stats: {
        experience: 'anos de experiência',
        students: 'alunos ensinados',
        employees: 'funcionários impactados',
        hours: 'economizados/mês com automação',
      },
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha trajetória profissional',
      present: 'Presente',
      jobs: [
        {
          company: 'Tech4me',
          role: 'Instrutor de Programação & Desenvolvedor Full Stack',
          period: 'Ago 2025 – Presente',
          location: 'Teresópolis, RJ',
          bullets: [
            'Crio cursos completos de programação utilizando diversas linguagens e ferramentas de robótica como Arduino, Lego Mindstorms e robôs inteligentes',
            'Desenvolvo aplicações web e desktop com HTML, CSS, JavaScript, React e Delphi',
            'Aplico aulas de programação e robótica para todas as idades e realizo um Hackathon anual com mais de 15 alunos presenciais, remotos e internacionais',
            'Desenvolvo APIs REST com Java e Spring Boot + DevOps com Docker e docker-compose',
          ],
        },
        {
          company: 'HCTCO',
          role: 'Auxiliar e Implementador de Sistema Hospitalar',
          period: 'Fev 2024 – Ago 2025',
          location: 'Teresópolis, RJ',
          bullets: [
            'Contribuí na implementação e manutenção do sistema MV no hospital, auxiliando mais de 200 funcionários',
            'Desenvolvi projeto Full Stack com React, Java, PostgreSQL e Docker para controle de chaves de vestiário, reduzindo perdas em 75%',
            'Auxiliei na manutenção do banco de dados Oracle SQL e integração com o sistema MV',
            'Desenvolvi automações com Python, Pandas e Matplotlib para planilhas de resíduos hospitalares, economizando mais de 10 horas mensais',
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
      subtitle: 'Meu trabalho open source',
      view_github: 'Ver no GitHub',
      view_demo: 'Demo ao Vivo',
      stars: 'estrelas',
      forks: 'forks',
      loading: 'Carregando projetos...',
      error: 'Não foi possível carregar projetos. Visite meu GitHub diretamente.',
    },
    education: {
      title: 'Educação',
      subtitle: 'Minha formação acadêmica',
      subjects: 'Disciplinas Principais',
      schools: [
        {
          institution: 'Centro Universitário Serra dos Órgãos (UNIFESO)',
          degree: 'Bacharelado – Ciência da Computação',
          period: '2025 – Previsto 2029',
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
      copy_email: 'Copiar email',
      copied: 'Copiado!',
      footer_credit: 'Desenhado e desenvolvido por Arthur Granito',
    },
  },
}

export type Messages = typeof messages.en
