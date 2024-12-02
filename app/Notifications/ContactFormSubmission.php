<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactFormSubmission extends Notification
{
    use Queueable;

    protected $contactData;

    public function __construct($contactData)
    {
        $this->contactData = $contactData;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('New Contact Form Submission')
            ->greeting('Hello!')
            ->line('You have received a new contact form submission.')
            ->line('Name: ' . $this->contactData['name'])
            ->line('Email: ' . $this->contactData['email'])
            ->line('Subject: ' . $this->contactData['subject'])
            ->line('Message:')
            ->line($this->contactData['message']);
    }
}
