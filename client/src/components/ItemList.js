import React from "react";

const ItemList = ({ listName, itemsMap }) => {
  return (
    <>
      <div class=" col s12">
        <ul class="collection">
          {itemsMap.map((item) => (
            <li class="collection-item" key={item.name}>
              <div>
                {item.name}
                <div class="secondary-content right-align">$ {item.amount}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemList;
