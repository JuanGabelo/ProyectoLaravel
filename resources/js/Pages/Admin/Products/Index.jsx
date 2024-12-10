import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ products }) {
    return (
        <AdminLayout title="Administrar Productos">
            <Head title="Administrar Productos" />
            <div className="mb-6">
                <Link
                    href={route('admin.products.create')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Nuevo Producto
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Imagen</th>
                            <th className="py-2 px-4 border-b">Nombre</th>
                            <th className="py-2 px-4 border-b">Precio</th>
                            <th className="py-2 px-4 border-b">Stock</th>
                            <th className="py-2 px-4 border-b">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((product) => (
                            <tr key={product.id}>
                                <td className="py-2 px-4 border-b">
                                    <img
                                        src={product.image ? `/storage/${product.image}` : '/placeholder.png'}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b">{product.name}</td>
                                <td className="py-2 px-4 border-b">${product.price}</td>
                                <td className="py-2 px-4 border-b">{product.stock}</td>
                                <td className="py-2 px-4 border-b">
                                    <Link
                                        href={route('admin.products.edit', product.id)}
                                        className="text-blue-600 hover:text-blue-900 mr-2"
                                    >
                                        Editar
                                    </Link>
                                    <Link
                                        href={route('admin.products.destroy', product.id)}
                                        method="delete"
                                        as="button"
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Eliminar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}

