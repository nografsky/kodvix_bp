export default function Contacts() {
    return (
        <section className="space-y-4">
            <h1 className="text-3xl font-bold">Контакты</h1>

            <div className="rounded-xl border p-4 space-y-2">
                <div><span className="font-semibold">Email:</span> hello@example.com</div>
                <div><span className="font-semibold">Телефон:</span> +49 000 000 00</div>
                <div><span className="font-semibold">Адрес:</span> Frankfurt am Main</div>
            </div>
        </section>
    )
}