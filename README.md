Prefetcher
==========

Simple script to load files into a hidden iframe (so your current page remains unaffected) to speed up user experience via browser caching.


## Usage
1) Load the Prefetcher script into your page: <script src="js/Prefetcher.js"></script>
2) Initialize the Prefetcher by assigning the files you wish to prefetch in an array:
```
Prefetcher.init([
	'js/resourceOne.js',
	'css/someFile.css',
	'img/somePicture.jpg'
]);
```
3) ...
4) Profit!


## Running Locally
It's recommended the use of a local server (like npm-serve: https://www.npmjs.org/package/serve) if you want to test this script locally to enable file access.