const body = document.querySelector("body");

function header(){

    const header = document.createElement("div");
    header.className = "header";

    const myName = document.createElement("h2");

    const home = document.createElement("a");
    home.href = 'index.html';
    home.textContent = "Angad Singh";

    myName.appendChild(home);

    const aboutPage = document.createElement("a");
    aboutPage.textContent = "About";
    aboutPage.href = 'about.html'

    const projectPage = document.createElement("a");
    projectPage.textContent = "Projects"
    projectPage.href = 'projects.html';
    
    const resumePage = document.createElement("a");
    resumePage.href = "images/resume.pdf";
    resumePage.target = "_blank"; 
    document.body.appendChild(resumePage); 

    header.appendChild(myName);
    header.appendChild(aboutPage);
    header.appendChild(projectPage);
    header.appendChild(resumePage);

    body.prepend(header);
}

function footer(){
    const footer = document.createElement("div");
    footer.className = "footer";

    const linkIcons = document.createElement("div");
    linkIcons.className = "link_icons";


    const lnImage = document.createElement("img");
    lnImage.src= "images/linkedIn.webp";
    const lnLink = document.createElement("a");
    lnLink.href = "https://www.linkedin.com/in/angad-singh-a80a61233/";
    lnLink.appendChild(lnImage);


    const gitImg = document.createElement("img");
    gitImg.src=  "images/git.png";
    const gitLink = document.createElement("a");
    gitLink.href = "https://github.com/angadsingh24";
    gitLink.appendChild(gitImg);

    const mailImg = document.createElement("img");
    mailImg.src=  "images/gmail.png";
    const mailLink = document.createElement("a");
    mailLink.href = "mailto:angads@umich.edu";
    mailLink.appendChild(mailImg);

    linkIcons.appendChild(lnLink);
    linkIcons.appendChild(gitLink);
    linkIcons.appendChild(mailLink);

    footer.appendChild(linkIcons);

    body.appendChild(footer);
}

header();
footer();


const openButtons = document.querySelectorAll('.trigger-modal');
const closeButtons = document.querySelectorAll('.close-modal');

function toggleModal(event) {
    const modalId = event.target.getAttribute('data-modal');
    const modalDiv = document.getElementById(modalId);
    modalDiv.classList.toggle('show');
}

openButtons.forEach(button => {
    button.addEventListener('click', toggleModal);
});

closeButtons.forEach(button => {
    button.addEventListener('click', toggleModal);
});
