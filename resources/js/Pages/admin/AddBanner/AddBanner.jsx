import React, {useState} from "react";
import DashboardLayout from "../../../shared/DashboardLayout";
import {router, usePage} from "@inertiajs/react";
import { toast } from "react-toastify";
const AddBanner =()=>{
    const {banners} = usePage().props;
    const [form,setForm] = useState({title:"",content:"",image:null,link:""});
    const handleChange = (e) =>{
        if(e.target.name==="image"){
            setForm({...form,image:e.target.files[0]});
        }else{
            setForm({...form,[e.target.name]: e.target.value});
        }
    };
    const  handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",form.title);
        formData.append("content",form.content);
        formData.append("link",form.link);
        formData.append("image",form.image);
        router.post("banner",formData,{
            onSuccess:() => {
                setForm({
                    title:"",content:"",image:null,link:"",
                }),
                toast.success("Banner Added Successfully");
            },
            onError:() => {
                toast.error("Something went wrong");
            }

        })
    };
    console.log(handleSubmit);
    return(
        <>
            <div className='addBanner'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page_card">
                                <div className="section-header">
                                    <h1>Add Banner</h1>
                                </div>
                                <div className="form-box card p-4 shadow">
                                    <div className="inner-form-box">
                                        <form  onSubmit={handleSubmit} encType="multipart/form-data">
                                            <div className="form-group mb-3">
                                                <label htmlFor="title">Title:</label>
                                                <input type="text" className="form-control" id="title"
                                                       placeholder="Enter Title" name="title" value={form.title} onChange={handleChange} required/>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="content">content:</label>
                                                <textarea className="form-control" rows="5" name="content" value={form.content} onChange={handleChange} required></textarea>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="image">Banner Image:</label>
                                                <input type="file" className="form-control" id="image" name="image" accept="image/*" onChange={handleChange} required/>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="url">Additional Url:</label>
                                                <input type="text" className="form-control" id="url"
                                                       placeholder="Enter Url" name="link" value={form.link} onChange={handleChange} required/>
                                            </div>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddBanner;
AddBanner.layout = page => <DashboardLayout children={page} title="Add Banner"/>
