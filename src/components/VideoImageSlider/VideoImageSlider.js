import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import './VideoImageSlider.css';

const VideoImageSlider = forwardRef(({ initialItem }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(initialItem);

    useImperativeHandle(ref, () => ({
        openModal(item) {
            setCurrentItem(item);
            setIsOpen(true);
        },
    }));

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextItem = () => {
        setCurrentItem((prevItem) => {
            const currentIndex = initialItem.findIndex((item) => item === prevItem);
            return initialItem[(currentIndex + 1) % initialItem.length];
        });
    };

    const prevItem = () => {
        setCurrentItem((prevItem) => {
            const currentIndex = initialItem.findIndex((item) => item === prevItem);
            return initialItem[(currentIndex - 1 + initialItem.length) % initialItem.length];
        });
    };

    return (
        <div>
            {currentItem.type === 'video' && (
                <ModalVideo channel="youtube" isOpen={isOpen} videoId={currentItem.id} onClose={closeModal} />
            )}

            {currentItem.type === 'image' && isOpen && (
                <div className="modal-video modal-video--open">
                    <div className="modal-video-body">
                        <div className="modal-video-inner">
                            <div className="modal-video-movie-wrap">
                                <img class="modal-video-movie-wrap-img" src={currentItem.src} alt={currentItem.title} />
                                <button className="modal-video-close-btn" onClick={closeModal}></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="modal-controls">
                    <div class="button left">
                        <img onClick={prevItem} alt="" class="icon" src={require('../../assets/images/btn_left.png')} />
                    </div>
                    <div class="button right">
                        <img
                            onClick={nextItem}
                            alt=""
                            class="icon"
                            src={require('../../assets/images/btn_right.png')}
                        />
                    </div>
                </div>
            )}
        </div>
    );
});

export default VideoImageSlider;
