/*              
    
                     Arrays 

*/

initialCards = [
  {
    link: "./images/Editing.jpeg",
    name: "Video Editing",
    id: "edit",
    discription: `growing up I've always been a movie buff I loved how movies
    unfold and tell a story, how they touch and pull at your
    emotions. Of course, the next natural step would be to want to
    make my own movies...right? at least for me, it was I could
    spend hours on my computer trying to get that perfect clip for
    my home video.`,
  },
  {
    link: "./images/Dji_Drone.png",
    name: "Drones",
    id: "Drone",
    discription: `Drones have been a hobby of mine for a while now, but when I
     was a child I wanted to be a pilot. flying planes and
     helicopters where allways the big dream, although it always
     seemed out of reach. Now with drones being more affordable
     than ever in latest years , I can finally get my wings, well
     at least in a virtual sense anyways.`,
  },
  {
    link: "./images/GuitarPlayer.jpg",
    name: "Playing Guitar",
    id: "Guitar",
    discription: `
    Playing the Guitar is something I always recommend everyone
    learns to do, It is a skill that always impresses everyone at
    a campfire but to me, it's more than a cool party trick it's a
    skill that really lets you express yourself without having to
    say any words, with every strum and every note it unlocks a
    new part of your brain that can't be expressed but only felt.`,
  },
  {
    link: "./images/pexels-jakubzerdzicki-19124461.jpg",
    name: "3D printing",
    id: "Print",
    discription: `growing up I've always been a movie buff I loved how movies
    unfold and tell a story, how they touch and pull at your
    emotions. Of course, the next natural step would be to want to
    make my own movies...right? at least for me, it was I could
    spend hours on my computer trying to get that perfect clip for
    my home video.`,
  },
];

/*              
    
                     variables for template
                     
*/

const cardTemplate = document.querySelector(".card__template");

const cardList = document.querySelector(".cards__list");

/*              
    
                     Functions for template 
                     
*/
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImg = cardElement.querySelector(".card__image");
  const cardDiscription = cardElement.querySelector(".card__discription");
  const cardMoreBtn = cardElement.querySelector(".card__more-btn");

  cardDiscription.textContent = data.discription;
  cardNameEl.textContent = data.name;
  cardMoreBtn.id = data.id;
  cardImg.src = data.link;
  cardImg.alt = data.name;

  return cardElement;
}

/*              
    
                     ForEach loop for template 
                     
*/

initialCards.forEach((element) => {
  const cardEl = getCardElement(element);
  cardList.append(cardEl);
});

/*              
    
                     variables for editing
                     
*/

const editOpenButton = document.querySelector("#edit");

const videoEditingModal = document.querySelector("#video_editingModal");

const closeEditButton = videoEditingModal.querySelector(".modal__close-btn");

/*              
    
                     functions for editing
                     
*/

function openEditModal() {
  videoEditingModal.classList.add("modal_opened");
}

function closeEditModal() {
  videoEditingModal.classList.remove("modal_opened");
}

/*              
    
                     event listeners for editing
                     
*/

editOpenButton.addEventListener("click", openEditModal);

closeEditButton.addEventListener("click", closeEditModal);

/*              
    
                     variables for drones
                     
*/

const openDronesButton = document.querySelector("#Drone");

const DroneModal = document.querySelector("#DronesModal");
const closeDronesButton = DroneModal.querySelector(".modal__close-btn");

/*              
    
                     function for drones
                     
*/

function openDronesModal() {
  DroneModal.classList.add("modal_opened");
}

function closeDronesModal() {
  DroneModal.classList.remove("modal_opened");
}

/*              
    
                     event listeners for drones
                     
*/

openDronesButton.addEventListener("click", openDronesModal);

closeDronesButton.addEventListener("click", closeDronesModal);

/*              
    
                     variables for Guitar
                     
*/

const openGuitarButton = document.querySelector("#Guitar");

const GuitarModal = document.querySelector("#GuitarModal");

const closeGuitarButton = GuitarModal.querySelector(".modal__close-btn");

/*              
    
                     function for Guitar
                     
*/

function openGuitarModal() {
  GuitarModal.classList.add("modal_opened");
}

function closeGuitarModal() {
  GuitarModal.classList.remove("modal_opened");
}

/*              
    
                     event listeners for Guitar
                     
*/

openGuitarButton.addEventListener("click", openGuitarModal);

closeGuitarButton.addEventListener("click", closeGuitarModal);

/*              
    
                     variables for 3D Printing
                     
*/

const openPrintingButton = document.querySelector("#Print");

const PrintingModal = document.querySelector("#printingModal");

const closePrintingButton = PrintingModal.querySelector(".modal__close-btn");

/*              
    
                     function for #3D Printing
                     
*/

function openprintingModal() {
  PrintingModal.classList.add("modal_opened");
}

function closePrintingModal() {
  PrintingModal.classList.remove("modal_opened");
}

/*              
    
                     event listeners for 3D Printing
                     
*/

openPrintingButton.addEventListener("click", openprintingModal);

closePrintingButton.addEventListener("click", closePrintingModal);

/*              
    
                     toggle button
                     
*/

const toggleButton = document.querySelector("#toggleButton");
const navBar = document.querySelector("#navBar");

toggleButton.addEventListener("click", onToggleClick);

function onToggleClick() {
  navBar.classList.toggle("nav-open");
}

function closeToggleClick() {
  toggleButton.classList.toggle("");
}
