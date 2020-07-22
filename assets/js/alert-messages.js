//function addmess(){
function gritterWithoutImage(titlec,textc){ 

    $.gritter.add({
        title: titlec,
        text: textc
    });

    //$('#add-gritter-light').click(function(){
        
    //})

}

function gritterWhiteNotification(titlec,textc){
    
    $.gritter.add({
        title: titlec,
        text: textc,
        class_name: 'gritter-light'
    });
}
//}