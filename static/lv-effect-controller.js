$(function(){
    let list_item = $('.list-group-item')
    list_item.removeClass('active');
    list_item.on('click',function(e){
        list_item.removeClass('active');
        $(e.target).addClass('active')
    })
})