$.getJSON("topspots.json", function ( data ) {
	$.each( data, function( key, val ) {
		var link = "<a href=https://www.google.com/maps?q=" + val.location + "><button>Open in Google Maps</button></a>";
		$('tbody').append( '<tr><td>' + val.name + '</td><td>' + val.description + '</td><td>' + link + '</td></tr>');
		})	
	});

	

