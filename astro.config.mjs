import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zenforge.studio',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: {
        es: 'Zenforge Wiki',
        en: 'Zenforge Wiki',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      description: 'Documentación oficial de Zenforge Studio',
      favicon: '/logo.svg',
      logo: {
        src: '/public/logo.svg',
      },
      customCss: [
        './src/styles/global.css',
      ],
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/ZenForge-Studios',
        },
        {
          label: 'Discord',
          icon: 'discord',
          href: 'https://discord.gg/3UsDs72qMd',
        },
      ],
      defaultLocale: 'en',
      locales: {
        es: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/ZenForge-Studios/official-wiki-zenforge',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Introducción',
          translations: {
            en: 'Introduction',
          },
          items: [
            { 
              label: 'Qué es Zenforge Studio',
              translations: {
                en: 'What is Zenforge Studio',
              },
              link: '/introduccion/que-es-zenforge/',
            },
          ],
        },
        {
          label: 'Plugins',
          items: [
            { 
              label: 'Empezando',
              translations: {
                en: 'Getting Started',
              },
              link: '/plugins/inicio/',
            },
            {
              label: 'ZenRewards',
              collapsed: true,
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenrewards/introduccion',
                },
                { 
                  label: 'Instalación',
                  translations: {
                    en: 'Installation',
                  },
                  slug: 'plugins/zenrewards/instalacion',
                },
                { 
                  label: 'Recompensas',
                  translations: {
                    en: 'Rewards',
                  },
                  slug: 'plugins/zenrewards/recompensas',
                },
                { 
                  label: 'Menú',
                  translations: {
                    en: 'Menu',
                  },
                  slug: 'plugins/zenrewards/menu',
                },
                { 
                  label: 'Acciones',
                  translations: {
                    en: 'Actions',
                  },
                  slug: 'plugins/zenrewards/acciones',
                },
                { 
                  label: 'Comandos',
                  translations: {
                    en: 'Commands',
                  },
                  slug: 'plugins/zenrewards/comandos',
                },
                { 
                  label: 'Permisos',
                  translations: {
                    en: 'Permissions',
                  },
                  slug: 'plugins/zenrewards/permisos',
                },
                { 
                  label: 'Placeholders',
                  translations: {
                    en: 'Placeholders',
                  },
                  slug: 'plugins/zenrewards/placeholders',
                },
              ],
            },
            { 
              label: 'ZenFairy',
              collapsed: true,
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenfairy/introduccion',
                },
              ]
            },
            { 
              label: 'ZenPrison',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenprison/introduccion',
                },
              ]
            },
            { 
              label: 'ZenEssentials',
              badge: 'Soon',
              collapsed: true,
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenessentials/introduccion',
                },
              ]
            },
            { 
              label: 'ZenProfiles',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenprofiles/introduccion',
                },
              ]
            },
            { 
              label: 'ZenMilestone',
              badge: 'Soon',
              collapsed: true,
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenmilestone/introduccion',
                },
              ]
            },
            { 
              label: 'ZenCalendar',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zencalendar/introduccion',
                },
              ]
            },
            { 
              label: 'ZenHub',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenhub/introduccion',
                },
              ]
            },
            { 
              label: 'ZenTags',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zentags/introduccion',
                },
              ]
            },
            { 
              label: 'ZenEvents',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenevents/introduccion',
                },
              ]
            },
            { 
              label: 'ZenGifts',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zengifts/introduccion',
                },
              ]
            },
            { 
              label: 'ZenStorage',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenstorage/introduccion',
                },
              ]
            },
            { 
              label: 'ZenWardrobe',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenwardrobe/introduccion',
                },
              ]
            },
            { 
              label: 'ZenOrbs',
              collapsed: true,
              badge: 'Soon',
              items: [
                { 
                  label: 'Introducción',
                  translations: {
                    en: 'Introduction',
                  },
                  slug: 'plugins/zenorbs/introduccion',
                },
              ]
            },
          ],
        },
        {
          label: 'Configs',
          translations: {
            en: 'Configs',
          },
          items: [
            { 
              label: 'Muy Pronto',
              translations: {
                en: 'Soon',
              },
              slug: 'config/soon',
            },
          ],
        },
        {
          label: 'Setups',
          translations: {
            en: 'Setups',
          },
          items: [
            { 
              label: 'Muy Pronto',
              translations: {
                en: 'Soon',
              },
              slug: 'setups/soon',
            },
          ],
        },
        {
          label: 'Recursos',
          translations: {
            en: 'Resources',
          },
          items: [
            { label: 'FAQs', slug: 'recursos/faqs' },
            { 
              label: 'Roadmap',
              slug: 'recursos/roadmap',
            },
            { 
              label: 'Créditos / Equipo Zenforge',
              translations: {
                en: 'Credits / Zenforge Team',
              },
              slug: 'recursos/creditos',
            },
          ],
        },
      ],
    }),
  ],
});