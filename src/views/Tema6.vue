<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Facturación

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema6/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La facturación en los hoteles es el procedimiento en el que se toma la carpeta cuenta huésped, se realizan los cargos de último minuto, se verifican los cargos anteriores, se expide una precuenta y luego de la revisión y aceptación por parte del cliente se recibe el pago y se expide la factura. Este proceso ha evolucionado enormemente con la utilización de sistemas PMS y la reciente implantación del sistema de facturación electrónica en nuestro país.

    .p-4.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center La expedición de facturas en Colombia está regulada por algunas normas. 

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Normatividad

    p.mb-4.mb-lg-5 Toda persona o empresa que esté obligada a facturar, o que sin estarlo quiera expedir una factura de venta, requiere cumplir con los requisitos que señala la ley.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Obligación de facturar

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p.mb-0 De acuerdo con el Art. 615 Estatuto Tributario se establece la obligación de expedir factura para efectos tributarios a todas las personas o entidades que tengan la calidad de comerciantes, ejerzan profesiones liberales o presten servicios inherentes a éstas o enajenen bienes producto de la actividad agrícola o ganadera, deberán expedir factura o documento equivalente, y conservar copia de la misma por cada una de las operaciones que realicen, independientemente de su calidad de contribuyentes o no de los impuestos administrados por la Dirección de Impuestos y Aduanas Nacionales, que en su documento obligados a facturar mencionan:

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-3
        .bg-img.rounded-4.p-4.h-100
          p.mb-0 Personas naturales o jurídicas responsables del Impuesto sobre las ventas IVA (Responsabilidad 48).
      .col-lg-6.mb-3
        .bg-img.rounded-4.p-4.h-100
          p.mb-0 Personas naturales que superen los montos establecidos y personas jurídicas obligadas a facturar por bienes o servicios excluidos de IVA (Responsabilidad 16).
      .col-lg-6.mb-3
        .bg-img.bg-img--10.rounded-4.p-4.h-100
          p.mb-0 Personas naturales o jurídicas responsables del impuesto al consumo (Decreto 803 de 2013 artículo 6 literal D, Responsabilidades 33, 34).
      .col-lg-6.mb-3
        .bg-img.bg-img--10.rounded-4.p-4.h-100
          p.mb-0 Personas naturales o jurídicas voluntarios u obligados por modalidad electrónica (Responsabilidad 52).
      .col-lg-6.mb-3
        .bg-img.rounded-4.p-4.h-100
          p.mb-0 Personas naturales, con las actividades económicas 1811, 1812, 1820 (Litógrafos, tipógrafos).
      .col-lg-6.mb-3
        .bg-img.rounded-4.p-4.h-100
          p.mb-0 Contribuyentes que optaron por el Régimen Simple de Tributación – SIMPLE.
      
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-5
      .row.justify-content-center.align-items-center(titulo="Las personas naturales obligadas a facturar son aquellas que:")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          ul.checklist.ms-3
            li
              p.mb-0 Cuenta con más de un establecimiento de comercio.
            li
              p.mb-0 Desarrollen actividades bajo franquicia, concesión, regalía, autorización o cualquier otro sistema que implique la explotación de intangibles.
            li
              p.mb-0 Sean usuarios aduaneros.
            li
              p.mb-0 Que el monto de sus consignaciones bancarias, depósitos o inversiones financieras durante el año anterior o durante el respectivo año, provenientes de actividades gravadas con el impuesto sobre las ventas IVA, no supere la suma de 3.500 UVT.

        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema6/16.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Requisitos Importantes:")
        .col-sm-10.col-lg-8.col-xl-8.mb-4.mb-lg-0
          ul.checklist.ms-3
            li
              p.mb-0 Clientes del servicio: tener cuenta de usuario registrada en los servicios en línea de la entidad.
            li
              p.mb-0 Tener firma electrónica vigente.
            li
              p.mb-0 Conservar actualizado el Registro Único Tributario (razón social, dirección, responsabilidades, representación legal, establecimientos de comercio y demás pertinentes).

        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema6/15.png", alt="")

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Requisitos para facturar

    p.mb-4.mb-lg-5 El Art. 617. Establece los requisitos de la factura de venta para efectos tributarios, la expedición de factura a que se refiere el artículo 615 consiste en entregar el original de esta, con el lleno de los siguientes requisitos:

    SlyderF(columnas="col-sm-6 col-xl-4 mb-5")
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/3.svg' alt='')
        p.text-center Está denominada expresamente como factura de venta.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/4.svg' alt='')
        p.text-center Apellidos y nombre o razón y NIT del vendedor o de quien presta el servicio.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/5.svg' alt='')
        p.text-center Apellidos y nombre o razón social y NIT del adquirente de los bienes o servicios, junto con la discriminación del IVA pagado.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/6.svg' alt='')
        p.text-center Llevar un número que corresponda a un sistema de numeración consecutiva de facturas de venta.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/7.svg' alt='')
        p.text-center Fecha de expedición.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/8.svg' alt='')
        p.text-center Descripción específica o genérica de los artículos vendidos o servicios prestados.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/9.svg' alt='')
        p.text-center Valor total de la operación.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema6/10.svg' alt='')
        p.text-center Indicar la calidad de retenedor del impuesto sobre las ventas.

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema6/11.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Al momento de la expedición de la factura los requisitos de los literales en negrita deberán estar previamente impresos a través de medios litográficos, tipográficos o de técnicas industriales de carácter similar. Cuando el contribuyente utilice un sistema de facturación por computador o máquinas registradoras, con la impresión efectuada por tales medios se entienden cumplidos los requisitos de impresión previa. El sistema de facturación deberá numerar en forma consecutiva las facturas y se deberán proveer los medios necesarios para su verificación y auditoría.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/12.svg", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p.mb-0 #[strong Parágrafo]
        p En el caso de las empresas que venden tiquetes de transporte no será obligatorio entregar el original de la factura. Al efecto, será suficiente entregar copia de esta.

        p.mb-0 #[strong Parágrafo]
        p.mb-0 Para el caso de facturación por máquinas registradoras será admisible la utilización de numeración diaria o periódica, siempre y cuando corresponda a un sistema consecutivo que permita individualizar y distinguir de manera inequívoca cada operación facturada, ya sea mediante prefijos numéricos, alfabéticos o alfanuméricos o mecanismos similares.

    .p-4.py-3.bg-terciario-t5.rounded-4.mb-4
      p.mb-0.text-center Adicionalmente a estos requisitos, la factura debe mostrar en forma preimpresa o impresa por computador la resolución de facturación, que es un requisito exigido por la DIAN a manera de control.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Facturación electrónica

    p La facturación electrónica es el mecanismo de facturación establecido por la Dirección de Impuestos y Aduanas Nacionales (DIAN) para documentar las operaciones de venta de bienes y prestación de servicios. Actualmente, constituye el sistema obligatorio para la mayoría de los sujetos obligados a facturar, de conformidad con la normativa tributaria vigente. 
    p.mb-4 En Colombia, la facturación electrónica se encuentra regulada, entre otras disposiciones, por los artículos 615, 616-1 y 617 del Estatuto Tributario, el Decreto 1625 de 2016 (modificado por el Decreto 358 de 2020) y las resoluciones expedidas por la DIAN que reglamentan el Sistema de Facturación Electrónica. 

    .p-4.bg-secundario-s10.rounded-4.mb-5
        p.mb-0 La facturación electrónica en Colombia se encuentra regulada por el Estatuto Tributario, el Decreto 1625 de 2016, modificado por el Decreto 358 de 2020, y las Resoluciones expedidas por la DIAN, entre ellas la Resolución 000042 de 2020 y sus modificaciones, las cuales establecen las condiciones técnicas, operativas y los requisitos para la expedición, validación y conservación de la factura electrónica. La Ley 962 de 2005 constituye un antecedente normativo en materia de uso de medios electrónicos, pero el régimen vigente se desarrolla principalmente a través de la normativa tributaria y reglamentaria actual. 

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h5.mb-0 Folios maestros

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Los folios maestros son cuentas que se utilizan para registrar los ingresos en los que no se hace uso de las habitaciones. En los sistemas informáticos o en el registro contable del hotel cuando una persona registra el ingreso el sistema abre un folio (no una factura), en este folio se harán los cargos de los consumos durante la estadía. Pero hay casos donde se necesita registrar consumos o ventas sin hacer uso de estos folios de habitación.
        p.mb-0 Un caso clásico son las cuentas de banquetes, en estos casos cuando se hace uso de los salones de banquetes, no se usan habitaciones de alojamiento. Pero hay que registrar los consumos de alimentos y bebidas, servicios audiovisuales, etc. Es allí donde se abre una cuenta o folio maestro. Tiene las mismas propiedades y comportamiento de la cuenta huésped, excepto que tiene tarifa de alojamiento (0) cero y estadísticamente no afectan la ocupación del hotel.

    .p-4.py-3.bg-secundario-s10.rounded-4.mb-5
      p.mb-0.text-center También tienen otros usos como:

    SlyderF(columnas="col-sm-6 col-lg-6 col-xl-4 mb-5")
      .tarjeta.bg-img.bg-img--3.p-4.py-5.d-flex.align-items-center
        p.text-center.mb-0 Cuando por algún motivo una cuenta huésped queda sin pagarse, pero se necesita liberar la habitación, con previa autorización del jefe de recepción se puede abrir una cuenta maestra y transferir los cargos.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.d-flex.align-items-center
        p.text-center.mb-0 Para registrar las ventas de terceros y misceláneos, aplica para el caso de exposiciones de arte, vitrinas y concesiones.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.d-flex.align-items-center
        p.text-center.mb-0 Para cargar consumos a empleados.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.d-flex.align-items-center
        p.text-center.mb-0 Para transferir cuentas por cobrar de compañías con fecha de corte de facturación vencida.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.d-flex.align-items-center
        p.text-center.mb-0 Cuentas de grupos.

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h5.mb-0 División de folios

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La división es un proceso que se va a encontrar en el día a día del trabajo de caja. Consiste en pasar cargos de un folio a otro dentro la misma cuenta huésped. Como mencionamos al momento del registro el sistema abre un folio para que se efectúen los cargos del cliente. Pero muchas veces por control de costos o por organización los clientes pedirán que los cargos de alojamiento se facturen aparte de los otros gastos. Esto puede suceder porque la habitación la cubre la empresa y los gastos extras el huésped o por otras razones.
        p.mb-0 En los sistemas informáticos PMS, esta tarea es muy sencilla, ya que solo se debe marcar el cargo y pasarlo a otra ventana (así se conocen los subfolios dentro de la misma cuenta). Si no se utiliza sistema PMS, la tarea será un poco más engorrosa, ya que debe hacerse manualmente, y seguro bajo presión de tiempo al momento de la salida.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
