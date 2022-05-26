/* eslint-disable */
import './App.css';
import React, { useState } from 'react';

function App() {

  // 자료 잠깐 저장할 땐 변수
  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '맛집 추천', '리액트 독학']);
  let [date, setDate] = useState(['2022-04-01', '2022-04-01', '2022-04-01']);
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
              <p>{date[index]}</p>
              <button onClick={() => {
                let copy = [...title];
                copy.splice(index, 1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* <h4>{post}</h4> */}

      <input onChange={(e) => { setVal(e.target.value); console.log(val) }} />
      <button onClick={(e) =>{
        let copy = [...title];
        copy.unshift(val);
        setTitle(copy);
        
        let copy2 = [...like];
        copy2.unshift(0);
        setLike(copy2);
        
        var today = new Date();
        var year = today.getFullYear();
        var month = ("0" + (1 + today.getMonth())).slice(-2);
        var day = ("0" + today.getDate()).slice(-2);
        let copy3 = [...date];
        copy3.unshift(year + '-' + month + '-' + day);
        setDate(copy3);
      }} disabled={!val}>글 발행</button>

      {modal ? <Modal title={title} idx={idx} /> : null}
      <br/>
      <br/>
      <Profile/>  
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

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {name : 'kim', age : 30}
  }

  // changeName() {
  //   this.setState({name : 'Park'})
  // }

  changeName = () => {
    this.setState({name : 'Park'})
  }

  render(){
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={
          // this.setState({name : 'Park'})
        // this.changeName.bind(this)
        this.changeName
        }>변경</button>
      </div>
    )
  }
}

export default App;
