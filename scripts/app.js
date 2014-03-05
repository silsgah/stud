(function (global) {
    
    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();

    }, false);

    window.kendoMobileApplication = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", skin: "flat" });

   
})(window);

	 
	  
	 