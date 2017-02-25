		<template>


		<div id="app">
		<naviagation></naviagation>
		<section class="jumbotron">
		  <div class="container">
		  <div class="col-md-8">
		    <h1 class="jumbotron-heading">{{message}}</h1>
		    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
		    <p>
		      <a href="#" class="btn btn-primary">Main call to action</a>
		      <a href="#" class="btn btn-secondary">Secondary action</a>
		    </p>
		    </div>
		  </div>
		</section>
		<div class="album text-muted">
		     <div class="container">

		       <div class="row">
		       <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		         </div>
		         <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		         </div>
		         <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>

		    </div>
		    <div class="col-md-3 mb-2">     <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		         </div>
		         <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		         </div>
		         <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>

		    </div>
		    <div class="col-md-3 mb-2">
		    <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		         </div>
		         <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		         </div>
		         <div class="col-md-3 mb-2">
		         <div class="card">
		           <img src="https://unsplash.it/300/150" alt="Card image cap">
		           <p class="card-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		         </div>
		       </div>
		       </div>

		     </div>
		   </div>
		<foot></foot>
		</div>
		</template>

		<script>

			import Nav from './Nav.vue';
			import Foot from './Foot.vue';
		  export default {
		    data () {
		      return {
		        results: [],
		        errors: false,
		        message: 'Home Page'
		      }
		    },
		    methods: {
		        getData: function () {

		        }
		    },
		  components: {
		  	naviagation: Nav,
		  	foot: Foot

		  },
		  ready: function(){
		    this.getData();
		  }
		}
		</script>


		<style>

		</style>
