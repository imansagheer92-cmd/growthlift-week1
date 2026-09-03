
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

 
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

      
        tab.classList.add("active");


      
        contents.forEach(content => {
            content.classList.remove("active");
        });


       
        const selectedContent = document.getElementById(tab.dataset.tab);

        selectedContent.classList.add("active");

    });

});