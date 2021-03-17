$(document).ready(function(){


// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal
 
$(".tab-btn").click(function(){
   var tebIndex = $(this).attr("data-index");

   var tab1 ='<div class="tab-1"> <div class="tab-section-1"> <img src="./images/img2.png" alt="racing"> </div> <div class="tab-section-2"> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, explicabo ullam maxime assumenda nisi, error hic quam excepturi pariatur corrupti soluta. Iste tenetur sed  </p> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, explicabo ullam maxime assumenda nisi, error hic quam excepturi pariatur corrupti soluta. Iste tenetur sed recusandae   </p> </div> </div>';

   var tab2 = '<div class="tab-2"> <h1>Where dose it come from?</h1> <div class="tab-section-1"> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, explicabo ullam maxime assumenda nisi,   </p> </div> <div class="tab-section-2"> <img src="./images/img2.png" alt="racing"> <img src="./images/img4.png" alt="racing"> </div> </div>';

   var tab3 =' <h1 class="tab-h1">Why do we Use it?</h1> <div class="tab-3"><div class="tab-section-1"> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, explicabo ullam maxime assumenda nisi,  </p> </div> <div class="tab-section-2"> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, explicabo ullam maxime assumenda nisi, error hic quam excepturi pariatur corrupti soluta. Iste tenetur sed recusandae officia expedita quos voluptates excepturi. Atque architecto quae eaque quos impedit, amet id eius illum. </p> </div> <div class="tab-section-3"> <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, explicabo ullam maxime assumenda nisi, error hic quam excepturi pariatur corrupti soluta. Iste tenetur sed recusandae officia expedita quos voluptates excepturi. Atque architecto quae eaque quos impedit, amet id eius illum. </p> </div> </div>';

if(tebIndex == 'tab-1'){
    // $(".modal-content").addClass("tabName1");
    $(".tabName").html("Tab 1");
    $(".body-content").html(tab1);   

}else if(tebIndex == 'tab-2'){
    $(".tabName").html("Tab 2");

    $(".body-content").html(tab2);   

}else{
    $(".tabName").html("Tab 3");

    $(".body-content").html(tab3);   

}

$("#myModal").show();
});

// When the user clicks on <span> (x), close the modal
 
$(".close").on("click",function(){
$("#myModal").fadeOut();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});



/*****************************/

const data = myData;
console.log(data)
const head = document.querySelector("header h1")
const list = document.querySelector("#list p");
const tab = document.querySelector("#tabs");

head.innerHTML=data.title;
let listItems = `<li>Lorem Ipsum List items</li>`
data.ost.forEach(item=>{
listItems += `<li>${item.text}</li>`
});
list.innerHTML = listItems;

function createTab(arr){
    let title = document.createElement("h1");
    let tabList = document.createElement("p");
    title.innerHTML = arr.title;
    let element = "";
    arr.ost.forEach(item=>{
        element += `<li>${item.text}</li>`
    })
    tabList.innerHTML = element;
    tab.append(title,tabList)
}

data.tabs.forEach(item=>{
    createTab(item)
})






