/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  // 자료 잠깐 저장할 땐 변수
  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '맛집 추천', '리액트 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let [val, setVal] = useState('');

  // // array 자료
  // let num = [1, 2];
  // // let a = num[0]; // Destructuring 문법
  // // let c = num[1];
  // let [a, c] = [1, 2];

  //state
  // -> 변동시 자동으로 html에 변영되게 만들고 싶을때
  return (
    <div className='App'>
      <div className="black-nav">
        <h4 style={{ color: 'white', fontSize: '16px' }}>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy)
        }}
      >
        첫번째글 제목 변경
      </button>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>❤</span> {like} </h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        <p>2월 17일 발행 </p>
      </div> */}

      {
        title.map((t, index) => {
          return (
            <div className="list" key={index}>
              <h4 onClick={() => {
                setModal(!modal)
                setIdx(index)
              }}
              >{title[index]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[index] += 1
                  setLike(copy)
                }}>
                  &nbsp;❤
                </span> {like[index]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => title.filter(title => title !== title[index])}>삭제</button>
            </div>
          )
        })
      }

      {/* <h4>{post}</h4> */}

      <input onChange={(e) => { setVal(e.target.value); console.log(val) }} />
      <button>저장</button>

      {modal ? <Modal title={title} idx={idx} /> : null}

    </div >
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
