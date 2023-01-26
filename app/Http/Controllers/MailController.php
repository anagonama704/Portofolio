<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function send(Request $request)  //メールの自動送信設定
    {
        //$info = $_POST['content'];
        $info = $request->all();

        Mail::raw($info['content'], function ($data) use ($info) {
            $data
                ->to('namazu26520@gmail.com')
                ->subject($info['username'] . "（" . $info['mails'] . "）" . '様からお問い合わせ');
        });

        // return redirect('http://localhost:8000/portfolio/Contact')->with('送信完了'); //送信完了を表示
    }
}
