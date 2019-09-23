var pos = 0;
var turn = 0;
var data = ['Machine Learning','Business Intelligence', 'Data Mining','Data Engineering', 'Deep Learning', 'Big Data Analytics', 'Computer Vision', 'Time-series Analysis', 'Cloud Computing', 'ETL & Ingestion Automation', 'Real-time Processing', 'Recommendation Engines', 'Image Processing', 'Marketing Intelligence', 'Interactive Dashboards'];
var speed = 90;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("demo").innerHTML += data[turn].charAt(pos);
    console.log(data[turn].charAt(pos));
    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed+500);
  }
}

function erase() {
	if (pos >= 0) {
      var str=data[turn].toString().substring(0, pos);
      document.getElementById("demo").innerHTML = str;
      pos--;
      setTimeout(erase, speed-60);
    } else {
      turn++;
      if(turn>=data.length)
        turn=0;
      setTimeout(typeWriter, speed);
    }
}
