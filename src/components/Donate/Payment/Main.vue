<template>

    <div>
        <Header></Header>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Has decidido apoyar esta causa
              </h1>
              <h2 class="subtitle">
                {{ detail.name }}
              </h2>
            </div>
          </div>
        </section>

        <section class="section"> 
        
          <div class="container">

            <h1 class="title">Tarjeto crédito/débito</h1>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label"> Nombre del Tarjehabiente </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Calle y número </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>

                <div class="field">
                  <label class="label"> Número de Tarjeta </label>
                  <div class="control has-icons-left">
                    <input class="input is-large" type="text" placeholder="">
                        <span class="icon is-small is-left">
                          <i class="fa fa-cc-visa"></i>
                        </span>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="field">
                  <label class="label"> Teléfono </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Código postal </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <div class="columns">
                    <div class="column">
                      <label class="label"> Fecha de vencimiento </label>
                      <div class="control  has-icons-left">
                        <input class="input is-large" type="text" placeholder="">
                        <span class="icon is-small is-left">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </div>
                    </div>
                    <div class="column">
                      <label class="label"> Codigo de Seguridad </label>
                      <div class="control">
                        <input class="input is-large" type="number" placeholder="">
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 class="title">Datos del donante</h1>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Nombre (s) </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Correo electrónico </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="">
                     <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label"> Campus </label>
                  <div class="select is-fullwidth is-large">
                        <select>
                          <option></option>
                          <option></option>
                        </select>
                  </div>
                </div>


              </div>

              <div class="column">
                <div class="field">
                  <label class="label">Apellido (s)</label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Confirma correo electrónico </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="">
                     <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                        <span class="icon is-small is-right">
                          <i class="fa fa-check"></i>
                        </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Matricula </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>

              </div>
            </div>
            <div class="columns is-mobile is-centered">
                <button class="button is-link is-large">ENVIAR</button>
            </div>

          </div>
        </section>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Header from '../../Header/Main.vue'
import Cards from '../../Cards/Cards.vue'
import Footer from '../../Footer/Main.vue'

export default {
  name: 'Payment',
  data () {
    return {
      msg: 'Payment'
    }
  },
  components: {
    Header,
    Cards,
    Footer
  },
  props: {
    id: {
      required: true
    },
    detail: {
      required: true
    }
  }

}
</script>

<style lang="scss">

  @import '../../../scss/main.scss'

</style>