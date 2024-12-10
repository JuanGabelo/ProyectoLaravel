<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = Order::create([
            'name' => $request->name,
            'last_name' => $request->last_name,
            'shipping_address' => $request->shipping_address,
            'phone' => $request->phone,
            'email' => $request->email,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ]);

        $product = Product::find($request->product_id);

        return Inertia::render('OrderConfirmation', [
            'order' => $order,
            'product' => $product
        ]);
    }
}

