//const socket=io();
//console.log('chat ir aqui');
$(function(){
    //alert('trabajando!!!')
    const socket=io();
    ///console.log(io);

    //obteniedo elementos del DOM desde la interfaz
 const $messageForm = $('#message-form');
 const $messageBox = $('#message');
 const $chat = $('#chat');

 //events e
 $messageForm.submit(e=>{
     e.preventDefaullt();
     //console.log('enviando datos');//console.log($messageBox.val());
    socket.emit('send message',$messageBox.val());
    $messageBox.val('');
    });
    socket.on('new message',function(data){
        $chat.append(data+'<br/>');
    })
})