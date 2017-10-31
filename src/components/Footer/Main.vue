<template>
<div>
    <section class="section bd-typo">        
    </section> 
    <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
                <div class="columns">
                  <div class="column">
 
                      <img src="https://bulma.io/images/bulma-logo.png" width="130" height="40">
                      <img src="../../assets/logo.png" width="50" height="50">
                        <p class="has-text-centered has-text-grey-light"> Innovación es un cambio que introduce novedades. Además, en el uso coloquial y general, el concepto se utiliza de manera específica en el sentido de nuevas propuestas, inventos y su implementación económica. </p>
                  </div>
                </div>

                <nav class="level is-mobile">
                  <div class="level-left">
                    </div>
                      <div class="level-right">
                        <label class="lavel-item">
                          Siguenos en
                        </label>
                        <a class="level-item">
                          <span class="icon is-large"><i class="fa fa-twitter fa-2x"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-large"><i class="fa fa-instagram fa-2x"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-large"><i class="fa fa-facebook fa-2x"></i></span>
                        </a>
                      </div>
                  </nav>
            </div>
          </div>
    </footer>
</div>

</template>

<script>

export default {
  name: 'footer',
  data () {
    return {
      msg: 'Footer'
    }
  }
}
</script>

<style lang="scss">

  @import '../../scss/main.scss'

</style>

<style type="text/css">
    .footer: {
        margin-top: 30px;
    }

</style>