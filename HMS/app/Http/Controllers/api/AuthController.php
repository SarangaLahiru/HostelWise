<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
use App\Models\User; // Assuming your custom user model is named MongoUser

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        // Validate the login request
        $credentials = $request->validated();

        // Attempt to authenticate the user
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Provided email or password is invalid'], 401);
        }

        // Get the authenticated user
        $user = Auth::user();

        // Create a token for the user
        $token = $user->createToken('authToken')->plainTextToken;

        // Return the user and token in the response
        return response()->json(['user' => $user, 'token' => $token], 200);
    }
}
