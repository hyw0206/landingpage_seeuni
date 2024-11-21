import BrandItem from "./BrandItem";

export default function BrandList() {

  const brandNumber = 9;
  return (
    <div>
      Brand List
      {
        Array(brandNumber).fill(0).map((_, idx) => {
          return (
            <BrandItem number={idx} key={idx} />
          )
        })
      }
    </div>
  )
}