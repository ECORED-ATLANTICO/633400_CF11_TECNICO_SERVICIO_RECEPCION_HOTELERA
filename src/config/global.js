export default {
  global: {
    Name: 'Procesos de facturación',
    Description:
      'Este componente formativo desarrolla los conocimientos y habilidades necesarios para gestionar los procesos financieros y operativos de la recepción hotelera. Aborda la normatividad tributaria, el manejo de caja, el registro de cargos y pagos, la administración de la cuenta huésped y los procesos de facturación, garantizando un control eficiente y una adecuada atención al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad tributaria',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Posteo de servicios hoteleros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Políticas de manejo de caja',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Operaciones matemáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cuenta huésped',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Facturación',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF11_DU.pdf',
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
  glosario: [
    {
      termino: '<em>Check out</em>',
      significado:
        'es el proceso por el cual una persona después de estar hospedada en un hotel, al momento de retirarse debe dirigirse a la recepción para cancelar los pendientes.',
    },
    {
      termino: 'FOB',
      significado:
        'es el precio de venta de los bienes puestos en un medio de transporte marítimo, sin incluir valor de seguro y fletes.',
    },
    {
      termino: 'Gravamen',
      significado:
        'impuesto o carga que se aplica sobre un bien, riqueza o propiedad que pertenece a una persona y para indicar que se encuentra comprometido.',
    },
    {
      termino: 'Renta',
      significado:
        'utilidad o el beneficio que rinde algo o lo que de ello se cobra.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1989). Estatuto Tributario (Decreto 624 de 1989)',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6533 ',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020). Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2020). Resolución 000042 de 2020. Por la cual se desarrollan los sistemas de facturación, los proveedores tecnológicos, el registro de la factura electrónica de venta como título valor, se expide el anexo técnico de factura electrónica de venta y se dictan otras disposiciones.',
      link:
        'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0042_2020.htm',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2021). Resolución 000167 de 2021. Por la cual se modifica la Resolución 000042 de 2020 y se desarrollan aspectos relacionados con el sistema de facturación electrónica.',
      link:
        'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0167_2021.htm',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (s. f.). Obligados a facturar.',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/Paginas/obligadosfacturar.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
