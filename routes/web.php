<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;

// Ruta principal
Route::get('/', [HomeController::class, 'index'])->name('home');

// Rutas de autenticación
Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('login', [LoginController::class, 'login']);
});

Route::post('logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');
Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');


// Rutas protegidas
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Redirigir /dashboard a la página de productos
    Route::get('/dashboard', function () {
        return redirect()->route('admin.products.index');
    })->middleware(['auth'])->name('dashboard');
});

// Rutas de administrador
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('products', ProductController::class);
    Route::resource('categories', CategoryController::class);
});

// Rutas públicas de productos
Route::get('/products/{slug}', [ProductController::class, 'show'])->name('products.show');

