import react from 'react';
import data from '../../public/database.json'
import classes from '../../components/Home/announcements.css'
const Modal = (props) => {
    const idd = props.id;
    const dat = data.announcements.filter((item) => item.id == idd)
    const modal_check = props.modal_check;
    const butcl = () => {
        modal_check(false);
        console.log("opened_opened" + idd);
    }
    console.log(dat[0]);
    return (
        <div>
            <div className='modalmain'>
                {/* <h1>hellofbhh</h1> */}
                <div id="open-modal" className="modal-background">
                </div>
                <div className="modal-window">
                    <a href="#" onClick={butcl} title="Close" className="modal-close"><img src="https://img.icons8.com/?size=512&id=7703&format=png" className="cross" alt='close'></img></a>
                    <h1>{dat[0].title}</h1>
                    <div className='modal-body'>{dat[0].body}</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
