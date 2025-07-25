import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  title: string;
  price: number;
  content: string;
};

const Home: React.FC = () => {
  let normal_string = "시스템 문자열";
  const [bind_string, setBindString] = useState<string>("바인딩 문자열");
  const [product, setProduct] = useState<Product>({} as Product);
  const [samplenumber, setsamplenumber] = useState<number[]>([1, 2, 3, 4, 5]);
  const [productlist, setProductlist] = useState<Product[]>([] as Product[]);
  useEffect(() => {
    const sampleData: Product[] = [
      {
        title: "샘플 상품 1",
        price: 1000,
        content: "이건 첫 번째 샘플 상품입니다.",
      },
      {
        title: "샘플 상품 2",
        price: 2000,
        content: "이건 두 번째 샘플 상품입니다.",
      },
      {
        title: "샘플 상품 3",
        price: 3000,
        content: "이건 세 번째 샘플 상품입니다.",
      },
    ];

    setProductlist(sampleData);
  }, []);

  const testfunc1 = async () => {
    normal_string = "바뀐 시스템 문자열";
    setBindString("바뀐 바인딩 문자열");
    alert(`bind_string : ${bind_string}`);
  };
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target;
    setProduct((prev) => {
      if (name == "price") {
        return { ...prev, price: Number(value) } as Product;
      }
      return { ...prev, [name]: value } as Product;
    });
  };
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성 검사
    if (!product.title || product.title.trim() === "") {
      alert("상품 이름을 입력해주세요.");
      return;
    }

    if (product?.title?.length < 3 || product?.title?.length > 200) {
      alert("제목은 3~200 자만 가능해요!!");
      return;
    }

    if (product?.price < 10 || product?.price > 10_000) {
      alert("상품 가격은 10~10,000 까지만 가능해요!!");
      return;
    }
  };

  return (
    <>
      <h2 className="justify-center">홈 화면이에요!</h2>
      <div>
        <div>제품 정보</div>
        <div>이름 : {product?.title}</div>
        <div>가격 : {product?.price}</div>
        <div>내용 : {product?.content}</div>
        <div></div>
      </div>
      <br />

      <div>
        <h2> 상품등록</h2>
        <form onSubmit={handlesubmit}>
          <div>
            <label> 이름: </label>
            <input
              value={product?.title}
              name="title"
              onChange={handleChange}
            />
            {!product?.title ? (
              <>
                <div> 이름을 입력해 주세요</div>
              </>
            ) : (
              <></>
            )}
            {!product?.title && <div>이름을 입력해주세요-2</div>}
          </div>
          <br />
          <div>
            <label>가격</label>
            <input
              value={product?.price}
              name="price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label> 내용: </label>
            <textarea
              value={product?.content}
              name="content"
              onChange={handleChange}
              rows={5}
            />
          </div>
          <button type="submit">저장</button>
        </form>
      </div>

      <div>
        <br />
        <ul>
          {samplenumber.map((item, index) => (
            <li>
              index:{index},item:{item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>상품 목록</h2>
        {productlist.length > 0 ? (
          <ul>
            {productlist.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - 가격: {item.price}원 / 내용:{" "}
                {item.content}
              </li>
            ))}
          </ul>
        ) : (
          <div>상품이 없어요 😢</div>
        )}
      </div>
    </>
  );
};

export default Home;
