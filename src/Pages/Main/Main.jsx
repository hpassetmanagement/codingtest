import React, { useState } from "react";
import { Card, TextField } from "@mui/material";
import styles from "./Main.module.css";
import Arrow from "/src/Assets/Logo/right-arrow.svg";
import Footer from "../Footer/Footer";
import Maps from "/src/Assets/Logo/maps.png";

const DataCard = [
	{ value: "8,23T", title: "Asset Under Management", color: "#F1F1F1" },
	{ value: "8,23T", title: "Asset Under Management", color: "#FFFFFF" },
	{ value: "8,23T", title: "Asset Under Management", color: "#002D74" },
];

const Products = [
	{
		name: "All",
		products: [
			{
				value: "RDUM",
				market: "HPAM Ultima Money Market",
			},

			{
				value: "RDUM",
				market: "HPAM Ultima Money Market",
			},

			{
				value: "RDUM",
				market: "HPAM Ultima Money Market",
			},

			{
				value: "RDUM",
				market: "HPAM Ultima Money Market",
			},
		],
	},
	{
		name: "Money Market",
		products: [],
	},
	{
		name: "Campuran",
		products: [],
	},
	{
		name: "Fixed Income",
		products: [],
	},
	{
		name: "Equity",
		products: [],
	},
];

const Contact = [
	{
		name: "Media Relations",
		contact: "hello@hpam.co.id",
	},
	{
		name: "Investor Relations",
		contact: "investor@hpam.co.id",
	},
	{
		name: "Customer Service",
		contact: "cs@hpam.co.id",
	},
];

export default function Main() {
	const [activeBtn, setActiveBtn] = useState("All");

	return (
		<div className={styles.mainLayout}>
			<div className={styles.titleContent}>
				<div className={styles.textTitle}>Lorem Ipsum Dolor Sit</div>
				<div className={styles.textDesc}>Lorem Ipsum Dolor Sit</div>
			</div>
			<div>
				<Card style={{ padding: "140px 62px 112px 62px" }}>
					<div style={{ color: "#B9B9B9" }}>Lorem Ipsum Dolor Sit</div>
					<div className={styles.textTitle} style={{ color: "#FFFFFF" }}>
						What we are?
					</div>
					<div
						className={styles.textDesc}
						style={{ color: "#FFFFFF", maxWidth: 460, paddingTop: 16 }}
					>
						Mauris bibendum, odio sit amet blandit luctus, ex ex ultrices massa,
						id aliquet dui justo non sapien. Vestibulum hendrerit efficitur
						justo sit amet tincidunt. Nunc ut elementum risus.
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							paddingTop: "64px",
						}}
					>
						<div style={{ color: "#50BFA5", fontSize: "16px" }}>SEE MORE </div>
						<div style={{ paddingLeft: "18px", paddingTop: "1px" }}>
							<Arrow />
						</div>
					</div>
				</Card>
				<hr
					style={{
						borderColor: "#EB0029",
						marginTop: 0,
						backgroundColor: "#EB0029",
						height: 2,
					}}
				/>
			</div>
			<div className={styles.data} style={{ padding: "162px 0px 0px" }}>
				<div className={styles.textTitle}>
					We’ve helped our investors in a big way.
				</div>
				<div className={styles.textDesc} style={{ paddingTop: 14 }}>
					Mauris bibendum, odio sit amet blandit luctus, ex ex ultrices massa,
					id aliquet dui justo non sapien
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						maxWidth: "1200px",
						margin: "auto",
						paddingTop: "80px",
					}}
				>
					{DataCard?.map((e, i) => {
						return (
							<Card
								key={i}
								style={{
									backgroundColor: `${e.color}`,
									maxHeight: "200px",
									textAlign: "end",
									padding: "36px 32px 36px",
									maxWidth: "400px",
									width: "100%",
									margin: "auto",
								}}
							>
								<Arrow className={styles.arrowUp} />
								<div
									className={styles.historyData}
									style={{
										color: `${e.color === "#002D74" && "#FFFFFF"}`,
									}}
								>
									{e.value}
								</div>
								<div className={styles.historyTitle}>{e.title}</div>
							</Card>
						);
					})}
				</div>
			</div>
			<div className={styles.products}>
				<div
					style={{
						color: "#50BFA5",
						fontSize: "36px",
						lineHeight: "43px",
					}}
				>
					Best craft for you
				</div>
				<div className={styles.textTitle}>Discover Our Products</div>
				<div className={styles.productSelection}>
					{Products?.map((e, i) => {
						return (
							<div key={i}>
								<div
									style={{
										color: `${activeBtn === e?.name ? "#002D74" : "#B9B9B9"}`,
									}}
									onClick={() => {
										setActiveBtn(e?.name);
									}}
								>
									{e.name}
								</div>
							</div>
						);
					})}
				</div>
				<div className={styles.productContainer}>
					{Products?.map((e, i) => {
						return (
							<div>
								{e.name === activeBtn && (
									<div
										className={styles.scrollable}
										style={{
											overflowX: "scroll",
											maxWidth: "1280px",
										}}
									>
										<div className={styles.scrollContainer}>
											{e?.products?.map((x) => {
												return (
													<div style={{ paddingRight: 20 }}>
														<Card className={styles.productCard} key={i}>
															<Arrow />
															<div className={styles.productOption}>
																<div
																	style={{
																		position: "absolute",
																		bottom: 10,
																		right: 10,
																		textAlign: "end",
																	}}
																>
																	<div
																		className={styles.textTitle}
																		style={{
																			color: "#FFFFFF",
																			fontSize: 64,
																			paddingTop: 22,
																		}}
																	>
																		{x.value}
																	</div>
																	<div
																		style={{
																			color: "#50BFA5",
																			fontSize: "16px",
																			paddingTop: 18,
																			textAlign: "initial",
																		}}
																	>
																		{x.market}
																	</div>
																</div>
															</div>
														</Card>
													</div>
												);
											})}
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles.products}>
				<div
					style={{
						color: "#50BFA5",
						fontSize: "36px",
						lineHeight: "43px",
					}}
				>
					Wanna Invest?
				</div>
				<div className={styles.textTitle}>Contact Us</div>
				<div className={styles.maps}>
					<img src={Maps} style={{ maxWidth: "1200px", width: "100%" }}></img>
					<div className={styles.mapsInfo}>
						Tamara Center Lantai 7, Jl. Jend. Sudirman Kav. 24 Jakarta Pusat
					</div>
				</div>
				<div className={styles.contactContainer}>
					{Contact?.map((e, i) => {
						return (
							<Card
								key={i}
								className={styles.productCard}
								style={{
									backgroundColor: `${i % 2 === 0 ? "#F1F1F1" : "#002D74"}`,
								}}
							>
								<Arrow className={styles.arrowDiagonal} />
								<div className={styles.productOption}>
									<div
										style={{
											position: "absolute",
											bottom: 10,
											left: 10,
											textAlign: "start",
										}}
									>
										<div
											className={styles.contactInfo}
											style={{
												color: `${i % 2 === 0 ? "#002D74" : "#FFFFFF"}`,
											}}
										>
											{e.contact}
										</div>
										<div
											style={{
												color: "#50BFA5",
												fontSize: "16px",
												paddingTop: 18,
											}}
										>
											{e.name}
										</div>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
				<div className={styles.products}>
					<div style={{ fontWeight: "600", fontSize: "20px" }}>
						All investing involves risk.
					</div>
					<div
						style={{ paddingTop: "24px", fontSize: "20px", lineHeight: "24px" }}
					>
						Etiam et faucibus purus, vel fermentum libero. Proin eget egestas
						tortor. Orci varius natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Fusce lacus augue, fermentum at
						posuere a, luctus vel libero. In quis leo vulputate leo varius
						laoreet sed ac neque. Praesent finibus, risus quis scelerisque
						luctus, ipsum metus finibus diam, vitae egestas nulla libero a
						justo. Donec quis orci imperdiet, pretium neque id, pulvinar nisl.
						Pellentesque in egestas sapien, vitae auctor augue. Sed nisl tortor,
						convallis eu sollicitudin commodo, tempus sed urna. Praesent a nisi
						sed massa finibus luctus. Pellentesque vitae diam et dui lacinia
						egestas. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia curae; Vivamus facilisis pellentesque eros,
						in posuere diam tempor in. Fusce semper felis at vehicula commodo.
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
