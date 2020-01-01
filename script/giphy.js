

const gif=document.querySelector("#gif");
var apikey=api();
var count=0;
var api_url='https://api.giphy.com/v1/gifs/trending?api_key='+apikey+'&offset='+count;
var searchgif="";
async  function getgifapi(api_url){
    var img = document.createElement('img');
        img.src="load.webp";
        img.width=50;
        img.height=70;
        img.id="loading";
        gif.appendChild(img);
        const response= await fetch(api_url);
        const data= await response.json();
        
         return data;
           
}
getgifapi(api_url).then(data=>appendData(data));

function appendData(data){
    document.getElementById("loading").remove();
    data.data.forEach(element => {
        count++;
        if(element.images.preview_gif.url != undefined)
        {
            var div=document.createElement("div");
            div.className="box";
            var img = document.createElement('img');
            img.src=element.images.preview_gif.url;
           img.className="img_gif";
            div.style.display="inline";
            div.style.position="relative";
            var btn=document.createElement("input");
            btn.className="download";
            btn.type="image";
            btn.src="download2.png";
            btn.addEventListener("click", func1);
            div.appendChild(btn);
            div.appendChild(img);
            gif.appendChild(div);
            
        }
        function func1(){
            saveAs(element.images.preview_gif.url);
        }
      
});    
}
document.addEventListener('scroll',()=>{
     console.log("scrolled");
     let a=document.documentElement.scrollHeight-window.innerHeight;
     console.log(document.documentElement.scrollHeight)
     console.log(window.innerHeight)
     console.log(a)
         if (a==window.scrollY){
             if(searchgif=='')
             {
                 api_url='https://api.giphy.com/v1/gifs/trending?api_key='+apikey+'&offset='+count;
             }
             else{
                 api_url='https://api.giphy.com/v1/gifs/search?q='+searchgif+'&api_key='+apikey+'&offset='+count;
             }
             getgifapi(api_url).then(data=>appendData(data)); 
         }
     });
function display(){
     var searchgif=document.getElementById("searchgif").value;
   
     gif.innerHTML='';
     if(searchgif=='')
             {
                 api_url='https://api.giphy.com/v1/gifs/trending?api_key='+apikey+'&offset='+count;
             }
             
             else{
                 api_url='https://api.giphy.com/v1/gifs/search?q='+searchgif+'&api_key='+apikey+'&offset='+count;
             }          
      getgifapi(api_url).then(data=>appendData(data));
 }
