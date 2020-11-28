const e = require("express");
const express=require("express");
const app = express();
const request=require("request");
//const convert = require('convert-array-json');  
const port=4000;

var url="https://dog.ceo/api/breeds/list/all";
app.get("/",(req,res)=>{

    request(url,(err,response,body)=>{
        if(err){
            console.log(err);
        }else{
            var output = JSON.parse(body);
            output=output["message"];

            var dt="<ol>";
            var sub_list="";
            for (var x in output) {
                    sub_list="<ol>";
                    var sub_array=output[x];
                    for(var i=0;i<sub_array.length;i++){
                        sub_list+="<li>"+sub_array[i]+"</li>";
                    }
                    sub_list+="</ol>";
                dt+="<li>"+x+sub_list+"</li>";
                  //console.log(output[x]);
            }
            dt+="</ol>";
            res.send(dt);
             
        }
    })
          //  res.send(outpput);

});

app.listen(port,(err)=>{
    if(err){
        console.log("error in api call");
    }else{
        console.log(`Server Started on ${port}`);
    }
})