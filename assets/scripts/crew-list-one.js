document.addEventListener("DOMContentLoaded", async function() {
  const crewContainer = document.getElementById("crewContainer");
  const loadMoreButton = document.getElementById("loadMoreButton");
  let page = 1; 
  let membersLoaded = 0; 

  async function fetchCrewMembers(pageNumber) {
      try {
          const response = await fetch(`https://retoolapi.dev/uBQ1WD/data?page=${pageNumber}`);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching crew members:', error);
          return [];
      }
  }

  async function displayInitialCrewMembers() {
      const crewMembers = await fetchCrewMembers(page);
      const initialMembers = crewMembers.slice(0, 5); 
      displayCrewMembers(initialMembers);
      membersLoaded += initialMembers.length;
  }

  function displayCrewMembers(crewMembers) {
      crewMembers.forEach(member => {
          const div = document.createElement("div");
          const img = document.createElement("img");
          const details = document.createElement("div");
          const name = document.createElement("h3");
          const duties = document.createElement("h4");

          img.src = member.image;
          name.textContent = member.name;
          duties.textContent = member.duties;

          img.style.width = "288px";
          div.classList.add('crew-member-container');
          details.classList.add('details-container');
          details.innerHTML = `<h3>${member.name}</h3><h4>${member.duties}</h4>`;

          div.appendChild(img);
          div.appendChild(details);
          crewContainer.appendChild(div);

      });
  }

 
  async function loadMoreCrewMembers() {
      page++;
      const crewMembers = await fetchCrewMembers(page);
      const nextMembers = crewMembers.slice(membersLoaded, membersLoaded + 5); // Get the next 5 members
      displayCrewMembers(nextMembers);
      membersLoaded += nextMembers.length;
  }

 
  loadMoreButton.addEventListener("click", loadMoreCrewMembers);

  await displayInitialCrewMembers();
});
