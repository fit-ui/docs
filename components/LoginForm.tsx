import Link from 'next/link';
import React, { useState } from 'react';
import LoginJoinLayout from './layout/LoginJoinLayout';

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const type = e.target.name;
		switch (type) {
			case 'email':
				setEmail(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
		}
	}

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<LoginJoinLayout mt={32} width={72}>
			<form onSubmit={submitHandler}>
				<label htmlFor='email' className='block text-xs font-semibold mb-2'>
					Email address
				</label>
				<input
					type='text'
					name='email'
					value={email}
					className='w-full border-solid border-2 rounded mb-4'
					onChange={inputHandler}
				/>
				<label htmlFor='password' className='block text-xs font-semibold mb-2'>
					Password
				</label>
				<input
					type='password'
					name='password'
					value={password}
					className='w-full border-solid border-2 rounded mb-4'
					onChange={inputHandler}
				/>
				<button className='w-full rounded p-1 bg-black hover:bg-slate-700 text-white text-sm mb-2'>
					Sign in
				</button>
			</form>
			<div className='text-center'>
				<p className='text-xs mb-2'>forgot your password?</p>
				<p className='text-xs'>
					Need an account?{' '}
					<Link href='/join' className='underline'>
						Sign up
					</Link>
				</p>
			</div>
		</LoginJoinLayout>
	);
}

export default LoginForm;
