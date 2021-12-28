import { NextPage } from "next";
import Link from "next/link";

const InvestorSidebar:NextPage = () => {
  return (
    <nav className="mt-20">
			<div className="flex flex-col justify-center mx-5">
				<Link passHref={true} href={"/dashboard/investor"}>
					<a
						className="nav_item"
					>
						<span className="text-left">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40" fill="none">
								<path d="M16.6667 21.6667H6.66667C6.22464 21.6667 5.80072 21.8423 5.48816 22.1548C5.17559 22.4674 5 22.8913 5 23.3333V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35H16.6667C17.1087 35 17.5326 34.8244 17.8452 34.5118C18.1577 34.1993 18.3333 33.7754 18.3333 33.3333V23.3333C18.3333 22.8913 18.1577 22.4674 17.8452 22.1548C17.5326 21.8423 17.1087 21.6667 16.6667 21.6667ZM15 31.6667H8.33333V25H15V31.6667ZM33.3333 5H23.3333C22.8913 5 22.4674 5.17559 22.1548 5.48816C21.8423 5.80072 21.6667 6.22464 21.6667 6.66667V16.6667C21.6667 17.1087 21.8423 17.5326 22.1548 17.8452C22.4674 18.1577 22.8913 18.3333 23.3333 18.3333H33.3333C33.7754 18.3333 34.1993 18.1577 34.5118 17.8452C34.8244 17.5326 35 17.1087 35 16.6667V6.66667C35 6.22464 34.8244 5.80072 34.5118 5.48816C34.1993 5.17559 33.7754 5 33.3333 5V5ZM31.6667 15H25V8.33333H31.6667V15ZM33.3333 26.6667H30V23.3333C30 22.8913 29.8244 22.4674 29.5118 22.1548C29.1993 21.8423 28.7754 21.6667 28.3333 21.6667C27.8913 21.6667 27.4674 21.8423 27.1548 22.1548C26.8423 22.4674 26.6667 22.8913 26.6667 23.3333V26.6667H23.3333C22.8913 26.6667 22.4674 26.8423 22.1548 27.1548C21.8423 27.4674 21.6667 27.8913 21.6667 28.3333C21.6667 28.7754 21.8423 29.1993 22.1548 29.5118C22.4674 29.8244 22.8913 30 23.3333 30H26.6667V33.3333C26.6667 33.7754 26.8423 34.1993 27.1548 34.5118C27.4674 34.8244 27.8913 35 28.3333 35C28.7754 35 29.1993 34.8244 29.5118 34.5118C29.8244 34.1993 30 33.7754 30 33.3333V30H33.3333C33.7754 30 34.1993 29.8244 34.5118 29.5118C34.8244 29.1993 35 28.7754 35 28.3333C35 27.8913 34.8244 27.4674 34.5118 27.1548C34.1993 26.8423 33.7754 26.6667 33.3333 26.6667ZM16.6667 5H6.66667C6.22464 5 5.80072 5.17559 5.48816 5.48816C5.17559 5.80072 5 6.22464 5 6.66667V16.6667C5 17.1087 5.17559 17.5326 5.48816 17.8452C5.80072 18.1577 6.22464 18.3333 6.66667 18.3333H16.6667C17.1087 18.3333 17.5326 18.1577 17.8452 17.8452C18.1577 17.5326 18.3333 17.1087 18.3333 16.6667V6.66667C18.3333 6.22464 18.1577 5.80072 17.8452 5.48816C17.5326 5.17559 17.1087 5 16.6667 5V5ZM15 15H8.33333V8.33333H15V15Z" fill="#555555"/>
							</svg>
						</span>
						<span className="mx-2 font-bold">Dashboard</span>
					</a>
				</Link>
				<Link passHref={true} href={"/dashboard/investor/profile"}>
					<a
						className="nav_item"
					>
						<span className="text-left">
							<svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M33.5353 29.8281C32.7984 28.0827 31.729 26.4973 30.3868 25.1602C29.0487 23.8192 27.4635 22.75 25.7188 22.0117C25.7032 22.0039 25.6876 22 25.672 21.9922C28.1056 20.2344 29.6876 17.3711 29.6876 14.1406C29.6876 8.78906 25.3517 4.45312 20.0001 4.45312C14.6485 4.45312 10.3126 8.78906 10.3126 14.1406C10.3126 17.3711 11.8946 20.2344 14.3282 21.9961C14.3126 22.0039 14.297 22.0078 14.2813 22.0156C12.5313 22.7539 10.961 23.8125 9.61338 25.1641C8.2724 26.5022 7.20324 28.0874 6.46494 29.832C5.73964 31.5401 5.34846 33.3713 5.3126 35.2266C5.31156 35.2683 5.31887 35.3097 5.3341 35.3486C5.34934 35.3874 5.3722 35.4228 5.40132 35.4526C5.43044 35.4825 5.46524 35.5062 5.50368 35.5224C5.54211 35.5386 5.58339 35.5469 5.6251 35.5469H7.96885C8.14072 35.5469 8.27744 35.4102 8.28135 35.2422C8.35947 32.2266 9.57041 29.4023 11.711 27.2617C13.9259 25.0469 16.8673 23.8281 20.0001 23.8281C23.1329 23.8281 26.0743 25.0469 28.2892 27.2617C30.4298 29.4023 31.6407 32.2266 31.7188 35.2422C31.7228 35.4141 31.8595 35.5469 32.0313 35.5469H34.3751C34.4168 35.5469 34.4581 35.5386 34.4965 35.5224C34.535 35.5062 34.5698 35.4825 34.5989 35.4526C34.628 35.4228 34.6509 35.3874 34.6661 35.3486C34.6813 35.3097 34.6886 35.2683 34.6876 35.2266C34.6485 33.3594 34.2618 31.543 33.5353 29.8281ZM20.0001 20.8594C18.2071 20.8594 16.5196 20.1602 15.2501 18.8906C13.9806 17.6211 13.2813 15.9336 13.2813 14.1406C13.2813 12.3477 13.9806 10.6602 15.2501 9.39062C16.5196 8.12109 18.2071 7.42188 20.0001 7.42188C21.7931 7.42188 23.4806 8.12109 24.7501 9.39062C26.0196 10.6602 26.7188 12.3477 26.7188 14.1406C26.7188 15.9336 26.0196 17.6211 24.7501 18.8906C23.4806 20.1602 21.7931 20.8594 20.0001 20.8594Z" fill="#555555"/>
							</svg>
						</span>
						<span className="mx-2 font-bold">
							Profile
						</span>
					</a>
				</Link>
				<Link passHref={true} href={"/dashboard/investor/interested-inventions"}>
					<a
						className="nav_item"
					>
						<span className="text-left">
							<svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M36.0547 11.0782C35.5311 9.8658 34.7761 8.76717 33.832 7.84378C32.8872 6.91763 31.7733 6.18163 30.5508 5.67581C29.2831 5.14922 27.9235 4.87968 26.5508 4.88284C24.625 4.88284 22.7461 5.41018 21.1133 6.40628C20.7227 6.64456 20.3516 6.90628 20 7.19143C19.6484 6.90628 19.2773 6.64456 18.8867 6.40628C17.2539 5.41018 15.375 4.88284 13.4492 4.88284C12.0625 4.88284 10.7188 5.14847 9.44922 5.67581C8.22266 6.18362 7.11719 6.91409 6.16797 7.84378C5.22264 8.76613 4.46749 9.86502 3.94531 11.0782C3.40234 12.3399 3.125 13.6797 3.125 15.0586C3.125 16.3594 3.39063 17.7149 3.91797 19.0938C4.35938 20.2461 4.99219 21.4414 5.80078 22.6485C7.08203 24.5586 8.84375 26.5508 11.0313 28.5703C14.6563 31.918 18.2461 34.2305 18.3984 34.3242L19.3242 34.918C19.7344 35.1797 20.2617 35.1797 20.6719 34.918L21.5977 34.3242C21.75 34.2266 25.3359 31.918 28.9648 28.5703C31.1523 26.5508 32.9141 24.5586 34.1953 22.6485C35.0039 21.4414 35.6406 20.2461 36.0781 19.0938C36.6055 17.7149 36.8711 16.3594 36.8711 15.0586C36.875 13.6797 36.5977 12.3399 36.0547 11.0782ZM20 31.8282C20 31.8282 6.09375 22.918 6.09375 15.0586C6.09375 11.0782 9.38672 7.85159 13.4492 7.85159C16.3047 7.85159 18.7813 9.44534 20 11.7735C21.2188 9.44534 23.6953 7.85159 26.5508 7.85159C30.6133 7.85159 33.9063 11.0782 33.9063 15.0586C33.9063 22.918 20 31.8282 20 31.8282Z" fill="#555555"/>
							</svg>
						</span>
						<span className="mx-4 font-bold">Interested Inventions</span>
					</a>
				</Link>
				<Link passHref={true} href={"/dashboard/investor/invested-inventions"}>
					<a
						className="nav_item"
						href="#"
					>
						<span className="text-left">
							<svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M35 23.3333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H16.6667V8.33333H8.33333V31.6667H31.6667V23.3333H35Z" fill="#555555"/>
								<path d="M34.9999 11.6667H28.3333V5H24.9999V11.6667H18.3333V15H24.9999V21.6667H28.3333V15H34.9999" fill="#555555"/>
							</svg>
						</span>
						<span className="mx-4 font-bold">Invested Inventions</span>
					</a>
				</Link>
				<a
					className="nav_item"
					href="#"
				>
					<span className="text-left">
						<svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.77789 6.66656H25.5557V17.5554H27.7779V6.66656C27.7779 6.07719 27.5438 5.51196 27.127 5.09521C26.7103 4.67846 26.145 4.44434 25.5557 4.44434H7.77789C7.18852 4.44434 6.62329 4.67846 6.20654 5.09521C5.78979 5.51196 5.55566 6.07719 5.55566 6.66656V33.3332C5.55566 33.9226 5.78979 34.4878 6.20654 34.9046C6.62329 35.3213 7.18852 35.5554 7.77789 35.5554H25.5557C26.145 35.5554 26.7103 35.3213 27.127 34.9046C27.5438 34.4878 27.7779 33.9226 27.7779 33.3332H7.77789V6.66656Z" fill="#555555"/>
							<path d="M31.2887 19.1998C31.0761 19.0178 30.8027 18.9226 30.5231 18.9334C30.2434 18.9442 29.9782 19.0602 29.7803 19.2581C29.5824 19.4559 29.4665 19.7212 29.4557 20.0008C29.4449 20.2805 29.54 20.5539 29.722 20.7665L33.4776 24.4442H17.3665C17.0718 24.4442 16.7892 24.5613 16.5808 24.7697C16.3724 24.978 16.2554 25.2607 16.2554 25.5553C16.2554 25.85 16.3724 26.1327 16.5808 26.341C16.7892 26.5494 17.0718 26.6665 17.3665 26.6665H33.4776L29.722 30.5109C29.6057 30.6105 29.5113 30.7331 29.4446 30.8709C29.3779 31.0088 29.3404 31.1589 29.3345 31.312C29.3286 31.465 29.3544 31.6176 29.4102 31.7602C29.4661 31.9027 29.5508 32.0322 29.6591 32.1405C29.7674 32.2488 29.8969 32.3335 30.0395 32.3894C30.182 32.4453 30.3346 32.471 30.4877 32.4651C30.6407 32.4592 30.7908 32.4217 30.9287 32.355C31.0665 32.2884 31.1891 32.1939 31.2887 32.0776L37.7776 25.6331L31.2887 19.1998Z" fill="#555555"/>
						</svg>
					</span>
					<span className="mx-4 font-bold">Sign Out</span>
				</a>
			</div>
		</nav>
  )
}

export default InvestorSidebar;