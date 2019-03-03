$(function(){
        $.get('index.html',function(data){
        $("#navContent").html(data);
        });   //初始化页面显示
        $("#nav li").click(function(){
            var current = $(this);
            target = current.find('a').attr('target');   //找到a的链接
            $.get(target,function(data){
                $("#navContent").html(data);
            });
        });
    })