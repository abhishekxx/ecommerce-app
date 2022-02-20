import React from 'react';
import './footermain.css';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';

function Item () {
    return (
        <div className='items'>
            <div className="items__icons">
                {/* All the icons */}

            <div className="items__icon" >
                <LocalShippingOutlinedIcon  style={{ fontSize: '30px', position: 'relative', top: '25px', left: '20px', }}/>
                <h1>100% Secure Payments</h1>
                <p>Moving your card details to a more secured place.</p>
            </div>   

            <div className="items__icon">
                 <HeadsetMicOutlinedIcon style={{ fontSize: '30px', position: 'relative', top: '25px', left: '20px', }}/>
                <h1>Online 24/7 Support</h1>
                <p>Sign up for Gift</p>
            </div>

            <div className="items__icon">
                <MonetizationOnOutlinedIcon style={{ fontSize: '30px', position: 'relative', top: '25px', left: '15px', }}/>
                <h1>Money Back Guarantee</h1>
                <p>Sign up for Gift</p>
            </div>

            <div className="items__icon">
                <AccountBalanceOutlinedIcon style={{ fontSize: '30px', position: 'relative', top: '25px', left: '10px', }}/>
                <h1>Win $100 First Purchase</h1>
                <p>Sign up for Voucher</p>
            </div>

            </div>

        </div>

        
    );
}

export default Item;
