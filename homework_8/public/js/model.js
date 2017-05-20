'use strict';
(function(){
	
	var model = function() {
	
		var url = "http://www.omdbapi.com/?page=1&s=",
				apiKey = "&apikey=520bbe17",
				defaultFilmName = 'Matrix';
			
		function getData() {
			return $.get( url + defaultFilmName + apiKey, function( data ) {
				return data;
			})
		}
		
		function searchData(film) {
			return $.get( url + film + apiKey, function( data ) {
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
