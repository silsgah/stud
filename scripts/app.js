      
	 window.kendoMobileApplication = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", skin: "flat"});
	  
	  var dataSourcelist = new kendo.data.DataSource({
       transport: {
        read: {
            url: 'http://www.ahtsa.net/api/sample',
            ConentType: "json"
        }
       }
    });
	var person = kendo.observable({
    announcements : [
		{ title: "Holiday Drinks Are Here", description: "Enjoy your favorite holiday drinks, like Pumpkin Spice Lattes.", url: "images/holiday.png" },
		{ title: "Register & Get Free Drinks", description: "Register any Jitterz card and start earning rewards like free drinks. Sign-up now.", url: "images/holiday.png" },
		{ title: "Cheers to Another Year", description: "Raise a cup of bold and spicy Jitterz Anniversary Blend.", url: "images/holiday.png" },
		{ title: "Hot Drinks Anytime", description: "Find and enjoy our, hot drinks anytime.", url: "images/holiday.png" },
		{ title: "Friend and Love", description: "Get more for your friends.Get Love.", url: "images/holiday.png" },
		{ title: "Wide range of choice", description: "Raise a cup of bold and spicy Jitterz Anniversary Blend.", url: "images/holiday.png" }
	    ]
  });
 
	function reply() {
        window.location.href = '#tabstrip-mainstart';
      }
   $("#itemslist").kendoMobileListView({ dataSource: dataSourcelist,
    template: $("#template").text()
   });
kendo.bind($('#personFields'), person);