<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailToAdmin;
use App\Mail\MailToClient;


class MailController extends Controller
{
    public function sendForm(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $telephone = $request->telephone;
        $location = $request->location;
        $message = $request->message;
        $data = (object)[
            'name' => $name,
            'email' => $email,
            'telephone' => $telephone,
            'location' => $location,
            'message' => $message
        ];

        Mail::to('olexandr.varchuk@gmail.com')->send(new MailToAdmin($data));
        Mail::to($email)->send(new MailToClient($data));
    }
}
