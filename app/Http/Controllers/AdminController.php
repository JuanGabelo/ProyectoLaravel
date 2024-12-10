<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard', [
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }
}

