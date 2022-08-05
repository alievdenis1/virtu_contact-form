<?php

namespace App\Services\Order;

use App\Models\User;
use \App\Models\UserOrder;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function createOrder(array $fields): array
    {
        $order = new UserOrder();

        foreach ($fields as $key => $field) {
            if ($key == 'user_id') continue;
            $order->$key = $field;
        }

        $user = User::find($fields['user_id']);
        return $user->orders()->save($order)->toArray();
    }
}
