<template>
<div>
    
<div class="columns is-multiline">  
    <div v-for='(info, index) in info' class="column is-one-quarter">  
        <router-link :to="{ name: 'Project', params: { id: index, detail: info } }">
            <div :id="info.id" class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                      <img :src="info.url" height="208px" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-size-4-desktop is-size-5-mobile is-size-6-tablet" style="margin-bottom: 0px; margin-top: 0px; margin-top: 10px; text-align: center; border-bottom: 0px; padding-bottom: 10px; margin-bottom: 20px;"> {{ info.name }} </p>
                        </div>
                    </div>

                    <div class="content has-text-centered">
                        <vue-circle
                            :id="info.idcircle"
                            :progress="info.progressCant"
                            :size="120"
                            :reverse="false"
                            line-cap="round"
                            :fill="fill"
                            empty-fill="#b3b3b3"
                            :animation-start-value="0.0"
                            :start-angle="0"
                            insert-mode="append"
                            :thickness="9"
                            inner-text="Hi...."
                            :show-percent="true">
                        </vue-circle>
                    </div>
                    <div class="content has-text-centered">
                        <p class="subtitle is-6" style="color: #b3b3b3;"> {{ info.subtitle }}  </p>
                        <p class="subtitle is-6" style="color: #004892;"> {{ info.montorecaudado }}  </p>
                        <p class="subtitle is-6" style="color: #b3b3b3;"> Recaudado  </p>
                        <p class="subtitle is-6" style="color: #009969;"> {{ info.montometa }}  </p>
                        <p class="subtitle is-6" style="color: #b3b3b3;"> Meta  </p>
                    </div>

                </div>

                <footer class="card-footer">
                    <a href="#" :class="info.classbutton">{{ info.status }}</a>
                </footer>
            </div>
        </router-link>    
    </div>
</div>
</div>

</template>

<script>

import VueCircle from 'vue2-circle-progress'

export default {
  name: 'cards',
  data () {
    return {
      fill: '#004892'
    }
  },
  components: {
    VueCircle
  },
  props: ['info']
}
</script>

<style lang="scss">

  @import '../../scss/main.scss'

</style>

<style type="text/css">

	.image.is-4by3{
    	height: 208px;
	}


</style>