function loadJsonFile(file,callback){
    var f=new XMLHttpRequest();
    f.overrideMimeType("application/json");
    f.open("GET",file,true);
    f.onreadystatechange = function(){
        if(f.readyState === 4 && f.status == "200")
        {
            callback(f.responseText);
        }
    }
    f.send();
}
loadJsonFile("index.json",function(text){
    var data1=JSON.parse(text);
    console.log(data1);
    details(data1.details);
    details1(data1.Personal);
    details2(data1.carrer);
    details3(data1.Education);
    details4(data1.projects);

})

var body=document.getElementById('root');
var d=document.createElement('div');
d.classList.add("main")
var h1=document.createElement("h1");
h1.classList.add("heading1");
h1.textContent="Resume"

body.appendChild(d);
var left=document.createElement("div");
left.classList.add("left");
d.appendChild(left);

var right=document.createElement("div");
right.classList.add("right");
d.appendChild(right);
right.appendChild(h1);

var pic=document.createElement("div");
left.appendChild(pic);
pic.classList.add("picc");
var hr=document.createElement("hr");
left.appendChild(hr);
var profile=document.createElement("div");
left.appendChild(profile);
profile.classList.add("prof");

function details(da)
{
    
        var img=document.createElement("img");
        img.setAttribute("src","images/images.png");
        pic.appendChild(img);
        var name=document.createElement("h2");
        name.setAttribute("id","name");
        name.textContent=da.name;
        profile.appendChild(name);
        var email1=document.createElement("h2");
        email1.setAttribute("id","email");
        email1.textContent=da.email;
        profile.appendChild(email1);
        var mobile=document.createElement("h2");
        mobile.setAttribute("id","mobile");
        mobile.textContent=da.mobile;
        profile.appendChild(mobile);
        var button=document.createElement("button");
        button.classList.add("btn");
        button.textContent="View Profile";
        profile.appendChild(button);
        
}
var ob =document.createElement("div");
ob.classList.add("objective");
right.appendChild(ob);
var h4 = document.createElement("h3");
h4.classList.add("heading")
h4.textContent = "CARRER OBJECTIVE";
ob.appendChild(h4);
ob.appendChild(document.createElement("HR"));
function details2(carrer)
{
    var para=document.createElement("p");
    para.textContent=carrer;
    ob.appendChild(para);
}

var d1 =document.createElement("div");

right.appendChild(d1);
var h4 = document.createElement("h3");
h4.classList.add("heading")
h4.textContent="PERSONAL INFORMATION"
d1.appendChild(h4);
d1.appendChild(document.createElement("HR"));
var d2=document.createElement("div");
d2.classList.add("personal");
d1.appendChild(d2);
var p1=document.createElement("div");
d2.appendChild(p1);

var p2=document.createElement("div");
d2.appendChild(p2);
function details1(arr)
{
    /*for (i in arr) {
      var ul =document.createElement("ul");
      ul.classList.add("myprofile");
      var li =document.createElement("li");
      li.textContent = arr[i].name;
      ul.appendChild(li);
      right.appendChild(ul);
      var li =document.createElement("li");
      li.textContent = arr[i].percentage;
      ul.appendChild(li);
      right.appendChild(ul);
      var li =document.createElement("li");
      li.textContent = arr[i].yop;
      ul.appendChild(li);
      right.appendChild(ul);
    }*/
    var ul =document.createElement("ul");
    var li =document.createElement("li");
    li.textContent = "DOB"+":"+arr.DOB;
    ul.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Age"+":"+arr.age;
    ul.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Mother"+":"+arr.Mother;
    ul.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Father"+":"+arr.Father;
    ul.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Religion"+":"+arr.Religion;
    ul.appendChild(li);
    p1.appendChild(ul);

    var ul1 =document.createElement("ul");
    var li =document.createElement("li");
    li.textContent = "BirthPlace"+":"+arr.place_of_Birth;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "WorkPlace"+":"+arr.desired;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Gender"+":"+arr.gender;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Occupation"+":"+arr.moccupation;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Occupation"+":"+arr.foccupation;
    ul1.appendChild(li);
    p2.appendChild(ul1);

}

var d3 =document.createElement("div");
right.appendChild(d3);
var h4 = document.createElement("h3");
h4.classList.add("heading")
h4.textContent="EDUCATION ATTAINMENT"
d3.appendChild(h4);
d3.appendChild(document.createElement("HR"));



function details3(ed)
{
    var h5 = document.createElement("h4");
    h5.classList.add("heading")
    h5.textContent="Tertiary Eduaction"
    d3.appendChild(h5);

    var ul1 =document.createElement("ul");
    var li =document.createElement("li");
    li.textContent = "College"+":"+ed.college;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Degree"+":"+ed.Degree;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Address"+":"+ed.Address;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Year"+":"+ed.g_year;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "CGP"+":"+ed.cgpa;
    ul1.appendChild(li);
    d3.appendChild(ul1);
    d3.appendChild(document.createElement("HR"));


    var h5 = document.createElement("h4");
    h5.classList.add("heading")
    h5.textContent="Elementary Eduaction"
    d3.appendChild(h5);

    var ul1 =document.createElement("ul");
    var li =document.createElement("li");
    li.textContent = "School"+":"+ed.school;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Address"+":"+ed.Address1;
    ul1.appendChild(li);
    var li =document.createElement("li");
    li.textContent = "Year"+":"+ed.s_year;
    ul1.appendChild(li);
    
    d3.appendChild(ul1);
}
var d5 =document.createElement("div");
right.appendChild(d5);
var h4 = document.createElement("h3");
h4.classList.add("heading")
h4.textContent="PROJECTS "
d5.appendChild(h4);
d5.appendChild(document.createElement("HR"));

function details4(pro)
{
    var p=document.createElement("p");
    p.textContent=pro.task1.head+""+pro.task1.Problem+".my role is "+pro.task1.role;
    d5.appendChild(p);
    var p=document.createElement("p");
    p.textContent=pro.task2.head+""+pro.task2.Problem+".my role is"+pro.task2.role;
    d5.appendChild(p);
}

