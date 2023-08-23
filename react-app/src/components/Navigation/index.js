import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul id='navigation'>

				<a href="/" id='logo'><p id='logo-hello'>Hello</p><p id='logo-eats'>Eats</p></a>

				<button id='current-address'>Current Address</button>

			{isLoaded && (
				<div id='login-signup-buttons-container'>
					<button id='cart-button'>Cart · #</button>
					<OpenModalButton
              buttonText="Log In"
			  className='login-signup'
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
			  className='login-signup'
              modalComponent={<SignupFormModal />}
            />
				</div>
			)}
		</ul>
	);
}

export default Navigation;
