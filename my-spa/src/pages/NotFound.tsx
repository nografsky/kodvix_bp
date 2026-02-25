import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="space-y-4">
            <h1 className="text-3xl font-bold">404</h1>
            <p className="opacity-80">Страница не найдена.</p>
            <Link className="underline" to="/">Вернуться на главную</Link>
        </section>
    )
}