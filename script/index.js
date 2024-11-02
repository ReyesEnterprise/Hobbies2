// variables for editing

const editOpenButton = document.querySelector("#edit");

const videoEditingModal = document.querySelector("#video_editingModal");
const closeEditButton = videoEditingModal.querySelector(".modal__close-btn");

// functions for editing

function openEditModal() {
  videoEditingModal.classList.add("modal_opened");
}

function closeEditModal() {
  videoEditingModal.classList.remove("modal_opened");
}

// event listeners for editing

editOpenButton.addEventListener("click", openEditModal);
closeEditButton.addEventListener("click", closeEditModal);

//
//

// variables for drones

const openDronesButton = document.querySelector("#Drone");

const DroneModal = document.querySelector("#DronesModal");
const closeDronesButton = DroneModal.querySelector(".modal__close-btn");

// function for drones

function openDronesModal() {
  DroneModal.classList.add("modal_opened");
}

function closeDronesModal() {
  DroneModal.classList.remove("modal_opened");
}

// event listeners for drones

openDronesButton.addEventListener("click", openDronesModal);
closeDronesButton.addEventListener("click", closeDronesModal);

//
//
// variables for Guitar

const openGuitarButton = document.querySelector("#Guitar");

const GuitarModal = document.querySelector("#GuitarModal");
const closeGuitarButton = GuitarModal.querySelector(".modal__close-btn");

// function for Guitar

function openGuitarModal() {
  GuitarModal.classList.add("modal_opened");
}

function closeGuitarModal() {
  GuitarModal.classList.remove("modal_opened");
}

// event listeners for Guitar

openGuitarButton.addEventListener("click", openGuitarModal);
closeGuitarButton.addEventListener("click", closeGuitarModal);

//
//
// variables for 3D Printing

const openPrintingButton = document.querySelector("#Print");

const PrintingModal = document.querySelector("#printingModal");
const closePrintingButton = PrintingModal.querySelector(".modal__close-btn");

// function for #3D Printing

function openprintingModal() {
  PrintingModal.classList.add("modal_opened");
}

function closePrintingModal() {
  PrintingModal.classList.remove("modal_opened");
}

// event listeners for 3D Printing

openPrintingButton.addEventListener("click", openprintingModal);
closePrintingButton.addEventListener("click", closePrintingModal);
