<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name',
        'last_name',
        'shipping_address',
        'phone',
        'email',
        'product_id',
        'quantity'
    ];
}

