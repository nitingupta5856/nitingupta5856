 

var amount=document.querySelector("#amount");
let displaykaflex =document.querySelector("#dialog");
function enterAmount() {

  var getloanval = parseInt(prompt("Please enter amount"));
var outstandingloan = parseInt(document.getElementById("payloan").innerHTML);

 
var getloan =parseInt(document.querySelector("#get_loan").innerText) ;

  if (getloanval <= 2* getloan && outstandingloan == 0) {
    
    newgetlonaval=getloanval;
     var newenteramount= document.getElementById("get_loan").innerHTML = newgetlonaval+parseInt(getloan) +" kr";
    displaykaflex.style.display="flex";
    document.getElementById("payloan").innerHTML=parseInt(newenteramount) - parseInt(getloan)+" kr";
  } 
  else if(outstandingloan > 0) {
      alert("You can not take another loan");
  }
  else {
    alert("You cannot get a loan more than double of your bank balance");
  };
  
};

var a=0 ;
    var displayvalue=document.getElementById("balance_increase")
  var updatevalue =  function() {
    displayvalue.innerHTML=a+" kr";
};
var workAmount=function(valuetoadd){
    a+=valuetoadd;
    updatevalue ();
};
 

   function bankAmount() {
    var newworkamount=parseInt(document.getElementById("balance_increase").innerText)
   
    var bankamount= parseInt(document.getElementById("get_loan").innerText);
    var outstandingloan = parseInt(document.getElementById("payloan").innerText);
    var transferamountobank = 0;
    var transferamounttoloan = 0;
    if (newworkamount >0 ){
         transferamountobank =newworkamount;
        a=0;
        updatevalue();
        console.log(outstandingloan);
        
        
        if(outstandingloan >  0 ) {
         
           var m = parseFloat((10 * transferamountobank) / 100);
        if (m > outstandingloan) {
          transferamounttoloan = outstandingloan;
        }
        else {
          transferamounttoloan = m;
        } 
            transferamountobank = transferamountobank - transferamounttoloan;
            document.getElementById("get_loan").innerText=bankamount + transferamountobank +" kr";
         document.getElementById("payloan").innerText=outstandingloan - m+" kr";
       
        
    }
         else  {
            displaykaflex.style.display="none";
         document.getElementById("get_loan").innerText=bankamount + transferamountobank +" kr";
         
        }   
    }; 
   };

  function repayloanbtn(){
     
      var newworkamount=parseInt(document.getElementById("balance_increase").innerText)
      var bankamount= parseInt(document.getElementById("get_loan").innerHTML);
      var outstandingloan = parseInt(document.getElementById("payloan").innerHTML);
      var transferamountobank = 0;
      var transferamounttoloan = 0;
    
      if (newworkamount >0 ){
          transferamountobank =newworkamount;
          a=0;
          updatevalue();
         
          if(outstandingloan  >  0 ) {
              transferamounttoloan =parseFloat (transferamountobank);
              transferamountobank = transferamountobank - transferamounttoloan;
              document.getElementById("get_loan").innerHTML=bankamount + transferamountobank +" kr";
        //    document.getElementById("payloan").innerHTML=bankamount - transferamounttoloan-100+" kr";
        document.getElementById("payloan").innerText=outstandingloan - newworkamount+" kr";
        //    displaykaflex.style.display="none";
        

           } 
            else{  
                  alert("you don't have loan for pay ")
        
          }
         
      }

  };


  function buynow(){
    var laptop=document.querySelector(".api").innerHTML;
    var buy=parseInt(document.querySelector(".laptop_nos").innerText);
    var getloan =parseInt(document.querySelector("#get_loan").innerText) ;
   
    
    if(getloan>=buy){
     
      document.querySelector("#get_loan").innerText=getloan-buy +" kr";
     
       alert("you are now the owner of the new laptop");
      

      console.log(alert)
    }
    else{
      alert(" you cannot afford the laptop")
    }
  };

  async function getUsers() {
    
    let url = 'https://noroff-komputer-store-api.herokuapp.com/computers';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
// async function renderUsers() {

//     let users = await getUsers();
//     console.log(users);
//     let html = '';
//     users.forEach(user => {
      
        
//         let htmlSegment = 
//         `
        
//         <select class="laptop_part">
//         <option >${user.title}</option>
       
//         </select>
       
//         `;
                
//         html += htmlSegment;
//     });

//     let container = document.querySelector('.laptop_part');
//     container.innerHTML = html;
//      console.log(container)  

// }

//  renderUsers();

 async function nrenderUsers(name = null) {
  console.log(name);
  let nusers = await getUsers();
  let html = '';
 
    nusers.forEach(user => {
    
      let htmlSegment = 
   

      `<div class="final_part " >
      <div class="computer_part" >
      <div class="laptop_pic"></div>
      <img src="fujitsu-lifebook-p1000_eaav.1200.webp" alt="">
      <div >
        <div class="laptop_heading">${user.title}</div>
        <div class="laptop_subheading " >${user.specs}
          <span>This laptop will turn on! it is perfect</span>
          <span>for the first time user who likes to</span>
          <span>have a computer around!</span>
        </div>
      </div>
      <div>
        <div class="laptop_nos">${user.price}kr  </div>
      </div>
      <div class="finalbtn_part">

        <a class="btn" style="font-weight: bold;" onclick=buynow()>BUY  </a>
      </div>
     
      </div>
      </div>
      `;
      
      if(name != null) {
        if(user.title == name) {
          html += htmlSegment;
        }
      } 
      // else {
      //   html += ;
      // }
      
  });

  
  let newcontainer = document.querySelector('.api');
  newcontainer.innerHTML = html;
  console.log(newcontainer)

}
nrenderUsers();



 function laptop(select){
   
   nrenderUsers(select.value);

 
};




   


