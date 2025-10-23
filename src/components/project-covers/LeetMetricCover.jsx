import React from 'react';

export default function LeetMetricCover() {
	return (
		<div className="h-48 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900 dark:to-amber-900">
			{/* Code Pattern Background */}
			<div className="absolute inset-0 opacity-5 font-mono text-xs text-gray-600 dark:text-gray-400 overflow-hidden">
				<div className="p-2 space-y-1">
					<div>function solve(nums) {'{'}</div>
					<div>&nbsp;&nbsp;return nums.reduce();</div>
					<div>{'}'}</div>
				</div>
			</div>

			{/* Dashboard Container */}
			<div className="absolute inset-0 flex items-center justify-center p-6">
				<div className="w-full max-w-sm">
					{/* Stats Cards */}
					<div className="grid grid-cols-3 gap-3 mb-4">
						<div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md border border-gray-200 dark:border-gray-700">
							<div className="text-lg font-bold text-green-600 dark:text-green-400">156</div>
							<div className="text-[9px] text-gray-500 dark:text-gray-400">Easy</div>
						</div>
						<div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md border border-gray-200 dark:border-gray-700">
							<div className="text-lg font-bold text-orange-600 dark:text-orange-400">89</div>
							<div className="text-[9px] text-gray-500 dark:text-gray-400">Medium</div>
						</div>
						<div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md border border-gray-200 dark:border-gray-700">
							<div className="text-lg font-bold text-red-600 dark:text-red-400">34</div>
							<div className="text-[9px] text-gray-500 dark:text-gray-400">Hard</div>
						</div>
					</div>

					{/* Bar Chart */}
					<div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
						<div className="flex items-end justify-around h-16 gap-2">
							{/* Bar 1 */}
							<div className="flex-1 flex flex-col items-center gap-1">
								<div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '70%' }}></div>
								<div className="w-2 h-2 rounded-full bg-green-500"></div>
							</div>
							{/* Bar 2 */}
							<div className="flex-1 flex flex-col items-center gap-1">
								<div className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t" style={{ height: '90%' }}></div>
								<div className="w-2 h-2 rounded-full bg-orange-500"></div>
							</div>
							{/* Bar 3 */}
							<div className="flex-1 flex flex-col items-center gap-1">
								<div className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t" style={{ height: '50%' }}></div>
								<div className="w-2 h-2 rounded-full bg-red-500"></div>
							</div>
							{/* Bar 4 */}
							<div className="flex-1 flex flex-col items-center gap-1">
								<div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: '60%' }}></div>
								<div className="w-2 h-2 rounded-full bg-blue-500"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Floating Code Icons */}
			<div className="absolute top-3 left-4 text-orange-400 dark:text-orange-500 opacity-20 text-2xl font-mono">{`{}`}</div>
			<div className="absolute top-3 right-4 text-amber-400 dark:text-amber-500 opacity-20 text-2xl font-mono">{`</>`}</div>
			<div className="absolute bottom-3 left-6 text-orange-400 dark:text-orange-500 opacity-20 text-xl font-mono">{`[]`}</div>
			<div className="absolute bottom-3 right-6 text-amber-400 dark:text-amber-500 opacity-20 text-xl font-mono">{`()`}</div>
		</div>
	);
}
