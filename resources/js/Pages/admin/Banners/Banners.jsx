import React from "react";
import DashboardLayout from "../../../shared/DashboardLayout";
const Banners = () => {
    return (
        <>
          <div className="banner-wrappers">
            <div className="container-fluid">
                <div className="header">
                    <h1>Banners</h1>
                </div>
                <div className="banner_title">
                <table class="table-fixed">
                    <thead>
                        <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        </tr>
                        <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        </tr>
                        <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        </tr>
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
