(function($) {

    "use strict"

    $(document).ready(function(){

                $.supersized({

                

                    //Functionality

                    slideshow               :   1,      //Slideshow on/off

                    autoplay                :   1,      //Slideshow starts playing automatically

                    start_slide             :   1,      //Start slide (0 is random)

                    random                  :   0,      //Randomize slide order (Ignores start slide)

                    slide_interval          :   10000,  //Length between transitions

                    transition              :   1,      //0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left

                    transition_speed        :   500,    //Speed of transition

                    new_window              :   1,      //Image links open in new window/tab

                    pause_hover             :   0,      //Pause slideshow on hover

                    keyboard_nav            :   0,      //Keyboard navigation on/off

                    performance             :   1,      //0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)

                    image_protect           :   1,      //Disables image dragging and right click with Javascript



                    //Size & Position

                    min_width               :   0,      //Min width allowed (in pixels)

                    min_height              :   0,      //Min height allowed (in pixels)

                    vertical_center         :   1,      //Vertically center background

                    horizontal_center       :   1,      //Horizontally center background

                    fit_portrait            :   1,      //Portrait images will not exceed browser height

                    fit_landscape           :   0,      //Landscape images will not exceed browser width

                    

                    //Components

                    navigation              :   1,      //Slideshow controls on/off

                    thumbnail_navigation    :   1,      //Thumbnail navigation

                    slide_counter           :   1,      //Display slide numbers

                    slide_captions          :   1,      //Slide caption (Pull from "title" in slides array)

                    slides                  :   [       //Slideshow Images

                                                        {image : 'http://shtheme.com/demosd/cruise/wp-content/themes/cruise/assets/images/switzerland.jpg', title : 'Slide 1'},  

                                                        {image : 'http://shtheme.com/demosd/cruise/wp-content/themes/cruise/assets/images/slide18.jpg', title : 'Slide 2'},

                                                        {image : 'http://shtheme.com/demosd/cruise/wp-content/themes/cruise/assets/images/beach.jpg', title : 'Slide 3'},

                                                ]

                                                

                }); 



        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');



          ga('create', 'UA-68058832-1', 'auto');

          ga('send', 'pageview');





             });

    })(jQuery);