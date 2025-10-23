import React from 'react';

export default function SkillSyncCover() {
	return (
		<div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
			{/* Animated Grid Pattern */}
			<div className="absolute inset-0 opacity-10 dark:opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
					backgroundSize: '20px 20px'
				}}></div>
			</div>
			
			{/* Floating User Cards */}
			<div className="absolute top-4 left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-32 border border-gray-200 dark:border-gray-700">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
					<div className="flex-1">
						<div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
					</div>
				</div>
				<div className="mt-2 flex gap-1">
					<span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-[8px] rounded-full">React</span>
					<span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-[8px] rounded-full">Node</span>
				</div>
			</div>

			<div className="absolute top-4 right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-32 border border-gray-200 dark:border-gray-700">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
					<div className="flex-1">
						<div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
					</div>
				</div>
				<div className="mt-2 flex gap-1">
					<span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-[8px] rounded-full">MongoDB</span>
				</div>
			</div>

			<div className="absolute bottom-4 left-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-28 border border-gray-200 dark:border-gray-700">
				<div className="flex items-center gap-2">
					<div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
					<div className="flex-1">
						<div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-4 right-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-28 border border-gray-200 dark:border-gray-700">
				<div className="flex items-center gap-2">
					<div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600"></div>
					<div className="flex-1">
						<div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
					</div>
				</div>
			</div>
			
			{/* Center Connection Icon */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 shadow-xl flex items-center justify-center">
					<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
			</div>

			{/* Connection Lines */}
			<svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
				<line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
				<line x1="75%" y1="20%" x2="50%" y2="50%" stroke="#6366f1" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
				<line x1="30%" y1="80%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
				<line x1="70%" y1="80%" x2="50%" y2="50%" stroke="#6366f1" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
			</svg>
		</div>
	);
}
