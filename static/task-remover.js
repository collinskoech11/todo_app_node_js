$(function(){
    let remove_but = $('.btn-remove-todo')
    remove_but.on('click', function(e){
        let displayer = e.target.parentElement.previousElementSibling;
        let todo = displayer.textContent;
        if (window.confirm(`Do you really wish to remove todo '${todo}?'`)){
            $.ajax({
                type:'DELETE',
                url:'/delete/' + displayer.id,
                success:function(data){
                    console.log(data)
                    location.reload()
                },
                error:function(data){
                    alert(data.statusText);
                }
            })
        }
    })
})