
import React from 'react';


const Main_page = () => (
            <div className="container standart">
                <div className="row standart">
                    <div className="col-md-12 standart">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <p className="ab_center idea">
                                LOZUNG
                            </p>
                            <p className="ab_under_center idea">
                                BLA-BLA-BLA
                            </p>
                            <ol className="carousel-indicators">
                              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                              <li data-target="#myCarousel" data-slide-to="1"></li>
                              <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                  <img src ="/image/1.jpg" />
                                </div>
                                <div className="item">
                                  <img src ="/image/2.jpg" />
                                </div>

                                <div className="item">
                                 <img src ="/image/3.jpg" />
                                </div>
                              </div>


                              {/*<a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                              </a>
                              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                              </a>*/}
                        </div>
                        <div className="about">
                            <h1 className="title1">
                                 Somthink about me
                            </h1>
                            <p className="standart_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <p className="standart_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <div className="portfolio container">
                            <h1 className="title1">
                                Portfolio
                            </h1>
                            <div className="all_categories_portfolio">
                                <div className="row first_row">
                                    <div className="category_portfolio people_portfolio col-md-4">
                                        <a href="#">
                                            <img src="https://static1.squarespace.com/static/57ca48f9e3df282738dae219/t/59efc8476957da917f52e4a0/1508886629301/DSC_0277.jpg?format=500w"/>
                                            <div className="category_info">
                                                <h2>
                                                    People
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="category_portfolio nature_portfolio col-md-4">
                                        <a href="#">
                                            <img src="http://www.hotellilla.com/assets/images/sport/thmb/3.jpg"/>
                                            <div className="category_info">
                                                <h2>
                                                    Nature
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="category_portfolio city_portfolio col-md-4">
                                        <a href="#">
                                            <img src="https://nomadlist.com/assets/img/cities/dorobo-japan-500px.jpg"/>
                                            <div className="category_info">
                                                <h2>
                                                    City & Arhcitecture
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row second_row">
                                    <div className="category_portfolio abstract_portfolio col-md-4">
                                        <a href="#">
                                            <img src="http://cdn.instantshift.com/wp-content/uploads/2012/10/abstract-and-light-effect-tutorials-38.jpg"/>
                                            <div className="category_info">
                                                <h2>
                                                    Abstract
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="category_portfolio subject_portfolio col-md-4">
                                        <a href="#">
                                            <img src="https://sc01.alicdn.com/kf/HTB1CZquJVXXXXX6XFXXq6xXFXXXZ/COFFE-BEAN.jpg"/>
                                            <div className="category_info">
                                                <h2>
                                                    Subject
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects">
                            <h1 className="title1">My Project</h1>
                            <div id="projectCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active container">
                                        <div className="project row">
                                            <div className="col-md-5 standart_text-1">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                            <img className="col-md-7" src ="/image/1.jpg" />
                                        </div>
                                    </div>
                                    <div className="item container">
                                        <div className="project row">
                                            <div className="col-md-5 standart_text-1">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                            <img className="col-md-7" src ="/image/2.jpg" />
                                        </div>
                                    </div>

                                    <div className="item container">
                                        <div className="project row">
                                            <div className="col-md-5 standart_text-1">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum
                                                </p>
                                            </div>
                                            <img className="col-md-7" src ="/image/3.jpg" />
                                        </div>
                                    </div>
                                  </div>


                                  <a className="left carousel-control" href="#projectCarousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                  <a className="right carousel-control" href="#projectCarousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                    <span className="sr-only">Next</span>
                                  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

export default Main_page;
