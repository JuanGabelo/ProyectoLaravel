import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AdminLayout({ children, title }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <nav className="mb-4">
                                <Link
                                    href={route('admin.products.index')}
                                    className="text-blue-500 hover:text-blue-700 mr-4"
                                >
                                    Productos
                                </Link>
                                <Link
                                    href={route('admin.categories.index')}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Categorías
                                </Link>
                            </nav>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

