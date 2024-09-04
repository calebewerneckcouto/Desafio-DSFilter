import { useContext, useEffect, useState } from "react";
import FilterCard from "../FilterCard";
import Listing from "../Listing";
import { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';
import { ContextListCount } from "../../utils/context-listing";


type QueryParams = {
    valueMin: number;
    valueMax: number;
}

export default function ListingBody() {
    const minPrice = 0;
    const maxPrice = Number.MAX_VALUE;

    const [queryParams, setQueryParams] = useState<QueryParams>({
        valueMin: minPrice,
        valueMax: maxPrice
    });

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const {setContextListCount} = useContext(ContextListCount);

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
        setProducts(newFilter);
        setContextListCount(newFilter.length);
    }, [queryParams]);

    function handleSearch(min: number, max: number) {
        const newMin = min;
        const newMax = max;
        setQueryParams({ valueMin: newMin || minPrice, valueMax: newMax || maxPrice });
    }

    return (
        <>
                <FilterCard onSearch={handleSearch} />
                <Listing products={products} />
        </>
    );
}