<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function register(SignupRequest $request)
    {
        $data = $request->validated();

        // Handle the image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        } else {
            $imagePath = null; // Set default image path if needed
        }

        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'registerNo' => $data['regNo'],
            'address' => $data['address'],
            'password' => bcrypt($data['password']),
            'Hostel_no' => $data['Hostel_no'],
            'image' => $imagePath,
            'fees' => $data['fees'], // Save the image path to the database
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }
}