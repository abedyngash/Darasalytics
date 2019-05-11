import React from 'react';

const Profile = (props) => {
	const {user} = props.location.state;

    return (
        <div className="container card-content-section">
            

        	<div class="card">
                <div class="card-header">Your Profile</div>
                <div class="card-body">
                    <div>
                        <h6><span>First Name</span> : {user.firstName}</h6>
                    </div>
                    <div>
                        <h6><span>Last Name</span> : {user.lastName}</h6>
                    </div>
                    <div>
                        <h6><span>Email</span> : {user.email}</h6>
                    </div>                    
                </div>   
            </div>
        </div>
	);
}

export default Profile;
