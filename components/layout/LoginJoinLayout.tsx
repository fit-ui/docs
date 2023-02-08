import React from 'react';

interface Props {
	children: React.ReactNode;
	mt: number;
	width: number | string;
}

function LoginJoinLayout({ children, mt, width }: Props) {
	return (
		<div className={`flex flex-col items-center mt-${mt}`}>
			<h2 className='text-lg font-bold mb-5'>FIT UI</h2>
			<div className={`w-${width} rounded shadow-lg bg-white p-8`}>
				{children}
			</div>
		</div>
	);
}

export default LoginJoinLayout;
