jQuery(document).ready( function() {
  var clts = jQuery(".x-section").has(".x-section.sectionunwrap");

  for (i=0;i<clts.length;i++) {
    var inSection = jQuery(clts[i]).find(".x-section");
    // console.log(inSection);
    for (ii=0;ii<5;ii++) {
      inSection.unwrap();
    }
  }
});
