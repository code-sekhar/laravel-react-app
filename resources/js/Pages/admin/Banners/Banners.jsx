import React from "react";
import DashboardLayout from "../../../shared/DashboardLayout";
import {Link, router, usePage} from "@inertiajs/react";
import "./Banners.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
const Banners = () => {
    const {banners} = usePage().props;
    //banner delete
    const handleDelete = (id) =>{
        if (confirm("Are You Sure you wand to delete this banner?")){
            router.delete(`/banner/${id}`,{
                headers: {
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
                },
                onSuccess:()=> {
                    toast.success("Banner Deleted Successfully !");
                }
            });
        }
    }
    return (
        <>
          <div className="banner-wrappers">
            <div className="container-fluid">
                <div className="header">
                    <h1>Banners</h1>
                </div>
                <div className="banner_title">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {banners.data.map((banner) => (
                            <tr key={banner.id}>
                                <td>{banner.id}</td>
                                <td>{banner.title}</td>
                                <td>{banner.content}</td>
                                <td>
                                    <img src={`/storage/${banner.image}`} alt="Banner" width="100"/>
                                </td>
                                <td>
                                    <a href={banner.link} target="_blank" rel="noopener noreferrer">
                                        {banner.link}
                                    </a>
                                </td>
                                <td>
                                    {banner.status === 'active' ? (
                                        <span className="badge bg-success">Active</span>
                                    ) : (
                                        <span className="badge bg-danger">Inactive</span>
                                    )}
                                </td>
                                <td>
                                    <div className="d-flex gap-2 ">
                                        <button className="btn btn-danger"  onClick={() =>handleDelete(banner.id)}>
                                            <FontAwesomeIcon icon={faTrashCan}/>
                                        </button>
                                        <button className="btn btn-success">
                                            <FontAwesomeIcon icon={faPenToSquare}/>
                                        </button>
                                        <button className="btn btn-primary">
                                            <FontAwesomeIcon icon={faEye}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center mt-4">
                        {banners.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                className={`btn ${link.active ? "btn-primary" : "btn-outline-primary"} mx-1`}
                                dangerouslySetInnerHTML={{__html: link.label}}
                            />
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </>
    );
};
export default Banners;
Banners.layout = page => <DashboardLayout children={page} title="Banners"/>
