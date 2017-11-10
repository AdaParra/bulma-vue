<template>
<div>  
    <div class="container is-fullhd">
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link :to="{ name: 'Home'}" class="navbar-item">
            <img src="../../assets/logo-4.png" width="160px" alt="Bulma and vuejs">
          </router-link>
          <button class="button navbar-burger" :data-target="dataTarget">
            <span> </span>
            <span> </span>
            <span> </span>
          </button>
        </div>

        <div class="navbar-menu" :id="idnavMenu">
          
          <div class="navbar-start">

              <router-link :to="{ name: 'Home'}" class="navbar-item">
                Inicio
              </router-link>

              <router-link :to="{ name: 'Projects' }" class="navbar-item">
                Proyectos
              </router-link>

              <router-link :to="{ name: 'About'}" class="navbar-item">
                ¿Como Funciona?
              </router-link>
              

              <a class="navbar-item">
                Preguntas Frecuentes
              </a>
          </div>
      
        <div class="navbar-end">
              <div class="buttons">
                <router-link :to="{ name: 'SignIn' }" class="navbar-item">
                  <span class="button is-success">Registrate</span>
                </router-link> 
              </div>

              <div class="buttons">
                <router-link :to="{ name: 'Login' }" class="navbar-item">
                    <span class="button is-info">Iniciar Sesión</span>
                </router-link>
              </div>
            
          </div>
        </div>
      </nav>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '../../scss/main.scss'

</style>

<style type="text/css">

    .container-logo{
        background: #004892;
        height: 57px;
        width: 180px;
        margin-right: 30px;
    }

    .navbar-item{
        padding-top: 0px;
    }
 
</style>