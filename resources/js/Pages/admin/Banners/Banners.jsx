import React from "react";
import DashboardLayout from "../../../shared/DashboardLayout";
import { usePage } from "@inertiajs/react";
import "./Banners.css";
const Banners = () => {
    const {banners} = usePage().props;
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
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((banner) => (
                            <tr key={banner.id}>
                                <td>{banner.id}</td>
                                <td>{banner.title}</td>
                                <td>{banner.content}</td>
                                <td>
                                    <img src={`/storage/${banner.image}`} alt="" width='60'/>
                                </td>
                                <td>{banner.link}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-danger">Delete</button>
                                        <button className="btn btn-primary">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
          </div>
        </>
    );
};
export default Banners;
Banners.layout = page => <DashboardLayout children={page} title="Banners" />
