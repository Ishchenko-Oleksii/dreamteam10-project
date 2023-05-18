export function modalSignUp() {

    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.addEventListener('click', onClickBackdrop);
        refs.modal.classList.toggle("hidden");

        document.addEventListener('keydown', pressEsc);
        function pressEsc(event) {
            if (event.code === 'Escape') {
                refs.modal.classList.add("hidden");
                document.removeEventListener('keydown', pressEsc);
            }
        }
    }

    function onClickBackdrop(event) {
        if (event.currentTarget === event.target) {
            refs.modal.classList.toggle("hidden");
            refs.modal.removeEventListener('click', onClickBackdrop);
        }
    }
}
