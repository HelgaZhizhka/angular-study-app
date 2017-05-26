'use strict';
(function(){
	
	var model = function() {
	
		var url = "http://www.omdbapi.com/?apikey=520bbe17&page=1&s=",
				defaultFilmName = 'lord';
			
		function getData() {
			return $.get( url + defaultFilmName, function( films ) {
				return films;
			})
		}
		
		function searchData(film) {
			return $.get( url + film, function( films ) {
				return films;
			})
		}
		
		return {
			getData : getData,
			searchData: searchData
		}
	}
	
	window.app = window.app || {};
	window.app.model = model();
	
	
	
}())
