class AdminManager {
  constructor() {
    // this.apiRoot = 'http://localhost:3080/api/';
    this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
    this.matches = [];
    this.currentUser = null;
  }

  Init() {
    this.CheckUser();
    this.InitDateTimePicker();
    this.InitHandlers();
    this.InitPostRetrieve();
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
    this.ShowAlert('Successfully signed out.');
  }

  Show(elSelector) {
    $(elSelector).show();
  }

  Hide(elSelector) {
    $(elSelector).hide();
  }

  ShowAlert(message, type) {
    var $positionX = 'right',
        $positionY = 'top',
        $dataEffect = 'fadeInUp',
        $dataMessage = message,
        $dataType = type,
        $actionText = undefined,
        $action = undefined,
        $duration = undefined;	
        
      if($(window).width() < 768){
        $positionX = "center";
      }else {
        $positionX = $positionX;
      }		

      if(!$(".pmd-alert-container."+ $positionX +"."+ $positionY).length){
        $('body').append("<div class='pmd-alert-container "+$positionX+" "+$positionY+"'></div>");
      }
        
      var $currentPath = $(".pmd-alert-container."+ $positionX +"."+ $positionY);
      function notificationValue(){
        if($action == "true"){
          if($actionText == null){
            $notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>×</a></div>";
          }else{
            $notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
          }
          return $notification;
        }else {
          if($actionText == null){
            $notification = "<div class='pmd-alert' data-action='false'>"+$dataMessage+"</div>";
          }else{
            $notification =  "<div class='pmd-alert' data-action='false'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
          }
          return $notification;
        }
      }
      var $notification = notificationValue();
      var boxLength = $(".pmd-alert-container."+ $positionX +"."+ $positionY + " .pmd-alert").length;
      
      if(typeof $duration !== 'undefined'){
        $duration = $duration;
      }else {
        $duration = 3000;
      }
      
      if (boxLength > 0) {
        if ($positionY == 'top') {
          $currentPath.append($notification);
        }
        else {
          $currentPath.prepend($notification);
        }
        $currentPath.width($(".pmd-alert").outerWidth());
        if($action == "true"){
          $currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
        }else{
          $currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
            function(){
              $(this).removeClass("visible" +" "+ $dataEffect).remove();
            });	
        }
        $currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
      }else {
        $currentPath.append($notification);
        $currentPath.width($(".pmd-alert").outerWidth());
        if($action == "true"){
          $currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
        }else{
          $currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
            function(){
              $(this).removeClass("visible" +" "+ $dataEffect).remove();
            });	
        }
        $currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
      }
      var $middle = $(".pmd-alert").outerWidth() / 2;  
      $(".pmd-alert-container.center").css("marginLeft","-" + $middle+"px");
  }

  InitHandlers() {
    this.RegisterLoginHandlers();
    this.RegisterLogoutHandlers();
    this.RegisterMobileMenuHandlers();
    this.RegisterAdminPanelHandlers();
    this.RegisterPostHandlers();
  }

  RegisterLoginHandlers() {
    $('#password').keypress(e => {
      if(e.which == 13) {
          $('#login-btn').click();
      }
    })

    $('#email').keypress(e => {
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
          this.ShowAlert('Failure signing in.', 'error');
        } else {
          this.ShowAlert('Successfully signed in.', 'success');
          this.SignIn(response);
        }
      })
    })
  }

  RegisterLogoutHandlers() {
    $('#logout-btn').click(e => {
      this.SignOut();
    })
  }

  RegisterMobileMenuHandlers() {
    $('#menu').click(e => {
      $('.admin-panel').toggleClass('menu-open');
    })
  }

  RegisterAdminPanelHandlers() {
    $('.admin-panel-tab').click(e => {
      $('.content-container').hide();
      $('.admin-panel-tab').removeClass('selected');
      $(e.currentTarget).addClass('selected');
      let contentId = $(e.currentTarget).data('content');
      $('.' + contentId + '-content').show();
    })
  }

  RegisterPostHandlers() {
    $('#post-submit').click(e => {
      let author = $('#post-author').val();
      let date = $('#post-date').val();
      let published = $('#post-published').is(":checked");
      let title = $('#post-title').val();
      let content = $('#post-content').val();
      let id = $('#post-id').text();

      // $.post('https://oddsfinder-api.herokuapp.com/api/posts/', {
      //   author: author,
      //   date: date,
      //   published: published,
      //   title: title,
      //   content: content
      // }, response => {
      //   if (response.error) {
      //     this.ShowAlert('Failure creating post.', 'error');
      //   } else {
      //     this.ShowAlert('Successfully created post.', 'success');
      //   }
      // })

      $.ajax({
        url: 'https://oddsfinder-api.herokuapp.com/api/posts/' + id,
        type: 'PUT',
        data: {
          author: author,
          date: date,
          published: published,
          title: title,
          content: content
        },
        success: response => {
          if (response.error) {
            this.ShowAlert('Failure updating post.', 'error');
          } else {
            this.ShowAlert('Successfully updated post.', 'success');
          }
        }
      });
    })
  }

  InitPostRetrieve() {
    $.get('http://oddsfinder-api.herokuapp.com/api/posts/', posts => {
      if (posts.length >= 1) {
        let post = posts[0];
        $('#post-author').val(post.author);
        $('#post-date').val(post.date);
        post.published === true ? $('#post-published').prop('checked', true) : $('#post-published').prop('checked', false);
        $('#post-title').val(post.title);
        $('#post-content').val(post.content);
        $('#post-id').text(post._id);

        this.TextAreaFix('#post-content');
      }
    })
  }

  InitDateTimePicker() {
    $('#post-date').datetimepicker();
  }

  TextAreaFix(selector) {
    $(selector).each(function () {
      if (this.scrollHeight < 100) {
        this.setAttribute('style', 'height:100px;overflow-y:hidden;');
      } else {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
      }
    }).on('change keyup keydown paste cut click', function () {
      this.style.height = 'auto';
      if (this.scrollHeight < 100) {
        this.style.height = '100px';
      } else {
        this.style.height = (this.scrollHeight) + 'px';
      }
    });
  }
}

$(document).ready(() => {
  let adminManager = new AdminManager();
  adminManager.Init();
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