Package.describe({
  summary: "Amcharts + Amstock",
  name: "paddydub:amstock",
  version: "3.13.1",
  git: "https://github.com/paddydub/meteor-amstock.git",
  documentation: "README.md"
});

Package.on_use(function (api) {
  api.add_files('lib/amcharts.js', 'client');
  api.add_files('lib/amstock.js', 'client');
  api.add_files('lib/funnel.js', 'client');
  api.add_files('lib/gauge.js', 'client');
  api.add_files('lib/pie.js', 'client');
  api.add_files('lib/radar.js', 'client');
  api.add_files('lib/serial.js', 'client');
  api.add_files('lib/xy.js', 'client');
  api.add_files('lib/images/dragIcon.gif', 'client');
  api.add_files('lib/images/dragIconBlack.gif', 'client');
  api.add_files('lib/images/dragIconH.gif', 'client');
  api.add_files('lib/images/dragIconHBlack.gif', 'client');
  api.add_files('lib/images/export.png', 'client');
  api.add_files('lib/images/exportWhite.png', 'client');
  api.add_files('lib/images/lens.png', 'client');
  api.add_files('lib/images/lensWhite.png', 'client');
  api.add_files('lib/lang/az.js', 'client');
  api.add_files('lib/lang/bg.js', 'client');
  api.add_files('lib/lang/de.js', 'client');
  api.add_files('lib/lang/es.js', 'client');
  api.add_files('lib/lang/fi.js', 'client');
  api.add_files('lib/lang/fo.js', 'client');
  api.add_files('lib/lang/fr.js', 'client');
  api.add_files('lib/lang/hr.js', 'client');
  api.add_files('lib/lang/hu.js', 'client');
  api.add_files('lib/lang/id.js', 'client');
  api.add_files('lib/lang/is.js', 'client');
  api.add_files('lib/lang/it.js', 'client');
  api.add_files('lib/lang/lt.js', 'client');
  api.add_files('lib/lang/lv.js', 'client');
  api.add_files('lib/lang/mk.js', 'client');
  api.add_files('lib/lang/mn.js', 'client');
  api.add_files('lib/lang/mt.js', 'client');
  api.add_files('lib/lang/nl.js', 'client');
  api.add_files('lib/lang/no.js', 'client');
  api.add_files('lib/lang/pl.js', 'client');
  api.add_files('lib/lang/pt.js', 'client');
  api.add_files('lib/lang/ro.js', 'client');
  api.add_files('lib/lang/ru.js', 'client');
  api.add_files('lib/lang/rw.js', 'client');
  api.add_files('lib/lang/sk.js', 'client');
  api.add_files('lib/lang/so.js', 'client');
  api.add_files('lib/lang/th.js', 'client');
  api.add_files('lib/lang/tr.js', 'client');
  api.add_files('lib/patterns/black/pattern1.png', 'client');
  api.add_files('lib/patterns/black/pattern10.png', 'client');
  api.add_files('lib/patterns/black/pattern11.png', 'client');
  api.add_files('lib/patterns/black/pattern12.png', 'client');
  api.add_files('lib/patterns/black/pattern13.png', 'client');
  api.add_files('lib/patterns/black/pattern14.png', 'client');
  api.add_files('lib/patterns/black/pattern15.png', 'client');
  api.add_files('lib/patterns/black/pattern16.png', 'client');
  api.add_files('lib/patterns/black/pattern17.png', 'client');
  api.add_files('lib/patterns/black/pattern18.png', 'client');
  api.add_files('lib/patterns/black/pattern19.png', 'client');
  api.add_files('lib/patterns/black/pattern2.png', 'client');
  api.add_files('lib/patterns/black/pattern20.png', 'client');
  api.add_files('lib/patterns/black/pattern21.png', 'client');
  api.add_files('lib/patterns/black/pattern3.png', 'client');
  api.add_files('lib/patterns/black/pattern4.png', 'client');
  api.add_files('lib/patterns/black/pattern5.png', 'client');
  api.add_files('lib/patterns/black/pattern6.png', 'client');
  api.add_files('lib/patterns/black/pattern7.png', 'client');
  api.add_files('lib/patterns/black/pattern8.png', 'client');
  api.add_files('lib/patterns/black/pattern9.png', 'client');
  api.add_files('lib/patterns/chalk/pattern1.jpg', 'client');
  api.add_files('lib/patterns/chalk/pattern1r.jpg', 'client');
  api.add_files('lib/patterns/chalk/pattern2.jpg', 'client');
  api.add_files('lib/patterns/chalk/pattern3.jpg', 'client');
  api.add_files('lib/patterns/chalk/pattern4.jpg', 'client');
  api.add_files('lib/patterns/chalk/pattern5.jpg', 'client');
  api.add_files('lib/patterns/chalk/pattern6.jpg', 'client');
  api.add_files('lib/patterns/white/pattern1.png', 'client');
  api.add_files('lib/patterns/white/pattern10.png', 'client');
  api.add_files('lib/patterns/white/pattern11.png', 'client');
  api.add_files('lib/patterns/white/pattern12.png', 'client');
  api.add_files('lib/patterns/white/pattern13.png', 'client');
  api.add_files('lib/patterns/white/pattern14.png', 'client');
  api.add_files('lib/patterns/white/pattern15.png', 'client');
  api.add_files('lib/patterns/white/pattern16.png', 'client');
  api.add_files('lib/patterns/white/pattern17.png', 'client');
  api.add_files('lib/patterns/white/pattern18.png', 'client');
  api.add_files('lib/patterns/white/pattern19.png', 'client');
  api.add_files('lib/patterns/white/pattern2.png', 'client');
  api.add_files('lib/patterns/white/pattern20.png', 'client');
  api.add_files('lib/patterns/white/pattern21.png', 'client');
  api.add_files('lib/patterns/white/pattern3.png', 'client');
  api.add_files('lib/patterns/white/pattern4.png', 'client');
  api.add_files('lib/patterns/white/pattern5.png', 'client');
  api.add_files('lib/patterns/white/pattern6.png', 'client');
  api.add_files('lib/patterns/white/pattern7.png', 'client');
  api.add_files('lib/patterns/white/pattern8.png', 'client');
  api.add_files('lib/patterns/white/pattern9.png', 'client');
  api.add_files('lib/exporting/amexport.js', 'client');
  api.add_files('lib/exporting/canvg.js', 'client');
  api.add_files('lib/exporting/filesaver.js', 'client');
  api.add_files('lib/exporting/jspdf.js', 'client');
  api.add_files('lib/exporting/jspdf.plugin.addimage.js', 'client');
  api.add_files('lib/exporting/rgbcolor.js', 'client');
  api.add_files('lib/themes/black.js', 'client');
  api.add_files('lib/themes/chalk.js', 'client');
  api.add_files('lib/themes/dark.js', 'client');
  api.add_files('lib/themes/light.js', 'client');
  api.add_files('lib/themes/patterns.js', 'client');
  api.add_files('lib/plugins/responsive/responsive.js', 'client');
  api.export("AmCharts");
  api.export("jsPDF");
});
