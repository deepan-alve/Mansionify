import { MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NEARBY_PROPERTIES = [
	{
		name: 'Ocean View Retreat',
		address: '41023 · Coastal Highway, Santa Monica, CA',
		images: 32,
		beds: 5,
		baths: 3,
		size: '7x92.3 m²',
		distance: '12.7 KM',
		image: 'beach_int.avif',
	},
	{
		name: 'Golden Springfield',
		address: '28212 · Lake Sevilla, Beverly Hills, LA',
		images: 28,
		beds: 4,
		baths: 2,
		size: '6x78.5 m²',
		distance: '18.2 KM',
		image:
			'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	},
	{
		name: 'Highland Paradise',
		address: '85437 · Mountain View Dr, Hollywood Hills',
		images: 24,
		beds: 6,
		baths: 4,
		size: '8x104.2 m²',
		distance: '15.9 KM',
		image:
			'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	},
	{
		name: 'Metro Skyline',
		address: '12768 · Downtown Blvd, Los Angeles, CA',
		images: 18,
		beds: 3,
		baths: 2,
		size: '5x65.8 m²',
		distance: '8.3 KM',
		image:
			'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	},
];

interface NearbyPropertyProps {
	activePropertyIndex: number;
}

function NearbyProperty({ activePropertyIndex }: NearbyPropertyProps) {
	const nearbyPropertyIndex = (activePropertyIndex + 1) % NEARBY_PROPERTIES.length;
	const propertyInfo = NEARBY_PROPERTIES[nearbyPropertyIndex];

	return (
		<div className="w-full md:w-[350px] max-w-[95vw] bg-white rounded-2xl overflow-hidden shadow-lg">
			<div className="relative h-[180px] bg-gray-200">
				<img
					src={propertyInfo.image}
					alt={propertyInfo.name}
					className="w-full h-full object-cover"
				/>

				<div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M12 16l4-4-4-4"></path>
						<path d="M8 12h8"></path>
					</svg>
					<span className="ml-1">Nearby</span>
				</div>
			</div>
			<div className="p-4">
				<div className="flex justify-between items-start mb-3">
					<div>
						<h3 className="text-lg md:text-xl font-semibold">
							{propertyInfo.name}
						</h3>
						<p className="text-xs md:text-sm text-gray-500 flex items-center">
							{propertyInfo.address}
						</p>
					</div>
					<div className="flex items-center text-xs md:text-sm">
						<div className="w-7 h-7 bg-mansion-beige rounded-full flex items-center justify-center mr-1">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
								<path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
							</svg>
						</div>
						<span>+{propertyInfo.images} Images</span>
					</div>
				</div>

				<div className="flex justify-between items-center mb-4">
					<div className="flex space-x-2 md:space-x-4">
						<div className="flex items-center text-xs md:text-sm">
							<div className="w-6 h-6 flex items-center justify-center mr-1 text-[#FF9D72]">
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current"
								>
									<path
										d="M3 18V12C3 10.3431 4.34315 9 6 9H18C19.6569 9 21 10.3431 21 12V18"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path
										d="M3 18V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V18"
										strokeWidth="2"
									/>
									<path
										d="M5 12V7C5 6.44772 5.44772 6 6 6H9C9.55228 6 10 6.44772 10 7V9"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path
										d="M14 12V7C14 6.44772 14.4477 6 15 6H18C18.5523 6 19 6.44772 19 7V9"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path d="M3 18H21" strokeWidth="2" />
								</svg>
							</div>
							<span>{propertyInfo.beds}</span>
						</div>
						<div className="flex items-center text-xs md:text-sm">
							<div className="w-6 h-6 flex items-center justify-center mr-1 text-[#FF9D72]">
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current"
								>
									<path d="M4 12H20" strokeWidth="2" strokeLinecap="round" />
									<path
										d="M4 4V12C4 14.2091 5.79086 16 8 16H16C18.2091 16 20 14.2091 20 12V4"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path d="M12 16V20" strokeWidth="2" strokeLinecap="round" />
									<path d="M8 20H16" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</div>
							<span>{propertyInfo.baths}</span>
						</div>
						<div className="flex items-center text-xs md:text-sm">
							<div className="w-6 h-6 flex items-center justify-center mr-1 text-[#FF9D72]">
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current"
								>
									<rect x="3" y="3" width="18" height="18" rx="2"></rect>
									<path d="M3 9h18"></path>
									<path d="M9 21V9"></path>
								</svg>
							</div>
							<span>{propertyInfo.size}</span>
						</div>
					</div>

					<Button
						variant="outline"
						size="icon"
						className="rounded-full"
					>
						<MessageCircle size={16} className="md:size-18" />
					</Button>
				</div>

				<div>
					<Button
						variant="outline"
						className="w-full justify-between rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 font-normal text-xs md:text-sm"
					>
						<div className="flex items-center">
							<MapPin size={14} className="mr-1 text-gray-500 md:size-16" />
							<span>Distance</span>
						</div>
						<div className="flex items-center">
							<span className="mr-1">{propertyInfo.distance}</span>
							<svg
								width="14"
								height="14"
								className="md:w-4 md:h-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NearbyProperty;
