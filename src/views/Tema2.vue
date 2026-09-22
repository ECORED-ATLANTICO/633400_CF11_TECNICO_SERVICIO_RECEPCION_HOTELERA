<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Posteo de servicios hoteleros

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Procesar los cargos y pagos de los huéspedes se conoce en hotelería como posteo. Este término proviene del verbo inglés <em>to post</em>, que en el ámbito contable significa registrar una transacción en una cuenta. El posteo consiste en registrar los consumos, servicios, pagos, descuentos y demás movimientos que afectan la cuenta del huésped durante su estancia. Estos registros permiten mantener un control actualizado del saldo y facilitan el proceso de facturación al momento del <em>check-out</em>.

    .p-4.py-3.rounded-4.bg-secundario-s5.mb-5
      p.mb-0 Para comprender el funcionamiento de la cuenta de un huésped, es importante conocer algunos conceptos básicos de contabilidad. Los activos corresponden a los recursos económicos que posee una persona o una empresa y que generan un beneficio económico. Los pasivos representan las obligaciones o deudas contraídas con terceros. Estos conceptos constituyen la base del sistema contable y permiten registrar adecuadamente las operaciones relacionadas con la cuenta del huésped. 

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-lg-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/2.png", alt="")
          .crd_hover_txt--body.bg-secundario-s5
            h4.mb-3.text-start Ejemplos de activos
            p.mb-0.text-start Incluyen la propiedad de un teléfono celular, un libro de texto, o dos boletos para un concierto.
    
      .col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/3.png", alt="")
          .crd_hover_txt--body.bg-secundario-s5
            h4.mb-3.text-start Ejemplos de pasivos
            p.mb-0.text-start Incluyen un contrato para pagar el teléfono celular mensualmente, una deuda financiera para pagar un automóvil.
    
    .row.justify-content-center
      .col-xl-10
        .bg-acento-contenido-a5.p-4.rounded-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 Los cargos de huéspedes son obligaciones financieras contraídas con un hotel, estos se consideran un activo para este. Si un huésped paga por adelantado una cuenta, esto es una responsabilidad para el hotel porque el hotel debe devolver el dinero al huésped al finalizar la compra.  ¿Cuál es el efecto de débitos y créditos, respecto de los activos y los pasivos? 
            .col-sm-5.col-lg-2
              figure
                img(src="@/assets/curso/tema2/4.svg", alt="")

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Efecto de débitos y créditos, frente a Activos y Pasivos
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr(style="background-color: #F0F6F9")
                th(colspan="3").text-center Efecto de débito y crédito, frente a Activos y Pasivos
                th Débito
                th Crédito
            tbody
              tr
                td(colspan="3").text-center Activos
                td Aumenta
                td Disminuye
              tr
                td(colspan="3").text-center Pasivos
                td Disminuye
                td Aumenta
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4  
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Es importante la publicación precisa y oportuna de los cargos y pagos de los huéspedes, para mantener registros financieros precisos, ya que el huésped puede decidir hacer #[em check out] / salida, en cualquier momento durante el día y requerirá la información precisa en ese momento.
        .p-4.bg-secundario-s5.rounded-4.mb-4
          p.mb-0 El uso del Sistema de Administración de Hoteles o PMS (#[em Property Management System]) para el posteo aumenta la precisión y automatización de los cargos. Las opciones del módulo de caja del PMS, que se enumeran en la ilustración, permiten al cajero contabilizar de manera fácil y correcta los cargos y pagos en los que incurre el huésped durante su estadía, a continuación, tipos de cargos hoteleros:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Tipos de cargos hoteleros
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/6-mob.png", alt='“Tipos de cargos hoteleros” organizada en tres columnas. La primera columna, “Cargos o Créditos”, incluye: Habitaciones, Teléfonos, Room service, SPA, Lavandería, Eventos y Misceláneos. La segunda columna, “Ahorros o Débitos”, presenta: Abonos, Descuentos y Ajustes. La tercera columna, “Mixtos”, contiene: Traspasos, Anulaciones y Correcciones. Cada categoría está conectada mediante flechas descendentes que muestran la relación entre los conceptos. En la parte inferior derecha aparece una ilustración de una persona junto a un edificio de hotel, una maleta y un marcador de ubicación. El diseño utiliza tonos beige, amarillo y naranja sobre un fondo gris claro.')
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/6.png", alt='“Tipos de cargos hoteleros” organizada en tres columnas. La primera columna, “Cargos o Créditos”, incluye: Habitaciones, Teléfonos, Room service, SPA, Lavandería, Eventos y Misceláneos. La segunda columna, “Ahorros o Débitos”, presenta: Abonos, Descuentos y Ajustes. La tercera columna, “Mixtos”, contiene: Traspasos, Anulaciones y Correcciones. Cada categoría está conectada mediante flechas descendentes que muestran la relación entre los conceptos. En la parte inferior derecha aparece una ilustración de una persona junto a un edificio de hotel, una maleta y un marcador de ubicación. El diseño utiliza tonos beige, amarillo y naranja sobre un fondo gris claro.')

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Cargos según su origen

    p.mb-4 Los cargos según su origen se clasifican de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-lg-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/7.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Cargos manuales
            p.mb-0.text-center Estos cargos se generan por la interacción humana con el sistema. Para ser más explícitos es un cargo realizado por un cajero, directamente en la caja de recepción.
    
      .col-xl-4.col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-down").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/8.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Cargos automáticos
            p.mb-0.text-center Están los cargos realizados automáticamente por el sistema en el proceso de auditoría nocturna. Estos son los cargos relativos al cobro del valor del alojamiento, es decir es el valor del alojamiento, los respectivos impuestos y otros cargos que pueden parametrizarse con los planes tarifarios. Por ejemplo, el valor del desayuno, si se ofrece como incluido o el seguro hotelero.

      .col-xl-4.col-lg-6.col-md-9.col-11.mt-4.mt-xl-0
        .crd_hover_txt(data-aos="flip-right").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/9.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Caja de ambientes
            p.mb-0.text-center Estas cajas están enlazadas (se comunican por medio una interfase) al sistema PMS principal. Son los llamados módulos POS (#[em Point of Sale]) o Puntos de venta. Están ubicados en los sitios donde huéspedes o clientes pueden realizar consumos, son conocidos como ambientes.



</template>

<script>
export default {
  name: 'Tema2',
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
