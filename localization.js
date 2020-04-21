data={
    ERR0:{
        eng:"Not Found",
        ar:"غير موجود"
    },
    ERR1: {
        eng: "Unknown Error",
        ar: "حدث خطء ما"
    },
    ERR2: {
        eng: "Auth Failed",
        ar:""
    }
}

function getMessage(messageCode,language)
{
    if(!language||language!="ar")
    {
        language="eng";
    }
    
    if (data[messageCode]) {
        return data[messageCode][language];   
    } else {
        return data["unknown"][language];;
    }
}

module.exports=getMessage;