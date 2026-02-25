export default function Services(){
    return (
        <section className="container mb-[58px]">
            <div className="grid grid-cols-[200px_auto] grid-rows-1 mb-[14px]">
                <div className="font-black text-white text-5xl">
                    <span>Услуги</span>
                </div>
                <div className="relative">
                    <div className="decor-line w-full !bg-theme-3 shadow-1 absolute right-0 bottom-2 left-0"></div>
                </div>
            </div>

            <div className="grid grid-cols-[450px_auto] grid-rows-1 gap-5 mb-5">
                <div className="bg-theme-5 rounded-brand-32-64 grid grid-cols-1 grid-rows-5 overflow-hidden glass-lic">
                    <a href=""
                       className="font-bold text-2xl text-white flex items-center justify-center border-b border-b-theme-1/50 hover-affect-2 services_tab_active"><span>Разработка сайтов</span></a>
                    <a href=""
                       className="font-bold text-2xl text-white flex items-center justify-center border-b border-b-theme-1/50 hover-affect-2"><span>Дизайн макетов</span></a>
                    <a href=""
                       className="font-bold text-2xl text-white flex items-center justify-center border-b border-b-theme-1/50 hover-affect-2"><span>Продвижение, SEO</span></a>
                    <a href=""
                       className="font-bold text-2xl text-white flex items-center justify-center border-b border-b-theme-1/50 hover-affect-2"><span>Сопровождение сайта</span></a>
                    <a href=""
                       className="font-bold text-2xl text-white flex items-center justify-center hover-affect-2"><span>Другие услуги</span></a>
                </div>
                <div className="grid grid-cols-3 grid-rows-[268px_268px] gap-[10px]">
                    <div
                        className="bg-theme-5 rounded-brand-32-64 px-6 py-5 relative overflow-hidden bg-[url('./image/site_vizitka.png')] bg-bottom-right bg-no-repeat services_card_hover glass-lic">
                        <div
                            className="card_title bg-theme-5 flex items-center justify-center py-[6px] rounded-brand-16-32 mb-8">
                            <div className="text-white text-center">
                                <span className="font-bold text-[20px] block leading-6">Сайт-визитка</span>
                                <span className="text-[10px] block">CMS WordPress</span>
                            </div>
                        </div>
                        <div className="font-raleway text-white text-xs">
                            Подходит для физических лиц <br/> начинающих свой бизнес
                        </div>
                        <div className="card_line decor-line w-full absolute right-0 left-6"></div>
                        <br/>
                        <a href="" target="_blank"
                           className="btn_modal_request_open bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">Обсудить
                            проект</a>
                        <div className="font-bold text-[20px] text-white absolute bottom-5 left-6">
                            от 59 900 ₽
                        </div>
                    </div>

                    <div
                        className="bg-theme-5 rounded-brand-32-64 px-6 py-5 relative overflow-hidden bg-[url('./image/im_1.png')] bg-bottom-right bg-no-repeat services_card_hover glass-lic">
                        <div
                            className="card_title bg-theme-5 flex items-center justify-center py-[6px] rounded-brand-16-32 mb-8">
                            <div className="text-white text-center">
                                <span className="font-bold text-[20px] block leading-6">Интернет-магазин</span>
                                <span className="text-[10px] block">CMS OpenCart 3.x</span>
                            </div>
                        </div>
                        <div className="font-raleway text-white text-xs">
                            Многофункциональный магазин <br/> для вашего бизнеса
                        </div>
                        <div className="card_line decor-line w-full absolute right-0 left-6"></div>
                        <br/>
                        <a href="" target="_blank"
                           className="btn_modal_request_open bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">Обсудить
                            проект</a>
                        <div className="font-bold text-[20px] text-white absolute bottom-5 left-6">
                            от 89 900 ₽
                        </div>
                    </div>

                    <div
                        className="bg-theme-5 rounded-brand-32-64 px-6 py-5 relative overflow-hidden bg-[url('./image/corp.png')] bg-bottom-right bg-no-repeat services_card_hover glass-lic">
                        <div
                            className="card_title bg-theme-5 flex items-center justify-center py-[6px] rounded-brand-16-32 mb-8">
                            <div className="text-white text-center">
                                <span className="font-bold text-[20px] block leading-6">Сайт компании</span>
                                <span className="text-[10px] block">CMS WordPress/CMS Balavar</span>
                            </div>
                        </div>
                        <div className="font-raleway text-white text-xs">
                            Для компания любого <br/> уровня бизнеса
                        </div>
                        <div className="card_line decor-line w-full absolute right-0 left-6"></div>
                        <br/>
                        <a href="" target="_blank"
                           className="btn_modal_request_open bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">Обсудить
                            проект</a>
                        <div className="font-bold text-[20px] text-white absolute bottom-5 left-6">
                            от 49 000 ₽
                        </div>
                    </div>

                    <div
                        className="bg-theme-5 rounded-brand-32-64 px-6 py-5 relative overflow-hidden bg-[url('./image/im_2.png')] bg-bottom-right bg-no-repeat services_card_hover glass-lic">
                        <div
                            className="card_title bg-theme-5 flex items-center justify-center py-[6px] rounded-brand-16-32 mb-8">
                            <div className="text-white text-center">
                                <span className="font-bold text-[20px] block leading-6">Интернет-магазин</span>
                                <span className="text-[10px] block">CMS 1С-Битрикс</span>
                            </div>
                        </div>
                        <div className="font-raleway text-white text-xs">
                            Многофункциональный магазин <br/> для вашего бизнеса
                        </div>
                        <div className="card_line decor-line w-full absolute right-0 left-6"></div>
                        <br/>
                        <a href="" target="_blank"
                           className="btn_modal_request_open bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">Обсудить
                            проект</a>
                        <div className="font-bold text-[20px] text-white absolute bottom-5 left-6">
                            от 99 999 ₽
                        </div>
                    </div>

                    <div
                        className="bg-theme-5 rounded-brand-32-64 px-6 py-5 relative overflow-hidden bg-[url('./image/site_vizitka_balavar.png')] bg-bottom-right bg-no-repeat services_card_hover glass-lic">
                        <div
                            className="card_title bg-theme-5 flex items-center justify-center py-[6px] rounded-brand-16-32 mb-8">
                            <div className="text-white text-center">
                                <span className="font-bold text-[20px] block leading-6">Сайт-визитка</span>
                                <span className="text-[10px] block">CMS Balavar</span>
                            </div>
                        </div>
                        <div className="font-raleway text-white text-xs">
                            Подходит для физических лиц <br/> начинающих свой бизнес
                        </div>
                        <div className="card_line decor-line w-full absolute right-0 left-6"></div>
                        <br/>
                        <a href="" target="_blank"
                           className="btn_modal_request_open bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">Обсудить
                            проект</a>
                        <div className="font-bold text-[20px] text-white absolute bottom-5 left-6">
                            от 39 999 ₽
                        </div>
                    </div>

                    <div
                        className="bg-theme-5 rounded-brand-32-64 px-6 py-5 relative overflow-hidden bg-[url('./image/edu.png')] bg-bottom-right bg-no-repeat services_card_hover glass-lic">
                        <div
                            className="card_title bg-theme-5 flex items-center justify-center py-[6px] rounded-brand-16-32 mb-8">
                            <div className="text-white text-center">
                                <span className="font-bold text-[20px] block leading-6">Образовательная</span>
                                <span className="text-[10px] block">платформа</span>
                            </div>
                        </div>
                        <div className="font-raleway text-white text-xs">
                            Подойдет для репетиторов <br/> или учебных организаций
                        </div>
                        <div className="card_line decor-line w-full absolute right-0 left-6"></div>
                        <br/>
                        <a href="" target="_blank"
                           className="btn_modal_request_open bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">Обсудить
                            проект</a>
                        <div className="font-bold text-[20px] text-white absolute bottom-5 left-6">
                            от 59 999 ₽
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-[878px_auto] grid-rows-[100px] gap-3">
                <div
                    className="bg-theme-5 rounded-brand-32-64 px-16 py-6 bg-[url('./image/element_6.png')] bg-right bg-no-repeat glass-lic">
                    <div className="font-bold text-xl text-white">Если не нашли подходящую услугу? Не растраивайтесь!
                    </div>
                    <div className="font-bold text-xl text-white">
                        <span className="inline-block align-middle mr-1">Свяжитесь с нами чтобы обсудить проект</span>
                        <div className="decor-line w-40 !inline-block !align-middle translate-y-1/2"></div>
                    </div>
                </div>
                <a href=""
                   className="btn_modal_request_open bg-theme-1 rounded-brand-32-64 bg-[url('./assets/img/element_7.png')] hover:bg-[200%_50%] bg-right bg-no-repeat flex items-center justify-center hover-affect-1 glass-lic">
                    <div>
                        <div className="font-bold text-xl text-white text-center">Обсудить проект</div>
                        <div className="font-raleway text-xs text-white text-center">Оставьте заявку сейчас и получите
                            скидку 10% на первый заказ
                        </div>
                    </div>
                </a>
            </div>

        </section>
    )
}