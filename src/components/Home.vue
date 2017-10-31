<template>

    <div>
        <Header></Header>
        <Hero/>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Header from './Header/Main.vue'
import Hero from './Hero/Main.vue'
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
    Footer
  }
}
</script>
<style type="scss">

    @import '../scss/main.scss'

</style>