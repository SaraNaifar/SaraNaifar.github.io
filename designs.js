 // Select color input
// let colorInput = $('#colorPicker')
// Select size input

  // your code here

// When size is submitted by the user, call makeGrid()
$(document).ready(function () {
  $('#clickedbutton').click(function () {
    var grid = document.getElementById('pixelCanvas')
    var tbdy = document.createElement('tbody')

    var sizeInputWidth = document.getElementById('inputWeight').value
    var sizeInputHeight = document.getElementById('inputHeight').value
    for (var rows = 0; rows < sizeInputHeight; rows++) {
      var tr = grid.appendChild(document.createElement('tr'))
      for (var columns = 0; columns < sizeInputWidth; columns++) {
        var td = document.createElement('td')
        td.appendChild(document.createTextNode('\u0020'))
        tr.appendChild(td)
      };
      tbdy.appendChild(tr)
      tbdy.className = 'grid'
    };
    grid.appendChild(tbdy)
  })

  $('#pixelCanvas').on('click', 'td', function () {
  	var color = $('#colorPicker').val()
	 $(this).css('background-color', color)
  })

  $('#resetbutton').click(function () {
    $('#inputWeight').val(1)
    $('#inputHeight').val(1)
  })

  $('#removebutton').click(function () {
    $('#pixelCanvas tr>td').remove()
  })
})
