<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué impuesto tiene una tarifa general del 19 % en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impuesto de renta',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impuesto al consumo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'IVA',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ICA',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IVA tiene una tarifa general del 19 % para la mayoría de los bienes y servicios gravados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué característica tiene el IVA como impuesto plurifásico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se cobra una sola vez.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo aplica a hoteles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Grava sucesivamente las diferentes etapas de producción y venta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo aplica a productos importados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IVA se aplica en diferentes fases del proceso económico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la tarifa de impoconsumo para los servicios de comidas y bebidas en restaurantes y bares?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '4 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '8 %',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '16 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '19 %',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La tarifa general para estos servicios es del 8 %.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué se entiende por posteo hotelero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaboración de reservas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro de cargos y pagos en la cuenta huésped.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limpieza de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facturación electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El posteo consiste en registrar los movimientos que afectan la cuenta del huésped.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes cargos se genera automáticamente durante la auditoría nocturna?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumo en restaurante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pago en efectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cargo de alojamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Devolución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El sistema genera automáticamente los cargos relacionados con el alojamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué significa PMS en hotelería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programa Manual de Servicios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Property Management System.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Plan Maestro de Seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procedimiento de Manejo de Salidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El PMS es el sistema utilizado para administrar la operación hotelera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué es un fondo de caja?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una cuenta bancaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una reserva hotelera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dinero destinado para iniciar operaciones de caja.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un impuesto hotelero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El fondo de caja permite atender las operaciones diarias de recaudo y pagos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito principal del arqueo de caja?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reservar habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar que los valores físicos coincidan con los registros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar facturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El arqueo permite validar la exactitud de los movimientos registrados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cómo se considera para el hotel una deuda del huésped?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un pasivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un activo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un gasto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un impuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las obligaciones financieras del huésped representan un activo para el hotel.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué movimiento disminuye el saldo de la cuenta huésped?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abono.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cargo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Débito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Consumo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los abonos corresponden a pagos que reducen el valor adeudado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué es un anticipo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un descuento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un pago realizado antes de la estadía.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un cargo automático.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un impuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El anticipo es una suma entregada antes de iniciar la estancia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué representa un Paid Out?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un cargo por alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un desembolso realizado por el hotel en nombre del huésped.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una devolución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una factura electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El Paid Out corresponde a pagos realizados al exterior por solicitud del huésped.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuándo se presenta una devolución?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando aumenta el saldo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando se registra un impuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando se retorna dinero al huésped.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuando se genera un cargo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las devoluciones implican la entrega de dinero al huésped.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué documento soporta los cargos por servicios de alojamiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contrato de alojamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registro mercantil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Certificado bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factura de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El contrato de alojamiento respalda estos cargos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál de los siguientes corresponde a un soporte de crédito?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumo en restaurante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Servicio de taxi.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicación de depósitos de reserva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Consumo en bar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los depósitos aplicados disminuyen el saldo de la cuenta huésped.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es el objetivo principal de la facturación hotelera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Emitir y soportar el cobro de los servicios prestados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Clasificar habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La facturación formaliza el cobro de los servicios consumidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué entidad regula la facturación electrónica en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'MinTIC.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Turismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'DIAN.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cámara de Comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La DIAN es la entidad encargada de regular este proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué son los folios maestros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Habitaciones VIP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuentas utilizadas para registrar consumos sin alojamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impuestos especiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reportes de auditoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los folios maestros permiten gestionar consumos que no están asociados a habitaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿En qué consiste la división de folios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cerrar una reserva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transferir cargos entre subcuentas de una misma cuenta huésped.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear una factura electrónica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La división de folios permite separar cargos según las necesidades de facturación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito principal de la gestión financiera hotelera?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar únicamente las reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar el control, registro y trazabilidad de las operaciones financieras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La gestión financiera permite controlar adecuadamente los movimientos económicos del hotel.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
