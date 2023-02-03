<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SlackAppController extends Controller
{
    public function keys(Request $request)
    {
        $slack_key = config('slack.keys');
        return json_encode($slack_key);
    }
}
