    import React from 'react';
    import logo from './logo.png';
    import './App.css';
    import Course from './component/Course/Course';
    import fakeData from './fakeData'
    import { useState } from 'react';
    import { useEffect } from 'react';
    import Cart from './component/Cart/Cart'
    import Nav from './component/Nav/Nav';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

    function App() {

    const [course, setCourse] = useState(fakeData);
    const [count, setCount] = useState([]);
    const [keyword, setKeyword] = useState("");




    const handleAddCourse = (courses) => {
    //Check if the course has been added in the cart or not!
    if (count.includes(courses)) { alert("⚠️ Alert! It's already added, Try another one") }
    else {
      const newCount = [...count, courses];
      setCount(newCount);
    }


    }
    //Converting any input string so that it is capitalized 
    function capitalizeWords(str) {

    let words = str.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);

    })
    return words.join(" ");
    }

    //filtering Courses based on the user search
    useEffect(() => {
    const newString = capitalizeWords(keyword);
    const results = fakeData.filter(
      (courseInfo) =>
        courseInfo.courseName.includes(newString)
    );
    setCourse(results);
    }, [keyword]);
    return (


    <div className="container-fluid main-web ">

      <div className="head">
        <img className="img-responsive headImage" src={logo} alt=""></img>
        <h5>Build Your Career Online <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h5>


      </div>


      <div className="row ">


        <div className="col-md-9 main    "
          style={{ padding: "10px", borderRight: "2px solid grey" }}>


          <Nav setKeyword={setKeyword}></Nav>
          <div className="courseDesign">


            {

              course.map((cd) =>

                <Course className="" handleAddCourse={handleAddCourse} courseDescription={cd} key={cd.id}></Course>

              )
            }
          </div>
        </div>
        <div className="col-md-3 cart">

          <Cart cart={count}></Cart>
        </div>
      </div>

    </div>

    );
    };

    export default App;
