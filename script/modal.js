function openModal(modal_id){
    let modal = document.getElementById(modal_id);
    modal.classList.remove("modal__none");
}
// function closeModal(e){
//     let modal=e.target.closest("modal");
//     modal.classList.add("modal__none");
// }
for(let btn of document.getElementsByClassName("close-modal")){
    btn.onclick=function (e) {
        let modal=e.target.closest(".modal");
        modal.classList.add("modal__none");
    }
}