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
		<div class="container">
		  <div class="col-md-12">
		  	<input type="text" v-model="dv_name">
		  	<button v-on:click="postItem">Add</button>
		  </div>
			<div class="col-md-3" v-for="note in notes">
				{{note.dv_name}} <button v-bind:id="note.dv_id" v-on:click="deleteItem($event)">Delete</button>
			</div>
			<div v-if="errors">There was an issue retrieving the data. {{errorMessage}}</div>
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
		        dv_name: '',
		        errors: false,
		        message: 'About Page',
		        errorMessage: 'No error message returned',
		        notes: []
		      }
		    },
		    methods: {
		        getData: function () {

		        	var resource = this.$resource('http://localhost:4500/api/notes');
		        	var vm = this;

		        	resource.get().then((response) => {

		        	    vm.notes = response.data;

		        	}, (response) => {

		        		vm.errors = true;
		        		vm.errorMessage = "The URL " + response.url + " returned a " + response.status + " status - " + response.statusText;

		        	});

		        },

		        deleteItem: function (event) {

		        	var id = event.currentTarget.id;

		        	var resource = this.$resource('http://localhost:4500/api/notes/'+id);
		        	var vm = this;

		        	resource.delete().then((response) => {

		        	    vm.getData();

		        	}, (response) => {

		        		vm.errors = true;
		        		console.log(response);
		        		vm.errorMessage = "The URL " + response.url + " returned a " + response.status + " status - " + response.statusText;

		        	});

		        },

		          postItem: function () {

		          	var vm = this;

		          	this.$http.post('http://localhost:4500/api/notes',{dv_name:this.dv_name}).then(response => {
		          	  // success callback
		          	  vm.getData();
		          	  //Clear field
		          	  vm.dv_name = '';
		          	}, response => {
		          	  // error callback
		          	  this.errors = true;
		        		console.log(response);
		        		vm.errorMessage = "The URL " + response.url + " returned a " + response.status + " status - " + response.statusText;
		          	});

		        	// var resource = this.$resource('http://localhost:4500/api/notes');
		        	// var vm = this;


		        	// resource.post({dv_name:posted}).then((response) => {

		        	//     vm.getData();

		        	// }, (response) => {



		        	// });

		        }
		    },
		  components: {
		  		naviagation: Nav,
		  		foot: Foot
		  },
		  mounted: function(){
		    this.getData();
		  }
		}
		</script>


		<style>

		</style>
