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
    discription: `My love for 3D printing is a thrilling exploration of innovation and creativity. Watching designs materialize layer by layer feels like witnessing modern magic. From complex models to practical tools, the potential is limitless. The process of transforming digital concepts into reality with just filament and precision is mesmerizing`,
  },
];

/*              
    
                     variables for template
                     
*/

const cardTemplate = document.querySelector("#card__template");

const cardList = document.querySelector(".cards__list");

/*              
    
                     variables for editing
                     
*/

const videoEditingModal = document.querySelector("#video_editingModal");

const closeEditButton = videoEditingModal.querySelector(".modal__close-btn");

/*              
    
                     variables for drones
                     
*/

const DroneModal = document.querySelector("#DronesModal");
const closeDronesButton = DroneModal.querySelector(".modal__close-btn");

/*              
    
                     variables for Guitar
                     
*/

const GuitarModal = document.querySelector("#GuitarModal");

const closeGuitarButton = GuitarModal.querySelector(".modal__close-btn");

/*              
    
                     variables for 3D Printing
                     
*/

const PrintingModal = document.querySelector("#printingModal");

const closePrintingButton = PrintingModal.querySelector(".modal__close-btn");

/*              
    
                     variables for Form Modals
                     
*/
const feedbackForm = document.forms.feedbackForm;

const formModal = document.querySelector("#formModal");

const closeFormBtn = formModal.querySelector(".modal__close-btn");

const navMoreBtn = document.querySelector(".nav__link-more");

/*              
    
                     Functions for template 
                     
*/

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImg = cardElement.querySelector(".card__image");
  const cardNameEl = cardElement.querySelector(".card__title");
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
    
                     open btn variables  
                     
*/
const editOpenButton = document.querySelector("#edit");
const openDronesButton = document.querySelector("#Drone");
const openGuitarButton = document.querySelector("#Guitar");
const openPrintingButton = document.querySelector("#Print");

/*              
    
                     event listeners for editing
                     
*/

editOpenButton.addEventListener("click", () => {
  openModal(videoEditingModal);
});

closeEditButton.addEventListener("click", () => {
  closeModal(videoEditingModal);
});

/*              
    
                     event listeners for drones
                     
*/

openDronesButton.addEventListener("click", () => {
  openModal(DroneModal);
});

closeDronesButton.addEventListener("click", () => {
  closeModal(DroneModal);
});

/*              
    
                     event listeners for Guitar
                     
*/

openGuitarButton.addEventListener("click", () => {
  openModal(GuitarModal);
});

closeGuitarButton.addEventListener("click", () => {
  closeModal(GuitarModal);
});

/*              
    
                     event listeners for 3D Printing
                     
*/

openPrintingButton.addEventListener("click", () => {
  openModal(PrintingModal);
});

closePrintingButton.addEventListener("click", () => {
  closeModal(PrintingModal);
});

/*              
    
                     event listeners for Form Modal
                     
*/

navMoreBtn.addEventListener("click", () => {
  openModal(formModal);
});

closeFormBtn.addEventListener("click", () => {
  closeModal(formModal);
  feedbackForm.reset();
});

/*              
    
                     open / close functions
                     
*/
function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

/*              
    
                     toggle button
                     
*/

const toggleButton = document.querySelector("#toggleButton");
const navBar = document.querySelector("#navBar");

toggleButton.addEventListener("click", onToggleClick);

function onToggleClick() {
  navBar.classList.toggle("nav-open");
}
