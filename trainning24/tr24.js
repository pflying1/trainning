/**
 * * 포켓몬과 디지몬을 좋아하는 2조의 뜻에 따라,
 * @param {array} targetArray
 * @param {array} compareArray
 * @param {array} originalArray
 * @returns {object} 중복된 요소와, 바뀔 요소를 담은 객체
 *
 * git의 diff 기능처럼 두 값(배열)을 비교하여, 중복되는 요소가 있을 경우
 * 중복되는 요소를 바꾸기 위해 필요한 요소를 담은 객체를 리턴하는 논리를
 * 매우 자주 사용합니다.
 *
 */

function diffFinder(targetArray, compareArray, originalArray) {
  // 복사할 요소와, 교체할 요소를 별도의 메모리(변수)에 담아놓기 위해 null로 초기화
  // 이렇게 지역변수로 '이름'을 작성해 무엇을 염두하고 있는지를 유추할 수 있습니다.
  let duplicatedElement = null;
  let replaceElement = null;

  // todo : typescript로 변환할 때
  // 위 두개의 지역변수의 기본형은
  // let duplicatedElement: null = null;
  // null 데이터타입을 명시하는 것이 맞습니다.
  // 하지만 아래의 실험에 의해 string으로 변환될 예정이기에 에러가 발생할 것이 확정입니다.
  // 타입 명시, 타입 표기도 약간의 변용 여지를 남겨주기 위해 여러 타입을 명시하는 것을
  // 합집합 타입, 유니온 타입이라고 합니다. (union type)

  targetArray.forEach((element, index) => {
    if (compareArray.includes(element) === true) {
      duplicatedElement = element; // 중복되어 있는 요소를 미리 만들어둔 변수에 할당
      replaceElement = originalArray[index]; // 중복되었다고 판단되는 시점의 index를 통해 교체하기 위해 별도의 변수에 할당
      targetArray[index] = replaceElement; // 요소 교체
    }
  });

  // 리턴 부분에서는 가독성을 위해 객체의 키값을 지역변수이름과 동일하게 지정하였지만,
  // 완전히 다른 키이름으로 지정해도 무방합니다.
  return {
    duplicatedElement: duplicatedElement,
    replaceElement: replaceElement,
  };
}

const pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];
const digimon = ["코로몬", "테일몬", "가브몬", "꼬부기"];
const digimonOriginalData = ["코로몬", "테일몬", "가브몬", "어니몬"];

console.log(diffFinder(digimon, pokemon, digimonOriginalData));
console.log(pokemon);
console.log(digimon);
console.log(digimonOriginalData);
