import { NavLink } from 'react-router-dom'

export default function Banner(){
    return (
        <section
            className="container bg-theme-5 h-[500px] rounded-brand-32-64 grid grid-cols-[auto_752px] grid-rows-1 overflow-hidden mb-[58px] liquid-glass">
            <div className="px-16 py-12">
                <div className="text-[52px] font-bold text-white leading-[55px]">
                    РАЗРАБАТЫВАЕМ <br/>
                    САЙТЫ ДЛЯ <span className="text-theme-3">ВАС</span> <br/>
                    ИЛИ <span className="text-theme-1">ВАШЕГО БИЗНЕСА</span>
                </div>
                <div className="flex justify-between items-center max-w-[620px] mb-8">
                    <div className="decor-line w-[370px]"></div>
                    <div className="font-bold text-[32px] text-white">“ПОД КЛЮЧ”</div>
                </div>
                <div className="decor-line w-[620px] mb-8"></div>
                <div className="font-bold text-white mb-14">
                    Оставьте заявку сейчас и получите скидку 10% на первый заказ
                </div>
                <div>
                    <a href=""
                       className="btn_modal_request_open bg-theme-2 px-9 py-4 rounded-brand-16-32 text-white font-bold mr-4 hover-affect-1">Оставить заявку</a>
                    <NavLink to="/contacts" className={'btn_modal_contacts_open bg-theme-5 px-9 py-4 rounded-brand-16-32 text-white font-bold mr-4 last-of-type:mr-0 hover-affect-1'}>
                        Контакты
                    </NavLink>
                </div>
            </div>
            <div className="bg-[url('./assets/img/banners/banner_1.png')] bg-cover bg-center bg-no-repeat rounded-tl-5xl rounded-bl-4xl overflow-hidden"></div>
        </section>
    )
}