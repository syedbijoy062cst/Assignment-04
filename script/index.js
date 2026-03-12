let currentTab = "all";
const tabActive = ["bg-primary" ];
const tabInactive = ["bg-transparent"];

const allContainer = document.getElementById("all-containar");
const interviewContainer = document.getElementById("Interview-container");

const rejectedContainer = document.getElementById("Rejected-container");
const emptyState = document.getElementById("empty-state");




function switchTab(tab){
    // console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
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

    emptyState.classList.add("hidden");

    if(tab === "all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
            if(interviewContainer.children.length < 1){
                emptyState.classList.remove("hidden");
            }

    }
    else{
        rejectedContainer.classList.remove("hidden");
        if(rejectedContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
     updateStats();
}


//  stat update

    const totalStat = document.getElementById("start-total");
    const interviewStat = document.getElementById("stat-interview");
    const rejectedStat = document.getElementById("stat-rejected");
    const availableStat = document.getElementById("Available");

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
        updateStats();
    }
    if(clickedElement.classList.contains("btn-rejected")){
        notApplied.innerText = "REJECTED";
        rejectedContainer.appendChild(card);        
    }
    if(clickedElement.classList.contains("btn-delete")){
        parent.removeChild(card);
        
    }

    updateStats();

   });

   function updateStats(){
    // totalStat.innerText = allContainer.children.length;
    // interviewStat.innerText = interviewContainer.children.length;
    // rejectedStat.innerText = rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    };
    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectedStat.innerText = counts.rejected;
    availableStat.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptyState.classList.remove("hidden");

    }
    else{
        emptyState.classList.add("hidden");2
    }
   }
 updateStats();