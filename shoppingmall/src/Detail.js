import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import './Detail.scss'

let 박스 = styled.div`
    padding-top:30px;
`

let 제목 = styled.h4`
    font-size:25px;
`

function Detail(props) {
    let [alert, alert변경] = useState(true)
    useEffect(()=>{
        let 타이머 = setTimeout(()=>{
            alert변경(false)
        }, 2000)

        return () => { clearTimeout(타이머)}
    },[])

    

    let { id } =useParams();
    let history =useHistory();

    let 찾은상품 = props.ring.find(function(상품){
        return 상품.id == id
    })

    return (
      <div className="container">
          <박스>
            <제목 className="red">Detail</제목>
          </박스>
          
          {
              alert === true
              ? (<div className="my-alert">
              <p>재고가 얼마 남지 않았습니다</p>
              </div>)
              :null
          }
        <div className="row">
          <div className="col-md-6">
            <img src={"https://Shinjiwoooo.github.io/img/ring0"+(찾은상품.id+1)+".png"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <Info 재고={props.재고}></Info>
            <button className="btn btn-danger" onClick={()=>{
              let copy = props.재고
              copy = props.재고 -1
              props.재고변경(copy)

              if (copy === 0){
                props.재고변경('품절')
              }
            }}>주문하기</button> 
            <button className="btn btn-danger onClick" onClick={()=>{
                history.push('/')
            }}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
  }

  function Info(props){
    return(
      <p>재고: {props.재고}</p>
    )
  }
  export default Detail