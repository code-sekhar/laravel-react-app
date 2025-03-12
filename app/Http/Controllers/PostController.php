<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Exception;
use Inertia\Inertia;
class PostController extends Controller
{
    public function index(){
        $posts = Post::latest()->get();

         return Inertia::render('Blog',[
             'posts'=>$posts
         ]);
    }
    //add post
    public function create(Request $request){
        try{
            $validatedData = $request->validate([
                'title'   => 'required|string|max:255',
                'content' => 'required|string'
            ], [
                'title.required'   => 'শিরোনাম অবশ্যই দিতে হবে।',
                'content.required' => 'ব্লগ কন্টেন্ট অবশ্যই দিতে হবে।'
            ]);
            $post = Post::create($validatedData);
            return response()->json([
                'success'=>true,
                'data'=>$post,
                'message'=>'Post created successfully'
            ],200);
        }catch(\Throwable $e){
            return response()->json([
                'success'=>false,
                'message'=>$e->getMessage()
            ],500);
        }
    }
}
