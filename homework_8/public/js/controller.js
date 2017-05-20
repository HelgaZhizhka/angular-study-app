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
	
	function initGallery(data){
		gallery = new Gallery(data);
	}
	
	function init() {
		
		model.getData().then((data) => {
			initGallery(data);
			bindEvents();
		});
	}
	init();
	
}())
