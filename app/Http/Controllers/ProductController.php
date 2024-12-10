<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->paginate(10);
        return Inertia::render('Admin/Products/Index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
            'auth' => [
                'user' => \Illuminate\Support\Facades\Auth::user(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'processor' => 'required|string|max:255',
            'ram' => 'required|string|max:255',
            'storage' => 'required|string|max:255',
            'graphics' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'image' => 'required|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');
            $validated['image'] = $path;
        }

        Product::create($validated);

        return redirect()->route('admin.products.index')->with('message', 'Producto creado exitosamente.');
    }

    public function edit(Product $product)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Products/Edit', [
            'product' => $product,
            'categories' => $categories,
            'auth' => [
                'user' => \Illuminate\Support\Facades\Auth::user(),
            ],
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products,slug,' . $product->id,
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'processor' => 'required|string|max:255',
            'ram' => 'required|string|max:255',
            'storage' => 'required|string|max:255',
            'graphics' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $path = $request->file('image')->store('products', 'public');
            $validated['image'] = $path;
        } else {
            // Mantener la imagen existente si no se sube una nueva
            $validated['image'] = $product->image;
        }

        $product->update($validated);

        return redirect()->route('admin.products.index')->with('message', 'Producto actualizado exitosamente.');
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();
        return redirect()->route('admin.products.index')->with('message', 'Producto eliminado exitosamente.');
    }

    public function show($slug)
    {
        $product = Product::where('slug', $slug)->with('category')->firstOrFail();
        return Inertia::render('Products/Show', ['product' => $product]);
    }
}

