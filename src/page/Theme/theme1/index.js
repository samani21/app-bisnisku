import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import styled from "styled-components";
import Promo from "./components/Promo";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Transaksi from "./components/Transaksi";
import Payment from "./components/Payment";
import ModalProduct from "./components/ModalProduct";

// Styling
const Container = styled.div`
    font-family: "Poppins", sans-serif;
    background-color: #f8f8f8;
    color: ${(props) => props?.color};
    margin: 0;
    padding: 0;
    height: 95vh;
    overflow-y: auto;
    scroll-behavior: smooth;
`;

const Section = styled.div`
    min-height: 60vh;
`;

// Theme color data
const dataThme = {
    color: "#2C3E50",
    color_menu_active: "#51769b",
    color_text: "#2C3E50",
    icon_color: "#BDC3C7",
    icon_color_active: "#ffffff",
};

// Debounce helper
const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

const Theme1 = () => {
    const [menuActive, setMenuActive] = useState(1);
    const containerRef = useRef(null);
    const isAutoScrolling = useRef(false);
    const [payment, setPayment] = useState(null);
    const [openPayment, setOpenPayment] = useState(false);
    const [modalProduct, setModalProduct] = useState(false);

    // Handle Payment
    const handelPayment = (item) => {
        setOpenPayment(true);
        setPayment(item);
    };

    // Scroll Logic
    const handleScrollHandler = useCallback(() => {
        if (!containerRef.current || isAutoScrolling.current) return;

        const scrollPosition = containerRef.current.scrollTop;
        const sections = [
            { id: "promo-section", index: 1 },
            { id: "categories", index: 2 },
            { id: "product", index: 3 },
        ];

        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50) {
                    setMenuActive(section.index);
                    break;
                }
            }
        }
    }, []);

    // Debounced Scroll
    const debouncedHandleScroll = useMemo(() => debounce(handleScrollHandler, 100), [handleScrollHandler]);

    // Scroll Event Binding
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", debouncedHandleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", debouncedHandleScroll);
            }
        };
    }, [debouncedHandleScroll]);

    // Auto Scroll when menuActive changes
    useEffect(() => {
        if (!containerRef.current) return;

        const sectionId = ["promo-section", "categories", "product"][menuActive - 1];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                isAutoScrolling.current = true;
                containerRef.current.scrollTo({
                    top: section.offsetTop,
                    behavior: "smooth",
                });
                setTimeout(() => {
                    isAutoScrolling.current = false;
                }, 500);
            }
        }
    }, [menuActive]);

    return (
        <>
            {openPayment ? (
                <Payment payment={payment} setOpenPayment={setOpenPayment} />
            ) : (
                <>
                    <Container ref={containerRef} color={dataThme?.color}>
                        {menuActive === 4 ? (
                            <Transaksi dataThme={dataThme} handelPayment={handelPayment} />
                        ) : (
                            <>
                                <Header dataThme={dataThme} />
                                <Section id="promo-section">
                                    <Promo dataThme={dataThme} />
                                </Section>
                                <Section id="categories">
                                    <Categories dataThme={dataThme} />
                                </Section>
                                <Section id="product">
                                    <Product setModalProduct={setModalProduct} />
                                </Section>
                                {modalProduct && <ModalProduct />}
                            </>
                        )}
                    </Container>
                    <Navbar
                        dataThme={dataThme}
                        menuActive={menuActive}
                        setMenuActive={setMenuActive}
                        setModalProduct={setModalProduct}
                    />
                </>
            )}
        </>
    );
};

export default Theme1;
