function showKategorie(kategorie) {
    if (kategorie === '클럽') {
        $('.life_club').show();
        $('.life_theater').hide();
        $('.life_bar').hide();
        $('.life_enjoy').hide();
    } else if (kategorie === '극장') {
        $('.life_club').hide();
        $('.life_theater').show();
        $('.life_bar').hide();
        $('.life_enjoy').hide();
    } else if (kategorie === '바') {
        $('.life_club').hide();
        $('.life_theater').hide();
        $('.life_bar').show();
        $('.life_enjoy').hide();
    }else if (kategorie === '즐길거리') {
        $('.life_club').hide();
        $('.life_theater').hide();
        $('.life_bar').hide();
        $('.life_enjoy').show();
    }
}