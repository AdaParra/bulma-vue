<template>
<section class="section">
  <div class="container">
    <Cards :info='info'/>      
  </div>
</section>

</template>

<script>

import Cards from './Cards.vue'

export default {
  name: 'cards',
  data () {
    return {
      info:
      [
            {id: 'info-0', url: require('./assets/tab-1.png'), urldetail: require('./assets/tab-1-detail.png'), name: 'El gran salto de las impresoras 3D', subtitle: 'Impresión 3D a mayor velocidad', subtitleDetail: 'Las nuevas impresoras 3D trabajan a un ritmo entre 25 y 100 veces superior', montorecaudado: '$1,399,887.50', montometa: '$5,380,000.00', status: 'Activa', classbutton: 'card-footer-item button is-link', progressCant: '30', idcircle: '0', urlvideo: 'https://www.youtube.com/embed/y5p8kzYt8Ig?rel=0', detail: 'La tecnología CLIP no supone únicamente un avance respecto a los sistemas de impresión tradicional, sino que también significa un importante ahorro de tiempo. Las nuevas impresoras son capaces de trabajar a un ritmo entre 25 y 100 veces superior a la primera generación de impresoras 3D, lo que significa que imprimen a una velocidad similar a la de las impresoras tradicionales de papel y tinta. De esta manera, se han conseguido crear grandes objetos con velocidades de impresión de más de 1 metro por hora, o complejas y sofisticadas estructuras como una torre Eiffel en miniatura. Disminuyendo la velocidad de impresión, además, se han podido generar piezas de menos de un micrómetro (µm) de longitud: más fino que un cabello humano.'},
            {id: 'info-2', url: require('./assets/tab-2.png'), urldetail: require('./assets/tab-2-detail.png'), name: 'Proyecto Google Loon', subtitle: 'Conexión WiFi mundial y global', subtitleDetail: 'Globos de helio con señal Wi-Fi para proveer de acceso a internet a los habitantes de aquellas zonas en las que no hay cobertura de red.', montorecaudado: '$1,499,887.50', montometa: '$5,680,000.00', status: 'Cerrado', classbutton: 'card-footer-item button is-dark', progressCant: '90', idcircle: '2', urlvideo: 'https://www.youtube.com/watch?v=MiEZfRh-h-s?rel=0', detail: 'Hasta ahora, definir internet como una red que ponía en contacto a todas las personas del mundo era más un eslogan que una realidad. Si bien los países desarrollados cuentan con una alta tasa de conectividad en la mayoría de sus territorios, gran parte del hemisferio sur y numerosas áreas rurales y aisladas carecen de la infraestructura necesaria para disfrutar de una red de conexión a internet. El proyecto de Google tiene como objetivo principal ofrecer acceso las regiones más pobres, sobre todo en el hemisferio sur. Las potenciales mejoras en la economía, la educación o la sanidad son más que evidentes y aunque la compañía perteneciente al consorcio Alphabet no espera ingresos inmediatos, calcula que la creación de nuevos usuarios (estimados en más de cinco millones) podría reportar muchos beneficios indirectos a Google.'},
            {id: 'info-3', url: require('./assets/tab-3.png'), urldetail: require('./assets/tab-3-detail.png'), name: 'Aplicaciones del blockchain', subtitle: 'Blockchain, lo que está por venir.', subtitleDetail: 'Bitcoin es solo la punta del iceberg de la tecnología blockchain, pero pronto veremos cómo se integra en todos los ámbitos de la sociedad.', montorecaudado: '$1,599,887.50', montometa: '$5,980,000.00', status: 'Activa', classbutton: 'card-footer-item button is-link', progressCant: '40', idcircle: '3', urlvideo: 'https://www.youtube.com/watch?v=7DzdQPsjzis?rel=0', detail: 'Si buscamos en los blogs especializados o en los periódicos digitales, encontramos ya mucho escrito acerca de qué es el blockchain, esa tecnología que nació para hacer posible la moneda virtual o bitcoin, y que ahora promete convertirse en lo que llaman la “cuarta revolución industrial” y en una nueva manera de gestionar los negocios. El blockchain o cadena de bloques es una forma de codificación de la información, un concepto informático un tanto abstracto que, a efectos prácticos, significa fundamentalmente seguridad, veracidad y desintermediación. Cuando damos nuestros datos en Internet, hacemos compras online, transacciones en el banco o contratamos un seguro, por ejemplo, el problema entre las partes que realizan la operación es el de la confianza. Por eso, existe siempre la figura de un intermediario que valida la veracidad de esos datos: la firma digital, el banco, las plataformas como Paypal… Se trata de una información centralizada que siempre debe autorizar un tercero.'},
            {id: 'info-4', url: require('./assets/tab-4.png'), urldetail: require('./assets/tab-4-detail.png'), name: 'El robot mensajero de 6 ruedas', subtitle: 'El robot que te lleva la comida a domicilio', subtitleDetail: 'Un robot mensajero de 6 ruedas ya recorre las calles de algunas ciudades de Reino Unido, Alemania y Suiza.', montorecaudado: '$1,699,887.50', montometa: '$5,380,000.00', status: 'Cerrado', classbutton: 'card-footer-item button is-dark', progressCant: '60', idcircle: '4', urlvideo: 'https://www.youtube.com/watch?v=irh1U-I2S2Q?rel=0', detail: 'En el año 1950, Isaac Asimov publicaba su novela de ciencia ficción “Yo, robot” llevada a la gran pantalla en 2004 con el mismo nombre. En ella aparecían mensajeros androides que entregaban paquetes a domicilio con total puntualidad y, cosa que se agradece, con mucha amabilidad. Esta es una más de las tantas veces en las que la creatividad literaria vaticina lo que está por venir. Porque de nuevo ha sucedido: los primeros ensayos con robots mensajeros ya son una realidad. Y es que parece que la compañía Starship Technologies, una startup creada por algunos de los fundadores de Skype, ya ha puesto en la calle de ciudades europeas como Düsseldorf o Berna los primeros robots con ruedas para repartir comida a domicilio.'}
      ]
    }
  },
  components: {
    Cards
  }
}
</script>

<style lang="scss">

  @import '../../scss/main.scss'

</style>

<style type="text/css">

	.image.is-4by3{
    	height: 208px;
	}

</style>