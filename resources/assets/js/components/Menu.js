import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
      <div className="container menu_wrapper">
        <div className="row">
          <nav className="navbar navbar-default col-md-12 menu_subwrapper">
            <div className="navbar-header col-md-3">
                <a className="navbar-brand logo col-md-12" href="/">
                  Olena Varchuk<br/>
                </a>
            </div>
            <div className="container-fluid col-md-6">
              <ul className="nav navbar-nav nav_menu col-md-12">
                <li className="active"><Link to="/home">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                {/*<li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio
                  <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Wedding</a></li>
                    <li><a href="#">Nature</a></li>
                    <li><a href="#">People</a></li>
                  </ul>
                </li>*/}
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="social_wrapper col-md-3">
              <div className="px500_icon col-md-3">
                <a className="col-md-12" id="pixels" href="#">
                  <Px500Icon iconTitle="Px500Icon" width="15" height="44"/>
                </a>
              </div><div className="pinterest_icon col-md-3">
                <a className="col-md-12" id="pinterest" href="#">
                  <PinterestIcon iconTitle="PinterestIcon" width="15" height="44"/>
                </a>
              </div>
              <div className="facebook_icon col-md-3">
                <a className="col-md-12" id="facebook" href="#">
                  <FacebookIcon iconTitle="FacebookIcon" width="15" height="44"/>
                </a>
              </div>
              <div className="instagram_icon col-md-3">
                <a className="col-md-12" id="instagram" href="#">
                  <InstagramIcon iconTitle="InstagramIcon" width="15" height="44"/>
                </a>
              </div>
            </div>
          </nav>
        </div>
          <div>

          </div>
      </div>
    )

const FacebookIcon = React.createClass({
  getDefaultProps() {
    return {
      width: '25',
      height: '44'
    };
  },
 render() {
   return (
     <svg className="facebook_svg" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 15 15" aria-labelledby={this.props.iconTitle}>
        <title id={this.props.iconTitle}>
          link facebook
        </title>
        <path fill={this.props.bookfill} d="M11.2,0H9.3C7.1,0,5.7,1.4,5.7,3.7v1.7h-2c-0.2,0-0.3,0.1-0.3,0.3v2.5c0,0.2,0.1,0.3,0.3,0.3h2v6.2
        C5.7,14.9,5.8,15,6,15h2.6c0.2,0,0.3-0.1,0.3-0.3V8.5h2.3c0.2,0,0.3-0.1,0.3-0.3V5.7c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1
        H8.9V4c0-0.7,0.2-1,1.1-1h1.3c0.2,0,0.3-0.1,0.3-0.3V0.3C11.6,0.1,11.4,0,11.2,0z"/>
      </svg>
   )
 }
});

const InstagramIcon = React.createClass({
  getDefaultProps() {
    return {
      width: '25',
      height: '44'
    };
  },
 render() {
   return (
     <svg className="instagram_svg" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 15 15" aria-labelledby={this.props.iconTitle}>
        <title id={this.props.iconTitle}>
          link Instagram
        </title>
        <path fill={this.props.bookfill} d="M1.9,0H13c1.1,0,2,0.8,2,1.9V13c0,1.1-0.9,1.9-1.9,1.9H1.9C0.9,15,0,14.2,0,13.1V1.9C0,0.8,0.9,0,1.9,0L1.9,0z
         M10.9,1.7c-0.4,0-0.7,0.3-0.7,0.7V4c0,0.4,0.3,0.7,0.7,0.7h1.7c0.4,0,0.7-0.3,0.7-0.7V2.3c0-0.4-0.3-0.7-0.7-0.7h-1.7V1.7z
         M13.3,6.3H12c0.1,0.4,0.2,0.8,0.2,1.3c0,2.5-2.1,4.5-4.7,4.5s-4.7-2-4.7-4.5c0-0.4,0.1-0.9,0.2-1.3H1.7v6.3c0,0.3,0.3,0.6,0.6,0.6
        h10.4c0.3,0,0.6-0.3,0.6-0.6V6.3L13.3,6.3z M7.5,4.5c-1.7,0-3,1.3-3,2.9s1.3,2.9,3,2.9s3-1.3,3-2.9S9.2,4.5,7.5,4.5z"/>
      </svg>
   )
 }
});

const Px500Icon = React.createClass({
  getDefaultProps() {
    return {
      width: '25',
      height: '44'
    };
  },
 render() {
   return (
     <svg className="pixels_svg" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 24 24" aria-labelledby={this.props.iconTitle}>
        <title id={this.props.iconTitle}>
          link 500 px
        </title>
        <path fill={this.props.bookfill} d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.538 13.882l.104.267c.197.468.48.888.84 1.248.362.36.781.645 1.25.842.484.205.999.309 1.528.309.53 0 1.045-.104 1.528-.309.469-.197.889-.481 1.249-.842.362-.36.644-.78.843-1.248.205-.484.309-.999.309-1.529s-.104-1.044-.309-1.529c-.199-.467-.48-.888-.843-1.248-.359-.36-.78-.644-1.249-.842-.483-.205-.998-.309-1.528-.309-.536 0-1.073.107-1.55.309-.382.162-1.029.578-1.406.968l-.002-3.23h5.43c.198-.001.198-.278.198-.369s0-.367-.198-.369h-5.872c-.16 0-.26.133-.26.256v4.55c0 .146.184.253.354.29.332.071.408-.035.488-.148l.012-.015c.124-.185.512-.575.516-.578.605-.605 1.414-.938 2.277-.938.861 0 1.666.333 2.271.938.607.606.941 1.411.941 2.265 0 .856-.332 1.661-.937 2.265-.596.597-1.429.938-2.285.938-.579 0-1.14-.154-1.62-.446l.004-2.767c0-.369.16-.77.428-1.073.307-.348.729-.538 1.19-.538.447 0 .863.17 1.174.478.308.305.477.712.477 1.146 0 .924-.727 1.648-1.654 1.648-.18 0-.504-.079-.518-.083-.188-.056-.268.204-.293.29-.102.33.05.395.082.405.299.092.494.11.752.11 1.309 0 2.375-1.066 2.375-2.377 0-1.301-1.064-2.358-2.375-2.358-.641 0-1.242.245-1.695.69-.432.423-.678.988-.678 1.551v.014c-.003.07-.005 1.729-.006 2.272-.246-.273-.492-.692-.652-1.119-.062-.167-.206-.138-.402-.077-.085.026-.345.105-.288.292zm2.793-.647c.002.079.073.149.117.19l.014.014c.074.073.146.11.211.11l.1-.036.439-.443.415.413.128.065c.066 0 .139-.039.214-.116.18-.183.09-.281.046-.329l-.419-.419.437-.441c.098-.104.012-.214-.072-.299-.123-.123-.241-.154-.316-.084l-.437.436-.44-.44-.084-.034c-.059 0-.127.04-.207.118-.135.136-.164.229-.094.304l.441.438-.438.438-.055.115zm.959-5.949c-.703 0-1.451.143-2.001.38-.06.023-.095.07-.103.137-.008.062.01.145.051.253.035.087.126.318.301.251.562-.215 1.186-.333 1.752-.333.643 0 1.266.126 1.852.374.467.197.906.481 1.384.896l.109.045c.093 0 .183-.091.259-.177.128-.143.215-.262.091-.381-.456-.432-.957-.755-1.575-1.016-.671-.285-1.384-.429-2.12-.429zm3.791 8.688c-.084-.085-.156-.135-.219-.152-.064-.019-.123-.005-.166.04l-.041.042c-.438.436-.945.778-1.51 1.017-.586.248-1.207.373-1.848.373-.643 0-1.264-.125-1.85-.373-.564-.239-1.072-.581-1.508-1.017-.455-.455-.797-.962-1.018-1.509-.215-.535-.285-.936-.309-1.068l-.004-.029c-.03-.155-.172-.166-.377-.135-.087.013-.346.053-.322.24.07.433.191.861.363 1.266.274.649.668 1.233 1.168 1.733.502.5 1.084.894 1.732 1.168.675.285 1.389.43 2.126.43.734 0 1.449-.145 2.123-.429.648-.274 1.232-.668 1.734-1.169l.041-.044c.057-.061.106-.166-.115-.384z"/>
      </svg>
   )
 }
});

const PinterestIcon = React.createClass({
  getDefaultProps() {
    return {
      width: '25',
      height: '44'
    };
  },
 render() {
   return (
     <svg className="pinterest_svg" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 24 24" aria-labelledby={this.props.iconTitle}>
        <title id={this.props.iconTitle}>
          link Pinterest
        </title>
        <path fill={this.props.bookfill} d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-7 20c-.825 0-1.62-.125-2.369-.357.326-.531.813-1.402.994-2.098l.499-1.901c.261.498 1.023.918 1.833.918 2.414 0 4.152-2.219 4.152-4.976 0-2.643-2.157-4.62-4.933-4.62-3.452 0-5.286 2.317-5.286 4.841 0 1.174.625 2.634 1.624 3.1.151.07.232.039.268-.107l.222-.907c.019-.081.01-.15-.056-.23-.331-.4-.595-1.138-.595-1.825 0-1.765 1.336-3.472 3.612-3.472 1.965 0 3.341 1.339 3.341 3.255 0 2.164-1.093 3.663-2.515 3.663-.786 0-1.374-.649-1.185-1.446.226-.951.663-1.977.663-2.664 0-.614-.33-1.127-1.012-1.127-.803 0-1.448.831-1.448 1.943 0 .709.239 1.188.239 1.188s-.793 3.353-.938 3.977c-.161.691-.098 1.662-.028 2.294-2.974-1.165-5.082-4.06-5.082-7.449 0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
      </svg>
   )
 }
});


export default Menu;
