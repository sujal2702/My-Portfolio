import React from 'react';

export default function InsightDocsCover() {
	return (
		<div className="h-48 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900">
			{/* Subtle Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
					backgroundSize: '30px 30px'
				}}></div>
			</div>

			{/* Main Document with Content */}
			<div className="absolute inset-0 flex items-center justify-center p-6">
				<div className="relative w-48 h-40 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
					{/* Document Header */}
					<div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
						<div className="w-3 h-3 rounded-full bg-red-400"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
						<div className="w-3 h-3 rounded-full bg-green-400"></div>
						<div className="ml-auto text-[10px] text-gray-400 font-mono">PDF</div>
					</div>

					{/* Document Content Lines */}
					<div className="space-y-2 mb-4">
						<div className="h-1.5 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
						<div className="h-1.5 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
						<div className="h-1.5 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
					</div>

					{/* Image Placeholder */}
					<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded mb-2"></div>

					{/* More Content */}
					<div className="space-y-2">
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
						<div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
					</div>

					{/* AI Processing Indicator */}
					<div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-teal-600 rounded-full shadow-lg flex items-center justify-center border-4 border-white dark:border-gray-900">
						<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
						</svg>
					</div>
				</div>

				{/* Floating Analysis Bubbles */}
				<div className="absolute top-8 right-8 bg-emerald-100 dark:bg-emerald-900 rounded-lg px-3 py-1.5 shadow-md border border-emerald-200 dark:border-emerald-700">
					<div className="text-[10px] text-emerald-700 dark:text-emerald-300 font-medium">Extracting...</div>
				</div>

				<div className="absolute bottom-8 left-8 bg-teal-100 dark:bg-teal-900 rounded-lg px-3 py-1.5 shadow-md border border-teal-200 dark:border-teal-700">
					<div className="text-[10px] text-teal-700 dark:text-teal-300 font-medium">Analyzing...</div>
				</div>
			</div>
		</div>
	);
}
