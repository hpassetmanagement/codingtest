import React from "react";
import Location from "/src/Assets/Logo/location.svg";
import Instagram from "/src/Assets/Logo/instagramLogo.svg";
import Linkedin from "/src/Assets/Logo/linkedinLogo.svg";
import Youtube from "/src/Assets/Logo/youtubeLogo.svg";
import "./Footer.css";

export default function Footer() {
	return (
		<div>
			<div style={{ padding: "72px 0px 120px 0px" }}>
				<table style={{ maxWidth: "1200px", width: "100%" }}>
					<thead>
						<tr style={{ fontWeight: 600 }}>
							<td>PT Henan Putihrai Asset Management</td>
							<td>Bantuan</td>
							<td>Bantuan</td>
							<td>Bantuan</td>
						</tr>
					</thead>
					<tbody>
						<tr style={{ height: "90px" }}>
							<td>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Location />
									<div style={{ marginLeft: 24 }}>
										Tamara Center, 7th Floor
										<br /> Jl. Jend Sudirman Kav 24, Jakarta
									</div>
								</div>
							</td>
							<td>FAQ</td>
							<td>FAQ</td>
							<td>FAQ</td>
						</tr>
						<tr>
							<td></td>
							<td>Hubungi Kami</td>
							<td>Hubungi Kami</td>
							<td>Hubungi Kami</td>
						</tr>
						<tr>
							<td></td>
							<td>Syarat & Ketentuan</td>
							<td>Syarat & Ketentuan</td>
							<td>Syarat & Ketentuan</td>
						</tr>
						<tr>
							<td>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										paddingRight: 20,
									}}
								>
									<a href="https://www.instagram.com" target="_blank">
										<Instagram style={{ paddingRight: 22 }} />
									</a>
									<a href="https://www.linkedin.com" target="_blank">
										<Linkedin style={{ paddingRight: 22 }} />
									</a>
									<a href="https://www.youtube.com" target="_blank">
										<Youtube />
									</a>
								</div>
							</td>
							<td>Kebijakan Privasi</td>
							<td>Kebijakan Privasi</td>
							<td>Kebijakan Privasi</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
