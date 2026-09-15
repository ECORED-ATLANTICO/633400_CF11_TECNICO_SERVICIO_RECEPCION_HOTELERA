<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La industria hotelera se caracteriza por la necesidad de mantener un control permanente, preciso y actualizado de las cuentas de los huéspedes. La adecuada gestión de los registros financieros contribuye a garantizar la transparencia de las operaciones, la calidad del servicio y la satisfacción de los clientes durante su estadía.

      .row.justify-content-center.align-items-center.mb-4.mb-lg-5
        .col-sm-6.col-lg-3
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/intro-2.png", alt="" data-aos="zoom-in-down")
        .col-lg-9
          .p-4.bg-secundario-s5.rounded-4.mb-3
            p.mb-0 Dentro de este proceso, el área de recepción, y especialmente la sección de caja, desempeña un papel fundamental. Diariamente se registran y consolidan múltiples cargos, pagos, abonos y otros movimientos generados por los huéspedes y por los diferentes servicios ofrecidos dentro del establecimiento, lo que exige una gestión organizada y rigurosa de la información financiera.
          p.mb-0 Para facilitar esta labor, los hoteles suelen apoyarse en herramientas como el sistema uniforme de cuentas y los sistemas de gestión hotelera o PMS (#[em Property Management System]), que permiten centralizar y controlar las operaciones. En este componente de formación se abordarán los procesos técnicos necesarios para administrar de manera eficiente los movimientos financieros y garantizar una gestión exitosa de las cuentas de los huéspedes.    
</template>

<script>
export default {
  name: 'Introduccion',
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
