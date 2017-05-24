//import $ from 'jquery'


function MobileMenu(){

	this.siteHeader = $('.site-header'); // header tag
	this.menuIcon = $(".site-header__menu-icon"); // ham menu
	//this.menuContent = $('.site-header__menu-content'); // nothing
	this.siteHeaderLinks = $('.site-header a'); // all links in header tag

	this.events = function(){
		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
		this.siteHeaderLinks.click(this.clearMenu.bind(this)); 
	}

	this.toggleTheMenu = function(){
		//this.menuContent.toggleClass('site-header__menu-content--is-visible');  
		this.siteHeader.toggleClass('site-header--is-expanded'); 
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}

	this.clearMenu = function(){
		this.siteHeader.removeClass('site-header--is-expanded');
	}
	this.events(); 
}

var levelupMenu = new MobileMenu; 


//export default MobileMenu;