// LINKS DE ANCORA NA PAGINA
$(document).ready(function () {
  var pathname = window.location.href.split('#')[0];
  $('a[href^="#"]').each(function () {
      var $this = $(this),
          link = $this.attr('href');
      $this.attr('href', pathname + link);
  });
});
// Realizar pesquisas nas tabelas:
function pesquisarTabela() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("pesquisarEntrada");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");
  
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
      td = tr[i].getElementsByTagName("td");
          for (var j = 0; j < td.length; j++) {
          cell = tr[i].getElementsByTagName("td")[j];
              if (cell) {
                  if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                  break;
                  } 
              }
          }
      }
  }

// Ordenar itens das colunas das tabelas:
function ordenarTabela(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabela");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

//Menu
$(document).ready(function () {
  $('.menuopen').click(function () {
      $('.menuclose').toggleClass('show');
      $('.menuopen').toggleClass('active');
      $('.close').toggleClass('active');
  });
  $('a').click(function () {
      $('.menuclose').removeClass('show');
      $('.menuopen').removeClass('active');
      $('.close').removeClass('active');
  });
  $('.close').click(function () {
      $('.menuclose').removeClass('show');
      $('.menuopen').removeClass('active');
      $('.close').removeClass('active');
  });
});