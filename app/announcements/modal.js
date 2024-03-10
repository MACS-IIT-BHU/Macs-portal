import react from 'react';
import data from '../../public/database.json'
import classes from '../../components/Home/announcements.css'
const Modal = ({ modal_check, element }) => {

    const butcl = () => {
        modal_check(false);
        console.log("modal closed " + Element.title);
    }

    return (
        <div>
            <div className='modalmain'>
                {/* <h1>hellofbhh</h1> */}
                <div id="open-modal" className="modal-background">
                </div>
                <div className="modal-window">
                    <button onClick={butcl} title="Close" className="modal-close">
                        <img src="https://img.icons8.com/?size=512&id=7703&format=png" className="cross" alt='close'></img>
                    </button>
                    <h1>{element.title}</h1>
                    <div className='modal-body'>{element.eventContent}</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
