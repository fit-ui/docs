import React, { ChangeEventHandler } from 'react';

interface Props {
	email: string;
	password: string;
	inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Login({ email, password, inputHandler }: Props) {
	return (
		<div className='flex flex-col items-center mt-32'>
			<h2 className='text-lg font-bold mb-5'>FIT UI</h2>
			<form className='w-72 h-64 rounded shadow-lg bg-white p-6'>
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
				<button className='w-full rounded p-1 bg-black hover:bg-slate-700 text-white text-sm mb-6'>
					Sign in
				</button>
				<p className='text-xs text-center'>forgot your password?</p>
			</form>
		</div>
	);
}

export default Login;
