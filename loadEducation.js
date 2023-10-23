const educationsContainer = document.querySelector(".educations");

function loadEducation(degree, years, college, location, logoPath) {

    const educationDiv = document.createElement("div");
    educationDiv.className = "education";

    const educationRow = document.createElement("div");
    educationRow.className = "education-row";

    const educationDetail = document.createElement("div");
    educationDetail.className = "education-detail";

    const degreeElement = document.createElement("h3");
    degreeElement.textContent = degree;

    const iconAlignYears = document.createElement("div");
    iconAlignYears.className = "icon-align";

    const yearsImage = document.createElement("img");
    yearsImage.src = "./fonts/calendar3.svg";

    const yearsText = document.createElement("p");
    yearsText.textContent = years.join(" - ");

    const collegeElement = document.createElement("p");
    collegeElement.textContent = college;

    const iconAlignLocation = document.createElement("div");
    iconAlignLocation.className = "icon-align";

    const locationImage = document.createElement("img");
    locationImage.src = "./fonts/geo-alt.svg";

    const locationText = document.createElement("p");
    locationText.textContent = location;

    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";

    const logoImage = document.createElement("img");
    logoImage.src = logoPath;

    iconAlignYears.appendChild(yearsImage);
    iconAlignYears.appendChild(yearsText);

    iconAlignLocation.appendChild(locationImage);
    iconAlignLocation.appendChild(locationText);

    educationDetail.appendChild(degreeElement);
    educationDetail.appendChild(iconAlignYears);
    educationDetail.appendChild(collegeElement);
    educationDetail.appendChild(iconAlignLocation);

    logoDiv.appendChild(logoImage);

    educationRow.appendChild(educationDetail);
    educationRow.appendChild(logoDiv);

    educationDiv.appendChild(educationRow);

    let hline = document.createElement('hr');
    educationDiv.appendChild(hline);

    educationsContainer.appendChild(educationDiv);
}

// Call the function to load education data
loadEducation("MCA", ["2021", "2023"],
    "College of Engineering, Guindy",
    "Chennai", "./images/CEG.png");
loadEducation("BSc", ["2018", "2021"],
    "PSG College of Arts & Science",
    "Coimbatore", "./images/PSG.png");