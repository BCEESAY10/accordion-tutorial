const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item) => {
    let button = item.querySelector("button");

    // Hover to give it focus so keyboard works
    button.addEventListener("mouseenter", () => {
        button.focus();
    });

    button.addEventListener("click", () => {
        openContent(item);
        
        // function to pass the index number of clicked button
        removeOpenedContent(item); 
    })

    button.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openContent(item);
          removeOpenedContent(item);
        }
      });

})

function openContent (item) {
    item.classList.toggle("is-open");

    let description = item.querySelector(".accordion-content-description");
    if(item.classList.contains("is-open")){
        // Scrollheight property return the height of
        // an element including padding
        description.style.height=`${description.scrollHeight}px`; 
        item.querySelector("i").classList.replace("fa-plus","fa-minus");
    }else{
        description.style.height = "0px";
        item.querySelector("i").classList.replace("fa-minus","fa-plus");
    }
}

function removeOpenedContent(currentItem){
    accordionContent.forEach((item)=>{
        if(item !== currentItem){
            item.classList.remove("is-open");
            let descrip = item.querySelector(".accordion-content-description");
            descrip.style.height="0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
    })
}