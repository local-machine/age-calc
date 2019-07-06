import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Astronaut } from './Astronaut';

$(function() {
  $("form#make-date").submit(function(event) {
    event.preventDefault();

    let astronaut = new Astronaut($("#date").val());
    $("#mercuryAge").text(astronaut.mercuryAge());
    $("#venusAge").text(astronaut.venusAge());
    $("#earthAge").text(astronaut.earthAge());
    $("#marsAge").text(astronaut.marsAge());
    $("#yearsLeft").text(astronaut.yearsLeft());
    $("#yearsPast").text(astronaut.yearsPast());
  });
});
