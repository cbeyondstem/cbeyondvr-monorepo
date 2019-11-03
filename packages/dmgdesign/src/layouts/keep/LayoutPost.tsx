import { Link } from "gatsby";
import * as _ from "lodash";
import * as React from "react";

import HeaderMenu from "../components/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu";
import ScrollListenerDiv from "../components/ScrollListenerDiv";
import Footer from "../components/Footer";

import PostMenuMobile from "../components/PostMenuMobile";
import PostMenu from "../components/PostMenu";
import PostHeadline from "../components/PostHeadline";

import { style } from "typestyle";
import { css, cssScroll } from "../themes/site-theme";
///<reference path="../types/react-scrollama.d.ts"/>
import { Scrollama, Step } from "../../plugins/react-scrollama/src/lib";

import {  Sidebar, Header, Segment, Image } from "semantic-ui-react";

import {Mdx} from "../types/graphql-types";

import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";

import * as Prism from "prismjs";
import "../css/prism_dark.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import { menuItems } from "./menuItems";
import { Authenticate } from "../components/SiteConfig";
export interface LayoutPostProps {
  location: {
    pathname: string;
  };
  post: Mdx;
  authorBioMdx?: JSX.Element;
  children: any;
}

class LayoutPost extends React.Component<LayoutPostProps, {}> {

  public componentDidMount() {
    Prism.highlightAll();
  }
  public componentDidUpdate() {
    Prism.highlightAll();
  }
  private renderWrappedChildren(children: React.ReactNode[]) : React.ReactNode{
    // Traverse through all children with pretty functional way :-)
    return React.Children.map(children, (child) => {

      // This is support for non-node elements (eg. pure text), they have no props
      if (!_.isObject(child)){
        return child;
      }
      let elem : React.ReactElement<any> = child as React.ReactElement<any>;
      if (_.startsWith(elem.props.id, "#")){
        elem = React.cloneElement(elem);
        elem.props.id = `${elem.props.id}2`;
      }

      // If current component has additional children, traverse through them as well!
      if (elem.props.children) {
        // You have to override also children here
        return React.cloneElement(elem, {
          children: this.renderWrappedChildren(elem.props.children),
        });
      }

      // Return new component
      return elem;
     },
    );
  }
  private isTablet = (): boolean => {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // console.log(`isTablet width=${width} ${width<=991}`)
    return (width <= 991);
  }
  public render() {
    // console.log('LAYOUT POST RENDER')
    const post = this.props.post;
    const authorBioMdx = this.props.authorBioMdx;
    const divCenteredClass = style({
      paddingTop: "1.5rem",
      textAlign: "center",
    });
    const cover = _.get(post, "frontmatter.image.childImageSharp.fixed", null );
    let Cover : React.ReactElement<any> = null;
    if (cover){
      Cover =
        <div className={divCenteredClass}>
          <Header size="huge">{post.fields.title}</Header>
          <Image fluid centered bordered
                src={cover.src}
                srcSet={cover.srcSet}
          />
        </div>;
    }else{
      Cover = <div className={divCenteredClass}>
        <Header size="huge">{post.fields.title}</Header>
      </div>;
    }

    // let childrenFix : React.ReactNode[][] = [
    //   this.props.children,
    //   this.renderWrappedChildren(this.props.children)
    // ]
    let bodyGen = (index: number) => {
      let body =
        <div className={style({minHeight: '500px' })}>
          <Segment><PostHeadline post={post} authorBioMdx={authorBioMdx}/></Segment>
          <Segment>{Cover}</Segment>
          <Segment>{this.props.children[index]}</Segment>
        </div>;

      if (index === 0 && post.tableOfContents && post.tableOfContents.items){
        body =
          <div className={`${cssScroll.scroller} ${style({minHeight: '500px' })}`}>
            <Scrollama
              offset={0.33}
              // onStepEnter={this.onStepEnter}
              // onStepExit={this.onStepExit}
              //debug
              >
              <Step data={10} key="scrollama_step_10">
                {/* !! body within scrollama's step must be enclosed by a div so that the reference works */}
                {body}
              </Step>
            </Scrollama>
          </div>;
      }
      return body;
    };
    let postMenu = null;
    if (post.tableOfContents && post.tableOfContents.items){
      postMenu =
        <div className={cssScroll.graphic}>
          <PostMenu post={this.props.post}/>
        </div>;
    }
    // let bodyMobile;
    // let bodyComputer;
    // if (this.isTablet()){
    //   bodyMobile = body;
    //   bodyComputer = null;
    // }else{
    //   bodyMobile = null;
    //   bodyComputer = body;
    // }
    return (
        <Sidebar.Pushable className={css.pushableSticky}>
          <SidebarMenu
            pathname={this.props.location.pathname}
            items={menuItems}
          />
          {/* Horizontal Top Sidebar for the local PostMenu
              active only in mobile mode (when scrolling up) */}

          <Sidebar.Pusher>
            {/* COMPUTER ONLY */}
            <HeaderMenu
              pathname={this.props.location.pathname}
              items={menuItems}
              onlydesktop={true}
              className={css.headerMenu}
            />
            <Authenticate className={`computer only large screen widescreen`} location={this.props.location}>
            <div className={`${cssScroll.main} computer only large screen widescreen`}>
              {bodyGen(0)}
              {postMenu}
            </div>
            </Authenticate>
            {/* MOBILE / TABLET ONLY */}
            <div className={`mobile only tablet only`}>
              <PostMenuMobile
                className={css.headerMenu}
                post={this.props.post}
              />
              <Authenticate className={`mobile only tablet only`} location={this.props.location}>
                {/* <ScrollListenerDiv className={css.headerMenuContent}> */}
                  {/* use the body with second version of id/bookmarks */}
                  {bodyGen(1)}
                {/* </ScrollListenerDiv> */}
              </Authenticate>
            </div>
          </Sidebar.Pusher>
          <Footer/>
        </Sidebar.Pushable>
    );
  };
};

export default LayoutPost;

export const withLayoutPost = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutPostProps> {
    render() {
      return (
        <LayoutPost location = {this.props.location} post={this.props.post}>
          <WrappedComponent {...this.props} />
        </LayoutPost>
      );
    }
  };
