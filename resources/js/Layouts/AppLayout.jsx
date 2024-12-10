import React from 'react';
import { Link } from '@inertiajs/react';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href={route('home')}>
                                    <img className="block h-9 w-auto" src="/storage/ecommerce-logo.png" alt="Ecommerce Gabelo" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link href={route('home')} className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    Inicio
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link href={route('login')} className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    Iniciar sesión
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2024 Ecommerce Gabelo. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}

