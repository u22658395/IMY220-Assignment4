$(document).ready(()=>{
    var rowDiv = document.createElement("div");
    rowDiv.className="row";
    
    $('.messages').append(rowDiv);

    $('.btn').on('click', function(){
        if($.trim($('#message').val()))
        {
            if($(this).attr('id') == 'left'){
        
                var columnDiv = document.createElement("div");
                var textDiv = document.createElement("div");
                columnDiv.classList.add("col-4","my-2","offset-4");
                textDiv.classList.add("textLeft");
                var textArea = $('#message').val();
                textArea += checkUrl(textArea);
                textDiv.innerHTML = textArea;
                columnDiv.appendChild(textDiv);
                $('.messages > .row').append(columnDiv);
                $('#message').val('');
            }
            else{
        
                var columnDiv = document.createElement("div");
                var textDiv = document.createElement("div");
                columnDiv.classList.add("col-4","my-2","offset-4");
                textDiv.classList.add("textRight");
                var textArea = $('#message').val();
                
                textArea += checkUrl(textArea);

                textDiv.innerHTML = textArea;
                columnDiv.appendChild(textDiv);
                $('.messages > .row').append(columnDiv);
                $('#message').val('');
            }
        }
    });
    
    
    function checkUrl(text) {
        var regex = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
        var url = (text.match(regex));
        if(url != null)
        {
            var id = url[1];
            return '<iframe width="100%" height="315" src="https://www.youtube.com/embed/'+id+'"></iframe>';;
        }

        return '';
    }


})