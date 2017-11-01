<template>

    <div>
        <Header></Header>
        <Hero/>
        <Cards/>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Header from './Header/Main.vue'
import Hero from './Hero/Main.vue'
import Cards from './Cards/Main.vue'
import Footer from './Footer/Main.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Home'
    }
  },
  components: {
    Header,
    Hero,
    Cards,
    Footer
  }
}
</script>
<style type="scss">

    @import '../scss/main.scss'

</style>