import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AppLayout from '@/Layouts/AppLayout';
import { ChevronRight, Star } from 'lucide-react';
import '../../css/app.css'

export default function Welcome({ products }) {
    return (
        <AppLayout>
            <Head title="Bienvenido" />
            <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl font-bold text-gray-900 mb-8 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Descubre Nuestra Colección de Computadoras
                    </motion.h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.data.map((product) => (
                            <motion.div
                                key={product.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                                whileHover={{ scale: 1.03 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative h-64">
                                    <img
                                        src={product.image ? `/storage/${product.image}` : '/placeholder.png'}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                                        ${product.price}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <Star className="w-5 h-5 text-gray-300 fill-current" />
                                        </div>
                                        <Link
                                            href={route('products.show', product.slug)}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Ver detalles
                                            <ChevronRight className="ml-2 -mr-1 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

