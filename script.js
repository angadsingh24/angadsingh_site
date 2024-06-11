const body = document.querySelector("body");

function header(){

    const header = document.createElement("div");
    header.className = "header";

    const myName = document.createElement("h2");
    myName.textContent = "Angad Singh";

    const home = document.createElement("a");
    home.textContent = "Home"
    home.href = 'index.html';

    const aboutPage = document.createElement("a");
    aboutPage.textContent = "About";

    const projectPage = document.createElement("a");
    projectPage.textContent = "Projects"
    projectPage.href = 'projects.html';

    const resumePage = document.createElement("a");
    resumePage.textContent = "Resume";
    resumePage.href = "https://docs.google.com/document/d/e/2PACX-1vT8Snv6YQD-3WgUEW0sCPonF479dtEFMUeD4uD4MiX79vNVTg-2AxtuPNzcjBgMr3Ivz8gtw6GlzHoY/pub";

    header.appendChild(myName);
    header.appendChild(home);
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
    lnImage.src= "https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png";
    const lnLink = document.createElement("a");
    lnLink.href = "https://www.linkedin.com/in/angad-singh-a80a61233/";
    lnLink.appendChild(lnImage);


    const gitImg = document.createElement("img");
    gitImg.src=  "https://cdn-icons-png.flaticon.com/512/25/25231.png";
    const gitLink = document.createElement("a");
    lnLink.href = "https://github.com/angadsingh24";
    gitLink.appendChild(gitImg);

    const mailImg = document.createElement("img");
    mailImg.src=  "https://www.freeiconspng.com/thumbs/gmail-icon/gmail-icon-23.png";
    const mailLink = document.createElement("a");
    mailLink.href = "mailto:angads@umich.edu";
    mailLink.appendChild(mailImg);

    linkIcons.appendChild(lnLink);
    linkIcons.appendChild(gitLink);
    linkIcons.appendChild(mailImg);

    footer.appendChild(linkIcons);

    body.appendChild(footer);
}

header();
footer();