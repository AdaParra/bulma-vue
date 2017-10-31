<template>

    <div>
        <Header></Header>

        <Footer></Footer>
    </div>
    
</template>

<script>

import Header from './Header/Main.vue'
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
    Footer
  }
}
</script>
<style type="scss">

    @import '../scss/main.scss'

</style>