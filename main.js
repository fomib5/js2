$(document).ready(function(){
    var displayValue = 0;
    var a = 0;

    $(".display-value").text(displayValue);
    $("button").click(function(){
        $("button").css("border-color","#222222");
        $(this).css("border-color","#00F");
    });
    $(".divided-4 button").click(function(){
        a = $(this).text();
        if(displayValue==0){
            displayValue = a;
        }
        else if(isNaN(displayValue.charAt(displayValue.length -1))==false){
            displayValue += a;
        }
        else if(isNaN(a)==false){
            displayValue += a;
        }
        $(".display-value").text(displayValue);
    });
    $(".btn-equal").click(function(){
        a = $(".display-value").text();
        displayValue = new Function("return "+a)();
        $(".display-value").text(displayValue);
        displayValue += '';
    });
    $(".btn-AC").click(function(){
        displayValue = 0;
        $(".display-value").text(displayValue);

    });
});
        /*
        displayValue = $(".display-value").text();
        for(var i=0;i<displayValue.length;i++){
            if(isNaN(displayValue[i])==false || displayValue[i]=="."){
                b+=displayValue[i];
            }
            else{
                items.push(b);
                b="";
                items.push(displayValue[i]);
            }
        }
        for(i=0;i<items.length;i+=2){
            if(i==0){
                c=items[i];
            }
            else{
                switch (items[i-1]) {
                    case '+':
                        c+=items[i];
                        break;
                    case '-':
                        c-=items[i];
                        break;
                    case '*':
                        c*=items[i];
                        break;
                    case '/':
                        c/=items[i];
                        break;
                }
            }
        }
        $(".display-value").text(c);
        */
