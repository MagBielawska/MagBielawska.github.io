$.ajax({

		type: 'GET',
		url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=office',
		success: function(data) { printGif(data);}
		// error: function(data) { console.log('nope.')},
		// complete: function(data)  { console.log('yay!')},

		});

		function printGif(data) {
			var imageSource = `<img src = ${data.data.image_url}  alt= 'GifGif'>`;
			debugger;
			$('#gif').html(imageSource);
		};