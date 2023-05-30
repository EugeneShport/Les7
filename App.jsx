import logo from './logo.svg';
import './App.css';
import Sonic from './Sonic.PNG';
import { useState } from 'react';
import { useEffect } from 'react';

// Я хотел, чтобы часы работали, только когда Соник танцует, и переставали работать при нажатии на кнопку "Не танцевать".
// Но у меня так и не получилось этого сделать. Я сдалал очень много попыток воспользовавшись всеми известными мне методами.
// И If, и While и, самый последний, For. Но всё оканчивалось тем, что сайт ложился, от бесконечныых изменений.

function App() {
  // Классы для скрытия частей сайта
  const [style1, setStyle1] = useState('vse');
  const [style2, setStyle2] = useState('hide');
  const [style3, setStyle3] = useState('hide');
  const [style4, setStyle4] = useState('hide');

  const [chislo, setChislo] = useState(0);
// Счётчик
  const [date, setDate] = useState('')
// Дата
  useEffect(() => {
    let newDate = new Date();
    setDate(newDate.toString());
  }, [chislo])
// Отслеживание изменений числа, для обновления времени.
  return (
  <>
  <div className={style1}>
  <h1>count:{chislo}</h1>
  <button onClick={ () => {setChislo(chislo+1)}}> Увеличить</button>
  <button onClick={ () => {setChislo(chislo-1)}}> Уменьшить</button>
  </div>

  <button onClick={ () => {
    setStyle1('hide')
    setStyle2('nikakoy')
    setStyle4("vse")}} className={style1} >Перейти на следующий этап</button>

  <div  className={style2}>

  <img className= {style3} src="https://media.tenor.com/w_swRDs3PP4AAAAi/dancing-groovy.gif" alt=""/>
  <img className= {style4} id='Sonic' src={Sonic} alt=""/>

  <p>{date}</p>

  <p>Это Соник. Когда он танцует, то вырабатывается электричество. Чтобы видеть время заряжайте часы.</p>
  <p>Подбадривай Соника, чтобы он танцвал энергичнее.</p>
  
  <button onClick={ () => {
    setStyle4('hide');
    setStyle3('vse');
    setChislo(chislo+ 1);
    // for (let i = 0; i < 10000; {chislo} === 0) {
    //   setTimeout(() => {
    //     timer = timer + {chislo};
    //     i = i + {chislo};
    //     console.log(timer);
    //   }, 1000);}
  }}>Подбодрить</button>
  
  <button onClick={ () => {
    setStyle3('hide');
    setStyle4('vse');
    // setChislo(10000);
  }}>Не Танцевать</button>
  </div>
  </>

  );
}

export default App;
