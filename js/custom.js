;
var isMobile = false;
(function($, window, document, undefined) {
    'use strict';
    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    
    $(document).ready(function() {
        // 모바일 위주로 구별
        var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
        for (var word in mobileKeyWords) {
            if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
                isMobile = true;                
            }
        }
        
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
        });
        if ($('.facts-list').length) {
            $('.facts-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.services-list').length) {
            $('.services-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                items: 3,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }
        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['slide01', 'slide02', 'slide03', 'slide04'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,   // 768
                responsiveHeight: 600,
                responsiveSlides: true,                
            });
        }
        if(!isMobile) {
            $("#allalpaca").mouseenter(function() {
                fullpage_api.setAutoScrolling(false)
            });
            $("#allalpaca").mouseleave(function() {
                fullpage_api.setAutoScrolling(true)
            });
            // $("#alpacaList").mouseenter(function() {
            //     fullpage_api.setAutoScrolling(false)
            // });
            // $("#alpacaList").mouseleave(function() {
            //     fullpage_api.setAutoScrolling(true)
            // });
        } 
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown();
        });
        $('.facts-row').on('inview', function(event, isInView) {
            $('.count-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function() {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function(event, isInView) {
            $(this).addClass('view');
        });
        $(document).on('click', '.menu-trigger', function() {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function() {
            $('body').removeClass('sidemenu-open');
        });
    });
})(jQuery, window, document);

$(document).ready(function(){
    var alpaca = {
        Image: {
            xmlns: "http://schemas.microsoft.com/deepzoom/2008",
            Url: "lib/openseadragon/tiles/helloworld_files/",
            Format: "png",
            Overlap: "2",
            TileSize: "256",
            Size: {
            Width:  "48000",
            Height: "48000"
            }
        }
    };
    var viewer = OpenSeadragon({
        id: "allalpaca",
        prefixUrl: "lib/openseadragon/images/",
        tileSources: alpaca,
        immediateRender: true,
        maxZoomLevel: 17, // 18
        minZoomLevel: 0,
        defaultZoomLevel: 2,
        smoothTileEdgesMinZoom: Infinity,
        visibilityRatio: 1.0,
    });
    var lastZoom = 1;

    viewer.addHandler('zoom', function(event) {
        if (event.zoom < lastZoom) {
            viewer.removeOverlay("detail_overlay");
        }
    });
    viewer.addHandler('canvas-click', function(event) {
        var webPoint = event.position;
        var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
        var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
        var zoom = viewer.viewport.getZoom();
        
        viewer.removeOverlay("detail_overlay");
        
        if (zoom >= 8) {
            lastZoom = zoom;
            var detailIndex = getDetail(viewportPoint.x, viewportPoint.y) + 1;
            var elt = document.createElement("a");
            elt.id = "detail_overlay";
            elt.className = "detail_overlay_class";
            elt.textContent = "#" + detailIndex;
            //elt.setAttribute('href', '/details/' + detailIndex);
            elt.setAttribute('href', 'javascript:openAlpaca("'+detailIndex+'")');
            //elt.setAttribute('target', '_blank');
            var ox = Math.floor(viewportPoint.x * 100) / 100 + 0.005;
            var oy = Math.floor(viewportPoint.y * 100) / 100 + 0.0088;
            viewer.addOverlay(elt, new OpenSeadragon.Point(ox, oy), OpenSeadragon.Placement.CENTER, null);
        }
    });

    var getDetail = function(x, y) {
        x = Math.floor(x * 100);
        y = Math.floor(y * 100);
        return (y * 100) + x;
    };

    viewerInputHook = viewer.addViewerInputHook({hooks: [
        {tracker: 'viewer', handler: 'clickHandler', hookHandler: onViewerClick}
    ]});

    function onViewerClick(event) {
        var element = event.originalEvent.target;
        if (element.tagName == "A") {
            event.preventDefaultAction = true;
            var rightClick = event.originalEvent.which != 1 || event.originalEvent.metaKey || event.originalEvent.shiftKey || event.originalEvent.ctrlKey;
            if (typeof web3 !== 'undefined' && !rightClick) {
                location.href = element.getAttribute("href");
            } else {
                location.href = element.getAttribute("href");
                //window.open(element.getAttribute("href"), '_blank');
            }
        }
    }

});



function numFilter(obj) {
    if(tmpParam.num === undefined) {
        return true;
    }
    if('num' in obj && obj.num == tmpParam.num) {
        return true;
    } else {
        return false;
    }
}
function typeFilter(obj) {
    if(('types' in param) == false || param.types.length === 0) {
        return true;
    }
    if('type' in obj && param.types.includes(obj.type)) {
        return true;
    } else {
        return false;
    }
}
function itemFilter(obj) {
    if(('items' in param) == false || param.items.length === 0) {
        return true;
    }

    if(obj.items.filter(it => param.items.includes(it)).length > 0) {
        return true;
    } else {
        return false;
    }
}
function chestFilter(obj) {
    if(('chests' in param) == false || param.chests.length === 0) {
        return true;
    }
    if('chest_color' in obj && param.chests.includes(obj.chest_color)) {
        return true;
    } else {
        return false;
    }
}
function itemCountFilter(obj) {
    if(('itemCounts' in param) == false || param.itemCounts.length === 0) {
        return true;
    }
    if('item_count' in obj && param.itemCounts.includes(obj.item_count)) {
        return true;
    } else {
        return false;
    }
}

var param = {
    // "num" : 1,
    // "types" : ["Male", "Female"],
    // "chests" : ["Gold" ,"Gray"],
    // "itemCounts" : [2],
    // "items" : ["Unicorn", "Cap", "Flower"]
};
var tmpParam = {};
var newJson = [];

function openAlpaca(alpacaNum) {
    tmpParam = {
        "num" : alpacaNum
    }
    // getAlpaca
    $.ajax({
        async : false,
        dataType: "json",
        url: "lib/alpacas.json",
        mimeType: "application/json",
        success: function(result){
            if(result.data != null) {
                // 1. num
                newJson = result.data.filter(numFilter);
            }
        }
    });
    // model data innerHtml
    $.each(newJson, function(index, d) {
        $("#modalLabel").html(d.name);
        $("#modalType").html(d.type);
        $("#modalChest").html(d.chest_color);
        $("#modalItemCount").html(d.item_count);
        $("#modalItem").html(d.items.join(", "));
        
        if(d.link==""){
            $("#modalImg").html("<a href=\"#\" onclick=\"alert('coming soon~');return false;\" target=\"_opensea\"><img src=\"images/alpaca/"+d.num+".png\" width=\"240\"/></a>");
            $("#btnBuy").attr("onclick", "alert('coming soon~')");
        } else {
            $("#modalImg").html("<a href=\""+d.link+"\" target=\"_opensea\"><img src=\"images/alpaca/"+d.num+".png\" width=\"240\"/></a>");
            $("#btnBuy").attr("onclick", "window.open('"+d.link+"','_opensea')");
        }
        
    });
    $("#exampleModal").modal();            
}
function searchAlpacas() {
    param = {};

    types = [];
    chests = [];
    itemCounts = [];
    items = [];
    
    $("#alpacaCount").html("0");
    $("#alpacaList").html("");

    $("#type input:checkbox").each(function(index, i){
        if($(this).is(":checked")){
            types.push($(this).val())
        }
    });
    $("#chest input:checkbox").each(function(index, i){
        if($(this).is(":checked")){
            chests.push($(this).val())
        }
    });
    $("#itemcount input:checkbox").each(function(index, i){
        if($(this).is(":checked")){
            itemCounts.push($(this).val())
        }
    });
    $("#item input:checkbox").each(function(index, i){
        if($(this).is(":checked")){
            items.push($(this).val())
        }
    });

    if(types.length != 0) param.types = types;
    if(chests.length != 0) param.chests = chests;
    if(itemCounts.length != 0) param.itemCounts = itemCounts;
    if(items.length != 0) param.items = items;

    $.ajax({
        dataType: "json",
        url: "lib/alpacas.json",
        mimeType: "application/json",
        success: function(result){
            if(result.data != null) {
                newJson = result.data;
                
                // 2. type
                newJson = newJson.filter(typeFilter);
                // 3. item
                newJson = newJson.filter(itemFilter);
                // 4. chest
                newJson = newJson.filter(chestFilter);
                // 5. itemCount
                newJson = newJson.filter(itemCountFilter);
                
                var dataSource = [];
                $.each(newJson, function(index, d) {
                    dataSource.push(d.num);
                });

                $('#pagination-container').pagination({
                    dataSource : dataSource,
                    pageSize: 25,
                    showPageNumbers: false,
                    showNavigator: true,
                    callback: function(data, pagination) {
                        var html = simpleTemplating(data);
                        $('#alpacaList').html(html);
                    }
                })

                // var tableData = "<div class=\"raleway\">";
                // $.each(newJson, function(index, d) {
                //     tableData += "<a href=\"#\" onclick=\"openAlpaca('" + d.num + "');return false;\"><img src=\"images/alpaca/"+d.num+".png\" width=\"100\"/>";
                // });
                // tableData += "</div>";

                //$("#alpacaList").append(tableData);
                
                alpacaCount = newJson.length;
                $("#alpacaCount").html(alpacaCount > 1 ? alpacaCount + " Alpacas" : alpacaCount + " Alpaca");
            }
        }
    });
}

function simpleTemplating(data) {
    var html = '<div class=\"raleway\">';
    $.each(data, function(index, item){
        html += '<a href="#" onclick="openAlpaca(\'' + item + '\');return false;"><img src="images/alpaca/'+item+'.png" width="100"/>';
    });
    html += '</div>';
    return html;
}


$(document).ready(function(){
    searchAlpacas();
    $(".btn-ss").change(function() {
        searchAlpacas();
    });
});