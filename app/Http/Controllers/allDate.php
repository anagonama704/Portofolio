<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class allDate extends Controller
{
    public function index(Request $request)
    {
        $ddtt = DB::table('tests')->get();
        return response()->json($ddtt);
    }
    public function work(Request $request)
    {
        $works = DB::table('works')->get();
        return response()->json($works);
    }
    public function info_wk(Request $request)
    {
        $info_wks = DB::table('works')->leftJoin('work_infos', 'works.id', '=', 'work_infos.w_id')->get();
        return response()->json($info_wks);
    }
    public function create(Request $request)
    {
        DB::table('tests')->insert(['name' => $_POST['names']]);

        return redirect('http://localhost:8000/portfolio', 301);
    }
    public function delete(Request $request)
    {
        DB::table('tests')->delete(['id' => $_POST['ids']]);

        return redirect('http://localhost:8000/portfolio', 301);
    }
}
