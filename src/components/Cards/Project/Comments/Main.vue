<template>
<div>
    <article v-for='(comments, index) in comments' class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
        </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong> {{ comments.name }}</strong> <small> {{ comments.date }}</small> <small> {{ comments.time}}</small>
                        <br>
                        {{ comments.text }}
                    </p>
                </div>
            </div>
    </article>                    
</div>
</template>


<script>

export default {
  name: 'commentarios',
  data () {
    return {
      msg: 'xxx'
    }
  },
  props: ['comments']
}
</script>

<style lang="scss">

  @import '../../../../scss/main.scss'

</style>

