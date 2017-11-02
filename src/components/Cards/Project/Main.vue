<template>
<div>
    <Header/>
      
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{detail.name}}
              </h1>
              <h2 class="subtitle">
                {{ detail.subtitleDetail }}
              </h2>
            </div>
          </div>
        </section>
      <div class="container is-widescreen">
        <div class="columns" style="margin-top: 20px;">
          <div class="column is-two-thirds">
              <img :src="detail.urldetail" width="720px" height="400px">
          </div>
          <div class="container"> 

            <div class="column is-hidden-mobile has-text-centered-mobile has-text-left-desktop">
              <nav class="panel">
                <p class="subtitle"> Total Recaudado</p>
                <h1 class="title"> {{ detail.montorecaudado }} </h1>
                    <div class="has-text-right-desktop has-text-centered-mobile ">
                      <span class="badge is-badge-danger" :data-badge="detail.progressCant">
                        <progress class="progress is-info" :value="detail.progressCant" max="100"> 
                        </progress>
                      </span>
                    </div>

                <p class="subtitle" style="margin-top: 1.5rem;"> Meta </p>
                <h1 class="title"> {{ detail.montometa }} </h1>


                      <div class="" style="border: 0px;">
                          <i class="icon fa fa-users fa-2x" aria-hidden="true" style="margin-right: 20px; margin-bottom: 15px;"> </i>
                          <span class="subtitle"> 250 Donantes </span>
                           
                      </div>

                      <div class="" style="border: 0px;">
                          <i class="icon fa fa-calendar fa-2x" aria-hidden="true" style="margin-right: 20px; margin-bottom: 15px;"></i>
                          <span class="subtitle"> 01/09/17 - 01/10/17 </span>
                      </div>

                      <div class="" style="border: 0px;">
                         <i class="icon fa fa-clock-o fa-2x" aria-hidden="true" style="margin-right: 20px; margin-bottom: 15px;"> </i>
                         <span class="subtitle"> 00:09:10 </span>
                      </div>

                          <button class="button is-link is-fullwidth">
                            DONAR
                          </button>

              </nav> 

                  <nav class="level">
                      <!-- Left side -->
                      <div class="level-left">
                        <div class="level-item is-large">
                          <p class="subtitle"> Compartir en </p>
                        </div>
                        <div class="level-item is-large">
                            <a href="#Twitter">
                                <span class="icon has-text-info">
                                    <i class="fa fa-twitter fa-2x"></i>
                                </span>
                            </a>
                         </div>
                         <div class="level-item is-large">
                             <a href="#Facebook">  
                                <span class="icon has-text-info">
                                    <i class="fa fa-facebook fa-2x"></i>
                                </span>
                             </a>
                         </div>
                      </div>
                  </nav>

            </div>

            <!-- Mobile
            https://api.nasa.gov/planetary/apod?api_key=dDq0TihxNKjDTF1pEY5TTiSQ5feu1D7ZGQqnji1W -->
            <div class="column is-mobile is-hidden-tablet is-hidden-desktop">
              <div class="container" style="display: flex; justify-content: center;">
                  <section class="section is-large" style="width: 490px">

                        <label class="label"> Total Recaudado </label>
                          <h1 class="title is-4"> {{ detail.montorecaudado }} </h1>

                        <label class="label"> Meta </label>
                          <h1 class="title is-4"> {{ detail.montorecaudado }} </h1>

                      <div class="paddingMobile">
                          <i class="icon fa fa-users fa-2x" aria-hidden="true"> </i>
                          <span class="subtitle" style="padding-left: 1rem;"> 250 Donantes </span>  
                      </div>
                      <div class="paddingMobile">
                          <i class="icon fa fa-calendar fa-2x" aria-hidden="true"></i>
                          <span class="subtitle" style="padding-left: 1rem;"> 01/09/17 - 01/10/17 </span>
                      </div>

                      <div class="paddingMobile">
                         <i class="icon fa fa-clock-o fa-2x" aria-hidden="true"> </i>
                         <span class="subtitle" style="padding-left: 1rem;"> 00:09:10 </span>
                      </div>
                    

                        <label class="label"> Progreso </label>
                        <div class="has-text-centered-mobile paddingMobile">
                          <span class="badge is-badge-danger" :data-badge="detail.progressCant">
                            <progress class="progress is-info" :value="detail.progressCant" max="100"> 
                            </progress>
                          </span>
                        </div>

                          <nav class="level is-mobile">
                            <div class="level-left">
                              <a class="level-item">
                                <span class="icon is-large"><i class="fa fa-twitter fa-2x"></i></span>
                              </a>
                              <a class="level-item">
                                <span class="icon is-large"><i class="fa fa-retweet fa-2x"></i></span>
                              </a>
                              <a class="level-item">
                                <span class="icon is-large"><i class="fa fa-facebook fa-2x"></i></span>
                              </a>
                            </div>
                            <div class="level-right">
                              <button class="button is-link ">
                                DONAR
                              </button>
                            </div>
                          </nav>
                    </section>
                </div>
            </div>
            <!-- end mobile -->

          </div>
        </div>

        <div class="columns">
          <div class="column is-two-thirds">
            <tabs animation="slide" :only-fade="false" class="is-boxed">
              <tab-pane label="Detalles">
                <p class="has-text-justify">
                  {{ detail.detail}}
                </p>
                <img :src="detail.urldetail" width="720px" height="400px" style="margin-top: 20px;">
              </tab-pane>
              <tab-pane label="Donantes">
                <Donnor :donnor='donnor' />
              </tab-pane>

              <tab-pane label="Comentarios">
                <Comments :comments='comments' />        
              </tab-pane>
            </tabs>
          </div>
          <div class="column">

            <div class="notification">
              <h1 class="title has-text-centered"> Donación Rapida </h1>
              <div class="control is-expanded">
                <input class="input" type="number" placeholder="MXN">
                <div class="select is-fullwidth">
                  <select placeholder="Campus">
                    <option> Option 1 </option>
                    <option> Option 2 </option>
                  </select>
                </div>
              </div>
              <button class="button is-info is-fullwidth has-text-centered"  style="height:50px;">
                <h1 class="title">DONAR</h1>
              </button>
            </div>
            <div class="overflow is-hidden-mobile"> 
              <div class="notification is-link">
                <h1 class="title has-text-centered"> 500 MXN </h1>
                <p class="has-text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.
                </p>
              </div>
              <div class="notification is-link">
                <h1 class="title has-text-centered"> 1000 MXN </h1>
                <p class="has-text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.
                </p>
              </div>
              <div class="notification is-link">
                <h1 class="title has-text-centered"> 2000 MXN </h1>
                <p class="has-text-justify">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    <Footer/>  
</div>
</template>

<script>
import Header from '../../Header/Main.vue'
import Cards from '../Cards.vue'
import { Tabs, TabPane } from 'vue-bulma-tabs'
import Comments from './Comments/Main.vue'
import Donnor from './Donnor/Main.vue'
import Footer from '../../Footer/Main.vue'

export default {
  name: 'project',
  data () {
    return {
      comments: [
        {id: '0', name: 'Maribel Díaz Torre ', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'},
        {id: '1', name: 'Maribel Díaz Torre ', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'},
        {id: '2', name: 'Maribel Díaz Torre ', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'},
        {id: '3', name: 'Maribel Díaz Torre ', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'},
        {id: '4', name: 'Maribel Díaz Torre ', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'},
        {id: '5', name: 'Maribel Díaz Torre', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'},
        {id: '6', name: 'Maribel Díaz Torre ', date: '31/02/2017', time: '31m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'}
      ],
      donnor: [
        {id: '0', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '1', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '2', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '3', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '4', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '5', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '6', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '7', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '8', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '9', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '10', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '11', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '12', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '13', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '14', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '15', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '16', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '17', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '18', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '19', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'},
        {id: '20', name: 'Maribel Díaz ha apoyado con este proyecto', date: '31/02/2017', time: '14:54:10'}

      ]
    }
  },
  components: {
    Header,
    Cards,
    Tabs,
    TabPane,
    Donnor,
    Comments,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '../../../scss/main.scss'

</style>

<style type="text/css">

  .has-text-justify{
    text-align: justify;
  }

  .paddingMobile{
    padding-bottom: 1rem;
  }

  .overflow {
    overflow-y: scroll;
    height: 600px;
  }

  

</style>