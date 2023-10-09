<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Entorno de pruebas
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2
        p Un ambiente de pruebas es un entorno recomendado que pretende emular, ojalá al 100%, el ecosistema tecnológico en el que funciona una aplicación en este caso una aplicación web que ya se encuentra en uso por parte de una organización.
        p Es decir, ya se encuentra funcionando en un ambiente productivo, de ahí la necesidad de identificar claramente de ese entorno productivo los siguientes ítems para replicarlos en el entorno de pruebas: sistemas operativos, servidores de aplicaciones, sistemas de bases de datos, mecanismos de interoperabilidad con otras aplicaciones, entornos de red, documentación correspondiente a manuales técnicos y de usuario, marcos de trabajo (#[i frameworks]) y demás #[i software] necesario para ejecutar las pruebas; para cada uno de estos es imprescindible la identificación de sus versiones y realizar el seguimiento a posibles cambios y sus dependencias.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")
  
    .BGM09.p-4.p-md-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-sm-3.col-4.mb-lg-0.md-4(data-aos="fade-right")
          img.img07(src="@/assets/curso/tema3/img02.png")
        .col-md-11
          p El entorno de pruebas recomendado para este tipo de plan que se va a realizar del lado servidor se basa en sistemas operativos de la familia Unix (Linux en diferentes versiones CentOS, Red Hat, Ubuntu, FreeBSD o macOS) sin desconocer la necesidad de realizarlos en ambientes Windows, entre otros sistemas; el objetivo es ejecutar las pruebas sin temor a equivocarse para luego realizarlas en ambientes de producción.
          p.mb-0 A continuación se muestra un ejemplo de implementación de ambiente de pruebas recomendado que consta de cuatro pasos.

    AcordionA(tipo="b" clase-tarjeta="tarjeta bg5")
      .row.justify-content-center.p-4(titulo="Paso 1: identificar servicios remotos")
        h4 Identificar servicios remotos
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img03.png").mb-5
          .col-lg-6
            p Consiste en identificar los servicios remotos para lo cual se puede utilizar la herramienta nmap que permite el escaneo de redes en donde se puede identificar qué servicios se están utilizando en un dispositivo remoto, así como la identificación de equipos activos, sistemas operativos en el equipo remoto, existencia de filtros o #[i firewalls], entre otros.
        p Por línea de comando en Linux su utilización es así más la ip objetivo en donde la respuesta será un listado de los puertos abiertos o cerrados en esa dirección ip.

        p Algunos parámetros del comando son:
        p [<b>-iL</b>] Sirve para indicar una lista de direcciones ips o redes a escanear. > nmap -<b>iL</b> hosts.txt
        p [<b>-sP</b>] Sirve para ver cuántos equipos con sus Ips se pueden escanear. 
        p [<b>-p</b>] Lista los puertos que se desean escanear.> nmap -iL hosts.txt -p 22,25,80,445
        p [<b>-sV</b>] Sirve para tratar de determinar la versión del servicio en el destino remoto.
        p [<b>-O</b>] Informa el sistema operativo en el objetivo.
      .row.justify-content-center.p-4(titulo="Paso 2: buscar vulnerabilidades")
        h4 Buscar vulnerabilidades
        p Una vez encontrados los servicios remotos con esta información, se pueden utilizar las herramientas apropiadas para hallar los huecos de seguridad de esos servicios.
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img04.png")
          .col-lg-6
            p.mb-0 Entonces, con los datos obtenidos del paso anterior existe una herramienta que se llama Nessus para iniciarse en esta actividad; esta consiste en una aplicación de carácter gratuita que también cuenta con la versión de pago, que por su base de datos y su facilidad de uso es muy apropiada en este aspecto; aunque se puede utilizar por línea de comandos, se recomienda utilizar su interfaz gráfica que es bastante intuitiva.
      .row.justify-content-center.p-4(titulo="Paso 3: explotar vulnerabilidades")
        h4 Explotar vulnerabilidades
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img05.png")
          .col-lg-6
            p Una vez encontradas las vulnerabilidades se recomienda el uso de la herramienta Metasploit para determinar cómo se pueden explotar esas vulnerabilidades. Así, en primer lugar se tiene que verificar si realmente las vulnerabilidades identificadas permiten a un atacante causar algún daño para luego intentar conocer cuál sería ese daño.
            p Metasploit cuenta con una base de datos de vulnerabilidades y de exploits que podrían aprovecharlas. En otras palabras, en lugar de revisar si hay una vulnerabilidad en un equipo remoto, directamente se intenta la ejecución de un exploit y se simulan las consecuencias posteriores, en caso de que este se ejecutará con éxito.
          p Finalmente, Metasploit se ejecuta por medio de línea de comandos, msfconsole, y se recomienda usar  su interfaz gráfica para tener una mayor comprensión.
      .row.justify-content-center.p-4(titulo="Paso 4: probar en entornos legales")
        h4 Probar en entornos legales
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img06.png")
          .col-lg-6
            p Este paso se hace necesario para las tres herramientas anteriores y definir un sistema objetivo en el que se harán las pruebas. Se recomienda iniciar en estas labores de pruebas en un entorno real, en ningún caso en sistemas públicos de internet. Para aprender a usar estas herramientas, se debe utilizar el entorno de pruebas, construyendo escenarios de investigación en donde cada persona pueda tener acercamientos sin riesgos de afectar a ningún entorno en producción.
            P Las herramientas recomendadas aquí son #[i Damn Vulnerable Linuxy] (DVL) y #[i Damn Vulnerable Web Application] (DVWA).

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1	Herramientas para pruebas
    
    P Para complementar las herramientas de un entorno de pruebas asociadas a la metodología utilizada, a continuación se mencionan algunas de las herramientas más conocidas para ejecutar este tipo de pruebas.

    .row.justify-content-center.BG01.p-4.mb-4
      .col-lg-4.col-8(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img07.png")
      .col-lg-6(data-aos="fade-left")
        ul.lista-ul--color.ms-4.fa-ul
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Navegadores web Mozilla, Chrome, etc.
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Motores de búsqueda Bing, Google.
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            p.mb-0 Complemento HTTPS #[em headers] para Mozilla.
          li
            <i class="fas fa-check-circle" style="color:#6ACEAE"></i>
            | Servidores de base de datos y sus respectivos clientes, servidores de aplicaciones y balanceadores de carga de acuerdo con el análisis y el ambiente que se vaya a verificar.

    p.mb-5 Además, también se pueden utilizar las siguientes:

    .row.justify-content-center
      .col-md-11(data-aos="zoom-in")
        SlyderF(columnas="col-lg-4")
          .BG02.mx-2
            .row.justify-content-center.BGI07.p-4
              figure.my-4
                img(src="@/assets/curso/tema3/img08.png")
              .col-auto.BGR02
                .h4.mx-4.mb-0 OpenSSL
            .row.justify-content-center.BGI10.p-4
              p.mb-5.text-white Verifica certificados digitales y demás métodos de encriptamiento de información.
          .BG02.mx-2
            .row.justify-content-center.BG12.p-4
              figure.mb-3
                img(src="@/assets/curso/tema3/img09.png")
              .col-auto.BGR02
                .h4.mx-4.mb-0 Zed Attack Proxy 
            .row.justify-content-center.BGI06.p-4
              p.mb-4 Herramienta de #[em pentesting] que ayuda a encontrar vulnerabilidades en nuestras aplicaciones. 
          .BG02.mx-2
            .row.justify-content-center.BGI07.p-4
              .col-8
                img(src="@/assets/curso/tema3/img10.png")
              .col-auto.BGR02
                .h4.mx-4.mb-0 OWTF
            .row.justify-content-center.BGI10.p-4
              p.mb-5.text-white Herramienta de #[em pentesting] que es, quizás, un poco más sencilla que la herramienta anterior.
          .BG02.mx-2
            .row.justify-content-center.BG12.p-4
              figure.my-3
                img(src="@/assets/curso/tema3/img11.png")
              .col-auto.BGR02
                .h4.mx-4.mb-0 Dependency Check
            .row.justify-content-center.BGI06.p-4
              p.mb-0 Herramienta que permite analizar todas las dependencias de nuestra aplicación y comprobar si existen vulnerabilidades dentro de ellas.
          .BG02.mx-2
            .row.justify-content-center.BGI07.p-4
              .col-9.mb-4
                img(src="@/assets/curso/tema3/img12.png")
              .col-auto.BGR02
                .h4.mx-4.mb-0.text-center SSL advanced forensic tool
            .row.justify-content-center.BGI10.p-4
              p.mb-5.text-white Herramienta que permite mostrar información sobre SSL y los certificados.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Herramientas de gestión
    
    p Para realizar labores de control de operaciones, registro, administración, documentación y seguimiento a casos se describen las siguientes posibilidades:

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.p-2.mb-4
          .col-4.BG04.p-4
            figure.mt-4
              img(src="@/assets/curso/tema3/img13.png")
          .col-8.BG09.p-4
            .h4 TestLink
            p.mb-4 Sistema de gestión de pruebas de #[i software] basado en la web.
        .row.justify-content-center.p-2
          .col-4.BG04.p-4
            img(src="@/assets/curso/tema3/img14.png")
          .col-8.BG09.p-4
            .h4 Zephyr
            p.mb-0 #[i Software] de gestión de ciclo de pruebas de #[i software], disponible como versión empresarial y como un Add-On de Atalassian Jira.
        .row.justify-content-center.p-2.mb-4
          .col-4.BG04.p-4
            figure.mt-3
              img(src="@/assets/curso/tema3/img17.png")
          .col-8.BG09.p-4
            .h4 Bugzilla 
            p.mb-4 Sistema de seguimiento de defectos (#[em Bug Tracking System]).      
      .col-lg-6(data-aos="fade-left")
        .row.justify-content-center.p-2.mb-4
          .col-4.BG04.p-4
            figure.mt-4
              img(src="@/assets/curso/tema3/img15.png")
          .col-8.BG09.p-4
            .h4 Gemini
            p.mb-0 Solución automatización de flujo de trabajo, comunicaciones y reportes en una gran variedad de escenarios de gestión de tecnología de información (TI).
        .row.justify-content-center.p-2.mb-4
          .col-4.BG04.p-4
            figure.mt-2
              img(src="@/assets/curso/tema3/img16.png")
          .col-8.BG09.p-4
            .h4 Selenium WebDriver 
            p.mb-0 Es uno de los principales exponentes en la automatización de #[i software testing] para aplicaciones web hoy en día.


    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3	Herramientas de operación

    p Una vez se cuente con un ambiente de producción, se pretende implementar el seguimiento y monitoreo a dicho ambiente para lo cual se recomienda el uso de estas herramientas:

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.p-2.mb-4
          .col-4.BG06.p-4
            figure.mt-5
              img(src="@/assets/curso/tema3/img18.png")
          .col-8.BG01.p-4
            .h4 Netdata 
            p.mb-0 Es un #[i software] de monitorización gratuito y #[em open source] que permite supervisar todo tipo de KPI en tiempo real.
        .row.justify-content-center.p-2.mb-4
          .col-4.BG06.p-4
            figure.mt-4
              img(src="@/assets/curso/tema3/img19.png")
          .col-8.BG01.p-4
            .h4 Zabbix 
            p.mb-0 Es una de las herramientas de #[i software] para monitorización de servidores más conocidas.
        .row.justify-content-center.p-2.mb-4
          .col-4.BG06.p-4
            .row.justify-content-center
              .col-8
                img(src="@/assets/curso/tema3/img20.png")
          .col-8.BG01.p-4
            .h4 Monit 
            p.mb-0 Es un  #[i software] de monitorización que se emplea en sistemas Linux o basados en UNIX.
      .col-lg-6(data-aos="fade-left")
        .row.justify-content-center.p-2.mb-4
          .col-4.BG06.p-4
            .row.justify-content-center
              .col-8
                img(src="@/assets/curso/tema3/img21.png")
          .col-8.BG01.p-4
            .h4 Ntopng 
            p.mb-0 Se ha erigido como uno de los #[i software] de monitorización de redes más completos.
        .row.justify-content-center.p-2.mb-4
          .col-4.BG06.p-4
            .row.justify-content-center
              .col-7
              img(src="@/assets/curso/tema3/img22.png")
          .col-8.BG01.p-4
            .h4 New Relic 
            p.mb-0 Es una herramienta que permite realizar una monitorización integral del rendimiento de aplicaciones o de usuarios reales.

    .BGM01.p-4.p-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-md-1.col-4.mb-md-0.mb-4(data-aos="fade-right")
          img.img07(src="@/assets/curso/tema3/img23.png")
        .col-md-11
          p.mb-0 Hemos llegado a la finalización de este componente, pero antes es importante observar las videoclases que se presentarán a continuación y que servirán como apoyo al ejercicio práctico que debe realizar en la elaboración de un plan de pruebas.
    p.mb-4 El siguiente video presenta un tutorial del proceso de elaboración de un plan de pruebas con base en el contenido estándar OWASP.
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/am2gXuDBJOg?si=PKGjv-_H2SMsqvds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Plan de pruebas parte 1

    p.mb-4 Para dar continuidad al ejercicio que se viene desarrollando, lo invitamos a ver el siguiente video. 
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Oc23q_5bres?si=YTBM2WxFULOp5yaz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Plan de pruebas parte 2

</template>

<script>
export default {
  name: 'Tema3',
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
