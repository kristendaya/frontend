let koripia = {
   name : "koripia",
   bornYear: 2024,
   isVeryNice: true,
   worstTripApp: null,
   bestTripApp : {
      function : "meet new friend in Korea",
      language : "Korean"
   }
};

// console.log(koripia.ceo);
// koripia.ceo = "Kristen LEE";
// console.log(koripia.ceo);


// delete koripia.worstTripApp;
// console.log(koripia.worstTripApp)

console.log('name' in koripia)

if ('name' in koripia){
   console.log(`어플리케이션 이름은 ${koripia.name}`)
} else {
   console.log( '어플이름을 아직 짓지 못했습니다.')
}