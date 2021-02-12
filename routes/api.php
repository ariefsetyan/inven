<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JwtAuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [\App\Http\Controllers\Api\AuthController::class,'login']);
    Route::post('signup', [\App\Http\Controllers\Api\AuthController::class,'signup']);
    Route::post('logout', [\App\Http\Controllers\Api\AuthController::class,'logout']);
    Route::post('refresh', [\App\Http\Controllers\Api\AuthController::class,'refresh']);
    Route::post('me', [\App\Http\Controllers\Api\AuthController::class,'me']);

});

//Route::apiResource('/employee',[\App\Http\Controllers\EmployeeController::class]);
Route::apiResource('/employee',\App\Http\Controllers\EmployeeController::class);


//Route::get('/login', [\App\Http\Controllers\Api\AuthController::class,'login']);
