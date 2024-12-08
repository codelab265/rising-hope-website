<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get("/", [MainController::class, "home"])->name("home")->middleware('cache.headers:public;max_age=2628000;etag');;
Route::get("/about", [MainController::class, "about"])->name("about")->middleware('cache.headers:public;max_age=2628000;etag');;
Route::get("/what-we-do", [MainController::class, "whatWeDo"])->name("what-we-do")->middleware('cache.headers:public;max_age=2628000;etag');;
Route::get("/projects", [MainController::class, "projects"])->name("projects")->middleware('cache.headers:public;max_age=2628000;etag');;
Route::get("/donate", [MainController::class, "donate"])->name("donate")->middleware('cache.headers:public;max_age=2628000;etag');;
Route::get("/contact", [MainController::class, "contact"])->name("contact")->middleware('cache.headers:public;max_age=2628000;etag');;
Route::post("/contact", [MainController::class, "contactPost"])->name("contact.post");