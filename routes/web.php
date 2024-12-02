<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get("/", [MainController::class, "home"])->name("home");
Route::get("/about", [MainController::class, "about"])->name("about");
Route::get("/what-we-do", [MainController::class, "whatWeDo"])->name("what-we-do");
Route::get("/projects", [MainController::class, "projects"])->name("projects");
Route::get("/donate", [MainController::class, "donate"])->name("donate");
Route::get("/contact", [MainController::class, "contact"])->name("contact");
Route::post("/contact", [MainController::class, "contactPost"])->name("contact.post");
