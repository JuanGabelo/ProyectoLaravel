import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Star, Plus, Minus } from 'lucide-react';
import OrderForm from '@/Components/OrderForm';

export default function Show({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [showOrderForm, setShowOrderForm] = useState(false);

    if (!product) {
        return (
            <AppLayout>
                <Head title="Producto no encontrado" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <Head title={product.name} />
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white shadow-xl rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img
                                    className="h-96 w-full object-cover md:w-96"
                                    src={product.image ? `/storage/${product.image}` : '/placeholder.png'}
                                    alt={product.name}
                                />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    {product.category ? product.category.name : 'Sin categoría'}
                                </div>
                                <h1 className="mt-1 text-4xl font-bold text-gray-900 leading-tight">
                                    {product.name}
                                </h1>
                                <p className="mt-2 text-gray-600">{product.description}</p>

                                <div className="mt-4">
                                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                    <span className="ml-2 text-sm text-gray-600">Impuestos incluidos</span>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-sm font-medium text-gray-900">Especificaciones</h2>
                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Marca:</span> {product.brand}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Modelo:</span> {product.model}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Procesador:</span> {product.processor}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">RAM:</span> {product.ram}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Almacenamiento:</span> {product.storage}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Gráficos:</span> {product.graphics}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 flex space-x-4">
                                    <button
                                        className="flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setShowOrderForm(true)}
                                    >
                                        Comprar Ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {showOrderForm && (
                <OrderForm
                    product={product}
                    quantity={quantity}
                    onClose={() => setShowOrderForm(false)}
                />
            )}
        </AppLayout>
    );
}

