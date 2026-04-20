import { useMemo, useState } from "react";
import { PAGINATION } from "../constants";

export const usePagination = (
  items,
  itemsPerPage = PAGINATION.ITEMS_PER_PAGE,
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
      data: items.slice(startIndex, endIndex),
      totalPages,
    };
  }, [items, currentPage, itemsPerPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < paginatedData.totalPages) setCurrentPage(currentPage + 1);
  };

  return {
    paginatedData,
    currentPage,
    handlePreviousPage,
    handleNextPage,
  };
};
