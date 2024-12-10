<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->paginate(12);
        return Inertia::render('Welcome', ['products' => $products]);
    }
}

