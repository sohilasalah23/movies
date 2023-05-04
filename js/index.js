
/***** N  A  V   B    A   R  *********/
var x =  $(".nav-contianer").innerWidth()
$("#slide-nav #openbtn").click(function () {

    if ($("#slide-nav").css("left")=="0px") {
    }else{
    $("#slide-nav").animate({left:0},1000)
    let y = $("#slide-nav").css("left")
    console.log(y)
    document.getElementById("closebtn").classList.remove("d-none");
    document.getElementById("openbtn").classList.add("d-none");
    $("#slide-nav .item1").animate({opacity:'1',paddingTop:'20px'},1100);
        $("#slide-nav .item2").animate({opacity:'1',paddingTop:'20px'},1200);
       $("#slide-nav .item3").animate({opacity:'1',paddingTop:'20px'},1300);
       $("#slide-nav .item4").animate({opacity:'1',paddingTop:'20px'},1400);
       $("#slide-nav .item5").animate({opacity:'1',paddingTop:'20px'},1500);
       $("#slide-nav .item6").animate({opacity:'1',paddingTop:'20px'},1600);
    $("#slide-nav .nav-contianer").addClass("open").removeClass("close"); 
    }
})
$("#closebtn").click(function () {
    if ($("#slide-nav").css("left")=="0px") {
     $("#slide-nav").animate({left:-x},1000)
       $(".nav-contianer li").animate({opacity:'0',paddingTop:'500px'},1000);
       $("#slide-nav .nav-contianer").addClass("close").removeClass("open");
     document.getElementById("closebtn").classList.add("d-none");
     document.getElementById("openbtn").classList.remove("d-none")
    }   
 })
// display movies 
/****trueeeeee***** */

async function getMovies(URL) {
    let res = await fetch(`${URL}` )
        finalres = await res.json()
      console.log(finalres)

      console.log(finalres.results)
      finalres=finalres.results
      console.log(res)
      displaymovie(finalres)
}
getMovies(popularURL)

/****trueeeeee***** */
function  displaymovie(data) {
  let  cartona =``
    for (let i = 0; i< data.length ; i++) {
        cartona +=`
        <div class="col-md-6 col-lg-4 my-3 " >
        <div class="movie position-relative rounded ">
    
            <div class="image">
        <img src= "https://image.tmdb.org/t/p/w500${data[i].poster_path}" class="img-fluid " alt="">

            </div>
            <div class="layer  position-absolute w-100 h-100 rounded d-flex align-items-center text-center">
                <div class="info">
                    <h2>${data[i].original_title}</h2>
                    <p>${data[i].overview} </p>
                    <p>rate:${data[i].vote_average} </p>
                    <p>${data[i].release_date}</p>
                </div>
                </div>     
            </div>
        </div>
        `
        console.log("hello")
    }
    document.getElementById("rowdata").innerHTML=cartona

}

var Nowplaying="https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var popularURL ="https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var topratedURL ="https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var trendingURL= 'https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44';
var upcomingURL="https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44";


var selectcategory =document.querySelectorAll("li ")
for(var i=0;i<selectcategory.length;i++)
    {
        selectcategory[i].addEventListener("click",function(e){
            var category=e.target.getAttribute("data-catagory")
            console.log(category);
         if(category=="Now playing")
          {
             getMovies(Nowplaying)
             console.log(Nowplaying);
          }
         else if(category=="Popular")
          {   
             getMovies(popularURL)
         }
         else if(category=="Top Rated")
         { 
            getMovies(topratedURL)
         }
         else if(category=="Latest")
         {
            getMovies(latestURL)
         }
         else if(category=="Trending")
         {
            getMovies(trendingURL)
         }
         else if(category=="Upcoming")
         {     
            getMovies(upcomingURL)
         }   
        })
    }
    getMovies(popularURL)


// regex input 
let username = document.getElementById("username")
let userEmail = document.getElementById("useremail");
let userPhone  = document.getElementById("userphone");
let userAge  = document.getElementById("userage");
let userPassword = document.getElementById("userpassword");
let userRePassword = document.getElementById("userrePassword");

username.addEventListener("keyup",validname)
function validname() {
    let regex = /^[a-zA-Z0-9]+$/
    if(regex.test(username.value)==true){
    console.log("true")
        document.getElementById("namealert").classList.add("d-none");
         name =true
        return true
    }else{
      console.log("false")
        document.getElementById("namealert").classList.remove("d-none");
        return false
    }    
}
userEmail.addEventListener("keyup", validemail)
function validemail() {
    let regex = /^\w+([\.-]?\w+)@[a-zA-Z]+\.[a-zA-Z]{2,3}$/
                
    if(regex.test(userEmail.value)==true){
    console.log("true")
    document.getElementById("emailalert").classList.add("d-none");
      return true
    }else{
      console.log("false")
      document.getElementById("emailalert").classList.remove("d-none");
        return false
    }    
}
userPhone.addEventListener("keyup",validphone)
function validphone() {
    let regex = /^01[0125][0-9]{8}$/
                
    if(regex.test(userPhone.value)==true){
    console.log("true")
    document.getElementById("phonealert").classList.add("d-none");
        return true
    }else{
      console.log("false")
      document.getElementById("phonealert").classList.remove("d-none");
        return false
    }

    
}
userAge.addEventListener("keyup", validage)
function validage() {
    let regex = /^[1-9][0-9]|100$/     
    if(regex.test(userAge.value)==true){
    console.log("true")
    document.getElementById("agealert").classList.add("d-none");
        return true
    }else{
      console.log("false")
      document.getElementById("agealert").classList.remove("d-none");
        return false
    } 
}
userPassword.addEventListener("keyup", validpassword)
function validpassword() {
    let regex = /[A-Z]{1,}[A-Za-z]{8,}\d/     
    if(regex.test(userPassword.value)==true){
    console.log("true")
    document.getElementById("passwordalert").classList.add("d-none");
        return true
    }else{
      console.log("false")
      document.getElementById("passwordalert").classList.remove("d-none");
        return false
    }  
}
userRePassword.addEventListener("keyup", validrepassword)
function validrepassword() {
       
    if(userRePassword.value==userPassword.value){
    console.log("true")
    document.getElementById("repasswordalert").classList.add("d-none");
        return true
    }else{
      console.log("false")
      document.getElementById("repasswordalert").classList.remove("d-none");
        return false
    }
}
document.getElementById("Contact").addEventListener("click",function(){
    if( validname()==true &&validemail()==true &&validphone()==true &&validage()==true &&validpassword()==true &&validrepassword()==true ) { 
        document.getElementById("submitBtn").disabled = false;
    }
    else {
        document.getElementById("submitBtn").disabled = true;
    }   
 })



