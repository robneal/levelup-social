//import $ from 'jquery'


function MobileMenu(){

	this.siteHeader = $('.site-header'); 
	this.menuIcon = $(".site-header__menu-icon");
	this.menuContent = $('.site-header__menu-content'); 

	this.events = function(){
		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
	}

	this.toggleTheMenu = function(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');  
		this.siteHeader.toggleClass('site-header--is-expanded'); 
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}

	this.events(); 
}

var levelupMenu = new MobileMenu; 


//export default MobileMenu;