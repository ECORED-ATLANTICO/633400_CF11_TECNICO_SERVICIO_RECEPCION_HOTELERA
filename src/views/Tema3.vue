<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Políticas de manejo de caja

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Las políticas son los preceptos que establecen normas, procedimientos y comportamientos que deben tener los empleados. En el caso del manejo de caja es muy seguro que cada empresa hotelera tenga sus propias políticas, es recomendable que los empleados de recepción y los directamente responsables de la caja las tengan totalmente claras.
    
    .row.justify-content-center.mb-4
      .col-xl-10
        .p-4.bg-acento-contenido-a5.rounded-4
          .row.justify-content-center.align-items-center
            .col-sm-4.col-lg-3
              figure
                img.mb-4.mb-lg-0.w-170(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p #[strong Recuerde que:]
              p En los establecimientos de alojamiento se manejan grandes cifras que pueden ser cuantiosas, por lo que el empleado debe tener un alto grado de responsabilidad.
              p.mb-0 A continuación, mencionamos algunas de las políticas más comunes del manejo de caja.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Fondo de Caja

    p.mb-5 A continuación, se informará detalladamente qué es un fondo de caja:

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/W9sASlPfrc0" title="Fondo de caja o de base" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Fondo de caja o de base

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-5
      .row.justify-content-center.align-items-center(titulo="Saldos elevados")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p.mb-0 Es una política administrativa, que previene posibles fraudes por pagos. Es responsabilidad del auditor nocturno revisar a diario los huéspedes y sus respectivas garantías, con el fin de determinar los casos en los cuales el saldo excede el valor límite autorizado por la política del hotel. 
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema3/3.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Arqueos de caja")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Este es un método de control que consiste en un recuento de todas las transacciones en un periodo determinado (débitos / créditos). Esta comprobación tiene como propósito ver si se ha contabilizado todo el dinero recibido y si el saldo que muestra el PMS (o planilla) es correcto. 
          p.mb-0El dinero que se encuentra en la caja de recepción tiene un cierto grado de exposición al público y riesgo de robo, pérdida o simplemente de una contabilización errada. Se recomienda arquear la caja al menos una vez al día en cada turno. 
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema3/4.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Procedimiento del arqueo de caja")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Como mencionamos el arqueo de caja, se trata de un recuento de las operaciones del día, como este se realiza en cualquier momento del día, debe ser rápido y con un procedimiento sencillo que puede ser el siguiente.
          ul.checklist.ms-3
            li
              p Contar todo el dinero en efectivo que hay en caja, y verificar los valores de otras formas de pago (tarjetas, moneda extranjera, créditos, etc.).
            li
              p Solicitar al software de gestión (PMS) un reporte de caja, que nos indique el valor que debemos tener en ese momento. Si no se cuenta con sistema PMS, basta con sumar los valores de la planilla de control.
            li
              p Al finalizar y comparar los valores físicos, con los controles tendremos un resultado que puede tener las siguientes conclusiones.
          p El arqueo contable es correcto: si arqueo físico coincide.
          p El arqueo contable es incorrecto si el arqueo físico No coincide.
          p El resultado incorrecto puede deberse a:
          p.mb-0 Una falta real de dinero: se dio mal un cambio, hubo una sustracción de este.
          p.mb-0 Un registro errado del PMS: se recibió un pago en tarjeta y se registró como efectivo.
          p.mb-0 Un sobrante de dinero: falta realizar algún registro.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema3/5.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Pagos realizados en la caja")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Es una política de control, enfocada en darle orden al manejo del efectivo, funciona en si se autoriza o no realizar pagos en la caja de recepción por parte de la gerencia del hotel, en caso afirmativo se determina que pagos si se pueden realizar y cuáles no. Como todas las políticas estas se instauran en cada establecimiento.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema3/6.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Consumos internos")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Es una política operacional, que determina cómo se realizan los consumos de los empleados cuando son para disfrute personal o como parte de trabajo. En los hoteles hay ocasiones en que, como parte de la labor comercial, el personal de ventas extiende invitaciones a clientes con el propósito de cerrar algún negocio o de mostrar los servicios. En esos casos la política determina el monto y frecuencia máxima de dichas atenciones.
          p.mb-0 En el caso de los consumos para disfrute personal, los hoteles suelen tener una política de descuentos en los servicios que prestan, cuando son consumidos por empleados o familiares.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema3/7.png", alt="")





</template>

<script>
export default {
  name: 'Tema3',
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
