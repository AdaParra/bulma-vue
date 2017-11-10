<template>

    <div>
        <Header></Header>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Conoce como funciona nuestra plataforma!
              </h1>
            </div>
          </div>
        </section>
        <section class="section">
            
            <div class="container">
                <div class="content">
                  <h1>¿Que es?</h1>
                  <p class="has-text-justify">"Nombre PLATAFORMA" es una plataforma única creada para la recaudación de fondos para múltiples proyectos filantrópicos del Tec de Monterrey. Desarrollar múltiples causas de atracción de recursos para apoyar los programas estratégicos que estén alineados al 2020.</p>
                  <h2>¿A quién va dirigido?</h2>
                  <ol>
                      <li>Los campus del Tecnológico de Monterrey que desean recaudar fondos para financiar una causa filantrópica en su comunidad.</li>
                      <li>Las personas y/o empresas que quieren apoyar a estudiantes con espíritu de superación del Tecnológico de Monterrey para transformar a México.</li>
                  </ol>
                  <h2>¿Cómo funciona?</h2>
                  <p class="has-text-justify">Para los campus de Tecnológico de Monterrey: Las causas que quieran ser publicadas en esta plataforma deben ser registradas por el responsable de inversiones filantrópicas del campus.</p>
                  <h2>¿Cómo inicio?</h2>
                  <ol>
                      <li>Define y planifica tu campaña</li>
                      <li>Regístrate</li>
                      <li>Sube la información de tu campaña.</li>
                      <li>Solicita la aprobación de tu campaña</li>
                      <li>Comienza y promueve tu campaña</li>
                  </ol>
                  <figure>
                      <img src="./assets/imagen-1.png">
                  </figure>
                  <h2>Para los donantes: </h2>
                  <ol>
                      <li>Identifícate con una o más de nuestras causas.</li>
                      <li>Selecciona el monto que deseas donar</li>
                      <li>Haz realidad un sueño.</li>
                  </ol>
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
  name: 'about',
  data () {
    return {
      msg: 'about us'
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