const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")
const navContact = document.querySelector("#nav-contact")
const btnContact = document.querySelector("#btn-hamkari")
const btnContact2 =document.querySelector("#btn-contact")
const contact = document.querySelector("#contact")
const form =document.querySelector("#contact-form")
const name = document.querySelector("#name")
const nameError = document.querySelector("#name-error")
const email= document.querySelector("#email")
const emailError = document.querySelector("#email-error")
const numberPhone = document.querySelector("#number-phone")
const numError = document.querySelector("#tel-error")
const idea = document.querySelector("#message")
const select = document.querySelector(".select")
const servicesCard = document.querySelector(".services-grid")
const projectCards =document.querySelector(".projects-cards")
const projectDetails = document.querySelector(".project-details")




function addShowform(){

    contact.classList.add("showForm")
}

menuToggle.addEventListener("click",()=>{
  
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");

})


btnContact.addEventListener("click", ()=>{
        addShowform();
})

navContact.addEventListener("click",()=>{
     addShowform();
})

btnContact2.addEventListener("click" , ()=>{
    addShowform();
})

form.addEventListener("submit", (event)=>{

    const phoneRegex = /^09[0-9]{9}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    nameError.textContent="";
    emailError.textContent="";
    numError.textContent="";

        if(name.value.trim()===""){
            event.preventDefault();
            nameError.textContent ="* نام وارد نشده "
            name.focus();
            return
        }
    
        if(email.value.trim()===""){

            event.preventDefault();
            emailError.textContent =" * ایمیل وارد نشده"
            email.focus();
            return
            
        }
        if(!emailRegex.test(email.value)){

            event.preventDefault();
            emailError.textContent =" * ایمیل وارد شده صحیح نمیباشد"
            email.focus();
            return
            
        }
      
        if(numberPhone.value.trim()===""){
            event.preventDefault();    
            numError.textContent =" * شماره همراه وارد نشده"
            numberPhone.focus();
            return
            
        }
      
        if(! phoneRegex.test(numberPhone.value) ){
            event.preventDefault();    
            numError.textContent =" * شماره همراه وارد شده صحیح نمیباشد"
            numberPhone.focus();
            return
            
        }
        if(select.value===""){
            event.preventDefault();
            alert("یک موضوع انتخاب کنید !")
            select.focus();
            return;
        }
        if(idea.value.trim()===""){
            event.preventDefault();
            alert(" درخواستی مطرح نکردید !")
            idea.focus();
            return;
        }
      
        alert("درخواست شما با موفقیت ارسال شد")

        name.value = "";
        email.value = "";
        numberPhone.value = "";
        idea.value= "";

    
    
})

projectCards.addEventListener("click" , (event)=>{
    const card = event.target.closest(".project-card")
    if(event.target.closest(".close-project")){
        card.classList.remove("showDetails")
        return
    }
    card.classList.add("showDetails")
})

servicesCard.addEventListener("click",(event)=>{
    const servicecard = event.target.closest(".service-card")
    if(event.target.closest(".close-service")){
        servicecard.classList.remove("showService")
        return
    }
    servicecard.classList.add("showService")
})
