//
var firstP = $('#first_paragraph')
var secondP = $('#second_paragraph')
var firstC = $('#first_chorus')
var thirdP = $('#third_paragraph')
var fourthP = $('#fourth_paragraph')
var sixthP = $('#second_chorus')


function changeBackground() {              //First Paragraph
  $('body').css("background","#44BBFD")
}
firstP.on("click",changeBackground)



function changeStyle() {                        //Second Paragraph
  $('.second_paragraph').css("display","block")
}
secondP.on("click",changeStyle)



function changeStyleChorusOne() {              //First Chorus
  $('.first_chorus').css("display","block")
  event.preventDefault();
}
firstC.on("click",changeStyleChorusOne)



function changeStyleThree() {                  //Third Paragraph
  $('.third_paragraph').show()
  event.preventDefault();
}
thirdP.on("click",changeStyleThree)


function changeStyleFour() {                 //Fourth Paragraph
  $('.fourth_paragraph').show()
  event.preventDefault();
}
fourthP.on("click",changeStyleFour)

i = 0

function changeStyleChorusTwo() {

  $('.second_chorus').eq(i).show()
  i = i +1
  event.preventDefault();
}
sixthP.on("click",changeStyleChorusTwo)













// $('a').on("click",function() {
//   console.log($(this).text());
// }
// )


// $("button").on("click",function(){
//   console.log($(this).text());
// })
