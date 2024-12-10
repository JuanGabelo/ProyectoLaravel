import React from 'react';
import { useForm } from '@inertiajs/react';
import { X } from 'lucide-react';

export default function OrderForm({ product, quantity, onClose }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        last_name: '',
        shipping_address: '',
        phone: '',
        email: '',
        product_id: product.id,
        quantity: quantity
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('orders.store'), {
            preserveState: false,
        });
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Completa tu orden</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                        {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellidos</label>
                        <input
                            type="text"
                            id="last_name"
                            value={data.last_name}
                            onChange={e => setData('last_name', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                        {errors.last_name && <div className="text-red-500 text-xs mt-1">{errors.last_name}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="shipping_address" className="block text-sm font-medium text-gray-700">Direccion de entrega</label>
                        <textarea
                            id="shipping_address"
                            value={data.shipping_address}
                            onChange={e => setData('shipping_address', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        ></textarea>
                        {errors.shipping_address && <div className="text-red-500 text-xs mt-1">{errors.shipping_address}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefono</label>
                        <input
                            type="tel"
                            id="phone"
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                        {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electronico</label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                        {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={processing}
                        >
                            {processing ? 'Procesando...' : 'Realizar Orden'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

