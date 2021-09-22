<<<<<<< HEAD
import ru from '~docus-i18n/ru-RU'

export default {
  ...ru,
  common: {
    an_error_occurred: 'Произошла ошибка',
    page_not_found: 'Страница не найдена',
    please_define_title: 'Please define a title in the front matter',
    please_define_description: 'Please define a description in the front matter',
    search: 'Поиск ("/" - фокус)',
    version: 'Версия'
  },
  iso: 'ru',

  links: {
    download: 'Скачать',
    live_edit: 'Пробовать вживую'
=======
module.exports = {
  common: {
    an_error_occurred: 'An error occurred',
    api_page_not_found: 'API page not found',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Поиск ("/" to focus)',
    version: 'Версия'
  },
  iso: 'en',

  links: {
    download: 'Download',
    live_edit: 'Live Edit'
>>>>>>> 26a70b2b (chore: add guides section (#407))
  },
  header: {
    links: [
      {
<<<<<<< HEAD
        name: 'Руководства',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'Примеры',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'Resources',
        icon: 'resources',
        slug: 'resources'
      },
      {
        name: 'Блог',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Видео курсы',
        icon: 'video',
        href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
      }
    ],
    search: {
      placeholder: 'Поиск ("/" - фокус)'
=======
        name: 'Guides',
        slug: 'guides',
        type: 'newDocs',
        routeName: 'guides-book-slug'
      },
      {
        name: 'Guide',
        slug: 'guide',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'API',
        slug: 'api',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Examples',
        slug: 'examples',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'FAQ',
        slug: 'faq',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Resources',
        slug: 'resources',
        type: 'static'
      },
      {
        name: 'Blog',
        slug: 'blog',
        type: 'static'
      }
    ],
    search: {
      placeholder: 'Search ("/" to focus)'
>>>>>>> 26a70b2b (chore: add guides section (#407))
    }
  },
  homepage: {
    meta: {
<<<<<<< HEAD
      title: 'Nuxt — Универсальные приложения на Vue.js',
      description:
        'Nuxt — это минималистичный фреймворк для создания приложений на Vue.js с серверным рендерингом, разделением кода, горячей заменой модулей, статической генерацией и другими крутыми штуками!'
    },
    welcome: {
      title: 'Интуитивно понятный {br} {frameworkType} фреймворк',
      description:
        'Постройте ваше следующее Vue.js приложение с простотой и уверенностью, используя Nuxt. {openSource} фреймворк который делает разработку простой и мощной.',
      openSource: 'Open source',
      get_started: 'начало работы',
      get_updates: 'Получайте новости о Nuxt на почту каждый месяц.',
      video: 'Видео создано команией {company}, скачайте их шпаргалку {cheatSheet}',
      cheatSheet: 'Шпаргалка Nuxt.'
    },
    why: {
      title: 'Почему {nuxt}',
      try_nuxtjs_online: 'Попробуйте Nuxt онлайн',
      enjoyable: {
        title: 'Приятный',
        description:
          'Наша главная цель - удобство разработки. Мы любим Nuxt и постоянно улучшаем его, надеемся, вы тоже его полюбите.{break} В вашим услугам отличная документация, информативные описания ошибок, сбалансированные настройки по умолчанию и прочие интересные решения. А если у вас возникнут вопросы или проблемы, наше дружелюбное сообщество всегда готово помочь.'
=======
      title: 'Nuxt.js — Универсальные приложения на Vue.js',
      description:
        'Nuxt.js — это минималистичный фреймворк для создания приложений на Vue.js с серверным рендерингом, разделением кода, горячей заменой модулей, статической генерацией и другими крутыми штуками!'
    },
    welcome: {
      title: 'The Intuitive {break}{frameworkType} Framework',
      description:
        'Build your next Vue.js application with confidence using NuxtJS. An {openSource} framework making web development simple and powerful.',
      openSource: 'open source',
      get_started: 'начало работы',
      get_updates: 'Get NuxtJS updates to your inbox each month',
      video: 'Video produced by {company}, download their free {cheatSheet}',
      cheatSheet: 'Nuxt Cheat Sheet.'
    },
    why: {
      title: 'Почему {nuxt}',
      try_nuxtjs_online: 'Попробуйте NuxtJS онлайн',
      enjoyable: {
        title: 'Приятный',
        description:
          'Наша главная цель - удобство разработки. Мы любим Nuxt.js и постоянно улучшаем его, надеемся, вы тоже его полюбите.{break} В вашим услугам отличная документация, информативные описания ошибок, сбалансированные настройки по умолчанию и прочие интересные решения. А если у вас возникнут вопросы или проблемы, наше дружелюбное сообщество всегда готово помочь.'
>>>>>>> 26a70b2b (chore: add guides section (#407))
      },
      modular: {
        title: 'Модульный',
        description:
          'Nuxt разработан на основе мощной модульной архитектуры. Более 50 разнообразных модулей сделают разработку проще и быстрее. Вам не придется изобретать велосипед, чтобы прикрутить PWA-фичи, Google Analytics, генерацию sitemap и многие другие типовые вещи.'
      },
      performant: {
        title: 'Быстрый',
        description:
<<<<<<< HEAD
          'Nuxt оптимизирует ваше приложение сразу из коробки. Мы постоянно работаем над повышением производительности приложений, используя наработки Vue.js и Node.js. Чтобы выжать максимум из вашего приложения в Nuxt влючен анализатор бандлов и множество возможностей для тонкой настройки приложения.'
=======
          'Nuxt.js оптимизирует ваше приложение сразу из коробки. Мы постоянно работаем над повышением производительности приложений, используя наработки Vue.js и Node.js. Чтобы выжать максимум из вашего приложения в Nuxt влючен анализатор бандлов и множество возможностей для тонкой настройки приложения.'
>>>>>>> 26a70b2b (chore: add guides section (#407))
      }
    },
    companies: {
      title: 'Кто использует {nuxt}'
    },
    modes: {
      title: '{nuxt} Рендеринг',
      ssr: {
<<<<<<< HEAD
        title: 'Рендеринг на сервере (SSR)',
        description:
          'Наиболее популярный режим в Nuxt. В режиме SSR, также именуемом "универсальный" или "изоморфный", сервер Node.js будет рендерить HTML перед отправкой на клиент на основе ваших Vue компонентов, вместо отрисовки на чистом javascript. Использование режима SSR улучшает работу с SEO, UX и даёт множество других возможностей (в сравнении с традиционным SPA клиентом на Vue). Самостоятельная реализация рендеринга на сервере может стать утомительной задачей, поэтому Nuxt предоставляет её полную поддержку из коробки и обходит многие подводные камни.'
      },
      ssg: {
        title: 'Статическая генерация',
        description:
          'Генерация статических сайтов (JAMStack) - очень горячая тема на сегодняшний день. Вместо того, чтобы сменить фреймворк и потратить время на его изучение, почему не убить двух зайцев одновременно? (как гласит поговорка о 🐇🐇). Nuxt позволяет сгенерировать статический сайт на основании вашего Vue-приложения. Получаем идеальное сочетание: вам больше не нужен сервер, однако будет работать SEO, так как Nuxt создаст все необходимые страницы заранее. Также, вы сможете без проблем опубликовать ваш проект на Netlify или GitHub pages.',
=======
        title: 'Server Side Rendered',
        description:
          'The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).{break}Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.'
      },
      spa: {
        title: 'Single Page Application (SPA)',
        description:
          "Don't need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides? Are you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will likely be your choice. The outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the framework itself."
      },
      ssg: {
        title: 'Statically Generated',
        description:
          'Static Site Generation is a very hot topic right now (aka JAMStack). Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? {proverbial} Nuxt.js supports generating a static website based on your Vue application. It is the "best of both worlds" as you don\'t need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.',
>>>>>>> 26a70b2b (chore: add guides section (#407))
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'Спонсоры',
      description:
<<<<<<< HEAD
        'Nuxt - это проект с открытым исходным кодом, лицензированный MIT и полностью бесплатный для использования. Тем не менее, объем усилий, необходимых для поддержания и разработки новых функций для проекта, не является устойчивым без надлежащей финансовой поддержки. Если вы управляете бизнесом и используете Nuxt в продукте, приносящем доход, имеет смысл спонсировать разработку Nuxt: это гарантирует, что проект, на который опирается ваш продукт, остается здоровым и активно поддерживается. Это также может помочь вам разобраться в сообществе Vue/Nuxt и упростить привлечение разработчиков Vue/Nuxt. Если вы являетесь индивидуальным пользователем и наслаждались продуктивностью использования Nuxt, рассмотрите возможность пожертвования в знак признательности.',
      become_a_sponsor: 'Стань спонсором'
    },
    newsletter: {
      title: '{nuxt} Рассылка',
      description: 'Получай на почту последние новости, отобранные командой Nuxt.',
      form: {
        email: 'Email',
        subscribing: 'Подписываем...',
        subscribe: 'Подписаться',
        subscribed_messages: {
          pre: 'Письмо для подтверждения подписки было отправлено на',
=======
        'NuxtJS - это проект с открытым исходным кодом, лицензированный MIT и полностью бесплатный для использования. Тем не менее, объем усилий, необходимых для поддержания и разработки новых функций для проекта, не является устойчивым без надлежащей финансовой поддержки. Если вы управляете бизнесом и используете Nuxt в продукте, приносящем доход, имеет смысл спонсировать разработку Nuxt: это гарантирует, что проект, на который опирается ваш продукт, остается здоровым и активно поддерживается. Это также может помочь вам разобраться в сообществе Vue/Nuxt и упростить привлечение разработчиков Vue/Nuxt. Если вы являетесь индивидуальным пользователем и наслаждались продуктивностью использования Nuxt, рассмотрите возможность пожертвования в знак признательности.',
      become_a_sponsor: 'Стань спонсором'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        'Get the latest Nuxt news to your inbox, curated by the NuxtJS team.',
      form: {
        email: 'Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
        subscribed_messages: {
          pre: 'An email to confirm your subscription has been sent to',
>>>>>>> 26a70b2b (chore: add guides section (#407))
          post: '💚'
        }
      }
    }
  },
<<<<<<< HEAD
  design: {
    meta: {
      title: 'Nuxt Дизайн',
      description: 'Скачайте дизайнерские файлы Nuxt (SVG, иконки, emoji и favicon).'
    },
    title: '{nuxt} Дизайн',
    description:
      'Nuxt - это проект с открытым исходным кодом, лицензированный MIT и полностью бесплатен для использования. {break} Вы можете свободно использовать наши логотипы пока они ссылаются на nuxtjs.org.',
    other_download_message: 'Вы также можете скачать {favicon} или {sketch} файл.'
  },
  resources: {
    meta: {
      title: 'Ресурсы Nuxt',
      description:
        'Ознакомьтесь с набором ресурсов сделанных нашими партнерами. Используя эти партнерские ссылки, вы поддерживаете разработку и сопровождение этого фреймворка с открытым исходным кодом.'
    },
    title: '{nuxt} Resources',
    description:
      'Ознакомьтесь с набором ресурсов сделанных нашими партнерами. Используя эти партнерские ссылки, вы поддерживаете разработку и сопровождение этого фреймворка с открытым исходным кодом',
    themes: {
      title: 'Темы'
    },
    videos: {
      title: 'Видео курсы'
    }
  },
  shop: {
    meta: {
      title: 'Магазин Nuxt',
      description:
        'Хотите поддержать проект Nuxt и выразить благодарность его сообществу? Вот наши продукты наилучшего качества!'
    },
    title: 'Магазин {nuxt}',
    description:
      'Хотите поддержать проект Nuxt и выразить благодарность его сообществу?{break} Вот наши продукты наилучшего качества!',
    button: 'Скоро'
  },
  team: {
    meta: {
      title: 'Команда Nuxt',
      description:
        'У проекта Nuxt очень активная и сплоченная команда, которая постоянно стремится развивать его дальше.'
    },
    title: 'Команда {nuxt}',
    description:
      'Команда разработки Nuxt и его экосистемы является международной. У проекта Nuxt очень активная и сплоченная команда, которая постоянно стремится развивать его дальше.'
  },
  themes: {
    meta: {
      title: 'Темы Nuxt',
      description:
        'Со следующими темами оформления, разработанными нашими партнерами из Creative Tim и Theme Forest, вы можете увидеть как строится настоящее приложение основанное на Nuxt.'
    },
    title: '{nuxt} Themes',
    description:
      'Со следующими темами оформления, разработанными нашими партнерами из Creative Tim и Theme Forest, вы можете увидеть как строится настоящее приложение основанное на Nuxt.',
    button: 'КУПИТЬ за'
  },
  'video-courses': {
    meta: {
      title: 'Видео курсы Nuxt',
      description:
        'С этими видео курсами, созданными нашим партнером VueSchool, вы можете узнать больше о фреймворке Nuxt.'
    },
    title: 'Видео курсы {nuxt}',
    description:
      'С этими видео курсами, созданными нашим партнером VueSchool, вы можете узнать больше о фреймворке Nuxt.',
    cta: {
      discover: 'Изучить vueschool',
      start: 'НАЧАТЬ КУРС'
    }
  },
  sponsor: {
    meta: {
      title: 'Спонсировать разработку Nuxt',
      description:
        'Вы можете поддержать разработку Nuxt разными способами, чтобы обеспечить регулярные обновления фреймворка.'
    },
    title: 'Спонсировать разработку {nuxt}',
    description:
      'Nuxt - это проект с открытым исходным кодом, лицензированный MIT и полностью бесплатный для использования.{break} Тем не менее, объем затрат необходимый для поддержания и разработки новых функций, не полностью покрывается нашим финансированием. {break} Вы можете поддержать разработку Nuxt следующими способами:',
    donations: {
      title: 'Одноразовые пожертвования',
      description: 'Мы принимаем донаты таким способом'
    },
    pledges: {
      title: 'Периодические пожертвования',
      description:
        'Периодические пожертвования дают взамен эксклюзивные привелегии, например, вывод вашего имени в репозитории Nuxt на GitHub, или вывод логотипа вашей компании на этом сайте. Станьте спонсором через {opencollective} (средства идут в фонд с прозрачными моделями расходов, которые поддерживают сообщество и события).'
    },
    become_a_sponsor: 'Стать спонсором'
  },
  support: {
    meta: {
      title: 'Поддержка Nuxt',
      description: 'Наша команда Nuxt предлагает официальный консалтинг для ваших Nuxt проектов.'
    },
    title: 'Консалтинг поддержка {nuxt}',
    description:
      'Наша {team} предлагает официальный консалтинг для ваших Nuxt проектов.{break} Мы предлагаем разные услуги в зависимости от ваших потребностей: от техподдержки до разработки новых решений. Ожидайте ответа в течении одного рабочего дня. Мы можем подписать NDA и вы получите полный возврат среств если наши услуги будут неудовлетворительными.',
    technical: {
      title: 'Техподдержка',
      description: 'Получите аудиты, развертывание, разработку и поддержку вашего проекта от команды Nuxt.',
      start: 'Начать чат (англ.)',
      partner: {
        pre: 'Мы договорились с',
        post: 'чтобы иметь возможность предоставлять эти услуги как можно быстрее.'
      }
    },
    entreprise: {
      title: 'для корпораций',
      description:
        'Nuxt и разработчики тысяч других пакетов работают с Tidelift, чтобы предоставить одну корпоративную подписку, которая покрывает все открытое ПО которым вы пользуетесь.{break} Если вы хотите гибкость открытого ПО и надежность коммерческого ПО, это для вас.',
      partner: {
        pre: 'Доступно как часть',
        post: 'подписки.'
      },
      learn_more: 'Узнать больше',
      request_a_demo: 'Запросить демо'
    }
  },
  blog: {
    meta: {
      title: 'Блог Nuxt',
      description: 'Изучите статьи от команды и сообщества Nuxt, включая подсказки и хитрости!'
    },
    title: 'Блог {nuxt}',
    description: 'Изучите статьи от {nuxtTeam} и {nuxtCommunity} Nuxt, включая подсказки и хитрости!',
    nuxt_team: 'команды',
    nuxt_community: 'сообщества',
    contribute: 'Нашли ошибку или хотите дополнить этот пост?'
  },
  guide: {
    release_notes: 'Замечания о релизе',
    toc_title: 'Содержание'
  },
  quiz: {
    title: 'Опрос'
  },
  tryNewDocs: {
    msg1: 'Хотите взглянуть на нашу новую документацию? Наша ',
    link: 'новая документация',
    msg2: 'в бета-версии. Развлекайтесь!'
  },
  contribute: {
    title: 'Авторы',
    docs: 'Обнаружили ошибку или хотите внести свой вклад в документацию?',
    blog: 'Нашли ошибку или хотите дополнить этот пост?',
    edit_on_github: 'Отредактировать эту страницу на GitHub!',
    msg1: 'Изменения на этой странице заблокированы. Если хотите что-то изменить, взгляните на нашу',
    link: 'новую документацию'
  },
  example: {
    intro: 'In this example:'
  },
  codeSandbox: {
    open: 'Открыть CodeSandbox'
=======
  blog: {
    title: 'NuxtJS Blog',
    description:
      'Discover articles from the {nuxtTeam} and {ambassadors} about NuxtJS, tips and tricks included!',
    ambassadors: 'ambassadors',
    contribute: 'Caught a mistake or want to contribute to this blog post?'
  },
  guide: {
    release_notes: 'Замечания о релизе',
    toc_title: 'On this page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: 'Want to take a look at our new docs? Our ',
    link: 'new docs',
    msg2: 'are now in beta. Have fun!'
  },
  contribute: {
    title: 'Contributors',
    docs: 'Обнаружили ошибку или хотите внести свой вклад в документацию?',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'Отредактировать эту страницу на GitHub!',
    msg1:
      'Contribution for this page is now closed. If you would like to contribute please check out our',
    link: 'new docs'
  },
  codeSandbox: {
    open: 'Open CodeSandbox'
>>>>>>> 26a70b2b (chore: add guides section (#407))
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Getting Started'
    },
    api: {
<<<<<<< HEAD
      essential: 'Основы',
      pages: 'Страницы',
      components: 'Компоненты',
      utils: 'Утилиты',
      configuration: 'Конфигурация',
      programmatically: 'Программно',
      internals: 'Внутренности'
    },
    examples: {
      essentials: 'Основы',
      customization: 'Персонализация',
      advanced: 'Продвинутые'
    },
    faq: {
      configuration: 'Конфигурация',
      development: 'Разработка',
      deployment: 'Развертывание'
    },
    guides: {
      'get-started': 'Начало',
      concepts: 'Концепции',
      features: 'Функции',
      'directory-structure': 'Структура директорий',
      'configuration-glossary': 'Конфигурация',
      'internals-glossary': 'Внутренности',
      'components-glossary': 'Компоненты'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'Discover',
        shop: 'Our Goodies Store',
        consulting: 'Training & consultancy',
        sponsorNuxt: 'Sponsoring & donations'
      },
      about: {
        title: 'About',
        team: 'Our team',
        design: 'Design kit',
        contact: 'Contact us'
      },
      support: {
        title: 'Support',
        resources: 'Resources',
        discord: 'Chat with us',
        contributionGuide: 'Contribution guide'
      }
    }
  },
  cookies: {
    consent: 'Мы используем файлы Cookies для аналитики!',
    linkLabel: 'Узнать больше о Cookies',
    button: 'Понятно'
=======
      essential: 'Essential',
      pages: 'Pages',
      components: 'Components',
      utils: 'Utils',
      configuration: 'Configuration',
      programmatically: 'Programmatically',
      internals: 'Internals'
    },
    examples: {
      essentials: 'Essentials',
      customization: 'Customization',
      advanced: 'Advanced'
    },
    faq: {
      configuration: 'Configuration',
      development: 'Development',
      deployment: 'Deployment'
    },
    guides: {
      'get-started': 'Get Started',
      concepts: 'Concepts',
      features: 'Features',
      'directory-structure': 'Directory Structure',
      'configuration-glossary': 'Configuration Glossary',
      'internals-glossary': 'Internals Glossary',
      'components-glossary': 'Components Glossary'
    }
>>>>>>> 26a70b2b (chore: add guides section (#407))
  }
}
