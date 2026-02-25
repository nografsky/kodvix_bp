import { NavLink } from 'react-router-dom'
import logo_img from '../assets/img/logo/bp_logo.png'

export default function Header() {
    return (
        <header className="w-full h-auto pt-5">
            <section
                className="container bg-theme-5 px-11 py-4 rounded-brand-32-64 flex justify-between items-center mb-6 liquid-glass">
                <div>
                    <NavLink to="/" end>
                        <img src={logo_img} alt="Balabaev Production" className="h-[44px]"/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/" end className={'btn_modal_request_open bg-theme-2 px-9 py-4 rounded-brand-16-32 text-white font-bold mr-4 hover-affect-1'}>
                        Оставить заявку
                    </NavLink>

                    <NavLink to="/services" className={'bg-theme-1 px-9 py-4 rounded-brand-16-32 text-white font-bold mr-4 hover-affect-1'}>
                        Услуги
                    </NavLink>

                    <NavLink to="/projects" className={'bg-theme-1 px-9 py-4 rounded-brand-16-32 text-white font-bold mr-4 hover-affect-1'}>
                        Наши проекты
                    </NavLink>

                    <NavLink to="/contacts" className={'btn_modal_contacts_open bg-theme-1 px-9 py-4 rounded-brand-16-32 text-white font-bold mr-4 last-of-type:mr-0 hover-affect-1'}>
                        Контакты
                    </NavLink>
                </div>
            </section>
        </header>
    )
}