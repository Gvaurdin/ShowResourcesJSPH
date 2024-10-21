import { useState } from "react";
import FetchUsers from "@/components/JSPH/UsersTable";
import Link from "next/link";

export default function UsersPage() {
    const [minId, setMinId] = useState(1);
    const [maxId, setMaxId] = useState(10);

    return <>
        <div>
            <Link href="/" passHref className="custom-link">Назад</Link>
            <h1>Таблица пользователей</h1>
            <div>
                <label>
                    Минимальный Id:
                    <input
                        type="number"
                        value={minId}
                        onChange={(e) => setMinId(Number(e.target.value))}
                        min="1"
                        max="10"
                    />
                </label>
                <label>
                    Максимальный Id:
                    <input
                        type="number"
                        value={maxId}
                        onChange={(e) => setMaxId(Number(e.target.value))}
                        min="1"
                        max="10"
                    />
                </label>
            </div>
            <FetchUsers minId={minId} maxId={maxId} />
        </div>
    </>
}