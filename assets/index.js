const classListName = "classList";
const workListName = "workList";
const sortName = "sort";
const filtName = "filt";
selectedClassId = '';
classListData = {};
sortSta = 'asc'
filtStatus = 0

utools.onPluginEnter(({ code, type, payload }) => {
    utools.setExpendHeight(650)
    if (code == 'v-connection') {
        
    }
});


const randomStr = (len) => {
    let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    while(len) {
        let index = Math.floor(Math.random() * str.length);
        result += str[index];
        --len;
    }
    return result;
}


function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return r[2]; return '';
}

function changeURLArg(url,arg,arg_val){
    var pattern=arg+'=([^&]*)';
    var replaceText=arg+'='+arg_val;
    if(url.match(pattern)){
        var tmp='/('+ arg+'=)([^&]*)/gi';
        tmp=url.replace(eval(tmp),replaceText);
        return tmp;
    }else{
        if(url.match('[\?]')){
            return url+'&'+replaceText;
        }else{
            return url+'?'+replaceText;
        }
    }
    return url+'\n'+arg+'\n'+arg_val;
}

function popNotice(msg) {
    $(".pop-notice").text(msg)
    $(".div-pop-notice").show().delay(1200).hide(300);
}