function setup() {
  var privacyBanner = document.querySelectorAll("[data-gg-privacy-banner-anchor]");
	for (var i = 0; i < privacyBanner.length; i++) {
		privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
	}
}
