import { useEffect, useState } from "react";

export default function Filter({ data, displayData, dispatch }) {
  return (
    <section className="w-2/12 p-1">
      <p className="text-lg font-bold">Filters</p>
      <div>
        <SizeFilter data={data} displayData={displayData} dispatch={dispatch} />
        <BrandFilter
          data={data}
          displayData={displayData}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
}

function BrandFilter({ data, displayData, dispatch }) {
  const [brandA, setBrandA] = useState(false);
  const [brandB, setBrandB] = useState(false);
  const [brandC, setBrandC] = useState(false);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    setFirst((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log(brandA, brandB, brandC);
    if (brandA === false && brandB === false && brandC == false) {
      dispatch({
        type: "CHANGE_RESULT",
        payload: data,
      });
    }
  }, [brandA, brandB, brandC]);

  useEffect(() => {
    if (first > 0) {
      if (brandA) {
        let newData = displayData.filter((item) => item.brand === "Brand A");
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      } else if (!brandA) {
        if (!(brandA === false && brandB === false && brandC === false)) {
          let newData = [];
          data.forEach((item) => {
            if (!item.brand === "Brand A" && !displayData.includes(item)) {
              newData.push(item);
            }
          });
          newData = [...displayData, ...newData];
          dispatch({
            type: "CHANGE_RESULT",
            payload: newData,
          });
        }
      }
    }
  }, [brandA]);

  useEffect(() => {
    if (first > 0) {
      if (brandB) {
        let newData = displayData.filter((item) => item.brand === "Brand B");
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      } else if (!brandB) {
        let newData = [];
        data.forEach((item) => {
          if (!item.brand === "Brand B" && !displayData.includes(item)) {
            newData.push(item);
          }
        });
        newData = [...displayData, ...newData];
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      }
    }
  }, [brandB]);

  return (
    <>
      <p className="font-bold">Based on Brand</p>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="S"
          checked={brandA}
          onChange={() => setBrandA((prev) => !prev)}
        />
        <label className="ml-1">Brand A</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="M"
          checked={brandB}
          onChange={() => setBrandB((prev) => !prev)}
        />
        <label className="ml-1">Brand B</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="M"
          checked={brandC}
          onChange={() => setBrandC((prev) => !prev)}
        />
        <label className="ml-1">Brand C</label>
      </div>
    </>
  );
}

function SizeFilter({ data, displayData, dispatch }) {
  const [smallSize, setSmallSize] = useState(false);
  const [mediumSize, setMediumSize] = useState(false);
  const [largeSize, setLargeSize] = useState(false);
  const [xlSize, setXlSize] = useState(false);
  const [first, setFirst] = useState(0);

  const handleSizeChange = (e) => {
    if (e.target.name === "S") setSmallSize((prev) => !prev);
    if (e.target.name === "M") setMediumSize((prev) => !prev);
    if (e.target.name === "L") setLargeSize((prev) => !prev);
    if (e.target.name === "XL") setXlSize((prev) => !prev);
  };

  useEffect(() => {
    setFirst((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (first > 0) {
      if (smallSize) {
        let newData = displayData.filter((item) => item.size.includes("S"));
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      } else if (!smallSize) {
        let newData = [];
        data.forEach((item) => {
          if (!item.size.includes("S") && !displayData.includes(item)) {
            newData.push(item);
          }
        });
        newData = [...displayData, ...newData];
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      }
    }
  }, [smallSize]);

  useEffect(() => {
    if (first > 0) {
      if (mediumSize) {
        let newData = displayData.filter((item) => item.size.includes("M"));
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      } else if (!mediumSize) {
        let newData = [];
        data.forEach((item) => {
          if (!item.size.includes("M") && !displayData.includes(item)) {
            newData.push(item);
          }
        });
        newData = [...displayData, ...newData];
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      }
    }
  }, [mediumSize]);

  useEffect(() => {
    if (first > 0) {
      if (largeSize) {
        let newData = displayData.filter((item) => item.size.includes("L"));
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      } else if (!largeSize) {
        let newData = [];
        data.forEach((item) => {
          if (!item.size.includes("L") && !displayData.includes(item)) {
            newData.push(item);
          }
        });
        newData = [...displayData, ...newData];
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      }
    }
  }, [largeSize]);

  useEffect(() => {
    if (first > 0) {
      if (xlSize) {
        let newData = displayData.filter((item) => item.size.includes("XL"));
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      } else if (!largeSize) {
        let newData = [];
        data.forEach((item) => {
          if (!item.size.includes("XL") && !displayData.includes(item)) {
            newData.push(item);
          }
        });
        newData = [...displayData, ...newData];
        dispatch({
          type: "CHANGE_RESULT",
          payload: newData,
        });
      }
    }
  }, [xlSize]);

  return (
    <>
      <p className="font-bold">Based on Size</p>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="S"
          checked={smallSize}
          onChange={handleSizeChange}
        />
        <label className="ml-1">S</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="M"
          checked={mediumSize}
          onChange={handleSizeChange}
        />
        <label className="ml-1">M</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="L"
          checked={largeSize}
          onChange={handleSizeChange}
        />
        <label className="ml-1">L</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="XL"
          checked={xlSize}
          onChange={handleSizeChange}
        />
        <label className="ml-1">XL</label>
      </div>
    </>
  );
}
