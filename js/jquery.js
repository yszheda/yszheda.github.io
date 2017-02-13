/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var $nCurrentActive;
var scrolling = 1;
var $nav = $('nav li');
$nav.addClass('off');



//nav setup @ mouseevents
$nav.bind('mouseenter', function() {
	$nCurPos = $(this).attr('id').substr(4);
	nIsHovered = setTimeout("onMenu($nCurPos)", 100);
});

$nav.bind('mouseleave', function() {
	clearTimeout(nIsHovered);
	$nCurPos = $(this).attr('id').substr(4);
	offMenu($nCurPos);
});

$nav.bind('click', function(ev) {
	if ($nCurrentActive !== $(this).attr('id').substr(4)) {
		offActiveMenu($nCurrentActive);
	}
	$nav.removeClass('active on').addClass('off');
	$(this).addClass('active').removeClass('off');
	$nCurrentActive = $(this).attr('id').substr(4);
});

$('#nav-logo').bind('click', function() {
	$nav.removeClass('active on').addClass('off');
	$('#nav-1').addClass('active').removeClass('off');
});

function onMenu($nCurPos) {
	if ($('#nav-'+$nCurPos).hasClass('off') && !($('#nav-'+$nCurPos).hasClass('active'))) {
		$('#nav-'+$nCurPos).removeClass('off').addClass('on');
	}
};

function onScrollMenu($nCurPos) {
	if ($('#nav-'+$nCurPos).hasClass('off')) {
		$('#nav-'+$nCurPos).removeClass('off').addClass('on');
	}
};

function offActiveMenu($nCurPos) {
	$('#nav-'+$nCurPos).removeClass('active').addClass('off')
}

function offMenu($nCurPos) {
	if (!$('#nav-'+$nCurPos).hasClass('active')) {
		$('#nav-'+$nCurPos).removeClass('on').addClass('off');
	}
}

//nav setup @ window scroll
$(window).scroll(function() {
	$inview = $('section:in-viewport header').parent().attr('id');
	if ($('a[hash=#' + $inview + ']') !== null) {
		$link = $('a[hash=#' + $inview + ']').parent().attr('id').substr(4);
	}

	if ($link != $nCurrentActive && scrolling == 1) {
		$nav.removeClass('active');
		offMenu($nCurrentActive);
		$nCurrentActive = $link;
		$('#nav-'+$nCurrentActive).addClass('active');
		onScrollMenu($nCurrentActive);
	}
});


//window scroll setup
$.localScroll.hash({
	target: '#content',
	queue:true,
	duration:1500
});

$('nav').localScroll({
	hash: true,
	duration: 400,
	easing: 'easeOutExpo',
	onBefore: function() {scrolling = 0; return scrolling},
	onAfter: function() {scrolling = 1; return scrolling}
});





/***/ }
/******/ ]);