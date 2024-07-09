
import productLogo from "./img/product.png";
import Product from "./components/product";
import Books from "./components/books";
import Booklogo from "./img/book.png";
import Logo1 from "./img/logo1.png";
import Logo2 from "./img/logo3.png";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-[25px] font-semibold pb-8">Рукнлар</h1>
        <div className="flex gap-7 items-center justify-center ">
          <Product imgsrcc={productLogo} />
          <Product imgsrcc={productLogo} />
          <Product imgsrcc={productLogo} />
          <Product imgsrcc={productLogo} />

          <Product imgsrcc={productLogo} />
          <Product imgsrcc={productLogo} />
        </div>

        <h1 className="text-[25px] font-semibold pt-8">Янги қўшилганлар</h1>
        <div className="grid grid-cols-5 gap-10">
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />{" "}
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />{" "}
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
        </div>
        <h1 className="text-[25px] font-semibold pt-8">Аудио китоблар</h1>
        <div className="grid grid-cols-5 gap-10">
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
          <Books
            ImgLogo={Booklogo}
            title="1984"
            link="SIYOSAT, FANTASTIKA"
            logo1={Logo1}
            logo3={Logo2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
