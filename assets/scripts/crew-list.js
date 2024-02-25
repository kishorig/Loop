document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
  fetch("crew.json")
        .then(response => response.json())
        .then(data => {
            // Process the data and display it in HTML
            displayData(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    function displayData(data) {
        // Select the container where data will be displayed
        const container = document.getElementById("crewContainer");
        const loadMoreBtn = document.getElementById("load-more-btn");
        
        

        // Iterate over each item in the data array
        data.forEach(item => {
            // Create elements to display the data
            const div = document.createElement("div");
            const img= document.createElement("img");
            const details = document.createElement("p");
            const name = document.createElement("h3");
            const duty_slugs = document.createElement("p");
            const duties = document.createElement("h4");

            // Assign data to elements
            
            img.src = item.image;
            name.textContent = item.name;
            duty_slugs.textContent = item.duty_slugs;
            duties.textContent = item.duties;

            img.style.width = "200px";

            // Append elements to the container
            div.appendChild(img);
            details.appendChild(name);
            details.appendChild(duty_slugs);
            details.appendChild(duties);
            container.appendChild(div);
            container.appendChild(details);
        });
    }
});


