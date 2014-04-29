;(function(){
    var $menuIcon = document.getElementsByClassName("menu-icon")[0],
    	$overlay = document.getElementsByClassName("overlay")[0],
    	$navigation = document.getElementById("nav-main");

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        var overlayIsHidden = hasClass($overlay, 'hidden');

        if(overlayIsHidden){
	        removeClass($overlay, 'hidden');
	        addClass($overlay, 'fadeIn');
        }
        else {
	        removeClass($overlay, 'fadeIn');
	        addClass($overlay, 'hidden');
        }

        removeClass($menuIcon, 'hover');
    }, false);

    $menuIcon.addEventListener('mouseenter', function() {
        addClass($menuIcon, 'hover');
    });

    $menuIcon.addEventListener('mouseleave', function() {
        removeClass($menuIcon, 'hover');
    });

    function addClass(element, className) {
        element.className += " " + className;
    }

    function removeClass(element, className) {
        // Capture any surrounding space characters to prevent repeated
        // additions and removals from leaving lots of spaces.
        var classNameRegEx = new RegExp("\\s*" + className + "\\s*");
        element.className = element.className.replace(classNameRegEx, " ");
    }

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        if (element.className.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }
    function hasClass(element, className) {
	    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
	}
})();
