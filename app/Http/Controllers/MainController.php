<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return inertia("Donate");
    }

    public function contact()
    {
        return inertia("Contact");
    }
}
