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
		        message: 'About Page'
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
