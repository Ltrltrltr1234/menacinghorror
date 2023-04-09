function changeelements(element){
    collection = document.querySelectorAll(element);
    for (i = 0; i < collection.length; i++) {
        if (collection[i].className!="preset"){
            if (collection[i].className!="forminput"){
                collection[i].style.color=localStorage.customtextcolor1;
                collection[i].style.background=localStorage.customcolor2+"66";
                collection[i].style.borderLeft=localStorage.customcolor2+"88 solid 4px";
            }
            else{
                collection[i].style.color=localStorage.customtextcolor1;
                collection[i].style.background=localStorage.customtextcolor2+"66";
                collection[i].style.borderLeft=localStorage.customcolor1+"88 solid 4px";
            }
        }
    }
}
function loadtheme(){
    if (localStorage.customtextcolor1==null){
      localStorage.customtextcolor1="#000000";
    }
    if (localStorage.customtextcolor2==null){
      localStorage.customtextcolor2="#FFFFFF";
    }
    if (localStorage.customcolor1 == null){
      localStorage.customcolor1="#E167E1";
    }
    if (localStorage.customcolor2 == null){
        localStorage.customcolor2="#66DEDE";
    }
    document.body.style.backgroundImage = "linear-gradient(135deg, "+ localStorage.customcolor1+", "+localStorage.customcolor2+")";
    document.body.style.color = localStorage.customtextcolor1;
    changeelements("button");
    changeelements("input");
    changeelements("select");
    changeelements("textarea");
    changeelements("footer");
    const forms = document.querySelectorAll(".forms");
    for (i = 0; i < forms.length; i++) {
        if (forms[i].className!="preset"){
            forms[i].style.color=localStorage.customtextcolor1;
            forms[i].style.backgroundImage="linear-gradient(180deg,"+localStorage.customcolor2+"AA,"+localStorage.customcolor2+"18)";
        }
    }
}
setTimeout(loadtheme(),5);