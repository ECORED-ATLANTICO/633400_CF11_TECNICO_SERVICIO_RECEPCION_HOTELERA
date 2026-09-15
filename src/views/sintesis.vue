<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La gestión financiera en los establecimientos hoteleros constituye un proceso fundamental para garantizar el control, la transparencia y la correcta administración de los recursos. Esta gestión involucra el conocimiento de la normatividad tributaria aplicable al sector, el manejo adecuado de impuestos como el IVA, el impuesto al consumo y el impuesto de renta, así como la comprensión de los procesos de posteo, control de caja y registro de operaciones en la cuenta huésped. Para ello, los hoteles se apoyan en sistemas de gestión hotelera (PMS) que facilitan el registro, seguimiento y control de los movimientos financieros generados durante la estadía de los clientes.
        p.mb-0 Adicionalmente, el personal encargado de la recepción y caja debe dominar aspectos relacionados con los tipos de cargos, documentos de soporte, arqueos de caja, facturación y operaciones matemáticas básicas que permitan validar y controlar las transacciones realizadas. Estos conocimientos son esenciales para asegurar una adecuada trazabilidad de los movimientos, cumplir con las obligaciones tributarias y ofrecer un servicio eficiente, confiable y alineado con las políticas operativas y financieras del establecimiento hotelero.
    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="Diagrama jerárquico titulado “Gestión financiera hotelera”. En el nivel superior se ubica el tema central, del cual se desprenden cinco componentes principales: Normatividad tributaria, Posteo hotelero, Manejo de caja, Cuenta huésped y Facturación. La rama de Normatividad tributaria incluye los impuestos que impactan la operación hotelera: IVA, impuesto al consumo e impuesto de renta. Posteo hotelero comprende los procesos de registro de cargos, incluyendo cargos manuales, cargos automáticos y movimientos generados desde los puntos de venta o ambientes del hotel. Manejo de caja agrupa elementos de control como el fondo de caja, los arqueos, los saldos elevados y las políticas operativas relacionadas con el efectivo. La sección de Cuenta huésped presenta los movimientos financieros asociados a la estadía del cliente, incluyendo débitos, créditos y tipos de cargos como abonos, anticipos, depósitos, paid out, avances en efectivo y devoluciones. Además, incorpora los documentos de soporte que respaldan las transacciones, diferenciando entre soportes de débito y soportes de crédito. Finalmente, Facturación reúne los aspectos relacionados con la obligación de facturar, los requisitos legales y la facturación electrónica. En conjunto, el diagrama muestra cómo estos componentes se articulan para garantizar el control, la trazabilidad y la correcta gestión financiera de las operaciones hoteleras.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
