function handleClick(parameter) {
    var textInput = document.getElementById("textInput");
    var value = textInput.value;
    var length = value.length;
    var lastChar = value[length - 1];
    textInput.value = value + parameter;
    var operations = ["+", "-", "*", "/", "."];
    if (operations.includes(parameter)) {
      if (operations.includes(lastChar)) {
        var removeLast = value.slice(0, -1);
        textInput.value = removeLast + parameter;
      } else {
        textInput.value = value + parameter;
      }
    } else {
      textInput.value = value + parameter;
    }
    textInput.focus()         //it shifts focus to input box
  }
  function calcData() {
    var textInput = document.getElementById("textInput");
    var output = eval(textInput.value);
    textInput.value = output;
  }
  var onEnter = () => {
    if (event.key === "Enter") {
      calcData();
    }else if (event.key === "Backspace"){
        var textInput = document.getElementById("inputText")
        textInput.value = textInput.value.slice(0, -1)
    }
  };

  function handleClear(){
    var textInput = document.getElementById("textInput")
    textInput.value = " "
  }