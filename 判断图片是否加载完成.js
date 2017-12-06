因为手机页面banner图第一次加载的时候不显示，刷新后才会显示。发现是因为图片还没有加载完成，就执行了设置高度的方法。所以需要先判断一下图片是否加载完成




                               var imgdefereds=[];
                                $('.banner-img img').each(function(){
                                        var dfd=$.Deferred();
                                        $(this).bind('load',function(){
                                        dfd.resolve();
                                        }).bind('error',function(){
                                         //图片加载错误，加入错误处理
                                        })
                                        if(this.complete) setTimeout(function(){
                                                dfd.resolve();
                                        },500);
                                        imgdefereds.push(dfd);
                                })
                                $.when.apply(null,imgdefereds).done(function(){
//                                  callback();
                                        var arr = [];
                                        $(".banner-img img").each(function(){
                                                var height = $(this).height();
                                                if(height>0){
                                                        arr.push(height);
                                                }else{
                                                        return;
                                                }
                                        })
                                        var minheight = Math.min.apply(Math,arr);
                                        $(".banner-img .swiper-container").css("max-height",minheight);
                                });