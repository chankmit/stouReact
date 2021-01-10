import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My ReactAPP</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" aria-current="page" to="/">หน้าหลัก</Link>
                    <Link class="nav-link" to="/products">รายการสินค้า</Link>
                    <Link class="nav-link" to="/about">เกี่ยวกับเรา</Link> 
                    <Link class="nav-link" to="/covid">COVID Update</Link> 
                    <Link class="nav-link" to="/profile">ผู้พัฒนา</Link> 
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;