import Head from 'next/head';
import gambar1 from '../public/naufal.png';
import gambar2 from '../public/laptop.jpg';
import logo1 from '../public/html.png';
import logo2 from '../public/css.png';
import logo3 from '../public/js.png';
import logo4 from '../public/php.png';
import logo5 from '../public/laravel.png';
import logo6 from '../public/codeigniter.png';
import logo7 from '../public/nodejs.png';
import logo8 from '../public/reactjs.png';
import logo9 from '../public/nextjs.png';
import logo10 from '../public/express.png';
import logo11 from '../public/mysql.png';
import logo12 from '../public/mongodb.png';
import flagid from '../public/id.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
	BsMoonStarsFill,
	BsBrightnessHighFill,
	BsFileEarmarkText,
} from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import Slider from 'react-slick';
import {
	AiFillHtml5,
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
} from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { BiCopyright } from 'react-icons/bi';

export default function Home() {
	const [navBar, setNavbar] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [hamburgerActive, setHamburgerActive] = useState(false);
	const [styleMessage, setStyleMessage] = useState(false);

	let menuRef = useRef();

	useEffect(() => {
		let menuHandler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setHamburgerActive(false);
			}
		};

		document.addEventListener('mousedown', menuHandler);

		window.onscroll = function () {
			const header = document.querySelector('header');
			const fixedNav = header.offsetTop;

			if (window.pageYOffset > fixedNav) {
				setNavbar(true);
			} else {
				setNavbar(false);
			}
		};

		const darkToggle = document.getElementById('dark-toggle');
		let darkToggleHandler = () => {
			if (darkToggle.getAttribute('data-dark') == 1) {
				localStorage.theme = 'light';
			} else {
				localStorage.theme = 'dark';
			}
		};

		darkToggle.addEventListener('click', darkToggleHandler);

		if (localStorage.theme === 'dark') {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}

		return () => {
			document.removeEventListener('mousedown', menuHandler);
			document.removeEventListener('click', darkToggleHandler);
		};
	}, []);

	const handleChangeMessage = (event) => {
		event.target.value.length > 0
			? setStyleMessage(true)
			: setStyleMessage(false);
	};

	const settings = {
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<Head>
				<title>Naufal Dev</title>
				<meta name="description" content="Portfolio Naufal Dev" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/naufal.ico" />
			</Head>
			<div className="bg-white text-slate-500 dark:bg-dark dark:text-light">
				<header
					ref={menuRef}
					className={`absolute top-0 left-0 z-10 flex w-full items-center bg-transparent lg:px-40 ${
						navBar
							? `${
									darkMode ? 'navbar-fixed-dark' : 'navbar-fixed'
							  } bg-white bg-opacity-70 backdrop-blur-sm dark:bg-dark dark:bg-opacity-50`
							: ''
					} `}
				>
					<div className="container">
						<div className="relative flex items-center justify-between">
							<div className="px-4 lg:px-0">
								<a
									href="#home"
									className="block py-6 text-lg font-bold text-primary uppercase font-burtons"
								>
									naufal dev
								</a>
							</div>
							<div className="flex items-center px-4 lg:px-0">
								<button
									id="hamburger"
									name="hamburger"
									type="button"
									className={`absolute right-4 block lg:hidden ${
										hamburgerActive ? 'hamburger-active' : ''
									}`}
									onClick={() => setHamburgerActive(!hamburgerActive)}
								>
									<span
										className={`my-2 block h-[2px] w-[30px] bg-dark dark:bg-white origin-top-left transition duration-300 ease-in-out`}
									></span>
									<span
										className={`my-2 block h-[2px] w-[30px] bg-dark dark:bg-white transition duration-300 ease-in-out`}
									></span>
									<span
										className={`my-2 block h-[2px] w-[30px] bg-dark dark:bg-white origin-bottom-left transition duration-300 ease-in-out`}
									></span>
								</button>

								<nav
									id="nav-menu"
									className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
										!hamburgerActive ? 'hidden' : ''
									}`}
								>
									<ul className="block lg:flex">
										<li className="group">
											<a
												href="#home"
												className="mx-8 lg:mx-7 flex py-2 text-base text-dark dark:text-white group-hover:text-primary"
											>
												Beranda
											</a>
										</li>
										<li className="group">
											<a
												href="#about"
												className="mx-8 lg:mx-7 flex py-2 text-base text-dark dark:text-white group-hover:text-primary"
											>
												Tentang Saya
											</a>
										</li>
										<li className="group">
											<a
												href="#projects"
												className="mx-8 lg:mx-7 flex py-2 text-base text-dark dark:text-white group-hover:text-primary"
											>
												Projects
											</a>
										</li>
										<li className="group">
											<a
												href="#timeline"
												className="mx-8 lg:mx-7 flex py-2 text-base text-dark dark:text-white group-hover:text-primary"
											>
												Timeline
											</a>
										</li>
										<li className="group">
											<a
												href="#kontak"
												className="mx-8 lg:mx-7 flex py-2 text-base text-dark dark:text-white group-hover:text-primary"
											>
												Kontak
											</a>
										</li>
										<li className="mt-3 flex items-center ml-8 mr-8 lg:mr-0 lg:mt-0 justify-between">
											<div className="flex">
												<input
													type="checkbox"
													className="hidden"
													id="dark-toggle"
													data-dark={darkMode ? '1' : '0'}
													onClick={() => setDarkMode(!darkMode)}
												/>
												<label htmlFor="dark-toggle">
													<div className="flex justify-between h-6 w-11 cursor-pointer items-center rounded-full bg-dark dark:bg-white p-[3px]">
														<div
															className={`${
																darkMode ? 'toggle-circle' : ''
															} h-[18px] w-[18px] rounded-full bg-white dark:bg-dark transition duration-300 ease-in-out`}
														></div>
														{darkMode ? (
															<BsMoonStarsFill
																className={`text-moon transition duration-300 ease-in-out ${
																	darkMode ? 'min-toggle-circle' : ''
																}`}
															/>
														) : (
															<BsBrightnessHighFill
																className={`text-brightness transition duration-300 ease-in-out ${
																	darkMode ? 'min-toggle-circle' : ''
																}`}
															/>
														)}
													</div>
												</label>
											</div>
											<div className="w-6 h-6 rounded-full overflow-hidden border-2 border-dark dark:border-white lg:ml-4 cursor-pointer hover:scale-110 transition duration-300">
												<Image src={flagid} alt="bendera indonesia" />
											</div>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</header>
				<section
					id="home"
					className="px-4 lg:px-0 flex items-center min-h-screen"
				>
					<div className="container">
						<div className="text-center">
							<h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-medium">
								Muhammad Naufal
							</h1>
							<h2 className="text-xl md:text-2xl text-dark dark:text-white font-semibold">
								Web Developer
							</h2>
						</div>
						<div className="mx-auto w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-slate-700 rounded-full overflow-hidden mt-6 border-2 dark:border-white">
							<Image src={gambar1} priority alt="Naufal Dev Profile Picture" />
						</div>
						<div className="text-center mt-3">
							<a
								href="#kontak"
								className="bg-primary py-2 px-4 text-sm lg:text-base rounded-lg text-white inline-block mt-4 font-medium hover:opacity-80 shadow shadow-primary"
							>
								Hire Me
							</a>
						</div>
					</div>
				</section>

				<section id="about" className="py-24 px-4">
					<div className="container">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/3 lg:w-1/2 mb-4 md:mb-0 md:pr-4">
								<Image
									src={gambar2}
									alt="Laptop"
									className="w-full lg:w-[600px] rounded-lg mx-auto shadow-lg"
								/>
							</div>
							<div className="w-full md:w-2/3 lg:w-1/2">
								<h1 className="relative text-xl lg:text-3xl text-primary mb-7 lg:mb-6 uppercase before:content-[''] before:absolute before:w-10 before:h-[2px] before:bg-primary before:top-12 before:left-0 after:content-[''] after:absolute after:w-20 after:h-[2px] after:bg-primary after:top-10 after:left-0">
									tentang saya
								</h1>
								<h2 className="text-3xl lg:text-5xl text-dark dark:text-white mb-4">
									I&apos;m Naufal
								</h2>
								<p className="text-base lg:text-lg text-slate-700 dark:text-light text-justify">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam, adipisci aperiam. Animi, iure dolores quisquam debitis
									voluptatibus vitae culpa sed dolorum perspiciatis, fugit illum
									quidem ratione commodi veniam placeat maiores. Excepturi modi
									nemo molestiae rem earum aut veritatis nam, iste doloremque
									dolores autem, incidunt blanditiis eaque repudiandae, fugit
									minus tenetur?
								</p>
								<a
									href="#"
									className="bg-primary py-2 px-4 text-sm lg:text-base rounded-lg text-white inline-block mt-4 font-medium hover:opacity-80 shadow-md"
								>
									Download CV{' '}
									<BsFileEarmarkText className="inline-block mb-1" />
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="skills" className="dark:bg-slate-500 px-4">
					<div className="container py-4">
						<Slider {...settings}>
							<div className="slide px-4">
								<Image src={logo1} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo2} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo3} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo4} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo5} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo6} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo7} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo8} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo9} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo10} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo11} alt="logos" className="mx-auto" />
							</div>
							<div className="slide px-4">
								<Image src={logo12} alt="logos" className="mx-auto" />
							</div>
						</Slider>
					</div>
				</section>

				<section id="projects" className="pt-24 px-4">
					<div className="container">
						<div className="flex justify-center mb-4">
							<h1
								className={`relative text-xl lg:text-3xl flex text-primary mb-14 uppercase before:content-[''] before:absolute before:w-10 before:h-[2px] before:bg-primary before:top-12 after:content-[''] after:absolute after:w-20 after:h-[2px] after:bg-primary after:top-10`}
							>
								Projects Saya
							</h1>
						</div>
						<div className="flex flex-wrap w-full justify-center gap-10">
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white truncate">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="shadow-lg dark:shadow-md rounded overflow-hidden w-full md:w-[340px] lg:w-[350px] dark:shadow-white">
								<div className="w-full h-[250px] sm:h-[350px] image-card1"></div>
								<div className="px-4 pt-2 pb-6">
									<h1 className="text-lg lg:text-xl mb-3 font-semibold text-dark dark:text-white">
										Website Kocak Aja
									</h1>
									<div className="flex flex-wrap gap-1">
										<div className="bg-[#E34F26] text-sm lg:text-base px-3 py-1 text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<AiFillHtml5 />
												html
											</span>
										</div>
										<div className="bg-[#1572B6] px-3 py-1 text-sm lg:text-base text-white rounded-lg uppercase font-medium">
											<span className="flex h-full items-center gap-1">
												<FaCss3Alt />
												css
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="timeline"
					className="timeline pt-24 flex flex-col items-center px-4"
				>
					<h1
						className={`relative text-xl lg:text-3xl flex text-primary mb-14 uppercase before:content-[''] before:absolute before:w-10 before:h-[2px] before:bg-primary before:top-12 after:content-[''] after:absolute after:w-20 after:h-[2px] after:bg-primary after:top-10`}
					>
						Timeline
					</h1>
					<div className="w-full lg:w-1/2">
						<ul>
							<li className="relative flex items-baseline gap-6 pb-5">
								<div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										className="bi bi-circle-fill fill-primary"
										viewBox="0 0 16 16"
									>
										<circle cx="8" cy="8" r="8" />
									</svg>
								</div>
								<div>
									<p className="text-sm lg:text-base text-primary font-medium">
										18-8-2022
									</p>
									<p className="mt-1 text-slate-700 dark:text-light text-base lg:text-lg">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Maiores incidunt blanditiis dignissimos, enim earum
										mollitia.
									</p>
								</div>
							</li>
							<li className="relative flex items-baseline gap-6 pb-5">
								<div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										className="bi bi-circle-fill fill-primary"
										viewBox="0 0 16 16"
									>
										<circle cx="8" cy="8" r="8" />
									</svg>
								</div>
								<div>
									<p className="text-sm lg:text-base text-primary font-medium">
										18-8-2022
									</p>
									<p className="mt-1 text-slate-700 dark:text-light text-base lg:text-lg">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magni fugit, iusto animi nihil officiis odio autem harum,
										rem eaque dignissimos consequatur voluptas optio ab! Commodi
										totam autem sequi modi sunt nihil rerum quae ex, nam eos
										iste cumque a delectus.
									</p>
								</div>
							</li>
							<li className="relative flex items-baseline gap-6 pb-5">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										className="bi bi-circle-fill fill-primary"
										viewBox="0 0 16 16"
									>
										<circle cx="8" cy="8" r="8" />
									</svg>
								</div>
								<div>
									<p className="text-sm lg:text-base text-primary font-medium">
										18-8-2022
									</p>
									<p className="mt-1 text-slate-700 dark:text-light text-base lg:text-lg">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Corporis placeat quod aliquid aliquam ipsum! Quae soluta
										recusandae exercitationem, possimus quisquam eveniet
										explicabo expedita? Ipsa, deserunt quo quas officiis dolorem
										optio.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</section>

				<section className="pt-24 flex items-center flex-col px-4" id="kontak">
					<h1
						className={`relative text-xl lg:text-3xl flex text-primary mb-14 uppercase before:content-[''] before:absolute before:w-10 before:h-[2px] before:bg-primary before:top-12 after:content-[''] after:absolute after:w-20 after:h-[2px] after:bg-primary after:top-10`}
					>
						Kontak Saya
					</h1>
					<div className="w-full lg:w-1/3">
						<div className="relative w-full h-[45px] lg:h-[50px] mb-6">
							<input
								type="text"
								className="absolute h-full w-full outline-none border border-solid border-slate-400 rounded-lg transition-all duration-200 ease-linear px-4 peer focus:border-primary focus:ring-2 valid:border-primary valid:ring-2 tracking-wide dark:text-white dark:bg-dark"
								required
							/>
							<label className="absolute text-sm lg:text-base text-light dark:text-white top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out left-4 peer-focus:top-0 peer-focus:bg-white dark:peer-focus:bg-dark peer-focus:px-1 peer-focus:text-primary peer-valid:top-0 peer-valid:bg-white dark:peer-valid:bg-dark peer-valid:px-1 peer-valid:text-primary tracking-wide">
								Nama
							</label>
						</div>
						<div className="relative w-full h-[45px] lg:h-[50px] mb-6">
							<input
								type="text"
								className="absolute h-full w-full outline-none border border-solid border-slate-400 rounded-lg transition-all duration-200 ease-linear px-4 peer focus:border-primary focus:ring-2 valid:border-primary valid:ring-2 tracking-wide dark:text-white dark:bg-dark"
								required
							/>
							<label className="absolute text-sm lg:text-base text-light dark:text-white top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out left-4 peer-focus:top-0 peer-focus:bg-white dark:peer-focus:bg-dark peer-focus:px-1 peer-focus:text-primary peer-valid:top-0 peer-valid:bg-white dark:peer-valid:bg-dark peer-valid:px-1 peer-valid:text-primary tracking-wide">
								Email
							</label>
						</div>
						<div className="relative w-full h-[135px] lg:h-[150px] mb-6">
							<textarea
								id="pesan"
								name="pesan"
								onChange={handleChangeMessage}
								className={`absolute h-full w-full outline-none border border-solid rounded-lg transition-all duration-200 ease-linear px-4 peer focus:border-primary focus:ring-2 dark:text-white dark:bg-dark ${
									!styleMessage
										? 'border-light ring-0'
										: 'border-primary ring-2'
								} tracking-wide py-3`}
							></textarea>
							<label
								className={`absolute text-sm lg:text-base -translate-y-1/2 transition-all duration-200 ease-in-out left-4 bg-white peer-focus:top-0  peer-focus:px-1 peer-focus:text-primary dark:peer-focus:bg-dark dark:bg-dark ${
									!styleMessage
										? 'text-light dark:text-white top-[15%] px-0 '
										: 'top-0  px-1 text-primary dark:bg-dark'
								} tracking-wide`}
							>
								Pesan
							</label>
						</div>
						<a
							href="#"
							className="bg-primary text-sm lg:text-base py-2 px-4 rounded-lg text-white inline-block font-medium hover:opacity-80 shadow-md"
						>
							Kirim Pesan <FaRegPaperPlane className="inline-block mb-1" />
						</a>
					</div>
				</section>

				<a
					href="#home"
					className={`fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-[9999] ${
						!navBar ? 'hidden' : ''
					} w-12 h-12 md:h-13 md:w-13 lg:h-14 lg:w-14 rounded-full bg-primary p-4 hover:animate-pulse animate-bounce flex justify-center items-center text-white`}
					id="to-top"
				>
					<div>
						<RiArrowUpSLine className="text-4xl md:text-5xl" />
					</div>
				</a>

				<section className="pt-24 dark:before:content-[''] dark:before:absolute dark:before:w-full dark:before:h-[1px] dark:before:bg-white ">
					<div className="pt-10 pb-16 lg:pt-16 lg:pb-24 bg-sky-400 dark:bg-primary">
						<div className="flex items-center flex-col">
							<h1 className="font-burtons text-xl lg:text-3xl uppercase text-white dark:text-slate-100 pb-3 lg:pb-4">
								Naufal Dev
							</h1>
							<div className="flex flex-wrap w-full justify-center gap-4 lg:gap-6 pb-5 lg:pb-6">
								<div className="bg-[#E4405F] w-8 h-8 lg:w-10 lg:h-10 rounded-full flex justify-center items-center hover:cursor-pointer shadow hover:scale-110 transition duration-200 ease-linear">
									<AiOutlineInstagram className="text-xl lg:text-2xl text-white dark:text-slate-100" />
								</div>
								<div className="bg-[#181717] w-8 h-8 lg:w-10 lg:h-10 rounded-full flex justify-center items-center hover:cursor-pointer shadow hover:scale-110 transition duration-200 ease-linear">
									<AiOutlineGithub className="text-xl lg:text-2xl text-white dark:text-slate-100" />
								</div>
								<div className="bg-[#0A66C2] w-8 h-8 lg:w-10 lg:h-10 rounded-full flex justify-center items-center hover:cursor-pointer shadow hover:scale-110 transition duration-200 ease-linear">
									<AiOutlineLinkedin className="text-xl lg:text-2xl text-white dark:text-slate-100" />
								</div>
							</div>
							<span className="text-white flex items-center dark:text-slate-100 text-sm lg:text-base font-normal tracking-wide">
								<BiCopyright /> Naufaldev. All rights reserved
							</span>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
