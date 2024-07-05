// ----MENU RESPONSIVE----

// initialisation du menu fermé au chargement de la page
let windowHeightMin = window.innerWidth <= 760;

function windowLoad() {
  windowHeightMin === true
    ? window.addEventListener("load", closeNav(), false)
    : window.addEventListener("load", openNav(), true);
}

//constantes du menu

const openIcon = document.querySelector("#open-icon");
const closeIcon = document.querySelector("#close-icon");
const navList = document.querySelector(".menuNav");
const navListLi = navList.querySelector(".liNav");

//fonction ouverture du menu
function openNav() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  navList.style.display = "block";
}

//fonction fermeture du menu
function closeNav() {
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  navList.style.display = "none";
}

//----CHATBOT----

//ouverture du chatbot
const chatbot = document.querySelector(".chatbot");
const iconChat = document.getElementById("iconChat");

function openChat() {
  chatbot.style.display = "block";
  iconChat.style.display = "none";
}

//fermeture du chatbot

function closeChat() {
  chatbot.style.display = "none";
  iconChat.style.display = "block";
}
//chatbot

function sendQuestion() {
  const bienvenue = document.getElementById("bienvenue");
  const responseContainer = document.getElementById("response");

  //Disparition du message de Bienvenue
  bienvenue.style.display = "none";

  //faire apparaître la question de l'utilisateur

  const questionContainer = document.getElementById("question-user");
  const questionUser = questionContainer.value;
  const newElement = document.createElement("p");
  newElement.textContent = questionUser;
  newElement.classList.add("bubble-right");
  responseContainer.appendChild(newElement);

  //Icône de chargement en attendant la réponse

  const chargement = document.createElement("i");
  chargement.classList.add("fa-solid");
  chargement.classList.add("fa-spinner");
  chargement.id = "chargement";
  responseContainer.appendChild(chargement);
  chargement.style.display = "block";

  // Le chatBot répond après un délai

  setTimeout(() => {
    //supprime l'icône de chargement
    chargement.style.display = "none";

    //prépare la réponse
    const newResponse = document.createElement("p");
    const formChat = document.getElementById("formulaireChat");

    // vérifie la question et trouve la réponse appropriée
    if (questionUser === "Comment je m'appelle ?") {
      newResponse.textContent = "Priscilla";
      formChat.style.display = "none";
    } else {
      newResponse.textContent =
        "Je ne connais pas encore la réponse à votre question. Veuillez remplir le formulaire ci-dessous et vous serez recontacté dans les plus brefs délais :";
      formChat.style.display = "block";
    }

    if (
      questionUser ===
      "Comment s'appelle le cheval principal dans L'étalon noir ?"
    ) {
      newResponse.textContent = "Le cheval principal s'appelle Black !";
      formChat.style.display = "none";
    } else {
      newResponse.textContent =
        "Je ne connais pas encore la réponse à votre question. Veuillez remplir le formulaire ci-dessous et vous serez recontacté dans les plus brefs délais :";
      formChat.style.display = "block";
    }

    //ajoute la classe et renvoi la réponse
    newResponse.classList.add("bubble-left");
    responseContainer.appendChild(newResponse);

    //efface la réponse de l'input
    questionContainer.value = "";
  }, 2000);
}
