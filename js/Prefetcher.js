/*
*	Prefetcher
*	-------------------------------
*	
*/

var Prefetcher = {

	// Main method
	init: function (arrayOfFiles) {
		// Reference to the Prefetcher object
		var that = this;

		// Check if iframe is already there...
		if ( !document.getElementById('prefetchContainer') ) {
			myiframe = document.createElement('iframe');
			myiframe.id = "prefetchContainer";

			// properties to hide iframe from screen
			myiframe.tabIndex = -1;
			myiframe.style.position = "absolute";
			myiframe.style.top = "-100px";
			myiframe.style.width = "1px";
			myiframe.style.height = "1px";

			// This makes sure to only request files after iframe is loaded (it's a IE9- thing)
			myiframe.src = "about:blank";
			myiframe.addEventListener('load', function(e){
				// get files
				that.getFiles(arrayOfFiles, myiframe.contentDocument.body);
			}, false);

			// Appends iframe to the bottom of the page
			document.body.appendChild(myiframe);
		} else {
			// cache selector to var
			myiframebody = document.getElementById('prefetchContainer').contentDocument.body;

			// only make the ajax call if no file was already prefetched
			if ( this.checkPrefetchedFiles(arrayOfFiles, myiframebody) === false ) {
				this.getFiles(arrayOfFiles, myiframebody);
			}
		}

	},


	// Loop through array of files to avoid duplicate requests
	checkPrefetchedFiles: function (arrayOfFiles, myiframebody) {

		for (var i = arrayOfFiles.length - 1; i >= 0; i--) {
			var tempTag,
				file = arrayOfFiles[i];

			// test if file isn't already there
			for (var j = myiframebody.childNodes.length - 1; j >= 0; j--) {
				if ( myiframebody.childNodes[j].outerHTML.search(file) > 0 ){
					return true;
				}
			}
		}

		return false;
	},


	getFiles: function(arrayOfFiles, myiframebody){
		// loop through elements
		for (var i = arrayOfFiles.length - 1; i >= 0; i--) {
			var tempTag,
				file = arrayOfFiles[i];
			if ( (/\.(css)$/i).test(file) ) {
				// Creates <link> for CSS
				tempTag = document.createElement('link');
				tempTag.href = "/" + file;
				tempTag.rel = "stylesheet";
				tempTag.type = "text/css";
				myiframebody.appendChild(tempTag);
			} else if ( (/\.(js)$/i).test(file) ) {
				// Alternative option for js (not so good for IE):
				// Creates <object> for JS, better than <script> as it doesn't run it
				// tempTag = document.createElement('object');
				// tempTag.data = "/" + file;
				// myiframebody.appendChild(tempTag);

				// Creates <img> for JS
				tempTag = document.createElement('img');
				tempTag.src = "/" + file;
				myiframebody.appendChild(tempTag);
			} else if ( (/\.(gif|jpg|jpeg|png)$/i).test(file) ) {
				// Creates <img> for IMAGES
				tempTag = document.createElement('img');
				tempTag.src = "/" + file;
				myiframebody.appendChild(tempTag);
			} 
		}
	}


};
