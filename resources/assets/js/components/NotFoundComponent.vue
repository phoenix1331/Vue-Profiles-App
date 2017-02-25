		<template>
			<h1>{{notfound}}</h1>
		</template>

		<script>


		  export default {
		    data () {
		      return {
		        results: [],
		        errors: false,
		        notfound: 'Page Not Found'
		      }
		    },
		    methods: {
		        getData: function () {

		        }
		    },
		  components: {

		  },
		  ready: function(){
		    this.getData();
		  }
		}
		</script>


		<style>

		</style>
