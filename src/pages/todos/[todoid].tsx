import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { TDataTodos } from '.';
export type TTodoData = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
export type TTodoProps = {
    todo: TTodoData;
};
export const getStaticProps: GetStaticProps = async (context) => {
    const { todoid } = context.params as { todoid: string };
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoid}`);
    const data = await response.json();
    return {
        props: { todo: data },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const data: TDataTodos = await response.json();
    const paths = data.map((todo) => {
        return {
            params: {
                todoid: String(todo.id),
            },
        };
    });
    return { paths, fallback: false };
};
export default function Todo({ todo }: TTodoProps) {
    return (
        <>
            <h1>{todo.id}</h1>
            <h1>{todo.title}</h1>
            <Link href={`/todos/${todo.id}/comments/3`}>todo</Link>
            <Link href="/todos">Voltar</Link>
        </>
    );
}
