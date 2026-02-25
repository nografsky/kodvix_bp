import logo_img from '../assets/img/logo/bp_logo.png'

export default function Header() {
    return (
        <footer className="w-full h-auto mb-5">
            <section className="container grid grid-cols-3 grid-rows-[300px] gap-5 mb-5">
                <div className="bg-theme-5 rounded-brand-32-64 px-[51px] py-[38px] relative glass-lic">
                    <a href="" className="inline-block align-middle mb-6">
                        <img src={logo_img} alt="Balabaev Production"
                             className="h-[38px] inline-block align-middle"/>
                    </a>
                    <div className="decor-line bg-theme-5 w-[115px] absolute top-[50px] right-[51px]"></div>
                    <div className="grid grid-cols-2 grid-rows-[72px_72px] gap-2.5">
                        <a href=""
                           className="bg-theme-5 rounded-brand-16-32 flex items-center justify-center hover-affect-1">
                            <span className="font-bold text-white text-base text-center">Услуги</span>
                        </a>
                        <a href=""
                           className="bg-theme-5 rounded-brand-16-32 flex items-center justify-center hover-affect-1">
                            <span className="font-bold text-white text-base text-center">Наши проекты</span>
                        </a>
                        <a href=""
                           className="bg-theme-5 rounded-brand-16-32 flex items-center justify-center hover-affect-1">
                            <span className="font-bold text-white text-base text-center">Преимущества</span>
                        </a>
                        <a href=""
                           className="btn_modal_contacts_open bg-theme-5 rounded-brand-16-32 flex items-center justify-center hover-affect-1">
                            <span className="font-bold text-white text-base text-center">Контакты</span>
                        </a>
                    </div>
                </div>

                <div className="bg-theme-5 rounded-brand-64-32 px-[51px] py-[38px] relative glass-lic">
                    <div className="mb-6 font-raleway uppercase text-theme-4 text-base font-black text-right">
                        Контакнты
                    </div>
                    <div className="decor-line bg-theme-5 w-[235px] absolute top-[50px] left-[51px]"></div>
                    <div className="grid grid-cols-2 grid-rows-[72px_72px] gap-2.5">
                        <div className="bg-theme-5 rounded-brand-16-32 flex items-center justify-center">
                        <span className="font-bold text-white text-base text-center">
                            <a href="tel:+79296761105">+7 (929) 676-11-05</a>
                        </span>
                        </div>
                        <div className="bg-theme-5 rounded-brand-16-32 flex items-center justify-center">
                        <span className="font-bold text-white text-base text-center">
                            <a href="tel:+7965446639">+7 (965) 446-06-39</a>
                        </span>
                        </div>
                        <div className="col-span-2 bg-theme-5 rounded-brand-16-32 flex items-center justify-center">
                        <span className="font-bold text-white text-base text-center">
                            <a href="mailto:info@balabaev-production.ru">info@balabaev-production.ru</a>
                        </span>
                        </div>
                    </div>
                </div>

                <div className="bg-theme-5 rounded-brand-64-32 px-[51px] py-[38px] relative glass-lic">
                    <div className="mb-6 font-raleway uppercase text-theme-4 text-base font-black text-right">
                        Дополнительно
                    </div>
                    <div className="decor-line bg-theme-5 w-[115px] absolute top-[50px] left-[51px]"></div>
                    <div className="grid grid-cols-1 grid-rows-[72px_72px] gap-2.5">
                        <a href=""
                           className="bg-theme-5 rounded-brand-16-32 flex items-center justify-center hover-affect-1">
                                <span
                                    className="font-bold text-white text-base text-center">Политика конфиденциальности</span>
                        </a>
                        <div
                            className="rounded-brand-16-32 flex items-center justify-center border border-solid border-theme-1">
                            <div>
                                <div className="font-bold text-white text-base text-center">Пн-Пт с 10:00-22:00
                                </div>
                                <div className="font-raleway text-xs text-white">суббота и восресенье - выходной
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="container bg-theme-5 rounded-brand-32-64 h-[50px] flex items-center justify-between px-12 glass-lic">
                <div className="font-rubik text-white/50 text-sm">© 2019-2024 Balabaev Production</div>
                <div className="font-rubik text-white/50 text-sm">ИП Балабаев Д. И.</div>
            </section>
        </footer>
    )
}