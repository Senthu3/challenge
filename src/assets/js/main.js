import * as JQuery from "jquery";
const $ = JQuery.default;
// Write Code Here
$(document).ready(function() {
    var imageHeight = $( ".item-list ul li img").height();
    $( ".item-list ul li .user-details").css("height",imageHeight);
    $( ".item-list ul li .user-details" ).hide();

    $('.item-list ul li').on('mouseenter touchstart', function(){ 
        
        var containerWidth = $(".item-list").outerWidth();
        var currentBlockStart = $(this).position().left;
        var currentBlockWidth = $(this).outerWidth();
        var currentBlockHeight = $(this).height();
        var currentBlockTopPosition = $(this).position().top;
        var currentElement = this;
        $( ".item-list ul li" ).each(function() {
            if(this !== currentElement ){
                $(this).addClass('imageOverlay');
            }
        });
        $(currentElement).find(".user-details").show();
        $(currentElement).find(".user-details").css({"left":currentBlockStart,"top":currentBlockTopPosition,"width":currentBlockWidth,"height":currentBlockHeight});
        if( (containerWidth - currentBlockStart) > currentBlockWidth ){
            $(currentElement).next("li").removeClass("imageOverlay");
            $(currentElement).find(".user-details").animate({left:(currentBlockStart + currentBlockWidth)}, "fast");
        }else{
            $(currentElement).prev("li").removeClass("imageOverlay");
            $(currentElement).find(".user-details").animate({left: (currentBlockStart - currentBlockWidth)}, "fast");
        }
    });
    
    $('.item-list ul li').on('mouseleave touchend', function(){
        var that = this;
        $(that).find(".user-details").hide();
        $(that).find(".user-details").css("left","0px");
        $(that).find(".user-details").css("top","0px");
        $( ".item-list ul li" ).each(function() {
            $(this).removeClass('imageOverlay');
        });
    });

});