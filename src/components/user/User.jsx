import { Radio } from 'antd';
import "./user.css";




export default function User() {
  return (
    <div className="user">
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Personal Information</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
            <Radio.Group name='radiogroup' defaultValue={1}>
            <Radio value={1}>Male</Radio>
            <Radio style={{marginLeft: '10px'}} value={2}>Female</Radio>
            </Radio.Group>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Mobile Number</label>
                <input
                  type="text"
                  placeholder="9876543210"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="06-09-2002"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Country</label>
                <input
                  type="text"
                  placeholder= "USA"
                  className="userUpdateInput"
                />
              <button className="userUpdateButton">Update Now</button>

              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdate2">
                <h3>We value your Privacy</h3>
                <p>We will not sell or distribute your contact information. Read our Privacy Policy.</p>
              </div>
              <div className="userUpdate2">
                <h3>Billing Enquiries</h3>
                <p>Do not hesitate to reach our support team if you have any queries.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
