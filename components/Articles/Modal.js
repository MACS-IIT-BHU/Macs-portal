import React from 'react';

const Modal = (props) => {
    return (
        <div className='justify-center' style={{transition:'all 1s linear'}}>
        <div className='h-full w-full fixed top-0 opacity-95 modal-backdrop bg-gray-500 z-10' onClick={props.onBgTouch}></div>
        <div className='scroll-modal h-3/4 w-3/4 bg-white opacity-100 z-50 fixed top-[15%] left-[13%] rounded-xl flex flex-col justify-center overflow-y-scroll items-center shadow-2xl'>

            {/* image section */}
            <div className='image-section w-full h-full flex flex-col justify-center items-center'>
                <div className='image-area  w-3/4 h-3/4 md:h-[250px] bg-gray-500 mt-10 md:mt-20 rounded-xl mb-5'></div>
            </div>

            <div className='desc-area flex flex-col w-3/4 justify-between'>
                <h1 className='text-xl font-semibold'>Title of the Article</h1>
                <div className='flex items-center justify-between'>
                <p>{props.content.author}</p>
                <p className='text-gray-600 text-sm'>23.4.2022</p>
                </div>
            </div>

            <div className='relative w-3/4 h-1/2'>
            <p className='text-gray-700 overflow-auto py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nulla orci, auctor sed quam nec, vehicula laoreet metus. Mauris id enim dui. Fusce neque dui, congue sit amet imperdiet ut, gravida gravida magna. Ut eu leo suscipit, venenatis justo id, tristique sem. Proin vel suscipit enim. Duis dui diam, dictum id risus nec, vulputate tincidunt ex. Nulla fermentum ipsum mauris, congue mollis ipsum bibendum ac. Nam sodales, risus quis molestie facilisis, diam risus ullamcorper quam, sit amet sodales tortor augue dignissim neque. Nam dignissim et sem eget faucibus.

Sed dictum, est vitae elementum mattis, neque eros faucibus lacus, quis scelerisque massa erat in purus. Quisque vel convallis quam, vitae gravida mauris. Fusce id ligula sit amet libero tempus pulvinar. Ut semper augue odio, sit amet porta est vehicula at. Integer ac eros eget nibh ultricies euismod. Aliquam ac consectetur magna, non semper magna. Pellentesque rutrum, mauris nec fermentum aliquet, nibh est luctus lectus, nec semper ex arcu et risus. Quisque ultricies congue aliquet. Aliquam erat volutpat. Proin ornare dolor in sem maximus, non mattis erat scelerisque. Morbi accumsan risus ullamcorper, euismod ex at, semper eros. Quisque blandit eget libero eu posuere. Maecenas non dictum velit. Integer nibh ipsum, consequat a enim ut, euismod pretium erat.

Quisque in facilisis eros. In at urna nec erat volutpat lacinia. Suspendisse varius porta neque, vel rhoncus dui volutpat nec. Proin dignissim nunc sapien, in feugiat lectus consequat eu. Phasellus nec vehicula tortor, non varius nunc. Vestibulum posuere tincidunt lacinia. Nullam a varius tortor, vel venenatis odio. Pellentesque dignissim iaculis lacus, sit amet vehicula nibh cursus eget.

Donec sed elit justo. Ut nibh lorem, finibus sed ultricies nec, vulputate nec diam. Donec ullamcorper nibh ut dui rhoncus, sit amet dignissim magna eleifend. Sed vitae varius ligula. Vivamus eget hendrerit neque. Pellentesque ut tortor id neque consequat tincidunt. Proin condimentum ligula vitae leo scelerisque suscipit.

Proin rutrum condimentum lacus sit amet mollis. Fusce vitae purus sollicitudin, tempor leo in, semper justo. Morbi luctus ex mi, in mattis augue imperdiet sit amet. Suspendisse potenti. Integer vitae est leo. Curabitur tortor est, convallis et purus nec, dapibus semper risus. Donec ac mattis sem. Phasellus tempus, enim nec maximus porttitor, diam nisi cursus ligula, in fringilla nisi urna eget magna. Phasellus vitae lorem in arcu aliquet congue. Pellentesque efficitur porttitor porttitor.</p>
            </div>
        </div>
        </div>
    );
}

export default Modal;
