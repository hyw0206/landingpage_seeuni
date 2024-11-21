export default function BrandItem({ number = NaN }) {
  // props Destructuring & default value set
  return (
    <div>
      Brand Item {number + 1}
    </div>
  )
}