// Making sure that global variables won't be overwritten
(function () {
	// Main class with its prefix
	var classWithPrefix = 'bo-x-modal';

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