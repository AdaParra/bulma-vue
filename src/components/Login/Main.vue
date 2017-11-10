<template>

    <div>
        <Header></Header>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Inicio de Sesión
              </h1>
            </div>
          </div>
        </section>
        <section class="section"> 
          <div class="container is-hidden-mobile" style="width: 500px;">
            <div class="columns is-desktop is-centered">
              <div class="column">
                <div class="field is-large">
                  <label class="label"> </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="Email">
                     <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-desktop is-centered">
              <div class="column">
                <div class="field is-large">
                  <label class="label"> </label>
                  <div class="control  has-icons-left">
                    <input class="input is-large" type="password" placeholder="Contraseña">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  
                  <a href="#">
                    <label class="label"> ¿Olvidaste tu contraseña? </label>
                  </a>
                </div>
              </div>
            </div>
            <div class="columns is-centered" style="margin-top:20px">
              <button class="button is-link is-fullwidth is-large">INGRESAR</button>
            </div>
          </div>


          <!-- View Mobile -->

          <div class="container is-hidden-desktop">
            <div class="columns is-mobile is-centered">
              <div class="column">
                <div class="field is-large">
                  <label class="label"> </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                     <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-desktop is-centered">
              <div class="column">
                <div class="field is-large">
                  <label class="label"> </label>
                  <div class="control  has-icons-left">
                    <input class="input" type="password" placeholder="Contraseña">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <a href="#">
                    <label class="label"> ¿Olvidaste tu contraseña? </label>
                  </a>
                </div>
              </div>
            </div>
            <div class="columns is-centered" style="margin-top:20px">
              <button class="button is-link is-fullwidth">Enviar</button>
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
  name: 'Login',
  data () {
    return {
      msg: 'Login'
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