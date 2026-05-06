import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);
  //처음 값을 넣을때 의존성 변경을 감지해서 뜨는 것
  //주소가 바뀌는 것을 감지해서 뜨는 것, 새 배열 반환해서 불변성 유지
  useEffect(() => {
    console.log("useEffect실행");
  }, [items]);

  const addItem = () => {
    const newItem = prompt("추가할 아이템을 입력하세요:");
    if (newItem) {
      setItems((prevItem) => [...prevItem, newItem]);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem} className="border">
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
