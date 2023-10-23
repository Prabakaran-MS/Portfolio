let projects = document.querySelector('.projects');

function loadProject(title, period, description, githubLink, projectDetails) {

    const project = document.createElement('div');
    project.className = 'project';

    const projectRow1 = document.createElement('div');
    projectRow1.className = 'project-row';

    const projectTitle = document.createElement('div');
    projectTitle.className = 'project-col-1 project-title';

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const projectDuration = document.createElement('div');
    projectDuration.className = 'project-col-2 project-duration';

    const iconAlign = document.createElement('div');
    iconAlign.className = 'icon-align';

    const dateImage = document.createElement('img');
    dateImage.src = './fonts/calendar3.svg';

    const dateText = document.createElement('p');
    dateText.textContent = period;

    iconAlign.appendChild(dateImage);
    iconAlign.appendChild(dateText);

    projectTitle.appendChild(titleElement);
    projectDuration.appendChild(iconAlign);

    projectRow1.appendChild(projectTitle);
    projectRow1.appendChild(projectDuration);

    const projectRow2 = document.createElement('div');
    projectRow2.className = 'project-row';

    const projectDescription = document.createElement('div');
    projectDescription.className = 'project-col-1 project-description';

    const descriptionText = document.createElement('p');
    descriptionText.textContent = description;

    const projectLink = document.createElement('div');
    projectLink.className = 'project-col-1 project-link';

    const linkElement = document.createElement('a');
    linkElement.href = githubLink;
    linkElement.target = "_blank";
    linkElement.textContent = 'Github';

    projectDescription.appendChild(descriptionText);
    projectLink.appendChild(linkElement);

    projectRow2.appendChild(projectDescription);
    projectRow2.appendChild(projectLink);

    const projectRow3 = document.createElement('div');
    projectRow3.className = 'project-row';

    const projectDetailsContainer = document.createElement('div');
    projectDetailsContainer.className = 'project-details';

    const detailsList = document.createElement('ul');

    projectDetails.forEach((detail) => {
        const detailItem = document.createElement('li');
        detailItem.textContent = detail;
        detailsList.appendChild(detailItem);
    });

    projectDetailsContainer.appendChild(detailsList);

    projectRow3.appendChild(projectDetailsContainer);

    project.appendChild(projectRow1);
    project.appendChild(projectRow2);
    project.appendChild(projectRow3);

    let hline = document.createElement('hr');

    project.appendChild(hline);
    projects.appendChild(project);
}

loadProject(
    'Expense Tracker',
    'Oct 23',
    'Expense management app with tracking, visualization, and state management.',
    'https://github.com/Prabakaran-MS/Expense-Tracker', [
        'Visualized spending habits over different time frames (week, month, year) for better financial insights.',
        'Technologies: JavaScript, HTML, CSS',
    ]
);

loadProject(
    'Random Quote Generator',
    'Oct 23',
    'Developed a web application that generates random quotes using JavaScript.',
    'https://github.com/Prabakaran-MS/Random-Quote-Generator', [
        'Implemented a real-time quote generation feature for user engagement.',
        `Utilized asynchronous JavaScript to fetch and display quotes.`,
        'Technologies: JavaScript, HTML, CSS',
    ]
);

loadProject(
    'To-Do List Web App',
    'Sep 23',
    'Developed a task management web application for efficient task tracking.',
    'https://github.com/Prabakaran-MS/To-Do-list-Web-App', [
        'Features include adding, completing, and deleting tasks with a responsive design.',
        'Technologies: JavaScript, HTML, CSS',
    ]
);

loadProject(
    'CGPA Calculator',
    'Sep 23',
    'Designed a CGPA calculator for the Department of IST at Anna University.',
    'https://github.com/Prabakaran-MS/Au-Cgpa-Calculator', [
        'Streamlined academic tracking by enabling students to calculate their CGPA effortlessly.',
        'Technologies: JavaScript, HTML, CSS, XLSX Library',
    ]
);