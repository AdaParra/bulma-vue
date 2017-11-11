<template>

    <div>
        <Header></Header>
        <section class="hero is-primary has-text-centered">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{ detail.name }}
              </h1>
              <h2 class="subtitle">
                {{ detail.subtitle }}
              </h2>
            </div>
          </div>
        </section>

        <section class="section"> 
        
          <div class="container">

            <h1 class="title">Donación Rápida</h1>
            <div class="columns" style="margin-left: 2.5rem;">
                
                <div class="column is-5 has-text-letf">
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="text" placeholder="$">
                    </div>
                  </div>
                </div>
                <div class="column is-5 has-text-letf">
                  <div class="field">
                    
                    <div class="select is-fullwidth is-large">
                          <select placeholder="Campus">
                            <option> Campus </option>
                            <option> Campus </option>
                          </select>
                    </div>
                  </div>
                </div>
                <div class="column is-2">
                <router-link :to="{ name: 'Payment', params: { id: id, detail: detail }}">
                  <button class="button is-link is-large">DONAR</button>
                </router-link>
                </div>
            </div>
            <div class="marginButton is-hidden-mobile"></div>
            <div class="columns classBorder" style="margin-bottom: 2.5rem;">
                
                <div class="column is-9 has-text-letf" style="margin-left: 2.5rem;">
                  <h1 class="subtitle"> Donar 100 MXN </h1>
                  <p class="has-text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip</p>
                </div>

                <div class="column is-3 has-text-centered">
                  <div class="marginButton is-hidden-mobile"></div>
                  <router-link :to="{ name: 'Payment', params: { id: id, detail: detail }}">
                    <button class="button is-link is-large">DONAR</button>
                  </router-link>
                </div>
            </div>

            <div class="columns classBorder" style="margin-bottom: 2.5rem;">
                
                <div class="column is-9 has-text-letf" style="margin-left: 2.5rem;">
                  <h1 class="subtitle"> Donar 500 MXN </h1>
                  <p class="has-text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip</p>
                </div>

                <div class="column is-3 has-text-centered">
                  <div class="marginButton is-hidden-mobile"></div>
                  <router-link :to="{ name: 'Payment', params: { id: id, detail: detail }}">
                    <button class="button is-link is-large">DONAR</button>
                  </router-link>
                </div>
            </div>

            <div class="columns classBorder" style="margin-bottom: 2.5rem;">
                
                <div class="column is-9 has-text-letf" style="margin-left: 2.5rem;">
                  <h1 class="subtitle"> Donar 1000 MXN </h1>
                  <p class="has-text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip</p>
                </div>

                <div class="column is-3 has-text-centered">
                  <div class="marginButton is-hidden-mobile"></div>
                  <router-link :to="{ name: 'Payment', params: { id: id, detail: detail }}">
                    <button class="button is-link is-large">DONAR</button>
                  </router-link>
                </div>
            </div>

            <div class="columns classBorder" style="margin-bottom: 2.5rem;">
                
                <div class="column is-9 has-text-letf" style="margin-left: 2.5rem;">
                  <h1 class="subtitle"> Donar 2000 MXN </h1>
                  <p class="has-text-justify"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip</p>
                </div>

                <div class="column is-3 has-text-centered">
                  <div class="marginButton is-hidden-mobile"></div>
                  <router-link :to="{ name: 'Payment', params: { id: id, detail: detail }}">
                    <button class="button is-link is-large">DONAR</button>
                  </router-link>
                </div>
            </div>

          </div>
        </section>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Header from '../Header/Main.vue'
import Cards from '../Cards/Cards.vue'
import Footer from '../Footer/Main.vue'

export default {
  name: 'Donate',
  data () {
    return {
      msg: 'Donate'
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

  @import '../../scss/main.scss'

</style>

<style type="text/css">
  .marginButton{
    margin-top: 3rem;
  }
  .classBorder{
    margin-bottom: 2.5rem;
    border: solid 1px lightgrey;
    border-radius: 10px;
  }
</style>