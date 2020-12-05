// Minified Debounce taken from UnderscoreJS (MIT)
function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

function init(){

    // Let's cache some stuff!
    var _$w = $(window),
        _$body = $("body"),
        _$thumbnailContainer = $("#thumbnailContainer"),
        _$thumbnailsParent = $("#thumbnailContainer div.thumbnails"),
        _$thumbnails = [],
        _$loupeContainer = $("#loupeContainer"),
        _$loupeBackground = $("#loupeContainer div.background"),
        _$loupeImageContainer = $("#loupeContainer div.image-container"),
        _$loupeInfoContainer = $("#loupeContainer div.info-container"),
        _$loupeMeta = $("#loupeMeta"),
        _$buttonPrev = $("#buttonPrev"),
        _$hotspotPrevLoupe = $("#hotspotPrevLoupe"),
        _$buttonPrevSideLoupe = $("#buttonPrevSideLoupe"),
        _$buttonNext = $("#buttonNext"),
        _$hotspotNextLoupe = $("#hotspotNextLoupe"),
        _$buttonNextSideLoupe = $("#buttonNextSideLoupe"),
        _$countCurrent = $("#countCurrent"),
        _$countTotal = $("#countTotal"),
        _$pageCountCurrent = $("#pageCountCurrent"),
        _$pageCountTotal = $("#pageCountTotal"),
        _$buttonPrevPage = $("#buttonPrevPage"),
        _$buttonNextPage = $("#buttonNextPage"),
        _$buttonClose = $("#loupeCloseButton");

    var i,
        _isOpen = false,
        _$targetThumb,
        _$loupeImage,
        _loupeIsTransitioning = false,
        _currentImageIndex,
        _autoViewThumb,
        _paginationStyle = "none",
        _pageSize = 20,
        _totalPages = 1,
        _currentPageIndex = 0,
        _viewportHeight = 0,
        _viewportWidth = 0,
        _thumbsToLoad = 0,
        _lastLoadedThumbIndex = -1,
        _$lastLoadedThumb;

    var onWindowResize = debounce(
        function(e) {
            _viewportHeight = _$w.height();
            _viewportWidth = _$w.width();
            if(_paginationStyle == "scroll"){
                checkForSpace();
            }
        },
        250
    );

    // Set the current height
    _viewportHeight = _$w.height();
    _viewportWidth = _$w.width();
    _$w.on(
        "resize",
        onWindowResize
    );

    

    // create a global scroll handler so that we can make the header more compact as the user scrolls down the page
    _$w.on(
        "scroll",
        onWindowScroll
    );

    // Check the pagination style    
    if(_$body.attr("data-pagination-style")){
        _paginationStyle = _$body.attr("data-pagination-style");
    }

    // Loop through the global JSON object
    for(i = 0; i < LR.images.length; i++) {
        // Set some new properties
        LR.images[i].index = i;
        LR.images[i].thumbIsLoading = false;
        LR.images[i].thumbHasLoaded = false;
        // Re-set the title if needed
        if(LR.images[i].title == "nil"){
            LR.images[i].title = "";
        }
        // Re-set the caption if needed
        if(LR.images[i].caption == "nil"){
            LR.images[i].caption = "";
        }
        // Create the individual thumbnail partial
        LR.images[i].$thumbnail = $('<div class="thumbnail"><div class="image-container"><div class="image"><img class="thumb-img" src="" data-large-img="images/large/'+ LR.images[i].exportFilename +'.jpg" data-id="ID'+ LR.images[i].id +'" data-title="' + LR.images[i].title + '" data-caption="' + LR.images[i].caption + '"/></div></div></div>');
        LR.images[i].$thumbnail.data("index", i);
        // Isolate the actual thumbnail image
        LR.images[i].$thumbnailImg = $(LR.images[i].$thumbnail.find("img")[0]);
        LR.images[i].$thumbnailImg.data("index", i);
        LR.images[i].$thumbnailImg.on(
            "load",
            onThumbnailImgLoad
        );
        LR.images[i].$thumbnailImg.on(
            "error",
            onThumbnailImgError
        );
        _$thumbnails.push(LR.images[i].$thumbnail);
    }

    // Check for an existing hash
    if(window.location.hash != ""){
        var _parts = window.location.hash.split("/");
        switch(_parts[1]){
            case "view" :
                for(var i = 0; i < LR.images.length; i++){
                    if(LR.images[i].$thumbnailImg.attr("data-id") == _parts[2]){
                        _autoViewThumb = LR.images[i].$thumbnailImg;
                        break;
                    }
                }
                break;
            case "page" :
                if(_parts[2]){
                    _currentPageIndex = parseInt(_parts[2]) - 1;
                }
                if(_parts[3] && _parts[3] == "view" && _parts[4]){
                    for(var i = 0; i < LR.images.length; i++){
                        if(LR.images[i].$thumbnailImg.attr("data-id") == _parts[4]){
                            _autoViewThumb = LR.images[i].$thumbnailImg;
                            break;
                        }
                    }
                }
                break; 
        }
    }

    // Render the page based on the user-selected pagination style
    switch(_paginationStyle){
        
        case "none":
            renderAllThumbnails();
            break;

        case "pages":
            if(_$body.attr("data-pagination-size")){
                _pageSize = parseInt(_$body.attr("data-pagination-size"));
                _totalPages = Math.ceil(LR.images.length / _pageSize);
            }
            initPagination();
            break;

        case "scroll":
            initLoadOnScroll();
            break; 
    }

    // Pagination Style: "none"

    function renderAllThumbnails() {
        for(var i = 0; i < LR.images.length; i++){
            _$thumbnailsParent.append(LR.images[i].$thumbnail);
            LR.images[i].$thumbnailImg.on(
                "click",
                onThumbnailClick
            );
            LR.images[i].$thumbnailImg.attr(
                "src",
                "images/thumbnails/" + LR.images[i].exportFilename + ".jpg"
            );
            _$lastLoadedThumb = LR.images[i].$thumbnailImg;
            _lastLoadedThumbIndex = LR.images[i].index;
        }
    }

    // Pagination Style: "pages"

    _$buttonPrevPage.on(
        "click",
        showPrevPage
    );

    _$buttonNextPage.on(
        "click",
        showNextPage
    );

    function initPagination() {
        renderThumbnailsForPageIndex(_currentPageIndex);
    }

    function renderThumbnailsForPageIndex(index) {

        // clean existing stuff
        _$thumbnailsParent.find("div.thumbnail").detach();

        var _startIndex = index * _pageSize;
        for(var i = _startIndex; i < _startIndex + _pageSize; i++){
            if(LR.images[i] == undefined){
                break;
            }
            _$thumbnailsParent.append(LR.images[i].$thumbnail);
            LR.images[i].$thumbnailImg.on(
                "click",
                onThumbnailClick
            );
            LR.images[i].$thumbnailImg.attr(
                "src",
                "images/thumbnails/" + LR.images[i].exportFilename + ".jpg"
            );
            _lastLoadedThumbIndex = LR.images[i].index;
        }
        _currentPageIndex = index;
        setPageNav();
        if(_currentPageIndex > 0){
            setPageHashForPageNumber(_currentPageIndex + 1);
        }
    }

    function showNextPage() {
        if(_currentPageIndex < _totalPages - 1){
            renderThumbnailsForPageIndex(_currentPageIndex + 1);
        }
    }

    function showPrevPage() {
        if(_currentPageIndex > 0){
            renderThumbnailsForPageIndex(_currentPageIndex - 1);
        }
    }

    function setPageNav() {
        _$pageCountCurrent.html(_currentPageIndex + 1);
        _$pageCountTotal.html(_totalPages);
    }

    function setPageHashForPageNumber(num) {
        window.location.hash = "#/page/" + num;
    }


    // Pagination Style: "scroll"

    function initLoadOnScroll() {

        if(LR.images.length == 0){
            return;
        }

        var _bodyHeight = _$body.height();

        // load the first image
        _$thumbnailsParent.append(LR.images[0].$thumbnail);
        LR.images[0].$thumbnailImg.on(
            "click",
            onThumbnailClick
        );
        LR.images[0].$thumbnailImg.attr(
            "src",
            "images/thumbnails/" + LR.images[0].exportFilename + ".jpg"
        );
        _$lastLoadedThumb = LR.images[0].$thumbnailImg;
        _lastLoadedThumbIndex = LR.images[0].index;

        if(LR.images.length < 2){
            return;
        }

        // Now that we have a thumbnail on the page, grab some measurements
        var _thumbOuterWidth = LR.images[0].$thumbnail.outerWidth();
        var _thumbOuterHeight = LR.images[0].$thumbnail.outerWidth();
        var _rowHeight = _$body.height() - _bodyHeight;
        var _availableWidth = $("#thumbnailContainer").width();
        var _rowsToLoad = Math.ceil((_$w.height() - _bodyHeight) / _rowHeight) + 1;
        var _thumbsPerRow = Math.floor(_availableWidth / _thumbOuterWidth);
        var _thumbsToLoad = _rowsToLoad * _thumbsPerRow;

        for(var i = 1; i < _thumbsToLoad; i++){

            if(LR.images[i] == undefined){
                break;
            }

            _$thumbnailsParent.append(LR.images[i].$thumbnail);
            LR.images[i].$thumbnailImg.on(
                "click",
                onThumbnailClick
            );
            LR.images[i].$thumbnailImg.attr(
                "src",
                "images/thumbnails/" + LR.images[i].exportFilename + ".jpg"
            );
            _$lastLoadedThumb = LR.images[i].$thumbnailImg;
            _lastLoadedThumbIndex = LR.images[i].index;
        }

        _$w.on(
            "scroll",
            onWindowLoadScroll
        );
    }

    function checkForSpace(){

        var _extraItemsToLoad = 0;
        var _$thumb = _$lastLoadedThumb.parent().parent().parent();
        var _lastThumbTopOffset = _$thumb.offset().top;
        var _thumbTopOffset = _lastThumbTopOffset;
        var _thumbWidth = _$thumb.outerWidth();
        var _lastRowAggregateWidth = _thumbWidth;

        while(_thumbTopOffset == _lastThumbTopOffset){
            if(_$thumb.prev().length > 0){
                if(_$thumb.prev().offset().top < _lastThumbTopOffset){
                    break;
                }
                else {
                    _lastRowAggregateWidth += _$thumb.prev().outerWidth();
                }
                _$thumb = _$thumb.prev();
            }
            else{
                break;
            }
        }

        if(_lastRowAggregateWidth < _$thumbnailContainer.width()){
            _extraItemsToLoad = (_$thumbnailContainer.width() - _lastRowAggregateWidth) / _thumbWidth;
            if(_extraItemsToLoad < 1){
                _extraItemsToLoad = 0;
            }
            else{
                _extraItemsToLoad = Math.round(_extraItemsToLoad);
            }
        }

        console.log(_extraItemsToLoad);

        if((_$w.scrollTop() + _viewportHeight) == _$body.height() && _thumbsToLoad == 0 && _lastLoadedThumbIndex < LR.images.length - 1){
            loadMoreThumbnails(_lastLoadedThumbIndex + 1, (getCurrentColumnCount() * 2) + _extraItemsToLoad);
        }
        else if(_$body.height() < _viewportHeight && _thumbsToLoad == 0){
            loadMoreThumbnails(_lastLoadedThumbIndex + 1, (getCurrentColumnCount() * 2) + _extraItemsToLoad);
        }
        else if(_extraItemsToLoad > 0 && _thumbsToLoad == 0 && _lastLoadedThumbIndex < LR.images.length - 1){
            console.log("only loading extra items");
            loadMoreThumbnails(_lastLoadedThumbIndex + 1, _extraItemsToLoad);
        }

    }

    function onWindowLoadScroll(e) {
        if((_$w.scrollTop() + _viewportHeight) == _$body.height() && _thumbsToLoad == 0 && _lastLoadedThumbIndex < LR.images.length - 1){
            loadMoreThumbnails(_lastLoadedThumbIndex + 1, getCurrentColumnCount() * 2);
        }
    }

    function onWindowScroll(e) {
        if(_$w.scrollTop() > 0 && !_$body.hasClass("scrolled")){
            _$body.addClass("scrolled");
        }
        else if(_$w.scrollTop() == 0 && _$body.hasClass("scrolled")) {
            _$body.removeClass("scrolled");
        }
    }

    // We use this to determine how many images to load on scroll
    function getCurrentColumnCount() {
        var _y;
        var _columns = 1;
        var _currentThumbs = _$thumbnailsParent.find("div.thumbnail");
        if(_currentThumbs.length > 1){
            _y = $(_currentThumbs[0]).offset().top;
        }
        else {
            return _columns;
        }
        for(var i = 1; i < _currentThumbs.length; i++){
            var _top = $(_currentThumbs[i]).offset().top;
            if(_top != _y){
                return _columns;
            }
            else {
                _columns++;
            }
        }
        return _columns;
    }

    function loadMoreThumbnails(startIndex, quantity) {
        _thumbsToLoad = quantity;
        for(var i = startIndex; i < startIndex + quantity; i++){
            if(LR.images[i] == undefined){
                break;
            }
            _$thumbnailsParent.append(LR.images[i].$thumbnail);
            LR.images[i].$thumbnailImg.on(
                "click",
                onThumbnailClick
            );
            LR.images[i].$thumbnailImg.attr(
                "src",
                "images/thumbnails/" + LR.images[i].exportFilename + ".jpg"
            );
            _$lastLoadedThumb = LR.images[i].$thumbnailImg;
            _lastLoadedThumbIndex = LR.images[i].index;
        }
    }

    function onThumbnailImgLoad(e) {
        if(_thumbsToLoad > 0){
            _thumbsToLoad--;
        }
    }

    function onThumbnailImgError(e) {
        // we should inject an SVG or something here so that the thumbnanil grid doesn't become oddly sized
        if(_thumbsToLoad > 0){
            _thumbsToLoad--;
        }
    }

    function onThumbnailClick(e) {
        showLoupeViewForThumbnail($(e.currentTarget));
    }

    // Loupe View Logic

    _$loupeContainer.fadeOut(0);
    _$loupeImageContainer.fadeOut(0);
    _$loupeInfoContainer.fadeOut(0);
    _$buttonClose.fadeOut(0);
    _$loupeBackground.css("opacity", 0);
    _$buttonClose.on(
        "click",
        closeLoupeView
    );

    _$buttonPrev.on(
        "click",
        showPrevImage
    );

    _$buttonNext.on(
        "click",
        showNextImage
    );

    _$hotspotPrevLoupe.on(
        "mouseover",
        onHotspotPrevLoupeOver
    );

    _$hotspotPrevLoupe.on(
        "mouseout",
        onHotspotPrevLoupeOut
    );

    _$hotspotPrevLoupe.on(
        "click",
        showPrevImage
    );

    _$hotspotNextLoupe.on(
        "mouseover",
        onHotspotNextLoupeOver
    );

    _$hotspotNextLoupe.on(
        "mouseout",
        onHotspotNextLoupeOut
    );

    _$hotspotNextLoupe.on(
        "click",
        showNextImage
    );
    
    if(_autoViewThumb){
        showLoupeViewForThumbnail(_autoViewThumb, true);
    }

    function openLoupeView(snap) {
        _loupeIsTransitioning = true;
        setCounts();
        _$loupeContainer.fadeIn(0);
        _$loupeBackground.css(
            {
                "width": _$targetThumb.width() + "px",
                "height": _$targetThumb.height() + "px",
                "top": (_$targetThumb.offset().top - $(window).scrollTop()) + "px",
                "left": _$targetThumb.offset().left + "px"
            }
        );
        _$loupeContainer.css("display", "block");
        var _targetTime = 250;
        if(snap){
            _targetTime = 0;
        }
        _$loupeBackground.animate(
            {
                "width": "100%",
                "height": "100%",
                "top": "0px",
                "left": "0px",
                "opacity": 1
            },
            _targetTime,
            onLoupeBackgroundShown
        );
        $(document).on(
            "keydown",
            onLoupeKeyDown
        );
    }

    function onLoupeBackgroundShown() {
        _$body.addClass("loupe-active");
        showLoupeElements();
    }

    function showLoupeElements() {
        _$loupeInfoContainer.fadeIn(350);
        _$buttonClose.fadeIn(350);
        _isOpen = true;
        showLoupeViewForThumbnail(_$targetThumb);
    }

    function showLoupeViewForThumbnail($thumbnail, snap) {
        _loupeIsTransitioning = true;
        _$targetThumb = $thumbnail;
        _currentImageIndex = _$targetThumb.data("index");
        if(!_isOpen){
            openLoupeView(snap);
            return;
        }
        setLateralNavVisibilities();
        loadImageForThumbnail(_$targetThumb);
    }

    function setLateralNavVisibilities() {
        if(_currentImageIndex == 0){
            _$hotspotPrevLoupe.addClass("disabled");
            _$buttonPrev.addClass("disabled");
        }
        else{
            _$hotspotPrevLoupe.removeClass("disabled");
            _$buttonPrev.removeClass("disabled");
        }
        if(_currentImageIndex == LR.images.length - 1){
            _$hotspotNextLoupe.addClass("disabled");
            _$buttonNext.addClass("disabled");
        }
        else{
            _$hotspotNextLoupe.removeClass("disabled");
            _$buttonNext.removeClass("disabled");
        }
    }

    function loadImageForThumbnail($thumbnail) {
        _currentImageIndex = $thumbnail.data("index");
        $('<img/>').css("opacity", 0).attr('src', $thumbnail.attr("data-large-img")).load(
            function() {
                $(this).remove();
                setImage();
            }
        );
        var _metadata = "";
        if($thumbnail.attr("data-title") != "nil"){
            _metadata += '<p class="title">' + $thumbnail.attr("data-title") + '</p>';
        }
        if($thumbnail.attr("data-caption") != "nil"){
            _metadata += '<p class="caption">' + $thumbnail.attr("data-caption") + '</p>';
        }
        _$loupeMeta.html(_metadata);
        setLateralNavVisibilities();
    }

    function setImage() {
        if(_$loupeImage){
            _$loupeImage.remove();
        }
        _$loupeImage = $('<div class="image"></div>');
        _$loupeCorners = $('<div class="corners"></div>');
        _$loupeImg = $('<img src="' + _$targetThumb.attr("data-large-img") + '"/>');

        _$loupeCorners.append(_$loupeImg);
        _$loupeImage.append(_$loupeCorners);

        _$loupeImageContainer.fadeOut(0);

        _$loupeImageContainer.append(_$loupeImage);
        _$loupeImageContainer.fadeIn(350, onSetImageFadeInComplete);

        setLoupeHashForID(_$targetThumb.attr("data-id"));

        _$loupeImg.css("max-height", _$loupeContainer.height() + "px");

        $(window).on(
            "resize",
            onLoupeResize
        );
    }

    function onSetImageFadeInComplete() {
        _loupeIsTransitioning = false;
    }

    function setCounts() {
        _$countTotal.html(_$thumbnails.length);
        _$countCurrent.html(_$targetThumb.data("index") + 1);
    }

    function setLoupeHashForID(id) {
        window.location.hash = "#/view/" + id;
    }

    function hideCurrentImage() {
        _loupeIsTransitioning = true;
        _$loupeImageContainer.fadeOut(100, onCurrentImageHidden);
        $(window).off(
            "resize",
            onLoupeResize
        );
    }

    function onCurrentImageHidden() {
        loadImageForThumbnail(_$targetThumb);
    }

    function showNextImage() {
        if(_loupeIsTransitioning){
            return;
        }
        if(_currentImageIndex == _$thumbnails.length - 1){
            _$targetThumb = LR.images[0].$thumbnailImg;
        }
        else{
            _$targetThumb = LR.images[_currentImageIndex + 1].$thumbnailImg;
        }
        hideCurrentImage();
        setCounts();
    }

    function showPrevImage() {
        if(_loupeIsTransitioning){
            return;
        }
        if(_currentImageIndex == 0){
            _$targetThumb = LR.images[$_thumbnails.length - 1].$thumbnailImg;
        }
        else{
            _$targetThumb = LR.images[_currentImageIndex - 1].$thumbnailImg;
        }
        hideCurrentImage();
        setCounts();
    }

    function onHotspotPrevLoupeOver(e) {
        if(_currentImageIndex > 0){
            _$hotspotPrevLoupe.addClass("over");
        }
    }

    function onHotspotPrevLoupeOut(e) {
        _$hotspotPrevLoupe.removeClass("over");
    }

    function onHotspotNextLoupeOver(e) {
        if(_currentImageIndex < _$thumbnails.length - 1){
            _$hotspotNextLoupe.addClass("over");
        }
    }

    function onHotspotNextLoupeOut(e) {
        _$hotspotNextLoupe.removeClass("over");
    }

    function onLoupeKeyDown(e){
        switch(e.keyCode){
            case 39: 
                showNextImage();
                break;
            case 37: 
                showPrevImage();
                break;
        }
    }

    function onLoupeResize(e){
        _$loupeImg.css("max-height", _$loupeContainer.height() + "px");
    }

    function closeLoupeView(e) {
        e.preventDefault();
        e.stopPropagation();
        $(window).off(
            "resize",
            onLoupeResize
        );
        _$loupeImageContainer.fadeOut(0);
        _$loupeInfoContainer.fadeOut(0);
        _$buttonClose.fadeOut(0);
        _$loupeContainer.fadeOut(0);
        _$loupeImage.remove();
        $(document).off(
            "keydown",
            onLoupeKeyDown
        );
        unlockBody();
        var currentScrollTop = _$w.scrollTop();
        if(_currentPageIndex > 0){
            setPageHashForPageNumber(_currentPageIndex+1);
        }
        else{
            window.location.hash = "";
        }
        _$w.scrollTop(currentScrollTop);
        _isOpen = false;
    }

    function unlockBody() {
        _$body.removeClass("loupe-active");
    }

    // Wire up the fullscreen stuff if we can
    if(Modernizr.fullscreen){
        $("#buttonFullscreen").on(
            "click",
            toggleFullScreen
        );
    }

    if(window.hostIsLightroom){
        $("#buttonFullscreen").css("display", "none");
    }

    // This was taken from Mozilla's MDN reference: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode#Browser_compatibility
    // At author-time, this API is still very much in flux and not consistent between browsers, as shown by the conditionals below:

    function toggleFullScreen(e) {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

}

$(document).ready(function(){
    init();
});