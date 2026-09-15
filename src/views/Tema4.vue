<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Operaciones matemáticas

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Es un hecho inherente a la función del cajero, que quien desempeñe este rol debe tener competencias matemáticas básicas, aunque hoy en día se cuenta con muchos apoyos tecnológicos, la habilidad de hacer cálculos matemáticos correctamente le será de gran ayuda. El cajero debe estar en la capacidad de realizar todas las operaciones que afecten una cuenta huésped (sumar, restar, multiplicar, dividir, calcular descuentos, etc.) sin apoyo tecnológico, es un escenario que puede presentarse repentinamente. Por ejemplo, en un corte de energía.

    .p-4.rounded-5.bg-secundario-s5.mb-4
      p.mb-0.text-center #[strong Las operaciones matemáticas son:]

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Esta operación le será de gran ayuda, en la gestión de grupos. Simplificando grandes series de sumatorias, es también la base de la correcta aplicación de los descuentos expresados en porcentaje, cuya notación corresponde a un valor el cual se multiplica por un %. 
        p.mb-0 Esta operación será su principal aliada cuando deba dividir una cuenta o un cargo en varias partes, una situación frecuente en la operación diaria de los hoteles.

    .p-4.rounded-5.bg-secundario-s5.mb-4
      p.mb-0 Aunque los registros contables se realicen en un sistema PMS estas operaciones básicas le servirán para la validación y el control de los registros, para realizar los arqueos y cierres de movimiento. Se sugiere tenerlas muy en cuenta si no se tiene acceso a sistemas computarizados.

    p.mb-4 #[strong Porcentajes:] aprender a calcular porcentajes, le será de gran utilidad para dividir cuentas en partes desiguales. Esta operación es relativa a la proporcionalidad matemática y se puede calcular por medio de la regla de tres.

    .p-4.py-3.rounded-5.bg-acento-contenido-a10.mb-4
      p.mb-0.text-center Esta es una operación matemática cuyo concepto es, encontrar un valor incógnito a partir de tres valores conocidos. Se analizará, con la siguiente situación.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario.mb-4.variante-secundario
          .row.justify-content-center(numero="1" titulo="Paso 1")
            p.mb-0 Un huésped se acerca a pagar la cuenta e informa que del valor de la habitación su compañía solo le cubre el 70 % y él pagará el 30 % restante. Adicionalmente, en ese momento el hotel experimenta un corte de energía y usted solo dispone del valor total del alojamiento ($574.000 + IVA) en un informe impreso que se generó de la auditoría.
          .row.justify-content-center(numero="2" titulo="Paso 2")
            p Lo primero que hay que determinar es el valor monetario del 30 % de los $574.000, que pagará el cliente.
            p Para lograrlo puede plantear la siguiente regla de tres. Para que la ecuación se resuelva correctamente, se deben colocar los valores del mismo tipo debajo, en este caso ubicamos porcentaje, debajo de porcentaje y la incógnita que será el valor del alojamiento, debajo de la cantidad.
            p.mb-0 $574.000____100 %
            p x =? ___ 30 %
          .row.justify-content-center(numero="3" titulo="Paso 3")
            p Esta notación se lee: si $574.000 equivale al 100 %, ¿Cuánto es el 30 %? Tomando los valores en diagonal, se multiplica $574.000 por 30 y luego se divide ese valor en 100.
            p De esta forma nuestra ecuación quedaría de la siguiente manera.
            img.w-290(src="@/assets/curso/tema4/4.svg", alt="").mb-3
            p Al despejar se eliminan los signos porcentuales, y resolviendo la multiplicación, tenemos
            img.w-290(src="@/assets/curso/tema4/5.svg", alt="").mb-3
            p.mb-0 Es decir que el valor equivalente al 30 % que debe pagar el huésped es $172.200 + IVA por tanto, a la empresa se le debe cobrar el valor de $401.800 + IVA.

</template>

<script>
export default {
  name: 'Tema4',
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
