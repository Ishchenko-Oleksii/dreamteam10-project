export function modaSignUp() {

    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    // refs.modal.addEventListener('click', toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    // refs.modal.addEventListener('click', toggleModal);
    // window.removeEventListener('keydown', onPressEsc);

    function toggleModal() {
        // debugger;
        refs.modal.addEventListener('click', onClickBackdrop);
        refs.modal.classList.toggle("hidden");
        // refs.modal.addEventListener('click', toggleModal);
        // window.removeEventListener('keydown', onPressEsc);
        // refs.modal.classList.toggle("is-hidden");
        document.addEventListener('keydown', pressEsc);
        function pressEsc(event) {
            console.log('ESC');
            if (event.key === 'Escape') {
                refs.modal.classList.toggle("hidden");
                document.removeEventListener('keydown', pressEsc);
            }
        }

    }

    function onClickBackdrop(event) {
        if (event.currentTarget === event.target) {
            // onCloseModal();
            refs.modal.classList.toggle("hidden");
            refs.modal.removeEventListener('click', onClickBackdrop);
        }
    }

}