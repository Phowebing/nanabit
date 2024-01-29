import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "@emotion/styled";
import CommunityTitle from "../../components/basic/CommunityTitle";
import { Pagination } from "antd";
import LowHighBt from "../../components/product/LowHighBt";
import {
  GridContainer,
  MealButton,
  PagiWarp,
  ProductWrap,
} from "../../styles/product/ProductGridStyle";
import { getProductPage } from "../../api/product/productApi";

const initState = {
  iproduct: 0,
  productNm: "",
  price: 0,
  rcFl: 0,
  popFl: 0,
  newFl: 0,
  reviewCnt: 0,
  likeProduct: 0,
  repPic: "",
};

const ProductLayout = () => {
  const [productData, setProductData] = useState([]);
  const [listProductData, setlistProductData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(16);
  const [serverData, setServerData] = useState(initState);

  useEffect(
    () => {
      fetchData(activeSubcategory);
    },
    [activeSubcategory],
    [currentPage],
  );

  const fetchData = subcategory => {
    getProductPage({
      productParam: {
        imiddle: subcategory,
        imain: 0,
        sortBy: 2,
        page: 1,
      },
      successFn,
      failFn,
      errorFn,
    });
  };

  const successFn = data => {
    console.log("successFn : ", data);
    setProductData(data);
    // setServerData(Array(data.products.length).fill(false));
  };
  const failFn = data => {
    console.log("failFn : ", data);
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const errorFn = data => {
    console.log("errorFn : ", data);
    alert("서버상태 불안정 그래서, 데모테스트했음.");
    setProductData(data);
    // setServerData(Array(data.products.length).fill(false));
  };

  const handleCheckboxChange = index => {
    setServerData(prevProductlist => {
      const updatedProduct = [...prevProductlist];
      updatedProduct[index] = !updatedProduct[index];
      return updatedProduct;
    });
  };

  const handleSubcategoryClick = subcategory => {
    setActiveSubcategory(subcategory);
    setCurrentPage(1);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const displayedProducts = productData.slice(startIndex, endIndex);

  return (
    <ProductWrap>
      <div>
        <div className="protitle">
          <CommunityTitle
            maintxt="이유식"
            // 이이이
            subtxt="배송 및 상품관련 공지사항을 확인해 주세요."
          />
        </div>

        <div>
          <MealButton
            onClick={() => handleSubcategoryClick(1)}
            active={activeSubcategory === 1}
          >
            중분류1
          </MealButton>
          <MealButton
            onClick={() => handleSubcategoryClick(2)}
            active={activeSubcategory === 2}
          >
            중분류2
          </MealButton>
          <MealButton
            onClick={() => handleSubcategoryClick(3)}
            active={activeSubcategory === 3}
          >
            중분류3
          </MealButton>
          <MealButton
            onClick={() => handleSubcategoryClick(4)}
            active={activeSubcategory === 4}
          >
            중분류4
          </MealButton>
        </div>

        <LowHighBt />

        <GridContainer itemsPerPage={itemsPerPage}>
          {productData.map(product => (
            <ProductCard
              key={product.iproduct}
              product={product}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </GridContainer>
        <PagiWarp>
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={productData.length}
            pageSize={itemsPerPage}
            className="pagination"
          />
        </PagiWarp>
      </div>
    </ProductWrap>
  );
};

export default ProductLayout;
