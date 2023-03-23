"use script";
const button = document.getElementById("button");
const secondButton = document.getElementById("second-button");
const thirdButton = document.getElementById("secondVarFirstBlock");
const forthButton = document.getElementById("secVarSecBlock");
const thirdBlock = document.getElementById("thrBlock");
const secVarThrBlock = document.getElementById("secVarThrBlock");
const forthBlock = document.getElementById("forthBlock");
const secVarforthBlock = document.getElementById("secVarForthBlock");
const fifthBlock = document.getElementById("fifthBlock");
const secVarFifthBlock = document.getElementById("secVarFifthBlock");
const sixthBlock = document.getElementById("sixthBlock");
const secVarSixthBlock = document.getElementById("secVarSixthBlock");
const seventhBlock = document.getElementById("seventhBlock");
const secVarSeventhBlock = document.getElementById("secVarSeventhBlock");
const eighthBlock = document.getElementById("eighthBlock");
const secVarEighthBlock = document.getElementById("secVarEighthBlock");

const dictonary = [
  "общество",
  "Множество",
  "показатель",
  "Всевозможный",
  "Благосостояние",
  "Составление",
  "Счёт",
  "Служить",
  "Определиться",
  "Совокупный",
  "Рыночный",
  "Всего",
  "Объем",
  "Конечный",
  "Производство",
  "Произведение",
  "Некоторый",
  "Пополнить",
  "Запас",
];

const answer = [
  [["հասարակություն"]],
  [["բազմություն"]],
  [["Ցուցանիշ"]],
  [["բազմապիսի"], ["բազմազան"]],
  [["բարեկեցություն"]],
  [["կազմում"], ["կազմելը"], ["հորինելը"], ["գրելը"], ["կցելը"], ["ամրացնելը"]],
  [["հաշիվ"]],
  [["ծառայել"], ["հանդիսանալ"], ["օգտագործվել"]],
  [["որոշվել"], ["ձևավորվել"], ["կազմավորվել"]],
  [["միահամուռ"], ["միագումար"], ["միասնական"]],
  [["շուկայական"], ["շուկայի"]],
  [["ընդամենը"]],
  [["ծավալ"]],
  [["վերջնական"]],
  [["արտադրություն"]],
  [["արտադրանք"]],
  [["մի որոշ"], ["մի քանի"]],
  [["լրացնել"], ["համալրել"]],
  [["պաշար"]],
];

const secondDictonary = [
  "Следовательно",
  "Прирост",
  "Подстать",
  "Поскольку",
  "Помощь",
  "Измерять",
  "Текущий",
  "Продукция",
  "Независимо",
  "Образ",
  "Равно",
  "Базироваться",
  "Расчёт",
  "Способ",
  "Потребитель",
  "Пользователь",
  "Росходовать",
  "Покупка",
  "Сложить",
  "Заработная плата",
  "Платеж",
  "Создание",
  "Нация",
  "Общественно-политический",
  "Относящийся",
  "Связанный",
  "Равноправие",
  "Приставка",
  "Совершенный",
];

const secondAnswer = [
  [["հետևաբար"]],
  [["աճ"]],
  [["համապատասխան է"], ["հարմար է"], ["վայել է"]],
  [["որքան որ"], ["քանի որ"], ["որչափ որ"], ["որովհետև"], ["որքան"]],
  [["օգնություն"]],
  [["չափել"]],
  [["ընթացիկ"], ["ներկա"], ["այժմյան"]],
  [["արտադրանք"]],
  [["անկախորեն"]],
  [["կերպարանք"], ["ձև"]],
  [["հավասարապես"], ["հավասարաչափ"]],
  [["հիմնվել"]],
  [["հաշիվ"]],
  [["եղանակ"], ["միջոց"], ["գործելու ձև"]],
  [["սպառող"]],
  [["օգտատեր"]],
  [["ծախսել"], ["գործածել"], ["սպառել"]],
  [["գնում"], ["գնելը"], ["առնելը"]],
  [["դնել"], ["դարսել"], ["շարել"], ["ծալել"], ["գումարել"]],
  [["աշխատավարձ"]],
  [["վճարում"], ["վճար"]],
  [["ստեղծում"]],
  [["ազգ"]],
  [["հասարակական-քաղաքական"]],
  [["առնչվող"]],
  [["կապված"]],
  [["իրավահավասարություն"]],
  [["1.Կցելը"], ["ամրացնելը"], ["2.(քեր.)նախածանց"]],
  [["կատարյալ"]],
];

const thirdDictonary = [
  "Образовать",
  "Течь",
  "Мыть",
  "Рыть",
  "Тянуть",
  "Тащить",
  "Чертить",
  "Печатать",
  "Смешить",
  "Бить",
  "Звать",
  "Седеть",
  "Строить",
  "Обедать",
  "Ужинать",
];

const thirdAnswer = [
  [["1.Ուսուցանել"], ["2.Զարգացնել"], ["կատարելագործել"], ["շակել"]],
  [["1.հոսել"], ["թափվել"], ["2.Ծորալ"]],
  [["1.Լվանալ"], ["2.Ողողել"]],
  [["Փորել"], ["քանդել"]],
  [["Քաշել"], ["ձգել"]],
  [["1.Քաշել"], ["քարշ տալ"], ["2.Կրել"], ["տանել"]],
  [["Գծել"]],
  [["1.Տպել"], ["2.Հրատարակել"]],
  [["Ծիծաղեցնել"]],
  [["1.Ծեծել"], ["2.Խփել"]],
  [["1.Կանչել"], ["հրավիրել"], ["2.Անուն տալ"]],
  [["Ճերմակել"], ["ալևորել"]],
  [["Շինել"], ["կառուցել"]][["Ճաշել"]],
  [["Ընթրել"]],
];

const forthDictonary = [
  "Завтракать",
  "Спешить",
  "Гнать",
  "Слыть",
  "Слепнуть",
  "Глохнуть",
  "Неметь",
  "Глушить",
  "Верить",
  "Варить",
  "Петь",
  "Спеть",
  "Шить",
  "Резать",
  "Мазать",
  "Гореть",
  "Путать",
];
const forthAnswer = [
  [["Նախաճաշել"]],
  [["Շտապել"], ["աճապարել"]],
  [["1.Քշել"], ["վանել"], ["հեռացնել"], ["2.Քշել, վարել"]],
  [["Հայտնի լինել"], ["համբավ ունենալ"]],
  [["Կուրանալ"]],
  [["1.Խլանալ"], ["2.Հանգչել"], ["մարել"]],
  [["1.Համրանալ"], ["լռել"], ["2.Թմրել"], ["անզգայանալ"]],
  [["1.Խլացնել"], ["ուշաթափ"], ["անել"], ["2.Լռեցնել"], ["3.Խեղդել"]],
  [["Հավատալ"]],
  [["Եփել"]],
  [["Երգել"]],
  [["Հասունանալ"]],
  [["Կարել"]],
  [["Կտրել"]],
  [["1.Քսել"], ["2.Ներկել"]],
  [["1.Այրվել"], ["վառվել"], ["2.Լույս տալ"]],
  [["1.Խճճել"], ["խառնել"], ["2.Շփոթել"]],
];

const fifthDictonary = [
  "Выделить",
  "Вытечь",
  "Вымыть",
  "Вырыть",
  "Вытянуть",
  "Вытащить",
  "Вычертить",
  "Начертить",
  "Напечатать",
  "Насмешить",
  "Побить",
  "Позвать",
  "Поседеть",
  "Построить",
  "Пообедать",
  "Поужинать",
];

const fifthAnswer = [
  [["առանձնացնել"]],
  [["Հոսել"]],
  [["1.Լվանալ"], ["2.Ողողել"]],
  [["Փորել"]],
  [["Քաշել"], ["ձգել"]],
  [["1.Դուրս բերել"], ["2.Դուրս քաշել"]],
  [["Գծագրել"]],
  [["Գծել"], ["գծագրել"]],
  [["Տպել"], ["տպագրել"]],
  [["Ծիծաղեցնել"]],
  [["1.Ծեծել"], ["2.Ջարդել"]],
  [["Կանչել"], ["հրավիրել"]],
  [["Ճերմակել"]],
  [["Շինել"], ["կառուցել"]],
  [["Ճաշել"]],
  [["Ընթրել"]],
];

const sixthDictonary = [
  "Позавтракать",
  "Поспешить",
  "Пожить",
  "Прожить",
  "Прогнать",
  "Прослыть",
  "Ослепнуть",
  "Оглохнуть",
  "Онеметь",
  "Оглушить",
  "Сверить",
  "Сварить",
  "Спеть",
  "Сшить",
  "Срезать",
  "Смазать",
  "Сгореть",
];

const sixthAnswer = [
  [["Նախաճաշել"]],
  [["Շտապել"], ["աճապարել"]],
  [["Ապրել"], ["կյանք վարել"]],
  [["Ապրել"], ["գոյություն ունենալ (մի որոշ ժամանակ)"]],
  [["1.Դուրս քշել"], ["վռնդել"], ["2.Հեռացնել"]],
  [["Հռչակվել"], ["հայտնի դառնալ"]],
  [["Կուրանալ"]],
  [["Խլանալ"]],
  [["1.Համրանալ"], ["2.Թմրել"]],
  [["1.Խլացնել"], ["2.Ուշագնաց անել"], ["3.(փոխբ.) ապշեցնել"]],
  [["Համեմատել"], ["համեմատելով ստուգել"]],
  [["Եփել"]],
  [["Երգել"]],
  [[" Կարել"]],
  [["Կտրել"], ["հատել"], ["սղոցել"]],
  [["Յուղել"], ["ձիթել"], ["քսել"]],
  [["Այրվել"], ["վառվել"], ["այրվել-վերջանալ"]],
];

const seventhDictonary = [
  [["Спутать"], ["(сов.)"]],
  [["Скосить"], ["(сов.)"], ['(1 իմաստ)']],
  [["Скосить"], ["(сов.)"], ["(2 իմաստ)"]],
  [["Подберить"], ["(сов.)"]],
  [["Приставочный"]],
  [["Лексический"]],
  [["Значение"]],
  [["Доварить"], ["(сов.)"]],
  [["Переварить"], ["(сов.)"]],
  [["Разварить"], ["(сов.)"]],
  [["Перестроить"], ["(сов.)"]],
  [["Достроить"], ["(сов.)"]],
];

const seventhAnswer = [
  [["խառնէլ"]],
  [["խառնէլ"]],
  [["խառնէլ"]],
  [["խառնէլ"]],
  [["խառնէլ"]],
  [["խառնէլ"]],
  [["խառնէլ"]],
  [["խառնէլ"]],
];

const eighthDictonary = [
  [['Разварить'], ['(сов.)']],
  [['Перестроить'],['(сов.)']],
  [['Достроить'], ['(сов.)']],
  [['Выстроить'], ['(сов.)']],
  [['Запеть'], ['(сов.)']],
  [['Пропеть'], ['(сов.)']],
  [['Допеть'], ['(сов.)']],
  [['Помыть'], ['(сов.)']],
  [['Косить'],['(несов.)'], ['(1 իմաստ)']]
]

const eighthAnswer = [
  [['hello']],
  [['hello']],
  [['hello']],
  [['hello']],
  [['hello']],
  [['hello']],
  [['hello']],
  [['hello']],
  [['hello']],
]

button.addEventListener("click", function () {
  let i = 0;
  while (i < dictonary.length) {
    let userInput = prompt(`${dictonary[i]}`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === answer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${answer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

secondButton.addEventListener("click", function () {
  let i = 0;
  while (i < secondDictonary.length) {
    let userInput = prompt(`${secondDictonary[i]}`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === secondAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${secondAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

thirdButton.addEventListener("click", function () {
  let i = 0;
  while (i < answer.length) {
    let userInput = prompt(`${answer[i]}`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === dictonary[i].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${dictonary[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});
forthButton.addEventListener("click", function () {
  let i = 0;
  while (i < secondAnswer.length) {
    let userInput = prompt(`${secondAnswer[i]}`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === secondDictonary[i].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${secondDictonary[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});
thirdBlock.addEventListener("click", function () {
  let i = 0;
  while (i < thirdDictonary.length) {
    let userInput = prompt(`${thirdDictonary[i]} (несов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === thirdAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${thirdAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});
forthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < forthDictonary.length) {
    let userInput = prompt(`${forthDictonary[i]} (несов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === forthAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${forthAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

secVarThrBlock.addEventListener("click", function () {
  let i = 0;
  while (i < thirdAnswer.length) {
    let userInput = prompt(`${thirdAnswer[i]} (несов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === thirdDictonary[i].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${thirdDictonary[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});
secVarForthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < forthAnswer.length) {
    let userInput = prompt(`${forthAnswer[i]} (несов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === forthDictonary[i].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${forthDictonary[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

fifthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < fifthDictonary.length) {
    let userInput = prompt(`${fifthDictonary[i]} (сов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === fifthAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${fifthAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

secVarFifthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < fifthAnswer.length) {
    let userInput = prompt(`${fifthAnswer[i]} (сов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === fifthDictonary[i].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${fifthDictonary[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

sixthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < sixthDictonary.length) {
    let userInput = prompt(`${sixthDictonary[i]} (сов)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === sixthAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${sixthAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

secVarSixthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < sixthAnswer.length) {
    let userInput = prompt(`${sixthAnswer[i]} (сов.)`);
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === sixthDictonary[i].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${sixthDictonary[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

seventhBlock.addEventListener("click", function () {
  let i = 0;
  while (i < seventhDictonary.length) {
    if (seventhDictonary[i][1] && seventhDictonary[i][2] !== undefined) {
      userInput = prompt(
        `${seventhDictonary[i][0]}${seventhDictonary[i][1]}${seventhDictonary[i][2]}`
      );
    } else if(seventhDictonary[i][1] !== undefined){
      userInput = prompt(`${seventhDictonary[i][0]}${seventhDictonary[i][1]}`);
    }else{
      userInput = prompt(`${seventhDictonary[i][0]}`);
    }
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === seventhAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${seventhAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

secVarSeventhBlock.addEventListener("click", function () {
  let i = 0;
  while (i < seventhAnswer.length) {
    if (seventhDictonary[i][1] && seventhDictonary[i][2] !== undefined) {
      userInput = prompt(
        `${seventhAnswer[i]}${seventhDictonary[i][1]}${seventhDictonary[i][2]}`
      );
    } else if(seventhDictonary[i][1] !== undefined){
      userInput = prompt(`${seventhAnswer[i]}${seventhDictonary[i][1]}`);
    }else{
      userInput = prompt(`${seventhAnswer[i]}`);
    }
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === seventhDictonary[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${seventhDictonary[i][0]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

eighthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < eighthDictonary.length) {
    if (eighthDictonary[i][1] && eighthDictonary[i][2] !== undefined) {
      userInput = prompt(
        `${eighthDictonary[i][0]}${eighthDictonary[i][1]}${eighthDictonary[i][2]}`
      );
    } else if(seventhDictonary[i][1] !== undefined){
      userInput = prompt(`${eighthDictonary[i][0]}${eighthDictonary[i][1]}`);
    }else{
      userInput = prompt(`${eighthDictonary[i][0]}`);
    }
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === eighthAnswer[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${eighthAnswer[i]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});

secVarEighthBlock.addEventListener("click", function () {
  let i = 0;
  while (i < eighthAnswer.length) {
    if (eighthDictonary[i][1] && eighthDictonary[i][2] !== undefined) {
      userInput = prompt(
        `${eighthAnswer[i]}${eighthDictonary[i][1]}${eighthDictonary[i][2]}`
      );
    } else if(eighthDictonary[i][1] !== undefined){
      userInput = prompt(`${eighthAnswer[i]}${eighthDictonary[i][1]}`);
    }else{
      userInput = prompt(`${eighthAnswer[i]}`);
    }
    if (userInput !== null) {
      userInput = userInput.toLowerCase();
      if (userInput === eighthDictonary[i][0][0].toLowerCase()) {
        alert("Այո՛, դուք ճիշտ եք՝");
        i++;
      } else {
        alert(`${eighthDictonary[i][0]}`);
        i++;
      }
    } else {
      alert("До свидания");
      break;
    }
  }
});
