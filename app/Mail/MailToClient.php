<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailToClient extends Mailable
{
  use Queueable, SerializesModels;


  protected $data;
  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct($data)
  {
      $this->name = $data->name;
      $this->email = $data->email;
      $this->telephone = $data->telephone;
      $this->location = $data->location;
      $this->msg = $data->message;


  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
      return $this->view('mails.adminMail')
        ->with([
          'name' => $this->name,
          'email' => $this->email,
          'telephone' => $this->telephone,
          'msg' => $this->msg,
          'location' => $this->location,

        ])
        ->subject('Ми отримали ваш лист');

  }
}
