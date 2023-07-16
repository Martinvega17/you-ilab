import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/swiper.css';
import dataDigital from '../components/data';
import Modal from 'react-modal';
import '../css/modal.css';

const SwiperCarousel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);
    const swiperRef = useRef(null);

    const handleViewMore = (card) => {
        setExpandedCard(card);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setExpandedCard(null);
    };

    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section className="swiper mySwiper swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
                {dataDigital.map((card) => (
                    <div key={card.id} className="card swiper-slide">
                        <div className="card__image">
                            <img src={card.image} alt="card image" />
                        </div>

                        <div className="card__content" onClick={() => handleViewMore(card)}>
                            <span className="card__title">{card.profession}</span>
                            <span className="card__name">{card.name}</span>
                            <p className="card__text">{card.text}</p>
                            {card.text.length > 100 && (
                                <button className="card__btn">View More</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Expanded Card"
                className="modal"
                overlayClassName="overlay"
            >
                <div className="modal-content">
                    <button className="close-btn" onClick={closeModal}>
                        X
                    </button>
                    {expandedCard && (
                        <>
                            <div className="card__image">
                                <img src={expandedCard.image} alt="card image" />
                            </div>
                            <div className="card__content">
                                <span className="card__title">{expandedCard.profession}</span>
                                <span className="card__name">{expandedCard.name}</span>
                                <p className="card__text">{expandedCard.text}</p>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </section>
    );
};

export default SwiperCarousel;
