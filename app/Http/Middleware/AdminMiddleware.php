<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user() || !$request->user()->isAdmin()) {
            Log::debug('Usuario no autorizado: ', ['user' => $request->user()]);
            abort(403, 'Acceso no autorizado.');
        }

        return $next($request);
    }
}

