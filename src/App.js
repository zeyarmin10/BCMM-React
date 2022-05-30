import React, { useEffect, useState } from "react";
import "./css/style.css";
import FruitList from "./views/fruit/fruitList";
import FruitRegister from "./views/fruit/fruitRegister";
// import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import EmpDetial from "./views/pages/empDetail/empDetialIndex";
// import Home from "./views/pages/home/homeIndex";
// import Profile from "./views/pages/profile/profileIndex";
// import Fruit from "./views/pages/fruit/fruitIndex";
const Home = React.lazy(() => import("./views/pages/home/homeIndex"));
const Profile = React.lazy(() => import("./views/pages/profile/profileIndex"));
const Fruit = React.lazy(() => import("./views/pages/fruit/fruitIndex"));
const NavBar = React.lazy(() => import("./views/pages/navbar/navbar"));
const Register = React.lazy(() =>
  import("./views/pages/register/registerIndex")
);
const EmpList = React.lazy(() =>
  import("./views/pages/employeeList/employeeListIndex")
);
const EmpDetail = React.lazy(() =>
  import("./views/pages/empDetail/empDetialIndex")
);
const AboutUs = React.lazy(() => import("./views/pages/aboutUs/aboutUsIndex"));
const ErrorPage = React.lazy(() =>
  import("./views/pages/errorPage/errorPageIndex")
);
const UserList = React.lazy(() => import("./views/pages/userList/userList"));
const UserDetail = React.lazy(() =>
  import("./views/pages/userDetail/userDetail")
);

const App = () => {
  const Loading = (
    <div>
      <h1>Loading</h1>
    </div>
  );
  // const [fruits, setFruits] = useState([
  //   {
  //     name: "Banana",
  //     price: "500",
  //   },
  //   {
  //     name: "Kiwi",
  //     price: "1500",
  //   },
  //   {
  //     name: "Lychee",
  //     price: "1000",
  //   },
  //   {
  //     name: "Watermalone",
  //     price: "2000",
  //   },
  //   {
  //     name: "Dragon Fruit",
  //     price: "2500",
  //   },
  //   {
  //     name: "Rambutan",
  //     price: "3000",
  //   },
  // ]);
  // const [fruitName, setFruitName] = useState("");
  // const [fruitPrice, setFruitPrice] = useState('');
  // const [title, setTitle] = useState("Fruit List");
  // useEffect(() => {
  //   let sPrice = fruits.filter((data) => {
  //     return data.price === 1000;
  //   })
  //   setTimeout(() => {
  //     setTitle('fruit Data')
  //   }, 3000)
  // }, [])
  // const handleChange = (e) => {
  //   setFruitName(e.target.value);
  // }
  // const handlePriceChange = (e) => {
  //   setFruitPrice(e.target.value);
  // }
  // const addFruit = () => {
  //   setFruits ([...fruits, { name: fruitName, price: fruitPrice }]);
  //   setFruitPrice([...fruits, {name: fruitName, price: fruitPrice}]);
  //   setFruitName('');
  //   setFruitPrice('');
  // }
  return (
    // <div className="fruitContainer">
    //   <h1>{title}</h1>
    //   <FruitList fruits={fruits} />
    //   <FruitRegister
    //     fruitName={fruitName}
    //     fruitPrice={fruitPrice}
    //     handleChange={handleChange}
    //     handlePriceChange={handlePriceChange}
    //     addFruit={addFruit}
    //   />
    // </div>
    <BrowserRouter>
      <React.Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/fruit" component={Fruit}></Route>
          <Route path="/navbar" component={NavBar}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/employeeList" component={EmpList}></Route>
          <Route path="/empDetail" component={EmpDetail}></Route>
          <Route path="/aboutUs" component={AboutUs}></Route>
          <Route exact path="/errorPage" component={ErrorPage}></Route>
          <Route exact path="/userList" component={UserList}></Route>
          <Route exact path="/userDetail" component={UserDetail}></Route>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route>
            <Redirect to="/errorPage" />
          </Route>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
// fruits: [
//   {
//     name: "Banana", price: '500'
//   },
//   {
//     name: "Kiwi", price: '1500'
//   },
//   {
//     name: "Lychee", price: '1000'
//   },
//   {
//     name: "Watermalone", price: '2000'
//   },
//   {
//     name: "Dragon Fruit", price: '2500'
//   },
//   {
//     name: "Rambutan", price: "3000"
//   }
//       ],
//       drink: [
//         {
//           name: "Bubbles Tea",
//         },
//         {
//           name: "Coffee",
//         },
//         {
//           name: "Cola",
//         },
//         {
//           name: "Tea",
//         },
//       ],
//       fruitName: "",
//       title: "Fruit Data"
//     };
//   }

//   componentDidMount() {
//     let setPrice = this.state.fruits.filter((data) => {
//       return data.price === '3000'
//     });
//     this.setState({fruits: setPrice})
//   }

//   // componentDidUpdate() {
//   //   alert("update");
//   // }

//   handleClick = () => {
//     this.setState({ name: "Hello World" });
//   };
//   handleChange = (e) => {
//     this.setState({ fruitName: e.target.value });
//   };

//   addFruit = () => {
//     this.setState({
//       fruits: [...this.state.fruits, { name: this.state.fruitName }],
//       fruitName: "",
//     });
//   };

//   render() {
//     return (
// <div className="fruitContainer">
//   <h1>{this.state.title}</h1>
//   <FruitList f={this.state.fruits} />
//   <FruitRegister
//     fruitName={this.state.fruitName}
//     handleChange={this.handleChange}
//     addFruit={this.addFruit}
//   />
// </div>
//     );
//   }
// }
