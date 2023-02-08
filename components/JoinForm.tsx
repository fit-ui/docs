import { useState } from 'react';
import LoginJoinLayout from './layout/LoginJoinLayout';

function JoinForm() {
	const [email, setEmail] = useState('');
	const [confirm, setConfirm] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const type = e.target.name;
		switch (type) {
			case 'firstname':
				setFirstName(e.target.value);
				break;
			case 'lastname':
				setLastName(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			case 'confirm':
				setConfirm(e.target.value);
				break;
		}
	}

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<LoginJoinLayout mt={28} width={94}>
			<form onSubmit={submitHandler}>
				<div className='flex'>
					<div className='mr-1'>
						<label
							htmlFor='firstname'
							className='block text-xs font-semibold mb-2'>
							First Name
						</label>
						<input
							type='text'
							name='firstname'
							value={firstName}
							className='w-full border-solid border-2 rounded mb-4'
							onChange={inputHandler}
						/>
					</div>
					<div>
						<label
							htmlFor='lastname'
							className='block text-xs font-semibold mb-2'>
							Last Name
						</label>
						<input
							type='text'
							name='lastname'
							value={lastName}
							className='w-full border-solid border-2 rounded mb-4'
							onChange={inputHandler}
						/>
					</div>
				</div>
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
				<div className='flex '>
					<div className='mr-1'>
						<label
							htmlFor='password'
							className='block text-xs font-semibold mb-2'>
							Password
						</label>
						<input
							type='password'
							name='password'
							value={password}
							className='w-full border-solid border-2 rounded mb-4'
							onChange={inputHandler}
						/>
					</div>
					<div>
						<label
							htmlFor='password'
							className='block text-xs font-semibold mb-2'>
							Confirm
						</label>
						<input
							type='password'
							name='confirm'
							value={confirm}
							className='w-full border-solid border-2 rounded mb-4'
							onChange={inputHandler}
						/>
					</div>
				</div>
				<button className='w-full rounded p-1 bg-black hover:bg-slate-700 text-white text-sm mb-2'>
					Sign up
				</button>
			</form>
		</LoginJoinLayout>
	);
}

export default JoinForm;
