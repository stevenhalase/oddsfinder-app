class AdminManager {
  constructor() {
    // this.apiRoot = 'http://localhost:3080/api/';
    this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
    this.matches = [];
    this.currentUser = null;
  }

  Init() {
    this.CheckUser();
  }

  CheckUser() {
    let user = localStorage.getItem('oddsfinder-admin-user');
    if (user) {
      this.SignIn(user);
    }
  }

  SignIn(user) {
    this.currentUser = user;
    localStorage.setItem('oddsfinder-admin-user', this.currentUser);
    this.Hide('.login-overlay');
  }

  SignOut() {
    this.currentUser = null;
    localStorage.removeItem('oddsfinder-admin-user');
    this.Show('.login-overlay');
  }

  Show(elSelector) {
    $(elSelector).show();
  }

  Hide(elSelector) {
    $(elSelector).hide();
  }
}

var adminManager = new AdminManager();

$(document).ready(() => {
  adminManager.Init();

  $('#password').keypress(function(e) {
    if(e.which == 13) {
        $('#login-btn').click();
    }
  })

  $('#email').keypress(function(e) {
    if(e.which == 13) {
        $('#login-btn').click();
    }
  })
  
  $('#login-btn').click(e => {
    let email = $('#email').val();
    let password = $('#password').val();

    $('#email').val('');
    $('#password').val('');

    // $.post('https://oddsfinder-api.herokuapp.com/api/users', {
    //   email: email,
    //   password: password,
    //   member_type: 'admin'
    // }, response => {
    //   if (response.error) {
    //     console.log(response.error)
    //   } else {
    //     console.log(response);
    //   }
    // })

    $.post('https://oddsfinder-api.herokuapp.com/api/users/login/admin', {
      email: email,
      password: password
    }, response => {
      if (response.error) {
        $('#error-alert').click();
      } else {
        adminManager.SignIn(response);
      }
    })
  })

  $('#logout-btn').click(e => {
    adminManager.SignOut();
  })

  $('.admin-panel-tab').click(e => {
    $('.content-container').hide();
    $('.admin-panel-tab').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    let contentId = $(e.currentTarget).data('content');
    $('.' + contentId + '-content').show();
  })
});

$(document).ready(function() {
  $.fn.dataTable.ext.errMode = 'none';

  $.get('https://oddsfinder-api.herokuapp.com/api/matches', matches => {
    let table = $('#matches-table').DataTable({
      data: matches,
      responsive: {
        details: {
          type: 'column',
          target: 'tr'
        }
      },
      columns: [
          {
            orderable: false,
            className: 'select-checkbox',
            targets:0,
          },
          {
            orderable: false,
            className: 'info-toggle',
            targets:1,
          },
          { data: 'Date' },
          { data: 'PsuedoKey' },
          { data: 'League' },
          { data: 'Team1' },
          { data: 'Team2' }
      ],
      select: {
        style: 'multi',
        selector: 'td:first-child'
      },
      order: [ 1, 'asc' ],
      bFilter: true,
      bLengthChange: true,
      pagingType: "simple",
      paging: true,
      searching: true,
      language: {
        info: " _START_ - _END_ of _TOTAL_ ",
        sLengthMenu: "<span class='custom-select-title'>Rows per page:</span> <span class='custom-select'> _MENU_ </span>",
        sSearch: "",
        sSearchPlaceholder: "Search",
        paginate: {
          sNext: " ",
          sPrevious: " "
        },
      },
      dom:
        "<'pmd-card-title'<'data-table-title'><'search-paper pmd-textfield'f>>" +
        "<'custom-select-info'<'custom-select-item'><'custom-select-action'>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'pmd-card-footer' <'pmd-datatable-pagination' l i p>>",
    });
    
    /// Select value
    $('.custom-select-info').hide();
    
    $('#matches-table tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
        var rowinfo = $(this).closest('.dataTables_wrapper').find('.select-info').text();
        $(this).closest('.dataTables_wrapper').find('.custom-select-info .custom-select-item').text(rowinfo);
        if ($(this).closest('.dataTables_wrapper').find('.custom-select-info .custom-select-item').text() != null){
          $(this).closest('.dataTables_wrapper').find('.custom-select-info').show();
          //show delet button
        } else{
          $(this).closest('.dataTables_wrapper').find('.custom-select-info').hide();
        }
      }
      else {
        var rowinfo = $(this).closest('.dataTables_wrapper').find('.select-info').text();
        $(this).closest('.dataTables_wrapper').find('.custom-select-info .custom-select-item').text(rowinfo);
      }
      if($('#matches-table').find('.selected').length == 0){
        $(this).closest('.dataTables_wrapper').find('.custom-select-info').hide();
      }
    } );

    function format ( d ) {
        // `d` is the original data object for the row
        let html = '<table class="match-instance-detail" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                      '<thead><th>Service</th><th>Region</th><th>PsuedoKey</th><th>Team 1</th><th>Team 2</th><th>1</th><th>X</th><th>2</th></thead>' +
                      '<tbody>';

            for (let matchInstance of d.MatchInstances) {
              html += '<tr>'+
                          '<td>'+matchInstance.Service+'</td>'+
                          '<td>'+matchInstance.Region+'</td>'+
                          '<td>'+matchInstance.PsuedoKey+'</td>'+
                          '<td>'+matchInstance.Team1.Name+'</td>'+
                          '<td>'+matchInstance.Team2.Name+'</td>'+
                          '<td>'+matchInstance.Team1.Price+'</td>'+
                          '<td>'+matchInstance.DrawPrice+'</td>'+
                          '<td>'+matchInstance.Team2.Price+'</td>'+
                      '</tr>'
            }

        html += '</tbody></table>';

        return html;
    }
    
    $('#matches-table tbody').on('click', 'td.info-toggle', function () {
          var tr = $(this).closest('tr');
          var row = table.row( tr );

          if ( row.child.isShown() ) {
              // This row is already open - close it
              row.child.hide();
              tr.removeClass('shown');
          }
          else {
              // Open this row
              row.child( format(row.data()) ).show();
              tr.addClass('shown');
          }
      } );


    $("#matches-table_wrapper div.data-table-title").html('<h2 class="pmd-card-title-text">Matches</h2>');
    $(".custom-select-action").html('<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">delete</i></button><button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">more_vert</button>');

  });

  $.get('https://oddsfinder-api.herokuapp.com/api/users', users => {
    let table = $('#users-table').DataTable({
      data: users,
      responsive: {
        details: {
          type: 'column',
          target: 'tr'
        }
      },
      columns: [
          {
            orderable: false,
            className: 'select-checkbox',
            targets:0,
          },
          { data: 'mobile_number' },
          { data: 'email' },
          { data: 'location.latitude' },
          { data: 'location.longitude' },
          { data: 'country' },
          { data: 'football_team' }
      ],
      select: {
        style: 'multi',
        selector: 'td:first-child'
      },
      order: [ 1, 'asc' ],
      bFilter: true,
      bLengthChange: true,
      pagingType: "simple",
      paging: true,
      searching: true,
      language: {
        info: " _START_ - _END_ of _TOTAL_ ",
        sLengthMenu: "<span class='custom-select-title'>Rows per page:</span> <span class='custom-select'> _MENU_ </span>",
        sSearch: "",
        sSearchPlaceholder: "Search",
        paginate: {
          sNext: " ",
          sPrevious: " "
        },
      },
      dom:
        "<'pmd-card-title'<'data-table-title'><'search-paper pmd-textfield'f>>" +
        "<'custom-select-info'<'custom-select-item'><'custom-select-action'>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'pmd-card-footer' <'pmd-datatable-pagination' l i p>>",
    });
    
    /// Select value
    $('.custom-select-info').hide();
    
    $('#users-table tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
        var rowinfo = $(this).closest('.dataTables_wrapper').find('.select-info').text();
        $(this).closest('.dataTables_wrapper').find('.custom-select-info .custom-select-item').text(rowinfo);
        if ($(this).closest('.dataTables_wrapper').find('.custom-select-info .custom-select-item').text() != null){
          $(this).closest('.dataTables_wrapper').find('.custom-select-info').show();
          //show delet button
        } else{
          $(this).closest('.dataTables_wrapper').find('.custom-select-info').hide();
        }
      }
      else {
        var rowinfo = $(this).closest('.dataTables_wrapper').find('.select-info').text();
        $(this).closest('.dataTables_wrapper').find('.custom-select-info .custom-select-item').text(rowinfo);
      }
      if($('#users-table').find('.selected').length == 0){
        $(this).closest('.dataTables_wrapper').find('.custom-select-info').hide();
      }
    } );

    $("#users-table_wrapper div.data-table-title").html('<h2 class="pmd-card-title-text">Users</h2>');
    $(".custom-select-action").html('<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">delete</i></button><button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">more_vert</button>');

  });

} );