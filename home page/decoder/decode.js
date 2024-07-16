
    
    const decode = () =>{
        let decode_text = document.getElementById('decode').value;
        let decode = "";
        for(let i = 1; i<=5;i++){
        decode = atob(decode_text);
        }
        document.getElementById('result-decode').textContent = decode;
        }
    
        //copy button
    

    
          document.getElementById('copyButton2').addEventListener('click', function() {
            const messageBox = document.getElementById('result-decode');
            
            // Select the text inside the message box
            var range = document.createRange();
            range.selectNodeContents(messageBox);
            
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            
            // Copy the selected text
            document.execCommand('copy');
            
            // Deselect the text
            selection.removeAllRanges();
            
            // Notify user (optional)
            alert('Text copied to clipboard');
          });
          
      
    
      
    