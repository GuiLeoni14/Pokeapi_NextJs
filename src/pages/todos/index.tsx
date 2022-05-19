import Link from 'next/link';

export type TDataTodos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}[];
export type TTodosProps = {
    data: TDataTodos;
};
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: TDataTodos = await response.json();
    return {
        props: {
            data,
        },
    };
}
export default function Todos({ data }: TTodosProps) {
    return (
        <div>
            {data.map((todo, index) => (
                <Link key={index} href={`/todos/${todo.id}`}>
                    <p key={index}>{todo.title}</p>
                </Link>
            ))}
        </div>
    );
}
