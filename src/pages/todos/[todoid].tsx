import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Todo() {
    const router = useRouter();
    const todo_id = router.query.id;
    return (
        <>
            <h1>{todo_id}</h1>
            <Link href={`/todos/${todo_id}/comments/3`}></Link>
            <Link href="/todos">Voltar</Link>
        </>
    );
}
