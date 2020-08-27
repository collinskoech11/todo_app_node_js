$(function(){
    let form = $('.input-todo')
    let form_input = $('input', form)
    form.on('submit', function(e){
        e.preventDefault();
        if (!form_input.val().replace(" ", "")){
            alert("Todo field must not be empty");
            return
    }
        $.ajax({
            type:'POST',
            url:'/add',
            data:{item:form_input.val()},
            success:function(data){
                location.reload()
            },
            error:function(data){
                console.log(data)
                alert(data.statusText);
            }
        });
    })
})