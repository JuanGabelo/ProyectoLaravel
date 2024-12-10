<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Categories/Index', ['categories' => $categories]);
    }

    public function create()
    {
        return Inertia::render('Admin/Categories/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories',
            'description' => 'nullable|string',
        ]);

        Category::create($validated);

        return redirect()->route('admin.categories.index')->with('message', 'Categoría creada exitosamente.');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Admin/Categories/Edit', ['category' => $category]);
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories,slug,' . $category->id,
            'description' => 'nullable|string',
        ]);

        $category->update($validated);

        return redirect()->route('admin.categories.index')->with('message', 'Categoría actualizada exitosamente.');
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('admin.categories.index')->with('message', 'Categoría eliminada exitosamente.');
    }
}

