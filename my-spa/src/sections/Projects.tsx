import img_click from '../assets/img/click.png'
import img_prj_sancombo from '../assets/img/element_2.png'
import img_prj_volt from '../assets/img/element_3.png'
import img_prj_jarinova from '../assets/img/element_4.png'
import img_prj_litvinov from '../assets/img/element_5.png'
import img_cms_opencart from '../assets/img/cms/opencart.png'
import img_cms_1cbitrix from '../assets/img/cms/1c-bitrix.png'
import img_cms_bp from '../assets/img/cms/cms_balabaev_production.png'

// тип под проекты
type Project = {
    id: number;
    titleLines: string[];     // строки до названия
    name: string;             // название проекта (SanCombo)
    nameColor?: string;       // цвет названия
    thumb: string;            // картинка-декор для фона карточки
    thumbPosClass?: string;   // например "bg-bottom-right"
    cmsThumb: string;         // иконка CMS
    cmsAlt: string;
    link: string;
};

const projects: Project[] = [
    {
        id: 1,
        titleLines: ["Интернет-магазин", "сантехники"],
        name: "SanCombo",
        nameColor: "#F00",
        thumb: img_prj_sancombo,
        thumbPosClass: "bg-bottom-right",
        cmsThumb: img_cms_opencart,
        cmsAlt: "CMS OpenCart 3",
        link: "https://san-combo.ru/",
    },
    {
        id: 2,
        titleLines: ["Интернет-магазин", "сантехники"],
        name: "Вольт",
        nameColor: "#D10000",
        thumb: img_prj_volt,
        thumbPosClass: "bg-top-right",
        cmsThumb: img_cms_1cbitrix,
        cmsAlt: "CMS 1-C Битрикс",
        link: "https://вольт24.рф/",
    },
    {
        id: 3,
        titleLines: ["Образовательный", "проект"],
        name: "Ольги Жариновой",
        nameColor: "#EB9B62",
        thumb: img_prj_jarinova,
        thumbPosClass: "bg-top-right",
        cmsThumb: img_cms_bp,
        cmsAlt: "CMS Balabaev Production (сейчас KODVIX CMS)",
        link: "https://project-zharinova.com/",
    },
    {
        id: 3,
        titleLines: ["Личный сайт", "консультанта"],
        name: "Литвинова А. В.",
        nameColor: "#EF804D",
        thumb: img_prj_litvinov,
        thumbPosClass: "bg-bottom-right",
        cmsThumb: img_cms_bp,
        cmsAlt: "CMS Balabaev Production (сейчас KODVIX CMS)",
        link: "https://al-perscons.ru/",
    },
];

export default function Projects() {
    return (
        <section className="container mb-[58px]">
            <div className="grid grid-cols-[400px_auto] grid-rows-1 mb-[14px]">
                <div className="font-black text-white text-5xl">
                    <span>Наши проекты</span>
                </div>
                <div className="relative">
                    <div className="decor-line w-full !bg-theme-3 shadow-1 absolute right-0 bottom-2 left-0"></div>
                </div>
            </div>

            <div className="grid grid-cols-[450px_520px_520px] grid-rows-[317px_317px] gap-5 mb-[22px] group ">
                <div
                    className="row-span-2 bg-theme-5 rounded-brand-32-64 bg-[url('./assets/img/element_1.png')] bg-center bg-no-repeat overflow-hidden bg-[100%_auto] group-hover:bg-[105%_auto] liquid-glass">
                    <div
                        className="w-full h-full bg-[url('./assets/img/robot_cat_1.png')] bg-bottom-left bg-no-repeat relative">
                        <div
                            className="bg-theme-1 rounded-brand-32-64 w-[302px] h-[492px] absolute top-0 right-0 px-8 py-[50px]">
                            <div className="font-bold text-xl text-white mb-12">
                                Все наши сайты <br/> имеют качественную современную верстку
                            </div>
                            <div className="font-bold text-xl text-white mb-12">
                                Верстка продвинуто <br/> СЕО-оптимизирована
                            </div>
                            <div className="font-bold text-xl text-white mb-12">
                                Подходит для любых <br/> систем управления сайтом (CMS)
                            </div>

                            <a href=""
                               className="btn_modal_request_open rounded-brand-16-32 bg-theme-2 block py-3 text-center font-bold text-white text-md hover-affect-1">Заказать
                                разработку</a>
                        </div>
                    </div>
                </div>

                {projects.map((p) => (
                    <div
                        key={p.id}
                        className={[
                            "bg-theme-5 rounded-4xl px-[34px] py-[37px] bg-no-repeat liquid-glass",
                            p.thumbPosClass ?? "bg-bottom-right",
                        ].join(" ")}
                        style={{
                            backgroundImage: `url(${p.thumb})`,
                        }}>
                        <div className="font-bold text-2xl text-white leading-7 mb-[60px]">
                            {p.titleLines.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                            <span style={{ color: p.nameColor ?? "#fff" }}>{p.name}</span>
                        </div>

                        <div className="font-bold text-white">CMS</div>
                        <img src={p.cmsThumb} alt={p.cmsAlt} className="h-[29px] mb-6" />

                        <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-theme-5 px-5 py-2 rounded-brand-16-32 font-bold text-sm text-white hover-affect-1">
                            Перейти на сайт
                        </a>
                    </div>
                ))}
            </div>

            <a href=""
               className="btn_modal_project_open bg-theme-5 block py-4 font-bold text-white text-base text-center rounded-brand-32-64 hover-affect-1 relative liquid-glass">
                Запросить все проекты
                <img src={img_click} alt="CLICK" className="absolute top-1/2 -translate-y-1/2 right-6"/>
            </a>
        </section>
    )
}