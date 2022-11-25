<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class allDate extends Controller
{
    public function index(Request $request)
    {
        $ddtt = DB::table('tests')->get();
        return view('welcome');
        return response()->json($ddtt);
    }
}
