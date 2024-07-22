<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request)
        ->header('Access-Control-Allow-Origin', "*")
        ->header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS")
        ->header('Access-Control-Allow-Headers', "Accept, Content-Type, Authorization")
        ->header('Access-Control-Allow-Credentials', "true");


    }
}
