'use strict';

class Emoji {

  getEmojiData(emojiText) {  
    let promise = fetch('https://makers-emojify.herokuapp.com/', {
      method: "POST",
      body: JSON.stringify({
        text: `${emojiText}`
        }),

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    //converting to JSON
    .then(status)
    .then(response => response.json())
    .then(data => {
      console.log(data.emojified_text)
    })
    .catch(error => {
      console.log('Request failed', error)
    });

    // debugger;
    return promise;
  }
}