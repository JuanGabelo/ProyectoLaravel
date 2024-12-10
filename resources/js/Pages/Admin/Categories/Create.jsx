import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.categories.store'));
    };

    return (
        <AdminLayout>
            <Head title="Crear Categoría" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-semibold mb-6">Crear Nueva Categoría</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.name && <div className="text-red-500 text-xs italic">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="slug" className="block text-gray-700 text-sm font-bold mb-2">Slug</label>
                                    <input
                                        type="text"
                                        id="slug"
                                        value={data.slug}
                                        onChange={(e) => setData('slug', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.slug && <div className="text-red-500 text-xs italic">{errors.slug}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    ></textarea>
                                    {errors.description && <div className="text-red-500 text-xs italic">{errors.description}</div>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        disabled={processing}
                                    >
                                        Crear Categoría
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

