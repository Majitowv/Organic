import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./compoments/layout/Header";
import MainWelcome from "./compoments/pages/main/MainWelcome";
import MainPages from "./compoments/pages/main/MainPages";
import Admin from "./compoments/pages/admin";
import Footer from "./compoments/layout/Footer";
import Details from "./compoments/pages/Details/Details";
import Subscribe from "./compoments/pages/Subscribe/Subscribe";
import Basket from "./compoments/pages/Basket/index";
import Contact from "./compoments/pages/Contact/Contact";
import MainCategory from "./compoments/pages/main/MainCategory";
import Scroll from "./compoments/pages/Scroll/Scroll";
import Category from "./compoments/pages/Category/Category";

function App() {
  const routers = [
    {
      id: 1,
      path: "/home",
      element: <MainPages />,
    },
    {
      id: 2,
      path: "/mainpages",
      element: <MainWelcome />,
    },
    {
      id: 3,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 4,
      path: "/Details/:detailsId",
      element: <Details />,
    },
    {
      id: 5,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 6,
      path: "/contact",
      element: <Contact />,
    },
    {
      id: 7,
      path: "/category/:catName",
      element: <Category />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Scroll />
      <Routes>
        {routers.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
