import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ categories }) {
    return (
        <AdminLayout>
            <Head title="Categorías" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-semibold">Categorías</h1>
                                <Link href={route('admin.categories.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Nueva Categoría
                                </Link>
                            </div>
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{category.name}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{category.slug}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <Link href={route('admin.categories.edit', category.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</Link>
                                                <Link href={route('admin.categories.destroy', category.id)} method="delete" as="button" className="text-red-600 hover:text-red-900">Eliminar</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

