function keyPressed() {
  if (keyCode === 83) {
    console.log('Saving Image at original scale')
    saveImage()
  }
}

/*
  If you want you can hack this to get different sized prints
  Proceeed at own risk though, need to set things from 'parameters.js' and call 'makeSketch()'
*/
function saveImage() {
  save(pg, 'exotic_quarpet_'+pg_sizex+'x'+pg_sizey+'.png')
  console.log('DONE!')
}






















// -- --- -.
