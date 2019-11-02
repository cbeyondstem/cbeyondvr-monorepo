import { Link } from "gatsby";
import * as React from "react";
import { Sidebar, Container } from "semantic-ui-react";

import { css } from "../themes/site-theme";
import { menuItems } from "./menuItems";

import { Authenticate } from "../components/SiteConfig";
import HeaderMenu from "../components/HeaderMenu";
import { FooterMenu } from "../components/FooterMenu";
import SidebarMenu from "../components/SidebarMenu";
import ScrollListenerDiv from "../components/ScrollListenerDiv";
import Footer from "../components/Footer";

import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";

import * as Prism from "prismjs";
import "../css/prism_dark.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/line-numbers/prism-line-numbers";

export interface LayoutProps {
  location: {
    pathname: string
  };
  children: any
  prolog?: React.ReactNode
  title?: React.ReactNode
}

class Layout extends React.Component<LayoutProps, {}> {
    public componentDidMount() {
      Prism.highlightAll();
    }
    public componentDidUpdate() {
      Prism.highlightAll();
    }
    public render() {
    const {prolog=null } = this.props;
    let headerStyle = css.headerMenu
    {/* note the use of className={css.pushableSticky} allowing to make sticky components
        (such as scrollama) to work. Indeed the css tag 'sticky' can only work if none
        of the parent have an 'overflow' tag set to values other than 'active' */}
    return (
        <Sidebar.Pushable className={css.pushableSticky}>
          <SidebarMenu
            pathname={this.props.location.pathname}
            items={menuItems}
          />
          {/* note the use of className={css.pushableSticky} also necessary in Pusher component */}
          <Sidebar.Pusher className={css.pushableSticky}>
            {prolog}
            <HeaderMenu
              pathname={this.props.location.pathname}
              items={menuItems}
              className={headerStyle}
              menuTitle={this.props.title}/>
            <Authenticate location={this.props.location}>
              {/* <ScrollListenerDiv className={css.headerMenuContent}> */}
              {this.props.children}
              {/* </ScrollListenerDiv> */}
            </Authenticate>
            <FooterMenu
              pathname={this.props.location.pathname}
              items={menuItems}
              className={css.footerMenu}
              menuTitle={this.props.title}/>
          </Sidebar.Pusher>
          <Footer/>
        </Sidebar.Pushable>
    );
  };
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location = {this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
