import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation({ order, product }) {
    return (
        <AppLayout>
            <Head title="Order Confirmation" />
            <div className="py-12 bg-gray-100">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6 sm:p-8">
                            <div className="text-center">
                                <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                                <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Gracias por tu compra!</h2>
                                <p className="mt-2 text-lg text-gray-600">Tu orden se ha asignado correctamente en nuestra base de datos</p>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900">Detalles de orden</h3>
                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">numero de orden</dt>
                                        <dd className="text-gray-900">#{order.id}</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Producto</dt>
                                        <dd className="text-gray-900">{product.name}</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Cantidad</dt>
                                        <dd className="text-gray-900">{order.quantity}</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Total</dt>
                                        <dd className="text-gray-900">${(product.price * order.quantity).toFixed(2)}</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900">Informacion de Compra</h3>
                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Nombre</dt>
                                        <dd className="text-gray-900">{order.name} {order.last_name}</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Direccion</dt>
                                        <dd className="text-gray-900">{order.shipping_address}</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Telefono</dt>
                                        <dd className="text-gray-900">{order.phone}</dd>
                                    </div>
                                    <div className="py-3 flex justify-between text-sm font-medium">
                                        <dt className="text-gray-500">Correo electronico</dt>
                                        <dd className="text-gray-900">{order.email}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

