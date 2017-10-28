

$(document).ready(function() {
  var adminManager = new AdminManager();
  adminManager.Init();
});

class AdminManager {
  constructor() {
    // this.apiRoot = 'http://localhost:3080/api/';
    this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
    this.matches = [];
    this.searchChips = [];
  }

  Init() {
    this.GetMatches()
      .then(() => {
        return this.DisplayMatches();
      })
      .then(() => {
        this.RegisterSearchHandlers();
      })
      .catch(err => {
        console.log(err);
      })
  }

  GetMatches() {
    return new Promise((resolve, reject) => {
      $.get(this.apiRoot + 'matches', (matches) => {
        this.matches = matches;
        this.displayedMatches = this.matches;
        resolve();
      })
    });
  }

  DisplayMatches() {
    return new Promise((resolve, reject) => {
      this.ClearAdminContent();
      this.UpdateMeta();
      for (let match of this.displayedMatches) {
        this.AppendAdminContent(this.BuildMatch(match));
      }
      this.RegisterClickHandlers();
      resolve();
    });
  }

  BuildMatch(match) {
    let dateString = new Date(match.Date).toDateString();
    let html = '<div class="match-container">' +
                  '<div class="match-meta"><span>' + dateString + '</span><span>' + match.PsuedoKey + '</span></div>' +
                  '<div class="match-title"><span>' + match.Team1 + '</span> vs <span>' + match.Team2 + '</span></div>' +
                  '<div class="match-league"><span>' + match.League + '</span></div>';

    for (let matchInstance of match.MatchInstances) {
      html += '<div class="match-instance-container">' +
                '<div class="match-instance-meta"><span>' + matchInstance.Service + '</span><span>' + matchInstance.Region + '</span><span>' + matchInstance.PsuedoKey + '</span></div>' +
                '<div class="match-instance-title"><span>' + matchInstance.Team1.Name + '</span> vs <span>' + matchInstance.Team2.Name + '</span></div>' +
                '<div class="match-instance-odds"><span>' + matchInstance.Team1.Price + '</span><span>' + matchInstance.DrawPrice + '</span><span>' + matchInstance.Team2.Price + '</span></div>' +
                '</div>';
    }


    html += '</div>';
    return html;
  }

  AppendAdminContent(content) {
    $('.admin-content').append(content);
  }

  ClearAdminContent() {
    $('.admin-content').empty();
  }

  UpdateMeta() {
    $('.matches-displayed').text(this.displayedMatches.length);
    $('.matches-total').text(this.matches.length);
  }

  RegisterClickHandlers() {
    $('.match-container').click(e => {
      this.ViewMatch(e)
    });
  }

  ViewMatch(e) {
    $(e.currentTarget).toggleClass('match--show');
  }

  RegisterSearchHandlers() {
    $('#search-matches').click(e => {
      let search = $('#search-input').val();
      this.SearchMatches(search);
    });
    $('#search-input').keypress(e => {
      if (e.which == 13) {
        let search = $('#search-input').val();
        this.SearchMatches(search);
      }
    });
  }

  SearchMatches(search) {
    this.searchChips = [];
    this.searchChips.push(search);
    this.displayedMatches = this.matches.filter(match => {
      let searchLower = search.toLowerCase();
      let team1Lower = match.Team1.toLowerCase();
      let team2Lower = match.Team2.toLowerCase();

      return team1Lower.includes(searchLower) || team2Lower.includes(searchLower);
    })

    this.DisplayMatches();
    this.DisplaySearchChips();
  }

  DisplaySearchChips() {
    $('.search-chips').empty();
    for (let chip of this.searchChips) {
      $('.search-chips').append('<span class="search-chip"><i class="fa fa-times-circle" aria-hidden="true"></i>' + chip + '</span>');
    }
    this.RegisterChipClickHandlers();
  }

  RegisterChipClickHandlers() {
    $('.search-chip').click(e => {
      this.ClearSearch();
    });
  }

  ClearSearch() {
    $('#search-input').val('');
    this.searchChips = [];
    this.DisplaySearchChips();
    this.displayedMatches = this.matches;
    this.DisplayMatches();
  }
}