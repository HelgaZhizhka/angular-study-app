'use strict';
(function(){
	
	var model = function() {
	
		var url = "http://www.omdbapi.com/?page=1&s=",
				defaultFilmName = 'Matrix';
			
		function getData() {
			return $.get( url + defaultFilmName, function( data ) {
				return data;
			})
		}
		
		function searchData(film) {
			return $.get( url + film, function( data ) {
				return data;
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
