"use strict"

import * as dawaAutocomplete2 from 'dawa-autocomplete2';

dawaAutocomplete2.dawaAutocomplete( document.getElementById("adresse"), {
	select: function(selected) {
    document.getElementById("valgtadresse").innerHTML= selected.tekst;
  }
});
