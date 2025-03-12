<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Exception;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function index(){

    }
    public function create(Request $request){

            $validated = $request->validate([
                'title' => 'required',
                'content' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:88048',
                'link' => 'required'
            ],[
                'title.required' => 'Enter banner title',
                'content.required' => 'Enter banner content',
                'image.required' => 'Enter banner image',
                'image.image' => 'Enter banner image',
            ]);
            //Image Validation
            if($request->hasFile('image')){
                $imagePath = $request->file('image')->store('banner', 'public');
                $validated['image'] = $imagePath;
            }
            $banner = Banner::create($validated);
//            return response()->json([
//                'success' => true,
//                'banner' => $banner,
//                'message' => 'Banner added successfully'
//            ],201);
            return Inertia::render('admin/AddBanner/AddBanner',[
                'posts'=>$banner,
                'success'=> 'Banner added successfully'
            ]);
           // return redirect()->route('banner')->with('success', 'Banner added successfully');

    }
}
