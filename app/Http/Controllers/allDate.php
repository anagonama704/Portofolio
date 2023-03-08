<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class allDate extends Controller
{
    public function index(Request $request)
    {
        $ddtt = DB::table('works')->get();
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
    public function wk_insert(Request $request)
    {
        $info_wks = $request->all();
        if (File::exists(storage_path('public/image/' . $info_wks['paths']))) {
        } else {
            $request->file('img')->storeAs('public/image/', $info_wks['paths']);
        }


        DB::table('works')->insert([
            'name' => $info_wks['names'],
            'path' => $info_wks['paths'],
            'link' => $info_wks['link']
        ]);
        DB::table('work_infos')->insert([
            'infos' => $info_wks['infos'],
            'award' => $info_wks['awards'],
            'creation_time' => $info_wks['periods']
        ]);
    }
    public function wk_update(Request $request)
    {
        $info_wks = $request->all();
        if (File::exists(storage_path('public/image/' . $info_wks['paths']))) {
        } else {
            $request->file('img')->storeAs('public/image/', $info_wks['paths']);
        }


        DB::table('works')->where("id", $info_wks['nums'])->update([
            'name' => $info_wks['names'],
            'path' => $info_wks['paths'],
            'link' => $info_wks['link']
        ]);
        DB::table('work_infos')->where("w_id", $info_wks['nums'])->update([
            'infos' => $info_wks['infos'],
            'award' => $info_wks['awards'],
            'creation_time' => $info_wks['periods']
        ]);
    }
    public function wk_delete(Request $request)
    {
        $dels = $request->all();
        DB::table('works')->where("id", $dels['ids'])->delete();
        DB::table('work_infos')->where("w_id", $dels['ids'])->delete();
    }
}
