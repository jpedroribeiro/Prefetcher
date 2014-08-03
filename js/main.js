// Prefetcher (not for mobile or ie8- [yet])
if ( $('.touch').length < 1 ){

	// Basic usage, load files on page load
	Prefetcher.init([
		'js/resourceOne.js',
		'css/someFile.css',
		'img/somePicture.jpg'
	]);

	// You can also prefetch files when hovering or clicking of elements or any other event:
	// $('#js-my-button').on('click',function(e) {
	// 	Prefetcher.init([
	// 		'js/search.js',
	// 		'css/search.css'
	// 	]);	
	// });
}