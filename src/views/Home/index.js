import React from "react";
import "./style.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className="bottom_section">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="onetapaway_wrapper">
									<h6>ANYWHERE. ANYTIME. ANYDEVICE.</h6>
									<h1>One tap away</h1>
									<p>
										Our platform allows you to remotely
										access your workflows and documents from
										your iOS devices - mobile, tablet,
										laptop or desktop.
									</p>
									<button className="btn btn_purpel">
										Try it now!
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="img_wrap">
						<img src="/images/footerTransparent.png" />
					</div>
				</div>
			</>
		);
	}
}
export default Home;
