<template>
    <div>
        <Header />
          <section class="section">
            <div class="container">
              <Cards :info='cards'/>      
            </div>
          </section>
        <Footer />
    </div>
</template>

<script>

import Header from '../Header/Main.vue'
import Cards from '../Cards/Cards.vue'
import Footer from '../Footer/Main.vue'

export default {
  name: 'projects',
  data () {
    return {
      cards:
      [

            {id: '1', url: require('./assets/tab-3.png'), name: 'Congreso de Astronomía', subtitle: 'Internacionalización', montorecaudado: '$1,499,887.50', montometa: '$5,680,000.00', status: 'Activa', classbutton: 'card-footer-item button is-link', progressCant: '90', idcircle: '2'},
            {id: '2', url: require('./assets/tab-4.png'), name: 'Maratón de Programación', subtitle: 'Becas de Excelencia', montorecaudado: '$1,599,887.50', montometa: '$5,980,000.00', status: 'Cerrado', classbutton: 'card-footer-item button is-dark', progressCant: '40', idcircle: '3'},
            {id: '3', url: require('./assets/tab-5.png'), name: 'Congreso de Filosofía', subtitle: 'Internacionalización', montorecaudado: '$1,699,887.50', montometa: '$5,380,000.00', status: 'Activa', classbutton: 'card-footer-item button is-link', progressCant: '60', idcircle: '4'},
            {id: '4', url: require('./assets/tab-1.png'), name: 'Inteligencia Artificial 2017', subtitle: 'Lideres del mañana', montorecaudado: '$1,399,887.50', montometa: '$5,380,000.00', status: 'Cerrado', classbutton: 'card-footer-item button is-dark', progressCant: '5', idcircle: '5'},
            {id: '5', url: require('./assets/tab-3.png'), name: 'Congreso de Astronomía', subtitle: 'Lideres del mañana', montorecaudado: '$1,399,887.50', montometa: '$5,380,000.00', status: 'Activa', classbutton: 'card-footer-item button is-link', progressCant: '10', idcircle: '6'},
            {id: '6', url: require('./assets/tab-4.png'), name: 'Maratón de Programación', subtitle: 'Becas de Excelencia', montorecaudado: '$1,399,887.50', montometa: '$5,380,000.00', status: 'Cerrado', classbutton: 'card-footer-item button is-dark', progressCant: '77', idcircle: '7'},
            {id: '7', url: require('./assets/tab-5.png'), name: 'Congreso de Filosofía', subtitle: 'Internacionalización', montorecaudado: '$1,399,887.50', montometa: '$5,380,000.00', status: 'Activa', classbutton: 'card-footer-item button is-link', progressCant: '45', idcircle: '8'},
            {id: '8', url: require('./assets/tab-1.png'), name: 'Inteligencia Artificial 2017', subtitle: 'Lideres del mañana', montorecaudado: '$1,399,887.50', montometa: '$5,380,000.00', status: 'Cerrad', classbutton: 'card-footer-item button is-dark', progressCant: '95', idcircle: '9'}

      ]
    }
  },
  components: {
    Header,
    Cards,
    Footer
  }

}
</script>

<style lang="scss">

  @import '../../scss/main.scss'

</style>