<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:lost,found',
            'location' => 'required|string|max:255',
            'date' => 'required|date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('items', 'public');
        }

        $validated['status'] = 'in_progress';
        $validated['user_id'] = auth()->id();

        $item = Item::create($validated);
        return response()->json([
            'message' => 'Objet déclaré avec succès.',
            'item' => $item,
        ], 201);
    }
}
