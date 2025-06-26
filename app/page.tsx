/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { websiteContent } from "./websiteContent";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	return (
		<>
			<nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 transition-all duration-300'>
				<div className='max-w-7xl mx-auto px-6 sm:px-8 md:px-10'>
					<div className='flex justify-between items-center h-20'>
						<div className='flex items-center space-x-3'>
							<img
								src='/helix-logo.png'
								alt='Helix Logo'
								className='w-8 h-8 rounded-lg object-cover'
							/>
							<span className='text-xl font-bold text-white'>
								Helix AI
							</span>
						</div>

						<div className='hidden md:flex items-center space-x-8'>
							<a
								href='#services'
								className='text-gray-400 hover:text-white transition-colors'>
								Services
							</a>
							<a
								href='#benefits'
								className='text-gray-400 hover:text-white transition-colors'>
								Benefits
							</a>
							<button className='bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
								Start Automating
							</button>
						</div>
						<div className='md:hidden'>
							<button onClick={() => setMenuOpen(!menuOpen)}>
								{menuOpen ? (
									<X className='text-white w-6 h-6' />
								) : (
									<Menu className='text-white w-6 h-6' />
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>
			{menuOpen && (
				<div className='md:hidden absolute top-20 left-0 w-full bg-black px-6 py-8 space-y-6 shadow-lg z-40'>
					<a
						href='#services'
						className='block text-gray-300 hover:text-white'>
						Services
					</a>
					<a
						href='#benefits'
						className='block text-gray-300 hover:text-white'>
						Benefits
					</a>
					<button className='block w-full bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
						Start Free Audit
					</button>
				</div>
			)}
		</>
	);
};

export default function HelixLandingPage(): React.ReactElement {
	return (
		<div className='min-h-screen bg-black text-white px-4 sm:px-6 md:px-8'>
			{/* Custom Styles */}
			<style jsx>{`
				@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

				body {
					font-family: "Inter", sans-serif;
				}

				/* Services Section Background Animation */
				#services {
					position: relative;
					overflow: hidden;
				}
				#services::before {
					content: "";
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					width: 90vw;
					max-width: 600px;
					height: 90vw;
					max-height: 600px;
					border-radius: 50%;
					background: radial-gradient(
						circle at center,
						#8b5cf6,
						#6366f1,
						transparent 70%
					);
					filter: blur(80px);
					opacity: 0.4;
					z-index: 0;
				}

				@keyframes pulseScaleOpacity {
					0%,
					100% {
						transform: translateX(-50%) scale(1);
						opacity: 0.4;
					}
					50% {
						transform: translateX(-50%) scale(1.1);
						opacity: 0.6;
					}
				}

				/* Benefits Section Background Overlay and Pulse */
				#benefits {
					position: relative;
					overflow: hidden;
				}

				#benefits::before {
					content: "";
					position: absolute;
					inset: 0;
					pointer-events: none;
					background-image: repeating-linear-gradient(
							0deg,
							rgba(255, 255, 255, 0.05),
							rgba(255, 255, 255, 0.05) 1px,
							transparent 1px,
							transparent 20px
						),
						repeating-linear-gradient(
							90deg,
							rgba(255, 255, 255, 0.05),
							rgba(255, 255, 255, 0.05) 1px,
							transparent 1px,
							transparent 20px
						);
					z-index: 0;
					animation: gridShift 30s linear infinite;
				}

				@keyframes gridShift {
					0% {
						background-position: 0 0, 0 0;
					}
					100% {
						background-position: 20px 20px, 20px 20px;
					}
				}

				#benefits .radial-pulse-bg {
					position: absolute;
					width: 800px;
					height: 800px;
					bottom: -200px;
					left: 50%;
					transform: translateX(-50%);
					background: radial-gradient(
						circle,
						rgba(131, 56, 236, 0.3),
						transparent 70%
					);
					filter: blur(100px);
					opacity: 0.5;
					z-index: 0;
					animation: radialPulse 8s ease-in-out infinite;
				}

				@keyframes radialPulse {
					0%,
					100% {
						opacity: 0.5;
						transform: translateX(-50%) scale(1);
					}
					50% {
						opacity: 0.7;
						transform: translateX(-50%) scale(1.1);
					}
				}

				/* Contact Section Background Glow and Button Pulse */
				#contact {
					position: relative;
					overflow: hidden;
				}

				#contact::before {
					content: "";
					position: absolute;
					width: 600px;
					height: 600px;
					bottom: -150px;
					left: 50%;
					transform: translateX(-50%);
					border-radius: 50%;
					background: radial-gradient(
						circle,
						rgba(139, 92, 246, 0.4),
						transparent 70%
					);
					filter: blur(100px);
					opacity: 0.6;
					z-index: 0;
					animation: slowGlow 12s ease-in-out infinite;
				}

				@keyframes slowGlow {
					0%,
					100% {
						opacity: 0.6;
						transform: translateX(-50%) scale(1);
					}
					50% {
						opacity: 0.9;
						transform: translateX(-50%) scale(1.05);
					}
				}

				#contact button {
					position: relative;
					z-index: 10;
					animation: pulseButton 2.5s ease-in-out infinite;
				}

				@keyframes pulseButton {
					0%,
					100% {
						transform: scale(1);
						box-shadow: 0 0 8px 0 rgba(139, 92, 246, 0.7);
					}
					50% {
						transform: scale(1.05);
						box-shadow: 0 0 20px 6px rgba(139, 92, 246, 0.9);
					}
				}
			`}</style>

			<Navbar />

			{/* Hero Section */}
			<section
				className='relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 overflow-hidden bg-black text-white'
				style={{
					backgroundImage: "url('/herobg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}>
				<div
					className='absolute inset-0 overflow-hidden'
					style={{ perspective: "1000px" }}>
					<div
						id='animated-gradient'
						className='w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-3xl opacity-50 absolute'
						style={{
							background:
								"radial-gradient(circle at center, #a855f7, #6366f1, transparent 70%)",
							transition: "transform 0.1s ease-out",
							left: "50%",
							top: "50%",
							transform: "translate(-50%, -50%)",
						}}></div>
				</div>
				<div className='relative z-10 space-y-6 max-w-4xl px-4 text-center'>
					<div className='inline-block text-xs tracking-widest uppercase border border-gray-600 px-3 py-1 rounded-full text-gray-300 mb-8 sm:mb-12'>
						{websiteContent.hero.badge}
					</div>
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-light leading-tight mb-5 sm:mb-12'>
						<span className='block'>AUTOMATE CHAOS,</span>
						<span className='block font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500'>
							BUILD EXCELLENCE!
						</span>
					</h1>
					<p className='text-base md:text-lg max-w-2xl text-gray-400 mx-auto mb-8 sm:mb-12'>
						{websiteContent.hero.subtitle}
					</p>
					<div className='flex flex-wrap justify-center items-center gap-4 flex-col sm:flex-row'>
						<button className='bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition'>
							{websiteContent.hero.cta}
						</button>
						<button className='border border-gray-600 px-6 py-3 rounded-lg text-white hover:bg-white/10 transition'>
							{websiteContent.hero.secondaryCta}
						</button>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id='services'
				className='relative py-32 sm:py-40 md:py-42 bg-black text-white px-4 sm:px-6 md:px-8'>
				<div className='max-w-7xl mx-auto text-center md:text-left relative z-10'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12'>
						{websiteContent.services.title}
					</h2>
					<p className='text-gray-400 max-w-4xl mx-auto md:mx-0 mb-8 sm:mb-12'>
						{websiteContent.services.subtitle}
					</p>
					<div className='flex flex-wrap justify-center items-center gap-6 flex-col md:flex-row'>
						{websiteContent.services.items
							.slice(0, 3)
							.map((item, idx) => (
								<div
									key={idx}
									className='w-full md:w-1/3 flex-1 rounded-2xl bg-gradient-to-br from-[#1F1B2E] to-[#111111] text-white p-6 shadow-lg transition transform hover:-translate-y-1 hover:shadow-purple-500/30 flex flex-col'>
									<div className='flex items-center mb-4 space-x-3'>
										<div className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10'>
											{React.createElement(
												require("lucide-react")[
													item.icon
												],
												{
													className:
														"w-5 h-5 text-purple-400",
												}
											)}
										</div>
										<h3 className='text-xl font-semibold'>
											{item.title}
										</h3>
									</div>
									<p className='text-sm text-gray-300 mb-4'>
										{item.description}
									</p>
									<a
										href='#'
										className='text-purple-400 text-sm font-medium inline-flex items-center hover:underline mt-auto'>
										Learn more{" "}
										<ArrowRight className='w-4 h-4 ml-1' />
									</a>
								</div>
							))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section
				id='benefits'
				className='relative py-32 sm:py-40 md:py-42 bg-black text-white px-4 sm:px-6 md:px-8'>
				<div className='radial-pulse-bg'></div>
				<div className='max-w-7xl mx-auto text-center md:text-left relative z-10'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12'>
						{websiteContent.benefits.title}
					</h2>
					<p className='text-gray-400 max-w-4xl mx-auto md:mx-0 mb-8 sm:mb-12'>
						{websiteContent.benefits.subtitle}
					</p>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{websiteContent.benefits.items.map((item, idx) => (
							<div
								key={idx}
								className='bg-[#111111] rounded-xl p-6 border border-gray-800 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col'>
								<div className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 mb-4 mx-auto'>
									{React.createElement(
										require("lucide-react")[item.icon],
										{
											className:
												"w-5 h-5 text-purple-400",
										}
									)}
								</div>
								<h3 className='text-lg font-semibold mb-2 text-center'>
									{item.title}
								</h3>
								<p className='text-gray-400 text-sm text-center'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className='relative py-32 sm:py-40 md:py-42 bg-black text-white px-4 sm:px-6 md:px-8'>
				<div className='max-w-4xl mx-auto text-center relative z-10'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12'>
						{websiteContent.cta.title}
					</h2>
					<p className='text-gray-400 max-w-4xl mx-auto mb-8 sm:mb-12'>
						{websiteContent.cta.subtitle}
					</p>
					<button className='bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg transition'>
						{websiteContent.cta.button}
					</button>
					<p className='text-sm text-gray-500 mt-4'>
						{websiteContent.cta.disclaimer}
					</p>
				</div>
			</section>
			<footer className='text-center text-sm text-gray-500 py-6 border-t border-gray-800'>
				© {new Date().getFullYear()} Helix. All rights reserved.
			</footer>
		</div>
	);
}
