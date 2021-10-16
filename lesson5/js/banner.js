function bannerDay() {

    const d = new Date();
    const today = d.getDay();
    const Friday = document.querySelector("banner");

    if (today == 5) {
        banner.small.display = 'block';

    } else {
        banner.small.display = 'none';
    }
}
function bannerDay()