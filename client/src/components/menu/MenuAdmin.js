import React from 'react'
import './Style.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {ConfirmContext} from '../../contexts/ConfirmContext';
import {useContext} from 'react';


export default function MenuAdmin() {
    const {setShowConfirmLogout}= useContext(ConfirmContext);
    const displayConfirm=()=>setShowConfirmLogout(true);

    return (
        <>
            <div style={{width: '25%', height: '500vh',backgroundColor:'#0091FF',position:'fixed'}}>
                <center><h4 className="text-white pt-3"><i className="fas fa-home"></i></h4></center>
                <hr />
                <div>
                    <div className="d-flex flex-column  text-white" style={{padding:'0 10% 0 10%'}}>
                        <div > 
                            <Link to='/admin/products' className='font-link-menu'>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="fas fa-image"></i>
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Sản phẩm</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* <div >
                            <Link to='/admin/news' className='font-link-menu'>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="fas fa-icons"></i>
                                        
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Logo</span>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
                        <div >
                            <Link to='/admin/quotes' className='font-link-menu'>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="icon_icon fas fa-phone-alt"></i>
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Nhận thông tin</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div >
                            <Link to='/admin/comments' className='font-link-menu'>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="icon_icon fas fa-comments"></i>
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Đánh giá</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                       
                       
                        <div >
                            <Link to='/admin/pay' className='font-link-menu'>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="icon_icon fas fa-money-check-alt"></i>
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Thanh toán</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div >
                            <Link to='/admin/silder' className='font-link-menu'>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="icon_icon fas fa-sliders-h"></i>
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Thay đổi silder</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                     
                        <div>
                            <Button onClick={displayConfirm} className='font-link-menu' style={{width:'100%',padding:'0',borderRadius:'10px',backgroundColor:'#0091FF',border:'none'}}>
                                <div className="color-container d-flex align-items-center">
                                    <div className="icon_center" style={{paddingLeft:'5%'}}>
                                        <i className="icon_icon fas fa-sign-out-alt"></i>
                                        <span className="icon_span" style={{paddingLeft:'3px',fontSize:'18px',fontWeight:'bolder'}}>Đăng xuất</span>
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
