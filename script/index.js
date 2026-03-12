let currentTab = "all";
const tabActive = ["bg-primary" ];
const tabInactive = ["bg-transparent"];

const allContainer = document.getElementById("all-containar");
const interviewContainer = document.getElementById("Interview-container");

const rejectedContainer = document.getElementById("Rejected-container");





function switchTab(tab){
    // console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    for(const t of tabs){
        const tabName = document.getElementById("tab-" + t);
        if(t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);

        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    
    const pages = [allContainer, interviewContainer, rejectedContainer];
    for(const section of pages){
        section.classList.add("hidden");
    }

    if(tab === "all"){
        allContainer.classList.remove("hidden");
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
    }
    else{
        rejectedContainer.classList.remove("hidden");
    }

}


//  stat update

    const totalStat = document.getElementById("start-total");
    const interviewStat = document.getElementById("stat-interview");
    const rejectedStat = document.getElementById("stat-rejected");

    // Example values - replace with actual logic
    totalStat.innerText = allContainer.children.length;
    // interviewStat.textContent = "0";
    // rejectedStat.textContent = "0"


   switchTab(currentTab);

   document.getElementById("jobs-container")
   .addEventListener("click", function(event){
    const clickedElement = event.target;

    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const notApplied = card.querySelector(".not-applied");
    
    if(clickedElement.classList.contains("btn-interview")){
        notApplied.innerText = "INTERVIEW";
        interviewContainer.appendChild(card);        
    }
    if(clickedElement.classList.contains("btn-rejected")){
        notApplied.innerText = "REJECTED";
        rejectedContainer.appendChild(card);        
    }
    if(clickedElement.classList.contains("btn-delete")){
        parent.removeChild(card);
        
    }



   });

