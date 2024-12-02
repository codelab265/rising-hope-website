<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Notifications\ContactFormSubmission;
use App\Notifications\MailNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class MainController extends Controller
{
    //
    public function home()
    {
        return inertia("Home");
    }

    public function about()
    {
        return inertia("About");
    }

    public function whatWeDo()
    {
        return inertia("WhatWeDo");
    }

    public function projects()
    {
        return inertia("Projects");
    }

    public function donate()
    {
        return inertia("Donation");
    }

    public function contact()
    {
        return inertia("Contact");
    }

    public function contactPost(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Send notification to admin
        Notification::route('mail', 'mphatsomlenga1@gmail.com')
            ->notify(new ContactFormSubmission($validated));

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
