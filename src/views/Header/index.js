import React from "react";
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import "./style.scss";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className="header">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Menu
						          theme="light"
						          mode="horizontal"
						          overflowedIndicator={<i className="fa fa-list"></i>}
						          className="header_wrap"
						        >
						          <Menu.Item key="/a" className="left_menu no_border" >
						            <Link to="/">
						              <p>param .network</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/b">
						            <Link to="/">
						              <p>Home</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/c">
						            <Link to="/">
						              <p>Solutions</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/d">
						            <Link to="/">
						              <p>Technology</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/e">
						            <Link to="/">
						              <p>Team</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/f" className="no_border" >
						            <Link to="/">
						            	<button className="btn btn_purpel">Get Started</button>
						            </Link>
						          </Menu.Item>
						        </Menu>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Header