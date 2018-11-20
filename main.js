var Trackster = {};
console.log('hi')

$(document).ready(function () {
    $(".btn").click(function () {
        Trackster.searchTracksByTitle($('input').val())
        console.log(Trackster.searchTracksByTitle());
    });

    Trackster.searchTracksByTitle = function (title) {
        $.ajax({
            url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
            datatype: 'JSONP',
            success: function (response) {
                Trackster.renderTracks(response.results.trackmatches.track);
            }
        });
        console.log(Trackster);
    };

    Trackster.renderTracks = function (tracks) {
        var $trackList = $('#output');
        $trackList.empty();

        for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
            var track = tracks[trackIndex];
            var mediumAlbumArt = track.image[1]["#text"];
            var trackInfo =
            '<div class="row">' +
            '<div class="col-md-1" id="playbtn">' + 
            '<a href="'+ track.url + '" target="_blank">' +
            '<i class="fa fa-play-circle-o fa-2x" id="playbtn"></i>' +
            '</a>' + 
            '</div>' + 
            '  <div class="col-xs-4">' + track.name + '</div>' +
            '  <div class="col-xs-2">' + track.artist + '</div>' +
            '  <div class="col-xs-2"><img src="' + mediumAlbumArt + '"/></div>' +
            '  <div class="col-xs-2">' + track.listeners + '</div>' +
            '</div>';
            $trackList.append(trackInfo);
        };
    };
    $(".input").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#search-button").click();
        }
    });

});

const API_KEY = '7311f8e2bafc24ad3cae436fd7a59b8b';
console.log(API_KEY);

/*
Application name	Trackster
API key	7311f8e2bafc24ad3cae436fd7a59b8b
Shared secret	9cd59c0bf1aadfb1823b3cd4a5bd4bf1
Registered to	joshdeo
*/