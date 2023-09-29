<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Artefactos de pruebas
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.png")
      .col-lg-8
        p Son los mecanismos que se centran en recoger toda la información como sea posible sobre la aplicación web objetivo y conocer la manera cómo opera. La recopilación de información es un paso fundamental y necesario en una prueba de intrusión. 
        p Esta prueba corresponde al reconocimiento pasivo de información que se debe realizar sin intervenir los servidores o que estos generen #[em logs] de seguridad. Esta tarea normalmente se puede llevar a cabo de muchas formas. Utilizando herramientas de acceso público motores de búsqueda, #[em scanner], enviando peticiones HTTP simples, o peticiones especialmente diseñadas, es posible forzar a la aplicación a filtrar información al exterior con mensajes de error devueltos, o revelar las versiones y tecnología en uso por la aplicación web.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1	Metodología
    
    p.mb-5 La metodología a utilizar es OWASP la que comprende las siguientes fases enmarcadas dentro del ciclo de vida del desarrollo de #[i software] para lo que se recomienda reconocer las pruebas dentro del siguiente proceso, en especial los pasos 4 y 5.

    
    .h4.text-center PROCESO
    .BGM09.p-4.p-md-5.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema2/img02.svg", alt='Imagen que presenta los pasos del proceso del ciclo de vida del desarrollo de software.')

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2	Tipos de artefactos
    
    .BGM01.p-4.p-md-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-sm-3.col-4.mb-lg-0.md-4(data-aos="fade-right")
          img.img07(src="@/assets/curso/tema2/img03.png")
        .col-md-11
          p Como ya se ha mencionado, #[strong los artefactos tecnológicos son aquellos dispositivos concebidos y creados para ayudar a resolver necesidades o facilitar ciertas tareas], empleando para su construcción y funcionamiento las virtudes de la técnica y la ciencia.
          p De acuerdo con la estrategia definida y según la metodología seleccionada, se describen los tipos de artefactos a construir para esta prueba, así: 

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rKIuAU7c740" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3	Diseño de artefactos
    
    p.mb-5 Con base en la metodología y los tipos de artefactos a utilizar se construye un modelo de implementación de estos:
    

    AcordionA(tipo="b" clase-tarjeta="tarjeta bg5")
      .row.justify-content-center.p-4(titulo="<i> Spiders, robots y crawlers</i> (OWASP-IG-001).")
        .col-lg-6.order-lg-1.order-2
          p Los #[i crawlers/robots/spiders web] se encargan de inspeccionar los sitios web. Su comportamiento está estrictamente controlado por el protocolo de exclusión de #[i robots] del fichero robots.txt almacenado en la raíz del sitio web.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img04.png")

      .row.justify-content-center.p-4(titulo="Reconocimiento mediante motores de búsqueda (OWASP-IG-002).")
        .col-lg-6.order-lg-1.order-2
          p Utilizar  varios navegadores y realizar las siguientes búsquedas de su sitio web con el mismo comando.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img05.png")
      .row.justify-content-center.p-4(titulo="Identificación de puntos de entrada de la aplicación (OWASP-IG-003)")
        .col-lg-6.order-lg-1.order-2
          p Se utiliza el complemento HTTPS headers disponible para Mozilla Firefox (ver la siguiente figura), al 	momento de verificar las solicitudes al sitio web www.sena.edu.co se debe buscar si utilizan los dos tipos de peticiones; #[i GET] y #[i POST].
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img06.png")
      .row.justify-content-center.p-4(titulo="Pruebas para encontrar firmas de aplicaciones web (OWASP-IG-004). ")
        .col-lg-6.order-lg-1.order-2
          p En ambientes Linux se usa la herramienta netcat para leer datos de la red y con el siguiente comando se comprueba el campo Server en la cabecera de respuesta HTTP.
          p nc 172.17.8.279 80 es decir comando nc más ip del servidor y puerto.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img07.png")
      .row.justify-content-center.p-4(titulo="Descubrimiento de aplicaciones (OWASP-IG-005)")
        .col-lg-6.order-lg-1.order-2
          p El objetivo es descubrir los servicios que presta un servidor web por medio del siguiente comando en ambiente Linux:
          code.fst-italic.text-bold nmap -Pn -sT -sV -p0-65535 172.157.25.189
          p.mt-3 Para descubrir nombres de dominios asociados a mi paginaweb.com se usa el comando en ambiente Linux:
          code.fst-italic.text-bold #[i host]  -t ns mipaginaweb.com
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img08.png")
      .row.justify-content-center.p-4(titulo="Análisis de códigos de error (OWASP-IG-006).")
        .col-lg-6.order-lg-1.order-2
          p HTTP 404 #[i Not Found] = página web no encontrada.
          p HTTP 403 #[i Forbidden] = intento de acceso a recurso limitado.
          p HTTP 301 #[i Moved Permanently] = recurso redireccionado a un sitio permanente.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img09.png")
      .row.justify-content-center.p-4(titulo="Pruebas de gestión de configuración de infraestructura")
        .col-lg-6.order-lg-1.order-2
          p Pruebas de SSL/TLS (OWASP-CM-001) 
          p Para detectar el posible soporte a cifrados débiles en SSL/TLS, comando
          p nmap -sv - -reason -PN -n -top-port 165.125.142.123 
          p Auditoría cifrado SSL débiles mediante OpenSSL en primer tener openssl instalado
          p.mb-5 openssl s_client -connect mipaginaweb.com
          .row.justify-content-center
            .col-md-11
              .row.mb-4
                .col-auto.BG06.p-2
                  .h3 Pruebas del receptor de escucha de la BD (OWASP-CM-002)
                  .h3.mb-0 Pruebas de gestión de configuración de la infraestructura (OWASP-CM-003)
              p Para establecer la información relevante de las aplicaciones y medidas de seguridad que están siendo implementadas dentro de una máquina de prueba se ejecuta el siguiente comando en un entorno Linux: 
              p HEAD mipaginaweb.com para ftp comando ftp y para un balanceador de 	 carga el comando lbd mipaginaweb.com
              .row.mb-4
                .col-auto.BG06.p-2
                  .h3.mb-0 Pruebas de gestión de configuración de la aplicación (OWASP-CM-004).
              p Gestión de extensiones de archivo (OWASP-CM-005).
              p Archivos antiguos, copias de seguridad y sin referencias (OWASP-CM-006).
              p Interfaces de administración de la infraestructura y de la aplicación (OWASP-CM-007).
              p Métodos HTTP y XST (OWASP-CM-008).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img10.png")
      .row.justify-content-center.p-4(titulo="Comprobación del sistema de autenticación")
        .col-lg-6.order-lg-1.order-2
          ul.lista-ul--color.ms-4.fa-ul
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Transmisión de credenciales a través de un canal cifrado (OWASP-AT001).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Enumeración de usuarios (OWASP-AT-002).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Pruebas de diccionario sobre cuentas de Usuario o cuentas predeterminadas (OWASP-AT-003).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Pruebas de fuerza bruta (OWASP-AT-004).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Saltarse el sistema de autenticación (OWASP-AT-005).
          ul.lista-ul--color.ms-4.fa-ul
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Comprobar sistemas de recordatorio/restauración de contraseñas vulnerables (OWASP-AT-006).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Pruebas de gestión del caché de navegación y de salida de sesión (OWASP-AT-007).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              p.mb-0 Pruebas de #[em captcha] (OWASP-AT-008).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Pruebas para autenticación de factores múltiples (OWASP-AT-009).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Probar por situaciones adversas (OWASP-AT-010).
            li
              <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
              | Pruebas para el esquema de gestión de sesiones (OWASP-Sm-001).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img11.png")
      .row.justify-content-center.p-4(titulo="Pruebas de validación de datos")
        .col-lg-6.order-lg-1.order-2
          p Pruebas de XSS. #[i Cross Site Scripting] e Inyección SQL.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img12.png")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
