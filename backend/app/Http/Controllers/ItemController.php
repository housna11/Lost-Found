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
    public function myItems()
    {
        $items = Item::where('user_id', auth()->id())
        ->latest()
        ->get();
    return response()->json($items);
    }

   public function update(Request $request, Item $item)
{
    if ($item->user_id !== auth()->id()) {
        return response()->json([
            'message' => 'Non autorisé.'
        ], 403);
    }

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

    $item->update($validated);

    return response()->json([
        'message' => 'Objet mis à jour avec succès.',
        'item' => $item,
    ]);
}
    public function destroy(Item $item)
    {
    if ($item->user_id !== auth()->id()) {
        return response()->json([
            'message' => 'Non autorisé.'
        ], 403);
    }
    $item->delete();
    return response()->json([ 'message' => 'Objet supprimé avec succès.' ]);
}

}
