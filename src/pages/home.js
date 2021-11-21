import React from 'react'

const home = () => {
    return (
        <div>
            
           
<div id="loader-wrapper">
    <div id="loading-center-absolute">
        <div class="object" id="object_four"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_one"></div>
    </div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>

</div>
 

<header class="header_wrap fixed-top">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg"> 
            <a class="navbar-brand animation" href="#" data-animation="fadeInDown" data-animation-delay="1s"> 
                <img class="logo_light" src="assets/images/logo.png" alt="logo" /> 
                <img class="logo_dark" src="assets/images/logo_dark.png" alt="logo" /> 
            </a>
            <button class="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s"> 
                <span class="ion-android-menu"></span> 
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <li class="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.1s">
                        <a data-toggle="dropdown" class="nav-link" href="#">Home</a>
                            <div class="dropdown-menu">
                                <ul class="list_none">

                                </ul>
                            </div>   
                    </li>
                    <li class="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a class="nav-link nav_item" href="#">About</a></li>

                    <li class="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a class="nav-link nav_item" href="#">Faq's</a></li>
                    <li class="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a class="nav-link nav_item" href="#">Contact</a></li>
                </ul>
                <ul class="navbar-nav nav_btn align-items-center">
                    <li class="animation" data-animation="fadeInDown" data-animation-delay="1.9s">
                        <div class="lng_dropdown">
                          <select name="countries" id="lng_select">
                            <option value='en' data-image="assets/images/eng.png" data-title="English">EN</option>
                            <option value='fn' data-image="assets/images/fn.png" data-title="France">FN</option>
                            <option value='us' data-image="assets/images/us.png" data-title="United States">US</option>
                          </select>
                        </div>
                    </li>
                    <li class="animation" data-animation="fadeInDown" data-animation-delay="2s"><a class="btn btn-default btn-radius nav_item" href="login.html">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
</header>



<section id="home_section" class="section_banner section_gradiant" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/banner_bg3.png">
    <div id="banner_bg_effect" class="banner_effect"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-sm-12 order-lg-first">
                <div class="banner_text text_md_center">
                    <h1 class="animation" data-animation="fadeInUp" data-animation-delay="1.1s">The Number of SmatEdge Contracts Keeps Rising</h1>
                    <p class="animation" data-animation="fadeInUp" data-animation-delay="1.3s">The smart contracts starts immediately after confirmed payment.  </p>
                    <div class="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.4s"> 
                        <a href="#whitepaper" class="btn btn-default page-scroll btn-radius nav-link">Deposit to account <i class="ion-ios-arrow-thin-right"></i></a> 
                        <a href="#" class="btn btn-default btn-radius">Buy Tron<i class="ion-ios-arrow-thin-right"></i></a> 
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 order-first">
                <div class="banner_inner res_md_mb_50 res_xs_mb_30">
                    <div class="tk_countdown box_shadow_none text-center animation" data-animation="fadeIn" data-animation-delay="1.1s">
                        <div class="banner_text tk_counter_inner">
                            <div class="tk_countdown_time border-0 animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2019/02/06 00:00:00"></div>
                            <div class="progress animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                            <div class="progress-bar progress-bar-striped gradient" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style={{width:'36%'}}> 36% </div>
                               {/* <!-- <span class="progress_label bg-white" style={{left: '30%'}}> <strong> 46 Smatedge </strong></span>
                                <span class="progress_label bg-white" style={{left: '75%'}}> <strong> 90, </strong></span>
                                <span class="progress_min_val">Sale Raised</span>
                                <span class="progress_max_val">Soft-caps</span>--> */}
                            </div>
                        	<span class="tk_ending_txt animation" data-animation="fadeInUp" data-animation-delay="1.4s">Deposit also through this channel</span>
                            <ul class="icon_list list_none d-flex justify-content-center">
                            	<li class="animation" data-animation="fadeInUp" data-animation-delay="1.5s"><i class="fa fa-cc-visa"></i></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.6s"><i class="fa fa-cc-mastercard"></i></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.7s"><i class="fa fa-bitcoin"></i></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.8s"><i class="fa fa-paypal"></i></li>
                            </ul>                        
                        </div>
                	</div>
                </div>
          	</div>
            <div class="col-xl-1">
            	<ul class="list_none social_icon banner_vr_social text-center res_md_mt_20">
                	<li class="animation" data-animation="fadeInRight" data-animation-delay="0.3s"><a href="#"><i class=" fa fa-send"></i></a></li>
                    <li class="animation" data-animation="fadeInRight" data-animation-delay="0.4s"><a href="#"><i class=" fa fa-facebook"></i></a></li>
                    <li class="animation" data-animation="fadeInRight" data-animation-delay="0.5s"><a href="#"><i class=" fa fa-twitter"></i></a></li>
                    <li class="animation" data-animation="fadeInRight" data-animation-delay="0.6s"><a href="#"><i class=" fa fa-google-plus"></i></a></li>
                    <li class="animation" data-animation="fadeInRight" data-animation-delay="0.7s"><a href="#"><i class=" fa fa-pinterest"></i></a></li>
                    <li class="animation" data-animation="fadeInRight" data-animation-delay="0.8s"><a href="#"><i class=" fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="row">
        	<div class="col-12">
            	<div class="divider large_divider"></div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
        	<div class="col-lg-3">
            	<h5 class="rate_title text_md_center animation" data-animation="fadeInUp" data-animation-delay="0.2s">Smartedge Rating Review :</h5>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            	<div class="review_box animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                	<div class="review_icon">
                    	<i class="fa fa-bar-chart"></i>
                    </div>
                    <div class="review_info">
                    	<h6>Investment rating</h6>
                        <span class="rating">4.5 <small>/ 5</small></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            	<div class="review_box animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                	<div class="review_icon">
                    	<i class="fa fa-users"></i>
                    </div>
                    <div class="review_info">
                    	<h6>Testimonial Total Rating</h6>
                        <span class="rating">4.3 <small>/ 5</small></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
            	{/* <!--<div class="review_box animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                	<div class="review_icon">
                    	<i class="fa fa-snowflake-o"></i>
                    </div> --> */}
                   {/* <!-- <div class="review_info">
                    	<h6>ICO Benc</h6>
                        <span class="rating">4.7 <small>/ 5</small></span>
                    </div> -->
                </div>--> */}
            </div>
        </div>
    </div>
</section>
{/* <!-- END SECTION BANNER --> */}

{/* <!-- START SECTION ABOUT US --> */}
<section id="about" class="small_pt small_pb">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
            	<div class="text-center">
                	<img class="animation" data-animation="zoomIn" data-animation-delay="0.2s" src="assets/images/about_img3.png" alt="aboutimg3"/> 
                </div>
                <div class="chart_icon text-center">
                	<img class="animation" data-animation="zoomIn" data-animation-delay="0.2s" src="assets/images/chart_icon.png" alt="aboutimg3"/> 
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
                <div class="title_default_light title_border">
                  <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">What is SmartContract</h4>
                  <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"> A smart contract is an agreement between two people in the form of computer code.They run on the blockchain, so they are stored on a public database and cannot be changed.The transaction that happened in a small contract are processed by the blockchain, which menans they can be sent automatically without third party. </p>
                  
                </div>
                <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" class="btn btn-default btn-radius video animation" data-animation="fadeInUp" data-animation-delay="1s">Know More <i class="ion-ios-arrow-thin-right"></i></a> 
            </div>
        </div>
    </div>
</section>
{/* <!-- END SECTION ABOUT US -->  */}

{/* <!-- START SECTION HOW IT WORKS --> */}
{/* <!--<section id="how_it_work" class="small_pt">
	<div class="container">
    	<div class="row">
        	<div class="col-lg-4">
            	<div class="title_default_light title_border">
                	<h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">How It Works?</h4>
                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions—ayments from one user to another on a decentralized network.</p>
                    <a href="#whitepaper" class="btn btn-default page-scroll btn-radius animation" data-animation="fadeInUp" data-animation-delay="0.6s">Whitepaper <i class="ion-ios-arrow-thin-right"></i></a>
                </div>
            </div>
            <div class="col-lg-8">
            	<div class="row">
                	<div class="col-lg-6">
                    	<div class="work_box res_md_mt_20">
                        	<div class="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                        		<i class="ion ion-android-download"></i>
                            </div>
                            <div class="work_inner">
                            	<h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Download a Wallet</h4>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin is received, stored, and sent using software known as a Bitcoin Wallet. Download the official Bitcoin Wallet for free.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    	<div class="work_box res_md_mt_20">
                        	<div class="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                        		<i class="ion-ios-locked"></i>
                            </div>
                            <div class="work_inner">
                            	<h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Safe & Secure</h4>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">We take careful measures to ensure that your bitcoin is as safe as possible. Offline storage provides an important security measure against theft or loss. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    	<div class="work_box mt-4">
                        	<div class="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                        		<i class="ion ion-android-cart"></i>
                            </div>
                            <div class="work_inner">
                            	<h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Buy & Sell</h4>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Blockchain works with exchange partners all around the world to make buying bitcoin in your wallet both a seamless and secure experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    	<div class="work_box mt-4">
                        	<div class="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                        		<i class="ion-android-exit"></i>
                            </div>
                            <div class="work_inner">
                            	<h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">A Better User Interface</h4>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin Core wallet has features most other wallets don't have. But if you don't need them, you can use several other wallets on top of Bitcoin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>->
<!-- START SECTION HOW IT WORKS --> */}







{/* <!-- END SECTION WHITEPAPER --> */}

{/* <!-- START SECTION FAQ --> */}
<section id="faq" class="small_pb small_pt">
	<div class="container">
    	<div class="row">
        	<div class="col-lg-8 col-md-12 offset-lg-2">
              <div class="title_default_light text-center">
                <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Have Any Questions?</h4>
                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context</p>
              </div>
            </div>
        </div>
        <div class="row">
        	<div class="col-lg-12 col-md-12">
            	<div class="tab_content">
                    <ul class="nav nav-pills tab_nav_s6 animation" id="pills-tab" role="tablist" data-animation="fadeInUp" data-animation-delay="0.5s">
                      <li class="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                        <a class="active" data-toggle="tab" href="#tab1">General</a>
                      </li>
                      <li class="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <a data-toggle="tab" href="#tab2">Pre-ICO & ICC </a>
                      </li>
                      <li class="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.7s">
                        <a data-toggle="tab" href="#tab3">ICO Tokens</a>
                      </li>
                      <li class="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                        <a data-toggle="tab" href="#tab4">Legal</a>
                      </li>
                    </ul>
                    <div class="tab-content half_tab">
                        <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                        	<div class="row">
                            	<div class="col-md-6">
                                	<div id="accordion1" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="headingOne">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is SmartEdge?</a> </h6>
                                          </div>
                                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                                            <div class="card-body"> SmartEdge can be divided into 2 concepts: 
First - Is a smart contract or application running on a cryptocurrency network Tron. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. 
Second - Is the site itself, providing an interface for the convenience of working with a smart contract
</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="headingTwo">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Who is the Project Administrator?</a> </h6>
                                          </div>
                                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                            <div class="card-body"> In a project like SmartEdge there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Tron. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain..</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="headingThree">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can a transaction remain on the balance of a smart contract?</a> </h6>
                                          </div>
                                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                            <div class="card-body"> NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound.. </div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="headingFour">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What is mode of payment in SmartEdge?</a> </h6>
                                          </div>
                                          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion1">
                                            <div class="card-body"> Since the smart contract is published Tron Blockchain, so participation in the project is possible only with this TRX digital currency  </div>
                                          </div>
                                        </div>
                          			</div>
                          		</div>
                                <div class="col-md-6">
                                	<div id="accordion2" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="headingFive">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">What I need to Join SmartEdge?</a> </h6>
                                          </div>
                                          <div id="collapseFive" class="collapse show" aria-labelledby="headingFive" data-parent="#accordion2">
                                            <div class="card-body"> It is enough to have a computer or smartphone with Tron wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats!</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="headingSix">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">And if the project collapses, will I lose money?</a> </h6>
                                          </div>
                                          <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion2">
                                            <div class="card-body"> Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed. </div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="headingSeven">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">How can I be sure that my wallet will not be blocked?</a> </h6>
                                          </div>
                                          <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion2">
                                            <div class="card-body"> In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Tron Created by you the TRX-wallet belongs only to you.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="headingEight">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">Are there any fees or charges in SmartEdge?</a> </h6>
                                          </div>
                                          <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion2">
                                            <div class="card-body"> While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% BTT Token Fees. The BTT token is airdropped to your wallet automatically with each registration and upgrade transaction. </div>
                                          </div>
                                        </div>
                          			</div>
                          		</div>
                          	</div>
                        </div>
                        <div class="tab-pane fade" id="tab2" role="tabpanel">
                        	<div class="row">
                            	<div class="col-md-6">
                                    <div id="accordion3" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="headingNine">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseNine" aria-expanded="true" aria-controls="collapseNine">How to register in SmartEdge?</a> </h6>
                                          </div>
                                          <div id="collapseNine" class="collapse show" aria-labelledby="headingNine" data-parent="#accordion3">
                                            <div class="card-body">To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="headingTen">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">Is it possible to earn passively?</a> </h6>
                                          </div>
                                          <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion3">
                                            <div class="card-body"> In addition to personal invitations, partners can appear in your structure in two ways: These are “Overflows” and “Free Partners”. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="headingEleven">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">What are overflows?</a> </h6>
                                          </div>
                                          <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion3">
                                            <div class="card-body">Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place..</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="headingTwelve">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">How to add funds to my TRX wallet?</a> </h6>
                                          </div>
                                          <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion3">
                                            <div class="card-body">There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions.</div>
                                          </div>
                                        </div>
                                  	</div>	
                                </div>
                                <div class="col-md-6">
                                	<div id="accordion4" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="headingThirteen">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">What are Levels?</a> </h6>
                                          </div>
                                          <div id="collapseThirteen" class="collapse show" aria-labelledby="headingThirteen" data-parent="#accordion4">
                                            <div class="card-body"> Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines..</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="headingFourteen">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">If I have an 2 level, can I immediately buy the 4 level without having the 3 level?</a> </h6>
                                          </div>
                                          <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordion4">
                                            <div class="card-body"> Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="headingFifteen">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">What happens if my partner buys a level before me?</a> </h6>
                                          </div>
                                          <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen" data-parent="#accordion4">
                                            <div class="card-body">The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it’s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="headingSixteen">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">Why do I need to renew levels every 45 days?</a> </h6>
                                          </div>
                                          <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen" data-parent="#accordion4">
                                            <div class="card-body">Nobody owns the Bitcoin network much like no one owns the technology behind email. Bitcoin is controlled by all Bitcoin users around the world. While developers are improving the software, they can't force a change in the Bitcoin protocol because all users are free to choose what software and version they use.</div>
                                          </div>
                                        </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab3" role="tabpanel">
                        	<div class="row">
                            	<div class="col-md-6">
                                	<div id="accordion5" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="headingSeventeen">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseSeventeen" aria-expanded="true" aria-controls="collapseSeventeen">How are bitcoins created?</a> </h6>
                                          </div>
                                          <div id="collapseSeventeen" class="collapse show" aria-labelledby="headingSeventeen" data-parent="#accordion5">
                                            <div class="card-body"> New bitcoins are generated by a competitive and decentralized process called "mining". This process involves that individuals are rewarded by the network for their services. Bitcoin miners are processing transactions and securing the network using specialized hardware and are collecting new bitcoins in exchange.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="headingEighteen">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">Why do bitcoins have value?</a> </h6>
                                          </div>
                                          <div id="collapseEighteen" class="collapse" aria-labelledby="headingEighteen" data-parent="#accordion5">
                                            <div class="card-body">Bitcoins have value because they are useful as a form of money. Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies). In short, Bitcoin is backed by mathematics. </div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="headingNineteen">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">What determines bitcoin's price?</a> </h6>
                                          </div>
                                          <div id="collapseNineteen" class="collapse" aria-labelledby="headingNineteen" data-parent="#accordion5">
                                            <div class="card-body"> The price of a bitcoin is determined by supply and demand. When demand for bitcoins increases, the price increases, and when demand falls, the price falls. There is only a limited number of bitcoins in circulation and new bitcoins are created at a predictable and decreasing rate</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="headingTwenty">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">Can bitcoins become worthless?</a> </h6>
                                          </div>
                                          <div id="collapseTwenty" class="collapse" aria-labelledby="headingTwenty" data-parent="#accordion5">
                                            <div class="card-body"> Yes. History is littered with currencies that failed and are no longer used, such as the German Mark during the Weimar Republic and, more recently, the Zimbabwean dollar.</div>
                                          </div>
                                        </div>
                                  	</div>
                                </div>
                                <div class="col-md-6">
                                	<div id="accordion6" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="headingNine">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapse21" aria-expanded="true" aria-controls="collapse21">How are bitcoins created?</a> </h6>
                                          </div>
                                          <div id="collapse21" class="collapse show" aria-labelledby="heading21" data-parent="#accordion6">
                                            <div class="card-body"> New bitcoins are generated by a competitive and decentralized process called "mining". This process involves that individuals are rewarded by the network for their services. Bitcoin miners are processing transactions and securing the network using specialized hardware and are collecting new bitcoins in exchange.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="heading22">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse22" aria-expanded="false" aria-controls="collapse22">Why do bitcoins have value?</a> </h6>
                                          </div>
                                          <div id="collapse22" class="collapse" aria-labelledby="heading22" data-parent="#accordion6">
                                            <div class="card-body">Bitcoins have value because they are useful as a form of money. Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies). In short, Bitcoin is backed by mathematics. </div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="heading23">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse23" aria-expanded="false" aria-controls="collapse23">What determines bitcoin's price?</a> </h6>
                                          </div>
                                          <div id="collapse23" class="collapse" aria-labelledby="heading23" data-parent="#accordion6">
                                            <div class="card-body"> The price of a bitcoin is determined by supply and demand. When demand for bitcoins increases, the price increases, and when demand falls, the price falls. There is only a limited number of bitcoins in circulation and new bitcoins are created at a predictable and decreasing rate</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="heading24">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse24" aria-expanded="false" aria-controls="collapse24">Can bitcoins become worthless?</a> </h6>
                                          </div>
                                          <div id="collapse24" class="collapse" aria-labelledby="heading24" data-parent="#accordion6">
                                            <div class="card-body"> Yes. History is littered with currencies that failed and are no longer used, such as the German Mark during the Weimar Republic and, more recently, the Zimbabwean dollar.</div>
                                          </div>
                                        </div>
                                 	</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab4" role="tabpanel">
                        	<div class="row">
                                <div class="col-md-6">
                                	<div id="accordion7" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="heading25">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapse25" aria-expanded="true" aria-controls="collapse25">Is Bitcoin legal?</a> </h6>
                                          </div>
                                          <div id="collapse25" class="collapse show" aria-labelledby="heading25" data-parent="#accordion7">
                                            <div class="card-body">To the best of our knowledge, Bitcoin has not been made illegal by legislation in most jurisdictions. However, some jurisdictions (such as Argentina and Russia) severely restrict or ban foreign currencies. Other jurisdictions (such as Thailand) may limit the licensing of certain entities such as Bitcoin exchanges.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="heading26">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse26" aria-expanded="false" aria-controls="collapse26">Is Bitcoin useful for illegal activities?</a> </h6>
                                          </div>
                                          <div id="collapse26" class="collapse" aria-labelledby="heading26" data-parent="#accordion7">
                                            <div class="card-body">Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin in terms of their use to finance crime. Bitcoin can bring significant innovation in payment systems and the benefits of such innovation are often considered to be far beyond their potential drawbacks.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="heading27">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse27" aria-expanded="false" aria-controls="collapse27">Can Bitcoin be regulated?</a> </h6>
                                          </div>
                                          <div id="collapse27" class="collapse" aria-labelledby="heading27" data-parent="#accordion7">
                                            <div class="card-body"> The Bitcoin protocol itself cannot be modified without the cooperation of nearly all its users, who choose what software they use. Attempting to assign special rights to a local authority in the rules of the global Bitcoin network is not a practical possibility.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="heading28">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse28" aria-expanded="false" aria-controls="collapse28">What about Bitcoin and taxes?</a> </h6>
                                          </div>
                                          <div id="collapse28" class="collapse" aria-labelledby="heading28" data-parent="#accordion7">
                                            <div class="card-body"> Bitcoin is not a fiat currency with legal tender status in any jurisdiction, but often tax liability accrues regardless of the medium used. There is a wide variety of legislation in many different jurisdictions which could cause income, sales, payroll, capital gains, or some other form of tax liability to arise with Bitcoin.</div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                	<div id="accordion8" class="faq_content2">
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                          <div class="card-header" id="heading29">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapse29" aria-expanded="true" aria-controls="collapse29">Is Bitcoin legal?</a> </h6>
                                          </div>
                                          <div id="collapse29" class="collapse show" aria-labelledby="heading29" data-parent="#accordion8">
                                            <div class="card-body">To the best of our knowledge, Bitcoin has not been made illegal by legislation in most jurisdictions. However, some jurisdictions (such as Argentina and Russia) severely restrict or ban foreign currencies. Other jurisdictions (such as Thailand) may limit the licensing of certain entities such as Bitcoin exchanges.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div class="card-header" id="heading30">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse30" aria-expanded="false" aria-controls="collapse30">Is Bitcoin useful for illegal activities?</a> </h6>
                                          </div>
                                          <div id="collapse30" class="collapse" aria-labelledby="heading30" data-parent="#accordion8">
                                            <div class="card-body">Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin in terms of their use to finance crime. Bitcoin can bring significant innovation in payment systems and the benefits of such innovation are often considered to be far beyond their potential drawbacks.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                          <div class="card-header" id="heading31">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse31" aria-expanded="false" aria-controls="collapse31">Can Bitcoin be regulated?</a> </h6>
                                          </div>
                                          <div id="collapse31" class="collapse" aria-labelledby="heading31" data-parent="#accordion8">
                                            <div class="card-body"> The Bitcoin protocol itself cannot be modified without the cooperation of nearly all its users, who choose what software they use. Attempting to assign special rights to a local authority in the rules of the global Bitcoin network is not a practical possibility.</div>
                                          </div>
                                        </div>
                                        <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                          <div class="card-header" id="heading32">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse32" aria-expanded="false" aria-controls="collapse32">What about Bitcoin and taxes?</a> </h6>
                                          </div>
                                          <div id="collapse32" class="collapse" aria-labelledby="heading32" data-parent="#accordion8">
                                            <div class="card-body"> Bitcoin is not a fiat currency with legal tender status in any jurisdiction, but often tax liability accrues regardless of the medium used. There is a wide variety of legislation in many different jurisdictions which could cause income, sales, payroll, capital gains, or some other form of tax liability to arise with Bitcoin.</div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- END SECTION FAQ --> */}

{/* <!-- START SECTION CONTACT --> */}
<section id="contact" class="contact_section small_pt small_pb">
	<div class="container">
    	<div class="row">
        	<div class="col-lg-8 col-md-12 offset-lg-2">
              <div class="title_default_light title_border text-center">
                <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Get In Touch With Smart Support!</h4>
              </div>
            </div>
        </div>
        <div class="row align-items-center small_space">
            <div class="col-lg-4 col-md-6 offset-lg-2">
            	<div class="bg_navy_blue_dark contact_box_s2 animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                    <div class="contact_title">
                        <h5 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us</h5>
                       {/* <!-- <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our office is located in a beautiful building and garden</p> --> */}
                    </div>
                    <ul class="list_none contact_info mt-margin">
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"> 
                        	<i class="ion-ios-location"></i>
                            <div class="contact_detail"> <span>Address</span>
                            	<p>22 International Division Via G.B. Pirelli</p>
                            </div>
                        </li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"> 
                        	<i class="ion-android-call"></i>
                            <div class="contact_detail"> <span>Phone</span>
                            	<p>+23 0123 4567</p>
                            </div>
                        </li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"> 
                        	<i class="ion-ios-email"></i>
                            <div class="contact_detail"> <span>Email-id</span>
                            	<p>Yourmail@gmail.com</p>
                            </div>
                        </li>
                  </ul>
                  <div class="contct_follow pt-2 pt-md-4">
                      <span class="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">Follow Us</span>
                      <ul class="list_none social_icon">
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><i class=" fa fa-facebook"></i></a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#"><i class=" fa fa-twitter"></i></a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><i class=" fa fa-google-plus"></i></a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a href="#"><i class=" fa fa-pinterest"></i></a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><i class=" fa fa-linkedin"></i></a></li>
                     </ul>
                 </div>
              	</div>
            </div>
            <div class="col-lg-5 col-md-6">
            	<div class="pt-4 pt-md-0 animation" data-animation="fadeInRight" data-animation-delay="0.1s">
                    <form method="post" name="enq" class="field_form">
                    <div class="row">
                      <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                        <input type="text" required="required" placeholder="Enter Name *" id="first-name" class="form-control" name="name" />
                      </div>
                      <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <input type="email" required="required" placeholder="Enter Email *" id="email" class="form-control" name="email" />
                      </div>
                      <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                        <input type="text" required="required" placeholder="Enter Subject" id="subject" class="form-control" name="subject" />
                      </div>
                      <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1s">
                        <textarea required="required" placeholder="Message *" id="description" class="form-control" name="message" rows="2"></textarea>
                      </div>
                      <div class="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                        <button type="submit" title="Submit Your Message!" class="btn btn-default btn-radius btn-block" id="submitButton" name="submit" value="Submit">Submit <i class="ion-ios-arrow-thin-right"></i></button>
                      </div>
                      <div class="col-md-12">
                        <div id="alert-msg" class="alert-msg text-center"></div>
                      </div>
                    </div>
                    </form>
                </div>
        	</div>
        </div>
	</div>
</section>
{/* <!-- END SECTION CONTACT -->  */}



{/* <!-- START FOOTER SECTION --> */}
<footer>
    <div class="top_footer blue_light_bg" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/footer_bg.png">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12">
                    <div class="newsletter_form">
                        <h4 class="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Newsletter</h4>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">By subscribing to our mailing list you will always be update with the latest news from us.</p>
                        <form class="subscribe_form animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                            <input class="input-rounded" type="text" required placeholder="Enter Email Address"/>
                          <button type="submit" title="Subscribe" class="btn-info" name="submit" value="Submit"> Subscribe </button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-8 res_md_mt_30 res_sm_mt_20">
                    <h4 class="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Quick Links</h4>
                    <ul class="footer_link half_link list_none">
                        
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">Team</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">How It Works</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#">FAQ</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">Road map</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-4 res_md_mt_30 res_sm_mt_20">
                    <h4 class="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Social</h4>
                    <ul class="footer_social list_none">
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#"><i class="ion-social-facebook"></i> Facebook</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#"><i class="ion-social-twitter"></i> Twitter</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><i class="ion-social-googleplus"></i> Google Plus</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#"><i class="ion-social-pinterest"></i> Pintrest</a></li>
                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><i class="ion-social-instagram-outline"></i> Instagram</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
    <div class="bottom_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="copyright">Copyright &copy; SmartEdge 2021 All Rights Reserved.</p>
        </div>
        <div class="col-md-6">
          <ul class="list_none footer_menu">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</footer>
{/* <!-- END FOOTER SECTION -->  */}


<a href="#" class="scrollup btn-default"><i class="ion-ios-arrow-up"></i></a> 

        </div>
    )
}

export default home
