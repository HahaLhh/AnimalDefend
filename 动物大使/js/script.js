window.onload = function(){
    var news_ico = document.getElementsByClassName("new_ico");
    for(var i = 0;i < news_ico.length;i++){
        news_ico[i].onmouseover = changeNews;
        // news_ico[i].onmouseout = fn;

    }
    function changeNews(){
        var id = this.id;
        if(id == "news1"){
            document.getElementById("newsList1").style.display = "block";
            document.getElementById("newsList2").style.display = "none";    
        }else{
            document.getElementById("newsList2").style.display = "block";
            document.getElementById("newsList1").style.display = "none";
        }
        
    }
    function fn(){
        var id = this.id;
        if(id == "news1"){
            document.getElementById("newsList2").style.display = "block";
            document.getElementById("newsList1").style.display = "none";
        }else{
            document.getElementById("newsList1").style.display = "block";
            document.getElementById("newsList2").style.display = "none";
        }
        
    }
                 //轮播器   
    var imgs = this.document.getElementsByClassName("imgs");
    imgs[0].style.display = "block";
    var num_list = document.getElementsByClassName("num_list");
    for(var i = 0;i < num_list.length;i++){
        num_list[i].onmouseover = changeImg;
        num_list[i].onmouseout = changeOp;
    };

    function changeImg(){
        this.style.opacity = 1;
        for(var i = 0;i < imgs.length;i++){
            imgs[i].style.display = "none";
        };
        imgs[this.innerText -  1].style.display = "block";
    }
    function changeOp(){
        this.style.opacity = 0.7;
    }

}