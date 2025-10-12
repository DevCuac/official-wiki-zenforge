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
      description: 'Documentación oficial de Zenforge Studio',
      logo: {
        src: './public/logo.svg',
      },
      customCss: [
        './src/styles/global.css',
      ],
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/zenforge-studio',
        },
        {
          label: 'Discord',
          icon: 'discord',
          href: 'https://discord.gg/zenforge',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/zenforge-studio/zenforge-wiki/edit/main/',
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
            { 
              label: 'Filosofía y visión',
              translations: {
                en: 'Philosophy and Vision',
              },
              link: '/introduccion/filosofia/',
            },
            { 
              label: 'Tecnologías principales',
              translations: {
                en: 'Main Technologies',
              },
              link: '/introduccion/tecnologias/',
            },
            { 
              label: 'Estructura del proyecto',
              translations: {
                en: 'Project Structure',
              },
              link: '/introduccion/estructura/',
            },
          ],
        },
        {
          label: 'Plugins',
          items: [
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
                  label: 'Comandos',
                  translations: {
                    en: 'Commands',
                  },
                  slug: 'plugins/zenrewards/comandos',
                },
                { 
                  label: 'Menú',
                  translations: {
                    en: 'Menu',
                  },
                  slug: 'plugins/zenrewards/menu',
                },
                { 
                  label: 'Placeholders',
                  translations: {
                    en: 'Placeholders',
                  },
                  slug: 'plugins/zenrewards/placeholders',
                },
                { 
                  label: 'Recompensas',
                  translations: {
                    en: 'Rewards',
                  },
                  slug: 'plugins/zenrewards/recompensas',
                },
                { 
                  label: 'Permisos',
                  translations: {
                    en: 'Permissions',
                  },
                  slug: 'plugins/zenrewards/permisos',
                },
                { 
                  label: 'Acciones',
                  translations: {
                    en: 'Actions',
                  },
                  slug: 'plugins/zenrewards/acciones',
                },
              ],
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