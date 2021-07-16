'use strict';

class Emoji {
  convert = (text) => {
    let note = {
      text: text
    }
  
    let params = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(note)
    };
  
    return fetch('https://makers-emojify.herokuapp.com/', params)
    .then(response => response.json())
    .then(data => data.emojified_text);
  };
}