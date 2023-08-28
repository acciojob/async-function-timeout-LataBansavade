//your JS code here. If required.
 async function delayedMessage(message, delay) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return message;
    }

    // Event listener for the button click
    document.getElementById('btn').addEventListener('click', async () => {
      const inputText = document.getElementById('text').value;
      const inputDelay = parseInt(document.getElementById('delay').value);

      if (inputText && inputDelay) {
        const result = await delayedMessage(inputText, inputDelay);

        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
      }
    });