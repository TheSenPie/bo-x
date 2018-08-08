// Making sure that global variables won't be overwritten
(function () {
	// Main class with its prefix
	var classWithPrefix = 'bo-x-modal';

	//Check if the client need to include css without css file and bring the action 8)
	var boOmCsses = document.getElementsByTagName('DIV')

	//Here we will store boolen which will tell us if he/she uses our magical class 'bo-om-css'
	var needInlineStyle;

	for(i = 0; i < boOmCsses.length; i++) {
		needInlineStyle = boOmCsses[i].classList.contains('bo-om-css');
		if(needInlineStyle)
			i = boOmCsses.length;
	};
	
	if (needInlineStyle)
		addStyles();

	// Store all a elemnts with class .bo-modal
	var aElements = document.getElementsByClassName(classWithPrefix);


	// Looping through a elements array
	for(i = 0; i < aElements.length; i++) {

		// Assign onClick eventHandler to each a element in our array and passing its index
		aElements[i].onclick = function (i) {

			return function (e) {

				// Preventing a from redirecting
				e.preventDefault();

				// Calling our openModal function which is responsible for appearing image with its full size on the screen
				openModal(aElements[i]);
			};
		
		}(i);
	};

	function addStyles () {
		//Getting head element
		var head = document.getElementsByTagName('HEAD')[0];

		//Creating css string which will contain all our styles
		var css = '*{margin:0;padding:0}.bo-x-modal-container{display:grid;height:100%;background:rgba(0,0,0,.9);position:fixed;top:0;width:100%}.bo-x-modal-image{max-width:100%;max-height:100vh;margin:auto}';

		//Creating our style tag which will be appended to head tag
		var style = document.createElement('style');

		//Adding type attribute to specify the content type of our style element
		style.type = 'text/css';

		//Adding our style to style element
		style.appendChild(document.createTextNode(css));

		//Adding css to document head
		head.appendChild(style);
	}
	
	function openModal ( aElement ) {
		//Getting body element
		var body = document.getElementsByTagName('BODY')[0];

		// Creating modal container and its image
		var newModal = document.createElement('div');
		var fullSizeImage = document.createElement('img');

		// Setting src attribue and class to our image
		fullSizeImage.setAttribute('src', aElement.href);
		fullSizeImage.classList.add(classWithPrefix + '-image');

		// Appending fullSizeImage as child to our modal container
		newModal.appendChild(fullSizeImage);
		newModal.classList.add(classWithPrefix + '-container');

		// New event listener which will close the modal when we click on it
		newModal.addEventListener('click', function () {
			body.removeChild(newModal);
		})

		// Appending all this to our body elemnt
		body.appendChild(newModal);
	}
})();