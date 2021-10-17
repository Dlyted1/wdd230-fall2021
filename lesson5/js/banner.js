function bannerClose () {
   
    const now = new Date();
    const today = now.getDay;
    const banner = document.querySelector("banner")

    if (today == 5) {
        display: block;
    }

    else {
        display: none;
    }
}
bannerClose ();