import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  onAddToWishList: (id: number) => void;
  totalPrice: number;
}

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          onAddToWishList={onAddToWishList}
          product={results[index]}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            onAddToWishList={onAddToWishList}
            product={product}
          />
        );
      })} */}
    </div>
  );
}
