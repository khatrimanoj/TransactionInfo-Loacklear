$(window).on("resize",(function(){$(window).width()<=767?$("main .wrapper aside .sidebar").prepend($(".main-content nav .dropdown")):$("main .wrapper .main-content nav .container").append($("main .wrapper aside .sidebar .dropdown"))})),$((function(){$(window).width()<=767&&$("main .wrapper aside .sidebar").prepend($(".main-content nav .dropdown")),$("#burger").on("click",(function(){$(this).toggleClass("active"),$("main .wrapper aside").toggleClass("active")}))}));
//# sourceMappingURL=app.js.map