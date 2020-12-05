
$(()=>{
    $("p").hide();
    $(".para1").show();
    $(".button").click(function(){
        $("p").hide();
        //all p hide and buton with show
        $(".para"+$(this).attr("data-target")).show();
        //active button class change
        $(this).addClass('active').siblings().removeClass("active");
    })
})