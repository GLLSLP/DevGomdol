module.exports = {
  title: `π―κ°λ°νλ κ³°λμ΄π»`,
  description: `κ³°λμ΄μ κ°λ°μΌκΈ°`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `κ³°λ`,
    bio: {
      role: `κ°λ°μ`,
      description: ['μ¬λμ κ°μΉλ₯Ό λλ', 'λ₯λμ μΌλ‘ μΌνλ', 'μ΄λ‘μ΄ κ²μ λ§λλ'],
      thumbnail: 'welcome.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== π« Don't erase this sample (μ¬κΈ° μ§μ°μ§ λ§μΈμ!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.01 ~',
        activity: 'λΈλ‘κ·Έ κ°λ°νλ κ³°λμ΄ κ°μ€',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/GLLSLP/DevGomdol',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== π« Don't erase this sample (μ¬κΈ° μ§μ°μ§ λ§μΈμ!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'κ°λ° λΈλ‘κ·Έ νλ§ κ°λ°',
        description:
          'κ°λ° λΈλ‘κ·Έλ₯Ό μ΄μνλ κΈ°κ°μ΄ μ‘°κΈμ© λμ΄λκ³  μ μ  λ§μ μκ°κ³Ό κ²½νμ΄ λΈλ‘κ·Έμ μμκ°λ©΄μ μ  μ΄μΌκΈ°λ₯Ό λ΄κ³  μλ λΈλ‘κ·Έλ₯Ό μ§μ  λ§λ€μ΄λ³΄κ³  μΆκ² λμμ΅λλ€. κ·Έλμ μ¬λ¬ κ°λ° λΈλ‘κ·Έλ₯Ό λ³΄λ©΄μ μ’μλ λΆλΆκ³Ό λΆνΈνλ λΆλΆλ€μ λ°νμΌλ‘ λ νΌλ°μ€λ₯Ό μ°Έκ³ νμ¬ μ§μ  λΈλ‘κ·Έ νλ§λ₯Ό λ§λ€κ² λμμ΅λλ€.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
