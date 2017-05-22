'use strict';
(function() {
	
	function Gallery (items) {
		this.DOMElements = {
			searchInput   : document.querySelector("#searchInput"),
			searchButton	: document.querySelector("#searchButton"),
			galleryContainer  : document.querySelector("#galleryFilm"),
			emptyMsgContainer : document.querySelector(".empty-msg")
		};
		this.items = items;
		this.searchValue = '';
	
		this.eventHolder = $({});
		this.updateEventName = "update";
		this.searchEventName = "search";
		this.init();
	}
	
	Gallery.prototype = {
		
		init : function () {
			this.buildGallery();
			this.initListeners();
		},
		
		buildGallery : function () {
			let films = this.items.Search || [];
			this.DOMElements.galleryContainer.innerHTML = '';
			
			if(!films.length) {
				this.showEmptyMsg();
			}
			this.DOMElements.galleryContainer.innerHTML = this.buildHtmlTemplate(films).join('');
		},
		
		initListeners : function () {
			this.DOMElements.searchButton.addEventListener("click", () => {
				this.eventHolder.trigger( this.searchEventName , [this.searchElement()]);
			});
		},
		
		searchElement : function () {
			return this.DOMElements.searchInput.value;
		},
		
		showEmptyMsg: function () {
			this.DOMElements.emptyMsgContainer.innerText = "Ничего не найдено";
		},
		
		refreshGallery: function (items) {
			this.items = items;
			this.buildGallery();
		},
		
		buildHtmlTemplate : function (arr) {
			return arr.map(function(item){
					return `<div class="col-sm-6">
											<div class="thumbnail">
												<img src="${item.Poster}" class="img-thumbnail">
												<p class="title">${item.Title}</p>
												<p class="subtitle">${item.Year}</p>
												<button class="btn btn-default">Узнать больше</button>
											</div>
									</div>`
			});
		}
		
	}
	
	window.app = window.app || {};
	window.app.Gallery = Gallery;
	
}());
