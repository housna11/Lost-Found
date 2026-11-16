<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Item;


use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        return response()->json([
            'total_users' => User::count(),
            'total_items' => Item::count(),
            'lost_items' => Item::where('type', 'lost')->count(),
            'found_items' => Item::where('type', 'found')->count(),
            'in_progress' => Item::where('status', 'in_progress')->count(),
            'resolved' => Item::where('status', 'resolved')->count(),
        ]);
    }
}
