import { ReactNode } from "react";

type Props = {
	title: string;
	children: ReactNode;
	footer: ReactNode;
	onClose?: () => void;
};

export default function Modal({ title, children, footer, onClose }: Props) {
	return (
		<div
			className="fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
					onClick={onClose}
				></div>
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>

				<div className="inline-block align-bottom bg-white border-2 border-pink-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3
									className="ml-4 text-lg leading-6 font-medium text-gray-900"
									id="modal-title"
								>
									{title}
								</h3>
								<div className="mt-2 text-sm text-gray-500">{children}</div>
							</div>
						</div>
					</div>
					{footer && (
						<div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							{footer}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
