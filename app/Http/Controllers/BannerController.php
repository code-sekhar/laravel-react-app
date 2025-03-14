<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Exception;
use Inertia\Inertia;
use Inertia\Response;

class BannerController extends Controller
{
    public function index():Response{
        $banners = Banner::all();
        return Inertia::render('admin/Banners/Banners',[
            'banners'=>$banners
        ]);
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
            // return Inertia::render('admin/AddBanner/AddBanner',[
            //     'posts'=>$banner,
            //     'success'=> 'Banner added successfully'
            // ]);
            return redirect()->back()->with('success', 'Banner added successfully!');
           // return redirect()->route('banner')->with('success', 'Banner added successfully');

    }
}
