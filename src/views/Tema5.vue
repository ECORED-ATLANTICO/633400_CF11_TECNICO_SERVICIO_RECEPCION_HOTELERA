<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cuenta huésped

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Se denomina cuenta huésped al resumen de las operaciones que se realizan durante el día, detallando número de habitación o folio, monto del movimiento y su origen, es decir dónde se realizó y si fue débito o crédito.

    .row.justify-content-center.mb-4
      .col-md-8.col-lg-6
        .p-3.bg-acento-contenido-a70.rounded-top-4
          h5.mb-0.text-white.text-center Los saldos se calculan así:
        .p-3.bg-acento-contenido-a10.rounded-bottom-4
          h5.mb-0.text-center 
            span.text-acento-contenido Inicial + 
            span Débitos - 
            span.text-acento-contenido Créditos 
            span.text-black = Saldo final

    .p-4.rounded-5.bg-secundario-s5.mb-4
      p.mb-0 En la recepción se da inicio al ciclo de la cuenta huésped desde el registro y se va alimentando con los movimientos que se registran en el sistema PMS, ya sea desde allí mismo o desde otras dependencias o ambientes.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Naturaleza de los cargos

    p.mb-4 La afectación de la cuenta huésped se da por los débitos y créditos que origina el movimiento diario del hotel, de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-lg-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/2.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-start Débitos
            p.mb-0.text-start.text-custom Registra los cargos a cuenta huésped que se realizan durante el día, es decir, la venta de alojamiento, alimentos, bebidas, teléfonos y lavandería entre otros.
    
      .col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/3.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-start Créditos
            p.mb-0.text-start.text-custom Relaciona los descargos a la cuenta huésped como efecto de la cancelación de facturas, considerando básicamente efectivo, tarjetas de crédito o débito, divisas y particulares. Las columnas de descuento y depósito aplican como crédito al aplicarles dichas situaciones. (Scheel, 1992).

    p.mb-4.mb-lg-5 Cuando el hotel cuenta con un sistema de administración, PMS, este hace el cálculo automático de los saldos de la cuenta huésped y genera un reporte de auditoría que detalla el balance.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Tipos de cargos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p Los cargos corresponden a los diferentes movimientos financieros que pueden registrarse dentro de una operación, cuenta o sistema de gestión. Cada tipo de cargo cumple una función específica y permite llevar un control adecuado de los ingresos, salidas de dinero, ajustes y transacciones realizadas por los usuarios o clientes. Conocer la finalidad de cada uno facilita el registro correcto de las operaciones y contribuye a mantener la trazabilidad y exactitud de la información financiera.
        p.mb-4.mb-lg-0 A continuación, se presentan los principales tipos de cargos utilizados en el proceso:
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-10.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        LineaTiempoD.color-primario.variante-secundario.with-table.with-table--custom
          .row(numero="1" titulo="Abonos")
            .col-auto
              p.mb-0 Un abono hace referencia al pago que registra un huésped para disminuir el saldo de la cuenta a su cargo, es decir que si el monto adeudado es superior al pagado, se genera este tipo de movimiento.
          .row(numero="2" titulo="Anticipos")
            .col-auto
              p.mb-0 El anticipo es una cantidad de dinero que el huésped entrega al hotel antes de iniciar su estancia y que luego se aplicará a la cuenta del huésped.
          .row(numero="3" titulo="Depósitos")
            .col-auto
              p.mb-0 Estos corresponden a dineros dejados por el huésped en prenda por el préstamo de un servicio. Este dinero posteriormente se devuelve al huésped, por tanto, no se registra en el movimiento de la cuenta del huésped. Solo se entrega un comprobante de recibo de estos y los valores se depositan en una caja segura.
          .row(numero="4" titulo="<em>Paid Out</em>")
            .col-auto
              p.mb-4 Es el desembolso realizado por caja de recepción para cubrir un servicio externo que el huésped autoriza le sea cargado a su cuenta y por lo tanto afecta el balance del cajero en turno. Generalmente los hoteles aplican un cargo adicional a título de comisión por este servicio, sobre el cual se cobra IVA por ser un ingreso para el hotel, si se da este caso:
              .titulo-sexto.color-acento-contenido
                h5 Tabla 3.
                span Registro de Paid Out
              .tabla-a.color-acento-contenido.tabla-a--text-left
                table
                  tbody
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") Monto de la transacción autorizada por el huésped
                      td $ 20.000
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") Comisión del 10 % por el servicio
                      td $ 2.000
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") IVA sobre la comisión, que es lo que cobra el hotel
                      td $ 380
                    tr(style="background-color: #FFFFFF")
                      td(colspan="2") Total a cargo del huésped
                      td $ 22.380
          .row(numero="5" titulo="Avance en efectivo")
            .col-auto
              p.mb-0 Es un préstamo que se hace al huésped con cargo a su cuenta y obedece a necesidades externas a los servicios prestados por el hotel. En muchas ocasiones este servicio se presta contra un pago inmediato, por ello, si se cuenta con PMS debe hacerse en una ventana diferente a la que soporta los demás cargos, con el fin de cerrar esa venta al momento.
          .row(numero="6" titulo="Devoluciones")
            .col-auto
              p.mb-4 Se presentan cuando es necesario retirar dinero de la caja de recepción para retornar al huésped un dinero sobrante, ya sea porque su anticipo sigue superando el saldo a pagar o porque hace el pago en moneda extranjera y no es posible tener un valor exacto teniendo en cuenta la tasa de cambio.
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 2.
                span Caso de devoluciones
              img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/6-mob.svg", alt="Dos ejemplos de devolución de anticipos en un hotel.")
              img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/6.svg", alt="Dos ejemplos de devolución de anticipos en un hotel.")

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-5
      .row.justify-content-center.align-items-center(titulo="Documentos de soporte")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Los documentos de soporte son registros que respaldan y evidencian las transacciones realizadas durante la estadía del huésped. Estos documentos permiten garantizar la trazabilidad de los movimientos efectuados en la cuenta, facilitar los procesos de control y verificación, y asegurar la correcta gestión administrativa y financiera del establecimiento. Como resultado de las operaciones registradas en el plan de cuentas y los movimientos generados en la cuenta huésped, se producen diversos documentos de soporte, entre los cuales se encuentran los descritos por Peña (2010).
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema5/6.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Soportes de débito")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Los movimientos de débito, como lo menciona Peña (2010), es decir los que aumentan la cuenta del cliente, deben tener como soporte, comandas o soportes de consumo debidamente firmadas por:
          p.mb-0 Cargos por los consumos en los diferentes ambientes del hotel (restaurante, bar, #[em room service], bar habitación, banquetes y eventos).
          p.mb-0 Cargos en los servicios de comunicaciones (Internet, teléfono, fax, etc.).
          p.mb-0 Cargos por los servicios de banquetes.
          p.mb-0 Cargos por anticipos a huéspedes (en caso de que esté contemplado dentro de las políticas del hotel).
          p.mb-0 Cargos por las ventas de tiendas por departamentos.
          p.mb-0 Cargos por los servicios de peluquería.
          p.mb-0 Cargos por los servicios de taxis.
          p.mb-0 Transferencias de naturaleza débito (cargos asumidos de otras cuentas).
          p.mb-0 Cargos por consumos en negocios con los cuales el hotel mantenga convenios comerciales.
          p.mb-0 Los cargos por servicios de alojamiento, que se realizan en la auditoría nocturna se soportan en el contrato de alojamiento.
          p.mb-0 Cargo por servicio de habitación. 
          p.mb-0 Cargo por el impuesto a las ventas (IVA). 
          p.mb-0 Cargo por el seguro hotelero. 
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema5/7.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Soportes de crédito")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          p Los movimientos créditos o abonos a la cuenta huésped se realizan por los siguientes conceptos:
          p.mb-0 Aplicación de depósitos de reservas.
          p.mb-0 Abonos parciales en efectivo.
          p.mb-0 Descuentos y ajustes.
          p.mb-0 Transferencias de naturaleza crédito.
          p.mb-0 Reversión por cargos errados.
          p.mb-0 Cancelación de la cuenta (efectivo, moneda extranjera, tarjetas de crédito, cartera con empresas, agencias de viajes y particulares).
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema5/8.png", alt="")



</template>

<script>
export default {
  name: 'Tema5',
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
