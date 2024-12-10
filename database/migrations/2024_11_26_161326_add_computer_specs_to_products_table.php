<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('brand')->after('stock');
            $table->string('model')->after('brand');
            $table->string('processor')->after('model');
            $table->string('ram')->after('processor');
            $table->string('storage')->after('ram');
            $table->string('graphics')->after('storage');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn(['brand', 'model', 'processor', 'ram', 'storage', 'graphics']);
        });
    }
};
