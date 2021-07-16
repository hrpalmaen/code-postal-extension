const dataPostalCode = [
  {
    name: "medellin",
    code: 050032,
  },
  {
    name: "envigado",
    code: 055422,
  },
  {
    name: "sabaneta",
    code: 055450,
  },
  {
    name: "bello",
    code: 051050,
  },
  {
    name: "manizales",
    code: 170004,
  },
  {
    name: "pasto",
    code: 520003,
  },
];


document.addEventListener(
    "DOMContentLoaded",
    function () {
        var $input = document.querySelector('.js-input')
        var $button = document.querySelector('.js-search')
        var $text = document.querySelector('.js-text')
        console.log('$input: ', $input.value);
        var pepe = ''
        $button.addEventListener("click", function() {
            dataPostalCode.forEach(function(location) {
                if (location.name == $input.value.toLowerCase()) {
                    pepe = location.code;
                }
            })
            $text.innerText = pepe;
        })
        // $button.addEventListener("click", handleClick($input, $text))
    }
)

function handleClick (input, text) {
    // var postalCode
    console.log('entroooo');
    var pepe = ''
    dataPostalCode.forEach(function (location) {
        if(location.name === input.value.toLowerCase()) {
            pepe =  location.code
        }
    })
    text.innerText = pepe
}
