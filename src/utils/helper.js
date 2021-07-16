export const getLeagueLogo = () => {

};

export const getNBATeamLogo = (name) => {
  switch (name.trim().toLowerCase()) {
    case 'boston': case 'celtics': case 'boston celtics':
      return 'boston_celtics';
    case 'brooklyn': case 'nets': case 'brooklyn nets':
      return 'brooklyn_nets';
    case 'new york': case 'knicks': case 'new york knicks':
      return 'new_york_knicks';
    case 'philadelphia': case '76ers': case 'philadelphia 76ers':
      return 'philadelphia_76ers';
    case 'toronto': case 'raptors': case 'toronto raptors':
      return 'toronto_raptors';

    case 'chicago': case 'bulls': case 'chicago bulls':
      return 'chicago_bulls';
    case 'cleveland': case 'cavaliers': case 'cleveland cavaliers':
      return 'cleveland_cavaliers';
    case 'detroit': case 'pistons': case 'detroit pistons':
      return 'detroit_pistons';
    case 'indiana': case 'pacers': case 'indiana pacers':
      return 'indiana_pacers';
    case 'milwaukee': case 'bucks': case 'milwaukee bucks':
      return 'milwaukee_bucks';

    case 'atlanta': case 'hawks': case 'atlanta hawks':
      return 'atlanta_hawks';
    case 'charlotte': case 'hornets': case 'charlotte hornets':
      return 'charlotte_hornets';
    case 'miami': case 'heat': case 'miami heat':
      return 'miami_heat';
    case 'orlando': case 'magic': case 'orlando magic':
      return 'orlando_magic';
    case 'washington': case 'wizards': case 'washington wizards':
      return 'washington_wizards';

    case 'denver': case 'nuggets': case 'denver nuggets':
      return 'denver_nuggets';
    case 'minnesota': case 'timberwolves': case 'minnesota timberwolves':
      return 'minnesota_timberwolves';
    case 'oklahoma city': case 'thunder': case 'oklahoma city thunder':
      return 'oklahoma_city_thunder';
    case 'portland': case 'trail blazers': case 'portland trail blazers':
      return 'portland_trail_blazers';
    case 'utah': case 'jazz': case 'utah jazz':
      return 'utah_jazz';

    case 'golden state': case 'warriors': case 'golden state warriors':
      return 'golden_state_warriors';
    case 'la': case 'l.a.': case 'clippers': case 'la clippers': case 'l.a. clippers':
      return 'la_clippers';
    case 'los angeles': case 'lakers': case 'los angeles lakers': case 'la lakers': case 'l.a. lakers':
      return 'los_angeles_lakers';
    case 'phoenix': case 'suns': case 'phoenix suns':
      return 'phoenix_suns';
    case 'sacramento': case 'kings': case 'sacramento kings':
      return 'sacramento_kings';

    case 'dallas': case 'mavericks': case 'dallas mavericks':
      return 'dallas_mavericks';
    case 'houston': case 'rockets': case 'houston rockets':
      return 'houston_rockets';
    case 'memphis': case 'grizzlies': case 'memphis grizzlies':
      return 'memphis_grizzlies';
    case 'new orleans': case 'pelicans': case 'new orleans pelicans':
      return 'new_orleans_pelicans';
    case 'san antonio': case 'spurs': case 'san antonio spurs':
      return 'san_antonio_spurs';
    
    default:
      return 'a';
  }
};

export const getNBATeam = (name) => {
  switch (name.trim().toLowerCase()) {
    case 'boston': case 'celtics': case 'boston celtics':
      return 'Boston Celtics';
    case 'brooklyn': case 'nets': case 'brooklyn nets':
      return 'Brooklyn Nets';
    case 'new york': case 'knicks': case 'new york knicks':
      return 'New York Knicks';
    case 'philadelphia': case '76ers': case 'philadelphia 76ers':
      return 'Philadelphia 76ers';
    case 'toronto': case 'raptors': case 'toronto raptors':
      return 'Toronto Raptors';

    case 'chicago': case 'bulls': case 'chicago bulls':
      return 'Chicago Bulls';
    case 'cleveland': case 'cavaliers': case 'cleveland cavaliers':
      return 'Cleveland Cavaliers';
    case 'detroit': case 'pistons': case 'detroit pistons':
      return 'Detroit Pistons';
    case 'indiana': case 'pacers': case 'indiana pacers':
      return 'Indiana Pacers';
    case 'milwaukee': case 'bucks': case 'milwaukee bucks':
      return 'Milwaukee Bucks';

    case 'atlanta': case 'hawks': case 'atlanta hawks':
      return 'Atlanta Hawks';
    case 'charlotte': case 'hornets': case 'charlotte hornets':
      return 'Charlotte Hornets';
    case 'miami': case 'heat': case 'miami heat':
      return 'Miami Heat';
    case 'orlando': case 'magic': case 'orlando magic':
      return 'Orlando Magic';
    case 'washington': case 'wizards': case 'washington wizards':
      return 'Washington Wizards';

    case 'denver': case 'nuggets': case 'denver nuggets':
      return 'Denver Nuggets';
    case 'minnesota': case 'timberwolves': case 'minnesota timberwolves':
      return 'Minnesota Timberwolves';
    case 'oklahoma city': case 'thunder': case 'oklahoma city thunder':
      return 'Oklahoma City Thunder';
    case 'portland': case 'trail blazers': case 'portland trail blazers':
      return 'Portland Trail Blazers';
    case 'utah': case 'jazz': case 'utah jazz':
      return 'Utah Jazz';

    case 'golden state': case 'warriors': case 'golden state warriors':
      return 'Golden State Warriors';
    case 'la': case 'l.a.': case 'clippers': case 'la clippers': case 'l.a. clippers':
      return 'LA Clippers';
    case 'los angeles': case 'lakers': case 'los angeles lakers': case 'la lakers': case 'l.a. lakers':
      return 'Los Angeles Lakers';
    case 'phoenix': case 'suns': case 'phoenix suns':
      return 'Phoenix Suns';
    case 'sacramento': case 'kings': case 'sacramento kings':
      return 'Sacramento Kings';

    case 'dallas': case 'mavericks': case 'dallas mavericks':
      return 'Dallas Mavericks';
    case 'houston': case 'rockets': case 'houston rockets':
      return 'Houston Rockets';
    case 'memphis': case 'grizzlies': case 'memphis grizzlies':
      return 'Memphis Grizzlies';
    case 'new orleans': case 'pelicans': case 'new orleans pelicans':
      return 'New Orleans Pelicans';
    case 'san antonio': case 'spurs': case 'san antonio spurs':
      return 'San Antonio Spurs';
    
    default:
      return null;
  }
};

export const getArray = (length) => {
  let i = 1;
  const ar = [];
  for (i = 1; i <= length; i++) {
    ar.push(i);
  }

  return ar;
};
