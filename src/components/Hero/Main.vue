<template>
	<div >
        <section class="hero is-primary is-medium">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Proyectos tecnológicos para los que 2018 puede ser su año
              </h1>
              <h2 class="subtitle">
                Una galería de tecnologías insólitas, que sin embargo gracias a tu <strong class="donation">DONACIÓN</strong>  podrian convertirse en realidad. 
              </h2>
            </div>
          </div>
        </section>
    <section class="section bd-typo">        
        <div class="content has-text-centered">
          <h1>Próximos Proyectos</h1>
          <p class="has-text-centered has-text-grey-light"> Los avances de la innovación y la tecnología se están produciendo en las últimas décadas a un ritmo vertiginoso. Tanto que, como dice Juan Escaliter en su libro Exploradores del futuro, igual que a nuestros “abuelos evolutivos” que convivieron con la glaciación y los neandertales les resultaría inconcebible un trasplante de cara o atravesar los océanos en pocas horas, cuando termine este siglo, lo que hoy nos parece a nosotros ciencia ficción, podría convertirse en realidad. </p>
        </div>
    </section> 
	</div>
</template>

<script>

export default {
  name: 'hero',
  data () {
    return {
      msg: 'Hero'
    }
  }

}
</script>

<style lang="scss">

  @import '../../scss/main.scss'

</style>

<style type="text/css">
	.test{
		background: red;
	}
  .donation{
    color: #004892;
    font-weight: bold;
  }
</style>