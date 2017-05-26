(function(){
	
	var model = window.app.model;
	var Gallery = window.app.Gallery;
	var gallery = null;
 
 
	function bindUpdate() {
		gallery.eventHolder.on( gallery.updateEventName, (event, item) => {
			model.updateData(item);
		});
	}
	
	function bindSearch() {
		gallery.eventHolder.on( gallery.searchEventName, (event, searchValue) => {
			model.searchData(searchValue).then(films => {
				gallery.refreshGallery(films);
			});
		});
	}
	
	function bindEvents(){
		bindUpdate();
		bindSearch();
	}
	
	function initGallery(films){
		gallery = new Gallery(films);
	}
	
	function init() {
		
		model.getData().then((films) => {
			initGallery(films);
			bindEvents();
		});
	}
	init();
	
}())
