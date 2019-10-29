
    //兼容各浏览器 scroll 的差异
    function scroll(){
        if(window.pageYOffset !== null){
            return {
                "top":window.pageYOffset,
                "left":window.pageXOffset
            }
        }else if(document.compatMode == 'CSS1Compat'){
            return {
                "top":document.documentElement.scrollTo,
                "left":document.documentElement.scrollLeft
            }
        }
        
        return {
                "top":document.body.scrollTo,
                "left":document.body.scrollLeft
            }
    }

