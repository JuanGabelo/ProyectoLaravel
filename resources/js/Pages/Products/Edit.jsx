import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ product, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        stock: product.stock,
        brand: product.brand,
        model: product.model,
        processor: product.processor,
        ram: product.ram,
        storage: product.storage,
        graphics: product.graphics,
        category_id: product.category_id,
        image: null,
        _method: 'PUT',
    });

    const [preview, setPreview] = useState(product.image);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('products.update', product.id));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Editar Producto" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-semibold mb-6">Editar Producto</h1>
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
                                <div className="mb-4">
                                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                                    <input
                                        type="number"
                                        id="price"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.price && <div className="text-red-500 text-xs italic">{errors.price}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                                    <input
                                        type="number"
                                        id="stock"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.stock && <div className="text-red-500 text-xs italic">{errors.stock}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">Marca</label>
                                    <input
                                        type="text"
                                        id="brand"
                                        value={data.brand}
                                        onChange={(e) => setData('brand', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.brand && <div className="text-red-500 text-xs italic">{errors.brand}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="model" className="block text-gray-700 text-sm font-bold mb-2">Modelo</label>
                                    <input
                                        type="text"
                                        id="model"
                                        value={data.model}
                                        onChange={(e) => setData('model', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.model && <div className="text-red-500 text-xs italic">{errors.model}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="processor" className="block text-gray-700 text-sm font-bold mb-2">Procesador</label>
                                    <input
                                        type="text"
                                        id="processor"
                                        value={data.processor}
                                        onChange={(e) => setData('processor', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.processor && <div className="text-red-500 text-xs italic">{errors.processor}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="ram" className="block text-gray-700 text-sm font-bold mb-2">RAM</label>
                                    <input
                                        type="text"
                                        id="ram"
                                        value={data.ram}
                                        onChange={(e) => setData('ram', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.ram && <div className="text-red-500 text-xs italic">{errors.ram}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="storage" className="block text-gray-700 text-sm font-bold mb-2">Almacenamiento</label>
                                    <input
                                        type="text"
                                        id="storage"
                                        value={data.storage}
                                        onChange={(e) => setData('storage', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.storage && <div className="text-red-500 text-xs italic">{errors.storage}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="graphics" className="block text-gray-700 text-sm font-bold mb-2">Gráficos</label>
                                    <input
                                        type="text"
                                        id="graphics"
                                        value={data.graphics}
                                        onChange={(e) => setData('graphics', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.graphics && <div className="text-red-500 text-xs italic">{errors.graphics}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category_id" className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
                                    <select
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="">Seleccionar categoría</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                    {errors.category_id && <div className="text-red-500 text-xs italic">{errors.category_id}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                                    <input
                                        type="file"
                                        id="image"
                                        onChange={handleImageChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.image && <div className="text-red-500 text-xs italic">{errors.image}</div>}
                                    {preview && (
                                        <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover" />
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        disabled={processing}
                                    >
                                        Actualizar Producto
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
