function openModal(modal_id){
    let modal = document.getElementById(modal_id);
    modal.classList.remove("modal__none");
}
for(let btn of document.getElementsByClassName("close-modal")){
    btn.onclick=function (e) {
        let modal=e.target.closest(".modal");
        modal.classList.add("modal__none");
    }
}
for(let modal of document.getElementsByClassName("modal")){
    let modalBox=modal.getElementsByClassName("modal__box")[0];
    modalBox.addEventListener('click' , (e)=>{
        e.stopPropagation();
    })
    modal.addEventListener('click' , ()=>{
        // e.target.classList.add("modal__none")
        modal.classList.add("modal__none")
    });
}