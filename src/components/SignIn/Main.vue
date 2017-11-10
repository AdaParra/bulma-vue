<template>

    <div>
        <Header></Header>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Registrarse
              </h1>
            </div>
          </div>
        </section>
        <section class="section"> 
          <div class="container">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Nombre (s) </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Correo electrónico (ITESM) </label>
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
                  <label class="label"> Contraseña </label>
                  <div class="control  has-icons-left">
                    <input class="input is-large" type="password" placeholder="">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Nómina </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
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
                  <label class="label"> Confirmar Contraseña </label>
                  <div class="control  has-icons-left">
                    <input class="input is-large" type="password" placeholder="">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Puesto </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Socio (Director del campus) </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input class="file-input is-large" type="file" name="resume">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fa fa-upload"></i>
                      </span>
                      <span class="file-label">
                        Seleccionar imagen de perfil
                      </span>
                    </span>
                    <span class="file-name">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="columns is-mobile is-centered">
                <button class="button is-link is-large">Enviar</button>
            </div>

          </div>
        </section>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Header from '../Header/Main.vue'
import Footer from '../Footer/Main.vue'

export default {
  name: 'signIn',
  data () {
    return {
      msg: 'signIn'
    }
  },
  components: {
    Header,
    Footer
  }

}
</script>

<style lang="scss">

  @import '../../scss/main.scss'

</style>