<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de actividades
    
    .row.justify-content-center.align-items-end.mb-4
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img01.png")
      .col-md-8
        p Es un documento que recoge un conjunto de tareas necesarias para la consecución de una acción u objetivo concreto. Antes de llevar a cabo la tarea de planificar un proyecto, es conveniente hacer un plan de actividades, en el cual se contemplará lo necesario que lleve a organizar las pruebas de seguridad de una aplicación #[i web] con base en la guía OWASP (#[i Open Web Application Security Project]).
        .row.mb-4
          .col-auto(data-aos="fade-left")
            a.anexo.mb-4.mb-lg-0(href="https://owasp.org/www-pdf-archive/Gu%C3%ADa_de_pruebas_de_OWASP_ver_3.0.pdf" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace #[i web]]. Clic para conocer la Guía OWASP
        p.mb-0 Se recomienda para la elaboración del plan de actividades, la creación de un diagrama de Gantt el cual se compone de dos grandes partes de la siguiente manera: 
    
    .BGR01.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-10
            .titulo-sexto.color-acento-contenido.my-4
              h5 Figura 1
              span Diagrama de Gantt generado con Open Project
            img(src="@/assets/curso/tema1/img02.png")
        .row.justify-content-center
          .col-md-5.col-6
            .BG02.p-4
              figure.mb-4
                img(src="@/assets/curso/tema1/img03.png")
              p.mb-4 En su parte izquierda se describe la lista de tareas a llevar a cabo.
          .col-md-5.col-6
            .BG02.p-4
              figure.mb-4
                img.w-92(src="@/assets/curso/tema1/img04.png")
              p.mb-0 En la parte de derecha hay un cronograma con barras que representa el trabajo a realizar.

    p.mb-5 Así mismo, dentro del diagrama es importante definir:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .BGR03.p-4
        .row.mb-4.ms-1
          .col-auto.BG04.p-2
            .h4.mb-0 01.
        p.mb-0 Duración normalmente dada en días incluso en horas.
      .BGR03.p-4
        .row.mb-4.ms-1
          .col-auto.BG04.p-2
            .h4.mb-0 02.
        p.mb-0 Las fechas de inicio y de fin de cada tarea.
      .BGR03.p-4
        .row.mb-4.ms-1
          .col-auto.BG04.p-2
            .h4.mb-0 03.
        p.mb-0 Las actividades predecesoras y antecesoras.
      .BGR03.p-4
        .row.mb-4.ms-1
          .col-auto.BG04.p-2
            .h4.mb-0 04.
        p.mb-4 Actividades indentadas.
      .BGR03.p-4
        .row.mb-4.ms-1
          .col-auto.BG04.p-2
            .h4.mb-0 05.
        p.mb-4 Recurso asociado por actividad. 

    .BGM01.p-4.p-md-5.mb-4(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-1.col-sm-3.col-4.mb-lg-0.md-4
          img(src="@/assets/curso/tema1/img05.png")
        .col-lg-11
          p.mb-0 La importancia de un diagrama de Gantt radica en la posibilidad de contar constantemente con una visualización global del proyecto, incluso de planes complejos, mostrando el impacto que un cambio puede generar en una sola actividad en todo el proyecto permitiendo generar retroalimentación a los roles interesados.

    p.mb-5 Para diseñar un diagrama de Gantt se recomienda la utilización de herramientas de #[i software] que permiten manejar de una manera ágil el seguimiento y verificación de su cumplimiento, incluso enmarcado dentro de un proyecto que puede considerarse más grande de marcando una hoja de ruta; algunas herramientas recomendadas son:  

    .row.justify-content-center.mb-4
      .col-md-8(data-aos="zoom-in")
        img(src="@/assets/curso/tema1/img06.svg")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Objetivos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img07.png")
      .col-md-8
        p En este punto se deben plantear los objetivos generales a cumplir en el proyecto teniendo en cuenta que la guía OWASP comprende un gran número de componentes a los cuales se puede aplicar un proceso de análisis de vulnerabilidades como lo son por ejemplo, los componentes tipo API (interfaz de programación de aplicaciones) que normalmente se construyen bajo el concepto de #[i web services], de validación de datos de autorización y autenticación, de verificación y utilización de marcos en diferentes organizaciones, hasta llegar a la verificación de infraestructura, redes con sus configuraciones y talento humano.
    
    .BG01.p-4.mb-4
      .row.justify-content-center
        .col-md-10
          .titulo-sexto.color-acento-contenido.my-4(data-aos="fade-right")
            h5 Figura 2
            span Objetivos del plan de pruebas
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img08.svg")

    p.mb-5 Los objetivos se pueden plantear de la siguiente manera: <br><br>

    .row.justify-content-center.pt-5.mb-4
      .col-md-5.mx-2.mb-md-0.mb-5
        .row.justify-content-center.BG06(data-aos="zoom-in")
          .col-10
            img.img01(src="@/assets/curso/tema1/img09.png")
        .row.justify-content-center.BGH01.img02.p-4(data-aos="fade-right")
          p.mb-0 Análisis del componente de aplicaciones #[i web] que corresponden a herramientas de #[i software] que funcionan vía internet y se convierten en soluciones que están “expuestas” al público de manera masiva.
      .col-md-5.mx-2
        .row.justify-content-center.BG08(data-aos="zoom-in")
          .col-10
            img.img01(src="@/assets/curso/tema1/img10.png")
        .row.justify-content-center.BGH07.img02.p-4(data-aos="fade-left")
          p.mb-0 Establecer hacia quién va dirigido dicho análisis, entendiéndose que esas pruebas según la guía pueden estar orientadas a #[em testers] de #[i software] que son personas que trabajan en el marco de metodologías y pretenden dar cumplimiento a estándares de calidad unidos a una metodología en el marco del desarrollo de #[i software].

    .row.mb-4(data-aos="fade-right")
      .col-auto.BG06.p-2
        .h3.mb-0 Estos objetivos están orientados a:
      
    p Especialistas de seguridad que, en su gran mayoría, se encuentran en la capa de administración de la infraestructura que soporta el funcionamiento del componente #[i web] en un ecosistema tecnológico y también a desarrolladores de #[i software] que son las personas encargadas de escribir las sentencias de código fuente que conforman el componente.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Limitaciones y facilidades
    
    p.mb-5 Cuando se aborda la creación de un plan de actividades es muy importante recopilar la mayor cantidad posible de información de una organización. Esta debe estar orientada hacia la consecución de un contexto general de la situación actual de la empresa que va a utilizar o que está utilizando la aplicación #[i web] y que redunda en un análisis organizacional global que permita ubicar de una manera ágil los posibles recursos o la carencia de ellos.

    .row.justify-content-center.mb-4
      .col-md-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img11.png")
            .col-lg-8(data-aos="fade-left")
              .bloque-texto-a__texto.p-4
                p #[strong Análisis organizacional]: todas las empresas, sin importar su tamaño, tienen ciertas limitaciones que pueden representar un obstáculo para alcanzar los objetivos planteados. 
                p Estas limitaciones son dificultades que pueden presentarse durante la ejecución del plan de trabajo y que se pueden superar, en muchas ocasiones, gracias a las facilidades con las que se cuenta.

    .row.justify-content-center.align-items-center.BG09.p-4.mb-4
      .col-md-8.order-md-1.order-2
        .h4.ms-2.mb-4 Es importante listar e identificar esas limitantes y facilidades en los siguientes temas:  
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Documentación existente y facilidad de acceso.
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Tecnologías. 
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Infraestructura. 
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Redes. 
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Facilidad de acceso. 
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Componentes. 
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Identificación del personal encargado con sus respectivos roles y responsabilidades. 
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Grado de conocimiento en la organización acerca del proceso de seguridad informática.
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img12.png")

    p La importancia de este análisis radica en la posibilidades de recomendar a futuro, o durante la ejecución del plan de pruebas, mecanismos, herramientas de #[i software], prácticas, personal necesario, estrategias, tecnologías de carácter libre o incluso de pago que ayuden en la consecución de los objetivos y que eliminen la existencia de brechas que antes no se han tenido en cuenta.
    .h4.mb-5 A continuación se representa lo anteriormente mencionado.

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGI01.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img39.png")
          .BGR02.px-2.py-1.mb-4
            .h4.text-center.mb-0 1 Facilidades
          .row
            .col-1
              .h5 <span style="background-color:#6ACEAE; padding: 3px 6px 3px 6px">1A</span>
            .col-11
              p.ms-2.mb-2 Tecnológicas.
              p.ms-2.mb-2 Recursos logísticos.
              p.ms-2.mb-2 Talento humano.
              p.ms-2.mb-2 Recursos económicos.
              p.ms-2.mb-0 Capacitación.
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        .BGI09.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img40.png")
          .BGR02.px-2.py-1.mb-4
            .h4.text-center.mb-0 2 Análisis organizacional global
          .row
            .col-1
              .h5 <span style="background-color:#6ACEAE; padding: 3px 6px 3px 6px">2A</span>
            .col-11
              p.ms-2.mb-2 Organigrama.
              p.ms-2.mb-2 Documentación.
              p.ms-2.mb-2 Misión.
              p.ms-2.mb-0 Visión.
              br
      .col-lg-4.col-10(data-aos="fade-left")
        .BGI01.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img41.png")
          .BGR02.px-2.py-1.mb-4
            .h4.text-center.mb-0 3 Limitaciones
          .row
            .col-1
              .h5 <span style="background-color:#6ACEAE; padding: 3px 6px 3px 6px">3A</span>
            .col-11
              p.ms-2.mb-2 Aplicación de estándares (OWASP).
              p.ms-2.mb-2 Ecosistemas tecnológicos.
              p.ms-2.mb-2 Ambiente de desarrollo.
              p.ms-2.mb-2 Ambiente de pruebas.
              p.ms-2.mb-0 Ambiente de producción.
    
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3	Fijar las metas y objetivos particulares
    
    p.mb-5 Para este apartado es importante definir que los objetivos serán guiados por la metodología OWASP y las metas a cumplir en este proceso son: <br><br>

    .row.justify-content-center.pt-5.mb-5
      .col-md-4.BG13.mb-md-0.mb-5(data-aos="fade-right")
        .row.justify-content-center.BG10
          .col-10
            img.img01(src="@/assets/curso/tema1/img14.png")
        .row.justify-content-center.BGJ07.img09.p-4
          p.mb-0 Aplicar el estándar OWASP y el manual de pruebas de #[i pentesting] propuesto para determinar el plan de pruebas que se aplicarán sobre el sistema con el enfoque de análisis de seguridad en las aplicaciones #[i web].
      .col-md-4.BG13.mb-md-0.mb-5(data-aos="zoom-in")
        .row.justify-content-center.BG06
          .col-10
            img.img01(src="@/assets/curso/tema1/img15.png")
        .row.justify-content-center.BGJ01.img09.p-4
          p.mb-0 Determinar las pruebas de la metodología OWASP de seguridad en aplicaciones #[i web] para los 10 casos de vulnerabilidades más conocidos y definidos en el punto de la estrategia de este proceso.
      .col-md-4.BG13(data-aos="fade-left")
        .row.justify-content-center.BG10
          .col-10
            img.img01(src="@/assets/curso/tema1/img16.png")
        .row.justify-content-center.BGJ07.img09.p-4
          p.mb-5 Determinar los artefactos de pruebas a utilizar de acuerdo con la metodología OWASP de seguridad en aplicaciones #[i web].

    .row.justify-content-center.mb-4
      .col-10
        .bloque-texto-g.BG09.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img17.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 El término #[strong #[i pentesting]] se refiere a pruebas de carácter complejo que involucran un proceso de identificación de la infraestructura, objetivos, vulnerabilidades y cómo podrían estas explotarse para causar el daño por parte de un atacante, y con los resultados obtener una adecuada protección. 

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4	Definir equipo de trabajo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2
        p Los mejores equipos de trabajo son los que se estructuran correctamente, saben comunicarse e interaccionan entre sí; la motivación, participación, organización, compromiso, confianza, objetivos comunes y resolución de problemas son las siete características del trabajo en equipo fundamentales. #[strong De ahí la importancia de tomarse el tiempo necesario para listar a las personas indicadas a quienes se les van a asignar las actividades en el plan de trabajo para interactuar con ellas].
        p No obstante que este tipo de pruebas están orientadas a desarrolladores de #[i software], es importante tener en cuenta otros tipos de roles que pueden interactuar dentro de un equipo de trabajo como los administradores de red y plataformas, puesto que estos son los encargados de otorgar permisos en usuarios, definir tipologías de red, manejo de configuración de reglas de #[i firewalls], acceso a servidores de aplicaciones sistemas de autenticación entre otros, sobre todo para la parte en la cual consiste en contrastar los resultados obtenidos de las pruebas contra lo que realmente existe en el ecosistema tecnológico analizado en el que funciona una aplicación #[i web].
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img18.png")
    
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5	Definir responsabilidades en el equipo

    .BGM09.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-sm-3.col-4.mb-lg-0.md-4
          img.img07(src="@/assets/curso/tema1/img19.png")
        .col-md-11
          p Los roles y responsabilidades #[strong se definen a nivel de la organización y del proyecto y el trabajo será conocer estos dos ítems del equipo en diferentes momentos de desarrollo de las actividades]. Para ello, contar con una estructura de equipo sólida en el nivel organizacional es fundamental y es lo primero que se debe apropiar para apoyar en la resolución de posibles brechas en esta área.
          p.mb-0 El principal rol que es el del desarrollador, debe contar como mínimo con los siguientes conocimientos: 
    
    .figure.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/tema1/img20.svg")

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6	Crear una estrategia
    
    p El procedimiento mediante el cual se determina para este caso es el análisis de vulnerabilidades de una aplicación #[i web], y este corresponde a la verificación punto por punto de los 10 casos de ataques más comunes reportados por los informes que cada cierto tiempo destaca OWASP en dichos ambientes #[i web], los cuales son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR05")
      .row.justify-content-center(titulo="Inyección (<em>Injection</em>)")
        .col-md-8.order-md-1.order-2
          p Este ataque se produce cuando datos no confiables son enviados a un intérprete (ya sea del sistema operativo, de una base de datos o cualquier intérprete) como parte de un comando o consulta. 
          p.mb-0 Los datos hóstiles introducidos por el atacante pueden engañar al intérprete haciendo que se ejecuten comandos no intencionados o accediendo a información sobre la que no se está autorizado. Uno de los ejemplos más significativos de este tipo de ataque es #[strong SQL #[em Injection]].
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img21.png")
      .row.justify-content-center(titulo="Pérdida de autenticación y gestión de sesiones")
        .col-md-8.order-md-1.order-2
          p.mb-0 Hay ciertos datos que deben estar cifrados, como credenciales de acceso, datos bancarios, información confidencial de la empresa, etc., ya que aparte de que la ley lo exija, lo que un ciberdelincuente pueda hacer con los datos puede ser catastrófico para la empresa.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img22.png")
      .row.justify-content-center(titulo="Secuencia de comandos en sitios cruzados (XSS)")
        .col-md-8.order-md-1.order-2
          p Este tipo de ataque ocurre cuando se obtienen datos no confiables y se envían directamente al navegador #[i web]. Esto provoca que se puedan ejecutar comandos no deseados en el navegador del usuario. 
          p.mb-0 Estos comandos pueden obtener desde las credenciales de acceso del usuario como instalar ciertos programas maliciosos.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img23.png")
      .row.justify-content-center(titulo="Referencia directa insegura a objetos")
        .col-md-8.order-md-1.order-2
          p.mb-0 Este tipo de ataque ocurre cuando no se controlan los accesos a recursos sobre los que un usuario no debería tener acceso. En las aplicaciones, la mayoría de las veces, existen distintos usuarios y cada usuario tiene una serie de recursos sobre los que tiene acceso y otros sobre los que no debería tener acceso. 
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img24.png")
      .row.justify-content-center(titulo="Configuración de seguridad incorrecta")
        .col-md-8.order-md-1.order-2
          p Este tipo de ataque ocurre cuando se han realizado malas configuraciones en los servidores de las aplicaciones, en las bases de datos o en la configuración del propio sistema operativo. 
          p.mb-0 Es importante tener todo el #[i software] actualizado con la última versión disponible y que todas las librerías o #[em frameworks] que use la aplicación también estén actualizadas.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img25.png")
      .row.justify-content-center(titulo="Exposición de datos sensibles ")
        .col-md-8.order-md-1.order-2
          p Este tipo de ataque ocurre cuando se puede acceder de forma fácil a datos de carácter sensible almacenados en la aplicación. 
          p.mb-0 Cuando, por ejemplo, se almacenan las credenciales de los usuarios sin codificar o si la comunicación del servidor no es segura a la hora de realizar un pago con una tarjeta de crédito.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img26.png")
      .row.justify-content-center(titulo="Ausencia de control de acceso a funciones")
        .col-md-8.order-md-1.order-2
          p Este tipo de ataque ocurre cuando se accede a funciones del servidor sobre las que un usuario no debería tener permiso.
          p Por ejemplo:
          p.mb-0 El servicio de listado de usuario solo debería estar disponible por la aplicación, pero cualquier usuario puede también acceder a esta información.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img27.png")
      .row.justify-content-center(titulo="Falsificación de peticiones en sitios cruzados")
        .col-md-8.order-md-1.order-2
          p.mb-0 Este tipo de ataque ocurre cuando se realizan peticiones HTTP falsificadas del ordenador de la víctima a una aplicación #[i web] vulnerable.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img28.png")
      .row.justify-content-center(titulo="Utilización de componentes con vulnerabilidades conocidas")
        .col-md-8.order-md-1.order-2
          p Este tipo de ataque ocurre cuando se emplean librerías o #[em frameworks] que contienen vulnerabilidades. 
          p.mb-0 Es por esto que es importante actualizar estos componentes o revisar el historial de revisiones para comprobar las mejoras de seguridad implementadas.
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img29.png")
      .row.justify-content-center(titulo="Redirecciones y reenvíos validados")
        .col-md-8.order-md-1.order-2
          p Este tipo de ataque ocurre cuando, al redireccionar al usuario a otra página, no se comprueba que el destino sea válido. 
          p.mb-0 Es por esto que se puede redirigir a un usuario a una página que contenga contenido malicioso para robar las credenciales de dicho usuario.        
        .col-md-3.col-10.order-md-2.order-1.mb-md-0.mb-4
          img(src="@/assets/curso/tema1/img30.png")

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7	Establecer los plazos
    
    p Mediante un cronograma se deben establecer los tiempos para cada actividad con fecha de inicio y fecha de finalización y cada una debe ser organizada en orden lógico de aplicación.
    p.mb-5 En el siguiente video se conocerá más detalladamente qué se requiere establecer en un cronograma:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Wp0kVmnPBpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8	Determinar los recursos necesarios

    p Centrado en la estrategia definida en el punto anterior para lograr la determinación de los recursos necesarios, se deben observar las condiciones dentro y fuera de la organización, a saber:  

    figure.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema1/img31.svg")
    
  
    .BGM01.p-4.p-md-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-sm-3.col-4.mb-lg-0.md-4(data-aos="fade-right")
          img.img07(src="@/assets/curso/tema1/img32.png")
        .col-md-11
          p Se debe considerar que la determinación de los recursos necesarios para un proyecto debe contemplar cierto margen de flexibilidad y evolucionar a la par de la intervención, el comportamiento del entorno y las decisiones del cliente.
          p.mb-0 Dicho de otro modo, lo que no parece indispensable en un principio puede serlo más adelante.

    .row.justify-content-center.mb-4
      .col-md-10(data-aos="zoom-in")
        img(src="@/assets/curso/tema1/img33.svg")
    
    separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.9	Medir los resultados

    p.mb-5 Con el ánimo de evaluar el éxito o fracaso del proyecto se proponen, como mínimo, medir los siguientes indicadores:
    
    .row.justify-content-center
      .col-md-11
        SlyderF.mb-5.pt-5(columnas="col-lg-4 col-md-6")
          .BG02.pt-5.mx-2
            .row.justify-content-center.BG04
              .col-6.mb-4
                img.img03(src="@/assets/curso/tema1/img34.png")
            .row.justify-content-center.img04
              .col-auto.BGR02
                .h4.mx-4.mb-0 Alcance
            .row.justify-content-center.BGK09.img05.p-4
              p.mb-0 Son los resultados que se esperan del proyecto y el conjunto de labores que se deben realizar para llegar a esos resultados planteados.
          .BG02.pt-5.mx-2
            .row.justify-content-center.BG06
              .col-6.mb-4
                img.img03(src="@/assets/curso/tema1/img35.png")
            .row.justify-content-center.img04
              .col-auto.BGR02
                .h4.mx-4.mb-0 Calendario
            .row.justify-content-center.BGK11.img05.p-4
              p.mb-0 Corresponde a la línea de tiempo del proyecto. Abarca no solo la fecha de cierre final, sino también los hitos importantes y los plazos de las tareas a lo largo del proceso.
          .BG02.pt-5.mx-2
            .row.justify-content-center.BG04
              .col-6.mb-4
                img.img03(src="@/assets/curso/tema1/img36.png")
            .row.justify-content-center.img04
              .col-auto.BGR02
                .h4.mx-4.mb-0 Presupuesto
            .row.justify-content-center.BGK09.img05.p-4
              p.mb-0 Es el valor del plan de pruebas, allí se deben tener en cuenta las siguientes preguntas: ¿cuánto es lo estimado para completar el alcance del plan? y ¿cuáles son los fondos que se están invirtiendo en el plan?.
          .BG02.pt-4.mx-2
            .row.justify-content-center.BG06.mt-4
              .col-6.mb-4
                img.img03(src="@/assets/curso/tema1/img37.png")
            .row.justify-content-center.img04
              .col-11.BGR02
                .h4.mb-0.text-center Logro de los objetivos de negocio
            .row.justify-content-center.BGK11.img06.p-4
              p.mb-0 Es la forma en que el proyecto funcionó comparando con los casos del negocio. Se debe dar respuesta a las siguientes preguntas: ¿se consiguieron los beneficios esperados (tanto tangibles como intangibles)? y ¿se obtuvo la ganancia esperada de acuerdo con la inversión (ROI - tasa de retorno de la inversión)?.
          .BG02.pt-4.mx-2
            .row.justify-content-center.BG04.mt-4
              .col-6.mb-4
                img.img03(src="@/assets/curso/tema1/img38.png")
            .row.justify-content-center.img04
              .col-auto.BGR02
                .h4.mx-lg-4.mb-0.text-center La satisfacción del cliente 
            .row.justify-content-center.BGK09.img05.p-4
              p.mb-0 Se refiere al grado en que los resultados del proyecto cumplen o superan las expectativas; esto abarca la calidad de las entregas, la experiencia general del cliente, el servicio al cliente y la comunicación entre las partes interesadas internas y externas a lo largo del ciclo de vida del proyecto.
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
