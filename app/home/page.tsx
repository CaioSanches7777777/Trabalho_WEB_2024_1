"use client";

import { useRouter } from "next/navigation";

const Home = async ({}) => {
    const router = useRouter();
    return (
        <main className="h-screen">
            <h1 className="text-2xl sm:text4xl font-black traking-wide text-center pt-6 pb-10 sm:pb-24">Home Page</h1>
            <div className="text-center">
                <button className="mt-3 bg-gray-600 text-white p-2 rounded-lg " type="submit" onClick={() => router.push('/users')}>usuarios</button>
                <button className="mt-3 bg-gray-600 text-white p-2 rounded-lg " type="submit" onClick={() => router.push('/products')}>produtos</button>
                <button className="mt-3 bg-gray-600 text-white p-2 rounded-lg " type="submit" onClick={() => router.push('/categories')}>categorias</button>
            </div>
        </main>
    );
}

export default Home;