<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'type', 
        'location',
        'date',
        'image',
        'status',    
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function isLost()
    {
        return $this->type === 'lost';
    }

    public function isFound()
    {
        return $this->type === 'found';
    }

    public function isResolved()
    {
        return $this->status === 'resolved';
    }

    public function isInProgress()
    {
        return $this->status === 'in_progress';
    }
     protected $casts = [
        'date' => 'date',
    ];
}
