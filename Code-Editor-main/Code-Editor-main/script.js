function code(){
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var sript=document.getElementById("JS");
    var code=document.getElementById("out").contentWindow.document;

    document.body.onkeyup=function(){
        code.open();
        code.write(
            html.value +

            "<style>" + css.value + "</style>" +

            "<script>" + sript.value +"</script>"
        );

        code.close();

    }
}
code();