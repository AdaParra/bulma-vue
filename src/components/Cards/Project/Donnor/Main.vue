<template>

<div>  
    <table class="table is-narrow is-fullwidth">
        <tbody>
            <tr v-for='(donnor, index) in donnor'>
                <th> 
                    <span class="icon has-text-danger">
                        <i class="fa fa-heart fa-2x"></i>
                    </span> 
                      </th>
                    <td> {{ donnor.name }}</td>
                    <td> {{ donnor.date }}</td>
            </tr>
        </tbody>
    </table>
</div>
    
</template>

<script>

export default {
  name: 'Donnor',
  data () {
    return {
      msg: 'msg donnors'
    }
  },
  props: ['donnor']
}
</script>

<style lang="scss">

  @import '../../../../scss/main.scss'

</style>