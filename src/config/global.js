export default {
  global: {
    componenteFormativo:
      'Construcción del plan de pruebas con OWASP orientado a aplicaciones Web',
    descripcionCurso:
      'Para la construcción de un sistema de información por procesamiento electrónico de datos orientado a la web es muy importante implementar los mecanismos que brindan la seguridad de la aplicación, el presente componente tiene como objetivo elaborar un plan de pruebas de seguridad utilizando como metodología la Guía de referencia de pruebas de OWASP que pretende satisfacer los requerimientos de seguridad que se presentan.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Plan de actividades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Limitaciones y facilidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fijar las metas y objetivos particulares',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Definir equipo de trabajo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Definir responsabilidades en el equipo',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Crear una estrategia',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Establecer los plazos',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Determinar los recursos necesarios',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Medir los resultados',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Artefactos de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodología',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de artefactos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño de artefactos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Entorno de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Herramientas para pruebas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas de gestión',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de operación',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Plan de Objetivos',
      referencia:
        'Caballero, Q., A. E. (2019). Webinar gratuito: guía de pruebas de OWASP.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=kXfZqQY0rcg&ab_channel=AlonsoCaballero',
    },
  ],
  glosario: [
    {
      termino: '<em>Exploits</em>',
      significado:
        'parte de un <em>software</em> o una secuencia de comandos que se aprovecha de un error o vulnerabilidad.',
    },
    {
      termino: '<em>Netcat</em>',
      significado:
        'herramienta de línea de comandos que sirve para escribir y leer datos en la red.',
    },
    {
      termino: 'OWASP',
      significado: '<em>Open Web Application Security Project</em>.',
    },
    {
      termino: '<em>Pentesting</em>',
      significado:
        'proceso que imita posibles ataques a una red informática e intenta robar datos.',
    },
    {
      termino: '<em>Checklist</em>',
      significado:
        'lista de chequeo que sirve para registrar un proceso de auditoría.',
    },
  ],
  referencias: [
    {
      referencia: 'Amor. F. (2020). Introducción a OWASP.',
      link: 'https://www.adictosaltrabajo.com/2016/03/07/introduccion-a-OWASP/',
    },
    {
      referencia:
        'Asana, (2020). 4 técnicas eficaces para definir roles y responsabilidades.',
      link: 'https://asana.com/es/resources/roles-and-responsibilities',
    },
    {
      referencia:
        'Diaz, M., y Marulanda, M. F. (2018). Proyecto de aplicación de OWASP.',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/20479/1060648494.pdf?sequence=3&isAllowed=y#page=57&zoom=100,148,204',
    },
    {
      referencia:
        'Junta de Andalucía. (2019). OWASP Testing Project. Junta de Andalucía.',
      link:
        'https://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/553',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Hernán Muñoz',
          cargo: 'Experto Temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y Los Servicios CIES - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Natalia Maldonado Delgado',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Revisión de guion audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yicelly Estefania Mesa Silva',
          cargo: 'Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Validación Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Validación Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Validación audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yenny Patricia Ulloa Villamizar',
          cargo: 'Validación de contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
